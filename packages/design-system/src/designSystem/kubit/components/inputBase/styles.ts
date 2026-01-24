import type { InputBaseVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';
import { STATES } from '@/types/states/states';

import { InputBaseVariantType } from './variants';

type InputBaseVariants = keyof typeof InputBaseVariantType;

export const INPUT_BASE: InputBaseVariantStyles<InputBaseVariants> = {
  $attributes: {
    'data-state': {
      [STATES.DISABLED_EMPTY]: {
        $pseudoElements: {
          placeholder: {
            color: cssVars.colors_disabled_color_accentdisabled_font_50,
          },
        },
        color: cssVars.colors_disabled_color_accentdisabled_font_50,
      },
      [STATES.DISABLED_FILLED]: {
        $pseudoElements: {
          placeholder: {
            color: cssVars.colors_disabled_color_accentdisabled_font_50,
          },
        },
        color: cssVars.colors_disabled_color_accentdisabled_font_50,
      },
      [STATES.EMPTY]: {},
      [STATES.ERROR_EMPTY]: {
        $pseudoElements: {
          placeholder: {
            color: cssVars.colors_feedback_color_feedbackerror_font_50,
          },
        },
        color: cssVars.colors_feedback_color_feedbackerror_font_50,
      },
      [STATES.ERROR_FILLED]: {
        $pseudoElements: {
          placeholder: {
            color: cssVars.colors_feedback_color_feedbackerror_font_50,
          },
        },
        color: cssVars.colors_feedback_color_feedbackerror_font_50,
      },
      [STATES.FILLED]: {},
      [STATES.FOCUS]: {},
    },
    'data-truncate': {
      true: {
        overflow: 'hidden',
        text_overflow: 'ellipsis',
        white_space: 'nowrap',
      },
    },
    type: {
      number: {
        appearance: 'textfield',
      },
      search: {
        $pseudoElements: {
          webkit_search_cancel_button: {
            appearance: 'none',
          },
        },
      },
    },
  },
  $pseudoClasses: {
    focus_visible: {
      box_shadow: 'none',
      outline_style: 'none',
    },
  },
  $pseudoElements: {
    placeholder: {
      color: cssVars.colors_neutral_color_font_50,
      font_size: cssVars.font_size_body_50,
      font_weight: cssVars.font_weight_400,
      line_height: cssVars.line_height_200,
    },
    // ms_reveal: {
    //   display: 'none',
    // },
    webkit_inner_spin_button: {
      appearance: 'none',
      margin: cssVars.spacings_spacing_0,
    },
    // webkit_outer_spin_button: {
    //   appearance: 'none',
    //   margin: cssVars.spacings_spacing_0,
    // },
  },
  cursor: 'pointer',
  font_size: cssVars.font_size_body_50,
  font_weight: cssVars.font_weight_400,
  [InputBaseVariantType.FILLED]: {},
  [InputBaseVariantType.OUTLINED]: {},
  [InputBaseVariantType.STANDARD]: {},
  line_height: cssVars.line_height_200,
  min_width: cssVars.spacings_spacing_0,
  opacity: '1',
};
