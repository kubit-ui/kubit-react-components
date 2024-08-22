import {
  ButtonKeyboardStateType,
  VirtualKeyboardStateType,
  VirtualKeyboardStylesType,
} from '@/components/virtualKeyboard';

import { BORDERS, COLORS, FONT_WEIGHT, RADIUS, SHADOW, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { VirtualKeyboardVariantType } from './variants';

const commonVirtualKeyboardStateProps = {
  display: 'grid',
  grid_template_columns: 'repeat(6, 1fr)',
  grid_template_rows: 'repeat(2, 1fr)',
  grid_column_gap: SPACINGS.spacing_0,
  grid_row_gap: SPACINGS.spacing_0,
  overflow: 'hidden',
  background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  min_width: '20.5rem',
  border_style: 'solid',
  border_width: BORDERS.border_50,
  border_color: COLORS.NEUTRAL.color_neutral_border_150,
  border_radius: `${RADIUS.radius_00} ${RADIUS.radius_00} ${RADIUS.radius_75} ${RADIUS.radius_75}`,
  icon: {
    color: COLORS.ACCENT.color_accent_default_icon_100,
    height: SPACINGS.spacing_400,
    width: SPACINGS.spacing_400,
  },
};
const commonWrapperButtonsProps = {
  grid_area: '1 / 1 / 3 / 6',
  display: 'grid',
  grid_template_columns: 'auto auto auto auto auto',
};
const commonDigitButtonProps = {
  cursor: 'pointer',
  display: 'flex',
  align_items: 'center',
  justify_content: 'center',
  background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  border_style: 'solid',
  border_right_width: BORDERS.border_50,
  border_bottom_width: BORDERS.border_50,
  border_right_color: COLORS.NEUTRAL.color_neutral_border_150,
  border_bottom_color: COLORS.NEUTRAL.color_neutral_border_150,
  padding: `${SPACINGS.spacing_200} ${SPACINGS.spacing_150}`,
};
const commonDigitButtonTextProps = {
  display: 'flex',
  align_items: 'center',
  justify_content: 'center',
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
  color: COLORS.NEUTRAL.color_neutral_font_50,
};

const digitButtonProps = {
  wrapper: {
    ...commonWrapperButtonsProps,
    [ButtonKeyboardStateType.DEFAULT]: {
      button: commonDigitButtonProps,
      text: commonDigitButtonTextProps,
    },
    [ButtonKeyboardStateType.PRESSED]: {
      button: {
        ...commonDigitButtonProps,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
      },
      text: {
        ...commonDigitButtonTextProps,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
    },
  },
};

const commonRemoveButtonProps = {
  justify_content: 'center',
  align_items: 'center',
  grid_area: '1 / 6 / 3 / 7',
  cursor: 'pointer',
  padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_50}`,
  min_width: '3.5rem',
};

const removeButtonProps = {
  [ButtonKeyboardStateType.DEFAULT]: {
    ...commonRemoveButtonProps,
  },
  [ButtonKeyboardStateType.PRESSED]: {
    ...commonRemoveButtonProps,
    background_color: COLORS.NEUTRAL.color_neutral_bg_200,
  },
};

export const VIRTUAL_KEYBOARD_STYLES: VirtualKeyboardStylesType<VirtualKeyboardVariantType> = {
  [VirtualKeyboardVariantType.DEFAULT]: {
    [VirtualKeyboardStateType.INACTIVE]: {
      container: commonVirtualKeyboardStateProps,
      removeButton: removeButtonProps,
      digitButtons: digitButtonProps,
    },
    [VirtualKeyboardStateType.ACTIVE]: {
      container: {
        ...commonVirtualKeyboardStateProps,
        box_shadow: SHADOW.shadow_10,
      },
      removeButton: removeButtonProps,
      digitButtons: digitButtonProps,
    },
  },
};
