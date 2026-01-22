import type { ReactNode } from 'react';

import { TableCell } from '@/components/tableCell/tableCell';
import { TableRow } from '@/components/tableRow/tableRow';

import type {
  DataTableCellValueProps,
  DataTableColumnProps,
  DataTableCssClasses,
  DataTableRowProps,
  DataTableTableRowConfigProps,
} from '../types/dataTable';

import { applyFlexToCell } from '../utils/cellConfig';
import { isRowHoverable } from '../utils/hoverable';
import { applyGridToRow } from '../utils/rowConfig';

interface DataTableRowsProps {
  columns?: DataTableColumnProps[];
  rows?: DataTableRowProps[];
  activeRows?: string[];
  hoverable?: boolean;
  hoverableRows?: string[];
  nonHoverableRows?: string[];
  usingRowGroups?: boolean;
  cssClasses?: DataTableCssClasses;
  isRowGroup?: boolean;
}

export const DataTableRows = ({
  activeRows,
  columns,
  cssClasses,
  hoverable,
  hoverableRows,
  isRowGroup = false,
  nonHoverableRows,
  rows,
  usingRowGroups,
}: DataTableRowsProps): JSX.Element => {
  const tableBodyRowClass = isRowGroup
    ? { table_row: cssClasses?.row_group_table_body.table_body }
    : cssClasses?.table_body_row;
  const tableBodyCellClass = isRowGroup
    ? cssClasses?.row_group_table_body_cell
    : cssClasses?.table_body_cell;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {rows?.map((row, index) => {
        // When row groups, the row display should be grid
        const rowConfig: DataTableTableRowConfigProps | undefined =
          usingRowGroups
            ? applyGridToRow({
                columns,
                rowConfig: row?.config as
                  | DataTableTableRowConfigProps
                  | undefined,
              })
            : (row?.config as DataTableTableRowConfigProps | undefined);

        return (
          <TableRow
            key={row.id ?? index}
            active={Boolean(row.id && activeRows?.includes(row.id))}
            additionalClasses={tableBodyRowClass}
            hoverable={isRowHoverable({
              hoverable,
              hoverableRows,
              nonHoverableRows,
              row,
            })}
            {...rowConfig}
          >
            {columns?.map((column) => {
              const value = column.valueGetter
                ? column.valueGetter(
                    row[column.field] as DataTableCellValueProps,
                    row,
                  )
                : row[column.field];
              if (value && typeof value === 'object' && 'complex' in value) {
                // When row groups, the cell display should be flex
                const cellConfig = usingRowGroups
                  ? applyFlexToCell({ cellConfig: value.complex })
                  : value.complex;

                return (
                  <TableCell
                    // Do not apply width and minWidth when using row groups
                    // They will be applied in the display grid of the row
                    key={column.field}
                    additionalClasses={tableBodyCellClass}
                    alignItems={row.config?.cellsAlignItems}
                    justifyContent={
                      column.valueJustifyContent ?? column.justifyContent
                    }
                    maxWidth={usingRowGroups ? undefined : column.maxWidth}
                    minWidth={usingRowGroups ? undefined : column.minWidth}
                    role="row"
                    sticky={column.sticky}
                    textAlign={column.valueTextAlign ?? column.textAlign}
                    verticalAlign={row.config?.cellsVerticalAlign}
                    width={usingRowGroups ? undefined : column.width}
                    {...cellConfig}
                  >
                    {cellConfig?.content}
                  </TableCell>
                );
              }

              // When row groups, the cell display should be flex
              const cellConfig = usingRowGroups
                ? applyFlexToCell({ cellConfig: undefined })
                : undefined;

              return (
                <TableCell
                  // Do not apply width and minWidth when using row groups
                  // They will be applied in the display grid of the row
                  key={column.field}
                  additionalClasses={tableBodyCellClass}
                  alignItems={row.config?.cellsAlignItems}
                  justifyContent={
                    column.valueJustifyContent ?? column.justifyContent
                  }
                  maxWidth={usingRowGroups ? undefined : column.maxWidth}
                  minWidth={usingRowGroups ? undefined : column.minWidth}
                  role="row"
                  sticky={column.sticky}
                  textAlign={column.valueTextAlign ?? column.textAlign}
                  verticalAlign={row.config?.cellsVerticalAlign}
                  width={usingRowGroups ? undefined : column.width}
                  {...cellConfig}
                >
                  {value as ReactNode}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </>
  );
};
