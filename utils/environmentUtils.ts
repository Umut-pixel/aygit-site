// AYGIT TECHNOLOGIES - CLEAN ENVIRONMENT UTILITIES
// Consolidated from multiple duplicate files

export interface SafeEnvironment {
  readonly isDevelopment: boolean;
  readonly isProduction: boolean;
  readonly mode: 'development' | 'production';
  readonly hostname: string;
  readonly port: string;
  readonly protocol: string;
}

/**
 * Safe environment detection without import.meta.env access
 */
export function getSafeEnvironment(): SafeEnvironment {
  const SAFE_FALLBACK: SafeEnvironment = {
    isDevelopment: false,
    isProduction: true,
    mode: 'production',
    hostname: 'aygit.com',
    port: '443',
    protocol: 'https:'
  };

  try {
    if (typeof window !== 'object' || window === null) {
      return SAFE_FALLBACK;
    }

    const location = window.location;
    if (!location || typeof location !== 'object') {
      return SAFE_FALLBACK;
    }

    const hostname = String(location.hostname || '');
    const port = String(location.port || '');
    const protocol = String(location.protocol || 'https:');

    // Development detection
    const isDev = 
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      port === '5173' ||
      port === '5174' ||
      port === '3000';

    return {
      isDevelopment: isDev,
      isProduction: !isDev,
      mode: isDev ? 'development' : 'production',
      hostname,
      port,
      protocol
    };
  } catch {
    return SAFE_FALLBACK;
  }
}

/**
 * Check if running in development
 */
export function isDevelopment(): boolean {
  try {
    return getSafeEnvironment().isDevelopment;
  } catch {
    return false;
  }
}

/**
 * Check if running in production
 */
export function isProduction(): boolean {
  try {
    return getSafeEnvironment().isProduction;
  } catch {
    return true;
  }
}

/**
 * Development-only logging
 */
export function devLog(message: string, ...args: unknown[]): void {
  try {
    if (!isDevelopment()) return;
    if (typeof console !== 'object' || !console?.log) return;
    console.log(`[Aygıt] ${message}`, ...args);
  } catch {
    // Silent
  }
}

/**
 * Development-only warnings
 */
export function devWarn(message: string, ...args: unknown[]): void {
  try {
    if (!isDevelopment()) return;
    if (typeof console !== 'object' || !console?.warn) return;
    console.warn(`[Aygıt Warning] ${message}`, ...args);
  } catch {
    // Silent
  }
}

/**
 * Development-only error logging
 */
export function devError(message: string, ...args: unknown[]): void {
  try {
    if (!isDevelopment()) return;
    if (typeof console !== 'object' || !console?.error) return;
    console.error(`[Aygıt Error] ${message}`, ...args);
  } catch {
    // Silent
  }
}

/**
 * Execute callback only in development
 */
export function executeInDevelopment(callback: () => void): void {
  try {
    if (!isDevelopment() || typeof callback !== 'function') return;
    callback();
  } catch (error) {
    devError('Development execution failed:', error);
  }
}

/**
 * Execute callback only in production
 */
export function executeInProduction(callback: () => void): void {
  try {
    if (!isProduction() || typeof callback !== 'function') return;
    callback();
  } catch {
    // Silent
  }
}

// Legacy aliases for backwards compatibility
export const nuclearDevLog = devLog;
export const ultraDevLog = devLog;
export const nuclearDevWarn = devWarn;
export const ultraDevWarn = devWarn;
export const nuclearDevError = devError;
export const ultraDevError = devError;
export const isNuclearDevelopment = isDevelopment;
export const isUltraDevelopment = isDevelopment;
export const getNuclearEnvironmentInfo = () => `Aygıt Mode: ${getSafeEnvironment().mode}`;
export const getUltraEnvironmentInfo = getNuclearEnvironmentInfo;