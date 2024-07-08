import { TableCellStylesType } from '@/components';

import { BORDERS, SPACINGS } from '../../foundations';
import { TableCaptionVariantType } from './variants';

export const getTableCaptionStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableCellStylesType<TableCaptionVariantType> => {
  return {
    [TableCaptionVariantType.DEFAULT]: {
      container: {
        display: 'table-caption',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        border_width: BORDERS.border_50,
        border_color: COLORS.NEUTRAL.color_neutral_border_50,
        border_style: 'solid',
      },
    },
  };
};
