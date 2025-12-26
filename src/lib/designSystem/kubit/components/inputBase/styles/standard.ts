import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { COLORS } from '../../../foundations/colors';
import { FONT_WEIGHT, PARAGRAPH } from '../../../foundations/typography';

const statesProps = {
  ariaInvalid: {
    input: {},
    placeholder: {
      color: COLORS.FEEDBACK.color_feedbackError_font_50,
    },
    typography: {
      color: COLORS.FEEDBACK.color_feedbackError_font_50,
    },
  },
  disabled: {
    input: {},
    placeholder: {
      color: COLORS.DISABLED.color_accentDisabled_font_50,
    },
    typography: {
      color: COLORS.DISABLED.color_accentDisabled_font_50,
    },
  },
  empty: {
    input: {},
    placeholder: {},
    typography: {},
  },
  filled: {
    input: {},
    placeholder: {},
    typography: {},
  },
  placeholderShown: { input: {}, placeholder: {}, typography: {} },
};

const pseudoElementsProps = {
  dataTruncate: {
    overflow: 'hidden',
    text_overflow: 'ellipsis',
    white_space: 'nowrap',
  },
  focusVisible: {
    box_shadow: 'none',
    outline_style: 'none',
  },
  passwordRevealButton: {
    display: 'none',
  },
  webkitInnerSpinButton: {
    margin: '0',
    webkit_appearance: 'none',
  },
  webkitOuterSpinButton: {
    margin: '0',
    webkit_appearance: 'none',
  },
};

export const commonStandardProps = {
  input: {
    ariaInvalid: { ...statesProps.ariaInvalid.input },
    cursor: 'pointer',
    disabled: { ...statesProps.disabled.input },
    empty: { ...statesProps.empty.input },
    filled: { ...statesProps.filled.input },
    opacity: '1',
    placeholderShown: { ...statesProps.placeholderShown.input },
    ...pseudoElementsProps,
  },
  placeholder: {
    ariaInvalid: { ...statesProps.ariaInvalid.placeholder },
    color: COLORS.NEUTRAL.color_neutral_font_50,
    disabled: { ...statesProps.disabled.placeholder },
    empty: { ...statesProps.empty.placeholder },
    filled: { ...statesProps.filled.placeholder },
    font_variant: PARAGRAPH.SMALL[DEVICE_BREAKPOINTS.DESKTOP].font_size,
    font_weight: FONT_WEIGHT.font_weight_400,
    placeholderShown: { ...statesProps.placeholderShown.placeholder },
  },
  typography: {
    ariaInvalid: { ...statesProps.ariaInvalid.typography },
    disabled: { ...statesProps.disabled.typography },
    empty: { ...statesProps.empty.typography },
    filled: { ...statesProps.filled.typography },
    font_size: PARAGRAPH.SMALL[DEVICE_BREAKPOINTS.DESKTOP].font_size,
    font_weight: FONT_WEIGHT.font_weight_400,
    line_height: PARAGRAPH.SMALL[DEVICE_BREAKPOINTS.DESKTOP].line_height,
    placeholderShown: { ...statesProps.placeholderShown.typography },
  },
};
