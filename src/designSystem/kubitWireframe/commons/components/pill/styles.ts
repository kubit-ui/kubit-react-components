import { PillStateType, PillStylesType } from '@/components/pill/types';
import { COLORS } from '@/designSystem/kubit/foundations';
import { DeviceBreakpointsType } from '@/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import {
  BORDERS,
  FONT_WEIGHT,
  PARAGRAPH,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
  Z_INDEX,
} from '../../foundations';
import { PillSizeType, PillVariantType } from './variants';

const PILL_FOCUS_COLOR = '#2C71DB';

const commonProps = {
  container_focus: {
    z_index: Z_INDEX.INTERN_2,
    outline: `${BORDERS.border_50} `,
    box_shadow: `${SPACINGS.spacing_0} ${SPACINGS.spacing_0} ${SPACINGS.spacing_0} ${SPACINGS.spacing_100} ${PILL_FOCUS_COLOR}`,
  },
};

const commonLabelProps = {
  text_align: TEXT_ALIGN.left,
  font_size: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
  line_height: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].line_height,
};

const commonContainerProps = {
  display: 'inline-flex',
  align_items: 'center',
  justify_content: 'center',
  border_style: 'solid',
  position: 'relative',
  gap: SPACINGS.spacing_150,
  border_radius: RADIUS.radius_00,
};

const input = {
  width: SPACINGS.spacing_100_percent,
  height: SPACINGS.spacing_100_percent,
  position: 'absolute',
  opacity: '0',
  cursor: 'pointer',
  z_index: Z_INDEX.INTERN_2,
};

const defaultStateCommonTokens = {
  container: {
    ...commonContainerProps,
    cursor: 'pointer',
    border_style: 'solid',
    border_color: COLORS.NEUTRAL.color_neutral_border_100,
    border_width: BORDERS.border_50,
    padding: `${SPACINGS.spacing_250}`,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  },
  input,
  label: {
    ...commonLabelProps,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
  decorativeIcon: {
    width: SIZES.size_200,
    height: SIZES.size_200,
    color: COLORS.NEUTRAL.color_neutral_icon_50,
  },
  selectedIcon: {
    width: SIZES.size_200,
    height: SIZES.size_200,
    color: COLORS.NEUTRAL.color_neutral_icon_50,
  },
};

const defaultVariantTokens = COLORS => ({
  ...commonProps,
  ...defaultStateCommonTokens,
  container: {
    ...defaultStateCommonTokens.container,
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  },
});

export const getPillStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): PillStylesType<PillSizeType, PillVariantType> => {
  return {
    [PillSizeType.LARGE]: {
      [PillVariantType.DEFAULT]: {
        [PillStateType.DEFAULT]: {
          ...defaultVariantTokens(COLORS),
        },
        [PillStateType.SELECTED]: {
          ...defaultVariantTokens(COLORS),
          container: {
            ...defaultVariantTokens(COLORS).container,
            background_color: COLORS.SECONDARY.color_secondary_bg_150,
          },
        },
        [PillStateType.DISABLED]: {
          ...defaultVariantTokens(COLORS),
        },
        [PillStateType.DISABLED_SELECTED]: {
          ...defaultVariantTokens(COLORS),
        },
      },
      [PillVariantType.PILL_SELECTOR]: {
        [PillStateType.DEFAULT]: {
          ...commonProps,
          ...defaultStateCommonTokens,
          container: {
            ...defaultStateCommonTokens.container,
            border_width: BORDERS.border_00,
          },
        },
        [PillStateType.SELECTED]: {
          ...commonProps,
          ...defaultStateCommonTokens,
          container: {
            ...defaultStateCommonTokens.container,
            border_width: BORDERS.border_00,
            background_color: COLORS.SECONDARY.color_secondary_bg_150,
          },
        },
        [PillStateType.DISABLED]: {
          ...commonProps,
          ...defaultStateCommonTokens,
          container: {
            ...defaultStateCommonTokens.container,
            border_width: BORDERS.border_00,
          },
        },
        [PillStateType.DISABLED_SELECTED]: {
          ...commonProps,
          ...defaultStateCommonTokens,
          container: {
            ...defaultStateCommonTokens.container,
            border_width: BORDERS.border_00,
          },
        },
      },
    },
  };
};
