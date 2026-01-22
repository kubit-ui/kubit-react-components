import {
  cssThemes,
  cssClasses,
  cssVars,
  cssAvailableComponents,
  cssGlobalStyles,
  cssMediaQueries,
} from './stats/stats';

type ThemesKeys = keyof typeof cssThemes;
/* Get the types of each variable from the current theme selected */
type VarFromTheme = (typeof cssVars)[ThemesKeys];
type ClassNameFromTheme = (typeof cssClasses)[ThemesKeys];
type ComponentsFromTheme = (typeof cssAvailableComponents)[ThemesKeys];
type ComponentsKey = keyof ComponentsFromTheme;
type GlobalStylesFromThemes = (typeof cssGlobalStyles)[ThemesKeys];
type MediaQueriesFromThemes = (typeof cssMediaQueries)[ThemesKeys];
/* Get the type of non-variable keys from a component required */
type NonVariablesKeys<T> = {
  [K in keyof T]: K extends `$${string}` ? never : K;
}[keyof T];
type ComponentSelected<T> = Pick<T, NonVariablesKeys<T>>;

export declare class $_Provider_$ {
  private static instance: $_Provider_$;
  #currentTheme: ThemesKeys;
  #themes: typeof cssThemes;
  #themesVariables: typeof cssVars;
  #themesClassNames: typeof cssClasses;
  #themesComponents: typeof cssAvailableComponents;
  #themesGlobalStyles: typeof cssGlobalStyles;
  #themesMediaQueries: typeof cssMediaQueries;
  #linkId: string;
  #jsInCss: boolean;
  /* Bernova provider methods */
  #linkBuilder: (url: string, id: string) => void;
  #handlerThemes: (data: {
    css: string;
    foreign?: { high?: string[]; low?: string[] };
  }) => void;
  #cleanUpLinks: () => void;
  /* Bernova provider methods */

  constructor(options?: { linkId?: string; jsInCss?: boolean });

  get themeSelected(): string | null;
  get allThemesNames(): string[];
  get allThemes(): Record<string, string>;
  get variables(): VarFromTheme;
  get classNames(): ClassNameFromTheme;
  get components(): ComponentsFromTheme;
  get globalStyles(): GlobalStylesFromThemes;
  get mediaQueries(): MediaQueriesFromThemes;

  set themeSelected(themeName: string);

  getComponentStyles<T extends ComponentsKey>(params: {
    variant?: string;
    component: T;
    additionalClassNames?: Partial<ComponentSelected<ClassNameFromTheme[T]>>;
  }): ComponentSelected<ClassNameFromTheme[T]>;
}
