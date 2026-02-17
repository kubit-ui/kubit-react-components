import type { RadioButtonVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';
import { STATES } from '@/types/states/states';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { TOOLTIP } from '../tooltip/styles';
import { TooltipVariantType } from '../tooltip/variants';
import { RadioButtonVariantType } from './variants';

type RadioButtonVariants = keyof typeof RadioButtonVariantType;

export const RADIO_BUTTON: RadioButtonVariantStyles<RadioButtonVariants> = {
  $attributes: {
    'data-state': {
      [STATES.DEFAULT]: {
        background_color: cssVars.colors_neutral_color_bg_250,
        border_color: cssVars.colors_neutral_color_border_50,
      },
      [STATES.DISABLED]: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_50,
        cursor: 'not-allowed',
      },
      [STATES.DISABLED_SELECTED]: {
        $pseudoElements: {
          before: {
            $content: '',
            background_color:
              cssVars.colors_disabled_color_accentdisabled_bg_50,
          },
        },
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_50,
        cursor: 'not-allowed',
      },
      [STATES.SELECTED]: {
        $pseudoElements: {
          before: {
            $content: '',
            background_color: cssVars.colors_accent_color_default_icon_100,
          },
        },
        background_color: cssVars.colors_neutral_color_bg_250,
        border_color: cssVars.colors_accent_color_default_border_100,
      },
    },
  },
  $foreign: {
    tooltip: {
      component: TOOLTIP,
      name: 'tooltip',
      variant: TooltipVariantType.DEFAULT,
    },
  },
  $pseudoElements: {
    before: {
      $content: '',
      border_radius: cssVars.radius_circle,
      height: cssVars.spacings_spacing_200,
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: cssVars.spacings_spacing_200,
    },
  },
  _errorMessage: {
    padding: cssVars.spacings_spacing_0,
  },
  _errorMessageContainer: {
    margin: cssVars.spacings_spacing_0,
  },
  _errorMessageIcon: {
    margin_right: cssVars.spacings_spacing_0,
  },
  _errorMessageIconContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _infoContainer: {
    grid_area: '1 / 2',
  },
  _label: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED].$mediaQueries.desktop,
    color: cssVars.colors_neutral_color_font_50,
    font_weight: cssVars.font_weight_600,
  },
  _labelContainer: {
    margin: cssVars.spacings_spacing_0,
  },
  _radioButtonContainer: {
    grid_area: '1 / 1',
    margin: cssVars.spacings_spacing_0,
    position: 'relative',
  },
  _rowContainer: {
    column_gap: cssVars.spacings_spacing_150,
    display: 'grid',
    grid_template_columns: 'auto 1fr',
    margin_bottom: cssVars.spacings_spacing_400,
    row_gap: cssVars.spacings_spacing_150,
  },
  _specialLabel: {
    padding_top: cssVars.spacings_spacing_0,
  },
  _sublabel: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED].$mediaQueries.desktop,
    font_weight: cssVars.font_weight_400,
  },
  appearance: 'none',
  border_radius: cssVars.radius_circle,
  border_style: 'solid',
  border_width: cssVars.borders_border_50,
  clear: 'both',
  cursor: 'pointer',
  display: 'inline-block',
  height: cssVars.spacings_spacing_300,
  position: 'relative',
  [RadioButtonVariantType.DEFAULT]: {
    _errorMessage: {
      color: cssVars.colors_feedback_color_feedbackerror_font_50,
    },
    _sublabel: {
      color: cssVars.colors_neutral_color_font_50,
    },
  },
  width: cssVars.spacings_spacing_300,
};
