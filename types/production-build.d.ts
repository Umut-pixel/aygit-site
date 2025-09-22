export {};

// AYGIT TECHNOLOGIES - PRODUCTION BUILD TYPE DEFINITIONS
// ZERO BUILD ERRORS - PRODUCTION READY TYPE SAFETY

// Vite build environment declarations
/// <reference types="vite/client" />

declare const __BUILD_VERSION__: string;
declare const __BUILD_DATE__: string;

// Asset imports - SVG with ReactComponent support (Vite doesn't provide this)
declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  const content: string;
  export default content;
}

// Environment variables
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_BUILD_MODE: string;
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Global build types
declare global {
  interface Window {
    __AYGIT_BUILD_INFO__?: {
      version: string;
      buildTime: string;
      mode: string;
    };
  }
}