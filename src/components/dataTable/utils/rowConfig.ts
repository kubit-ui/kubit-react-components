import { DataTableColumnType, DataTableTableRowConfigType } from '../types';

type ApplyGridToRowParamsType = {
  rowConfig?: DataTableTableRowConfigType;
  columns?: DataTableColumnType[];
};

export const applyGridToRow = ({
  rowConfig,
  columns,
}: ApplyGridToRowParamsType): DataTableTableRowConfigType => {
  const gridTemplateColumns = columns?.map(column => column.width ?? '1fr').join(' ');
  const res = {
    ...rowConfig,
    ctv: {
      ...rowConfig?.ctv,
      container: {
        ...rowConfig?.ctv?.container,
        display: rowConfig?.ctv?.container?.display ?? 'grid',
        grid_template_columns:
          rowConfig?.ctv?.container?.grid_template_columns ?? gridTemplateColumns,
      },
    },
  };
  return res;
};
