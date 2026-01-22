import type { TableCaptionVariantStyles } from '@kubit-ui-web/react-components';

import { TableCaptionVariantType } from './variants';

type TableCaptionVariant = keyof typeof TableCaptionVariantType;

export const TABLE_CAPTION: TableCaptionVariantStyles<TableCaptionVariant> = {
  $attributes: {
    'data-truncate': {
      true: {
        border: '0',
        clip_path: 'rect(0, 0, 0, 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        width: '1px',
      },
    },
  },
  display: 'table-caption',
  [TableCaptionVariantType.DEFAULT]: {},
};
// position: absolute;
// width: 1px;
// height: 1px;
// padding: 0;
// margin: -1px;
// overflow: hidden;
// clip: rect(0, 0, 0, 0);
// border: 0;
