import { useTheme } from 'styled-components';

import { mergeObjects } from '@/utils/mergeObjects/mergeObjects';

export const useStyles = <T, V = undefined | string>(
  styleName: string,
  typeName?: V,
  customTokens?: object
): T => {
  const theme = useTheme();
  const style = theme[styleName];
  let styles = style;

  if (!style) {
    throw Error(`styles ${styleName} does not exist`);
  }

  if (styleName !== undefined && typeName !== undefined) {
    if (style?.[typeName]) {
      if (customTokens) {
        styles = mergeObjects(structuredClone(style[typeName]), customTokens);
      } else {
        styles = style[typeName];
      }
    } else {
      throw Error(`type ${typeName} does not exist`);
    }
  }

  return styles;
};
