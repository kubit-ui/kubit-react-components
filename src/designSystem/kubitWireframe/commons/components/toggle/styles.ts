import { ToggleStateType, ToggleStylesType } from '@/components/toggle/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, RADIUS, SIZES, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { ToggleVariantType } from './variants';

const commonProps = COLORS => ({
  wrapper: {
    border_radius: RADIUS.radius_300,
    width: '3.625rem',
    height: SIZES.size_250,
    margin: 'auto',
    padding_left: SPACINGS.spacing_100,
    padding_right: SPACINGS.spacing_100,
    display: 'inline-flex',
    position: 'relative',
    text_align: TEXT_ALIGN.center,
    align_items: 'center',
    border_width: BORDERS.border_50,
    border_style: 'solid',
    border_color: COLORS.NEUTRAL.color_neutral_border_50,
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  },
  thumb: {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    height: SIZES.size_150,
    width: SIZES.size_150,
    display: 'flex',
    position: 'absolute',
    border_radius: '100%',
    justify_content: 'center',
    align_items: 'center',
    transition: '0.4s',
    border_width: BORDERS.border_50,
    border_style: 'solid',
    border_color: COLORS.ACCENT.color_accent_default_border_50,
  },
  icon: {
    height: SIZES.size_100,
    width: SIZES.size_100,
  },
});

export const getToggleStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ToggleStylesType<ToggleVariantType> => {
  return {
    [ToggleVariantType.DEFAULT]: {
      [ToggleStateType.DEFAULT_SELECTED]: {
        ...commonProps(COLORS),
        wrapper: {
          ...commonProps(COLORS).wrapper,
          background_color: COLORS.ACCENT.color_accent_default_font_100,
        },
        icon: {
          ...commonProps(COLORS).icon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [ToggleStateType.DEFAULT_UNSELECTED]: {
        ...commonProps(COLORS),
        wrapper: {
          ...commonProps(COLORS).wrapper,
          background_color: COLORS.SECONDARY.color_secondary_bg_150,
        },
        icon: {
          ...commonProps(COLORS).icon,
          color: COLORS.NEUTRAL.color_neutral_icon_150,
        },
      },
      [ToggleStateType.DISABLED_SELECTED]: {
        ...commonProps(COLORS),
        wrapper: {
          ...commonProps(COLORS).wrapper,
          background_color: COLORS.ACCENT.color_accent_default_font_100,
        },
        icon: {
          ...commonProps(COLORS).icon,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
      [ToggleStateType.DISABLED_UNSELECTED]: {
        ...commonProps(COLORS),
        wrapper: {
          ...commonProps(COLORS).wrapper,
          background_color: COLORS.NEUTRAL.color_neutral_bg_150,
        },
        icon: {
          ...commonProps(COLORS).icon,
          color: COLORS.NEUTRAL.color_neutral_icon_150,
        },
      },
    },
  };
};
