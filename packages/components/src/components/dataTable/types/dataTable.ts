import type { AriaAttributes, ReactNode } from 'react';

import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { TableProps } from '../../table/types/table';
import type { TableBodyProps } from '../../tableBody/types/tableBody';
import type { TableCaptionProps } from '../../tableCaption/types/tableCaption';
import type { TableCellProps } from '../../tableCell/types/tableCell';
import type { TableDividerProps } from '../../tableDivider/types/tableDivider';
import type { TableHeadProps } from '../../tableHead/types/tableHead';
import type { TableRowProps } from '../../tableRow/types/tableRow';
import type { DataTableStyleProps } from './dataTableTheme';

export type DataTableCssClasses = ComponentSelected<
  ComponentsTypesComponents['DATA_TABLE']
>;

export type DataTableTableConfigProps = TableProps;

export type DataTableTableHeadConfigProps = TableHeadProps;

export type DataTableTableBodyConfigProps = TableBodyProps;

export type DataTableTableRowConfigProps = TableRowProps & {
  cellsVerticalAlign?: string;
  cellsAlignItems?: string;
};

export type DataTableCellProps = TableCellProps & {
  content?: ReactNode;
};

export type DataTableTableCaptionProps = TableCaptionProps & {
  content?: ReactNode;
};

export type DataTableRowDividerProps = TableDividerProps & {
  content?: ReactNode;
};

export interface DataTableConfigProps {
  table?: DataTableTableConfigProps;
  tableHead?: DataTableTableHeadConfigProps;
  tableHeadRow?: DataTableTableRowConfigProps;
  tableBody?: DataTableTableBodyConfigProps;
}

export type DataTableCellValueProps =
  | ReactNode
  | { complex?: DataTableCellProps };

export interface DataTableColumnProps {
  field: string;
  headerContent?: DataTableCellValueProps;
  headerHiddenContent?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  hidden?: boolean;
  sticky?: boolean | 'left' | 'right';
  textAlign?: string;
  valueTextAlign?: string;
  justifyContent?: string;
  valueJustifyContent?: string;
  valueGetter?: (
    value: DataTableCellValueProps,
    row: DataTableRowProps,
  ) => DataTableCellValueProps;
}

export interface DataTableRowProps {
  id?: string;
  config?: DataTableTableRowConfigProps;
  [key: string]: DataTableCellValueProps | DataTableTableRowConfigProps;
}

export interface DataTableRowGroupProps extends DataAttributes {
  divider?: DataTableRowDividerProps;
  caption?: DataTableTableCaptionProps;
  config?: {
    table?: DataTableTableConfigProps;
    tableBody?: DataTableTableBodyConfigProps;
  };
  rows: DataTableRowProps[];
}

/**
 * Interface for the standalone DataTable component.
 * Includes ARIA attributes, styles, columns, rows, and configuration options.
 */
export interface DataTableStandAloneProps
  extends
    Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'>,
    DataAttributes {
  styles?: DataTableStyleProps;
  hasScroll?: boolean;
  columns?: DataTableColumnProps[];
  rows?: DataTableRowProps[];
  rowGroups?: DataTableRowGroupProps[];
  activeRows?: string[];
  hoverable?: boolean;
  hoverableRows?: string[];
  nonHoverableRows?: string[];
  stickyHead?: boolean;
  caption?: DataTableTableCaptionProps;
  config?: DataTableConfigProps;
  cssClasses?: DataTableCssClasses;
}

/**
 * Interface for the DataTable component with a variant.
 * Extends the DataTableStandAloneProps interface and adds variant and additional CSS classes.
 */
export interface DataTableProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<DataTableStandAloneProps, 'styles' | 'hasScroll'> {
  variant?: Variant;
  additionalClasses?: Partial<DataTableCssClasses>;
}
