
export interface ChaosConfig {
  gravity: number;
  repulsionForce: number;
  repulsionRadius: number;
  maxElements: number;
  soundEnabled: boolean;
  intensityMultiplier: number;
  preset: 'balanced' | 'zeroG' | 'hyperRepulsion' | 'earthquake';
}

export interface GameState {
  isActive: boolean;
  totalElements: number;
  caughtElements: number;
  escapedElements: number;
  timeElapsed: number;
  isWon: boolean;
}

export interface StorageData {
  chaosConfig?: ChaosConfig;
  chaosBestTime?: number;
}
