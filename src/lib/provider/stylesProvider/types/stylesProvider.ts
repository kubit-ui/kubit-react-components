import type { RecoverComponentStyles } from '@/lib/types/cssGenerator/cssGenerator';

import type { Provider } from '../../cssProvider/provider';

export interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface StylesProviderProps {
  children: React.ReactNode;
  breakpoints?: Breakpoints;
  icons?: Record<string, string>;
  illustrations?: Record<string, string>;
  themeSelected?: string;
  bernovaProvider?: typeof Provider;
  linkId?: string;
  jsInCss?: boolean;
}

export interface MediaQueries {
  onlyMobile: string;
  onlyTablet: string;
  onlyDesktop: string;
  onlyLargeDesktop: string;
}

export interface StylesContextProps {
  breakpoints: Breakpoints;
  classes: string[] | null;
  mediaQueries: MediaQueries;
  icons: Record<string, string>;
  illustrations: Record<string, string>;
  currentTheme: string | null;
  getComponentStyles: RecoverComponentStyles;
  changeTheme: (themeName: string) => void;
  themeClassNames: string[];
  themes: Record<string, string>;
  themeVariables: Record<string, string>;
}
