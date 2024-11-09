import { DotStylesType } from '@/components/dot/types/dotTheme';

import { BORDERS, RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SPACINGS } from '../../foundations/spacings';
import { FONT_WEIGHT, PARAGRAPH } from '../../foundations/typography';
import { DotSizeType, DotVariantType } from './variants';

const containerCommonProps = {
  justify_content: 'center',
  align_items: 'center',
  display: 'inline-flex',
};

export const DOT_STYLES: DotStylesType<DotVariantType, DotSizeType> = {
  [DotVariantType.WITH_BORDER]: {
    container: {
      ...containerCommonProps,
      background_color: COLORS.ACCENT.color_accent_default_bg_100,
      border_width: BORDERS.border_50,
      border_color: COLORS.ACCENT.color_accent_default_border_150,
      border_style: 'solid',
      color: COLORS.ACCENT.color_accent_default_font_150,
    },
  },
  [DotVariantType.WITHOUT_BORDER]: {
    container: {
      ...containerCommonProps,
      background_color: COLORS.ACCENT.color_accent_default_bg_100,
      color: COLORS.ACCENT.color_accent_default_font_150,
    },
  },
  [DotVariantType.ALTERNATIVE]: {
    container: {
      ...containerCommonProps,
      background_color: COLORS.ACCENT.color_accent_default_bg_150,
      border_width: BORDERS.border_50,
      border_color: COLORS.ACCENT.color_accent_default_border_100,
      border_style: 'solid',
      color: COLORS.ACCENT.color_accent_default_font_100,
    },
  },
  [DotSizeType.SMALL]: {
    container: {
      border_radius: RADIUS.radius_circle,
      border_width: BORDERS.border_100,
      height: SPACINGS.spacing_150,
      width: SPACINGS.spacing_150,
    },
  },
  [DotSizeType.MEDIUM]: {
    container: {
      border_radius: RADIUS.radius_50,
      border_width: BORDERS.border_50,
      height: SPACINGS.spacing_300,
      width: 'fit-content',
      padding_left: SPACINGS.spacing_100,
      padding_right: SPACINGS.spacing_100,
      font_size: PARAGRAPH.CAPTION.DESKTOP.font_size,
      line_height: PARAGRAPH.CAPTION.DESKTOP.line_height,
      font_weight: FONT_WEIGHT.font_weight_600,
      font_style: 'normal',
    },
  },
  [DotSizeType.BIG]: {
    container: {
      border_radius: RADIUS.radius_50,
      border_width: BORDERS.border_50,
      height: SPACINGS.spacing_400,
      padding: SPACINGS.spacing_100,
      width: 'fit-content',
      font_size: PARAGRAPH.CAPTION.DESKTOP.font_size,
      line_height: PARAGRAPH.CAPTION.DESKTOP.line_height,
      font_weight: FONT_WEIGHT.font_weight_600,
      font_style: 'normal',
    },
  },
};
