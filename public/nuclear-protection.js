// Nuclear Motion-DOM Runtime Protection
(function() {
  'use strict';
  
  console.log('🚀 Nuclear Motion-DOM Protection Loading...');
  
  // Immediately block any motion-dom script injection
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName) {
    const element = originalCreateElement.call(this, tagName);
    
    if (tagName.toLowerCase() === 'script') {
      const originalSetSrc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src').set;
      Object.defineProperty(element, 'src', {
        set: function(value) {
          if (value && (
            value.includes('motion-dom') || 
            value.includes('esm.sh') ||
            value.includes('cdn.skypack.dev') ||
            value.includes('unpkg.com') ||
            value.includes('jsdelivr.net')
          )) {
            console.error('🚀 NUCLEAR BLOCK: Script src blocked:', value);
            throw new Error('🚀 NUCLEAR MOTION-DOM BLOCKED: ' + value);
          }
          originalSetSrc.call(this, value);
        },
        get: function() {
          return originalSetSrc.call(this);
        }
      });
    }
    
    return element;
  };
  
  // Block dynamic imports
  const originalImport = window.import;
  if (originalImport) {
    window.import = function(specifier) {
      if (specifier && (
        specifier.includes('motion-dom') || 
        specifier.includes('esm.sh') ||
        specifier.includes('https://esm.sh')
      )) {
        console.error('🚀 NUCLEAR BLOCK: Dynamic import blocked:', specifier);
        return Promise.reject(new Error('🚀 NUCLEAR MOTION-DOM BLOCKED: ' + specifier));
      }
      return originalImport.call(this, specifier);
    };
  }
  
  // Intercept XMLHttpRequest and fetch
  const originalFetch = window.fetch;
  if (originalFetch) {
    window.fetch = function(input, init) {
      const url = typeof input === 'string' ? input : input.url;
      if (url && (
        url.includes('motion-dom') || 
        url.includes('esm.sh') ||
        url.includes('https://esm.sh')
      )) {
        console.error('🚀 NUCLEAR BLOCK: Fetch blocked:', url);
        return Promise.reject(new Error('🚀 NUCLEAR MOTION-DOM BLOCKED: ' + url));
      }
      return originalFetch.call(this, input, init);
    };
  }
  
  // Nuclear environment protection
  if (typeof window !== 'undefined') {
    // Override import.meta with safe fallback
    Object.defineProperty(window, 'import', {
      value: {
        meta: {
          env: {
            DEV: window.location.hostname === 'localhost' || window.location.port === '5173',
            PROD: !(window.location.hostname === 'localhost' || window.location.port === '5173'),
            MODE: (window.location.hostname === 'localhost' || window.location.port === '5173') ? 'development' : 'production',
            BASE_URL: '/',
            SSR: false
          },
          url: window.location.href,
          hot: undefined
        }
      },
      writable: false,
      configurable: false
    });
    
    // Block motion-dom globals
    Object.defineProperty(window, 'motionDom', { value: undefined, writable: false });
    Object.defineProperty(window, 'MotionDom', { value: undefined, writable: false });
    Object.defineProperty(window, 'motion-dom', { value: undefined, writable: false });
    
    console.log('🚀 Nuclear Motion-DOM Protection ACTIVE');
  }
})();