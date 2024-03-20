export interface CssProperty {
  cssPropertyName: string;
  cssPropertyValue: string;
}

export const changeCssProperty = (element: HTMLElement, cssProperties: CssProperty[]): void => {
  if (cssProperties.length < 1) {
    return;
  }
  for (let i = 0; i < cssProperties.length; i++) {
    element.style.setProperty(cssProperties[i].cssPropertyName, cssProperties[i].cssPropertyValue);
  }
};
