import { DataTableRowType } from '../types';

type IsRowHoverableParamsType = {
  row: DataTableRowType;
  hoverableRows?: string[];
  nonHoverableRows?: string[];
  hoverable?: boolean;
};

export const isRowHoverable = ({
  row,
  hoverableRows,
  nonHoverableRows,
  hoverable,
}: IsRowHoverableParamsType): boolean | undefined => {
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
