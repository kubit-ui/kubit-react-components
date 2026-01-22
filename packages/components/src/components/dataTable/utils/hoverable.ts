import type { DataTableRowProps } from '../types/dataTable';

interface RowHoverableParams {
  row: DataTableRowProps;
  hoverableRows?: string[];
  nonHoverableRows?: string[];
  hoverable?: boolean;
}

export const isRowHoverable = ({
  hoverable,
  hoverableRows,
  nonHoverableRows,
  row,
}: RowHoverableParams): boolean | undefined => {
  let rowHoverable;
  if (hoverableRows) {
    rowHoverable = Boolean(row.id && hoverableRows.includes(row.id));
  } else if (nonHoverableRows) {
    rowHoverable = !(row.id && nonHoverableRows.includes(row.id));
  } else if (hoverable !== undefined) {
    rowHoverable = hoverable;
  }
  return rowHoverable;
};
