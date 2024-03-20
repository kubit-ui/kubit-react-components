import { JSONType } from '@/types/type';

export type ThirdPartyAnimationSizePropsType = {
  height?: string;
  width?: string;
};

export type ThirdPartyAnimationThemePropsType<V = undefined extends string ? unknown : string> = {
  ['aria-label']: string;
  autoplay?: boolean;
  dataTestId?: string;
  height: string;
  loop?: boolean;
  variant: V;
  width: string;
};

export type ThirdPartyAnimationVariantThemeType = {
  thirdPartyAnimationData: JSONType;
};

export type ThirdPartyAnimationThemeVariantType<P extends string | number | symbol> = {
  [key in P]?: ThirdPartyAnimationVariantThemeType;
};

export type ThirdPartyAnimationThemeType<P extends string | number | symbol> =
  ThirdPartyAnimationThemeVariantType<P>;
