import React from 'react';

import { TableCell } from '@/components/tableCell';
import { TableRow } from '@/components/tableRow';

import {
  DataTableCellValueType,
  DataTableColumnType,
  DataTableRowType,
  DataTableTableRowConfigType,
} from '../types';
import { applyGridToRow, isRowHoverable } from '../utils';

interface IDataTableRows {
  columns?: DataTableColumnType[];
  rows?: DataTableRowType[];
  activeRows?: string[];
  hoverable?: boolean;
  hoverableRows?: string[];
  nonHoverableRows?: string[];
  tableBodyRowVariant?: string;
  tableBodyCellVariant?: string;
  usingRowGroups?: boolean;
}

export const DataTableRows = ({
  rows,
  columns,
  activeRows,
  hoverable,
  hoverableRows,
  nonHoverableRows,
  tableBodyRowVariant,
  tableBodyCellVariant,
  usingRowGroups,
}: IDataTableRows): JSX.Element => {
  return (
    <>
      {rows?.map((row, index) => {
        const rowConfig: DataTableTableRowConfigType | undefined = usingRowGroups
          ? applyGridToRow({
              rowConfig: row?.config as DataTableTableRowConfigType | undefined,
              columns,
            })
          : (row?.config as DataTableTableRowConfigType | undefined);
        return (
          <TableRow
            key={row.id ?? index}
            active={Boolean(row.id && activeRows?.includes(row.id))}
            hoverable={isRowHoverable({ row, hoverable, hoverableRows, nonHoverableRows })}
            variant={tableBodyRowVariant}
            {...rowConfig}
          >
            {columns?.map(column => {
              const value = column.valueGetter
                ? column.valueGetter(row[column.field] as DataTableCellValueType, row)
                : row[column.field];
              if (value && typeof value === 'object' && 'complex' in value) {
                return (
                  <TableCell
                    // Do not apply width and minWidth when using row groups
                    // They will be applied in the display grid of the row
                    key={column.field}
                    maxWidth={usingRowGroups ? undefined : column.maxWidth}
                    minWidth={usingRowGroups ? undefined : column.minWidth}
                    sticky={column.sticky}
                    textAlign={column.valueTextAlign ?? column.textAlign}
                    variant={tableBodyCellVariant}
                    width={usingRowGroups ? undefined : column.width}
                    {...value.complex}
                  >
                    {value.complex?.content}
                  </TableCell>
                );
              }
              return (
                <TableCell
                  // Do not apply width and minWidth when using row groups
                  // They will be applied in the display grid of the row
                  key={column.field}
                  maxWidth={usingRowGroups ? undefined : column.maxWidth}
                  minWidth={usingRowGroups ? undefined : column.minWidth}
                  sticky={column.sticky}
                  textAlign={column.valueTextAlign ?? column.textAlign}
                  variant={tableBodyCellVariant}
                  width={usingRowGroups ? undefined : column.width}
                >
                  {value as React.ReactNode}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </>
  );
};
