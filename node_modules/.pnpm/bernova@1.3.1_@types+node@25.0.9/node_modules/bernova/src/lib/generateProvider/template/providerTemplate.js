import {
  cssThemes,
  cssClasses,
  cssVars,
  cssAvailableComponents,
  cssGlobalStyles,
  cssMediaQueries,
} from './stats/stats';

export class $_Provider_$ {
  #currentTheme;
  #themes;
  #themesVariables;
  #themesClassNames;
  #themesComponents;
  #themesGlobalStyles;
  #themesMediaQueries;
  #linkId;
  #jsInCss;
  /* Bernova provider methods */
  #linkBuilder = (url, id) => {
    if (typeof document === 'undefined') return;
    let linkElement = document.getElementById(id);
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.id = id;
      linkElement.rel = 'stylesheet';
      document.head.appendChild(linkElement);
    }
    const href = new URL(url, import.meta.url).href;
    linkElement.href = href;
  };
  #handlerThemes = (data) => {
    const { css, foreign } = data;
    const beforeFiles = foreign?.before || [];
    const afterFiles = foreign?.after || [];
    //* set the lower priority foreign themes
    beforeFiles.forEach((url, idx) => {
      const id = `${this.#linkId}-foreign-before-${idx + 1}`;
      this.#linkBuilder(url, id);
    });
    //* set main theme
    this.#linkBuilder(css, this.#linkId);
    //* set the higher priority foreign themes
    afterFiles.forEach((url, idx) => {
      const id = `${this.#linkId}-foreign-after-${idx + 1}`;
      this.#linkBuilder(url, id);
    });
  };
  #cleanUpLinks = () => {
    if (typeof document === 'undefined') return;
    const links = document.querySelectorAll(`link[id^="${this.#linkId}"]`);
    links.forEach((link) => link.remove());
  };
  /* Bernova provider methods */

  constructor({ linkId, jsInCss } = {}) {
    this.#themes = cssThemes;
    this.#themesVariables = cssVars;
    this.#themesClassNames = cssClasses;
    this.#themesComponents = cssAvailableComponents;
    this.#themesGlobalStyles = cssGlobalStyles;
    this.#themesMediaQueries = cssMediaQueries;
    this.#linkId = linkId || 'kb-styled-link';
    this.#currentTheme = Object.keys(cssThemes)[0];
    this.#jsInCss = !!jsInCss;
    this.getComponentStyles = this.getComponentStyles.bind(this);

    if (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      this.#jsInCss
    ) {
      this.#cleanUpLinks();
      this.#handlerThemes(this.#themes[this.#currentTheme]);
    }
  }
  // ? getters and setters
  //* theme selected
  get themeSelected() {
    return this.#currentTheme;
  }
  set themeSelected(themeName) {
    if (themeName in this.#themes) {
      if (this.#jsInCss) {
        this.#cleanUpLinks();
        this.#handlerThemes(this.#themes[themeName]);
      }
      this.#currentTheme = themeName;
    } else {
      throw new Error(`${themeName} is not exists`);
    }
  }
  //* themes
  get allThemesNames() {
    return Object.keys(this.#themes);
  }
  get allThemes() {
    return this.#themes;
  }
  //* variables
  get variables() {
    return this.#themesVariables[this.#currentTheme];
  }
  //* classNames
  get classNames() {
    return this.#themesClassNames[this.#currentTheme];
  }
  //* components
  get components() {
    return this.#themesComponents[this.#currentTheme];
  }
  //* global styles
  get globalStyles() {
    return this.#themesGlobalStyles[this.#currentTheme];
  }
  //* media queries
  get mediaQueries() {
    return this.#themesMediaQueries[this.#currentTheme];
  }
  //? methods
  getComponentStyles({ variant, component, additionalClassNames }) {
    const THEME = this.#themesClassNames[this.#currentTheme];
    const upperComponent = component.toLocaleUpperCase();
    const COMPONENT = THEME[upperComponent];

    if (!COMPONENT) return {};

    const structure = {};
    const startV = '$_';
    const componentVariant = (() => {
      if (!!variant) {
        const lowerVariant = variant.toLocaleLowerCase().replace(/-/g, '_');
        return `${startV}${lowerVariant}`;
      } else {
        return false;
      }
    })();
    if (componentVariant && componentVariant in COMPONENT) {
      const variantFragment = COMPONENT[componentVariant];
      Object.entries(variantFragment).forEach(([key, value]) => {
        if (!(key in structure)) {
          structure[key] = value;
        }
      });
    }
    Object.entries(COMPONENT).forEach(([key, value]) => {
      if (key.startsWith(startV)) return;
      if (!(key in structure)) {
        structure[key] = value;
      }
    });
    if (!!additionalClassNames && Object.keys(additionalClassNames).length) {
      Object.entries(additionalClassNames).forEach(([key, value]) => {
        if (!(key in structure)) {
          structure[key] = '';
        }
        structure[key] += ` ${value}`;
      });
    }
    return structure;
  }
}
