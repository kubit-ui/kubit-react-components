import { PillPropsStylesType, PillStateType, PillStylesType } from '@/components/pillV2/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../variants';
import { PillSizeTypeV2, PillVariantTypeV2 } from './variants';

type ColorType = {
  [key: string]: { [key: string]: string };
};

const buildCommonProps = (COLORS: ColorType): PillPropsStylesType => ({
  rootContainer: {
    position: 'relative',
    display: 'flex',
    flex_direction: 'column',
    align_items: 'center',
    gap: SPACINGS.spacing_150,
    border_radius: RADIUS.radius_300,
  },
  contentContainer: {
    display: 'flex',
    flex_direction: 'row',
    align_items: 'center',
    gap: SPACINGS.spacing_150,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_100}`,
    border_radius: RADIUS.radius_300,
    cursor: 'pointer',
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.ACCENT.color_accent_default_bg_100, '2px'),
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
  input: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    cursor: 'pointer',
    border_radius: RADIUS.radius_300,
  },
});

export const getPillStylesV2 = (COLORS: {
  [key: string]: { [key: string]: string };
}): PillStylesType => {
  const commonProps = buildCommonProps(COLORS);
  const commonPropsLarge = {
    ...commonProps,
    contentContainer: {
      ...commonProps.contentContainer,
      padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
    },
  };
  const commonPropsSmall = {
    ...commonProps,
    contentContainer: {
      ...commonProps.contentContainer,
      padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
    },
  };

  const commonPropsExtraSmall = {
    ...commonProps,
    contentContainer: {
      ...commonProps.contentContainer,
      padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_300}`,
    },
  };
  return {
    [PillVariantTypeV2.DEFAULT]: {
      [PillSizeTypeV2.LARGE]: {
        [PillStateType.DEFAULT]: {
          ...commonPropsLarge,
        },
        [PillStateType.SELECTED]: {
          ...commonPropsLarge,
          contentContainer: {
            ...commonPropsLarge.contentContainer,
            background_color: COLORS.SECONDARY.color_secondary_bg_150,
          },
          leftIcon: {
            ...commonPropsLarge.leftIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_300,
          },
          label: {
            ...commonPropsLarge.label,
            color: COLORS.NEUTRAL.color_neutral_font_50,
          },
          rightIcon: {
            ...commonPropsLarge.rightIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_300,
          },
        },
        [PillStateType.DISABLED]: {
          ...commonPropsLarge,
          contentContainer: {
            ...commonPropsLarge.contentContainer,
            background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
            border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
            cursor: 'auto',
          },
          leftIcon: {
            ...commonPropsLarge.leftIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_50,
          },
          label: {
            ...commonPropsLarge.label,
            color: COLORS.DISABLED.color_accentDisabled_font_50,
          },
          rightIcon: {
            ...commonPropsLarge.rightIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_50,
          },
          input: {
            ...commonPropsLarge.input,
            cursor: 'auto',
          },
        },
        [PillStateType.DISABLED_SELECTED]: {
          ...commonPropsLarge,
          contentContainer: {
            ...commonPropsLarge.contentContainer,
            background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
            border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
            cursor: 'auto',
          },
          leftIcon: {
            ...commonPropsLarge.leftIcon,
            color: COLORS.DISABLED.color_accentDisabled_icon_50,
          },
          label: {
            ...commonPropsLarge.label,
            color: COLORS.DISABLED.color_accent_default_font_50,
          },
          rightIcon: {
            ...commonPropsLarge.rightIcon,
            color: COLORS.DISABLED.color_accentDisabled_icon_50,
          },
          input: {
            ...commonPropsLarge.input,
            cursor: 'auto',
          },
        },
      },
      [PillSizeTypeV2.SMALL]: {
        [PillStateType.DEFAULT]: {
          ...commonPropsSmall,
        },
        [PillStateType.SELECTED]: {
          ...commonPropsSmall,
          contentContainer: {
            ...commonPropsSmall.contentContainer,
            background_color: COLORS.SECONDARY.color_secondary_bg_150,
          },
          leftIcon: {
            ...commonPropsSmall.leftIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_300,
          },
          label: {
            ...commonPropsSmall.label,
            color: COLORS.NEUTRAL.color_neutral_font_50,
          },
          rightIcon: {
            ...commonPropsSmall.rightIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_300,
          },
        },
        [PillStateType.DISABLED]: {
          ...commonPropsSmall,
          contentContainer: {
            ...commonPropsSmall.contentContainer,
            background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
            border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
            cursor: 'auto',
          },
          leftIcon: {
            ...commonPropsSmall.leftIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_50,
          },
          label: {
            ...commonPropsSmall.label,
            color: COLORS.DISABLED.color_accentDisabled_font_50,
          },
          rightIcon: {
            ...commonPropsSmall.rightIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_50,
          },
          input: {
            ...commonPropsSmall.input,
            cursor: 'auto',
          },
        },
        [PillStateType.DISABLED_SELECTED]: {
          ...commonPropsSmall,
          contentContainer: {
            ...commonPropsSmall.contentContainer,
            background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
            border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
            cursor: 'auto',
          },
          leftIcon: {
            ...commonPropsSmall.leftIcon,
            color: COLORS.DISABLED.color_accentDisabled_icon_50,
          },
          label: {
            ...commonPropsSmall.label,
            color: COLORS.DISABLED.color_accent_default_font_50,
          },
          rightIcon: {
            ...commonPropsSmall.rightIcon,
            color: COLORS.DISABLED.color_accentDisabled_icon_50,
          },
          input: {
            ...commonPropsSmall.input,
            cursor: 'auto',
          },
        },
      },
      [PillSizeTypeV2.EXTRA_SMALL]: {
        [PillStateType.DEFAULT]: {
          ...commonPropsExtraSmall,
        },
        [PillStateType.SELECTED]: {
          ...commonPropsExtraSmall,
          contentContainer: {
            ...commonPropsExtraSmall.contentContainer,
            background_color: COLORS.SECONDARY.color_secondary_bg_150,
          },
          leftIcon: {
            ...commonPropsExtraSmall.leftIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_300,
          },
          label: {
            ...commonPropsExtraSmall.label,
            color: COLORS.NEUTRAL.color_neutral_font_50,
          },
          rightIcon: {
            ...commonPropsExtraSmall.rightIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_300,
          },
        },
        [PillStateType.DISABLED]: {
          ...commonPropsExtraSmall,
          contentContainer: {
            ...commonPropsExtraSmall.contentContainer,
            background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
            border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
            cursor: 'auto',
          },
          leftIcon: {
            ...commonPropsExtraSmall.leftIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_50,
          },
          label: {
            ...commonPropsExtraSmall.label,
            color: COLORS.DISABLED.color_accentDisabled_font_50,
          },
          rightIcon: {
            ...commonPropsExtraSmall.rightIcon,
            color: COLORS.NEUTRAL.color_neutral_icon_50,
          },
          input: {
            ...commonPropsExtraSmall.input,
            cursor: 'auto',
          },
        },
        [PillStateType.DISABLED_SELECTED]: {
          ...commonPropsExtraSmall,
          contentContainer: {
            ...commonPropsExtraSmall.contentContainer,
            background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
            border: `${BORDERS.border_50} solid ${COLORS.DISABLED.color_accentDisabled_border_50}`,
            cursor: 'auto',
          },
          leftIcon: {
            ...commonPropsExtraSmall.leftIcon,
            color: COLORS.DISABLED.color_accentDisabled_icon_50,
          },
          label: {
            ...commonPropsExtraSmall.label,
            color: COLORS.DISABLED.color_accent_default_font_50,
          },
          rightIcon: {
            ...commonPropsExtraSmall.rightIcon,
            color: COLORS.DISABLED.color_accentDisabled_icon_50,
          },
          input: {
            ...commonPropsExtraSmall.input,
            cursor: 'auto',
          },
        },
      },
    },
  };
};
