// Pages that should not have header and footer (full-screen experience)
export const NO_HEADER_FOOTER_PAGES: string[] = [
  '/support/live-chat'
];

// Pages that should use HeaderWithMegaMenuLight (white background, black text/logo)
export const LIGHT_HEADER_PAGES: string[] = [
  // Solutions pages
  '/solutions/basic-corporate',
  '/solutions/professional-corporate', 
  '/solutions/basic-ecommerce',
  '/solutions/professional-ecommerce',
  '/solutions/enterprise-ecommerce',
  '/solutions/b2b-platform',
  '/solutions/custom-design',
  '/solutions/mobile-app',
  '/solutions/api-integrations',
  '/solutions/pwa',

  // Services pages  
  '/services/kurumsal-web-sitesi',
  '/services/modern-temalar',
  '/services/ajans-partnerligi',
  '/services/builder-teknolojisi',
  
  // Features pages
  '/features/seo',
  '/features/social-media', 
  '/features/email-marketing',
  '/features/analytics',
  '/features/live-support',
  '/features/contact-form',
  '/features/ssl',
  '/features/backup',
  '/features/speed',
  '/features/customer-portal',
  '/features/crm',
  '/features/hosting',
  '/features/virtual-pos',
  
  // Integrations pages
  '/integrations/accounting',
  '/integrations/analytics-tools',
  '/integrations/crm-systems', 
  '/integrations/email-services',
  '/integrations/erp-systems',
  '/integrations/google-workspace',
  '/integrations/hepsiburada',
  '/integrations/hr-systems',
  '/integrations/microsoft-365',
  '/integrations/social-media-apis',
  '/integrations/trendyol',
  
  // Support pages
  '/support/training',
  '/support/docs',
  
  // Main category pages - using light header for cleaner corporate look
  '/pricing',
  '/blog', 
  '/support'
];

// All available routes in the application
export const ALL_ROUTES = {
  // Main pages
  HOME: '/',
  SOLUTIONS: '/solutions',
  SERVICES: '/services', 
  FEATURES: '/features',
  INTEGRATIONS: '/integrations',
  PRICING: '/pricing',
  BLOG: '/blog',
  SUPPORT: '/support',
  LOGIN: '/login',
  
  // Solutions
  BASIC_CORPORATE: '/solutions/basic-corporate',
  PROFESSIONAL_CORPORATE: '/solutions/professional-corporate',
  ENTERPRISE_PORTAL: '/solutions/enterprise-portal',
  B2B_PLATFORM: '/solutions/b2b-platform',
  BASIC_ECOMMERCE: '/solutions/basic-ecommerce',
  PROFESSIONAL_ECOMMERCE: '/solutions/professional-ecommerce', 
  ENTERPRISE_ECOMMERCE: '/solutions/enterprise-ecommerce',
  CUSTOM_DESIGN: '/solutions/custom-design',
  MOBILE_APP: '/solutions/mobile-app',
  API_INTEGRATIONS: '/solutions/api-integrations',
  PWA: '/solutions/pwa',
  
  // Services
  CORPORATE_WEBSITE: '/services/kurumsal-web-sitesi',
  MODERN_THEMES: '/services/modern-temalar',
  AGENCY_PARTNERSHIP: '/services/ajans-partnerligi',
  BUILDER_TECHNOLOGY: '/services/builder-teknolojisi',
  
  // Features
  SEO: '/features/seo',
  SOCIAL_MEDIA: '/features/social-media',
  EMAIL_MARKETING: '/features/email-marketing', 
  ANALYTICS: '/features/analytics',
  LIVE_SUPPORT: '/features/live-support',
  CONTACT_FORM: '/features/contact-form',
  SSL: '/features/ssl',
  BACKUP: '/features/backup',
  SPEED: '/features/speed',
  CUSTOMER_PORTAL: '/features/customer-portal',
  CRM: '/features/crm',
  HOSTING: '/features/hosting',
  VIRTUAL_POS: '/features/virtual-pos',
  
  // Integrations
  ACCOUNTING: '/integrations/accounting',
  ANALYTICS_TOOLS: '/integrations/analytics-tools',
  CRM_SYSTEMS: '/integrations/crm-systems',
  EMAIL_SERVICES: '/integrations/email-services',
  ERP_SYSTEMS: '/integrations/erp-systems',
  GOOGLE_WORKSPACE: '/integrations/google-workspace',
  HEPSIBURADA: '/integrations/hepsiburada',
  HR_SYSTEMS: '/integrations/hr-systems',
  MICROSOFT_365: '/integrations/microsoft-365',
  SOCIAL_MEDIA_APIS: '/integrations/social-media-apis',
  TRENDYOL: '/integrations/trendyol',
  
  // Support
  LIVE_CHAT: '/support/live-chat',
  TRAINING: '/support/training',
  DOCS: '/support/docs'
} as const;

// Route validation helper
export function isValidRoute(path: string): boolean {
  return (Object.values(ALL_ROUTES) as string[]).includes(path);
}

// Get page title from route
export function getPageTitle(path: string): string {
  const titleMap: Record<string, string> = {
    '/': 'Ana Sayfa - Aygıt Technologies',
    '/solutions': 'Çözümler - Aygıt Technologies',
    '/services': 'Hizmetler - Aygıt Technologies', 
    '/features': 'Özellikler - Aygıt Technologies',
    '/integrations': 'Entegrasyonlar - Aygıt Technologies',
    '/pricing': 'Fiyatlar - Aygıt Technologies',
    '/blog': 'Blog - Aygıt Technologies',
    '/support': 'Destek - Aygıt Technologies',
    '/login': 'Giriş - Aygıt Technologies',
    
    // Solutions
    '/solutions/basic-corporate': 'Temel Kurumsal - Aygıt Technologies',
    '/solutions/professional-corporate': 'Profesyonel Kurumsal - Aygıt Technologies',
    '/solutions/enterprise-portal': 'Kurumsal Portal - Aygıt Technologies',
    '/solutions/b2b-platform': 'B2B Platform - Aygıt Technologies',
    '/solutions/custom-design': 'Özel Tasarım - Aygıt Technologies',
    '/solutions/mobile-app': 'Mobil Uygulama - Aygıt Technologies',
    '/solutions/api-integrations': 'API Entegrasyonları - Aygıt Technologies',
    '/solutions/pwa': 'Progressive Web App - Aygıt Technologies',
    
    // Services
    '/services/kurumsal-web-sitesi': 'Kurumsal Web Sitesi - Aygıt Technologies',
    '/services/modern-temalar': 'Modern Tema Seçenekleri - Aygıt Technologies',
    '/services/ajans-partnerligi': 'Ajanslar için Partnerlik - Aygıt Technologies',
    '/services/builder-teknolojisi': 'Builder Teknolojisi - Aygıt Technologies',
    
    // Features
    '/features/seo': 'SEO Optimizasyonu - Aygıt Technologies',
    '/features/social-media': 'Sosyal Medya - Aygıt Technologies',
    '/features/email-marketing': 'E-mail Pazarlama - Aygıt Technologies',
    '/features/analytics': 'Analytics - Aygıt Technologies',
    '/features/live-support': 'Canlı Destek - Aygıt Technologies',
    '/features/contact-form': 'İletişim Formu - Aygıt Technologies',
    '/features/ssl': 'SSL Güvenlik - Aygıt Technologies',
    '/features/backup': 'Yedekleme - Aygıt Technologies',
    '/features/speed': 'Hız Optimizasyonu - Aygıt Technologies',
    '/features/customer-portal': 'Müşteri Portalı - Aygıt Technologies',
    '/features/crm': 'CRM Sistemi - Aygıt Technologies',
    '/features/hosting': 'Hosting - Aygıt Technologies',
    '/features/virtual-pos': 'Sanal POS - Aygıt Technologies',
    
    // Support
    '/support/live-chat': 'Canlı Destek - Aygıt Technologies',
    '/support/training': 'Video Eğitimler - Aygıt Technologies',
    '/support/docs': 'Dokümantasyon - Aygıt Technologies'
  };
  
  return titleMap[path] || 'Aygıt Technologies';
}