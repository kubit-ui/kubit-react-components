<p align="center">
  <a href="https://kubit-ui.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/kubit-ui/bernova/raw/cms/assets/bernova.png">
      <img src="https://github.com/kubit-ui/bernova/raw/cms/assets/bernova.png" width="70%">
    </picture>
  </a>
</p>

<br />

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/bernova?style=for-the-badge&logo=npm&color=CB3837)](https://www.npmjs.com/package/bernova)
[![NPM Downloads](https://img.shields.io/npm/dm/bernova?style=for-the-badge&logo=npm&color=CB3837)](https://www.npmjs.com/package/bernova)
[![License](https://img.shields.io/github/license/kubit-ui/bernova?style=for-the-badge&color=blue)](./LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/kubit-ui/bernova?style=for-the-badge&logo=github&color=yellow)](https://github.com/kubit-ui/bernova/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/kubit-ui/bernova?style=for-the-badge&logo=github&color=red)](https://github.com/kubit-ui/bernova/issues)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

<br />

## Related Information

- [Instalation](#installation)
- [Configuration](#configuration)
- [How to use](#how-to-use)
- [Design tools](#design-tools)
  - [Foundations](#foundations)
  - [Global Styles](#global-styles)
  - [MediaQueries](#mediaqueries)
    - [Css MediaQueries](#Css-MediaQueries)
  - [Components Tools](#components-tools)
    - [Nested Styles](#Nested-styles)
    - [Variant styles](#Variant-styles)
    - [Css Pseudo Classes](#Css-Pseudo-Classes)
    - [Css Pseudo Elements](#Css-Pseudo-Elements)
    - [HTML Atributes](#HTML-Atributes)
    - [Css Advanced Selectors](#Css-Advanced-Selectors)
    - [Complex Styles](#Complex-Styles)
    - [Foreign Feature](#Foreign-Feature)
    - [Dynamic Values Feature](#Dynamic-Values-Feature)
- [Fonts](#setting-text-fonts)
- [Reset CSS](#enable-reset-css)
- [Typescript helps](#typescript-helps)
- [Multi themes](#using-multi-themes)
- [Provider](#library-provider)
- [Foreign CSS documents](#foreign-css-documents)
- [Compiler Options](#compiler-options)

## Installation

You can install Bernova using your preferred package manager:

```bash
# Using npm
npm install bernova

# Using yarn
yarn add bernova

# Using pnpm (recommended)
pnpm add bernova
```

## Configuration

The library requires a JSON configuration file located in the root of the project. The name of this file is **bernova.config.json**.

There is a script provided by the library to generate a template for the configuration file:

```bash
npx bv-config
```

**bernova.config.json** looks like this

```json
{
  "provider": {
    "name": "BernovaStyledProvider",
    "path": "./src/styles/provider",
    "declarationHelp": true
  },
  "themes": [
    {
      "name": "default",
      "minified": false,
      "theme": {
        "name": "BERNOVA_STYLES",
        "path": "./fixture/theme.ts"
      },
      "foundations": {
        "name": "FOUNDATIONS",
        "path": "./fixture/foundations/foundations.ts"
      },
      "globalStyles": {
        "name": "GLOBAL_STYLES",
        "path": "./fixture/globalStyles.ts"
      },
      "mediaQueries": {
        "name": "MEDIA_QUERIES",
        "path": "./fixture/mediaQueries.ts"
      },
      "resetCss": true,
      "stylesPath": "./src/styles/default",
      "bvTools": {
        "path": "./src/styles/default/tools",
        "declarationHelp": true,
        "cssVariables": true,
        "cssClassNames": true,
        "cssMediaQueries": true,
        "cssGlobalStyles": true,
        "availableComponents": true
      },
      "typesTools": {
        "stylesTypes": { "name": "stylesTypes", "path": "./src/styles/types" },
        "componentsTypes": {
          "name": "componentsTypes",
          "path": "./src/styles/default/tools"
        }
      },
      "fonts": {
        "google": [
          {
            "name": "Roboto",
            "weights": ["300", "400", "600", "700"]
          }
        ]
      }
    }
  ]
}
```

## How to use

The library has a script to transpile the js code into css. The command for this is:

```bash
npx bernova
```

By adding a flag at the end of the script, you can transpile only part of the project.

For FOUNDATIONS, MediaQueries, and GlobalStyles:

```bash
npx bernova --foundationOnly
```

For the classes of the HTML elements and available components

```bash
npx bernova --componentOnly
```

## Design Tools

### Foundations

The library gives you a lot of freedom when it comes to applying styles, but it also provides tools to follow good CSS practices. If you want to use the CSS variable system, you must add that configuration to the **bernova.config.json** file and create that document in the path provided.

```json
{
  "themes": [
    {
      //... rest of the config
      "foundations": {
        "name": "FOUNDATIONS",
        "path": "./fixture/foundations/foundations.ts"
      }
      //... rest of the config
    }
  ]
}
```

foundation example:

```js
export const FOUNDATIONS = {
  colors: {
    primary: '#FF0000',
    secondary: '#00FF00',
    tertiary: '#0000FF',
  },
  sizes: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
};
```

The result of this when transpiling is

```css
:root {
  --colors-primary: #ff0000;
  --colors-secondary: #00ff00;
  --colors-tertiary: #0000ff;
  --sizes-small: 4px;
  --sizes-medium: 8px;
  --sizes-large: 12px;
}
```

If you add bvTools to the configuration file, you can have an object to access these variables from your js code.

```json
{
  "themes": [
    {
      //... rest of the config
      "foundations": {
        "name": "FOUNDATIONS",
        "path": "./fixture/foundations/foundations.ts"
      },
      "bvTools": {
        "path": "./src/styles/default/tools",
        "declarationHelp": true,
        "cssVariables": true
      }
      //... rest of the config
    }
  ]
}
```

The resulting tool is

```js
export const cssVars = {
  colors_primary: 'var(--colors-primary)',
  colors_secondary: 'var(--colors-secondary)',
  colors_tertiary: 'var(--colors-tertiary)',
  sizes_small: 'var(--sizes-small)',
  sizes_medium: 'var(--sizes-medium)',
  sizes_large: 'var(--sizes-large)',
};
```

For use with TypeScript, if we set the declarationHelp key to true, it will give us a declaration file.

```ts
export declare const cssVars: {
  colors_primary: string;
  colors_secondary: string;
  colors_tertiary: string;
  sizes_small: string;
  sizes_medium: string;
  sizes_large: string;
};
```

### Global Styles

We can create global styles for the project and create their tools, as long as they are CSS classes.

```json
{
  "themes": [
    {
      //... rest of the config
      "globalStyles": {
        "name": "GLOBAL_STYLES",
        "path": "./fixture/globalStyles.ts"
      }
      //... rest of the config
    }
  ]
}
```

Global styles example:

```js
export const GLOBAL_STYLES = [
  { targets: 'html, body', styles: { font_size: '16px' } },
  { targets: 'a', styles: { font_weight: '700' } },
  { targets: '*', styles: { box_sizing: 'border-box' } },
  { targets: '.padding-4', styles: { padding: '4px' } },
  { targets: '.padding-8', styles: { padding: '8px' } },
];
```

The result of this when transpiling is:

```css
html,
body {
  font-size: 16px;
}
a {
  font-weight: 700;
}
* {
  box-sizing: border-box;
}
.padding-4 {
  padding: 4px;
}
.padding-8 {
  padding: 8px;
}
```

If you add bvTools to the configuration file, you can have an object to access these variables from your js code.

```json
{
  "themes": [
    {
      //... rest of the config
      "globalStyles": {
        "name": "GLOBAL_STYLES",
        "path": "./fixture/globalStyles.ts"
      },
      "bvTools": {
        "path": "./src/styles/default/tools",
        "declarationHelp": true,
        "cssGlobalStyles": true
      }
      //... rest of the config
    }
  ]
}
```

The resulting tool is (Only CSS classes are considered for the object):

```js
export const cssGlobalStyles = {
  padding_4: '.padding-4',
  padding_8: '.padding-8',
};
```

For use with TypeScript, if we set the declarationHelp key to true, it will give us a declaration file.

```ts
export declare const cssGlobalStyles: {
  padding_4: string;
  padding_8: string;
};
```

### MediaQueries

MediaQueries are an important aspect of CSS, and the library can handle them

```json
{
  "themes": [
    {
      //... rest of the config
      "mediaQueries": {
        "name": "MEDIA_QUERIES",
        "path": "./fixture/mediaQueries.ts"
      }
      //... rest of the config
    }
  ]
}
```

MediaQueries example:

```js
export const MEDIA_QUERIES = [
  {
    name: 'mobile',
    type: 'screen',
    values: {
      max_width: '767px',
      min_width: '240px',
    },
  },
  {
    name: 'tablet',
    type: 'screen',
    values: {
      max_width: '1024px',
      min_width: '768px',
    },
  },
  {
    name: 'desktop',
    type: 'screen',
    values: {
      max_width: '1440px',
      min_width: '1025px',
    },
  },
];
```

The result of this when transpiling is:

```css
@media screen and (max-width: 767px) and (min-width: 240px) {
  .test {
    padding: 10px;
  }
}
@media screen and (max-width: 1024px) and (min-width: 768px) {
  .test {
    padding: 20px;
  }
}
@media screen and (max-width: 1440px) and (min-width: 1025px) {
  .test {
    padding: 30px;
  }
}
```

If you add bvTools to the configuration file, you can have an object to access these variables from your js code.

```json
{
  "themes": [
    {
      //... rest of the config
      "mediaQueries": {
        "name": "MEDIA_QUERIES",
        "path": "./fixture/mediaQueries.ts"
      },
      "bvTools": {
        "path": "./src/styles/default/tools",
        "declarationHelp": true,
        "cssMediaQueries": true
      }
      //... rest of the config
    }
  ]
}
```

The resulting tool is:

```js
export const cssMediaQueries = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
};
```

For use with TypeScript, if we set the declarationHelp key to true, it will give us a declaration file.

```ts
export declare const cssMediaQueries: {
  mobile: 'mobile';
  tablet: 'tablet';
  desktop: 'desktop';
};
```

## Components tools

The main feature of the library is the ability to build CSS styles from a JavaScript literal object.

Example:

```js
const CONTAINER = {
  background_color: 'red',
  color: '#fff',
  border_radius: '8px',
};
```

The result of this when transpiling is:

```css
.container {
  background-color: red;
  color: #fff;
  border-radius: 8px;
}
```

You can create multiple objects with different components and export them all as a single object. To do this, remember to add the configuration in **bernova.config.json**.

```json
{
  "themes": [
    {
      //... rest of the config
      "theme": {
        "name": "BERNOVA_STYLES",
        "path": "./fixture/theme.ts"
      }
      //... rest of the config
    }
  ]
}
```

theme.ts example:

```js
import { BUTTON, LINK, CONTAINER } from './components';

export const BERNOVA_STYLES = {
  BUTTON,
  LINK,
  CONTAINER,
};
```

The result of this when transpiling is:

```css
.button {
  /* button styles */
}
.link {
  /* link styles */
}
.container {
  /* container styles */
}
```

### Nested styles

In many cases, HTML elements have nested children. It is possible to create styles for these from the main element object.

```js
export const BUTTON = {
  background: 'red',
  border: 'none',
  _text: {
    color: 'white',
    font_size: '12px',
  },
  _icon: {
    height: '16px',
    width: '16px',
    color: 'white',
  },
};
```

Based on the BEM methodology, the result would be as follows:

```css
.button {
  background: red;
  border: none;
}
.button__text {
  color: white;
  font-size: 12px;
}
.button__icon {
  height: 16px;
  width: 16px;
  color: white;
}
```

### Variant styles

Sometimes we may want to have several similar elements, but with certain variations in their design. The library also allows the use of variants in the javascript object for styles.

```js
const buttonVariants = {
  PRIMARY: 'PRIMARY',
  ALTERNATIVE: 'ALTERNATIVE',
};

export const BUTTON = {
  border: 'none',
  _text: {
    font_size: '16px',
  },
  _icon: {
    width: '16px',
    height: '16px',
  },
  [buttonVariants.PRIMARY]: {
    background: 'red',
    _text: {
      color: 'white',
    },
    _icon: {
      color: 'white',
    },
  },
  [buttonVariants.ALTERNATIVE]: {
    background: '#fff',
    _text: {
      color: '#000',
    },
    _icon: {
      color: '#000',
    },
  },
};
```

Based on the BEM methodology, the result would be as follows:

```css
.button {
  border: none;
}
.button__text {
  font-size: 16px;
}
.button__icon {
  width: 16px;
  height: 16px;
}
.button--primary {
  background: red;
}
.button__text--primary {
  color: white;
}
.button__icon--primary {
  color: white;
}
.button--alternative {
  background: #fff;
}
.button__text--alternative {
  color: #000;
}
.button__icon--alternative {
  color: #000;
}
```

### Css Pseudo Classes

A very common practice in CSS is the use of pseudo classes. The library allows their implementation from the JavaScript styles object.

```js
const BUTTON = {
  background_color: '#ff0000',
  color: 'white',
  $pseudoClasses: {
    active: {
      background_color: '#ac0202'
    },
    hover: {
      background_color: '#e94141',
    },
    focus: {
      border_color: '#0000ff',
    }
  }
}
```

The result of this when transpiling is:

```css
.button {
  background-color: #ff0000;
  color: white;
}
.button:active {
  background-color: #ac0202;
}
.button:hover {
  background-color: #e94141;
}
.button:focus {
  background-color: #0000ff;
}
```

### Css Pseudo Elements

Pseudo elements are widely used in CSS styles. The library also supports them.

```js
export const CONTAINER = {
  border_radius: '100%',
  border: '1px solid black',
  height: '80px',
  width: '80px',
  $pseudoElements: {
    before: {
      $content: '',
      position: 'absolute',
      border_radius: '100%',
      background_color: 'blue',
      height: '20px',
      width: '20px',
      left: '70px',
      top: '10px',
    },
  },
};
```

The result of this when transpiling is:

```css
.container {
  border-radius: 100%;
  border: 1px solid black;
  height: 80px;
  width: 80px;
}
.container::before {
  content: '';
  position: absolute;
  border-radius: 100%;
  background-color: blue;
  height: 20px;
  width: 20px;
  left: 70px;
  top: 10px;
}
```

### HTML Atributes

Sometimes, we need to condition the application of certain styles, depending on whether a certain condition is met.

#### Simple example:

If you only need to check that an attribute exists (Boolean), you can do so as follows:

HTML element example:

```html
<span class="message" data-valid="true">A simple notify</span>
```

Javascript style object:

```js
export const MESSAGE = {
  color: '#000',
  padding: '8px',
  border_radius: '16px',
  $attributes: {
    ['data-valid']: {
      cursor: 'pointer',
    },
  },
};
```

The result of this when transpiling is:

```css
.message {
  color: #000;
  padding: 8px;
  border-radius: 16px;
}
.message[data-valid='true'] {
  cursor: pointer;
}
```

#### Custom example

If you need the attribute value to be customized or have more than one use case, you can do so as follows:

HMLT element example:

```html
<span class="message" data-type="warning">A simple notify</span>
```

JavaScript style object:

```js
export const MESSAGE = {
  color: '#000',
  padding: '8px',
  border_radius: '16px',
  $attributes: {
    ['data-type']: {
      success: {
        background_color: 'green',
      },
      warning: {
        background_color: 'yellow',
      },
      error: {
        background_color: 'red',
      },
    },
  },
};
```

The result of this when transpiling is:

```css
.message {
  color: #000;
  padding: 8px;
  border-radius: 16px;
}
.message[data-type='success'] {
  background-color: green;
}
.message[data-type='warning'] {
  background-color: yellow;
}
.message[data-type='error'] {
  background-color: red;
}
```

### Css MediaQueries

An important aspect of modern designs is adaptability to different devices. This is usually handled with MediaQueries, so the library also supports this feature.

#### From project config

If you have created the media queries configuration file [MediaQueries](#MediaQueries), you can access its configuration using the configuration name as the object key.

```js
import { cssMediaQueries } from './tools/cssMediaQueries';

export const BANNER = {
  width: '1220px',
  $mediaQueries: {
    [cssMediaQueries.mobile]: {
      width: '240px',
    },
  },
};
```

The result of this when transpiling is:

```css
.banner {
  width: 1220px;
}
@media screen and (max-width: 767px) and (min-width: 240px) {
  .banner {
    width: 240px;
  }
}
```

#### Custom config

Sometimes, we need a very specific media query that is not found in the configuration structure. Or perhaps we don't want to generate the media query configuration because there will be very few use cases. For these types of situations, we can set up custom media queries.

```js
export const BANNER = {
  width: '1220px',
  $mediaQueries: {
    mini: {
      $type: 'screen',
      $values: { 'min-width': '100px', 'max-width': '200px' },
      width: '100px',
    },
  },
};
```

The result of this when transpiling is:

```css
.banner {
  width: 1220px;
}
@media screen and (max-width: 200px) and (min-width: 100px) {
  .banner {
    width: 100px;
  }
}
```

### Css Advanced Selectors

In CSS, advanced selectors can be used to access other elements of the DOM. To do this with the library, we can use the following feature

```js
export const CONTAINER = {
  height: '100px',
  width: '100px',
  $advancedSelector: [
    {
      descendant: {
        $target: 'span',
        color: 'red',
      },
    },
    {
      child: {
        $target: 'p',
        font_size: '10px';
        color: 'black',
      },
    },
  ]
}
```

The result of this when transpiling is:

```css
.container {
  height: 100px;
  width: 100px;
}
.container span {
  color: red;
}
.container > p {
  font-size: 10px;
  color: black;
}
```

### Complex Styles

Within each special feature (those that begin with the **$** symbol) of style objects in JavaScript, others can be used to create complex styles.

```js
export const CONTAINER = {
  width: '30px';
  height: '30px';
  $attributes: {
    ['data-hoverable']: {
      $pseudoClasses: {
        hover: {
          $advancedSelectors: [
            {
              descendant: {
                $target: 'p',
                background_color: 'red',
                color: 'white',
              },
            },
            {
              descendant: {
                $target: 'b',
                background_color: 'green',
                color: 'white',
              },
            },
            {
              child: {
                $target: 'span',
                background_color: 'blue',
                color: 'black',
              },
            },
          ]
        }
      }
    }
  }
}
```

The result of this when transpiling is:

```css
.container {
  width: 30px;
  height: 30px;
}
.container[data-hoverable='true']:hover p {
  background-color: red;
  color: white;
}
.container[data-hoverable='true']:hover b {
  background-color: green;
  color: white;
}
.container[data-hoverable='true']:hover > span {
  background-color: blue;
  color: white;
}
```

When nesting pseudo-classes and pseudo-elements, you can avoid using the **$** symbol a second time.

```js
export const INPUT = {
  border_color: 'black',
  border_radius: '4px',
  $pseudoClasses: {
    active: {
      before: {
        $content: '',
        color: '#ccc',
      },
    },
  },
};
```

The result of this when transpiling is:

```css
.input {
  border-color: black;
  border-radius: 4px;
}
.input:active::before {
  content: '';
  color: #ccc;
}
```

### Foreign Feature

When we are creating styles for an HTML element, there may be other nested elements whose styles we have already styled in another element and may want to reuse.

```js
import { LINK, BUTTON } from './components';

export const HEADER = {
  width: '100%',
  height: '80px',
  background_color: 'green',
  $foreign: {
    nav_item: {
      component: LINK,
      variant: 'primary',
      name: 'link',
    },
    loging_button: {
      component: BUTTON,
      name: 'button',
    },
  },
};
```

### Dynamic Values Feature

There may be a value within our styles that we need to retrieve dynamically. The library provides a tool to handle these cases.

IMPORTANT: The names of variables within the array, as well as in its implementation, must starts with the dollar char <**$**>.

```js
export const CONTAINER = {
  $dynamicValues: ['$bgColor', '$borderColor'],
  height: '100px',
  width: '100px',
  background_color: '$bgColor',
  border_color: '$borderColor',
};
```

The _$dynamicValues_ tool will return the result in string format and in object format so that we can use the one that applies in our case.

```js
import { StylesProvider } from './provider';

const styles = StylesProvider.getComponentStyles({ component: 'CONTAINER' });
const dynamicVars = styles.dynamic_values({
  $bgColor: 'white',
  $borderColor: 'red',
});

/**
 * dinamycVars = {
 *  string: '--bgcolor: white; --bordercolor: red',
 *  object: {
 *    '--bgcolor': 'white',
 *    '--bordercolor': 'red'
 *  }
 * }
 */
```

Example of implementation

```jsx
import { StylesProvider } from './provider';

export const Container = ({ bgColor, borderColor, children }) => {
  const styles = StylesProvider.getComponentStyles({ component: 'CONTAINER' });
  const dynamicVars = styles.dynamic_values({
    $bgColor: bgColor,
    $borderColor: borderColor,
  }).object;

  <div className={styles.container} style={dynamicVars}>
    {children}
  </div>;
};
```

In this case, only the styles for the header will be generated, and in the development tools, for _nav_item_ and _login_button_, the existing classes for BUTTON and LINK will be returned.

## Access to classNames

To use the generated CSS classes, you can use the name directly on the HTML element, as the library will return a valid CSS file.

```html
<button class="button button--primary">
  <span class="button__text button__text--primary">Button Text</span>
</button>
```

However, this can be complex to use in collaborative projects or large projects. The library provides an object that records all the CSS classes generated.

```json
{
  "themes": [
    {
      //... rest of the config
      "theme": {
        "name": "BERNOVA_STYLES",
        "path": "./fixture/theme.ts"
      },
      "bvTools": {
        "path": "./src/styles/default/tools",
        "declarationHelp": true,
        "cssClassNames": true
      }
      //... rest of the config
    }
  ]
}
```

The returned object looks like this:

```js
export const cssClasses = {
  button: 'button',
  button_icon: 'button__icon',
  button_text: 'button__text',
  button_primary: 'button button--primary',
  button_icon_primary: 'button__icon button__icon--primary',
  button_text_primary: 'button__text button__text--primary',
  card: 'card',
  card_header: 'card__header',
  card_body: 'card__body',
  card_footer: 'card__footer',
};
```

For use with TypeScript, if we set the declarationHelp key to true, it will give us a declaration file.

```ts
export declare const cssClasses: {
  button: string;
  button_icon: string;
  button_text: string;
  button_primary: string;
  button_icon_primary: string;
  button_text_primary: string;
  card: string;
  card_header: string;
  card_body: string;
  card_footer: string;
};
```

Example of use

```jsx
import { cssClasses } from './tools';

export const Button = ({ text }) => {
  return (
    <button className={cssClasses.button_primary}>
      <span className={cssClasses.button_text_primary}>{text}</span>
    </button>
  );
};
```

## Access to components

Sometimes, we may need to know which components have been styled with the library, beyond just the CSS classes.

```json
{
  "themes": [
    {
      //... rest of the config
      "theme": {
        "name": "BERNOVA_STYLES",
        "path": "./fixture/theme.ts"
      },
      "bvTools": {
        "path": "./src/styles/default/tools",
        "declarationHelp": true,
        "availableComponents": true
      }
      //... rest of the config
    }
  ]
}
```

The returned object looks like this:

```js
export const cssAvailableComponents = {
  BUTTON: 'BUTTON',
  CARD: 'CARD',
};
```

For use with TypeScript, if we set the declarationHelp key to true, it will give us a declaration file.

```ts
export declare const cssAvailableComponents: {
  BUTTON: 'BUTTON';
  CARD: 'CARD';
};
```

## Using variables in JavaScript objects for styles

We typically use constants to store values and reuse them when necessary.

```js
const SIZES = {
  small: '4px',
  medium: '8px',
  large: '12px',
};
const COLORS = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  white: '#fff',
};
export const BUTTON = {
  background_color: COLORS.red,
  padding: SIZES.medium,
  border_radius: SIZES.small,
  color: COLORS.white,
};
```

The result of this when transpiling is:

```css
.button {
  background-color: #ff0000;
  padding: 8px;
  border-radius: 4px;
  color: #fff;
}
```

This could work in the library, but if you want to use the CSS variable system, it is advisable to create the tools for the [foundations](#Foundations)

```js
import { cssVars } from './tools';

export const BUTTON = {
  background_color: cssVars.colors_red,
  padding: cssVars.sizes_medium,
  border_radius: cssVars.sizes_small,
  color: cssVars.colors_white,
};
```

The result of this when transpiling is:

```css
.button {
  background-color: var(--colors-red);
  padding: var(--sizes-medium);
  border-radius: var(--sizes-small);
  color: var(--colors-white);
}
```

## Setting text fonts

```json
{
  "themes": [
    {
      //... rest of the config
      "fonts": {
        "google": [
          {
            "name": "Roboto",
            "weights": ["300", "400", "600", "700"]
          }
        ]
      }
      //... rest of the config
    }
  ]
}
```

The result of this when transpiling is:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&display=swap');
```

## Enable Reset CSS

The library has a feature that can be enabled so that the generated CSS resets certain styles.

```json
{
  "themes": [
    {
      //... rest of the config
      "resetCss": true
      //... rest of the config
    }
  ]
}
```

The result of this when transpiling is:

```css
html {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  box-sizing: border-box;
  background-color: transparent;
  border: 0;
}
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
dialog,
input,
button {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  box-sizing: border-box;
  background-color: transparent;
  border: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote::before,
blockquote::after,
q::before,
q::after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

@supports (font: -apple-system-body) {
  html {
    font: -apple-system-body;
  }
}
@supports (font: system-ui) {
  html {
    font: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
      Noto Sans, sans-serif;
  }
}
```

## TypeScript Helps

The tools generated by the library are in JavaScript format, but they have declaration files for type support in TypeScript. In addition to this, the library can generate _types_ to help in the construction of style objects or for the structure of components styled with the library.

```json
{
  "themes": [
    {
      //... rest of the config
      "typesTools": {
        "stylesTypes": {
          "name": "stylesTypes",
          "path": "./src/styles/types"
        },
        "componentsTypes": {
          "name": "componentsTypes",
          "path": "./src/styles/default/tools"
        }
      }
      //... rest of the config
    }
  ]
}
```

## Using Multi themes

If you need to work with different themes, the **themes** key of the configuration object is an array and allows you to customize settings for different themes. The result will be a CSS document for each theme, as well as its set of tools.

```json
{
  "provider": {
    "name": "TsAppProvider",
    "path": "./src/provider"
  },
  "themes": [
    {
      "name": "default",
      "theme": {
        "name": "BERNOVA_STYLES",
        "path": "./src/design/default/components/theme.ts"
      },
      "foundations": {
        "name": "FOUNDATIONS",
        "path": "./src/design/default/foundations/foundations.ts"
      },
      "mediaQueries": {
        "name": "MEDIA_QUERIES",
        "path": "./src/design/default/mediaQueries/mediaQueries.ts"
      },
      "resetCss": false,
      "stylesPath": "./src/styles/default",
      "fonts": {
        "google": [
          {
            "name": "Roboto",
            "weights": ["300", "400", "600", "700"]
          }
        ]
      }
    },
    {
      "name": "alternative",
      "theme": {
        "name": "BERNOVA_STYLES",
        "path": "./src/design/alternative/components/theme.ts"
      },
      "foundations": {
        "name": "FOUNDATIONS",
        "path": "./src/design/alternative/foundations/foundations.ts"
      },
      "mediaQueries": {
        "name": "MEDIA_QUERIES",
        "path": "./src/design/alternative/mediaQueries/mediaQueries.ts"
      },
      "resetCss": true,
      "stylesPath": "./src/styles/alternative",
      "fileName": "alternative",
      "fonts": {
        "google": [
          {
            "name": "Roboto",
            "weights": ["300", "400", "600", "700"]
          }
        ]
      }
    }
  ]
}
```

## Library Provider

If the project is very large, it is likely that you will need to manage all the tools generated by the library. This is why the library can create a JavaScript Provider to handle all these aspects. Like the other tools, the declaration files are available to the provider.

```json
{
  "provider": {
    "name": "StylesProvider",
    "path": "./src/styles/provider",
    "declarationHelp": true
  },
  "themes": [
    {
      "name": "theme-1"
      //... theme configurations
    },
    {
      "name": "theme-2"
      //... theme configurations
    }
  ]
}
```

### Handler themes

The provider returned by the library will be built automatically, allowing access to multiple themes, variables, styled components, and CSS classes. All that is required is to create a new instance of the provider.

```js
import { StylesProvider } from './src/styles/provider'; // <-- The same name and same route of bernova.config.json

export const ThemeProvider = new StylesProvider();
```

You can allow the provider to manage the import of CSS into the DOM with minimal configuration.

```js
import { StylesProvider } from './src/styles/provider'; // <-- The same name and same route of bernova.config.json

export const ThemeProvider = new StylesProvider({ jsInCss: true });
```

In order for the strategy of allowing the provider to manage the import of CSS with multiple instances of the provider to work, an ID can be set for each instance.

```js
import { StylesProvider } from './src/styles/provider'; // <-- The same name and same route of bernova.config.json

export const LightThemeProvider = new StylesProvider({
  jsInCss: true,
  id: 'lighttheme1',
});
export const DarkThemeProvider = new StylesProvider({
  jsInCss: true,
  id: 'darktheme1',
});
```

It is also possible to switch between themes from the same provider.

```js
import { StylesProvider } from './src/styles/provider';

export const ThemeProvider = new StylesProvider({ jsInCss: true });

ThemeProvider.themeSelected = 'dark';
```

If you do not have access to, or do not know, the names of the topics generated with the library, the provider also has tools to manage this.

```js
import { StylesProvider } from './src/styles/provider';

export const ThemeProvider = new StylesProvider({ jsInCss: true });

const themes = ThemeProvider.allThemeNames; // <-- string[]

export const themeObject = themes.reduce((acc, theme) => {
  acc[theme] = theme;
  return acc;
}, {});
```

You can also access the complete themes with their variables, components, and CSS classes associated with each one.

```js
import { StylesProvider } from './src/styles/provider';

export const ThemeProvider = new StylesProvider({ jsInCss: true });

const completeThemes = ThemeProvider.allThemes;
```

#### Provider themes tools

Once you have selected the theme you want to work with (if you don't specify one, it will default to the first one), you can access the variables, CSS classes, and components by parts associated only with the selected theme.

```js
import { StylesProvider } from './src/styles/provider';

export const ThemeProvider = new StylesProvider({ jsInCss: true });

const themes = ThemeProvider.allThemeNames;
export const themeObject = themes.reduce((acc, theme) => {
  acc[theme] = theme;
  return acc;
}, {});

ThemeProvider.themeSelected = themeObject.dark;
export const cssDarkVariables = ThemeProvider.variables;
export const cssDarkClasses = ThemeProvider.classsNames;
export const cssDarkComponents = ThemeProvider.components;
export const cssDarkGlobalStyles = ThemeProvider.globalStyles;
export const cssDarkMediaQueries = ThemeProvider.mediaQueries;
```

To use the specific CSS classes of a component from a selected theme, there is no need to create different interactions between the objects returned by the provider. There is a method to manage this.

```js
import { StylesProvider } from './src/styles/provider';

export const ThemeProvider = new StylesProvider({ jsInCss: true });

const { components, getComponentStyles } = ThemeProvider;

const buttonStyles = getComponentStyles({
  variant: 'primary', // <-- optional parameter
  component: components.button,
});

/*
 * buttonStyles = {
 *   button: 'button button--primary,
 *   text: 'button__text button__text--primary,
 *   icon: 'button__icon button__icon--primary,
 * }
 */
```

The **getComponentStyle** method has a prop that allows you to extend CSS classes with external classes, as long as the object structure is maintained.

```js
import { StylesProvider } from './src/styles/provider';

export const ThemeProvider = new StylesProvider({ jsInCss: true });

const { components, getComponentStyles } = ThemeProvider;

const additionalClassNames = {
  button: 'external-color',
  text: 'external-size',
};

const buttonStyles = getComponentStyles({
  variant: 'primary', // <-- optional parameter
  component: components.button,
  additionalClassNames,
});

/*
 * buttonStyles = {
 *   button: 'button button--primary external-color,
 *   text: 'button__text button__text--primary external-size,
 *   icon: 'button__icon button__icon--primary,
 * }
 */
```

## Foreign CSS documents

You probably already have CSS documents with highly customized rules and want to integrate these documents into the library provider. There is a key in the individual configuration of each theme to add all these additional documents, which will be associated with the theme in which they are established.

```json
{
  "provider": {
    "name": "StylesProvider",
    "path": "./src/styles/provider",
    "declarationHelp": true
  },
  "themes": [
    {
      "name": "theme-1",
      "foreignThemes": [
        {
          "position": "before",
          "name": "teams",
          "path": "./fixture/teams.css"
        },
        {
          "position": "after",
          "name": "reset",
          "path": "./fixture/reset.css"
        }
      ]
      //... theme configurations
    }
  ]
}
```

With this configuration, every time the provider injects the related theme's CSS, it will also inject the established CSS. Similarly, if the external CSS files have CSS classes or variables, these keys can be accessed in their corresponding categories from the provider.

### Recover className from extenal css document

```js
import { ThemeProvider } from './src/styles/provider';

const { components, getComponentStyles } = ThemeProvider;

const avatarStyles = getComponentStyles({
  component: components.teams, // <-- This is from teams.css document
});
```

### Recover variable from extenal css document

```js
import { ThemeProvider } from './src/styles/provider';

export const LOGIN_BUTTON = {
  background_color: ThemeProvider.variables.color_teams_primary, // <-- This is from ':root' into teams.css document
};
```

## Compiler Options

There is a script provided by the library to generate a build/dist bundler is:

```bash
npx bv-build
```

When publishing our projects, depending of the packager configuration, it is necessary to move static files or other types of documents not originalle included. Bernova manages the files necessary for proper operation in production.

```json
{
  // ...rest of the config
  "compilerOptions": {
    "baseOutDir": "./dist",
    "rootDir": "./src",
    "minifyCss": true,
    "minifyJS": true,
    "preventMoveJS": false,
    "preventMoveDTS": false,
    "types": ["cjs", "esm"],
    "customOutDirs": {
      "css": "./custom/outdir/css",
      "provider": "./custom/outdir/provider",
      "tools": "./custom/outdir/tools"
    }
  }
  // ...rest of the config
}
```

### Compiler Options Properties

- **baseOutDir**: Specifies the base output directory where all compiled files will be placed. This is the root folder for your distribution files.

- **rootDir**: Defines the root directory of your source code. Used as a reference point to maintain the relative structure of the files when copying them to the output directory.

- **minifyCss**: When set to `true`, CSS files will be minified to reduce file size. The minified files will have the `.min.css` extension.

- **minifyJS**: When set to `true`, JavaScript files will be minified using Terser. This reduces file size by compressing the code, removing dead code, and dropping debbuger statements.

- **preventMoveJS**: When set to `true`, JavaScript file will remain in their original location instead of being copied to the output directory. Useful if you want to manage JS file separately.

- **preventMoveDTS**: When set to `true`, TypeScript declaration files (.d.ts) will not be copied to the output directory. Set this to `true` if you're handling type definitions through another process.

- **types**: An array that specifies the module formats to generate. Accepts `"cjs"` (Commonjs) and/or `"esm"` (ES Modules). For each type specified, Bernova will create a separate folder and transpile the code accordingly.

  - `"cjs"`: Generate CommonJS modules for node.js compability.
  - `"esm"`: Generate ES Modules for modern JavaScript environments

- **customOutDirs**: An optional object that allows you to specify custom output directories for different file types, overriding the default structure:
 - `"css"`: Custom output path for CSS files
 - `"provider"`: Custom output path for provider file
 - `"tools"`: Custom output path for tools files (cssVars, cssClasses, etc)

- **embedCss**: When set to `'true'`, instead of generating a static CSS file, the styles generated by Bernova will be embedded.

 ### Overwrite or set a single customOutDirs

You may need to run the bv-build script in multiple outputs, and the bernova.config.json file configuration only supports one path. In these cases, you can use flags to specify the output path for the specific case.

```bash
# css case
npx bv-build --css dist/custom/output

# tools case
npx bv-build --tools dist/custom/output

# provider and stats case
npx bv-build --provider dist/custom/output

# full case
npx bv-build --css dist/custom/output --tools dist/custom/output --provider dist/custom/output
```

There are other cases where you may need to override values set in the bernova.config.json document or set a specific value for a single case.

**Important**: For affirmative Boolean values, it is sufficient to set the flag. And to remove values set in the bernova.config.json file, the word `'none'` is used.

The flags available for this are:

```bash
# baseOutDir case
npx bv-build --base-out-dir custom/base/out/dir

# rootDir case
npx bv-build --root-dir custom/root/dir

# preventMoveJS case
npx bv-build --prevent-move-js

# preventMoveDTS case
npx bv-build --prevent-move-dts

# unset types values from bernova.config.json
npx bv-build --types none

# Prevent process the js ad dts files
npx bv-build --prevent-process-js

# Embed styles
npx bv-build --embed-css
```