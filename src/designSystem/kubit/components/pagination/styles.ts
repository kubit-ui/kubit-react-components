import {
  PaginationCommonProps,
  PaginationState,
  PaginationThemeProps,
} from '@/components/pagination/types';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { PaginationVariantsTheme } from './variants';

const commonPageContainer = {
  display: 'flex',
  align_items: 'center',
  justify_content: 'center',
  height: SIZES.size_300,
  width: SIZES.size_300,
  clickable: {
    cursor: 'pointer',
  },
};

const commonProps: PaginationCommonProps = {
  container: {
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
    height: 'auto',
    width: 'auto',
  },
  pagesContainer: {
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
    height: 'auto',
    width: 'auto',
    column_gap: SPACINGS.spacing_150,
    margin: `0 ${SPACINGS.spacing_300}`,
  },
  paginationLeftArrowIcon: {
    width: SIZES.size_300,
    height: SIZES.size_300,
    color: COLORS.BRAND.color_brand_bg_50,
    disabled: {
      width: SIZES.size_300,
      height: SIZES.size_300,
      color: COLORS.DISABLED.color_accentDisabled_icon_50,
    },
  },
  paginationRightArrowIcon: {
    width: SIZES.size_300,
    height: SIZES.size_300,
    color: COLORS.BRAND.color_brand_bg_50,
    disabled: {
      width: SIZES.size_300,
      height: SIZES.size_300,
      color: COLORS.DISABLED.color_accentDisabled_icon_50,
    },
  },
  paginationCountersNumber: {
    [DeviceBreakpointsType.LARGE_DESKTOP]: {
      counters: 5,
    },
    [DeviceBreakpointsType.DESKTOP]: {
      counters: 5,
    },
    [DeviceBreakpointsType.TABLET]: {
      counters: 5,
    },
    [DeviceBreakpointsType.MOBILE]: {
      counters: 4,
    },
  },
};

export const PAGINATION_STYLES: PaginationThemeProps<PaginationVariantsTheme> = {
  [PaginationVariantsTheme.DEFAULT]: {
    ...commonProps,
    [PaginationState.DEFAULT]: {
      pageContainer: {
        ...commonPageContainer,
      },
      page: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [PaginationState.SELECTED]: {
      pageContainer: {
        ...commonPageContainer,
        background_color: COLORS.SECONDARY.color_secondary_bg_100,
      },
      page: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: 700,
      },
    },
  },
};
