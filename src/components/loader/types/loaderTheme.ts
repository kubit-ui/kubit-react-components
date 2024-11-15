import { CSSProp } from 'styled-components';

import { CommonStyleType } from '@/types/styles/commonStyle';

/**
 * @description
 * interface for the loader
 * @interface LoaderStylesPropsType
 */
export type LoaderStylesPropsType = {
  parentContainer?: CommonStyleType;
  container?: CommonStyleType;
  animation: CSSProp;
};

/**
 * @description
 * interface for the loader
 * @interface ILoaderStyled
 * @template P
 */
export type LoaderStylesType<P extends string | number | symbol> = {
  [key in P]?: LoaderStylesPropsType;
};
