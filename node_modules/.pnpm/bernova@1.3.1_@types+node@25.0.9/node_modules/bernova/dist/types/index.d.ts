// Type definitions for Bernova
export interface BernovaConfig {
  themes: any[];
  provider?: {
    path: string;
    name: string;
    declarationHelp?: boolean;
  };
}

export interface BernovaTheme {
  name: string;
  stylesPath?: string;
  [key: string]: any;
}

// Main Bernova function
export function bernovaStyles(compilerType?: string): Promise<void>;

// Library exports
export const lib: any;
export const constants: any;

// Default export
declare const bernova: {
  bernovaStyles: typeof bernovaStyles;
  lib: typeof lib;
  constants: typeof constants;
};

export default bernova;
