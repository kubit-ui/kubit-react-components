import type { SliderVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';
import { STATES } from '@/types/states/states';

import { BUTTON } from '../button/styles';
import { ButtonSizeType, ButtonVariantType } from '../button/variants';
import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { TOOLTIP } from '../tooltip/styles';
import { TooltipVariantType } from '../tooltip/variants';
import { SliderVariantType } from './variants';

type SliderVariants = keyof typeof SliderVariantType;

export const SLIDER: SliderVariantStyles<SliderVariants> = {
  $attributes: {
    'data-state': {
      [STATES.DISABLED]: {
        cursor: 'default',
      },
      [STATES.HOVER]: {
        cursor: 'grab',
      },
      [STATES.PRESSED]: {
        cursor: 'grabbing',
      },
    },
  },
  $foreign: {
    decrement_button_size: {
      component: BUTTON,
      name: 'button',
      variant: ButtonSizeType.SMALL,
    },
    decrement_button_variant: {
      component: BUTTON,
      name: 'button',
      variant: ButtonVariantType.PRIMARY,
    },
    tooltip: {
      component: TOOLTIP,
      name: 'tooltip',
      variant: TooltipVariantType.DEFAULT,
    },
  },
  _activeTrack: {
    border_radius: cssVars.radius_100,
    height: cssVars.spacings_spacing_100,
    position: 'absolute',
    top: `calc(-1 * ${cssVars.spacings_spacing_100} / 2)`,
  },
  _buttonsTracksContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _helperText: {
    ...TEXT[TextVariantType.DEFAULT],
    color: cssVars.colors_neutral_color_bg_50,
  },
  _helperTextContainer: {
    display: 'flex',
    justify_content: 'space-between',
    margin_top: cssVars.spacings_spacing_200,
  },
  _helperTextLeftContainer: {
    margin_right: cssVars.spacings_spacing_100,
    text_align: cssVars.text_align_left,
  },
  _helperTextRightContainer: {
    margin_right: cssVars.spacings_spacing_100,
    text_align: cssVars.text_align_right,
  },
  _inactiveTrack: {
    border_radius: cssVars.radius_100,
    height: cssVars.spacings_spacing_100,
    position: 'absolute',
    top: `calc(-1 * ${cssVars.spacings_spacing_100} / 2)`,
  },
  _innerThumbTooltip: {
    border_radius: cssVars.spacings_spacing_50_percent,
    height: cssVars.spacings_spacing_100,
    width: cssVars.spacings_spacing_100,
  },
  _label: {
    padding: cssVars.spacings_spacing_0,
  },
  _labelContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _rightThumbIcon: {
    padding: cssVars.spacings_spacing_0,
  },
  _scaleContainer: {
    height: cssVars.spacings_spacing_100,
    position: 'relative',
    width: cssVars.spacings_spacing_100_percent,
  },
  _scaleOption: {
    background_color: cssVars.colors_neutral_color_bg_100,
    height: cssVars.spacings_spacing_100_percent,
    position: 'absolute',
    width: '0.0625rem',
  },
  _thumb: {
    $attributes: {
      'data-position': {
        RIGHT: {
          transform: 'translate(50%, -50%)',
        },
      },
    },
    align_items: 'center',
    border_color: cssVars.colors_neutral_color_border_250,
    border_radius: cssVars.spacings_spacing_50_percent,
    border_style: 'solid',
    border_width: cssVars.borders_border_200,
    box_sizing: 'border-box',
    display: 'flex',
    height: cssVars.spacings_spacing_400,
    justify_content: 'center',
    overflow: 'visible',
    pointer_events: 'inherit',
    position: 'absolute',
    top: cssVars.spacings_spacing_50_percent,
    transform: 'translate(-50%, -50%)',
    width: cssVars.spacings_spacing_400,
  },
  _thumbIcon: {
    padding: cssVars.spacings_spacing_0,
  },
  _tracksThumbsContainer: {
    height: cssVars.spacings_spacing_100,
    margin_bottom: cssVars.spacings_spacing_50,
    margin_top: cssVars.spacings_spacing_100,
    position: 'relative',
    width: cssVars.spacings_spacing_100_percent,
  },
  _tracksThumbsInnerContainer: {
    background_color: cssVars.colors_neutral_color_bg_100,
    bottom: '0px',
    left: '0px',
    position: 'absolute',
    right: '0px',
    top: `calc(${cssVars.spacings_spacing_100} / 2)`,
  },
  cursor: 'default',
  [SliderVariantType.PRIMARY]: {
    _activeTrack: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            background_color:
              cssVars.colors_disabled_color_accentdisabled_border_50,
          },
          [STATES.HOVER]: {
            background_color: cssVars.colors_accent_color_hover_bg_50,
          },
          [STATES.PRESSED]: {
            background_color: cssVars.colors_pressed_color_accent_bg_50,
          },
        },
      },
      background_color: cssVars.colors_accent_color_default_font_100,
    },
    _inactiveTrack: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            background_color:
              cssVars.colors_disabled_color_accentdisabled_border_100,
          },
          [STATES.HOVER]: {
            background_color: cssVars.colors_accent_color_hover_bg_50,
          },
          [STATES.PRESSED]: {
            background_color: cssVars.colors_pressed_color_accent_bg_50,
          },
        },
      },
      background_color: cssVars.colors_neutral_color_icon_100,
    },
    _thumb: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            background_color:
              cssVars.colors_disabled_color_accentdisabled_bg_50,
          },
          [STATES.HOVER]: {
            background_color: cssVars.colors_accent_color_hover_bg_50,
          },
          [STATES.PRESSED]: {
            background_color: cssVars.colors_pressed_color_accent_bg_50,
          },
        },
      },
      background_color: cssVars.colors_accent_color_default_icon_100,
    },
  },
  [SliderVariantType.TEST_NO_THUMB_EXCEEDS_TRACK]: {},
  width: cssVars.spacings_spacing_100_percent,
};
