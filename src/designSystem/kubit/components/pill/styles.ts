import { PillStateType, PillStylesType } from '@/components/pill/types';
import { DeviceBreakpointsType } from '@/types';

import {
  BORDERS,
  COLORS,
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
    outline: `${SPACINGS.spacing_25} `,
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
};

const selectedStateCommonTokens = {
  container: {
    ...commonContainerProps,
    cursor: 'pointer',
    border_color: COLORS.ACCENT.color_accent_default_font_100,
    border_width: BORDERS.border_00,
  },
  input,
  label: {
    ...commonLabelProps,
    color: COLORS.NEUTRAL.color_neutral_font_250,
    font_weight: FONT_WEIGHT.font_weight_600,
  },
  decorativeIcon: {
    width: SIZES.size_200,
    height: SIZES.size_200,
    color: COLORS.NEUTRAL.color_neutral_icon_250,
  },
  selectedIcon: {
    width: SIZES.size_200,
    height: SIZES.size_200,
    color: COLORS.NEUTRAL.color_neutral_icon_250,
  },
};

const disabledStateCommonTokens = {
  container: {
    ...commonContainerProps,
    cursor: 'auto',
    border_color: COLORS.DISABLED.color_accentDisabled_border_50,
    border_style: 'solid',
    border_width: BORDERS.border_50,
  },
  input,
  label: {
    ...commonLabelProps,
    color: COLORS.DISABLED.color_accentDisabled_font_50,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
  decorativeIcon: {
    width: SIZES.size_200,
    height: SIZES.size_200,
    color: COLORS.NEUTRAL.color_neutral_icon_50,
  },
};

const disabledSelectedCommonTokens = {
  container: {
    ...commonContainerProps,
    cursor: 'auto',
    border_color: COLORS.DISABLED.color_accentDisabled_border_50,
    border_width: BORDERS.border_00,
  },
  input,
  label: {
    ...commonLabelProps,
    color: COLORS.DISABLED.color_accentDisabled_font_50,
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

const defaultVariantTokens = {
  [PillStateType.DEFAULT]: {
    ...commonProps,
    ...defaultStateCommonTokens,
    container: {
      ...defaultStateCommonTokens.container,
      padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    },
  },
  [PillStateType.SELECTED]: {
    ...commonProps,
    ...selectedStateCommonTokens,
    container: {
      ...selectedStateCommonTokens.container,
      padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
      background_color: COLORS.ACCENT.color_accent_default_bg_100,
    },
  },
  [PillStateType.DISABLED]: {
    ...commonProps,
    ...disabledStateCommonTokens,
    container: {
      ...disabledStateCommonTokens.container,
      padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
      background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
    },
  },
  [PillStateType.DISABLED_SELECTED]: {
    ...commonProps,
    ...disabledSelectedCommonTokens,
    container: {
      ...disabledSelectedCommonTokens.container,
      padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
      background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
    },
  },
};

export const PILL_STYLES: PillStylesType<PillSizeType, PillVariantType> = {
  [PillSizeType.LARGE]: {
    [PillVariantType.DEFAULT]: {
      ...defaultVariantTokens,
    },
    [PillVariantType.PILL_SELECTOR]: {
      ...defaultVariantTokens,
      [PillStateType.SELECTED]: {
        ...defaultVariantTokens[PillStateType.SELECTED],
        container: {
          ...defaultVariantTokens[PillStateType.SELECTED].container,
          border_color: COLORS.NEUTRAL.color_neutral_border_100,
          border_width: BORDERS.border_50,
        },
      },
    },
  },
  [PillSizeType.MEDIUM]: {
    [PillVariantType.DEFAULT]: {
      [PillStateType.DEFAULT]: {
        ...commonProps,
        ...defaultStateCommonTokens,
        container: {
          ...defaultStateCommonTokens.container,
          padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
      },
      [PillStateType.SELECTED]: {
        ...commonProps,
        ...selectedStateCommonTokens,
        container: {
          ...selectedStateCommonTokens.container,
          padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
          background_color: COLORS.ACCENT.color_accent_default_bg_100,
        },
      },
      [PillStateType.DISABLED]: {
        ...commonProps,
        ...disabledStateCommonTokens,
        container: {
          ...disabledStateCommonTokens.container,
          padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
        },
      },
      [PillStateType.DISABLED_SELECTED]: {
        ...commonProps,
        ...disabledSelectedCommonTokens,
        container: {
          ...disabledSelectedCommonTokens.container,
          padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
        },
      },
    },
  },
  [PillSizeType.SMALL]: {
    [PillVariantType.DEFAULT]: {
      [PillStateType.DEFAULT]: {
        ...commonProps,
        ...defaultStateCommonTokens,
        container: {
          ...defaultStateCommonTokens.container,
          padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_300}`,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        },
      },
      [PillStateType.SELECTED]: {
        ...commonProps,
        ...selectedStateCommonTokens,
        container: {
          ...selectedStateCommonTokens.container,
          padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_300}`,
          background_color: COLORS.ACCENT.color_accent_default_bg_100,
        },
      },
      [PillStateType.DISABLED]: {
        ...commonProps,
        ...disabledStateCommonTokens,
        container: {
          ...disabledStateCommonTokens.container,
          padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_300}`,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
        },
      },
      [PillStateType.DISABLED_SELECTED]: {
        ...commonProps,
        ...disabledSelectedCommonTokens,
        container: {
          ...disabledSelectedCommonTokens.container,
          padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_300}`,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
        },
      },
    },
  },
};
