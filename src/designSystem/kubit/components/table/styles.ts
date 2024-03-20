import { TableStylesType } from '@/components/table/types';
import { DeviceBreakpointsType } from '@/types';

import {
  BORDERS,
  COLORS,
  FONT_WEIGHT,
  PARAGRAPH,
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

const commonPropsHeader = {
  container: {
    display: 'flex',
    width: '100%',
    flex_direction: 'column',
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
    padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
  },
  typography: {
    font_weight: FONT_WEIGHT.font_weight_600,
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    text_align: TEXT_ALIGN.left,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
};

const commonPropsBodyContainer = {
  display: 'flex',
  width: '100%',
  flex_direction: 'column',
};

const commonPropsBody = {
  row: {
    border_width: SPACINGS.spacing_0,
    border_bottom_width: '0.031rem',
  },
  rowPaddingWhenDividerShown: SPACINGS.spacing_400,
  column: {
    display: 'flex',
    flex: '1',
    word_break: 'break-word',
    gap: SPACINGS.spacing_150,
    align_items: 'center',
    padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
  },
  accordionIconContainer: {
    min_width: SPACINGS.spacing_400,
    min_height: SPACINGS.spacing_400,
    cursor: 'pointer',
  },
  expanded: {
    flex: '0 0 100%',
  },
};

export const TABLE_STYLES: TableStylesType<
  TableVariantType,
  TableHeaderVariantType,
  TableRowVariantType
> = {
  [TableVariantType.DEFAULT]: {
    table: {
      display: 'flex',
      flex_direction: 'column',
      width: '100%',
    },
    header: {
      [TableHeaderVariantType.PRIMARY]: {
        ...commonPropsHeader,
        container: {
          ...commonPropsHeader.container,
          background_color: COLORS.SECONDARY.color_secondary_bg_150,
        },
      },
      [TableHeaderVariantType.SECONDARY]: {
        ...commonPropsHeader,
        container: {
          ...commonPropsHeader.container,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border_bottom_width: BORDERS.border_100,
          border_bottom_color: COLORS.SECONDARY.color_secondary_border_50,
          border_bottom_style: 'solid',
        },
      },
      [TableHeaderVariantType.CUSTOMIZABLE_HEADER]: {
        ...commonPropsHeader,
        container: {
          ...commonPropsHeader.container,
          padding_bottom: SPACINGS.spacing_0,
          padding_top: SPACINGS.spacing_0,
        },
        column: {
          ...commonPropsHeader.column,
          padding_bottom: SPACINGS.spacing_50,
          padding_top: SPACINGS.spacing_50,
        },
      },
    },
    bodyContainer: commonPropsBodyContainer,
    bodyRows: {
      [TableRowVariantType.DEFAULT]: {
        ...commonPropsBody,
        row: {
          ...commonPropsBody.row,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border_bottom_color: COLORS.SECONDARY.color_secondary_border_50,
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
      },
      [TableRowVariantType.CUSTOMIZABLE_ROW]: {
        ...commonPropsBody,
        row: {
          ...commonPropsBody.row,
          background_color: COLORS.NEUTRAL.color_neutral_bg_250,
          border_bottom_color: COLORS.SECONDARY.color_secondary_border_50,
        },
        typography: {
          font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
          font_weight: FONT_WEIGHT.font_weight_300,
          color: COLORS.NEUTRAL.color_neutral_font_50,
          font_size: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].font_size,
        },
        accordionIcon: {
          height: SIZES.size_200,
          width: SIZES.size_200,
          color: COLORS.NEUTRAL.color_neutral_icon_50,
        },
      },
    },
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
    divider: {
      lineSeparatorLabelVariant: LineSeparatorLabelVariantType.LABEL_DEFAULT,
      lineSeparatorLineVariant: LineSeparatorLineVariantType.LINE_DEFAULT,
      dividerVariant: DividerVariantType.DEFAULT,
    },
    footerVariant: FooterVariants.DEFAULT_ALTERNATIVE,
  },
};
