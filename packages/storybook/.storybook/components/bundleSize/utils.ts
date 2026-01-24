/* eslint-disable @typescript-eslint/no-explicit-any */
import bundleSizesData from '../../bundle-sizes.json';

interface BundleSizeInfo {
  component: string;
  sizes: {
    css: {
      formatted: string;
      gzip: number;
      gzipFormatted: string;
      raw: number;
    };
    js: {
      formatted: string;
      gzip: number;
      gzipFormatted: string;
      raw: number;
    };
    total: {
      formatted: string;
      gzip: number;
      gzipFormatted: string;
      raw: number;
    };
  };
  timestamp: string;
  treeshakeable: boolean;
}

/**
 * Get bundle size information for a component
 */
export function getBundleSize(componentName: string): BundleSizeInfo | null {
  const data = bundleSizesData as any;

  if (!data || !data.components) {
    return null;
  }

  // Try direct match first
  if (data.components[componentName]) {
    return data.components[componentName];
  }

  // Try case-insensitive match
  const lowerName = componentName.toLowerCase();
  for (const [key, value] of Object.entries(data.components)) {
    if (key.toLowerCase() === lowerName) {
      return value as BundleSizeInfo;
    }
  }

  return null;
}

/**
 * Extract component name from story title
 * Example: "Components/Actions/Button" => "button"
 */
export function extractComponentName(title: string): string {
  const parts = title.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart?.toLowerCase().trim() || '';
}
