import type { PaginationVariantStyles } from '@/components/pagination/types/paginationTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { TextVariantType } from '../text/variants';
import { PaginationVariantsTheme } from './variants';

type PaginationVariant = keyof typeof PaginationVariantsTheme;

export const PAGINATION: PaginationVariantStyles<PaginationVariant> = {
  _page: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    font_weight: cssVars.font_weight_400,
  },
  _pageContainer: {
    align_items: 'center',
    column_gap: cssVars.spacings_spacing_150,
    display: 'flex',
    height: 'auto',
    justify_content: 'center',
    margin: `0 ${cssVars.spacings_spacing_300}`,
    width: 'auto',
  },
  _pagesContainer: {
    $attributes: {
      'data-clickable': {
        cursor: 'pointer',
      },
    },
    align_items: 'center',
    display: 'flex',
    height: cssVars.sizes_size_300,
    justify_content: 'center',
  },
  _paginationCountersNumber: {},
  _paginationLeftArrowIcon: {
    height: cssVars.sizes_size_300,
    width: cssVars.sizes_size_300,
  },
  _paginationRightArrowIcon: {
    height: cssVars.sizes_size_300,
    width: cssVars.sizes_size_300,
  },
  align_items: 'center',
  display: 'flex',
  height: 'auto',
  justify_content: 'center',
  [PaginationVariantsTheme.DEFAULT]: {
    _page: {
      $attributes: {
        'data-state': {
          [STATES.SELECTED]: {
            color: cssVars.colors_neutral_color_font_200,
            font_weight: '700',
          },
        },
      },
      color: cssVars.colors_neutral_color_font_50,
    },
    _paginationLeftArrowIcon: {
      $attributes: {
        'data-state': {
          disabled: {
            color: cssVars.colors_disabled_color_accentdisabled_icon_50,
          },
        },
      },
      color: cssVars.colors_brand_color_bg_50,
    },
    _paginationRightArrowIcon: {
      $attributes: {
        'data-state': {
          disabled: {
            color: cssVars.colors_disabled_color_accentdisabled_icon_50,
          },
        },
      },
      color: cssVars.colors_brand_color_bg_50,
    },
  },
  width: 'auto',
};
