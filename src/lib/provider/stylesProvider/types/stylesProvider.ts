import type { RecoverComponentStyles } from '@/lib/types/cssGenerator/cssGenerator';

import type { Provider } from '../../cssProvider/provider';

/**
 * Defines responsive breakpoints in pixels for different screen sizes.
 * Used for creating media queries and responsive layouts.
 */
export interface Breakpoints {
  /** Small screen breakpoint (typically mobile landscape) - default: 576px */
  sm: number;
  /** Medium screen breakpoint (typically tablets) - default: 768px */
  md: number;
  /** Large screen breakpoint (typically desktops) - default: 992px */
  lg: number;
  /** Extra large screen breakpoint (typically large desktops) - default: 1200px */
  xl: number;
}

/**
 * Props for the StylesProvider component.
 * Configures the styling system including themes, breakpoints, and assets.
 */
export interface StylesProviderProps {
  /** The React children to be wrapped by the provider */
  children: React.ReactNode;

  /** Custom breakpoints for responsive design. If not provided, uses default breakpoints */
  breakpoints?: Breakpoints;

  /** Map of icon names to their corresponding URLs or base64 strings */
  icons?: Record<string, string>;

  /** Map of illustration names to their corresponding URLs or base64 strings */
  illustrations?: Record<string, string>;

  /** The initial theme to be applied. If not provided, uses the provider's default theme */
  themeSelected?: string;

  /** Custom Bernova provider instance for advanced styling control */
  bernovaProvider?: typeof Provider;

  /** ID for the style link element in the DOM. Default: 'kb-styled-provider' */
  linkId?: string;

  /** Whether to inject CSS directly into JavaScript. Default: true */
  jsInCss?: boolean;
}

/**
 * Media query strings for targeting specific screen size ranges.
 * Built from the provided breakpoints configuration.
 */
export interface MediaQueries {
  /** Media query for mobile devices only (below md breakpoint) */
  onlyMobile: string;
  /** Media query for tablets only (between md and lg breakpoints) */
  onlyTablet: string;
  /** Media query for desktops (below xl breakpoint) */
  onlyDesktop: string;
  /** Media query for large desktops (xl breakpoint and above) */
  onlyLargeDesktop: string;
}

/**
 * Context value provided by StylesProvider.
 * Contains all styling-related data and utilities available to child components.
 */
export interface StylesContextProps {
  /** Current responsive breakpoints configuration */
  breakpoints: Breakpoints;

  /** Array of CSS class names or null */
  classes: string[] | null;

  /** Pre-built media query strings for responsive design */
  mediaQueries: MediaQueries;

  /** Map of available icons */
  icons: Record<string, string>;

  /** Map of available illustrations */
  illustrations: Record<string, string>;

  /** Currently active theme name, or null if no theme is selected */
  currentTheme: string | null;

  /** Function to retrieve styles for a specific component and variant */
  getComponentStyles: RecoverComponentStyles;

  /** Function to change the active theme */
  changeTheme: (themeName: string) => void;

  /** Array of CSS class names for the current theme */
  themeClassNames: string[];

  /** Map of all available themes */
  themes: Record<string, string>;

  /** Map of CSS custom properties (variables) for the current theme */
  themeVariables: Record<string, string>;
}
