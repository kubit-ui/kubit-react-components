import { TableCellStylesType } from '@/components';

import { TableCaptionVariantType } from './variants';

export const TABLE_CAPTION_STYLES: TableCellStylesType<TableCaptionVariantType> = {
  [TableCaptionVariantType.DEFAULT]: {
    container: {
      display: 'table-caption',
    },
  },
};
