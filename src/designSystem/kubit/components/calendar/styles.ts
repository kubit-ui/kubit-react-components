import { ListDaysStateType } from '@/components/calendar/list/types/state';
import { MonthSelectorStateType } from '@/components/calendar/selector/monthSelector/types/state';
import { SelectorStateType } from '@/components/calendar/selector/types/state';
import { YearSelectorStateType } from '@/components/calendar/selector/yearSelector/types/state';
import { CalendarStylesType, CalendarVariantType } from '@/components/calendar/types';
import { DeviceBreakpointsType } from '@/types';

import {
  BORDERS,
  COLORS,
  FONT_WEIGHT,
  RADIUS,
  SHADOW,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { TextVariantType } from '../text';
import { ButtonSizeType, ButtonVariantType } from '../variants';

export const CALENDAR_STYLES: CalendarStylesType = {
  [CalendarVariantType.DEFAULT]: {
    container: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      box_shadow: SHADOW.shadow_10,
      [DeviceBreakpointsType.DESKTOP]: {
        padding: `${SPACINGS.spacing_300} ${SPACINGS.spacing_0}`,
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_style: 'solid',
        border_width: BORDERS.border_100,
        margin_top: SPACINGS.spacing_150,
      },
      [DeviceBreakpointsType.TABLET]: {
        padding: `${SPACINGS.spacing_0}`,
        box_shadow: 'none',
      },
      [DeviceBreakpointsType.MOBILE]: {
        padding: `${SPACINGS.spacing_0}`,
        box_shadow: 'none',
      },
    },
    selectorContainer: {
      margin_bottom: SPACINGS.spacing_150,
      gap: SPACINGS.spacing_300,
    },
    selectorIconAndBackTextContainer: {
      gap: SPACINGS.spacing_150,
    },
    leftArrow: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.ACCENT.color_accent_default_icon_100,
    },
    rightArrow: {
      width: SIZES.size_250,
      height: SIZES.size_250,
      color: COLORS.ACCENT.color_accent_default_icon_100,
    },
    colorArrowDisabled: COLORS.DISABLED.color_accentDisabled_font_100,
    backText: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.DISABLED.color_accentDisabled_icon_100,
    },
    selectorOptionsContainer: {
      gap: SPACINGS.spacing_450,
    },
    selectorOptions: {
      sizeSelectorButton: ButtonSizeType.MEDIUM,
      variantSelectorButton: ButtonVariantType.ACTION_SECONDARY,
      [SelectorStateType.DEFAULT]: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.ACCENT.color_accent_default_font_50,
      },
      [SelectorStateType.DISABLED]: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.DISABLED.color_accentDisabled_icon_100,
      },
    },
    useDaySelector: true,
    weekDayContainer: {
      padding: SPACINGS.spacing_150,
    },
    weekDay: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.NEUTRAL.color_neutral_font_100,
    },
    daysList: {
      [ListDaysStateType.DEFAULT]: {
        label_font_color: COLORS.NEUTRAL.color_neutral_font_50,
        label_font_size: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        label_font_weight: FONT_WEIGHT.font_weight_400,
        label_font_align: TEXT_ALIGN.center,
        border: BORDERS.border_00,
        radius_size: RADIUS.radius_00,
      },
      [ListDaysStateType.DISABLED]: {
        label_font_color: COLORS.DISABLED.color_accentDisabled_font_100,
        label_font_size: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        label_font_weight: FONT_WEIGHT.font_weight_400,
        label_font_align: TEXT_ALIGN.center,
        border: BORDERS.border_00,
        radius_size: RADIUS.radius_00,
      },
      [ListDaysStateType.CURRENT_DAY]: {
        label_font_color: COLORS.SECONDARY.color_secondary_font_100,
        label_font_size: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        label_font_weight: FONT_WEIGHT.font_weight_400,
        label_font_align: TEXT_ALIGN.center,
        border: `${BORDERS.border_50} solid ${COLORS.SECONDARY.color_secondary_border_100}`,
        radius_size: RADIUS.radius_50,
      },
      [ListDaysStateType.SELECTED]: {
        label_font_color: COLORS.NEUTRAL.color_neutral_font_250,
        label_font_size: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        label_font_weight: FONT_WEIGHT.font_weight_500,
        label_font_align: TEXT_ALIGN.center,
        border: BORDERS.border_00,
        radius_size: `${RADIUS.radius_50}`,
        background_color: COLORS.SECONDARY.color_secondary_bg_100,
      },
      [ListDaysStateType.MIDLE_DATE_RANGE]: {
        label_font_color: COLORS.NEUTRAL.color_neutral_font_50,
        label_font_size: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        label_font_weight: FONT_WEIGHT.font_weight_400,
        label_font_align: TEXT_ALIGN.center,
        border_top: `${BORDERS.border_50} solid ${COLORS.SECONDARY.color_secondary_border_100}`,
        border_bottom: `${BORDERS.border_50} solid ${COLORS.SECONDARY.color_secondary_border_100}`,
        radius_size: RADIUS.radius_00,
        background_color: COLORS.SECONDARY.color_secondary_bg_200,
      },
      [ListDaysStateType.END_DATE_RANGE]: {
        label_font_color: COLORS.NEUTRAL.color_neutral_font_250,
        label_font_size: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        label_font_weight: FONT_WEIGHT.font_weight_500,
        label_font_align: TEXT_ALIGN.center,
        border: BORDERS.border_00,
        radius_size: `${RADIUS.radius_00} ${RADIUS.radius_50} ${RADIUS.radius_50} ${RADIUS.radius_00}`,
        background_color: COLORS.ACCENT.color_accent_default_border_100,
      },
      [ListDaysStateType.START_DATE_RANGE]: {
        label_font_color: COLORS.NEUTRAL.color_neutral_font_250,
        label_font_size: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        label_font_weight: FONT_WEIGHT.font_weight_500,
        label_font_align: TEXT_ALIGN.center,
        border: BORDERS.border_00,
        radius_size: `${RADIUS.radius_50} ${RADIUS.radius_00} ${RADIUS.radius_00} ${RADIUS.radius_50}`,
        background_color: COLORS.ACCENT.color_accent_default_border_100,
      },
    },
    monthsList: {
      gap: `${SPACINGS.spacing_300}`,
    },
    monthListItem: {
      [MonthSelectorStateType.DEFAULT]: {
        border_radius: RADIUS.radius_50,
        border: BORDERS.border_00,
      },
      [MonthSelectorStateType.CURRENT]: {
        border_radius: RADIUS.radius_50,
        border: `${BORDERS.border_50} solid ${COLORS.ACCENT.color_accent_default_border_100}`,
      },
      [MonthSelectorStateType.DISABLED]: {
        border: BORDERS.border_00,
        cursor: 'auto',
        pointer_events: 'none',
      },
      [MonthSelectorStateType.SELECTED]: {
        border_radius: RADIUS.radius_50,
        background_color: COLORS.ACCENT.color_accent_default_border_100,
        border: BORDERS.border_00,
      },
    },
    monthElement: {
      [MonthSelectorStateType.DEFAULT]: {
        padding: SPACINGS.spacing_150,
      },
      [MonthSelectorStateType.CURRENT]: {
        border_radius: RADIUS.radius_50,
        padding: SPACINGS.spacing_150,
      },
      [MonthSelectorStateType.DISABLED]: {
        padding: SPACINGS.spacing_150,
      },
      [MonthSelectorStateType.SELECTED]: {
        border_radius: RADIUS.radius_50,
        padding: SPACINGS.spacing_150,
      },
    },
    month: {
      [MonthSelectorStateType.DEFAULT]: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      [MonthSelectorStateType.CURRENT]: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.SECONDARY.color_secondary_font_100,
      },
      [MonthSelectorStateType.DISABLED]: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.DISABLED.color_accentDisabled_font_100,
      },
      [MonthSelectorStateType.SELECTED]: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
    },
    yearsList: {
      padding: SPACINGS.spacing_150,
      gap: `${SPACINGS.spacing_300}`,
      max_height: '18rem',
    },
    yearElement: {
      [YearSelectorStateType.DEFAULT]: {
        padding: SPACINGS.spacing_300,
        border: BORDERS.border_00,
      },
      [YearSelectorStateType.CURRENT]: {
        border_radius: RADIUS.radius_50,
        padding: SPACINGS.spacing_300,
        border: `${BORDERS.border_50} solid ${COLORS.ACCENT.color_accent_default_border_100}`,
      },
      [YearSelectorStateType.DISABLED]: {
        padding: SPACINGS.spacing_300,
        border: BORDERS.border_00,
      },
      [YearSelectorStateType.SELECTED]: {
        border_radius: RADIUS.radius_50,
        padding: SPACINGS.spacing_300,
        background_color: COLORS.ACCENT.color_accent_default_border_100,
      },
    },
    year: {
      [YearSelectorStateType.DEFAULT]: {
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      [YearSelectorStateType.CURRENT]: {
        color: COLORS.SECONDARY.color_secondary_font_100,
      },
      [YearSelectorStateType.DISABLED]: {
        color: COLORS.DISABLED.color_accentDisabled_font_100,
      },
      [YearSelectorStateType.SELECTED]: {
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
    },
  },
};
