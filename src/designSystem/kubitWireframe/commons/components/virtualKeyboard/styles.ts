import {
  ButtonKeyboardStateType,
  VirtualKeyboardStateType,
  VirtualKeyboardStylesType,
} from '@/components/virtualKeyboard';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, FONT_WEIGHT, RADIUS, SHADOW, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { VirtualKeyboardVariantType } from './variants';

type ColorType = {
  [key: string]: { [key: string]: string };
};

const buildCommonProps = (COLORS: ColorType) => ({
  container: {
    display: 'grid',
    grid_template_columns: 'repeat(6, 1fr)',
    grid_template_rows: 'repeat(2, 1fr)',
    grid_column_gap: SPACINGS.spacing_0,
    grid_row_gap: SPACINGS.spacing_0,
    overflow: 'visible',
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    min_width: '20.5rem',
    border_style: 'solid',
    border_width: BORDERS.border_50,
    border_color: COLORS.NEUTRAL.color_neutral_border_150,
    border_radius: `${RADIUS.radius_00} ${RADIUS.radius_00} ${RADIUS.radius_100} ${RADIUS.radius_00}`,
    ...transformShadow(
      `${RADIUS.radius_00} ${RADIUS.radius_00} ${RADIUS.radius_100} ${RADIUS.radius_00}`
    ),
    ...shadowAfterStyles(
      `${RADIUS.radius_00} ${RADIUS.radius_100} ${RADIUS.radius_100} ${RADIUS.radius_100}`,
      COLORS.BRAND.color_brand_bg_50,
      SPACINGS.spacing_50
    ),
    icon: {
      color: COLORS.ACCENT.color_accent_default_icon_100,
      height: SPACINGS.spacing_400,
      width: SPACINGS.spacing_400,
    },
  },
  removeButton: {
    justify_content: 'center',
    align_items: 'center',
    grid_area: '1 / 6 / 3 / 7',
    cursor: 'pointer',
    padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_50}`,
    min_width: '3.5rem',
    border_radius: `${RADIUS.radius_00} ${RADIUS.radius_00} ${RADIUS.radius_100} ${RADIUS.radius_00}`,
  },
  digitButtons: {
    wrapper: {
      grid_area: '1 / 1 / 3 / 6',
      display: 'grid',
      grid_template_columns: 'auto auto auto auto auto',
      button: {
        cursor: 'pointer',
        display: 'flex',
        align_items: 'center',
        justify_content: 'center',
        border_style: 'solid',
        border_right_width: BORDERS.border_50,
        border_bottom_width: BORDERS.border_50,
        border_right_color: COLORS.NEUTRAL.color_neutral_border_150,
        border_bottom_color: COLORS.NEUTRAL.color_neutral_border_150,
        padding: `${SPACINGS.spacing_200} ${SPACINGS.spacing_150}`,
      },
      text: {
        display: 'flex',
        align_items: 'center',
        justify_content: 'center',
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
    },
  },
});

export const getVirtualKeyboardStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): VirtualKeyboardStylesType<VirtualKeyboardVariantType> => {
  const commonProps = buildCommonProps(COLORS);
  return {
    [VirtualKeyboardVariantType.DEFAULT]: {
      [VirtualKeyboardStateType.INACTIVE]: {
        container: {
          ...commonProps.container,
        },
        removeButton: {
          [ButtonKeyboardStateType.DEFAULT]: {
            ...commonProps.removeButton,
          },
          [ButtonKeyboardStateType.PRESSED]: {
            ...commonProps.removeButton,
            background_color: COLORS.NEUTRAL.color_neutral_bg_200,
          },
        },
        digitButtons: {
          wrapper: {
            ...commonProps.digitButtons.wrapper,
            [ButtonKeyboardStateType.DEFAULT]: {
              button: {
                ...commonProps.digitButtons.wrapper.button,
              },
              text: {
                ...commonProps.digitButtons.wrapper.text,
              },
            },
            [ButtonKeyboardStateType.PRESSED]: {
              button: {
                ...commonProps.digitButtons.wrapper.button,
                background_color: COLORS.NEUTRAL.color_neutral_bg_200,
              },
              text: {
                ...commonProps.digitButtons.wrapper.text,
                font_weight: FONT_WEIGHT.font_weight_600,
              },
            },
          },
        },
      },
      [VirtualKeyboardStateType.ACTIVE]: {
        container: {
          ...commonProps.container,
          box_shadow: SHADOW.shadow_10,
        },
        removeButton: {
          [ButtonKeyboardStateType.DEFAULT]: {
            ...commonProps.removeButton,
          },
          [ButtonKeyboardStateType.PRESSED]: {
            ...commonProps.removeButton,
            background_color: COLORS.NEUTRAL.color_neutral_bg_200,
          },
        },
        digitButtons: {
          wrapper: {
            ...commonProps.digitButtons.wrapper,
            [ButtonKeyboardStateType.DEFAULT]: {
              button: {
                ...commonProps.digitButtons.wrapper.button,
                background_color: COLORS.NEUTRAL.color_neutral_bg_250,
              },
              text: {
                ...commonProps.digitButtons.wrapper.text,
              },
            },
            [ButtonKeyboardStateType.PRESSED]: {
              button: {
                ...commonProps.digitButtons.wrapper.button,
                background_color: COLORS.NEUTRAL.color_neutral_bg_200,
              },
              text: {
                ...commonProps.digitButtons.wrapper.text,
                font_weight: FONT_WEIGHT.font_weight_600,
              },
            },
          },
        },
      },
    },
  };
};
