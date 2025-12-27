import type { TableHeadVariantStyles } from '@/components/tableHead/types/tableHeadTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TableHeadVariantType } from './variants';

type TableHeadVariants = keyof typeof TableHeadVariantType;

export const TABLE_HEAD: TableHeadVariantStyles<TableHeadVariants> = {
  $attributes: {
    'data-hidden': {
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
    'data-sticky': {
      true: {
        position: 'sticky',
        top: cssVars.spacings_spacing_0,
      },
    },
  },
  display: 'table-header-group',
  [TableHeadVariantType.DEFAULT]: {},
  transition: 'box-shadow 200ms',
  z_index: cssVars.z_index_intern_1,
};
