import { TableCell } from '@/components/tableCell/tableCell';
import { TableHead } from '@/components/tableHead/tableHead';
import { TableRow } from '@/components/tableRow/tableRow';

import type {
  DataTableColumnProps,
  DataTableCssClasses,
  DataTableTableHeadConfigProps,
  DataTableTableRowConfigProps,
} from '../types/dataTable';

import { applyFlexToCell } from '../utils/cellConfig';
import { applyGridToRow } from '../utils/rowConfig';

interface DataTableHeadProps {
  hidden?: boolean;
  sticky?: boolean;
  columns?: DataTableColumnProps[];
  tableHeadConfig?: DataTableTableHeadConfigProps;
  tableHeadRowConfig?: DataTableTableRowConfigProps;
  cssClasses?: DataTableCssClasses;
  usingRowGroups?: boolean;
}

export const DataTableHead = ({
  columns,
  cssClasses,
  hidden,
  sticky,
  tableHeadConfig,
  tableHeadRowConfig,
  usingRowGroups,
}: DataTableHeadProps): JSX.Element => {
  // When row groups, the row display should be grid
  const rowConfig = usingRowGroups
    ? applyGridToRow({ columns, rowConfig: tableHeadRowConfig })
    : tableHeadRowConfig;

  return (
    <TableHead
      additionalClasses={cssClasses?.table_head}
      component={usingRowGroups ? 'div' : undefined}
      hidden={hidden}
      sticky={sticky}
      {...tableHeadConfig}
    >
      <TableRow
        additionalClasses={cssClasses?.table_head_row}
        component={usingRowGroups ? 'div' : undefined}
        hoverable={false}
        {...rowConfig}
      >
        {columns?.map((column) => {
          const value = column.headerContent;
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
                th
                additionalClasses={cssClasses?.table_head_cell}
                alignItems={rowConfig?.cellsAlignItems}
                component={usingRowGroups ? 'div' : undefined}
                hidden={column.hidden}
                justifyContent={column.justifyContent}
                maxWidth={usingRowGroups ? undefined : column.maxWidth}
                minWidth={usingRowGroups ? undefined : column.minWidth}
                scope="col"
                sticky={column.sticky}
                textAlign={column.textAlign}
                verticalAlign={rowConfig?.cellsVerticalAlign}
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
              th
              additionalClasses={cssClasses?.table_head_cell}
              alignItems={rowConfig?.cellsAlignItems}
              component={usingRowGroups ? 'div' : undefined}
              hidden={column.hidden}
              justifyContent={column.justifyContent}
              maxWidth={usingRowGroups ? undefined : column.maxWidth}
              minWidth={usingRowGroups ? undefined : column.minWidth}
              scope="col"
              sticky={column.sticky}
              textAlign={column.textAlign}
              verticalAlign={rowConfig?.cellsVerticalAlign}
              width={usingRowGroups ? undefined : column.width}
              {...cellConfig}
            >
              {value as React.ReactNode}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
