// 💀 FINAL NUCLEAR ELIMINATION: 1735913000000
// 💀 NUCLEAR CACHE BUSTER: 1735912400000
import { useState, useEffect } from 'react';
import { ultraDevLog } from '../utils/ultraSafeEnvironment';

export function usePathTracking(): string {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Initial path from current location - ensure it's always at least '/'
    const initialPath = window.location.pathname;
    
    // Don't redirect during initial state - let useEffect handle it
    return initialPath && initialPath !== '' ? initialPath : '/';
  });

  // Ultra safe initial preview path redirect
  useEffect(() => {
    try {
      const currentLocation = window.location.pathname;
      if (currentLocation === '/preview_page.html') {
        ultraDevLog('🔄 INITIAL PREVIEW PATH DETECTED - Redirecting to homepage');
        window.history.replaceState({}, '', '/');
        setCurrentPath('/');
      }
    } catch (error) {
      // Ultra nuclear silence
      ultraDevLog('Ultra safe initial redirect error:', error);
      setCurrentPath('/');
    }
  }, []);

  useEffect(() => {
    const ultraSafeHandleLocationChange = () => {
      try {
        const newPath = window.location.pathname;
        
        // Handle preview paths during navigation
        if (newPath === '/preview_page.html') {
          ultraDevLog('🔄 PREVIEW PATH DETECTED - Redirecting to homepage');
          window.history.replaceState({}, '', '/');
          setCurrentPath('/');
          return;
        }
        
        const normalizedPath = newPath && newPath !== '' ? newPath : '/';
        ultraDevLog(`🛣️ PATH CHANGE: ${currentPath} -> ${normalizedPath}`);
        setCurrentPath(normalizedPath);
      } catch (error) {
        // Ultra nuclear silence - never crash
        setCurrentPath('/');
      }
    };

    // Ultra safe event listeners
    window.addEventListener('popstate', ultraSafeHandleLocationChange);

    // Ultra safe pushstate/replacestate handling
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(
      data: unknown, 
      unused: string, 
      url?: string | URL | null
    ) {
      try {
        originalPushState.call(window.history, data, unused, url);
        ultraSafeHandleLocationChange();
      } catch (error) {
        // Ultra nuclear silence
        ultraDevLog('Ultra safe pushState error:', error);
      }
    };

    window.history.replaceState = function(
      data: unknown, 
      unused: string, 
      url?: string | URL | null
    ) {
      try {
        originalReplaceState.call(window.history, data, unused, url);
        ultraSafeHandleLocationChange();
      } catch (error) {
        // Ultra nuclear silence
        ultraDevLog('Ultra safe replaceState error:', error);
      }
    };

    // Initial check with ultra safety
    ultraSafeHandleLocationChange();

    return () => {
      try {
        window.removeEventListener('popstate', ultraSafeHandleLocationChange);
        // Restore original methods
        window.history.pushState = originalPushState;
        window.history.replaceState = originalReplaceState;
      } catch (error) {
        // Ultra nuclear silence
        ultraDevLog('Ultra safe cleanup error:', error);
      }
    };
  }, [currentPath]);

  return currentPath;
}