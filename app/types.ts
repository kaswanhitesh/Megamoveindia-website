export interface SectionConfig {
  id: string;
  displayName: string;
  folder: string;
  firstFrame: number;
  lastFrame: number;
  totalFrames: number;
  scrollHeight: number; // in vh
  initialPreload: number;
  preloadAhead: number;
  preloadBehind: number;
  cacheSize: number;
  isActive: boolean;
}
