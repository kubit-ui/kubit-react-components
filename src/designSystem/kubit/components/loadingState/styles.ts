import { LoadingStateState, LoadingStateStylesType } from '@/components/loadingState/types';

import { COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { ThirdPartyAnimationVariantType } from '../thirdPartyAnimation';
import { LoadingStateVariant } from './variants';

const commonProps = {
  titleContainer: {
    margin_top: SPACINGS.spacing_150,
  },
  title: {
    font_variant: TextVariantType.HEADING_H4_EXPANDED,
    color: COLORS.NEUTRAL.color_neutral_bg_100,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
  descriptionContainer: {
    margin_top: SPACINGS.spacing_150,
  },
  description: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_bg_100,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
};

export const LOADING_STATE_STYLES: LoadingStateStylesType<LoadingStateVariant> = {
  [LoadingStateVariant.DEFAULT]: {
    ...commonProps,
    states: {
      [LoadingStateState.PRIMARY]: {
        thirdPartyAnimation: {
          variant: ThirdPartyAnimationVariantType.LOADER_PRIMARY,
          height: SIZES.size_100,
          width: SIZES.size_100,
        },
      },
      [LoadingStateState.PRIMARY_ALTERNATIVE]: {
        thirdPartyAnimation: {
          variant: ThirdPartyAnimationVariantType.LOADER_PRIMARY,
          height: SIZES.size_100,
          width: SIZES.size_100,
        },
      },
    },
  },
};
