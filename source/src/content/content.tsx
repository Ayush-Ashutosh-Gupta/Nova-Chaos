
// ChaosUI: Page Escape - In-Page 60FPS Physics and Interactive Catch Game Engine

interface ChaosConfig {
  gravity: number;
  repulsionForce: number;
  repulsionRadius: number;
  maxElements: number;
  soundEnabled: boolean;
  intensityMultiplier: number;
  preset: string;
}

interface ChaosElementData {
  el: HTMLElement;
  ghostEl: HTMLElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  width: number;
  height: number;
  isCaught: boolean;
  isDragging: boolean;
  origStyles: {
    position: string;
    left: string;
    top: string;
    width: string;
    height: string;
    zIndex: string;
    boxShadow: string;
    transform: string;
    transition: string;
    pointerEvents: string;
    userSelect: string;
    cursor: string;
    border: string;
  };
}

class ChaosEngine {
  private active: boolean = false;
  private elements: ChaosElementData[] = [];
  private animFrameId: number | null = null;
  private mouseX: number = -1000;
  private mouseY: number = -1000;
  private activeDragElement: ChaosElementData | null = null;
  private dragOffsetX: number = 0;
  private dragOffsetY: number = 0;
  private lastDragX: number = 0;
  private lastDragY: number = 0;
  private startTime: number = 0;
  private timerInterval: number | null = null;
  private hudContainer: HTMLElement | null = null;
  private audioCtx: AudioContext | null = null;
  private config: ChaosConfig = {
    gravity: 0.25,
    repulsionForce: 14,
    repulsionRadius: 160,
    maxElements: 35,
    soundEnabled: true,
    intensityMultiplier: 1.0,
    preset: 'balanced',
  };

  constructor() {
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.loop = this.loop.bind(this);
  }

  public init() {
    // Listen for extension events
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      if (!chrome.runtime?.id) return;

      if (message.type === 'CHAOS_START') {
        if (message.payload?.config) {
          this.config = { ...this.config, ...message.payload.config };
        }
        this.start();
        sendResponse({ success: true, state: this.getState() });
      } else if (message.type === 'CHAOS_STOP' || message.type === 'CHAOS_RESET') {
        this.stop();
        sendResponse({ success: true, state: this.getState() });
      } else if (message.type === 'CHAOS_GET_STATE') {
        sendResponse({ success: true, state: this.getState(), config: this.config });
      } else if (message.type === 'CHAOS_UPDATE_CONFIG') {
        if (message.payload?.config) {
          this.config = { ...this.config, ...message.payload.config };
        }
        sendResponse({ success: true, state: this.getState() });
      }
      return true;
    });
  }

  private initAudio() {
    if (!this.config.soundEnabled) return;
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    } catch {
      // Audio context might fail in silent policy contexts
    }
  }

  private playTone(freq: number, type: OscillatorType = 'sine', duration: number = 0.1, gainVal: number = 0.15) {
    if (!this.config.soundEnabled || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // Ignore audio synthesis errors
    }
  }

  private playSnapSound() {
    this.playTone(587.33, 'triangle', 0.15, 0.2); // D5
    setTimeout(() => this.playTone(880, 'sine', 0.2, 0.25), 60); // A5
  }

  private playVictoryJingle() {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.3, 0.2), idx * 120);
    });
  }

  public start() {
    if (this.active) return;
    this.initAudio();
    this.active = true;
    this.startTime = Date.now();

    // Collect DOM elements
    this.collectElements();

    if (this.elements.length === 0) {
      this.stop();
      return;
    }

    // Attach interaction listeners
    window.addEventListener('mousemove', this.handleMouseMove, { passive: true });
    window.addEventListener('pointerdown', this.handlePointerDown);
    window.addEventListener('pointermove', this.handlePointerMove);
    window.addEventListener('pointerup', this.handlePointerUp);

    // Create In-Game Top HUD
    this.createHud();

    // Launch physics loop
    this.animFrameId = requestAnimationFrame(this.loop);
  }

  private collectElements() {
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(
        'img, h1, h2, h3, button, a, p, blockquote, [role="button"], article, .card'
      )
    );

    const validElements: HTMLElement[] = [];
    for (const el of candidates) {
      // Exclude HUD or ghost elements
      if (el.closest('#chaos-ui-hud-root') || el.classList.contains('chaos-ghost-target')) continue;

      const rect = el.getBoundingClientRect();
      // Filter out hidden or oversized wrapper elements
      if (
        rect.width > 24 &&
        rect.height > 18 &&
        rect.width < window.innerWidth * 0.85 &&
        rect.height < window.innerHeight * 0.85 &&
        rect.top >= -50 &&
        rect.bottom <= window.innerHeight + 500
      ) {
        validElements.push(el);
      }
    }

    // Limit elements to max configured
    const chosen = validElements.slice(0, this.config.maxElements);

    // Detach and transform into physics particles
    this.elements = chosen.map((el) => {
      const rect = el.getBoundingClientRect();
      const origStyles = {
        position: el.style.position,
        left: el.style.left,
        top: el.style.top,
        width: el.style.width,
        height: el.style.height,
        zIndex: el.style.zIndex,
        boxShadow: el.style.boxShadow,
        transform: el.style.transform,
        transition: el.style.transition,
        pointerEvents: el.style.pointerEvents,
        userSelect: el.style.userSelect,
        cursor: el.style.cursor,
        border: el.style.border,
      };

      // Create Holographic Landing Silhouette Target
      const ghost = document.createElement('div');
      ghost.className = 'chaos-ghost-target';
      ghost.style.position = 'absolute';
      ghost.style.left = `${rect.left + window.scrollX}px`;
      ghost.style.top = `${rect.top + window.scrollY}px`;
      ghost.style.width = `${rect.width}px`;
      ghost.style.height = `${rect.height}px`;
      ghost.style.border = '2px dashed #ec4899';
      ghost.style.borderRadius = '8px';
      ghost.style.backgroundColor = 'rgba(236, 72, 153, 0.08)';
      ghost.style.pointerEvents = 'none';
      ghost.style.zIndex = '999980';
      ghost.style.boxShadow = '0 0 12px rgba(236, 72, 153, 0.3)';
      ghost.style.transition = 'all 0.3s ease';
      document.body.appendChild(ghost);

      // Give initial erratic burst
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 8;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 3;

      // Lock fixed dimensions and make fixed
      el.style.position = 'fixed';
      el.style.left = `${rect.left}px`;
      el.style.top = `${rect.top}px`;
      el.style.width = `${rect.width}px`;
      el.style.height = `${rect.height}px`;
      el.style.zIndex = '999990';
      el.style.transition = 'none';
      el.style.cursor = 'grab';
      el.style.userSelect = 'none';
      el.style.boxShadow = '0 10px 25px -5px rgba(236, 72, 153, 0.4), 0 8px 10px -6px rgba(99, 102, 241, 0.4)';

      return {
        el,
        ghostEl: ghost,
        x: rect.left,
        y: rect.top,
        vx,
        vy,
        homeX: rect.left,
        homeY: rect.top,
        width: rect.width,
        height: rect.height,
        isCaught: false,
        isDragging: false,
        origStyles,
      };
    });
  }

  private handleMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  private handlePointerDown(e: PointerEvent) {
    if (!this.active) return;
    const target = (e.target as HTMLElement)?.closest('body *') as HTMLElement;
    if (!target) return;

    const match = this.elements.find((item) => item.el === target || item.el.contains(target));
    if (match && !match.isCaught) {
      this.activeDragElement = match;
      match.isDragging = true;
      match.el.style.cursor = 'grabbing';
      match.el.style.zIndex = '999999';
      this.dragOffsetX = e.clientX - match.x;
      this.dragOffsetY = e.clientY - match.y;
      this.lastDragX = e.clientX;
      this.lastDragY = e.clientY;
      this.playTone(320, 'sine', 0.05, 0.1);
    }
  }

  private handlePointerMove(e: PointerEvent) {
    if (this.activeDragElement) {
      this.activeDragElement.x = e.clientX - this.dragOffsetX;
      this.activeDragElement.y = e.clientY - this.dragOffsetY;
      this.activeDragElement.vx = (e.clientX - this.lastDragX) * 0.8;
      this.activeDragElement.vy = (e.clientY - this.lastDragY) * 0.8;
      this.lastDragX = e.clientX;
      this.lastDragY = e.clientY;
    }
  }

  private handlePointerUp(_e: PointerEvent) {
    if (this.activeDragElement) {
      const item = this.activeDragElement;
      item.isDragging = false;
      item.el.style.cursor = 'grab';
      this.activeDragElement = null;

      // Check distance to original home target (Snap Threshold: 35px)
      const distToHome = Math.hypot(item.x - item.homeX, item.y - item.homeY);
      if (distToHome < 38) {
        this.snapElement(item);
      }
    }
  }

  private snapElement(item: ChaosElementData) {
    item.isCaught = true;
    item.x = item.homeX;
    item.y = item.homeY;
    item.vx = 0;
    item.vy = 0;

    // Visual feedback
    item.el.style.left = `${item.homeX}px`;
    item.el.style.top = `${item.homeY}px`;
    item.el.style.boxShadow = '0 0 25px rgba(16, 185, 129, 0.8), 0 0 10px rgba(52, 211, 153, 0.9)';
    item.el.style.border = '2px solid #10b981';
    item.el.style.cursor = 'default';
    item.el.style.transform = 'scale(1.03)';
    setTimeout(() => {
      item.el.style.transform = 'scale(1)';
    }, 200);

    // Update ghost silhouette
    item.ghostEl.style.borderColor = '#10b981';
    item.ghostEl.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
    item.ghostEl.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.5)';

    this.playSnapSound();
    this.updateHud();

    // Check Victory
    const allCaught = this.elements.every((el) => el.isCaught);
    if (allCaught && this.elements.length > 0) {
      this.triggerVictory();
    }
  }

  private triggerVictory() {
    const elapsed = Math.round((Date.now() - this.startTime) / 1000);
    this.playVictoryJingle();

    // Check high score
    chrome.storage.local.get(['chaosBestTime'], (res) => {
      if (!res.chaosBestTime || elapsed < res.chaosBestTime) {
        chrome.storage.local.set({ chaosBestTime: elapsed });
      }
    });

    // Display Victory Banner Overlay
    const victoryOverlay = document.createElement('div');
    victoryOverlay.id = 'chaos-victory-banner';
    victoryOverlay.style.position = 'fixed';
    victoryOverlay.style.top = '50%';
    victoryOverlay.style.left = '50%';
    victoryOverlay.style.transform = 'translate(-50%, -50%) scale(0.9)';
    victoryOverlay.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(49, 16, 66, 0.95))';
    victoryOverlay.style.border = '2px solid #10b981';
    victoryOverlay.style.boxShadow = '0 0 50px rgba(16, 185, 129, 0.5), 0 20px 40px rgba(0,0,0,0.8)';
    victoryOverlay.style.borderRadius = '24px';
    victoryOverlay.style.padding = '32px 48px';
    victoryOverlay.style.color = '#ffffff';
    victoryOverlay.style.textAlign = 'center';
    victoryOverlay.style.zIndex = '9999999';
    victoryOverlay.style.fontFamily = 'system-ui, sans-serif';
    victoryOverlay.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    victoryOverlay.innerHTML = `
      <div style="font-size: 42px; margin-bottom: 8px;">🎉⚡🏆</div>
      <h2 style="font-size: 26px; font-weight: 800; margin: 0 0 6px 0; background: linear-gradient(to right, #34d399, #6ee7b7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        REALITY RESTABILIZED!
      </h2>
      <p style="font-size: 14px; color: #cbd5e1; margin: 0 0 20px 0;">
        All ${this.elements.length} escaped DOM elements caught in <strong style="color: #38bdf8;">${elapsed}s</strong>.
      </p>
      <button id="chaos-victory-close-btn" style="
        background: linear-gradient(135deg, #10b981, #059669);
        border: none;
        color: white;
        font-weight: 700;
        font-size: 14px;
        padding: 10px 24px;
        border-radius: 12px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
      ">Return to Normal Webpage</button>
    `;
    document.body.appendChild(victoryOverlay);

    setTimeout(() => {
      victoryOverlay.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);

    const closeBtn = document.getElementById('chaos-victory-close-btn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        victoryOverlay.remove();
        this.stop();
      };
    }
  }

  private loop() {
    if (!this.active) return;

    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    const repulsionRadius = this.config.repulsionRadius;
    const repulsionForce = this.config.repulsionForce;
    const gravity = this.config.gravity;

    // Physics dynamic scaling based on element count
    const elementCountMultiplier = Math.min(1.8, 1.0 + this.elements.length * 0.02);

    for (const item of this.elements) {
      if (item.isCaught || item.isDragging) continue;

      // 1. Mouse Repulsion Calculation
      const centerX = item.x + item.width / 2;
      const centerY = item.y + item.height / 2;
      const dx = centerX - this.mouseX;
      const dy = centerY - this.mouseY;
      const dist = Math.hypot(dx, dy);

      if (dist < repulsionRadius && dist > 1) {
        const factor = ((repulsionRadius - dist) / repulsionRadius) * repulsionForce * elementCountMultiplier;
        item.vx += (dx / dist) * factor * 0.45;
        item.vy += (dy / dist) * factor * 0.45;
      }

      // 2. Gravity
      item.vy += gravity;

      // 3. Air Resistance Friction
      item.vx *= 0.985;
      item.vy *= 0.985;

      // 4. Update Position
      item.x += item.vx;
      item.y += item.vy;

      // 5. Viewport Boundary Collisions & Restitution
      const restitution = 0.72; // Bounce elasticity
      if (item.x < 0) {
        item.x = 0;
        item.vx = -item.vx * restitution;
      } else if (item.x + item.width > innerWidth) {
        item.x = innerWidth - item.width;
        item.vx = -item.vx * restitution;
      }

      if (item.y < 0) {
        item.y = 0;
        item.vy = -item.vy * restitution;
      } else if (item.y + item.height > innerHeight) {
        item.y = innerHeight - item.height;
        item.vy = -item.vy * restitution;
      }

      // 6. Proximity Snap Assist (if element slowly coasts over its original slot)
      const distToHome = Math.hypot(item.x - item.homeX, item.y - item.homeY);
      if (distToHome < 30 && Math.hypot(item.vx, item.vy) < 2.0) {
        this.snapElement(item);
        continue;
      }

      // 7. Apply Style Position
      item.el.style.left = `${item.x}px`;
      item.el.style.top = `${item.y}px`;
    }

    this.animFrameId = requestAnimationFrame(this.loop);
  }

  private createHud() {
    if (this.hudContainer) this.hudContainer.remove();

    this.hudContainer = document.createElement('div');
    this.hudContainer.id = 'chaos-ui-hud-root';
    this.hudContainer.style.position = 'fixed';
    this.hudContainer.style.top = '16px';
    this.hudContainer.style.left = '50%';
    this.hudContainer.style.transform = 'translateX(-50%)';
    this.hudContainer.style.zIndex = '9999999';
    this.hudContainer.style.fontFamily = 'system-ui, sans-serif';
    this.hudContainer.style.pointerEvents = 'auto';

    document.body.appendChild(this.hudContainer);
    this.updateHud();

    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = window.setInterval(() => {
      this.updateHud();
    }, 1000);
  }

  private updateHud() {
    if (!this.hudContainer) return;
    const caught = this.elements.filter((e) => e.isCaught).length;
    const total = this.elements.length;
    const elapsed = Math.round((Date.now() - this.startTime) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    const timeFormatted = `${m}:${s < 10 ? '0' : ''}${s}`;

    this.hudContainer.innerHTML = `
      <div style="
        background: rgba(15, 23, 42, 0.92);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(236, 72, 153, 0.4);
        box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 20px rgba(236, 72, 153, 0.2);
        padding: 8px 18px;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        gap: 16px;
        color: #f8fafc;
        font-size: 13px;
        user-select: none;
      ">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #ec4899; box-shadow: 0 0 8px #ec4899;"></span>
          <strong style="font-weight: 700; letter-spacing: 0.5px; color: #f472b6;">CHAOS ESCAPE</strong>
        </div>

        <div style="height: 14px; width: 1px; background: rgba(255, 255, 255, 0.2);"></div>

        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="color: #94a3b8; font-size: 11px; text-transform: uppercase;">Caught:</span>
          <span style="font-weight: 800; font-family: monospace; color: #34d399; font-size: 14px;">${caught} / ${total}</span>
        </div>

        <div style="height: 14px; width: 1px; background: rgba(255, 255, 255, 0.2);"></div>

        <div style="font-family: monospace; color: #38bdf8; font-weight: 700;">
          ⏱️ ${timeFormatted}
        </div>

        <button id="chaos-hud-stop-btn" style="
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.2s;
        ">Stop</button>
      </div>
    `;

    const stopBtn = document.getElementById('chaos-hud-stop-btn');
    if (stopBtn) {
      stopBtn.onclick = () => this.stop();
    }
  }

  public stop() {
    this.active = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    // Remove HUD & Victory overlays
    if (this.hudContainer) {
      this.hudContainer.remove();
      this.hudContainer = null;
    }
    const victory = document.getElementById('chaos-victory-banner');
    if (victory) victory.remove();

    // Remove ghost targets
    document.querySelectorAll('.chaos-ghost-target').forEach((el) => el.remove());

    // Restore original styles on all manipulated elements
    for (const item of this.elements) {
      const orig = item.origStyles;
      item.el.style.position = orig.position;
      item.el.style.left = orig.left;
      item.el.style.top = orig.top;
      item.el.style.width = orig.width;
      item.el.style.height = orig.height;
      item.el.style.zIndex = orig.zIndex;
      item.el.style.boxShadow = orig.boxShadow;
      item.el.style.transform = orig.transform;
      item.el.style.transition = orig.transition;
      item.el.style.pointerEvents = orig.pointerEvents;
      item.el.style.userSelect = orig.userSelect;
      item.el.style.cursor = orig.cursor;
      item.el.style.border = orig.border;
    }
    this.elements = [];

    // Remove window event listeners
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('pointerdown', this.handlePointerDown);
    window.removeEventListener('pointermove', this.handlePointerMove);
    window.removeEventListener('pointerup', this.handlePointerUp);
  }

  public getState() {
    const caught = this.elements.filter((e) => e.isCaught).length;
    const total = this.elements.length;
    const escaped = total - caught;
    const timeElapsed = this.active ? Math.round((Date.now() - this.startTime) / 1000) : 0;
    return {
      isActive: this.active,
      totalElements: total,
      caughtElements: caught,
      escapedElements: escaped,
      timeElapsed,
      isWon: total > 0 && caught === total,
    };
  }
}

// Global Singleton to ensure one active instance per tab
const engine = new ChaosEngine();
engine.init();

export {};
