/**
 * 🎨 AYGIT TECHNOLOGIES - TAILWIND V4.1.12 CONFIGURATION
 * 
 * ╭──────────────────────────────────────────────────────────────╮
 * │  🚀 TAILWIND V4 NATIVE CSS-FIRST ARCHITECTURE               │
 * │                                                              │
 * │  📁 Configuration Structure:                                 │
 * │  ├── vite.config.ts     → Plugin + Content scanning         │
 * │  ├── globals.css        → CSS variables + utilities         │
 * │  └── tailwind.config.js → Minimal V4 compatibility          │
 * │                                                              │
 * │  🎯 Aygıt Brand Colors:                                      │
 * │  ├── Primary:   #0365F4 (--aygit-primary)                   │
 * │  ├── Secondary: #0091BB (--aygit-secondary)                 │
 * │  └── Gradient:  135deg linear (#0365F4 → #0091BB)           │
 * │                                                              │
 * │  ⚡ Performance Optimizations:                               │
 * │  ├── CSS-first approach (no JS theme processing)            │
 * │  ├── Native V4 features (faster builds)                     │
 * │  ├── Minimal config (no conflicts)                          │
 * │  └── Production-ready CSS loading                           │
 * ╰──────────────────────────────────────────────────────────────╯
 * 
 * 🔧 DEVELOPMENT NOTES:
 * - All custom utilities defined in /styles/globals.css
 * - Header system: 4 types (Transparent, MegaMenu, Dark, Light)
 * - Typography: Inter font family with corporate styling
 * - Animations: Framer Motion + CSS keyframes
 * - Build logs: Check App.tsx for path tracking logs
 */

// Minimal V4 config for Aygıt Technologies

/** @type {import('tailwindcss').Config} */
export default {
  // ═══════════════════════════════════════════════════════════════
  // 📂 CONTENT SCANNING - Handled by vite.config.ts in V4
  // ═══════════════════════════════════════════════════════════════
  content: [], // Empty - vite.config.ts handles content paths
  
  // ═══════════════════════════════════════════════════════════════
  // 🎨 THEME CONFIGURATION - All in globals.css for V4
  // ═══════════════════════════════════════════════════════════════
  theme: {
    extend: {
      // V4 Note: All theme customization moved to globals.css
      // This ensures no conflicts with V4 CSS-first approach
      
      // All theme configuration is in globals.css for V4
    },
  },
  
  // ═══════════════════════════════════════════════════════════════
  // 🔌 PLUGINS - V4 handles everything via CSS
  // ═══════════════════════════════════════════════════════════════
  plugins: [
    // V4 uses @tailwindcss/vite plugin instead of config plugins
    // All custom utilities are in globals.css @layer utilities
    
    // All plugins handled by V4 vite plugin
  ],
  
  // ═══════════════════════════════════════════════════════════════
  // ⚡ V4 COMPATIBILITY & PERFORMANCE
  // ═══════════════════════════════════════════════════════════════
  future: {
    // Enable modern Tailwind features
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    relativeContentPathsByDefault: true,
  },
  
  // ═══════════════════════════════════════════════════════════════
  // 🧪 EXPERIMENTAL V4 FEATURES
  // ═══════════════════════════════════════════════════════════════
  experimental: {
    // V4 native CSS features
    optimizeUniversalDefaults: true,
    
    // Development logging
    ...(process.env.NODE_ENV === 'development' && {
      // Log CSS generation in development
      logLevel: 'verbose'
    })
  },
  
  // ═══════════════════════════════════════════════════════════════
  // 🔧 DEVELOPMENT CONFIGURATION
  // ═══════════════════════════════════════════════════════════════
  ...(process.env.NODE_ENV === 'development' && {
    // Development-only settings
    safelist: [
      // Ensure Aygıt brand utilities are never purged
      'bg-aygit-gradient',
      'bg-aygit-primary',
      'bg-aygit-secondary',
      'text-aygit-primary',
      'text-aygit-secondary',
      'text-aygit-gradient',
      
      // Logo utilities (App.tsx header integration)
      'logo-white',
      'logo-black',
      'logo-primary',
      
      // Corporate shadows and animations
      'shadow-aygit',
      'shadow-aygit-lg',
      'animate-fade-in',
      'animate-slide-up',
      'animate-float',
      'animate-accordion-down',
      'animate-accordion-up',
      
      // Button system
      'btn-aygit-primary',
      
      // Header system classes (headerUtils.tsx integration)
      'homepage-header',
      'enterprise-portal-header', 
      'light-header',
      'dark-header',
      
      // Background utilities (App.tsx background logic)
      'bg-white',
      'bg-background',
      'bg-gradient-to-br',
      'min-h-screen',
      
      // Debug utilities
      'debug-aygit'
    ]
  }),
  
  // ═══════════════════════════════════════════════════════════════
  // 📊 AYGIT TECHNOLOGIES BRAND CONFIGURATION SUMMARY
  // ═══════════════════════════════════════════════════════════════
  // 
  // 🎨 COLORS (defined in globals.css):
  //    ├── --aygit-primary: #0365F4
  //    ├── --aygit-secondary: #0091BB
  //    └── Gradients: 135deg, 180deg, radial
  // 
  // 🅰️ TYPOGRAPHY (defined in globals.css):
  //    ├── Font: Inter (300,400,500,600,700)
  //    ├── Base size: 14px (--font-size)
  //    └── Corporate headings with gradient text
  // 
  // 📱 HEADERS (App.tsx routing):
  //    ├── HeaderTransparent (homepage)
  //    ├── HeaderWithMegaMenu (enterprise)
  //    ├── HeaderWithMegaMenuDark (inner pages)
  //    └── HeaderWithMegaMenuLight (white backgrounds)
  // 
  // 🎭 ANIMATIONS (globals.css keyframes):
  //    ├── fadeIn (0.6s ease-out)
  //    ├── slideUp (0.8s ease-out)
  //    ├── float (3s infinite)
  //    └── accordion-down/up (0.2s ease-out)
  // 
  // 🚀 PERFORMANCE:
  //    ├── V4 CSS-first (no JS theme processing)
  //    ├── Minimal config (faster builds)
  //    ├── Production CSS loading optimized
  //    └── Bundle chunking (vendor/motion/ui)
  // ═══════════════════════════════════════════════════════════════
}