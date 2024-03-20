import { ThirdPartyAnimationThemeType } from '@/components/thirdPartyAnimation/types';

import animationLoaderPrimary from '../../assets/animations/loaderPrimary.json';
import { ThirdPartyAnimationVariantType } from './variants';

export const THIRD_PARTY_ANIMATION_STYLES: ThirdPartyAnimationThemeType<ThirdPartyAnimationVariantType> =
  {
    [ThirdPartyAnimationVariantType.LOADER_PRIMARY]: {
      thirdPartyAnimationData: animationLoaderPrimary,
    },
  };
