import type { InputSignatureVariantStyles } from '@/components/inputSignature/types/inputSignatureTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { InputSignatureVariants } from './variants';

type InputSignatureVariant = keyof typeof InputSignatureVariants;

export const INPUT_SIGNATURE: InputSignatureVariantStyles<InputSignatureVariant> =
  {
    $attributes: {
      'data-state': {
        [STATES.ACTIVE]: {
          border_color: cssVars.colors_accent_color_default_border_50,
        },

        [STATES.DISABLED]: {
          border_color: cssVars.colors_disabled_color_accentdisabled_border_100,
        },

        [STATES.ERROR]: {
          background_color: cssVars.colors_feedback_color_error_bg_50,
          border_color: cssVars.colors_feedback_color_error_border_50,
        },

        [STATES.FILLED]: {
          border_color: cssVars.colors_neutral_color_border_150,
        },
      },
    },
    _canvas: {
      height: cssVars.spacings_spacing_100_percent,
      width: cssVars.spacings_spacing_100_percent,
    },
    _placeholderContainer: {
      align_items: 'center',
      display: 'flex',
      height: cssVars.spacings_spacing_100_percent,
      justify_content: 'center',
      left: cssVars.spacings_spacing_0,
      padding: `${cssVars.spacings_spacing_350} ${cssVars.spacings_spacing_250}`,
      position: 'absolute',
      top: cssVars.spacings_spacing_0,
      width: cssVars.spacings_spacing_100_percent,
    },
    _placeholderText: {
      $attributes: {
        ['data-state']: {
          [STATES.DISABLED]: {
            background_color:
              cssVars.colors_disabled_color_accentdisabled_bg_100,
          },

          [STATES.ERROR]: {
            background_color: cssVars.colors_feedback_color_error_bg_50,
          },
        },
      },
      ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
      color: cssVars.colors_neutral_color_font_100,
      font_weight: cssVars.font_weight_400,
    },
    background_color: cssVars.colors_neutral_color_bg_250,
    border_radius: '16px',
    border_style: 'dashed',
    border_width: cssVars.borders_border_100,
    [InputSignatureVariants.DEFAULT]: {},
    min_height: '188px',
    position: 'relative',
    width: '100%',
  };
