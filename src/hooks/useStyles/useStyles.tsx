import { useTheme } from 'styled-components';

import { mergeObjects, structuredClone } from '@/utils';

/**
 * @version This hook has a upper version, please use useStylesV2
 */
export const useStyles = <T extends object, V = undefined | string>(
  styleName: string,
  typeName?: V,
  customTokens?: Partial<T>
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
        styles = mergeObjects<T, Partial<T>>(structuredClone(style[typeName]), customTokens);
      } else {
        styles = style[typeName];
      }
    } else {
      throw Error(`type ${typeName} does not exist`);
    }
  }

  return styles;
};
