import { CarouselArrowStateType, CarouselStylesType } from '@/components/carousel/types';

import { BORDERS, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { CarouselVariantType } from './variants';

const buttonStyles = (COLORS: { [key: string]: { [key: string]: string } }) => {
  return {
    border_radius: RADIUS.radius_250,
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
    border: `${BORDERS.border_100} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    box_shadow: `${SPACINGS.spacing_100} ${SPACINGS.spacing_100} ${SPACINGS.spacing_0} ${COLORS.BRAND.color_brand_bg_50}`,
  };
};

const iconContainerTokens = {
  display: 'flex',
  align_items: 'center',
  position: 'relative',
  width: SIZES.size_250,
  height: SIZES.size_250,
  border_radius: RADIUS.radius_250,
};

export const getCarouselStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): CarouselStylesType<CarouselVariantType> => {
  return {
    [CarouselVariantType.DEFAULT]: {
      container: {
        gap: SPACINGS.spacing_300,
      },
      arrowAndCarouselContainer: {
        gap: SPACINGS.spacing_150,
        background_color: 'transparent',
      },
      carouselContainer: {
        padding_top: SPACINGS.spacing_250,
        padding_bottom: SPACINGS.spacing_250,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border: `${BORDERS.border_100} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        border_radius: RADIUS.radius_150,
        box_shadow: `${SPACINGS.spacing_100} ${SPACINGS.spacing_100} ${SPACINGS.spacing_0} ${COLORS.BRAND.color_brand_bg_50}`,
      },
      leftArrowIcon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
      rightArrowIcon: {
        width: SIZES.size_250,
        height: SIZES.size_250,
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
      content: {
        gap: SPACINGS.spacing_150,
      },
      [CarouselArrowStateType.DEFAULT]: {
        arrowLeftIconContainer: {
          ...iconContainerTokens,
        },
        arrowLeftIconButtonContainer: {
          ...buttonStyles(COLORS),
        },
        arrowRightIconContainer: {
          ...iconContainerTokens,
        },
        arrowRightIconButtonContainer: {
          ...buttonStyles(COLORS),
        },
      },
      [CarouselArrowStateType.HOVER]: {
        arrowLeftIconContainer: {
          ...iconContainerTokens,
        },
        arrowLeftIconButtonContainer: {
          ...buttonStyles(COLORS),
        },
        arrowRightIconContainer: {
          ...iconContainerTokens,
        },
        arrowRightIconButtonContainer: {
          ...buttonStyles(COLORS),
        },
      },
      [CarouselArrowStateType.PRESSED]: {
        arrowLeftIconContainer: {
          ...iconContainerTokens,
        },
        arrowLeftIconButtonContainer: {
          ...buttonStyles(COLORS),
        },
        arrowRightIconContainer: {
          ...iconContainerTokens,
        },
        arrowRightIconButtonContainer: {
          ...buttonStyles(COLORS),
        },
      },
      [CarouselArrowStateType.DISABLED]: {
        arrowLeftIconContainer: {
          ...iconContainerTokens,
        },
        arrowLeftIconButtonContainer: {
          ...buttonStyles(COLORS),
        },
        arrowRightIconContainer: {
          ...iconContainerTokens,
        },
        arrowRightIconButtonContainer: {
          ...buttonStyles(COLORS),
        },
      },
    },
  };
};
