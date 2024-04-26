import { useTheme } from 'styled-components';

import { mergeObjects } from '@/utils';

interface IUseStyles<V> {
  styleName: string;
  variantName?: V;
  customTokens?: object;
  isOptional?: boolean;
}

export const useStylesV2 = <T, V = undefined | string>({
  styleName,
  variantName,
  customTokens,
  isOptional,
}: IUseStyles<V>): T | undefined => {
  const theme = useTheme();
  if (styleName in theme) {
    const style = theme[styleName];

    if (!variantName) {
      return style as T;
    } else if ((variantName as string) in style) {
      if (customTokens) {
        return mergeObjects(structuredClone(style[variantName]), customTokens) as T;
      }
      return style[variantName];
    }
    if (isOptional) {
      return undefined;
    }
    throw Error(`type ${variantName} does not exist`);
  }
  if (isOptional) {
    return undefined;
  }
  throw Error(`styles ${styleName} does not exist`);
};
