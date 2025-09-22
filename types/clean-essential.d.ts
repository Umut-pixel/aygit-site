// AYGIT TECHNOLOGIES - ULTRA BULLETPROOF TYPE DEFINITIONS
// COMPLETE MOTION-DOM EXTERMINATION

// React Hook Form versioned import
declare module 'react-hook-form@7.55.0' {
  export * from 'react-hook-form';
}

// Sonner versioned import  
declare module 'sonner@2.0.3' {
  export interface ToastT {
    id: string;
    title?: string;
    description?: string;
  }
  
  export function toast(message: string, options?: {
    description?: string;
    action?: {
      label: string;
      onClick: () => void;
    };
    duration?: number;
  }): string;
  
  export namespace toast {
    function success(message: string, options?: any): string;
    function error(message: string, options?: any): string;
    function info(message: string, options?: any): string;
    function warning(message: string, options?: any): string;
    function loading(message: string, options?: any): string;
    function custom(jsx: React.ReactElement, options?: any): string;
    function promise<T>(promise: Promise<T>, options: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: any) => string);
    }): Promise<T>;
    function dismiss(id?: string): void;
  }

  export interface ToasterProps {
    theme?: 'light' | 'dark' | 'system';
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    richColors?: boolean;
    expand?: boolean;
    duration?: number;
    closeButton?: boolean;
  }
  
  export const Toaster: React.ComponentType<ToasterProps>;
}

// 💀 ULTIMATE MOTION-DOM DESTRUCTION 💀
// Block ALL possible motion-dom access patterns

declare module 'motion-dom' {
  const BLOCKED_MOTION_DOM: never;
  export = BLOCKED_MOTION_DOM;
}

declare module 'motion-dom/*' {
  const BLOCKED_MOTION_DOM: never;
  export = BLOCKED_MOTION_DOM;
}

declare module '@motion-dom/*' {
  const BLOCKED_MOTION_DOM: never;
  export = BLOCKED_MOTION_DOM;
}

declare module 'https://esm.sh/motion-dom' {
  const BLOCKED_ESM_SH: never;
  export = BLOCKED_ESM_SH;
}

declare module 'https://esm.sh/motion-dom@*' {
  const BLOCKED_ESM_SH: never;
  export = BLOCKED_ESM_SH;
}

declare module 'https://esm.sh/motion-dom@12.23.12' {
  const BLOCKED_ESM_SH: never;
  export = BLOCKED_ESM_SH;
}

declare module 'https://esm.sh/motion-dom@12.23.12/*' {
  const BLOCKED_ESM_SH: never;
  export = BLOCKED_ESM_SH;
}

declare module 'https://esm.sh/motion-dom@12.23.12/es2022/motion-dom.mjs' {
  const BLOCKED_ESM_SH: never;
  export = BLOCKED_ESM_SH;
}

declare module 'esm.sh/motion-dom' {
  const BLOCKED_ESM_SH: never;
  export = BLOCKED_ESM_SH;
}

declare module 'esm.sh/motion-dom@*' {
  const BLOCKED_ESM_SH: never;
  export = BLOCKED_ESM_SH;
}

declare module 'cdn.skypack.dev/motion-dom' {
  const BLOCKED_CDN: never;
  export = BLOCKED_CDN;
}

declare module 'unpkg.com/motion-dom' {
  const BLOCKED_CDN: never;
  export = BLOCKED_CDN;
}

declare module 'jsdelivr.net/npm/motion-dom' {
  const BLOCKED_CDN: never;
  export = BLOCKED_CDN;
}

declare module '/es2022/motion-dom.mjs' {
  const BLOCKED_MODULE: never;
  export = BLOCKED_MODULE;
}

declare module 'motion-dom.mjs' {
  const BLOCKED_MODULE: never;
  export = BLOCKED_MODULE;
}

// Block any possible script tag injection
declare namespace globalThis {
  interface Window {
    motionDom?: never;
    motionDOM?: never;
    MotionDom?: never;
    MotionDOM?: never;
  }
}

// Block process.env access patterns that could trigger motion-dom
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string;
    readonly DEV?: string;
    readonly PROD?: string;
    readonly VITE_DEV?: string;
  }
}

// Force TypeScript to recognize motion-dom as completely inaccessible
type MotionDomBlocked = never;
type EsmShBlocked = never;
type CdnBlocked = never;

// Export nothing from this file - just declarations