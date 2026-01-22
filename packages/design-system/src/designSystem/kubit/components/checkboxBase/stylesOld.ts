import { STATES } from '@/lib/types/states/states';

import { BORDERS, RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SIZES } from '../../foundations/sizes';
import { CheckboxBaseVariantType } from './variants';

const commonContainerStyles = (STATE_TOKENS) => ({
  align_items: 'center',
  display: 'inline-flex',
  position: 'relative',
  ...STATE_TOKENS,
});

const commonCheckboxStyles = (STATE_TOKENS) => ({
  appearance: 'none',
  background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  border_radius: RADIUS.radius_50,
  border_style: 'solid',
  border_width: BORDERS.border_50,
  cursor: 'pointer',
  display: 'grid',
  height: SIZES.size_250,
  width: SIZES.size_250,
  ...STATE_TOKENS,
  $pseudoClasses: {
    focus_visible: {
      box_shadow: '0px 0px 0px 2px #FFF, 0px 0px 0px 4px #2C71DB',
      outline: 'none',
      ...STATE_TOKENS.$pseudoClasses?.focus_visible,
    },
    ...STATE_TOKENS.$pseudoClasses,
  },
});

const commonCheckedIconContainerStyles = (STATE_TOKENS) => ({
  background_color: 'transparent',
  display: 'none',
  pointer_events: 'none',
  position: 'absolute',
  ...STATE_TOKENS,
});

const commonCheckedIconStyles = (STATE_TOKENS) => ({
  height: SIZES.size_250,
  width: SIZES.size_250,
  ...STATE_TOKENS,
});

export const CHECKBOX_BASE = {
  [CheckboxBaseVariantType.DEFAULT]: {
    checkbox: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED_SELECTED]: {
            ...commonCheckboxStyles({
              background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
              border_color: COLORS.DISABLED.color_accentDisabled_border_50,
              cursor: 'default',
            }),
          },
          [STATES.DISABLED_UNSELECTED]: {
            ...commonCheckboxStyles({
              background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
              border_color: COLORS.DISABLED.color_accentDisabled_border_50,
              cursor: 'default',
            }),
          },
          [STATES.ERROR_SELECTED]: {
            ...commonCheckboxStyles({
              border_color: COLORS.FEEDBACK.color_feedback_error_border_50,
            }),
          },
          [STATES.ERROR_UNSELECTED]: {
            ...commonCheckboxStyles({
              border_color: COLORS.FEEDBACK.color_feedback_error_border_50,
            }),
          },
          [STATES.SELECTED]: {
            ...commonCheckboxStyles({
              border_color: COLORS.ACCENT.color_accent_default_border_100,
            }),
          },
          [STATES.UNSELECTED]: {
            ...commonCheckboxStyles({
              border_color: COLORS.NEUTRAL.color_neutral_border_100,
            }),
          },
        },
      },
    },
    checkedIcon: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED_SELECTED]: {
            ...commonCheckedIconStyles({
              color: COLORS.DISABLED.color_accentDisabled_icon_50,
            }),
          },
          [STATES.DISABLED_UNSELECTED]: { ...commonCheckedIconStyles({}) },
          [STATES.ERROR_SELECTED]: {
            ...commonCheckedIconStyles({
              color: COLORS.FEEDBACK.color_feedback_error_icon_50,
            }),
          },
          [STATES.ERROR_UNSELECTED]: { ...commonCheckedIconStyles({}) },
          [STATES.SELECTED]: {
            ...commonCheckedIconStyles({
              color: COLORS.ACCENT.color_accent_default_icon_100,
            }),
          },
          [STATES.UNSELECTED]: { ...commonCheckedIconStyles({}) },
        },
      },
    },
    checkedIconContainer: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED_SELECTED]: {
            ...commonCheckedIconContainerStyles({ display: 'inline-flex' }),
          },
          [STATES.DISABLED_UNSELECTED]: {
            ...commonCheckedIconContainerStyles({}),
          },
          [STATES.ERROR_SELECTED]: {
            ...commonCheckedIconContainerStyles({ display: 'inline-flex' }),
          },
          [STATES.ERROR_UNSELECTED]: {
            ...commonCheckedIconContainerStyles({}),
          },
          [STATES.SELECTED]: {
            ...commonCheckedIconContainerStyles({ display: 'inline-flex' }),
          },
          [STATES.UNSELECTED]: { ...commonCheckedIconContainerStyles({}) },
        },
      },
    },
    container: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED_SELECTED]: { ...commonContainerStyles({}) },
          [STATES.DISABLED_UNSELECTED]: { ...commonContainerStyles({}) },
          [STATES.ERROR_SELECTED]: { ...commonContainerStyles({}) },
          [STATES.ERROR_UNSELECTED]: { ...commonContainerStyles({}) },
          [STATES.SELECTED]: { ...commonContainerStyles({}) },
          [STATES.UNSELECTED]: { ...commonContainerStyles({}) },
        },
      },
    },
  },
};
