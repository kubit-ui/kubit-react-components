import type { CalendarVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';
import { STATES } from '@/types/states/states';

import { BUTTON } from '../button/styles';
import { ButtonSizeType, ButtonVariantType } from '../button/variants';
import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { type CalendarVariant, YearSelectorState } from './variants';

type CalendarVariants = keyof typeof CalendarVariant;

export const CALENDAR: CalendarVariantStyles<CalendarVariants> = {
  $foreign: {
    button_size: {
      component: BUTTON,
      name: 'button',
      variant: ButtonSizeType.LARGE,
    },
    button_variant: {
      component: BUTTON,
      name: 'button',
      variant: ButtonVariantType.GHOST_PRIMARY,
    },
  },
  $mediaQueries: {
    desktop: {
      border_color: cssVars.colors_neutral_color_border_50,
      border_style: 'solid',
      border_width: cssVars.borders_border_100,
      margin_top: cssVars.spacings_spacing_150,
      padding: `${cssVars.spacings_spacing_300} ${cssVars.spacings_spacing_0}`,
    },
    mobile: {
      box_shadow: 'none',
      padding: `${cssVars.spacings_spacing_0}`,
    },
    tablet: {
      box_shadow: 'none',
      padding: `${cssVars.spacings_spacing_0}`,
    },
  },
  _backText: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED].$mediaQueries.desktop,
    color: cssVars.colors_disabled_color_accentdisabled_icon_100,
    font_weight: cssVars.font_weight_400,
  },
  _container: {
    position: 'relative',
  },
  _daysList: {
    color: cssVars.colors_neutral_color_font_50,
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED].$mediaQueries.desktop,
    $attributes: {
      'data-state': {
        [STATES.CURRENT_DAY]: {
          border: `${cssVars.borders_border_50} solid ${cssVars.colors_secondary_color_border_100}`,
          border_radius: cssVars.radius_50,
          color: cssVars.colors_accent_color_default_font_100,
          font_weight: cssVars.font_weight_400,
          text_align: cssVars.text_align_center,
        },

        [STATES.DISABLED]: {
          border: cssVars.borders_border_00,
          border_radius: cssVars.radius_00,
          color: cssVars.colors_disabled_color_accentdisabled_font_100,
          font_weight: cssVars.font_weight_400,
          text_align: cssVars.text_align_center,
        },

        [STATES.END_DATE_RANGE]: {
          background_color: cssVars.colors_accent_color_default_border_100,
          border: cssVars.borders_border_00,
          border_radius: `${cssVars.radius_00} ${cssVars.radius_50} ${cssVars.radius_50} ${cssVars.radius_00}`,
          color: cssVars.colors_neutral_color_font_250,
          font_weight: cssVars.font_weight_500,
          text_align: cssVars.text_align_center,
        },

        [STATES.MIDLE_DATE_RANGE]: {
          background_color: cssVars.colors_secondary_color_bg_200,
          border_bottom: `${cssVars.borders_border_50} solid ${cssVars.colors_secondary_color_border_100}`,
          border_radius: cssVars.radius_00,
          border_top: `${cssVars.borders_border_50} solid ${cssVars.colors_secondary_color_border_100}`,
          color: cssVars.colors_neutral_color_font_50,
          font_weight: cssVars.font_weight_400,
          text_align: cssVars.text_align_center,
        },

        [STATES.SELECTED]: {
          background_color: cssVars.colors_secondary_color_bg_100,
          border: cssVars.borders_border_00,
          border_radius: cssVars.radius_50,
          color: cssVars.colors_neutral_color_font_250,
          font_weight: cssVars.font_weight_500,
          text_align: cssVars.text_align_center,
        },

        [STATES.START_DATE_RANGE]: {
          background_color: cssVars.colors_accent_color_default_bg_100,
          border: cssVars.borders_border_00,
          border_radius: `${cssVars.radius_50} ${cssVars.radius_00} ${cssVars.radius_00} ${cssVars.radius_50}`,
          color: cssVars.colors_neutral_color_font_250,
          font_weight: cssVars.font_weight_500,
          text_align: cssVars.text_align_center,
        },
      },
    },
    align_items: 'center',
    border: cssVars.borders_border_00,
    border_radius: cssVars.radius_00,
    display: 'inline-flex',
    font_weight: cssVars.font_weight_400,
    height: cssVars.spacings_spacing_100_percent,
    justify_content: 'center',
    text_align: cssVars.text_align_center,
    width: cssVars.spacings_spacing_100_percent,
  },
  _headerContainer: {
    display: 'flex',
    flex_wrap: 'wrap',
    justify_content: 'space-between',
  },
  _headerRow: {
    display: 'flex',
    flex_direction: 'row',
    width: cssVars.spacings_spacing_100_percent,
  },
  _headerTh: {
    text_align: 'center',
  },
  _leftArrow: {
    color: cssVars.colors_accent_color_default_icon_100,
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _listElementEmpty: {
    aspect_ratio: '1 / 1',
  },
  _listElementRove: {
    aspect_ratio: '1 / 1',
  },
  _monthElement: {
    $attributes: {
      'data-state': {
        [STATES.CURRENT]: {
          border_radius: cssVars.radius_50,
        },
        [STATES.DISABLED]: {
          padding: cssVars.spacings_spacing_150,
        },
        [STATES.SELECTED]: {
          border_radius: cssVars.radius_50,
        },
      },
    },
    cursor: 'pointer',
    padding: cssVars.spacings_spacing_150,
    text_align: cssVars.text_align_center,
    width: cssVars.spacings_spacing_100_percent,
  },
  _monthListItem: {
    $attributes: {
      'data-state': {
        [STATES.CURRENT]: {
          border: `${cssVars.borders_border_50} solid ${cssVars.colors_accent_color_default_border_100}`,
          border_radius: cssVars.radius_50,
        },
        [STATES.DISABLED]: {
          border: cssVars.borders_border_00,
          cursor: 'auto',
          pointer_events: 'none',
        },
        [STATES.SELECTED]: {
          background_color: cssVars.colors_accent_color_default_border_100,
          border: cssVars.borders_border_00,
          border_radius: cssVars.radius_50,
        },
      },
    },
    border: cssVars.borders_border_00,
    border_radius: cssVars.radius_50,
  },
  _monthsList: {
    align_items: 'flex-start',
    display: 'grid',
    flex_wrap: 'wrap',
    gap: cssVars.spacings_spacing_300,
    grid_template_columns: 'repeat(3, 1fr)',
    height: 'fit-content',
    justify_content: 'space-between',
    left: cssVars.spacings_spacing_0,
    position: 'relative',
    top: cssVars.spacings_spacing_0,
    width: cssVars.spacings_spacing_100_percent,
  },
  _rightArrow: {
    color: cssVars.colors_accent_color_default_icon_100,
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _selectorContainer: {
    align_items: 'center',
    display: 'flex',
    gap: cssVars.spacings_spacing_300,
    margin_bottom: cssVars.spacings_spacing_150,
  },
  _selectorIconAndBackTextContainer: {
    align_items: 'center',
    cursor: 'pointer',
    display: 'flex',
    flex_direction: 'row',
    gap: cssVars.spacings_spacing_150,
  },
  _selectorOptionsContainer: {
    display: 'flex',
    flex_direction: 'row',
    gap: cssVars.spacings_spacing_450,
    justify_content: 'space-between',
  },
  _table: {
    display: 'flex',
    flex_direction: 'column',
  },
  _tableRow: {
    display: 'flex',
    width: cssVars.spacings_spacing_100_percent,
  },
  _tbody: {
    display: 'flex',
    flex_direction: 'row',
    flex_wrap: 'wrap',
    position: 'relative',
  },
  _weekDayContainer: {
    padding: cssVars.spacings_spacing_150,
  },
  _year: {
    $attributes: {
      'data-state': {
        [YearSelectorState.CURRENT]: {
          color: cssVars.colors_secondary_color_font_100,
        },
        [YearSelectorState.DISABLED]: {
          color: cssVars.colors_disabled_color_accentdisabled_font_100,
        },
        [YearSelectorState.SELECTED]: {
          color: cssVars.colors_neutral_color_font_250,
        },
      },
    },
    color: cssVars.colors_neutral_color_font_50,
  },
  _yearElement: {
    $attributes: {
      'data-state': {
        [YearSelectorState.CURRENT]: {
          border: `${cssVars.borders_border_50} solid ${cssVars.colors_accent_color_default_border_100}`,
          border_radius: cssVars.radius_50,
        },

        [YearSelectorState.DISABLED]: {
          border: cssVars.borders_border_00,
        },

        [YearSelectorState.SELECTED]: {
          background_color: cssVars.colors_accent_color_default_border_100,
          border_radius: cssVars.radius_50,
        },
      },
    },
    align_items: 'center',
    border: cssVars.borders_border_00,
    cursor: 'pointer',
    display: 'inline-flex',
    justify_content: 'center',
    padding: cssVars.spacings_spacing_300,
    width: cssVars.spacings_spacing_100_percent,
  },
  _yearListItem: {
    text_align: 'center',
  },
  _yearsList: {
    display: 'grid',
    gap: cssVars.spacings_spacing_300,
    grid_template_columns: 'repeat(4, 1fr)',
    height: 'fit-content',
    justify_content: 'space-between',
    left: cssVars.spacings_spacing_0,
    max_height: '18rem',
    overflow: 'auto',
    padding: cssVars.spacings_spacing_150,
    position: 'relative',
    top: cssVars.spacings_spacing_0,
    width: cssVars.spacings_spacing_100_percent,
  },
  background_color: cssVars.colors_neutral_color_bg_250,
  box_shadow: cssVars.shadow_10,
};
