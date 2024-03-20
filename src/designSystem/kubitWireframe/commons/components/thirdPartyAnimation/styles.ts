// interfaces
import { ThirdPartyAnimationThemeType } from '@/components/thirdPartyAnimation/types';

// assets
import animationLoaderPrimary from '../../assets/animations/loaderPrimary';
import { ThirdPartyAnimationVariantType } from './variants';

export const getThirdPartyAnimationStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ThirdPartyAnimationThemeType<ThirdPartyAnimationVariantType> => {
  return {
    [ThirdPartyAnimationVariantType.LOADER_PRIMARY]: {
      thirdPartyAnimationData: animationLoaderPrimary(COLORS.BRAND.color_brand_bg_50),
    },
  };
};
