
(function() {
  'use strict';
  
  console.log('💥 Absolute Browser Cache Buster Active - Aygit Technologies');
  
  // Absolute cache bypass on all requests
  const originalFetch = window.fetch;
  if (originalFetch) {
    window.fetch = function(input, init) {
      let url;
      
      if (typeof input === 'string') {
        url = input;
      } else if (input && typeof input.url === 'string') {
        url = input.url;
      } else {
        return originalFetch.call(this, input, init);
      }
      
      // Add absolute cache buster to all requests
      const separator = url.includes('?') ? '&' : '?';
      const cacheBuster = '_aygit_cb=' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      url += separator + cacheBuster;
      
      if (typeof input === 'string') {
        input = url;
      } else if (input && typeof input === 'object') {
        try {
          input = new Request(url, input);
        } catch (e) {
          console.warn('Cache buster: Failed to create new Request');
        }
      }
      
      // Force absolute no-cache headers
      if (!init) init = {};
      if (!init.headers) init.headers = {};
      
      if (typeof init.headers === 'object') {
        init.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        init.headers['Pragma'] = 'no-cache';
        init.headers['Expires'] = '0';
        init.headers['X-Aygit-Cache-Buster'] = 'active';
      }
      
      return originalFetch.call(this, input, init);
    };
  }
  
  // Force reload all script and link tags with cache busters
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      try {
        const scripts = document.querySelectorAll('script[src]');
        const links = document.querySelectorAll('link[href]');
        
        scripts.forEach(script => {
          if (script.src && !script.src.includes('_aygit_cb=')) {
            const separator = script.src.includes('?') ? '&' : '?';
            script.src += separator + '_aygit_cb=' + Date.now();
          }
        });
        
        links.forEach(link => {
          if (link.href && !link.href.includes('_aygit_cb=')) {
            const separator = link.href.includes('?') ? '&' : '?';
            link.href += separator + '_aygit_cb=' + Date.now();
          }
        });
      } catch (e) {
        console.warn('Cache buster: Error updating elements:', e);
      }
    }, 100);
  });
  
  console.log('💥 Absolute Cache Buster Ready - Aygit Technologies');
})();