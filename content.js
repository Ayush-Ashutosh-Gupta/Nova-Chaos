(()=>{var p=class{active=!1;elements=[];animFrameId=null;mouseX=-1e3;mouseY=-1e3;activeDragElement=null;dragOffsetX=0;dragOffsetY=0;lastDragX=0;lastDragY=0;startTime=0;timerInterval=null;hudContainer=null;audioCtx=null;config={gravity:.25,repulsionForce:14,repulsionRadius:160,maxElements:35,soundEnabled:!0,intensityMultiplier:1,preset:"balanced"};constructor(){this.handleMouseMove=this.handleMouseMove.bind(this),this.handlePointerDown=this.handlePointerDown.bind(this),this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.loop=this.loop.bind(this)}init(){chrome.runtime.onMessage.addListener((t,e,n)=>{var s,o,r;if((s=chrome.runtime)!=null&&s.id)return t.type==="CHAOS_START"?((o=t.payload)!=null&&o.config&&(this.config={...this.config,...t.payload.config}),this.start(),n({success:!0,state:this.getState()})):t.type==="CHAOS_STOP"||t.type==="CHAOS_RESET"?(this.stop(),n({success:!0,state:this.getState()})):t.type==="CHAOS_GET_STATE"?n({success:!0,state:this.getState(),config:this.config}):t.type==="CHAOS_UPDATE_CONFIG"&&((r=t.payload)!=null&&r.config&&(this.config={...this.config,...t.payload.config}),n({success:!0,state:this.getState()})),!0})}initAudio(){if(this.config.soundEnabled)try{if(!this.audioCtx){let t=window.AudioContext||window.webkitAudioContext;this.audioCtx=new t}this.audioCtx.state==="suspended"&&this.audioCtx.resume()}catch{}}playTone(t,e="sine",n=.1,s=.15){if(!(!this.config.soundEnabled||!this.audioCtx))try{let o=this.audioCtx.createOscillator(),r=this.audioCtx.createGain();o.type=e,o.frequency.setValueAtTime(t,this.audioCtx.currentTime),r.gain.setValueAtTime(s,this.audioCtx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+n),o.connect(r),r.connect(this.audioCtx.destination),o.start(),o.stop(this.audioCtx.currentTime+n)}catch{}}playSnapSound(){this.playTone(587.33,"triangle",.15,.2),setTimeout(()=>this.playTone(880,"sine",.2,.25),60)}playVictoryJingle(){[523.25,659.25,783.99,1046.5].forEach((e,n)=>{setTimeout(()=>this.playTone(e,"triangle",.3,.2),n*120)})}start(){if(!this.active){if(this.initAudio(),this.active=!0,this.startTime=Date.now(),this.collectElements(),this.elements.length===0){this.stop();return}window.addEventListener("mousemove",this.handleMouseMove,{passive:!0}),window.addEventListener("pointerdown",this.handlePointerDown),window.addEventListener("pointermove",this.handlePointerMove),window.addEventListener("pointerup",this.handlePointerUp),this.createHud(),this.animFrameId=requestAnimationFrame(this.loop)}}collectElements(){let t=Array.from(document.querySelectorAll('img, h1, h2, h3, button, a, p, blockquote, [role="button"], article, .card')),e=[];for(let s of t){if(s.closest("#chaos-ui-hud-root")||s.classList.contains("chaos-ghost-target"))continue;let o=s.getBoundingClientRect();o.width>24&&o.height>18&&o.width<window.innerWidth*.85&&o.height<window.innerHeight*.85&&o.top>=-50&&o.bottom<=window.innerHeight+500&&e.push(s)}let n=e.slice(0,this.config.maxElements);this.elements=n.map(s=>{let o=s.getBoundingClientRect(),r={position:s.style.position,left:s.style.left,top:s.style.top,width:s.style.width,height:s.style.height,zIndex:s.style.zIndex,boxShadow:s.style.boxShadow,transform:s.style.transform,transition:s.style.transition,pointerEvents:s.style.pointerEvents,userSelect:s.style.userSelect,cursor:s.style.cursor,border:s.style.border},i=document.createElement("div");i.className="chaos-ghost-target",i.style.position="absolute",i.style.left=`${o.left+window.scrollX}px`,i.style.top=`${o.top+window.scrollY}px`,i.style.width=`${o.width}px`,i.style.height=`${o.height}px`,i.style.border="2px dashed #ec4899",i.style.borderRadius="8px",i.style.backgroundColor="rgba(236, 72, 153, 0.08)",i.style.pointerEvents="none",i.style.zIndex="999980",i.style.boxShadow="0 0 12px rgba(236, 72, 153, 0.3)",i.style.transition="all 0.3s ease",document.body.appendChild(i);let a=Math.random()*Math.PI*2,h=4+Math.random()*8,d=Math.cos(a)*h,c=Math.sin(a)*h-3;return s.style.position="fixed",s.style.left=`${o.left}px`,s.style.top=`${o.top}px`,s.style.width=`${o.width}px`,s.style.height=`${o.height}px`,s.style.zIndex="999990",s.style.transition="none",s.style.cursor="grab",s.style.userSelect="none",s.style.boxShadow="0 10px 25px -5px rgba(236, 72, 153, 0.4), 0 8px 10px -6px rgba(99, 102, 241, 0.4)",{el:s,ghostEl:i,x:o.left,y:o.top,vx:d,vy:c,homeX:o.left,homeY:o.top,width:o.width,height:o.height,isCaught:!1,isDragging:!1,origStyles:r}})}handleMouseMove(t){this.mouseX=t.clientX,this.mouseY=t.clientY}handlePointerDown(t){var s;if(!this.active)return;let e=(s=t.target)==null?void 0:s.closest("body *");if(!e)return;let n=this.elements.find(o=>o.el===e||o.el.contains(e));n&&!n.isCaught&&(this.activeDragElement=n,n.isDragging=!0,n.el.style.cursor="grabbing",n.el.style.zIndex="999999",this.dragOffsetX=t.clientX-n.x,this.dragOffsetY=t.clientY-n.y,this.lastDragX=t.clientX,this.lastDragY=t.clientY,this.playTone(320,"sine",.05,.1))}handlePointerMove(t){this.activeDragElement&&(this.activeDragElement.x=t.clientX-this.dragOffsetX,this.activeDragElement.y=t.clientY-this.dragOffsetY,this.activeDragElement.vx=(t.clientX-this.lastDragX)*.8,this.activeDragElement.vy=(t.clientY-this.lastDragY)*.8,this.lastDragX=t.clientX,this.lastDragY=t.clientY)}handlePointerUp(t){if(this.activeDragElement){let e=this.activeDragElement;e.isDragging=!1,e.el.style.cursor="grab",this.activeDragElement=null,Math.hypot(e.x-e.homeX,e.y-e.homeY)<38&&this.snapElement(e)}}snapElement(t){t.isCaught=!0,t.x=t.homeX,t.y=t.homeY,t.vx=0,t.vy=0,t.el.style.left=`${t.homeX}px`,t.el.style.top=`${t.homeY}px`,t.el.style.boxShadow="0 0 25px rgba(16, 185, 129, 0.8), 0 0 10px rgba(52, 211, 153, 0.9)",t.el.style.border="2px solid #10b981",t.el.style.cursor="default",t.el.style.transform="scale(1.03)",setTimeout(()=>{t.el.style.transform="scale(1)"},200),t.ghostEl.style.borderColor="#10b981",t.ghostEl.style.backgroundColor="rgba(16, 185, 129, 0.2)",t.ghostEl.style.boxShadow="0 0 15px rgba(16, 185, 129, 0.5)",this.playSnapSound(),this.updateHud(),this.elements.every(n=>n.isCaught)&&this.elements.length>0&&this.triggerVictory()}triggerVictory(){let t=Math.round((Date.now()-this.startTime)/1e3);this.playVictoryJingle(),chrome.storage.local.get(["chaosBestTime"],s=>{(!s.chaosBestTime||t<s.chaosBestTime)&&chrome.storage.local.set({chaosBestTime:t})});let e=document.createElement("div");e.id="chaos-victory-banner",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%) scale(0.9)",e.style.background="linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(49, 16, 66, 0.95))",e.style.border="2px solid #10b981",e.style.boxShadow="0 0 50px rgba(16, 185, 129, 0.5), 0 20px 40px rgba(0,0,0,0.8)",e.style.borderRadius="24px",e.style.padding="32px 48px",e.style.color="#ffffff",e.style.textAlign="center",e.style.zIndex="9999999",e.style.fontFamily="system-ui, sans-serif",e.style.transition="all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",e.innerHTML=`
      <div style="font-size: 42px; margin-bottom: 8px;">\u{1F389}\u26A1\u{1F3C6}</div>
      <h2 style="font-size: 26px; font-weight: 800; margin: 0 0 6px 0; background: linear-gradient(to right, #34d399, #6ee7b7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        REALITY RESTABILIZED!
      </h2>
      <p style="font-size: 14px; color: #cbd5e1; margin: 0 0 20px 0;">
        All ${this.elements.length} escaped DOM elements caught in <strong style="color: #38bdf8;">${t}s</strong>.
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
    `,document.body.appendChild(e),setTimeout(()=>{e.style.transform="translate(-50%, -50%) scale(1)"},10);let n=document.getElementById("chaos-victory-close-btn");n&&(n.onclick=()=>{e.remove(),this.stop()})}loop(){if(!this.active)return;let t=window.innerWidth,e=window.innerHeight,n=this.config.repulsionRadius,s=this.config.repulsionForce,o=this.config.gravity,r=Math.min(1.8,1+this.elements.length*.02);for(let i of this.elements){if(i.isCaught||i.isDragging)continue;let a=i.x+i.width/2,h=i.y+i.height/2,d=a-this.mouseX,c=h-this.mouseY,l=Math.hypot(d,c);if(l<n&&l>1){let g=(n-l)/n*s*r;i.vx+=d/l*g*.45,i.vy+=c/l*g*.45}i.vy+=o,i.vx*=.985,i.vy*=.985,i.x+=i.vx,i.y+=i.vy;let u=.72;if(i.x<0?(i.x=0,i.vx=-i.vx*u):i.x+i.width>t&&(i.x=t-i.width,i.vx=-i.vx*u),i.y<0?(i.y=0,i.vy=-i.vy*u):i.y+i.height>e&&(i.y=e-i.height,i.vy=-i.vy*u),Math.hypot(i.x-i.homeX,i.y-i.homeY)<30&&Math.hypot(i.vx,i.vy)<2){this.snapElement(i);continue}i.el.style.left=`${i.x}px`,i.el.style.top=`${i.y}px`}this.animFrameId=requestAnimationFrame(this.loop)}createHud(){this.hudContainer&&this.hudContainer.remove(),this.hudContainer=document.createElement("div"),this.hudContainer.id="chaos-ui-hud-root",this.hudContainer.style.position="fixed",this.hudContainer.style.top="16px",this.hudContainer.style.left="50%",this.hudContainer.style.transform="translateX(-50%)",this.hudContainer.style.zIndex="9999999",this.hudContainer.style.fontFamily="system-ui, sans-serif",this.hudContainer.style.pointerEvents="auto",document.body.appendChild(this.hudContainer),this.updateHud(),this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=window.setInterval(()=>{this.updateHud()},1e3)}updateHud(){if(!this.hudContainer)return;let t=this.elements.filter(a=>a.isCaught).length,e=this.elements.length,n=Math.round((Date.now()-this.startTime)/1e3),s=Math.floor(n/60),o=n%60,r=`${s}:${o<10?"0":""}${o}`;this.hudContainer.innerHTML=`
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
          <span style="font-weight: 800; font-family: monospace; color: #34d399; font-size: 14px;">${t} / ${e}</span>
        </div>

        <div style="height: 14px; width: 1px; background: rgba(255, 255, 255, 0.2);"></div>

        <div style="font-family: monospace; color: #38bdf8; font-weight: 700;">
          \u23F1\uFE0F ${r}
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
    `;let i=document.getElementById("chaos-hud-stop-btn");i&&(i.onclick=()=>this.stop())}stop(){this.active=!1,this.animFrameId&&(cancelAnimationFrame(this.animFrameId),this.animFrameId=null),this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null),this.hudContainer&&(this.hudContainer.remove(),this.hudContainer=null);let t=document.getElementById("chaos-victory-banner");t&&t.remove(),document.querySelectorAll(".chaos-ghost-target").forEach(e=>e.remove());for(let e of this.elements){let n=e.origStyles;e.el.style.position=n.position,e.el.style.left=n.left,e.el.style.top=n.top,e.el.style.width=n.width,e.el.style.height=n.height,e.el.style.zIndex=n.zIndex,e.el.style.boxShadow=n.boxShadow,e.el.style.transform=n.transform,e.el.style.transition=n.transition,e.el.style.pointerEvents=n.pointerEvents,e.el.style.userSelect=n.userSelect,e.el.style.cursor=n.cursor,e.el.style.border=n.border}this.elements=[],window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("pointerdown",this.handlePointerDown),window.removeEventListener("pointermove",this.handlePointerMove),window.removeEventListener("pointerup",this.handlePointerUp)}getState(){let t=this.elements.filter(o=>o.isCaught).length,e=this.elements.length,n=e-t,s=this.active?Math.round((Date.now()-this.startTime)/1e3):0;return{isActive:this.active,totalElements:e,caughtElements:t,escapedElements:n,timeElapsed:s,isWon:e>0&&t===e}}},m=new p;m.init();})();
