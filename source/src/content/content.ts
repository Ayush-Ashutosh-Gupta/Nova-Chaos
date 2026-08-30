
// ChaosUI: Page Escape — Core physics & game engine
// Runs in the isolated world. Vanilla TS compiled to content.js.

interface ElementState {
  el: HTMLElement;
  origStyle: { [key: string]: string };
  x: number; // current px position
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  homeX: number;
  homeY: number;
  caught: boolean;
  origPosition: string;
  isAbsolute: boolean;
  dragOffsetX: number;
  dragOffsetY: number;
  isDragging: boolean;
  zIndex: string;
  fontSize: string;
  fontWeight: string;
  transform: string;
}

interface PageSize {
  w: number;
  h: number;
}

const CHAOS_MODE_KEY = '__chaos_ui_enabled__';
const CATCH_THRESHOLD = 30;
const REPULSION_RADIUS = 150;
const REPULSION_FORCE = 2.2;
const GRAVITY = 0.5;
const MAX_SPEED = 10;

const REPLACEABLE_SELECTORS = [
  'img',
  'h1,h2,h3',
  'button',
  'p',
  'div.card',
  'li',
  'input[type="text"]',
  'a.button',
  'h4,h5,h6'
].join(',');

let states: ElementState[] = [];
let enabled = false;
let rafId: number | null = null;
let lastTime = 0;
let mouseX = -1000;
let mouseY = -1000;
let isPointerDown = false;
let scoreBanner: HTMLDivElement | null = null;
let victoryBanner: HTMLDivElement | null = null;
let scaleMultiplier = 1;

function isContextValid(): boolean {
  return typeof chrome !== 'undefined' && chrome.runtime && !!chrome.runtime.id;
}

function log(msg: string): void {
  console.log('[ChaosUI]', msg);
}

// ---------- DOM Selection ----------
function collectElements(): ElementState[] {
  const nodeList = document.querySelectorAll(REPLACEABLE_SELECTORS);
  const collected: ElementState[] = [];
  const docWidth = document.documentElement.clientWidth;
  const docHeight = document.documentElement.clientHeight;

  nodeList.forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    // Skip small/empty elements
    const rect = node.getBoundingClientRect();
    if (rect.width < 8 || rect.height < 8) return;
    if (node.closest('script,style,noscript,iframe,canvas,svg')) return;
    if (node.dataset.chaosUi === 'true') return;

    const style = window.getComputedStyle(node);
    const pos = style.position;

    // Save original styles
    const origStyle: { [key: string]: string } = {
      position: style.position,
      left: node.style.left,
      top: node.style.top,
      right: node.style.right,
      bottom: node.style.bottom,
      margin: style.margin,
      transform: style.transform,
      zIndex: style.zIndex,
      width: node.style.width,
      height: node.style.height,
      display: style.display,
      visibility: style.visibility
    };

    const isAbsoluteOrFixed = pos === 'absolute' || pos === 'fixed';

    // Pick a random starting position within viewport
    const x = Math.random() * (docWidth - rect.width);
    const y = Math.random() * (docHeight - rect.height);

    // Assign fixed position
    node.dataset.chaosUi = 'true';
    node.style.position = 'fixed';
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.margin = '0';
    node.style.transform = '';
    node.style.zIndex = '2147483647';
    node.style.pointerEvents = 'auto';
    node.style.cursor = 'grab';
    node.style.transition = 'none';

    collected.push({
      el: node,
      origStyle,
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      w: rect.width,
      h: rect.height,
      homeX: rect.left,
      homeY: rect.top,
      caught: false,
      origPosition: pos,
      isAbsolute: isAbsoluteOrFixed,
      dragOffsetX: 0,
      dragOffsetY: 0,
      isDragging: false,
      zIndex: origStyle.zIndex,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      transform: origStyle.transform
    });
  });

  return collected;
}

// ---------- Physics Loop ----------
function updatePhysics(delta: number, viewportW: number, viewportH: number): boolean {
  let justCaught = false;

  for (const s of states) {
    if (s.caught) continue;

    // Apply gravity
    s.vy += GRAVITY * delta * 60;

    // --- Repulsion from mouse ---
    const dx = s.x + s.w / 2 - mouseX;
    const dy = s.y + s.h / 2 - mouseY;
    const dist = Math.hypot(dx, dy);
    if (dist < REPULSION_RADIUS && dist > 0.01) {
      const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS * REPULSION_FORCE * scaleMultiplier;
      const nx = dx / dist;
      const ny = dy / dist;
      s.vx += nx * force;
      s.vy += ny * force;
    }

    // If dragging, skip physics position update
    if (s.isDragging) {
      s.x = mouseX + s.dragOffsetX;
      s.y = mouseY + s.dragOffsetY;
      s.vx = 0;
      s.vy = 0;
    } else {
      // Integrate velocity
      s.x += s.vx;
      s.y += s.vy;

      // Clamp speed
      const speed = Math.hypot(s.vx, s.vy);
      if (speed > MAX_SPEED * scaleMultiplier) {
        const factor = (MAX_SPEED * scaleMultiplier) / speed;
        s.vx *= factor;
        s.vy *= factor;
      }

      // Boundary collision with restitution
      if (s.x <= 0) {
        s.x = 0;
        s.vx = Math.abs(s.vx) * 0.85;
      }
      if (s.x + s.w >= viewportW) {
        s.x = viewportW - s.w;
        s.vx = -Math.abs(s.vx) * 0.85;
      }
      if (s.y <= 0) {
        s.y = 0;
        s.vy = Math.abs(s.vy) * 0.85;
      }
      if (s.y + s.h >= viewportH) {
        s.y = viewportH - s.h;
        s.vy = -Math.abs(s.vy) * 0.85;
      }
    }

    // Apply to element
    s.el.style.left = `${s.x}px`;
    s.el.style.top = `${s.y}px`;

    // --- Check if near && not dragging → snap home ---
    if (!s.isDragging && Math.abs(s.x - s.homeX) <= CATCH_THRESHOLD && Math.abs(s.y - s.homeY) <= CATCH_THRESHOLD) {
      s.caught = true;
      s.el.style.left = `${s.homeX}px`;
      s.el.style.top = `${s.homeY}px`;
      s.el.style.cursor = 'default';
      s.el.style.filter = 'blur(0px)';
      s.el.style.opacity = '1';
      s.el.classList.add('chaos-caught');
      justCaught = true;
    } else if (!s.isDragging) {
      s.el.style.cursor = 'grab';
    }
  }

  return justCaught;
}

// ---------- Rendering ----------
function createScoreBanner(total: number): HTMLDivElement {
  const banner = document.createElement('div');
  banner.id = 'chaos-ui-score-banner';
  banner.style.cssText = `
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    background: rgba(17, 24, 39, 0.92);
    color: #fff;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 999px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: 8px;
    backdrop-filter: blur(8px);
  `;
  banner.innerHTML = `🎯 <span id="chaos-caught-count">0</span> / ${total} Caught`;
  document.body.appendChild(banner);
  return banner;
}

function updateScore(): void {
  if (!scoreBanner) return;
  const count = states.filter((s) => s.caught).length;
  const span = scoreBanner.querySelector('#chaos-caught-count');
  if (span) span.textContent = String(count);

  // Victory check
  if (count === states.length && states.length > 0) {
    showVictory();
  }
}

function showVictory(): void {
  if (victoryBanner || !scoreBanner) return;
  victoryBanner = document.createElement('div');
  victoryBanner.id = 'chaos-ui-victory-banner';
  victoryBanner.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2147483647;
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: #fff;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 18px;
    font-weight: 800;
    padding: 20px 36px;
    border-radius: 20px;
    box-shadow: 0 12px 40px rgba(22, 163, 74, 0.4);
    animation: chaosPop 0.5s ease-out;
    pointer-events: none;
  `;
  victoryBanner.innerHTML = '🎉 All elements caught! Order restored!';
  document.body.appendChild(victoryBanner);

  setTimeout(() => {
    if (victoryBanner?.parentNode) victoryBanner.parentNode.removeChild(victoryBanner);
    victoryBanner = null;
  }, 4000);
}

// Inject keyframes
function injectKeyframes(): void {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes chaosPop {
      0% { transform: translateX(-50%) scale(0.5); opacity: 0; }
      70% { transform: translateX(-50%) scale(1.1); opacity: 1; }
      100% { transform: translateX(-50%) scale(1); opacity: 1; }
    }
    .chaos-caught {
      outline: 2px solid #22c55e !important;
      outline-offset: 2px;
      border-radius: 4px;
      transition: outline 0.3s, background-color 0.3s;
    }
  `;
  document.head.appendChild(style);
}

// ---------- Event Handlers ----------
function handleMouseMove(e: MouseEvent): void {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function handlePointerDown(e: PointerEvent): void {
  isPointerDown = true;
  const target = e.target as HTMLElement;
  const state = states.find((s) => s.el === target || s.el.contains(target));
  if (state && !state.caught) {
    state.isDragging = true;
    state.dragOffsetX = state.x - e.clientX;
    state.dragOffsetY = state.y - e.clientY;
    state.el.style.cursor = 'grabbing';
    state.el.style.zIndex = '2147483647';
    e.preventDefault();
  }
}

function handlePointerMove(e: PointerEvent): void {
  mouseX = e.clientX;
  mouseY = e.clientY;
  // Update drag position
  const dragging = states.find((s) => s.isDragging);
  if (dragging) {
    dragging.x = e.clientX + dragging.dragOffsetX;
    dragging.y = e.clientY + dragging.dragOffsetY;
    dragging.el.style.left = `${dragging.x}px`;
    dragging.el.style.top = `${dragging.y}px`;
  }
}

function handlePointerUp(e: PointerEvent): void {
  isPointerDown = false;
  const state = states.find((s) => s.isDragging);
  if (state) {
    state.isDragging = false;
    state.el.style.cursor = 'grab';

    // Check snap
    if (Math.abs(state.x - state.homeX) <= CATCH_THRESHOLD && Math.abs(state.y - state.homeY) <= CATCH_THRESHOLD) {
      state.caught = true;
      state.el.style.left = `${state.homeX}px`;
      state.el.style.top = `${state.homeY}px`;
      state.el.classList.add('chaos-caught');
      updateScore();
    }
  }
}

function handleResize(): void {
  states.forEach((s) => {
    if (s.x + s.w > window.innerWidth) s.x = window.innerWidth - s.w;
    if (s.y + s.h > window.innerHeight) s.y = window.innerHeight - s.h;
  });
}

// ---------- Main loop ----------
function tick(time: number): void {
  if (!enabled) return;
  const delta = Math.min((time - lastTime) / 1000, 0.05);
  lastTime = time;

  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  const justCaught = updatePhysics(delta, viewportW, viewportH);
  if (justCaught) updateScore();

  rafId = requestAnimationFrame(tick);
}

// ---------- Public control ----------
function enableChaos(): void {
  if (enabled) return;
  log('Activating chaos...');

  if (!document.querySelector('style[data-chaos-ui]')) {
    const s = document.createElement('style');
    s.dataset.chaosUi = 'true';
    document.head.appendChild(s);
  }
  injectKeyframes();

  states = collectElements();

  if (states.length === 0) {
    log('No elements found to manipulate — nothing to do.');
  }

  scaleMultiplier = Math.min(1 + states.length / 100, 3);
  log(`Element count: ${states.length}, intensity: ${scaleMultiplier.toFixed(2)}x`);

  // Create UI
  scoreBanner = createScoreBanner(states.length);

  // Attach listeners
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('pointerdown', handlePointerDown);
  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', handlePointerUp);
  window.addEventListener('resize', handleResize);

  // Start loop
  lastTime = performance.now();
  enabled = true;
  rafId = requestAnimationFrame(tick);
  updateScore();
}

function disableChaos(): void {
  if (!enabled) return;
  log('Restoring page...');

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  enabled = false;

  // Remove banners
  if (scoreBanner?.parentNode) scoreBanner.parentNode.removeChild(scoreBanner);
  scoreBanner = null;
  if (victoryBanner?.parentNode) victoryBanner.parentNode.removeChild(victoryBanner);
  victoryBanner = null;

  // Remove listeners
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('pointerdown', handlePointerDown);
  window.removeEventListener('pointermove', handlePointerMove);
  window.removeEventListener('pointerup', handlePointerUp);
  window.removeEventListener('resize', handleResize);

  // Restore each element
  states.forEach((s) => {
    const el = s.el;
    // Restore original styles
    if (s.origStyle) {
      el.style.position = s.origStyle.position;
      el.style.left = s.origStyle.left;
      el.style.top = s.origStyle.top;
      el.style.right = s.origStyle.right;
      el.style.bottom = s.origStyle.bottom;
      el.style.margin = s.origStyle.margin;
      el.style.transform = s.origStyle.transform;
      el.style.zIndex = s.origStyle.zIndex;
      el.style.width = s.origStyle.width;
      el.style.height = s.origStyle.height;
      el.style.display = s.origStyle.display;
      el.style.visibility = s.origStyle.visibility;
      el.style.pointerEvents = '';
      el.style.cursor = '';
      el.style.transition = '';
      el.style.filter = '';
      el.style.opacity = '';
      el.classList.remove('chaos-caught');
    }
    delete el.dataset.chaosUi;
  });

  states = [];

  // Remove injected style
  const injectedStyles = document.querySelectorAll('style[data-chaos-ui]');
  injectedStyles.forEach((s) => s.parentNode?.removeChild(s));
}

function resetChaos(): void {
  if (!enabled) return;
  // Move all elements back home instantly
  states.forEach((s) => {
    s.x = s.homeX;
    s.y = s.homeY;
    s.vx = 0;
    s.vy = 0;
    s.caught = true;
    s.isDragging = false;
    s.el.style.left = `${s.homeX}px`;
    s.el.style.top = `${s.homeY}px`;
    s.el.style.cursor = 'default';
    s.el.classList.add('chaos-caught');
  });
  updateScore();
}

function getState(): { enabled: boolean; caught: number; total: number } {
  return {
    enabled,
    caught: states.filter((s) => s.caught).length,
    total: states.length
  };
}

// ---------- Message Handling ----------
function handleMessage(msg: any, sender: any, sendResponse: (r: any) => void): boolean {
  if (!isContextValid()) return false;

  switch (msg?.type) {
    case 'CHAOS_ENABLE':
      enableChaos();
      sendResponse(getState());
      break;
    case 'CHAOS_DISABLE':
      disableChaos();
      sendResponse(getState());
      break;
    case 'CHAOS_RESET':
      resetChaos();
      sendResponse(getState());
      break;
    case 'CHAOS_GET_STATE':
      sendResponse(getState());
      break;
    default:
      sendResponse({ error: 'Unknown message type' });
  }
  return true;
}

// Register listener
if (typeof chrome !== 'undefined' && chrome.runtime?.onMessage) {
  chrome.runtime.onMessage.addListener(handleMessage);
  log('Content script loaded — listening for ChaosUI commands.');
} else {
  console.warn('[ChaosUI] chrome.runtime not available — content script may be injected in MAIN world.');
}

// Export nothing — this is a script
export {};
