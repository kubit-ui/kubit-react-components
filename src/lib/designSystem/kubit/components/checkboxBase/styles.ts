import type { ChecboxBaseVariantStyles } from '@/components/checkboxBase/types/checkboxBaseTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { CheckboxBaseVariantType } from './variants';

type CheckboxBaseVariants = keyof typeof CheckboxBaseVariantType;

export const CHECKBOX_BASE: ChecboxBaseVariantStyles<CheckboxBaseVariants> = {
  _icon: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED_SELECTED]: {
          color: cssVars.colors_disabled_color_accentdisabled_icon_50,
        },
        [STATES.ERROR_SELECTED]: {
          color: cssVars.colors_feedback_color_error_icon_50,
        },
        [STATES.SELECTED]: {
          color: cssVars.colors_accent_color_default_icon_100,
        },
      },
    },
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _iconContainer: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED_SELECTED]: {
          display: 'inline-flex',
        },
        [STATES.ERROR_SELECTED]: {
          display: 'inline-flex',
        },
        [STATES.SELECTED]: {
          display: 'inline-flex',
        },
      },
    },
    background_color: 'transparent',
    display: 'none',
    pointer_events: 'none',
    position: 'absolute',
  },
  _input: {
    $attributes: {
      'data-state': {
        [STATES.DISABLED_SELECTED]: {
          background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
          border_color: cssVars.colors_disabled_color_accentdisabled_border_50,
          cursor: 'default',
        },
        [STATES.DISABLED_UNSELECTED]: {
          background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
          border_color: cssVars.colors_disabled_color_accentdisabled_border_50,
          cursor: 'default',
        },
        [STATES.ERROR_SELECTED]: {
          border_color: cssVars.colors_feedback_color_error_border_50,
        },
        [STATES.ERROR_UNSELECTED]: {
          border_color: cssVars.colors_feedback_color_error_border_50,
        },
        [STATES.SELECTED]: {
          border_color: cssVars.colors_accent_color_default_border_100,
        },
        [STATES.UNSELECTED]: {
          border_color: cssVars.colors_neutral_color_border_100,
        },
      },
    },
    $pseudoClasses: {
      focus_visible: {
        box_shadow: '0px 0px 0px 2px #FFF, 0px 0px 0px 4px #2C71DB',
        outline: 'none',
      },
    },
    appearance: 'none',
    background_color: cssVars.colors_neutral_color_bg_250,
    border_radius: cssVars.radius_50,
    border_style: 'solid',
    border_width: cssVars.borders_border_50,
    cursor: 'pointer',
    display: 'grid',
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  align_items: 'center',
  [CheckboxBaseVariantType.DEFAULT]: {},
  display: 'inline-flex',
  position: 'relative',
};
