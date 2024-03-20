import { TableStylesType } from '@/components/table/types';
import { DeviceBreakpointsType } from '@/types';

import {
  BORDERS,
  FONT_WEIGHT,
  PARAGRAPH,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { TextVariantType } from '../text';
import {
  DividerVariantType,
  FooterVariants,
  LineSeparatorLabelVariantType,
  LineSeparatorLineVariantType,
} from '../variants';
import { TableHeaderVariantType, TableRowVariantType, TableVariantType } from './variants';

const commonTableProps = COLORS => ({
  display: 'flex',
  flex_direction: 'column',
  width: '100%',
  border_width: BORDERS.border_50,
  border_color: COLORS.NEUTRAL.color_neutral_border_50,
  border_radius: RADIUS.radius_300,
  border_style: 'solid',
  box_shadow: `${SPACINGS.spacing_100} ${SPACINGS.spacing_100} ${SPACINGS.spacing_0} ${COLORS.BRAND.color_brand_bg_50}`,
});

const commonPropsHeader = COLORS => ({
  container: {
    display: 'flex',
    width: '100%',
    flex_direction: 'column',
    background_color: COLORS.SECONDARY.color_secondary_bg_150,
    border_top_left_radius: RADIUS.radius_300,
    border_top_right_radius: RADIUS.radius_300,
    border_bottom_width: BORDERS.border_50,
    border_bottom_color: COLORS.NEUTRAL.color_neutral_border_50,
    border_bottom_style: 'solid',
  },
  row: {
    display: 'flex',
  },
  rowPaddingWhenDividerShown: SPACINGS.spacing_400,
  column: {
    display: 'flex',
    font_weight: 'bold',
    flex: '1 1 0',
    align_items: 'center',
    border_right_width: BORDERS.border_50,
    border_right_color: COLORS.NEUTRAL.color_neutral_border_50,
    border_right_style: 'solid',
    padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
    lastColumn: {
      border_right: BORDERS.border_00,
    },
  },
  typography: {
    font_weight: FONT_WEIGHT.font_weight_600,
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    text_align: TEXT_ALIGN.left,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
});

const commonPropsBodyContainer = COLORS => ({
  display: 'flex',
  width: '100%',
  flex_direction: 'column',
  background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  border_radius: RADIUS.radius_300,
});

const commonPropsBodyRows = COLORS => ({
  row: {
    border_width: SPACINGS.spacing_0,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border_bottom_color: COLORS.SECONDARY.color_secondary_border_50,
    border_bottom_width: BORDERS.border_50,
    border_bottom_style: 'solid',
    lastRow: {
      border_bottom_width: BORDERS.border_00,
      border_bottom_left_radius: RADIUS.radius_300,
      border_bottom_right_radius: RADIUS.radius_300,
    },
  },
  rowPaddingWhenDividerShown: SPACINGS.spacing_400,
  column: {
    display: 'flex',
    flex: '1',
    align_items: 'center',
    word_break: 'break-word',
    gap: SPACINGS.spacing_150,
    border_right_width: BORDERS.border_50,
    border_right_color: COLORS.NEUTRAL.color_neutral_border_50,
    border_right_style: 'solid',
    padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
    lastColumn: {
      border_right: BORDERS.border_00,
    },
  },
  accordionIconContainer: {
    min_width: SPACINGS.spacing_400,
    min_height: SPACINGS.spacing_400,
    cursor: 'pointer',
  },
  typography: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_300,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].font_size,
    },
    [DeviceBreakpointsType.TABLET]: {
      font_size: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].font_size,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].font_size,
    },
  },
  accordionIcon: {
    height: SIZES.size_200,
    width: SIZES.size_200,
    color: COLORS.NEUTRAL.color_neutral_icon_50,
  },
  expanded: {
    flex: '0 0 100%',
  },
});

const commonPropsList = COLORS => ({
  listContainer: {
    display: 'flex',
    flex_direction: 'column',
    justify_content: 'left',
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  },
  listContainerSydeBySyde: {
    display: 'flex',
    flex_direction: 'row',
    justify_content: 'space-between',
    flex_wrap: 'wrap',
  },
  listRowContainer: {
    display: 'flex',
    flex_direction: 'column',
    justify_content: 'left',
  },
  listRowContainerBorder: true,
  listRow: {
    display: 'flex',
    flex_direction: 'column',
    justify_content: 'left',
    padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
    gap: SPACINGS.spacing_150,
  },
  listRowSideBySide: {
    display: 'flex',
    flex_direction: 'row',
    justify_content: 'space-between',
    flex_wrap: 'wrap',
  },
});

export const getTableStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableStylesType<TableVariantType, TableHeaderVariantType, TableRowVariantType> => {
  return {
    [TableVariantType.DEFAULT]: {
      table: commonTableProps(COLORS),
      header: {
        [TableHeaderVariantType.DEFAULT]: {
          ...commonPropsHeader(COLORS),
        },
      },
      bodyContainer: commonPropsBodyContainer(COLORS),
      bodyRows: {
        [TableRowVariantType.DEFAULT]: {
          ...commonPropsBodyRows(COLORS),
        },
      },
      ...commonPropsList(COLORS),
      divider: {
        lineSeparatorLabelVariant: LineSeparatorLabelVariantType.LABEL_TABLE,
        lineSeparatorLineVariant: LineSeparatorLineVariantType.LINE_DEFAULT,
        dividerVariant: DividerVariantType.DEFAULT,
      },
    },
    [TableVariantType.DEFAULT_WITH_FOOTER]: {
      table: commonTableProps(COLORS),
      header: {
        [TableHeaderVariantType.DEFAULT]: {
          ...commonPropsHeader(COLORS),
        },
      },
      bodyContainer: commonPropsBodyContainer(COLORS),
      bodyRows: {
        [TableRowVariantType.DEFAULT]: {
          ...commonPropsBodyRows(COLORS),
          row: {
            ...commonPropsBodyRows(COLORS).row,
            lastRow: {
              border_bottom_width: BORDERS.border_00,
            },
          },
        },
      },
      ...commonPropsList(COLORS),
      footerVariant: FooterVariants.DEFAULT,
      divider: {
        lineSeparatorLabelVariant: LineSeparatorLabelVariantType.LABEL_TABLE,
        lineSeparatorLineVariant: LineSeparatorLineVariantType.LINE_DEFAULT,
        dividerVariant: DividerVariantType.DEFAULT,
      },
    },
  };
};
