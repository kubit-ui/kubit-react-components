import { TableHeadStylesType } from '@/components/tableHead/types/tableHeadTheme';
import { Z_INDEX } from '@/designSystem/kubitWireframe/commons/foundations/zIndex';

import { TableHeadVariantType } from './variants';

export const getTableHeadStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableHeadStylesType<TableHeadVariantType> => {
  return {
    [TableHeadVariantType.DEFAULT]: {
      container: {
        display: 'table-header-group',
        transition: 'box-shadow 200ms',
        z_index: Z_INDEX.INTERN_1,
        background_color: COLORS.SECONDARY.color_secondary_bg_150,
      },
    },
  };
};
