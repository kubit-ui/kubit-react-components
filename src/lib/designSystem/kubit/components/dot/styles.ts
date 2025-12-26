import type { DotThemeStyles } from '@/components/dot/types/dotTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { DotSizeType, DotVariantType } from './variants';

type DotVariant = keyof typeof DotVariantType;
type DotSize = keyof typeof DotSizeType;

const dotSizeCommonProps = {
  border_radius: cssVars.radius_50,
  border_width: cssVars.borders_border_50,
  font_size: cssVars.font_size_body_200,
  font_style: 'normal',
};

const dotVariantCommonProps = {
  align_items: 'center',
  display: 'inline-flex',
  justify_content: 'center',
};

export const DOT: DotThemeStyles<DotVariant, DotSize> = {
  [DotSizeType.BIG]: {
    ...dotSizeCommonProps,
    font_weight: cssVars.font_weight_600,
    height: cssVars.spacings_spacing_400,
    line_height: cssVars.line_height_300,
    padding: cssVars.spacings_spacing_100,
    width: 'fit-content',
  },
  [DotSizeType.MEDIUM]: {
    ...dotSizeCommonProps,
    font_weight: cssVars.font_weight_600,
    height: cssVars.spacings_spacing_300,
    line_height: cssVars.line_height_300,
    padding_left: cssVars.spacings_spacing_100,
    padding_right: cssVars.spacings_spacing_100,
    width: 'fit-content',
  },
  [DotSizeType.SMALL]: {
    border_radius: cssVars.radius_circle,
    border_width: cssVars.borders_border_100,
    height: cssVars.spacings_spacing_150,
    width: cssVars.spacings_spacing_150,
  },
  [DotVariantType.ALTERNATIVE]: {
    ...dotVariantCommonProps,
    background_color: cssVars.colors_accent_color_default_bg_150,
    border_color: cssVars.colors_accent_color_default_border_100,
    border_style: 'solid',
    border_width: cssVars.borders_border_50,
    color: cssVars.colors_accent_color_default_font_100,
  },
  [DotVariantType.WITH_BORDER]: {
    ...dotVariantCommonProps,
    background_color: cssVars.colors_accent_color_default_bg_100,
    border_color: cssVars.colors_accent_color_default_border_150,
    border_style: 'solid',
    border_width: cssVars.borders_border_50,
    color: cssVars.colors_accent_color_default_font_150,
  },
  [DotVariantType.WITHOUT_BORDER]: {
    ...dotVariantCommonProps,
    background_color: cssVars.colors_accent_color_default_bg_100,
    color: cssVars.colors_accent_color_default_font_150,
  },
  padding: cssVars.spacings_spacing_0,
};
