import type { ChecboxVariantStyles } from '@/components/checkbox/types/checkboxTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { ERROR_MESSAGE } from '../errorMessage/styles';
import { ErrorMessageVariantType } from '../errorMessage/variants';
import { TextVariantType } from '../text/variants';
import type { CheckboxVariantType } from './variants';

type CheckboxVariants = keyof typeof CheckboxVariantType;

export const CHECKBOX: ChecboxVariantStyles<CheckboxVariants> = {
  $attributes: {
    'data-state': {
      [STATES.DISABLED_SELECTED]: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_50,
      },
      [STATES.DISABLED_UNSELECTED]: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_50,
      },
      [STATES.ERROR_SELECTED]: {
        border_color: cssVars.colors_accent_color_default_border_100,
      },
      [STATES.ERROR_UNSELECTED]: {
        border_color: cssVars.colors_accent_color_default_border_100,
      },
      [STATES.SELECTED]: {
        border_color: cssVars.colors_accent_color_default_border_100,
      },
      [STATES.UNSELECTED]: {
        border_color: cssVars.colors_neutral_color_border_100,
      },
    },
  },
  $foreign: {
    error_message: {
      component: ERROR_MESSAGE,
      name: 'error_message',
      variant: ErrorMessageVariantType.DEFAULT,
    },
  },
  _checkboxWithLabelContainer: {
    $pseudoClasses: {
      focus_within: {
        $advancedSelectors: [
          {
            descendant: {
              $target: '*:focus-within input[type="checkbox"]',
              box_shadow: 'none',
              outline: 'none',
            },
          },
        ],
        box_shadow: '0px 0px 0px 2px #FFF, 0px 0px 0px 4px #2C71DB',
        outline: 'none',
      },
    },
    align_items: 'center',
    border_radius: cssVars.radius_25,
    display: 'flex',
    flex_direction: 'row',
    gap: cssVars.spacings_spacing_150,
  },
  _errorMessageContainer: {
    display: 'flex',
    justify_content: 'flex-end',
  },
  _label: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED_SELECTED]: {
          cursor: 'not-allowed',
        },
        [STATES.DISABLED_UNSELECTED]: {
          cursor: 'not-allowed',
        },
      },
    },
    color: cssVars.colors_neutral_color_font_50,
    cursor: 'pointer',
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    font_weight: cssVars.font_weight_400,
  },
  width: 'fit-content',
};
