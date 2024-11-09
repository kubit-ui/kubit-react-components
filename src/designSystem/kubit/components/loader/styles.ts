import { LoaderStylesType } from '@/components/loader/types/loaderTheme';

import { buildPrimaryLoader } from '../../assets/animations/loaders';
import { COLORS } from '../../foundations/colors';
import { SIZES } from '../../foundations/sizes';
import { LoaderVariantType } from './variants';

const container = {
  display: 'inline-block',
  width: SIZES.size_200,
  height: SIZES.size_200,
};
const transparent = 'transparent';

export const LOADER_STYLES: LoaderStylesType<LoaderVariantType> = {
  [LoaderVariantType.PRIMARY_WHITE]: {
    container,
    animation: buildPrimaryLoader(COLORS.NEUTRAL.color_neutral_icon_250, transparent),
  },
  [LoaderVariantType.PRIMARY_RED]: {
    container,
    animation: buildPrimaryLoader(COLORS.SECONDARY.color_secondary_icon_100, transparent),
  },
  [LoaderVariantType.PRIMARY_BLACK]: {
    container,
    animation: buildPrimaryLoader(COLORS.NEUTRAL.color_neutral_icon_50, transparent),
  },
};
