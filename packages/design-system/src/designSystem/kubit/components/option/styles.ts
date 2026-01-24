import type { OptionVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';
import { STATES } from '@/types/states/states';

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

  [OptionVariantType.DEFAULT]: {
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

  position: 'relative',
  text_decoration: 'none',
  width: cssVars.spacings_spacing_100_percent,
};
