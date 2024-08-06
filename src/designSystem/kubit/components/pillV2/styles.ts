import { PillPropsStylesType, PillStateType, PillStylesType } from '@/components/pillV2/types';

import { BORDERS, COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { PillSizeTypeV2, PillVariantTypeV2 } from './variants';

const commonProps: PillPropsStylesType = {
  rootContainer: {
    position: 'relative',
    display: 'flex',
    flex_direction: 'column',
    align_items: 'center',
    gap: SPACINGS.spacing_150,
  },
  input: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    cursor: 'pointer',
  },
  contentContainer: {
    display: 'flex',
    flex_direction: 'row',
    align_items: 'center',
    gap: SPACINGS.spacing_150,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_100}`,
    cursor: 'pointer',
  },
  leftIcon: {
    color: COLORS.NEUTRAL.color_neutral_icon_50,
    height: SIZES.size_200,
    width: SIZES.size_200,
  },
  label: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  rightIcon: {
    color: COLORS.NEUTRAL.color_neutral_icon_50,
    height: SIZES.size_200,
    width: SIZES.size_200,
  },
};

const commonLargeProps: PillPropsStylesType = {
  ...commonProps,
  contentContainer: {
    ...commonProps.contentContainer,
    padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
  },
};

const commonSmallProps: PillPropsStylesType = {
  ...commonProps,
  contentContainer: {
    ...commonProps.contentContainer,
    padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
  },
};

const commonExtraSmallProps: PillPropsStylesType = {
  ...commonProps,
  contentContainer: {
    ...commonProps.contentContainer,
    padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_300}`,
  },
};

export const PILL_STYLES_V2: PillStylesType = {
  [PillVariantTypeV2.DEFAULT]: {
    [PillSizeTypeV2.LARGE]: {
      [PillStateType.DEFAULT]: { ...commonLargeProps },
      [PillStateType.SELECTED]: {
        ...commonLargeProps,
        contentContainer: {
          ...commonLargeProps.contentContainer,
          background_color: COLORS.ACCENT.color_accent_default_font_100,
          border: `${BORDERS.border_50} solid ${COLORS.ACCENT.color_accent_default_font_100}`,
        },
        leftIcon: {
          ...commonLargeProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_250,
        },
        label: {
          ...commonLargeProps.label,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_250,
        },
        rightIcon: {
          ...commonLargeProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_250,
        },
      },
      [PillStateType.DISABLED]: {
        ...commonLargeProps,
        input: {
          ...commonLargeProps.input,
          cursor: 'auto',
        },
        contentContainer: {
          ...commonLargeProps.contentContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
          cursor: 'auto',
        },
        leftIcon: {
          ...commonLargeProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
        label: {
          ...commonLargeProps.label,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        rightIcon: {
          ...commonLargeProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [PillStateType.DISABLED_SELECTED]: {
        ...commonLargeProps,
        input: {
          ...commonLargeProps.input,
          cursor: 'auto',
        },
        contentContainer: {
          ...commonLargeProps.contentContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_bg_150}`,
          cursor: 'auto',
        },
        leftIcon: {
          ...commonLargeProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
        label: {
          ...commonLargeProps.label,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        rightIcon: {
          ...commonLargeProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
    },
    [PillSizeTypeV2.SMALL]: {
      [PillStateType.DEFAULT]: { ...commonSmallProps },
      [PillStateType.SELECTED]: {
        ...commonSmallProps,
        contentContainer: {
          ...commonSmallProps.contentContainer,
          background_color: COLORS.ACCENT.color_accent_default_font_100,
          border: `${BORDERS.border_50} solid ${COLORS.ACCENT.color_accent_default_font_100}`,
        },
        leftIcon: {
          ...commonSmallProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_250,
        },
        label: {
          ...commonSmallProps.label,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_250,
        },
        rightIcon: {
          ...commonSmallProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_250,
        },
      },
      [PillStateType.DISABLED]: {
        ...commonSmallProps,
        input: {
          ...commonSmallProps.input,
          cursor: 'auto',
        },
        contentContainer: {
          ...commonSmallProps.contentContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
          cursor: 'auto',
        },
        leftIcon: {
          ...commonSmallProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
        label: {
          ...commonSmallProps.label,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        rightIcon: {
          ...commonSmallProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [PillStateType.DISABLED_SELECTED]: {
        ...commonSmallProps,
        input: {
          ...commonSmallProps.input,
          cursor: 'auto',
        },
        contentContainer: {
          ...commonSmallProps.contentContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_bg_150}`,
          cursor: 'auto',
        },
        leftIcon: {
          ...commonSmallProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
        label: {
          ...commonSmallProps.label,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        rightIcon: {
          ...commonSmallProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
    },
    [PillSizeTypeV2.EXTRA_SMALL]: {
      [PillStateType.DEFAULT]: { ...commonExtraSmallProps },
      [PillStateType.SELECTED]: {
        ...commonExtraSmallProps,
        contentContainer: {
          ...commonExtraSmallProps.contentContainer,
          background_color: COLORS.ACCENT.color_accent_default_font_100,
          border: `${BORDERS.border_50} solid ${COLORS.ACCENT.color_accent_default_font_100}`,
        },
        leftIcon: {
          ...commonExtraSmallProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_250,
        },
        label: {
          ...commonExtraSmallProps.label,
          font_weight: FONT_WEIGHT.font_weight_600,
          color: COLORS.NEUTRAL.color_neutral_font_250,
        },
        rightIcon: {
          ...commonExtraSmallProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_250,
        },
      },
      [PillStateType.DISABLED]: {
        ...commonExtraSmallProps,
        input: {
          ...commonExtraSmallProps.input,
          cursor: 'auto',
        },
        contentContainer: {
          ...commonExtraSmallProps.contentContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
          cursor: 'auto',
        },
        leftIcon: {
          ...commonExtraSmallProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
        label: {
          ...commonExtraSmallProps.label,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        rightIcon: {
          ...commonExtraSmallProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [PillStateType.DISABLED_SELECTED]: {
        ...commonExtraSmallProps,
        input: {
          ...commonExtraSmallProps.input,
          cursor: 'auto',
        },
        contentContainer: {
          ...commonExtraSmallProps.contentContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_bg_150}`,
          cursor: 'auto',
        },
        leftIcon: {
          ...commonExtraSmallProps.leftIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
        label: {
          ...commonExtraSmallProps.label,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        rightIcon: {
          ...commonExtraSmallProps.rightIcon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
    },
  },
};
