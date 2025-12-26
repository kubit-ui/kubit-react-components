import type { ContainerVariantStyles } from '@/components/container/types/containerTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { ContainerVariants } from './variants';

type ContainerVariantTypes = keyof typeof ContainerVariants;

export const CONTAINER: ContainerVariantStyles<ContainerVariantTypes> = {
  _content: {
    display: 'flex',
    flex_wrap: 'wrap',
    grid_column_gap: cssVars.spacings_spacing_500,
    grid_row_gap: cssVars.spacings_spacing_400,
    padding_bottom: cssVars.spacings_spacing_400,
    padding_left: cssVars.spacings_spacing_700,
    padding_right: cssVars.spacings_spacing_700,
    padding_top: cssVars.spacings_spacing_400,
    width: '100%',
  },
  _header: {
    padding: cssVars.spacings_spacing_0,
  },
  _title: {
    padding: cssVars.spacings_spacing_0,
  },
  [ContainerVariants.ALTERNATIVE]: {
    background_color: cssVars.colors_neutral_color_bg_50,
  },
  [ContainerVariants.DEFAULT]: {
    background_color: cssVars.colors_neutral_color_bg_200,
  },
  [ContainerVariants.SECONDARY]: {
    background_color: cssVars.colors_secondary_color_bg_250,
  },
  padding: cssVars.spacings_spacing_0,
};
