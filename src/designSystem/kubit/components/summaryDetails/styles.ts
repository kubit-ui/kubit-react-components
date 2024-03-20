// types
import { SummaryDetailsStylesType } from '@/components/summaryDetails/types';

// fundations
import { BORDERS, COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { LineSeparatorLineVariantType, TextVariantType } from '../variants';
import { SummaryDetailsVariantType } from './variants';

export const SUMMARY_DETAILS_STYLES: SummaryDetailsStylesType<SummaryDetailsVariantType> = {
  // Add the same border than OPTION SIDE_MENU_LEVEL_1
  [SummaryDetailsVariantType.SIDE_MENU]: {
    container: { width: '100%' },
    header: {
      cursor: 'pointer',
      display: 'flex',
      flex_direction: 'column',
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      padding_top: SPACINGS.spacing_250,
      padding_right: SPACINGS.spacing_300,
      padding_left: `calc(${SPACINGS.spacing_300} + ${BORDERS.border_200})`,
      firstChild: {
        display: 'flex',
        flex_direction: 'row',
        justify_content: 'space-between',
        align_items: 'center',
        gap: '0.5rem',
      },
      lastChild: {
        border_style: 'none',
        padding_bottom: SPACINGS.spacing_250,
      },
    },
    leftIconContainer: {
      display: 'flex',
      flex_direction: 'row',
      align_items: 'center',
      gap: SPACINGS.spacing_150,
    },
    leftOpenIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SIZES.size_250,
      height: SIZES.size_250,
    },
    leftClosedIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SIZES.size_250,
      height: SIZES.size_250,
    },
    title: {
      font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      color: COLORS.NEUTRAL.color_neutral_font_50,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
    titleContainer: {
      width: '100%',
    },
    rightIconContainer: {
      allowRotate: true,
    },
    rightOpenIcon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
    },
    rightClosedIcon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
    },
    body: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      padding_top: SPACINGS.spacing_150,
      padding_left: SPACINGS.spacing_300,
    },
    lineSeparatorVariant: LineSeparatorLineVariantType.LINE_DEFAULT,
    hasLineSeparator: false,
  },
  [SummaryDetailsVariantType.ACCORDION]: {
    container: { width: '100%' },
    header: {
      cursor: 'pointer',
      display: 'flex',
      flex_direction: 'column',
      padding_top: SPACINGS.spacing_150,
      firstChild: {
        display: 'flex',
        flex_direction: 'row',
        border_bottom_style: 'solid',
        border_bottom_width: BORDERS.border_50,
        border_bottom_color: COLORS.SECONDARY.color_secondary_bg_100,
        align_items: 'end',
      },
    },
    leftIconContainer: {
      allowRotate: true,
      display: 'flex',
      flex_direction: 'row',
      align_items: 'center',
      height: SIZES.size_400,
      width: SIZES.size_400,
      max_width: SIZES.size_400,
      max_height: SIZES.size_400,
      background_color: COLORS.SECONDARY.color_secondary_bg_100,
      margin_right: SPACINGS.spacing_300,
      justify_content: 'center',
    },
    leftOpenIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SIZES.size_300,
      height: SIZES.size_300,
    },
    leftClosedIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SIZES.size_300,
      height: SIZES.size_300,
    },
    title: {
      font_variant: TextVariantType.HEADING_H3_EXPANDED,
      color: COLORS.NEUTRAL.color_neutral_font_50,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
    titleContainer: {
      width: '100%',
    },
    rightIconContainer: {
      allowRotate: true,
    },
    rightOpenIcon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
    },
    rightClosedIcon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
    },
    body: {
      padding_top: SPACINGS.spacing_150,
      padding_left: SPACINGS.spacing_300,
    },
    lineSeparatorVariant: LineSeparatorLineVariantType.LINE_DEFAULT,
    hasLineSeparator: false,
  },
  [SummaryDetailsVariantType.ACCORDION_NO_PADDING]: {
    container: { width: '100%' },
    header: {
      cursor: 'pointer',
      display: 'flex',
      flex_direction: 'column',
      padding_top: SPACINGS.spacing_150,
      firstChild: {
        display: 'flex',
        flex_direction: 'row',
        border_bottom_style: 'solid',
        border_bottom_width: BORDERS.border_50,
        border_bottom_color: COLORS.SECONDARY.color_secondary_bg_100,
        align_items: 'end',
      },
    },
    leftIconContainer: {
      allowRotate: true,
      display: 'flex',
      flex_direction: 'row',
      align_items: 'center',
      height: SIZES.size_400,
      width: SIZES.size_400,
      max_width: SIZES.size_400,
      max_height: SIZES.size_400,
      background_color: COLORS.SECONDARY.color_secondary_bg_100,
      margin_right: SPACINGS.spacing_300,
      justify_content: 'center',
    },
    leftOpenIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SIZES.size_300,
      height: SIZES.size_300,
    },
    leftClosedIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SIZES.size_300,
      height: SIZES.size_300,
    },
    title: {
      font_variant: TextVariantType.HEADING_H3_EXPANDED,
      color: COLORS.NEUTRAL.color_neutral_font_50,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
    titleContainer: {
      width: '100%',
    },
    rightIconContainer: {
      allowRotate: true,
    },
    rightOpenIcon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
    },
    rightClosedIcon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
    },
    body: {
      padding_top: SPACINGS.spacing_300,
      padding_left: SPACINGS.spacing_0,
    },
    lineSeparatorVariant: LineSeparatorLineVariantType.LINE_DEFAULT,
    hasLineSeparator: false,
  },
};
