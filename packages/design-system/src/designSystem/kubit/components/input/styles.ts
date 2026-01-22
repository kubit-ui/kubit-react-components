import type { InputVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';
import { STATES } from '@/types/states/states';

import { INPUT_BASE } from '../inputBase/styles';
import { INPUT_DECORATION } from '../inputDecoration/styles';
import { InputDecorationVariantType } from '../variants';
import { InputVariantType } from './variants';

type InputVariants = keyof typeof InputVariantType;

export const INPUT: InputVariantStyles<InputVariants> = {
  $attributes: {
    'data-state': {
      [STATES.DISABLED_EMPTY]: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_100,
        border_style: 'solid',
        border_width: cssVars.borders_border_100,
      },
      [STATES.DISABLED_FILLED]: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_100,
        border_style: 'solid',
        border_width: cssVars.borders_border_100,
      },
      [STATES.EMPTY]: {},
      [STATES.ERROR_EMPTY]: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_100,
        border_style: 'solid',
        border_width: cssVars.borders_border_100,
      },
      [STATES.ERROR_FILLED]: {
        border_color: cssVars.colors_feedback_color_feedbackerror_border_100,
        border_style: 'solid',
        border_width: cssVars.borders_border_100,
      },
      [STATES.FILLED]: {},
      [STATES.FOCUS]: {
        border_width: cssVars.borders_border_100,
        outline_offset: '0.063rem',
        outline_width: '0.063rem',
      },
    },
  },
  $foreign: {
    input_base: {
      component: INPUT_BASE,
      name: 'input_base',
    },
    left_decoration: {
      component: INPUT_DECORATION,
      name: 'input_decoration',
      variant: InputDecorationVariantType.STANDARD,
    },
    right_decoration: {
      component: INPUT_DECORATION,
      name: 'input_decoration',
      variant: InputDecorationVariantType.STANDARD,
    },
  },
  _inputAndLabelContainer: {
    display: 'flex',
    flex_direction: 'column',
  },
  align_items: 'center',
  background_color: cssVars.colors_neutral_color_bg_250,
  border_color: cssVars.colors_neutral_color_border_50,
  border_radius: cssVars.spacings_spacing_0,
  border_style: 'solid',
  border_width: cssVars.borders_border_50,
  display: 'flex',
  gap: cssVars.spacings_spacing_150,
  [InputVariantType.FILLED]: {},
  [InputVariantType.OUTLINED]: {},
  [InputVariantType.STANDARD]: {},
  padding: `${cssVars.spacings_spacing_0} ${cssVars.spacings_spacing_250}`,
  position: 'relative',
  width: 'fit-content',
};
