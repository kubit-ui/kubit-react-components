import type {
  DataTableColumnProps,
  DataTableTableRowConfigProps,
} from '../types/dataTable';

interface ApplyGridToRowParamsType {
  rowConfig?: DataTableTableRowConfigProps;
  columns?: DataTableColumnProps[];
}

/**
 * Apply display grid and grid_template_columns to the rowConfig if not defined in the ctv
 * @param param0
 * @returns
 */
export const applyGridToRow = ({
  rowConfig,
}: ApplyGridToRowParamsType): DataTableTableRowConfigProps => {
  const res = {
    ...rowConfig,
  };
  return res;
};
