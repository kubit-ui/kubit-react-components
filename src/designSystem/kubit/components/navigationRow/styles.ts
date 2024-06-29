import { IconHighlightedSizeType } from '@/components/iconHighlighted/types';
import { NavigationRowStylesType } from '@/components/navigationRow/types';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, FONT_WEIGHT, SPACINGS } from '../../foundations';
import { LineSeparatorLineVariantType } from '../lineSeparator';
import { TextVariantType } from '../text';
import { IconHighlightedVariantType } from '../variants';
import { NavigationRowSizeType, NavigationRowVariantType } from './variants';

export const NAVIGATION_ROW_STYLES: NavigationRowStylesType<
  NavigationRowVariantType,
  NavigationRowSizeType
> = {
  [NavigationRowSizeType.SMALL]: {},
  [NavigationRowVariantType.DEFAULT]: {
    container: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      flex_direction: 'row',
      justify_content: 'space-between',
      cursor: 'pointer',
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      padding: `${SPACINGS.spacing_400} 0}`,
      [DeviceBreakpointsType.DESKTOP]: {
        align_items: 'start',
      },
      [DeviceBreakpointsType.TABLET]: {
        align_items: 'center',
      },
      [DeviceBreakpointsType.MOBILE]: {
        align_items: 'start',
      },
    },
    decorativeIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SPACINGS.spacing_400,
      height: SPACINGS.spacing_400,
    },
    iconHighlighted: {
      color: COLORS.NEUTRAL.color_neutral_bg_250,
      backgroundColor: COLORS.NEUTRAL.color_neutral_icon_50,
      variant: IconHighlightedVariantType.ROUND,
      size: IconHighlightedSizeType.EXTRA_SMALL,
    },
    textSectionContainer: {
      display: 'flex',
      flex_direction: 'column',
      align_items: 'flex-start',
      gap: SPACINGS.spacing_100,
      width: '100%',
      margin_left: SPACINGS.spacing_150,
      margin_right: SPACINGS.spacing_300,
    },
    iconTextContainer: {
      display: 'flex',
      flex_direction: 'row',
      align_self: 'flex-start',
      gap: SPACINGS.spacing_100,
    },
    text: {
      font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      color: COLORS.ACCENT.color_accent_default_font_50,
      font_weight: FONT_WEIGHT.font_weight_600,
      text_align: 'start',
    },
    description: {
      font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      color: COLORS.ACCENT.color_accent_default_font_50,
      font_weight: FONT_WEIGHT.font_weight_400,
      text_align: 'start',
    },
    arrowIcon: {
      color: COLORS.ACCENT.color_accent_default_icon_100,
      width: SPACINGS.spacing_400,
      height: SPACINGS.spacing_400,
    },
    lineSeparatorLineVariant: LineSeparatorLineVariantType.LINE_DEFAULT,
  },
};
