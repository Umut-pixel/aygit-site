// Asset Utilities
// Simple utility functions for asset management
// No circular imports - only pure functions

/**
 * Validates if an image URL is accessible
 */
export const validateImageUrl = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

/**
 * Gets image dimensions from URL
 */
export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = url;
  });
};

/**
 * Creates a fallback image URL
 */
export const createFallbackUrl = (width: number = 400, height: number = 300): string => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <text x="50%" y="50%" font-family="system-ui" font-size="14" fill="#64748b" text-anchor="middle" dy=".3em">
        Görsel Yüklenemedi
      </text>
    </svg>
  `)}`;
};

/**
 * Optimizes image URL for performance
 */
export const optimizeImageUrl = (url: string, options: { width?: number; height?: number; quality?: number } = {}): string => {
  const { width, height, quality = 80 } = options;
  
  // For Unsplash URLs, add optimization parameters
  if (url.includes('unsplash.com')) {
    const urlObj = new URL(url);
    if (width) urlObj.searchParams.set('w', width.toString());
    if (height) urlObj.searchParams.set('h', height.toString());
    urlObj.searchParams.set('q', quality.toString());
    urlObj.searchParams.set('auto', 'format');
    return urlObj.toString();
  }
  
  return url;
};

/**
 * Preloads images for better performance
 */
export const preloadImages = (urls: string[]): Promise<void[]> => {
  return Promise.all(
    urls.map(url => 
      new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to preload: ${url}`));
        img.src = url;
      })
    )
  );
};

/**
 * Checks if asset path is absolute or relative
 */
export const isAbsolutePath = (path: string): boolean => {
  return path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//');
};