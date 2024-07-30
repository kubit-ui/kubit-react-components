import { CustomTokenTypes } from '@/types';

import { TableCellPropsStylesType } from './tableCellTheme';

type TableCellAriasType = {
  ['aria-label']?: string;
  ['aria-labelledby']?: string;
};

export interface ITableCellStandAlone extends TableCellAriasType {
  styles?: TableCellPropsStylesType;
  id?: string;
  scope?: string;
  th?: boolean;
  colSpan?: number;
  rowSpan?: number;
  height?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  textAlign?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  /**
   * @remarks Avoid using boolean values for `sticky`. Prefer specifying 'left' or 'right' to define the sticky side.
   */
  sticky?: boolean | 'left' | 'right';
  hidden?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
  onClick?: React.MouseEventHandler<HTMLTableCellElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLTableCellElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLTableCellElement>;
}

export interface ITableCell
  extends Omit<ITableCellStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TableCellPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
