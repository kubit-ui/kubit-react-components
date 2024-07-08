import { TableRowStylesType } from '@/components';

import { COLORS } from '../../foundations';
import { TableRowVariantTypeV2 } from './variants';

export const TABLE_ROW_STYLES: TableRowStylesType<TableRowVariantTypeV2> = {
  [TableRowVariantTypeV2.HEADER_ROW_DEFAULT]: {
    container: {
      display: 'table-row',
    },
  },
  [TableRowVariantTypeV2.HEADER_ROW_SECONDARY]: {
    container: {
      display: 'table-row',
      border_bottom: `2px solid ${COLORS.SECONDARY.color_secondary_border_50}`,
    },
  },
  [TableRowVariantTypeV2.BODY_ROW_DEFAULT]: {
    container: {
      display: 'table-row',
      border_bottom: `1px solid ${COLORS.SECONDARY.color_secondary_border_50}`,
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
