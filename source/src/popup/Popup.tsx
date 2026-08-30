import React, { useState, useEffect, useCallback } from 'react';
import './Popup.css';

interface ChaosConfig {
  gravity: number;
  repulsionForce: number;
  repulsionRadius: number;
  maxElements: number;
  soundEnabled: boolean;
  intensityMultiplier: number;
  preset: 'balanced' | 'zeroG' | 'hyperRepulsion' | 'earthquake';
}

interface GameState {
  isActive: boolean;
  totalElements: number;
  caughtElements: number;
  escapedElements: number;
  timeElapsed: number;
  isWon: boolean;
}

const DEFAULT_CONFIG: ChaosConfig = {
  gravity: 0.25,
  repulsionForce: 14,
  repulsionRadius: 160,
  maxElements: 35,
  soundEnabled: true,
  intensityMultiplier: 1.0,
  preset: 'balanced',
};

const DEFAULT_STATE: GameState = {
  isActive: false,
  totalElements: 0,
  caughtElements: 0,
  escapedElements: 0,
  timeElapsed: 0,
  isWon: false,
};

const Popup: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(DEFAULT_STATE);
  const [config, setConfig] = useState<ChaosConfig>(DEFAULT_CONFIG);
  const [tabTitle, setTabTitle] = useState<string>('Current Webpage');
  const [isConnecting, setIsConnecting] = useState<boolean>(true);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Sync state from current active tab
  const refreshStatus = useCallback(async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab?.id) {
        setIsConnecting(false);
        return;
      }

      setTabTitle(tab.title ? (tab.title.length > 28 ? tab.title.substring(0, 26) + '...' : tab.title) : 'Active Page');

      // Check if page is restricted (chrome://, webstore)
      if (tab.url?.startsWith('chrome://') || tab.url?.startsWith('edge://') || tab.url?.startsWith('https://chromewebstore.google.com')) {
        setErrorMsg('NovaChaos cannot run on protected browser system pages.');
        setIsConnecting(false);
        return;
      }

      chrome.tabs.sendMessage(tab.id, { type: 'CHAOS_GET_STATE' }, (response) => {
        if (chrome.runtime.lastError) {
          // Script might not be loaded yet or page refreshed
          setGameState(prev => ({ ...prev, isActive: false }));
        } else if (response?.state) {
          setGameState(response.state);
          if (response.config) {
            setConfig(response.config);
          }
        }
        setIsConnecting(false);
      });
    } catch {
      setIsConnecting(false);
    }
  }, []);

  useEffect(() => {
    refreshStatus();
    // Load stored best times
    chrome.storage.local.get(['chaosBestTime', 'chaosConfig'], (res) => {
      if (res.chaosBestTime) setBestTime(res.chaosBestTime);
      if (res.chaosConfig) setConfig(res.chaosConfig);
    });

    const interval = setInterval(refreshStatus, 800);
    return () => clearInterval(interval);
  }, [refreshStatus]);

  const sendCommand = async (type: string, payload?: any) => {
    setErrorMsg(null);
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab?.id) return;

      chrome.tabs.sendMessage(tab.id, { type, payload }, (res) => {
        if (chrome.runtime.lastError) {
          // If content script was not injected, attempt on-demand injection
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.id },
              files: ['content.js']
            },
            () => {
              // Retry sending command
              chrome.tabs.sendMessage(tab.id, { type, payload }, (retryRes) => {
                if (retryRes?.state) setGameState(retryRes.state);
              });
            }
          );
        } else if (res?.state) {
          setGameState(res.state);
        }
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to interact with page.');
    }
  };

  const handleToggleChaos = () => {
    if (gameState.isActive) {
      sendCommand('CHAOS_STOP');
      setGameState(prev => ({ ...prev, isActive: false }));
    } else {
      sendCommand('CHAOS_START', { config });
      setGameState(prev => ({ ...prev, isActive: true, caughtElements: 0 }));
    }
  };

  const handleReset = () => {
    sendCommand('CHAOS_RESET');
    setGameState(DEFAULT_STATE);
  };

  const handleApplyPreset = (presetKey: ChaosConfig['preset']) => {
    let newConf: ChaosConfig = { ...config, preset: presetKey };
    if (presetKey === 'balanced') {
      newConf = { ...newConf, gravity: 0.25, repulsionForce: 14, repulsionRadius: 160 };
    } else if (presetKey === 'zeroG') {
      newConf = { ...newConf, gravity: 0.0, repulsionForce: 18, repulsionRadius: 200 };
    } else if (presetKey === 'hyperRepulsion') {
      newConf = { ...newConf, gravity: 0.35, repulsionForce: 28, repulsionRadius: 240 };
    } else if (presetKey === 'earthquake') {
      newConf = { ...newConf, gravity: 0.6, repulsionForce: 10, repulsionRadius: 120 };
    }
    setConfig(newConf);
    chrome.storage.local.set({ chaosConfig: newConf });
    if (gameState.isActive) {
      sendCommand('CHAOS_UPDATE_CONFIG', { config: newConf });
    }
  };

  const handleConfigChange = (key: keyof ChaosConfig, val: any) => {
    const updated = { ...config, [key]: val };
    setConfig(updated);
    chrome.storage.local.set({ chaosConfig: updated });
    if (gameState.isActive) {
      sendCommand('CHAOS_UPDATE_CONFIG', { config: updated });
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = gameState.totalElements > 0 
    ? Math.round((gameState.caughtElements / gameState.totalElements) * 100)
    : 0;

  return (
    <div className="w-[400px] min-h-[520px] bg-slate-950 text-slate-100 flex flex-col justify-between select-none overflow-hidden">
      {/* Top Header */}
      <header className="px-5 py-4 bg-slate-900/90 border-b border-slate-800/80 backdrop-blur flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-500 via-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-red-500/30 ring-1 ring-white/20">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
              Nova<span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Chaos</span>
            </h1>
            <p className="text-[11px] text-slate-400 truncate max-w-[200px]" title={tabTitle}>
              {tabTitle}
            </p>
          </div>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center space-x-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${gameState.isActive ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-600'}`} />
          <span className="text-[11px] font-medium text-slate-300">
            {gameState.isActive ? 'RUNNING' : 'IDLE'}
          </span>
        </div>
      </header>

      {/* Main Body Content */}
      <main className="p-5 space-y-4 flex-1">
        {errorMsg && (
          <div className="p-3 bg-rose-950/70 border border-rose-800/50 rounded-xl text-rose-300 text-xs flex items-start space-x-2">
            <svg className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Primary Big Action Toggle Button */}
        <button
          onClick={handleToggleChaos}
          disabled={isConnecting}
          className={`w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide transition-all duration-200 transform active:scale-[0.98] shadow-xl flex items-center justify-center space-x-3 border relative overflow-hidden havoc-btn ${
            gameState.isActive
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white border-emerald-400/30 shadow-emerald-950/40'
              : 'bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:via-rose-500 hover:to-orange-400 text-white border-orange-400/50 shadow-red-950/50'
          }`}
        >
          {!gameState.isActive && (
            <span className="havoc-btn-sheen absolute inset-0 pointer-events-none" />
          )}
          {gameState.isActive ? (
            <>
              <svg className="w-5 h-5 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>RESTORE & STABILIZE PAGE</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 text-yellow-200 animate-spin" style={{ animationDuration: '2s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>RELEASE THE HAVOC!</span>
            </>
          )}
        </button>

        {/* Live Game Score Tracker Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-300">Live Escape Metrics</span>
            <span className="font-mono text-pink-400 font-bold">{gameState.isActive ? formatTime(gameState.timeElapsed) : '0:00'}</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center">
              <p className="text-[10px] text-slate-400 uppercase font-medium">Escaped</p>
              <p className="text-lg font-bold font-mono text-pink-400">
                {gameState.isActive ? gameState.escapedElements : '--'}
              </p>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center">
              <p className="text-[10px] text-slate-400 uppercase font-medium">Caught</p>
              <p className="text-lg font-bold font-mono text-emerald-400">
                {gameState.isActive ? `${gameState.caughtElements}/${gameState.totalElements}` : '--'}
              </p>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center">
              <p className="text-[10px] text-slate-400 uppercase font-medium">Best Record</p>
              <p className="text-lg font-bold font-mono text-violet-400">
                {bestTime !== null ? formatTime(bestTime) : '--'}
              </p>
            </div>
          </div>

          {/* Snap Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Restoration Progress</span>
              <span className="font-mono text-slate-200">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-pink-500 via-indigo-500 to-emerald-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Physics Presets & Controls */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Physics Preset</label>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] text-slate-400">Audio Synth</span>
              <button
                type="button"
                onClick={() => handleConfigChange('soundEnabled', !config.soundEnabled)}
                className={`w-7 h-4 rounded-full transition-colors relative ${
                  config.soundEnabled ? 'bg-pink-600' : 'bg-slate-700'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-white transition-transform transform absolute top-0.5 ${
                    config.soundEnabled ? 'translate-x-3.5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'balanced', label: 'Classic Bounce', desc: 'Normal gravity & cursor dodge' },
              { id: 'zeroG', label: 'Zero-G Space', desc: 'Floating cosmic web elements' },
              { id: 'hyperRepulsion', label: 'Hyper Flee', desc: 'Ultra-fast cursor evasion' },
              { id: 'earthquake', label: 'Heavy Fall', desc: 'High gravity drop & slide' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => handleApplyPreset(p.id as any)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  config.preset === p.id
                    ? 'bg-pink-500/10 border-pink-500/50 text-pink-200'
                    : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                <p className="text-xs font-bold leading-tight">{p.label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{p.desc}</p>
              </button>
            ))}
          </div>

          {/* Fine Tuning Sliders */}
          <div className="space-y-2 pt-1 border-t border-slate-800/60 text-xs">
            <div className="flex justify-between items-center text-slate-400 text-[11px]">
              <span>Cursor Repulsion Force</span>
              <span className="font-mono text-slate-300">{config.repulsionForce}x</span>
            </div>
            <input
              type="range"
              min="5"
              max="35"
              step="1"
              value={config.repulsionForce}
              onChange={(e) => handleConfigChange('repulsionForce', parseFloat(e.target.value))}
              className="w-full accent-pink-500 h-1.5 bg-slate-950 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </main>

      {/* Footer Navigation / Reset */}
      <footer className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
        <button
          onClick={handleReset}
          className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition font-medium flex items-center space-x-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reset Page</span>
        </button>

        <div className="text-[10px] text-slate-500 font-medium">
          Drag elements to original ghost slots
        </div>
      </footer>
    </div>
  );
};

export default Popup;