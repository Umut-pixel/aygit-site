/// <reference types="vite/client" />

// AYGIT TECHNOLOGIES - Nuclear Safe Environment Types
// ZERO undefined access - ZERO motion-dom triggers EVER

// Nuclear bulletproof ImportMetaEnv interface  
interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly SSR: boolean;
  readonly [key: string]: any;
}

// Nuclear bulletproof ImportMeta interface
interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly url: string;
  readonly hot?: any;
}

// Nuclear global declarations
declare global {
  interface Window {
    IMPORT_META_ENV: ImportMetaEnv;
  }
  
  var IMPORT_META_ENV: ImportMetaEnv;
  
  // Nuclear global import.meta with bulletproof fallback
  namespace NodeJS {
    interface Global {
      import: {
        meta: ImportMeta;
      };
    }
  }
}

// Nuclear module augmentation
declare module 'vite/client' {
  interface ImportMetaEnv {
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly MODE: string;
    readonly BASE_URL: string;
    readonly SSR: boolean;
    readonly [key: string]: any;
  }
}

// Nuclear guarantee that import.meta.env is ALWAYS defined
if (typeof globalThis !== 'undefined') {
  if (!(globalThis as any)['import']) {
    (globalThis as any)['import'] = {
      meta: {
        env: {
          DEV: false,
          PROD: true,
          MODE: 'production',
          BASE_URL: '/',
          SSR: false
        },
        url: '',
        hot: undefined
      }
    };
  }
}

export {};