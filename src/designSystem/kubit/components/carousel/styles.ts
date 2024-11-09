import { CarouselStylesType } from '@/components/carousel/types/carouselTheme';
import { CarouselArrowStateType } from '@/components/carousel/types/state';

import { COLORS } from '../../foundations/colors';
import { SIZES } from '../../foundations/sizes';
import { SPACINGS } from '../../foundations/spacings';
import { CarouselVariantType } from './variants';

const iconContainerTokens = {
  display: 'flex',
  align_items: 'center',
  position: 'relative',
  width: SIZES.size_250,
  height: SIZES.size_250,
};

export const CAROUSEL_STYLES: CarouselStylesType<CarouselVariantType> = {
  [CarouselVariantType.DEFAULT]: {
    container: {
      gap: SPACINGS.spacing_300,
    },
    arrowAndCarouselContainer: {
      gap: SPACINGS.spacing_150,
    },
    leftArrowIcon: {
      width: SIZES.size_250,
      height: '100%',
      color: COLORS.ACCENT.color_accent_default_icon_100,
    },
    rightArrowIcon: {
      width: SIZES.size_250,
      height: '100%',
      color: COLORS.ACCENT.color_accent_default_icon_100,
    },
    content: {
      gap: SPACINGS.spacing_150,
    },
    [CarouselArrowStateType.DEFAULT]: {
      arrowLeftIconContainer: {
        ...iconContainerTokens,
      },
      arrowRightIconContainer: {
        ...iconContainerTokens,
      },
    },
    [CarouselArrowStateType.HOVER]: {
      arrowLeftIconContainer: {
        ...iconContainerTokens,
      },
      arrowRightIconContainer: {
        ...iconContainerTokens,
      },
    },
    [CarouselArrowStateType.PRESSED]: {
      arrowLeftIconContainer: {
        ...iconContainerTokens,
      },
      arrowRightIconContainer: {
        ...iconContainerTokens,
      },
    },
    [CarouselArrowStateType.DISABLED]: {
      arrowLeftIconContainer: {
        ...iconContainerTokens,
      },
      arrowRightIconContainer: {
        ...iconContainerTokens,
      },
    },
  },
};
