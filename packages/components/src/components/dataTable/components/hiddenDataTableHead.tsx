import type { ReactNode } from 'react';

import { TableCell } from '@/components/tableCell/tableCell';
import { TableHead } from '@/components/tableHead/tableHead';
import { TableRow } from '@/components/tableRow/tableRow';

import type {
  DataTableColumnProps,
  DataTableCssClasses,
} from '../types/dataTable';

interface HiddenDataTableHeadProps {
  columns?: DataTableColumnProps[];
  cssClasses?: DataTableCssClasses;
}

export const HiddenDataTableHead = ({
  columns,
  cssClasses,
}: HiddenDataTableHeadProps): JSX.Element => {
  return (
    <TableHead
      hidden
      additionalClasses={cssClasses?.row_group_table_head}
    >
      <TableRow additionalClasses={cssClasses?.row_group_table_head_row}>
        {columns?.map((column) => {
          let value: ReactNode = column.headerHiddenContent;
          if (!value) {
            const headerContent = column.headerContent;
            if (
              headerContent &&
              typeof headerContent === 'object' &&
              'complex' in headerContent
            ) {
              value = headerContent.complex?.content;
            } else {
              value = headerContent as ReactNode;
            }
          }
          return (
            <TableCell
              key={column.field}
              th
              additionalClasses={cssClasses?.row_group_table_head_cell}
              scope="col"
            >
              {value}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
