import * as React from 'react';

import { TableCell } from '@/components/tableCell';
import { TableHead } from '@/components/tableHead';
import { TableRow } from '@/components/tableRow';

import {
  DataTableColumnType,
  DataTableTableHeadConfigType,
  DataTableTableRowConfigType,
} from '../types';
import { applyGridToRow } from '../utils';

interface IDataTableHead {
  hidden?: boolean;
  sticky?: boolean;
  columns?: DataTableColumnType[];
  tableHeadConfig?: DataTableTableHeadConfigType;
  tableHeadRowConfig?: DataTableTableRowConfigType;
  tableHeadVariant?: string;
  tableHeadRowVariant?: string;
  tableHeadCellVariant?: string;
  usingRowGroups?: boolean;
}

export const DataTableHead = ({
  hidden,
  columns,
  sticky,
  tableHeadConfig,
  tableHeadRowConfig,
  tableHeadVariant,
  tableHeadRowVariant,
  tableHeadCellVariant,
  usingRowGroups,
}: IDataTableHead): JSX.Element => {
  const rowConfig = usingRowGroups
    ? applyGridToRow({ rowConfig: tableHeadRowConfig, columns })
    : tableHeadRowConfig;
  return (
    <TableHead
      component={usingRowGroups ? 'div' : undefined}
      hidden={hidden}
      sticky={sticky}
      variant={tableHeadVariant}
      {...tableHeadConfig}
    >
      <TableRow
        component={usingRowGroups ? 'div' : undefined}
        hoverable={false}
        variant={tableHeadRowVariant}
        {...rowConfig}
      >
        {columns?.map(column => {
          const value = column.headerContent;
          if (value && typeof value === 'object' && 'complex' in value) {
            return (
              <TableCell
                // Do not apply width and minWidth when using row groups
                // They will be applied in the display grid of the row
                key={column.field}
                th
                component={usingRowGroups ? 'div' : undefined}
                hidden={column.hidden}
                maxWidth={usingRowGroups ? undefined : column.maxWidth}
                minWidth={usingRowGroups ? undefined : column.minWidth}
                scope="col"
                sticky={column.sticky}
                textAlign={column.textAlign}
                variant={tableHeadCellVariant}
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
              th
              component={usingRowGroups ? 'div' : undefined}
              hidden={column.hidden}
              maxWidth={usingRowGroups ? undefined : column.maxWidth}
              minWidth={usingRowGroups ? undefined : column.minWidth}
              scope="col"
              sticky={column.sticky}
              textAlign={column.textAlign}
              variant={tableHeadCellVariant}
              width={usingRowGroups ? undefined : column.width}
            >
              {value as React.ReactNode}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
