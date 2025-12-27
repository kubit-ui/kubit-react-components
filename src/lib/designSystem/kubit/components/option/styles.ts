import type { OptionVariantStyles } from '@/components/option/types/optionTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { OptionVariantType } from './variants';

type OptionVariants = keyof typeof OptionVariantType;

export const OPTION: OptionVariantStyles<OptionVariants> = {
  _checkedIcon: {
    padding: cssVars.spacings_spacing_0,
  },
  _firstRowContainer: {
    align_items: 'center',
    display: 'flex',
    justify_content: 'space-between',
  },
  _icon: {
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _label: {
    padding: cssVars.spacings_spacing_0,
    ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
  },
  _labelHighlighted: {
    padding: cssVars.spacings_spacing_0,
    ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
  },
  _labelIconContainer: {
    align_items: 'flex-start',
    display: 'flex',
  },
  _sublabel: {
    padding: cssVars.spacings_spacing_0,
    ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
  },
  _sublabelContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  cursor: 'pointer',
  display: 'flex',
  [OptionVariantType.CODE_VIEWER_SUBTHEME]: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED]: {
          background_color: cssVars.colors_accent_color_default_bg_150,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_accent_color_default_bg_150}`,
        },
        [STATES.FILLING]: {
          background_color: cssVars.colors_neutral_color_bg_250,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
        },
        [STATES.HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_200}`,
        },
        [STATES.MULTIPLE_SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
      },
    },
    _label: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_400,
          },
          [STATES.FILLING]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_400,
          },
          [STATES.HOVER]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_400,
          },
          [STATES.MULTIPLE_SELECTED]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_600,
          },
          [STATES.MULTIPLE_SELECTED_HOVER]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED_HOVER]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_600,
          },
        },
      },
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
    padding: `${cssVars.spacings_spacing_250} ${cssVars.spacings_spacing_300}`,
  },
  [OptionVariantType.INPUT_DROPDOWN]: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED]: {
          background_color: cssVars.colors_accent_color_default_bg_150,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_accent_color_default_bg_150}`,
        },
        [STATES.FILLING]: {
          background_color: cssVars.colors_neutral_color_bg_250,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
        },
        [STATES.HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_200}`,
        },
        [STATES.MULTIPLE_SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
      },
    },
    _icon: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            color: cssVars.colors_neutral_color_icon_100,
          },
          [STATES.FILLING]: {
            color: cssVars.colors_neutral_color_icon_50,
          },
          [STATES.HOVER]: {
            color: cssVars.colors_neutral_color_icon_50,
          },
          [STATES.MULTIPLE_SELECTED]: {
            color: cssVars.colors_neutral_color_icon_50,
          },
          [STATES.MULTIPLE_SELECTED_HOVER]: {
            color: cssVars.colors_neutral_color_icon_50,
          },
          [STATES.SELECTED]: {
            color: cssVars.colors_neutral_color_icon_50,
          },
          [STATES.SELECTED_HOVER]: {
            color: cssVars.colors_neutral_color_icon_50,
          },
        },
      },
      color: cssVars.colors_neutral_color_icon_50,
    },
    _label: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            color: cssVars.colors_neutral_color_font_50,
          },
          [STATES.FILLING]: {
            color: cssVars.colors_neutral_color_font_50,
          },
          [STATES.HOVER]: {
            color: cssVars.colors_neutral_color_font_50,
          },
          [STATES.MULTIPLE_SELECTED]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_600,
          },
          [STATES.MULTIPLE_SELECTED_HOVER]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED_HOVER]: {
            color: cssVars.colors_neutral_color_font_50,
            font_weight: cssVars.font_weight_600,
          },
        },
      },
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    _labelIconContainer: {
      gap: cssVars.spacings_spacing_150,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_bottom: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
    padding: cssVars.spacings_spacing_300,
  },
  [OptionVariantType.INPUT_OPTION]: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED]: {
          background_color: cssVars.colors_accent_color_default_bg_150,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_accent_color_default_bg_150}`,
        },
        [STATES.FILLING]: {
          background_color: cssVars.colors_neutral_color_bg_250,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
        },
        [STATES.HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_200}`,
        },
        [STATES.MULTIPLE_SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
      },
    },
    _icon: {
      color: cssVars.colors_neutral_color_icon_50,
    },
    _label: {
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    _labelHighlighted: {
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_600,
    },
    _labelIconContainer: {
      gap: cssVars.spacings_spacing_150,
    },
    _sublabel: {
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
    padding: `${cssVars.spacings_spacing_150} ${cssVars.spacings_spacing_300}`,
  },
  [OptionVariantType.INPUT_OPTION_HIGHTLIGHTED]: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED]: {
          background_color: cssVars.colors_accent_color_default_bg_150,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_accent_color_default_bg_150}`,
        },
        [STATES.FILLING]: {
          background_color: cssVars.colors_neutral_color_bg_250,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
        },
        [STATES.HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_200}`,
        },
        [STATES.MULTIPLE_SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
      },
    },
    _icon: {
      color: cssVars.colors_neutral_color_icon_50,
    },
    _label: {
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_600,
    },
    _labelHighlighted: {
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_600,
    },
    _labelIconContainer: {
      gap: cssVars.spacings_spacing_150,
    },
    _sublabel: {
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
    padding: `${cssVars.spacings_spacing_150} ${cssVars.spacings_spacing_300}`,
  },
  [OptionVariantType.INVERTED]: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
        },
        [STATES.FILLING]: {
          background_color: cssVars.colors_neutral_color_bg_200,
        },
        [STATES.HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
        },
        [STATES.MULTIPLE_SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
        },
        [STATES.SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
        },
      },
    },
    $pseudoElements: {
      before: {
        $content: '',
        right: cssVars.spacings_spacing_300,
      },
    },
    _label: {
      $attributes: {
        'data-state': {
          [STATES.MULTIPLE_SELECTED]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.MULTIPLE_SELECTED_HOVER]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED_HOVER]: {
            font_weight: cssVars.font_weight_600,
          },
        },
      },
      ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
      color: cssVars.colors_neutral_color_font_100,
      font_weight: cssVars.font_weight_400,
    },
    background_color: cssVars.colors_neutral_color_bg_200,
    border_radius: cssVars.radius_50,
    padding_bottom: cssVars.spacings_spacing_250,
    padding_left: cssVars.spacings_spacing_50,
    padding_right: cssVars.spacings_spacing_50,
    padding_top: cssVars.spacings_spacing_250,
  },
  [OptionVariantType.SIDE_MENU_LEVEL_1]: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED]: {
          background_color: cssVars.colors_accent_color_default_bg_150,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_accent_color_default_bg_150}`,
        },
        [STATES.FILLING]: {
          background_color: cssVars.colors_neutral_color_bg_250,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
        },
        [STATES.HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_200}`,
        },
        [STATES.MULTIPLE_SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_200,
          border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_brand_color_border_50}`,
        },
      },
    },
    _icon: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            color: cssVars.colors_neutral_color_icon_100,
          },
        },
      },
      color: cssVars.colors_neutral_color_icon_50,
    },
    _label: {
      $attributes: {
        [STATES.MULTIPLE_SELECTED]: {
          font_weight: cssVars.font_weight_600,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          font_weight: cssVars.font_weight_600,
        },
        [STATES.SELECTED]: {
          font_weight: cssVars.font_weight_600,
        },
        [STATES.SELECTED_HOVER]: {
          font_weight: cssVars.font_weight_600,
        },
      },
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    _labelIconContainer: {
      gap: cssVars.spacings_spacing_150,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_left: `${cssVars.borders_border_200} solid ${cssVars.colors_neutral_color_bg_250}`,
    padding: `${cssVars.spacings_spacing_150} ${cssVars.spacings_spacing_300}`,
  },
  [OptionVariantType.SIDE_MENU_LEVEL_2]: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED]: {
          border_left: `${cssVars.borders_border_100} solid ${cssVars.colors_neutral_color_bg_250}`,
        },
        [STATES.FILLING]: {
          border_left: `${cssVars.borders_border_100} solid ${cssVars.colors_neutral_color_bg_250}`,
        },
        [STATES.HOVER]: {
          border_left: `${cssVars.borders_border_100} solid ${cssVars.colors_neutral_color_icon_200}`,
        },
        [STATES.MULTIPLE_SELECTED]: {
          border_left: `${cssVars.borders_border_100} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          border_left: `${cssVars.borders_border_100} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED]: {
          border_left: `${cssVars.borders_border_100} solid ${cssVars.colors_brand_color_border_50}`,
        },
        [STATES.SELECTED_HOVER]: {
          border_left: `${cssVars.borders_border_100} solid ${cssVars.colors_brand_color_border_50}`,
        },
      },
    },
    _label: {
      $attributes: {
        'data-state': {
          [STATES.MULTIPLE_SELECTED]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.MULTIPLE_SELECTED_HOVER]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED_HOVER]: {
            font_weight: cssVars.font_weight_600,
          },
        },
      },
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_left: `${cssVars.borders_border_100} solid ${cssVars.colors_neutral_color_bg_250}`,
    padding_bottom: cssVars.spacings_spacing_150,
    padding_left: cssVars.spacings_spacing_400,
    padding_right: cssVars.spacings_spacing_150,
    padding_top: cssVars.spacings_spacing_150,
  },
  [OptionVariantType.TOPBAR]: {
    _label: {
      $attributes: {
        'data-state': {
          [STATES.MULTIPLE_SELECTED]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.MULTIPLE_SELECTED_HOVER]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED_HOVER]: {
            font_weight: cssVars.font_weight_600,
          },
        },
      },
      ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
      color: cssVars.colors_neutral_color_font_250,
      font_weight: cssVars.font_weight_400,
    },
    _labelHighlighted: {
      ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
      font_weight: cssVars.font_weight_400,
    },
    padding_left: cssVars.spacings_spacing_150,
    padding_top: cssVars.spacings_spacing_100,
  },
  [OptionVariantType.TOPBAR_TAB]: {
    $attributes: {
      'data-state': {
        [STATES.HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_100,
        },
        [STATES.MULTIPLE_SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_100,
        },
        [STATES.MULTIPLE_SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_100,
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_neutral_color_bg_100,
        },
        [STATES.SELECTED_HOVER]: {
          background_color: cssVars.colors_neutral_color_bg_100,
        },
      },
    },
    $mediaQueries: {
      mobile: {
        padding: cssVars.spacings_spacing_300,
        padding_left: cssVars.spacings_spacing_400,
      },
    },
    _label: {
      $attributes: {
        'data-state': {
          [STATES.MULTIPLE_SELECTED]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.MULTIPLE_SELECTED_HOVER]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED]: {
            font_weight: cssVars.font_weight_600,
          },
          [STATES.SELECTED_HOVER]: {
            font_weight: cssVars.font_weight_600,
          },
        },
      },
      color: cssVars.colors_neutral_color_font_250,
      font_weight: cssVars.font_weight_400,
    },
    background_color: cssVars.colors_neutral_color_bg_50,
    cursor: 'pointer',
    padding: `${cssVars.spacings_spacing_250} ${cssVars.spacings_spacing_300}`,
  },
  position: 'relative',
  text_decoration: 'none',
  width: cssVars.spacings_spacing_100_percent,
};
