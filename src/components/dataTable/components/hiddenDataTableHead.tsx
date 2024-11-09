import React from 'react';

import { TableCell } from '@/components/tableCell/tableCell';
import { TableHead } from '@/components/tableHead/tableHead';
import { TableRow } from '@/components/tableRow/tableRow';

import { DataTableColumnType } from '../types/dataTable';

interface IHiddenDataTableHead {
  columns?: DataTableColumnType[];
  tableHeadVariant?: string;
  tableHeadRowVariant?: string;
  tableHeadCellVariant?: string;
}

export const HiddenDataTableHead = ({
  columns,
  tableHeadVariant,
  tableHeadRowVariant,
  tableHeadCellVariant,
}: IHiddenDataTableHead): JSX.Element => {
  return (
    <TableHead hidden variant={tableHeadVariant}>
      <TableRow variant={tableHeadRowVariant}>
        {columns?.map(column => {
          let value: React.ReactNode = column.headerHiddenContent;
          if (!value) {
            const headerContent = column.headerContent;
            if (headerContent && typeof headerContent === 'object' && 'complex' in headerContent) {
              value = headerContent.complex?.content;
            } else {
              value = headerContent as React.ReactNode;
            }
          }
          return (
            <TableCell key={column.field} th scope="col" variant={tableHeadCellVariant}>
              {value}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
