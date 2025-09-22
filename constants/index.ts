export * from './pageRoutes';

// Additional constants
export const COMPANY_INFO = {
  name: 'Aygıt Technologies',
  tagline: 'Kurumsal Web Altyapısı',
  phone: '+90 (212) 555 0123',
  email: 'info@aygittechnologies.com',
  address: 'İstanbul, Türkiye',
  website: 'https://aygittechnologies.com',
  
  social: {
    linkedin: 'https://linkedin.com/company/aygit-technologies',
    twitter: 'https://twitter.com/aygittech',
    instagram: 'https://instagram.com/aygittechnology',
    facebook: 'https://facebook.com/aygittechnologies'
  }
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 800
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

export const API_ENDPOINTS = {
  contact: '/api/contact',
  callback: '/api/callback',
  newsletter: '/api/newsletter'
} as const;