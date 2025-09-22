// Assets Index - Aygıt Technologies
// Clean and simplified asset exports for production use

// Import all assets
import AygitTechnologiesLogoSrc from './logos/aygit-technologies-logo.png';
import AygitLogoBlackSrc from './logos/aygit-site.png';
import AygitLogoWhiteSrc from './logos/aygit-beyaz.png';
import AygitTechnologiesLogoBlackSrc from './logos/aygit-technologies-logo-black.png';
import AygitTechnologiesLogoWhiteSrc from './logos/aygit-technologies-logo-white.png';
import PlaceholderImageSrc from './images/placeholder.png';
import PlaceholderIconSrc from './icons/placeholder.svg';

// Essential exports only
export { default as PlaceholderImage } from './images/placeholder.png';
export { default as PlaceholderIcon } from './icons/placeholder.svg';

// Unsplash image URLs as constants
export const UNSPLASH_IMAGES = {
  modernOfficeWorkspace: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2MjY1NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  corporateTeamMeeting: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTYyNjU0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  modernWebDevelopment: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTYyNjU1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  corporateTechnologyServer: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWNobm9sb2d5JTIwc2VydmVyfGVufDF8fHx8MTc1NjM3Mjc2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  digitalTransformationBusiness: 'https://images.unsplash.com/photo-1726607424598-139ff3391ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTYyNjU1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  mobileResponsiveDesign: 'https://images.unsplash.com/photo-1691073112675-9685bc6779bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwZGVzaWdufGVufDF8fHx8MTc1NjI5NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080'
} as const;

// Asset paths configuration
export const ASSET_PATHS = {
  logos: {
    main: AygitTechnologiesLogoSrc,
    black: AygitLogoBlackSrc,
    white: AygitLogoWhiteSrc,
    technologiesBlack: AygitTechnologiesLogoBlackSrc,
    technologiesWhite: AygitTechnologiesLogoWhiteSrc
  },
  images: {
    hero: UNSPLASH_IMAGES.modernOfficeWorkspace,
    corporate: UNSPLASH_IMAGES.corporateTeamMeeting,
    technology: UNSPLASH_IMAGES.corporateTechnologyServer,
    development: UNSPLASH_IMAGES.modernWebDevelopment,
    digital: UNSPLASH_IMAGES.digitalTransformationBusiness,
    mobile: UNSPLASH_IMAGES.mobileResponsiveDesign,
    placeholder: PlaceholderImageSrc
  },
  icons: {
    placeholder: PlaceholderIconSrc
  }
} as const;

// TypeScript types for better development experience
export type AssetCategory = keyof typeof ASSET_PATHS;
export type LogoKeys = keyof typeof ASSET_PATHS.logos;
export type ImageKeys = keyof typeof ASSET_PATHS.images;
export type IconKeys = keyof typeof ASSET_PATHS.icons;
export type UnsplashImageKeys = keyof typeof UNSPLASH_IMAGES;

// Asset utility functions with proper TypeScript
export const getAssetPath = (category: AssetCategory, key: string): string => {
  const categoryAssets = ASSET_PATHS[category] as Record<string, string>;
  if (categoryAssets && key in categoryAssets) {
    return categoryAssets[key];
  }
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Asset not found: ${String(category)}/${key}`);
  }
  return '';
};

export const getLogoAsset = (key: LogoKeys): string => {
  return ASSET_PATHS.logos[key];
};

export const getImageAsset = (key: ImageKeys): string => {
  return ASSET_PATHS.images[key];
};

export const getIconAsset = (key: IconKeys): string => {
  return ASSET_PATHS.icons[key];
};

// Corporate brand asset configuration
export const BRAND_ASSETS = {
  logo: {
    main: ASSET_PATHS.logos.main,
    black: ASSET_PATHS.logos.black,
    white: ASSET_PATHS.logos.white,
    technologiesBlack: ASSET_PATHS.logos.technologiesBlack,
    technologiesWhite: ASSET_PATHS.logos.technologiesWhite,
    alt: 'Aygıt Technologies - Kurumsal Web Altyapısı',
    width: 200,
    height: 48
  },
  images: {
    hero: UNSPLASH_IMAGES.modernOfficeWorkspace,
    corporate: UNSPLASH_IMAGES.corporateTeamMeeting,
    technology: UNSPLASH_IMAGES.corporateTechnologyServer,
    development: UNSPLASH_IMAGES.modernWebDevelopment,
    digital: UNSPLASH_IMAGES.digitalTransformationBusiness,
    mobile: UNSPLASH_IMAGES.mobileResponsiveDesign
  },
  colors: {
    primary: '#0365F4',
    secondary: '#0091BB',
    gradient: 'linear-gradient(135deg, #0365F4, #0091BB)'
  }
} as const;

// Asset metadata interface
export interface AssetMetadata {
  path: string;
  category: AssetCategory;
  key: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
}

// Direct logo exports for easy component usage
export const AygitTechnologiesLogo = AygitTechnologiesLogoSrc;
export const AygitLogoBlack = AygitLogoBlackSrc;
export const AygitLogoWhite = AygitLogoWhiteSrc;
export const AygitTechnologiesLogoBlack = AygitTechnologiesLogoBlackSrc;
export const AygitTechnologiesLogoWhite = AygitTechnologiesLogoWhiteSrc;

// Export all unsplash images as individual exports for backward compatibility
export const ModernOfficeWorkspace = UNSPLASH_IMAGES.modernOfficeWorkspace;
export const CorporateTeamMeeting = UNSPLASH_IMAGES.corporateTeamMeeting;
export const ModernWebDevelopment = UNSPLASH_IMAGES.modernWebDevelopment;
export const CorporateTechnologyServer = UNSPLASH_IMAGES.corporateTechnologyServer;
export const DigitalTransformationBusiness = UNSPLASH_IMAGES.digitalTransformationBusiness;
export const MobileResponsiveDesign = UNSPLASH_IMAGES.mobileResponsiveDesign;