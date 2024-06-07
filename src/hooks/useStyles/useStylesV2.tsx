import { useTheme } from 'styled-components';

import { mergeObjects, structuredClone } from '@/utils';

interface IUseStyles<T, V> {
  styleName: string;
  variantName?: V;
  customTokens?: Partial<T>;
  isOptional?: boolean;
}

export const useStylesV2 = <T extends object, V = undefined | string>({
  styleName,
  variantName,
  customTokens,
  isOptional,
}: IUseStyles<T, V>): T | undefined => {
  const theme = useTheme();
  if (styleName in theme) {
    const style = theme[styleName];

    if (!variantName) {
      return style as T;
    } else if ((variantName as string) in style) {
      if (customTokens) {
        return mergeObjects<T, Partial<T>>(structuredClone(style[variantName]), customTokens) as T;
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
