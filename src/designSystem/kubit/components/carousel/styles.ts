import { CarouselArrowStateType, CarouselStylesType } from '@/components/carousel/types';

import { COLORS, SIZES, SPACINGS } from '../../foundations';
import { CarouselVariantType } from './variants';

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
        width: SPACINGS.spacing_400,
      },
      arrowRightIconContainer: {
        width: SPACINGS.spacing_400,
      },
    },
  },
};
