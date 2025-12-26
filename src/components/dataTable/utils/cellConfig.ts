import type { DataTableCellProps } from '../types/dataTable';

interface ApplyFlexToCellParamsType {
  cellConfig?: DataTableCellProps;
}

/**
 * Apply display flex to the cellConfig if not defined in the ctv
 * @param param0
 * @returns
 */
export const applyFlexToCell = ({
  cellConfig,
}: ApplyFlexToCellParamsType): DataTableCellProps => {
  const res = {
    ...cellConfig,
  };
  return res;
};
