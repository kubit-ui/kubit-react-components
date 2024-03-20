import { ContainerStylesType } from '@/components/container/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, RADIUS, SPACINGS } from '../../foundations';
import { ContainerVariants } from './variants';

export const getContainerStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ContainerStylesType<ContainerVariants> => {
  return {
    [ContainerVariants.DEFAULT]: {
      container: {
        padding: SPACINGS.spacing_450,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        ...transformShadow(RADIUS.radius_150),
        ...shadowAfterStyles(
          RADIUS.radius_150,
          COLORS.BRAND.color_brand_bg_50,
          SPACINGS.spacing_50
        ),
      },
    },
  };
};
