import { ContainerStylesType } from '@/components/container/types';

import { COLORS, SPACINGS } from '../../foundations';
import { ContainerVariants } from './variants';

const commonContainerProps = {
  display: 'flex',
  flex_wrap: 'wrap',
  width: '100%',
  padding_top: SPACINGS.spacing_400,
  padding_bottom: SPACINGS.spacing_400,
  padding_right: SPACINGS.spacing_700,
  padding_left: SPACINGS.spacing_700,
  grid_row_gap: SPACINGS.spacing_400,
  grid_column_gap: SPACINGS.spacing_500,
};

export const CONTAINER_STYLES: ContainerStylesType<ContainerVariants> = {
  [ContainerVariants.DEFAULT]: {
    container: {
      ...commonContainerProps,
      background_color: COLORS.NEUTRAL.color_neutral_bg_200,
    },
  },
  [ContainerVariants.ALTERNATIVE]: {
    container: {
      ...commonContainerProps,
      background_color: COLORS.NEUTRAL.color_neutral_bg_50,
    },
  },
  [ContainerVariants.SECONDARY]: {
    container: {
      ...commonContainerProps,
      background_color: COLORS.SECONDARY.color_secondary_bg_250,
    },
  },
};
