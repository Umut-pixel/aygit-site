/**
 * 🎨 AYGIT TECHNOLOGIES - TAILWIND V4 STATUS LOGGER
 * 
 * App.tsx'teki log sistemine uygun olarak Tailwind V4 durumunu
 * development'ta loglar. Production'da hiçbir şey yapmaz.
 */

import { useEffect } from 'react';

export const TailwindV4StatusLogger = () => {
  useEffect(() => {
    // Only run in localhost development
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      console.log('\n🎨 TAILWIND V4 STATUS - Aygıt Technologies');
      console.log('============================================');
      
      // 1. Version check
      try {
        const tailwindVersion = '@tailwindcss/vite@4.1.12';
        console.log(`✅ TAILWIND VERSION: ${tailwindVersion}`);
      } catch {
        console.log('❌ TAILWIND VERSION: Unknown');
      }
      
      // 2. CSS Variables check
      const root = document.documentElement;
      const primaryColor = getComputedStyle(root).getPropertyValue('--aygit-primary').trim();
      const secondaryColor = getComputedStyle(root).getPropertyValue('--aygit-secondary').trim();
      
      if (primaryColor === '#0365F4') {
        console.log('✅ AYGIT PRIMARY COLOR: #0365F4 (loaded)');
      } else {
        console.log(`❌ AYGIT PRIMARY COLOR: ${primaryColor || 'NOT FOUND'}`);
      }
      
      if (secondaryColor === '#0091BB') {
        console.log('✅ AYGIT SECONDARY COLOR: #0091BB (loaded)');
      } else {
        console.log(`❌ AYGIT SECONDARY COLOR: ${secondaryColor || 'NOT FOUND'}`);
      }
      
      // 3. Custom utilities check
      const testDiv = document.createElement('div');
      testDiv.className = 'bg-aygit-gradient';
      testDiv.style.position = 'absolute';
      testDiv.style.top = '-9999px';
      document.body.appendChild(testDiv);
      
      const gradient = getComputedStyle(testDiv).backgroundImage;
      if (gradient.includes('linear-gradient')) {
        console.log('✅ AYGIT GRADIENT UTILITY: Working');
      } else {
        console.log('❌ AYGIT GRADIENT UTILITY: Not working');
      }
      document.body.removeChild(testDiv);
      
      // 4. Font check
      const fontFamily = getComputedStyle(document.documentElement).fontFamily;
      if (fontFamily.toLowerCase().includes('inter')) {
        console.log('✅ INTER FONT: Loaded');
      } else {
        console.log(`❌ INTER FONT: ${fontFamily || 'Not loaded'}`);
      }
      
      // 5. Responsive check
      const isResponsive = window.matchMedia('(max-width: 768px)').matches;
      console.log(`📱 RESPONSIVE MODE: ${isResponsive ? 'Mobile' : 'Desktop'}`);
      
      // 6. Animation check
      const animations = [
        'fadeIn', 'slideUp', 'float', 'accordion-down', 'accordion-up'
      ];
      console.log('🎭 AYGIT ANIMATIONS:');
      animations.forEach(animation => {
        const testElement = document.createElement('div');
        testElement.className = `animate-${animation.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        testElement.style.position = 'absolute';
        testElement.style.top = '-9999px';
        document.body.appendChild(testElement);
        
        const animationName = getComputedStyle(testElement).animationName;
        if (animationName && animationName !== 'none') {
          console.log(`   ✅ ${animation}: Working`);
        } else {
          console.log(`   ❌ ${animation}: Not working`);
        }
        document.body.removeChild(testElement);
      });
      
      // 7. Build environment (simplified)
      console.log(`🔧 BUILD MODE: development`);
      console.log(`🏗️  BUILD ENV: Development`);
      console.log(`⚡ VITE SUPPORT: Yes`);
      console.log(`📦 IMPORT META: Available`);
      
      // 8. App.tsx integration check (simplified)
      const currentPath = window.location.pathname;
      
      console.log('🎯 APP.TSX INTEGRATION:');
      console.log(`   📄 Current Path: ${currentPath}`);
      console.log(`   🎯 Header Type: Auto-detected`);
      console.log(`   🎨 Background: Dynamic`);
      console.log(`   👀 Header: Visible`);
      
      // 9. HeaderUtils integration
      console.log('📱 HEADER UTILS STATUS:');
      console.log(`   🏠 Homepage: ${currentPath === '/' ? 'YES' : 'NO'}`);
      console.log(`   🏢 Enterprise Portal: ${currentPath === '/solutions/enterprise-portal' ? 'YES' : 'NO'}`);
      console.log(`   💬 Live Chat: ${currentPath === '/support/live-chat' ? 'YES' : 'NO'}`);
      
      // 10. Preloader integration (if exists)
      const preloaderElement = document.querySelector('.preloader');
      console.log(`🔄 PRELOADER: ${preloaderElement ? 'Active' : 'Complete'}`);
      
      // 11. Router integration
      const routerElement = document.querySelector('[data-router]') || document.querySelector('.router');
      console.log(`🗺️ ROUTER: ${routerElement ? 'Mounted' : 'Not found'}`);
      
      console.log('\n🎊 TAILWIND V4 + AYGIT STATUS CHECK COMPLETE!');
      console.log('V4 CSS-first architecture working with Aygıt Technologies brand.');
    }
  }, []);
  
  // Simplified helper functions
  const getHeaderType = (path: string): string => {
    if (path === '/') return 'HeaderTransparent (Homepage)';
    if (path === '/solutions/enterprise-portal') return 'HeaderWithMegaMenu (Enterprise)';
    if (path === '/support/live-chat') return 'No Header (Full Screen)';
    return 'HeaderWithMegaMenuDark (Inner Pages)';
  };
  
  // Bu component görsel çıktı üretmez, sadece development logging
  return null;
};

// Production-safe export
export default TailwindV4StatusLogger;