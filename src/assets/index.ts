// Assets Index - Clean export point for src/assets
// Aygıt Technologies - Modern React Asset Management

// Note: We use direct imports instead of re-exports to avoid build issues
// This file provides type definitions and constants only

// Unsplash Image URLs - Static constants for external images
export const UNSPLASH_IMAGES = {
  modernOfficeWorkspace: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2MjY1NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  corporateTeamMeeting: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTYyNjU0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  modernWebDevelopment: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTYyNjU1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  corporateTechnologyServer: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWNobm9sb2d5JTIwc2VydmVyfGVufDF8fHx8MTc1NjM3Mjc2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  digitalTransformationBusiness: 'https://images.unsplash.com/photo-1726607424598-139ff3391ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTYyNjU1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  mobileResponsiveDesign: 'https://images.unsplash.com/photo-1691073112675-9685bc6779bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwZGVzaWdufGVufDF8fHx8MTc1NjI5NTYzNnww&ixlib=rb-4.1.0&q=80&w=1080'
} as const;

// TypeScript types for asset management
export type UnsplashImageKeys = keyof typeof UNSPLASH_IMAGES;

// Asset metadata interface
export interface AssetMetadata {
  path: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
}

// Individual exports for backwards compatibility
export const ModernOfficeWorkspace = UNSPLASH_IMAGES.modernOfficeWorkspace;
export const CorporateTeamMeeting = UNSPLASH_IMAGES.corporateTeamMeeting;
export const ModernWebDevelopment = UNSPLASH_IMAGES.modernWebDevelopment;
export const CorporateTechnologyServer = UNSPLASH_IMAGES.corporateTechnologyServer;
export const DigitalTransformationBusiness = UNSPLASH_IMAGES.digitalTransformationBusiness;
export const MobileResponsiveDesign = UNSPLASH_IMAGES.mobileResponsiveDesign;