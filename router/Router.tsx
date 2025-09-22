import { useEffect } from 'react';
import { usePathTracking } from '../hooks/usePathTracking';

// Main pages
import { HomePage } from '../pages/HomePage';
import { SolutionsPage } from '../pages/SolutionsPage';
import { ServicesPage } from '../pages/ServicesPage';
import { FeaturesPage } from '../pages/FeaturesPage';
import { IntegrationsPage } from '../pages/IntegrationsPage';
import { PricingPage } from '../pages/PricingPage';
import { BlogPage } from '../pages/BlogPage';
import { SupportPage } from '../pages/SupportPage';
import { LoginPage } from '../pages/LoginPage';

// Solutions pages
import { BasicCorporatePage } from '../pages/solutions/BasicCorporatePage';
import { ProfessionalCorporatePage } from '../pages/solutions/ProfessionalCorporatePage';
import { EnterprisePortalPage } from '../pages/solutions/EnterprisePortalPage';
import { B2bPlatformPage } from '../pages/solutions/B2bPlatformPage';
import { BasicEcommercePage } from '../pages/solutions/BasicEcommercePage';
import { ProfessionalEcommercePage } from '../pages/solutions/ProfessionalEcommercePage';
import { EnterpriseEcommercePage } from '../pages/solutions/EnterpriseEcommercePage';
import { CustomDesignPage } from '../pages/solutions/CustomDesignPage';
import { MobileAppPage } from '../pages/solutions/MobileAppPage';
import { ApiIntegrationsPage } from '../pages/solutions/ApiIntegrationsPage';
import { PwaPage } from '../pages/solutions/PwaPage';

// Services pages
import { CorporateWebsitePage } from '../pages/services/CorporateWebsitePage';
import { ModernThemesPage } from '../pages/services/ModernThemesPage';
import { AgencyPartnershipPage } from '../pages/services/AgencyPartnershipPage';
import { BuilderTechnologyPage } from '../pages/services/BuilderTechnologyPage';

// Features pages
import { SeoPage } from '../pages/features/SeoPage';
import { SocialMediaPage } from '../pages/features/SocialMediaPage';
import { EmailMarketingPage } from '../pages/features/EmailMarketingPage';
import { AnalyticsPage } from '../pages/features/AnalyticsPage';
import { LiveSupportPage } from '../pages/features/LiveSupportPage';
import { ContactFormPage } from '../pages/features/ContactFormPage';
import { SslPage } from '../pages/features/SslPage';
import { BackupPage } from '../pages/features/BackupPage';
import { SpeedPage } from '../pages/features/SpeedPage';
import { CustomerPortalPage } from '../pages/features/CustomerPortalPage';
import { CrmPage } from '../pages/features/CrmPage';
import { HostingPage } from '../pages/features/HostingPage';
import { VirtualPosPage } from '../pages/features/VirtualPosPage';

// Integrations pages
import { AccountingPage } from '../pages/integrations/AccountingPage';
import { AnalyticsToolsPage } from '../pages/integrations/AnalyticsToolsPage';
import { CrmSystemsPage } from '../pages/integrations/CrmSystemsPage';
import { EmailServicesPage } from '../pages/integrations/EmailServicesPage';
import { ErpSystemsPage } from '../pages/integrations/ErpSystemsPage';
import { GoogleWorkspacePage } from '../pages/integrations/GoogleWorkspacePage';
import { HepsiburadaPage } from '../pages/integrations/HepsiburadaPage';
import { HrSystemsPage } from '../pages/integrations/HrSystemsPage';
import { Microsoft365Page } from '../pages/integrations/Microsoft365Page';
import { SocialMediaApisPage } from '../pages/integrations/SocialMediaApisPage';
import { TrendyolPage } from '../pages/integrations/TrendyolPage';

// Support pages
import { LiveChatPage } from '../pages/support/LiveChatPage';
import { TrainingPage } from '../pages/support/TrainingPage';
import { DocsPage } from '../pages/support/DocsPage';

import { getPageTitle, ALL_ROUTES } from '../constants/pageRoutes';
import React from 'react';

// Simple client-side router
export function Router() {
  const currentPath = usePathTracking();
  
  // Update page title
  useEffect(() => {
    document.title = getPageTitle(currentPath);
  }, [currentPath]);

  // Development logging (safe)
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.log(`🛣️ ROUTER: Rendering page for path: ${currentPath}`);
  }

  // Route matching logic
  switch (currentPath) {
    // Main pages
    case '/':
      return <HomePage />;
    case '/solutions':
      return <SolutionsPage />;
    case '/services':
      return <ServicesPage />;
    case '/features':
      return <FeaturesPage />;
    case '/integrations':
      return <IntegrationsPage />;
    case '/pricing':
      return <PricingPage />;
    case '/blog':
      return <BlogPage />;
    case '/support':
      return <SupportPage />;
    case '/login':
      return <LoginPage />;

    // Solutions pages
    case '/solutions/basic-corporate':
      return <BasicCorporatePage />;
    case '/solutions/professional-corporate':
      return <ProfessionalCorporatePage />;
    case '/solutions/enterprise-portal':
      return <EnterprisePortalPage />;
    case '/solutions/b2b-platform':
      return <B2bPlatformPage />;
    case '/solutions/basic-ecommerce':
      return <BasicEcommercePage />;
    case '/solutions/professional-ecommerce':
      return <ProfessionalEcommercePage />;
    case '/solutions/enterprise-ecommerce':
      return <EnterpriseEcommercePage />;
    case '/solutions/custom-design':
      return <CustomDesignPage />;
    case '/solutions/mobile-app':
      return <MobileAppPage />;
    case '/solutions/api-integrations':
      return <ApiIntegrationsPage />;
    case '/solutions/pwa':
      return <PwaPage />;

    // Services pages
    case '/services/kurumsal-web-sitesi':
      return <CorporateWebsitePage />;
    case '/services/modern-temalar':
      return <ModernThemesPage />;
    case '/services/ajans-partnerligi':
      return <AgencyPartnershipPage />;
    case '/services/builder-teknolojisi':
      return <BuilderTechnologyPage />;

    // Features pages
    case '/features/seo':
      return <SeoPage />;
    case '/features/social-media':
      return <SocialMediaPage />;
    case '/features/email-marketing':
      return <EmailMarketingPage />;
    case '/features/analytics':
      return <AnalyticsPage />;
    case '/features/live-support':
      return <LiveSupportPage />;
    case '/features/contact-form':
      return <ContactFormPage />;
    case '/features/ssl':
      return <SslPage />;
    case '/features/backup':
      return <BackupPage />;
    case '/features/speed':
      return <SpeedPage />;
    case '/features/customer-portal':
      return <CustomerPortalPage />;
    case '/features/crm':
      return <CrmPage />;
    case '/features/hosting':
      return <HostingPage />;
    case '/features/virtual-pos':
      return <VirtualPosPage />;

    // Integrations pages
    case '/integrations/accounting':
      return <AccountingPage />;
    case '/integrations/analytics-tools':
      return <AnalyticsToolsPage />;
    case '/integrations/crm-systems':
      return <CrmSystemsPage />;
    case '/integrations/email-services':
      return <EmailServicesPage />;
    case '/integrations/erp-systems':
      return <ErpSystemsPage />;
    case '/integrations/google-workspace':
      return <GoogleWorkspacePage />;
    case '/integrations/hepsiburada':
      return <HepsiburadaPage />;
    case '/integrations/hr-systems':
      return <HrSystemsPage />;
    case '/integrations/microsoft-365':
      return <Microsoft365Page />;
    case '/integrations/social-media-apis':
      return <SocialMediaApisPage />;
    case '/integrations/trendyol':
      return <TrendyolPage />;

    // Support pages
    case '/support/live-chat':
      return <LiveChatPage />;
    case '/support/training':
      return <TrainingPage />;
    case '/support/docs':
      return <DocsPage />;

    // 404 fallback
    default:
      // Handle preview pages gracefully
      if (currentPath === '/preview_page.html') {
        // Development logging (safe)
        if (window.location.hostname === 'localhost') {
          console.log('🔄 PREVIEW PATH IN ROUTER - Showing homepage');
        }
        return <HomePage />;
      }
      
      // Development logging (safe)
      if (window.location.hostname === 'localhost') {
        console.error(`❌ ROUTER ERROR: Unknown path "${currentPath}"`);
        console.log('📝 Available routes:', Object.values(ALL_ROUTES));
      }
      return <NotFoundPage />;
  }
}

// Navigation helper function
export function navigateTo(path: string) {
  // Development logging (safe)
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.log(`🔗 NAVIGATE TO: ${path}`);
  }
  
  // Normalize path - ensure it starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Update browser history
  window.history.pushState({}, '', normalizedPath);
  
  // Trigger a custom event to notify components
  window.dispatchEvent(new PopStateEvent('popstate'));
  
  // Scroll to top for new pages
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple 404 page component
function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <button
          onClick={() => navigateTo('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
}