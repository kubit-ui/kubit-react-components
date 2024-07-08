import { TableRowStylesType } from '@/components';

import { TableRowVariantTypeV2 } from './variants';

export const getTableRowStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableRowStylesType<TableRowVariantTypeV2> => {
  return {
    [TableRowVariantTypeV2.HEADER_ROW_DEFAULT]: {
      container: {
        display: 'table-row',
      },
    },
    [TableRowVariantTypeV2.BODY_ROW_DEFAULT]: {
      container: {
        display: 'table-row',
      },
      hoveredCellContainer: {
        // TODO When specified - update tokens
        color: 'black',
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        cursor: 'pointer',
      },
      activeCellContainer: {
        // TODO When specified - update tokens
        color: 'white',
        background_color: COLORS.SECONDARY.color_secondary_bg_100,
      },
    },
  };
};
