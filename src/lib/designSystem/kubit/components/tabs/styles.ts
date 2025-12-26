import type { TabsVariantStyles } from '@/components/tabs/types/tabsTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { TabsVariantType } from './variants';

type TabsVariants = keyof typeof TabsVariantType;

export const TABS: TabsVariantStyles<TabsVariants> = {
  _arrowIconContainer: {
    $attributes: {
      'data-position': {
        LEFT: {
          left: cssVars.spacings_spacing_0,
        },
        RIGHT: {
          right: cssVars.spacings_spacing_0,
        },
      },
    },
    $mediaQueries: {
      mobile: {
        background_color: cssVars.colors_accent_color_default_bg_50,
        display: 'flex',
      },
    },
    $pseudoClasses: {
      focus_visible: {
        $mediaQueries: {
          mobile: {
            margin_left: cssVars.spacings_spacing_50,
            margin_right: cssVars.spacings_spacing_50,
          },
        },
      },
    },
    align_items: 'center',
    cursor: 'pointer',
    display: 'none',
    height: cssVars.spacings_spacing_100_percent,
    justify_content: 'center',
    position: 'absolute',
    z_index: cssVars.z_index_intern_2,
  },
  _container: {
    $mediaQueries: {
      mobile: {
        overflow: 'hidden',
      },
    },
    display: 'flex',
    position: 'relative',
  },
  _contentContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _firstTabButton: {
    margin: cssVars.spacings_spacing_0,
  },
  _icon: {
    $attributes: {
      'data-disabled': {
        color: cssVars.colors_disabled_color_accentdisabled_icon_100,
        cursor: 'not-allowed',
      },
    },
    color: cssVars.colors_neutral_color_icon_250,
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _label: {
    $attributes: {
      'data-hidden': {
        true: {
          display: 'none',
        },
      },
      'data-state': {
        [STATES.SELECTED]: {
          color: cssVars.colors_neutral_color_font_50,
        },
        [STATES.UNSELECTED]: {
          color: cssVars.colors_neutral_color_font_250,
        },
      },
    },
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXPANDED],
    display: ' -webkit-box',
    font_weight: cssVars.font_weight_600,
    overflow: 'hidden',
    text_overflow: 'ellipsis',
    white_space: 'normal',
  },
  _lastTabButton: {
    margin: cssVars.spacings_spacing_0,
  },
  _oneTabContainer: {
    background_color: cssVars.colors_neutral_color_bg_250,
    border_style: 'solid',
    border_top_color: cssVars.colors_brand_color_border_50,
    border_top_width: cssVars.sizes_size_25,
    cursor: 'default',
    display: 'flex',
    justify_content: 'center',
    padding: `${cssVars.spacings_spacing_250} ${cssVars.spacings_spacing_500}`,
    width: cssVars.spacings_spacing_100_percent,
  },
  _tabButton: {
    $attributes: {
      'data-state': {
        [STATES.EMPTY]: {
          min_height: '3rem',
          padding: cssVars.spacings_spacing_0,
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_250,
          border_bottom_color: cssVars.colors_brand_color_border_50,
          border_bottom_width: cssVars.sizes_size_25,
          border_style: 'solid',
          cursor: 'default',
        },
        [STATES.UNSELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_50,
          color: '#FFF',
        },
      },
    },
    background_color: cssVars.colors_neutral_color_bg_50,
    cursor: 'pointer',
    padding: `${cssVars.spacings_spacing_250} ${cssVars.spacings_spacing_500}`,
    width: cssVars.spacings_spacing_100_percent,
  },
  _tabButtonsContainer: {
    $mediaQueries: {
      mobile: {
        transition: '0.2s linear',
      },
    },
    display: 'flex',
    width: cssVars.spacings_spacing_100_percent,
  },
  _tabContainer: {
    $mediaQueries: {
      mobile: {
        $pseudoClasses: {
          has: {
            $target: ':focus-visible',
            focus: {
              box_shadow: 'none',
              outline_style: 'none',
            },
            focus_visible: {
              box_shadow: 'none',
              outline_style: 'none',
            },
          },
        },
      },
    },
    padding: cssVars.spacings_spacing_0,
  },
  padding: cssVars.spacings_spacing_0,
  [TabsVariantType.DEFAULT]: {},
};
