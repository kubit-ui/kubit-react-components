import { CustomTokenTypes } from '@/types';

import { TableRowPropsStylesType } from './tableRowTheme';

export interface ITableRowStandAlone {
  styles?: TableRowPropsStylesType;
  id?: string;
  active?: boolean;
  hoverable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
  onClick?: React.MouseEventHandler<HTMLTableRowElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLTableRowElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLTableRowElement>;
}

export interface ITableRow
  extends Omit<ITableRowStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TableRowPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
