import { MediaButtonStylesType } from '@/components/mediaButton';
import { MediaButtonSizeType } from '@/components/mediaButton/types/sizes';

import { COLORS, RADIUS, SPACINGS } from '../../foundations';
import { LoaderVariantType } from '../loader';
import { MediaButtonVariantType } from './variants';

export const MEDIA_BUTTON_STYLES: MediaButtonStylesType<MediaButtonVariantType> = {
  [MediaButtonVariantType.DEFAULT]: {
    [MediaButtonSizeType.LARGE]: {
      container: {
        position: 'relative',
        display: 'flex',
        cursor: 'pointer',
        background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        padding: SPACINGS.spacing_100,
        border_radius: RADIUS.radius_100,
        width: SPACINGS.spacing_100,
        height: SPACINGS.spacing_100,
        min_width: SPACINGS.spacing_100,
        min_height: SPACINGS.spacing_100,
      },
      icon: {
        color: COLORS.BRAND.color_brand_bg_50,
      },
      iconToTransition: {
        color: COLORS.BRAND.color_brand_bg_50,
      },
      loader: {
        variant: LoaderVariantType.PRIMARY_WHITE,
      },
    },
    [MediaButtonSizeType.SMALL]: {
      container: {
        position: 'relative',
        display: 'flex',
        cursor: 'pointer',
        background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        padding: SPACINGS.spacing_100,
        border_radius: RADIUS.radius_100,
        width: SPACINGS.spacing_100,
        height: SPACINGS.spacing_100,
        min_width: SPACINGS.spacing_100,
        min_height: SPACINGS.spacing_100,
      },
      icon: {
        color: COLORS.BRAND.color_brand_bg_50,
      },
      iconToTransition: {
        color: COLORS.BRAND.color_brand_bg_50,
      },
      loader: {
        variant: LoaderVariantType.PRIMARY_WHITE,
      },
    },
  },
};
