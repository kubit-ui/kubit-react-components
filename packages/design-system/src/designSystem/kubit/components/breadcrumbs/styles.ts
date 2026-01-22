import type { BreadcrumbsVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';

import { BreadcrumbsVariant } from './variants';

type VariantType = keyof typeof BreadcrumbsVariant;

export const BREADCRUMBS: BreadcrumbsVariantStyles<VariantType> = {
  _crumb: {
    align_items: 'center',
    display: 'inline-flex',
  },
  _iconDivider: {
    height: cssVars.sizes_size_150,
    width: cssVars.sizes_size_150,
  },
  _iconDividerContainer: {
    padding: '0',
  },
  _lastOneCrumb: {
    font_size: cssVars.font_size_body_150,
    font_weight: cssVars.font_weight_500,
    line_height: cssVars.line_height_250,
  },
  _link: {
    font_size: cssVars.font_size_body_150,
    font_weight: cssVars.font_weight_500,
    line_height: cssVars.line_height_250,
    text_align: cssVars.text_align_left,
  },
  _linkContainer: {
    width: 'fit-content',
  },
  [BreadcrumbsVariant.ALTERNATIVE]: {
    _iconDivider: {
      color: cssVars.colors_accent_color_default_icon_150,
    },
    _lastOneCrumb: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_accent_color_default_font_150,
        },
        hover: {
          color: cssVars.colors_accent_color_default_font_150,
        },
      },
      color: cssVars.colors_accent_color_default_font_150,
    },
    _link: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_disabled_color_accentdisabled_font_150,
          font_weight: cssVars.font_weight_400,
        },
        hover: {
          color: cssVars.colors_accent_color_default_font_150,
        },
      },
      color: cssVars.colors_accent_color_default_font_150,
      text_decoration: 'underline',
    },
  },
  [BreadcrumbsVariant.DEFAULT]: {
    _lastOneCrumb: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_accent_color_default_font_50,
        },
        hover: {
          color: cssVars.colors_accent_color_default_font_50,
        },
      },
      color: cssVars.colors_accent_color_default_font_50,
    },
    _link: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_disabled_color_accentdisabled_font_50,
          font_weight: cssVars.font_weight_400,
        },
        hover: {
          color: cssVars.colors_accent_color_default_font_50,
        },
      },
      color: cssVars.colors_accent_color_default_font_50,
      text_decoration: 'underline',
    },
  },
  display: 'flex',
  list_style: 'none',
  margin: '0',
  padding: '0',
  position: 'relative',
  white_space: 'nowrap',
  width: '100%',
};
