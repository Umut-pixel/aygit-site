import { HeaderTransparent } from "../components/HeaderTransparent";
import { HeaderWithMegaMenu } from "../components/HeaderWithMegaMenu";
import { HeaderWithMegaMenuDark } from "../components/HeaderWithMegaMenuDark";
import { HeaderWithMegaMenuLight } from "../components/HeaderWithMegaMenuLight";
import { LIGHT_HEADER_PAGES } from "../constants/pageRoutes";
import { devLog as ultraDevLog } from "./environmentUtils";

/**
 * Determines which header component to use based on the current path
 */
export function selectHeader(currentPath: string) {
  // Ultra development logging
  ultraDevLog(`🎯 HEADER SELECTION for path: ${currentPath}`);
  
  // Homepage - transparent header with white logo/text initially
  if (currentPath === '/') {
    // Ultra development logging
    ultraDevLog('🏠 Using HeaderTransparent for homepage');
    return <HeaderTransparent />;
  }
  
  // Enterprise Portal - special handling with mega menu
  if (currentPath === '/solutions/enterprise-portal') {
    // Ultra development logging
    ultraDevLog('🏢 Using HeaderWithMegaMenu for Enterprise Portal');
    return <HeaderWithMegaMenu />;
  }
  
  // Light header pages - white background with black logo/text
  if (LIGHT_HEADER_PAGES.includes(currentPath)) {
    // Ultra development logging
    ultraDevLog('🤍 Using HeaderWithMegaMenuLight for:', currentPath);
    return <HeaderWithMegaMenuLight />;
  }
  
  // Category pages and other inner pages - dark header
  if (isInnerPage(currentPath)) {
    // Ultra development logging
    ultraDevLog('📄 Using HeaderWithMegaMenuDark for inner page:', currentPath);
    return <HeaderWithMegaMenuDark />;
  }
  
  // Default fallback
  // Ultra development logging
  ultraDevLog('🔄 Using HeaderWithMegaMenuDark as fallback for:', currentPath);
  return <HeaderWithMegaMenuDark />;
}

/**
 * Determines if current path should use inner page background (white)
 */
export function shouldUseInnerPageBackground(currentPath: string): boolean {
  // Homepage has gradient background
  if (currentPath === '/') {
    return false;
  }
  
  // Enterprise Portal has special gradient background
  if (currentPath === '/solutions/enterprise-portal') {
    return false;
  }
  
  // All other pages use white background
  return true;
}

/**
 * Checks if the current path represents an inner page
 */
function isInnerPage(currentPath: string): boolean {
  const innerPagePrefixes = [
    '/solutions',
    '/services', 
    '/features',
    '/integrations',
    '/support',
    '/pricing',
    '/blog',
    '/login'
  ];
  
  // Check if current path starts with any inner page prefix
  return innerPagePrefixes.some(prefix => currentPath.startsWith(prefix));
}

/**
 * Gets the appropriate header class for styling
 */
export function getHeaderClass(currentPath: string): string {
  if (currentPath === '/') {
    return 'homepage-header';
  }
  
  if (currentPath === '/solutions/enterprise-portal') {
    return 'enterprise-portal-header';
  }
  
  if (LIGHT_HEADER_PAGES.includes(currentPath)) {
    return 'light-header';
  }
  
  return 'dark-header';
}

/**
 * Determines if the page should have a gradient overlay
 */
export function shouldHaveGradientOverlay(currentPath: string): boolean {
  return currentPath === '/' || currentPath === '/solutions/enterprise-portal';
}

/**
 * Gets the page section identifier for analytics or styling
 */
export function getPageSection(currentPath: string): string {
  if (currentPath === '/') return 'homepage';
  if (currentPath.startsWith('/solutions')) return 'solutions';
  if (currentPath.startsWith('/services')) return 'services';
  if (currentPath.startsWith('/features')) return 'features';
  if (currentPath.startsWith('/integrations')) return 'integrations';
  if (currentPath.startsWith('/support')) return 'support';
  if (currentPath === '/pricing') return 'pricing';
  if (currentPath === '/blog') return 'blog';
  if (currentPath === '/login') return 'login';
  
  return 'other';
}

/**
 * Checks if page should have scroll-to-top functionality
 */
export function shouldHaveScrollToTop(currentPath: string): boolean {
  // All pages except live chat should have scroll to top
  return currentPath !== '/support/live-chat';
}