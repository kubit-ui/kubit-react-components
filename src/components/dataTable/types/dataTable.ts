import React from 'react';

import { ITableBody } from '@/components/tableBody';
import { ITableCaption } from '@/components/tableCaption';
import { ITableCell } from '@/components/tableCell';
import { ITableDivider } from '@/components/tableDivider';
import { ITableHead } from '@/components/tableHead';
import { ITableRow } from '@/components/tableRow';
import { ITableV2 } from '@/components/tableV2';
import { CustomTokenTypes } from '@/types';

import { DataTablePropsStylesType } from './dataTableTheme';

export type DataTableTableConfigType = ITableV2;

export type DataTableTableHeadConfigType = ITableHead;

export type DataTableTableBodyConfigType = ITableBody;

export type DataTableTableRowConfigType = ITableRow;

export type DataTableCellType = ITableCell & {
  content?: React.ReactNode;
};

export type DataTableTableCaptionType = ITableCaption & {
  content?: React.ReactNode;
};

export type DataTableRowDividerType = ITableDivider & {
  content?: React.ReactNode;
};

export type DataTableConfigType = {
  table?: DataTableTableConfigType;
  tableHead?: DataTableTableHeadConfigType;
  tableHeadRow?: DataTableTableRowConfigType;
  tableBody?: DataTableTableBodyConfigType;
};

export type DataTableCellValueType = React.ReactNode | { complex?: DataTableCellType };

export type DataTableColumnType = {
  field: string;
  headerContent?: DataTableCellValueType;
  // Use this hidden content for the hidden table head when headerContent has focusable elements
  headerHiddenContent?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  hidden?: boolean;
  /**
   * @remarks Avoid using boolean values for `sticky`. Prefer specifying 'left' or 'right' to define the sticky side.
   */
  sticky?: boolean | 'left' | 'right';
  textAlign?: string;
  valueTextAlign?: string;
  valueGetter?: (value: DataTableCellValueType, row: DataTableRowType) => DataTableCellValueType;
};

export type DataTableRowType = {
  // IMPORTANT! id and config are reserved words
  // id represent the row id
  // Config is used to pass the row configuration
  id?: string;
  config?: DataTableTableRowConfigType;
  [key: string]: DataTableCellValueType | DataTableTableRowConfigType;
};

export type DataTableRowGroupType = {
  divider?: DataTableRowDividerType;
  caption?: DataTableTableCaptionType;
  config?: {
    table?: DataTableTableConfigType;
    tableBody?: DataTableTableBodyConfigType;
  };
  rows: DataTableRowType[];
};

type DataTableScrollAriasType = {
  ['aria-label']?: string;
  ['aria-labelledby']?: string;
};

export interface IDataTableStandAlone extends DataTableScrollAriasType {
  styles?: DataTablePropsStylesType;
  hasScroll?: boolean;
  columns?: DataTableColumnType[];
  rows?: DataTableRowType[];
  rowGroups?: DataTableRowGroupType[];
  activeRows?: string[];
  hoverable?: boolean;
  hoverableRows?: string[];
  nonHoverableRows?: string[];
  stickyHead?: boolean;
  caption?: DataTableTableCaptionType;
  config?: DataTableConfigType;
  dataTestId?: string;
}

export interface IDataTable
  extends Omit<IDataTableStandAlone, 'styles' | 'hasScroll'>,
    Omit<CustomTokenTypes<DataTablePropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
