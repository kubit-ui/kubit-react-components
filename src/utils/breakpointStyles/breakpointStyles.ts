import { CSSProp, css } from 'styled-components';

export const addBreakpointStyles = (mediaQuery: string, stylesObj: object): CSSProp | string => {
  let template = '';

  if (!mediaQuery || !stylesObj || !Object.keys(stylesObj).length) {
    return template;
  }

  Object.keys(stylesObj).forEach((prop: string) => {
    template += `
      ${prop}: ${stylesObj[prop]};
    `;
  });

  return css`
    ${mediaQuery} {
      ${template}
    }
  `;
};
