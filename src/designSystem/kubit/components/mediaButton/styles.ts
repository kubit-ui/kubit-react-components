import { MediaButtonStylesType } from '@/components/mediaButton';
import { MediaButtonSizeType } from '@/components/mediaButton/types/sizes';

import { COLORS, RADIUS, SPACINGS } from '../../foundations';
import { LoaderVariantType } from '../loader';
import { MediaButtonVariantType } from './variants';

const commonButtonContainerProps = {
  position: 'relative',
  cursor: 'pointer',
  border_radius: RADIUS.radius_100,
  margin: SPACINGS.spacing_100,
};

const commonContainerProps = {
  position: 'relative',
  display: 'flex',
  cursor: 'pointer',
  border_radius: RADIUS.radius_100,
};

const commonDefaultProps = {
  container: { ...commonContainerProps },
  buttonContainer: { ...commonButtonContainerProps },
  icon: {
    color: COLORS.BRAND.color_brand_bg_50,
    disabled: {
      color: COLORS.DISABLED.color_accentDisabled_font_100,
    },
  },
  iconToTransition: {
    color: COLORS.BRAND.color_brand_bg_50,
  },
  loader: {
    variant: LoaderVariantType.PRIMARY_RED,
    cursor: 'not-allowed',
  },
};

export const MEDIA_BUTTON_STYLES: MediaButtonStylesType<MediaButtonVariantType> = {
  [MediaButtonVariantType.DEFAULT]: {
    [MediaButtonSizeType.EXTRA_LARGE]: {
      ...commonDefaultProps,
      container: {
        ...commonContainerProps,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      buttonContainer: {
        ...commonButtonContainerProps,
        width: SPACINGS.spacing_650,
        height: SPACINGS.spacing_650,
        min_width: SPACINGS.spacing_650,
        min_height: SPACINGS.spacing_650,
      },
    },
    [MediaButtonSizeType.LARGE]: {
      ...commonDefaultProps,
      container: {
        ...commonContainerProps,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      buttonContainer: {
        ...commonButtonContainerProps,
        width: SPACINGS.spacing_500,
        height: SPACINGS.spacing_500,
        min_width: SPACINGS.spacing_500,
        min_height: SPACINGS.spacing_500,
      },
    },
    [MediaButtonSizeType.SMALL]: {
      ...commonDefaultProps,
      container: {
        ...commonContainerProps,
        border_radius: RADIUS.radius_00,
      },
      buttonContainer: {
        ...commonButtonContainerProps,
        width: SPACINGS.spacing_400,
        height: SPACINGS.spacing_400,
        min_width: SPACINGS.spacing_400,
        min_height: SPACINGS.spacing_400,
        margin: SPACINGS.spacing_0,
      },
    },
  },
};
