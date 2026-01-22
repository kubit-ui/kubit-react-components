import type { StepperNumberOrientationType } from '@kubit-ui-web/react-components';
import type { StepperNumberStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';
import { STATES } from '@/types/states/states';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { StepperNumberVariantType } from './variants';

type StepperNumberVariants = keyof typeof StepperNumberVariantType;

export const STEPPER_NUMBER: StepperNumberStyles<
  StepperNumberVariants,
  StepperNumberOrientationType
> = {
  _iconSelected: {
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _stepBar: {
    flex: '1',
    height: cssVars.spacings_spacing_100,
    width: cssVars.spacings_spacing_100,
  },
  _stepCircle: {
    align_items: 'center',
    border_radius: cssVars.radius_00,
    border_style: 'solid',
    border_width: cssVars.borders_border_100,
    display: 'flex',
    height: '1.75rem',
    justify_content: 'center',
    width: '1.75rem',
  },
  _stepCircleContainer: {
    align_items: 'center',
    display: 'flex',
    flex: '1',
  },
  _stepContainer: {
    display: 'flex',
    flex_direction: 'row',
  },
  _stepIndex: {
    font_weight: cssVars.font_weight_600,
  },
  _stepName: {
    padding: cssVars.spacings_spacing_0,
  },
  _stepNameContainer: {
    margin: cssVars.spacings_spacing_0,
  },
  display: 'flex',
  horizontal: {
    _stepIndex: {
      padding: cssVars.spacings_spacing_0,
      ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
    },
    flex_direction: 'row',
    justify_content: 'center',
  },
  [StepperNumberVariantType.DEFAULT]: {
    _iconSelected: {
      color: cssVars.colors_accent_color_default_icon_100,
    },
    _stepBar: {
      $attributes: {
        'data-state': {
          [STATES.ACTIVE]: {
            background_color: cssVars.colors_secondary_color_bg_100,
          },
          [STATES.COMPLETED]: {
            background_color: cssVars.colors_secondary_color_bg_100,
          },
          [STATES.INACTIVE]: {
            background_color: cssVars.colors_neutral_color_bg_150,
          },
        },
      },
      background_color: cssVars.colors_neutral_color_bg_150,
    },
    _stepCircle: {
      $attributes: {
        'data-state': {
          [STATES.ACTIVE]: {
            background_color: cssVars.colors_secondary_color_bg_100,
            border_color: cssVars.colors_secondary_color_bg_100,
          },
          [STATES.COMPLETED]: {
            background_color: cssVars.colors_neutral_color_font_250,
            border_color: cssVars.colors_accent_color_default_border_100,
          },
          [STATES.INACTIVE]: {
            background_color: cssVars.colors_neutral_color_bg_150,
            border_color: cssVars.colors_neutral_color_border_250,
          },
        },
      },
      background_color: cssVars.colors_neutral_color_bg_150,
      border_color: cssVars.colors_neutral_color_border_250,
    },
    _stepIndex: {
      color: cssVars.colors_neutral_color_font_250,
    },
  },
  vertical: {
    _stepContainer: {
      gap: cssVars.spacings_spacing_100,
    },
    _stepName: {
      ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    _stepNameContainer: {
      $attributes: {
        'data-islast': {
          padding_bottom: cssVars.spacings_spacing_0,
        },
      },
      padding_bottom: '2.25rem',
      padding_top: cssVars.spacings_spacing_100,
    },
    flex_direction: 'column',
  },
};
