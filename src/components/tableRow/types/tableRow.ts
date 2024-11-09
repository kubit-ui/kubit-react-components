import { CustomTokenTypes } from '@/types/customToken/customToken';

import { TableRowPropsStylesType } from './tableRowTheme';

export interface ITableRowStandAlone {
  styles?: TableRowPropsStylesType;
  id?: string;
  active?: boolean;
  hoverable?: boolean;
  role?: string;
  tabIndex?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
  onClick?: React.MouseEventHandler<HTMLTableRowElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTableRowElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLTableRowElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLTableRowElement>;
}

export interface ITableRow
  extends Omit<ITableRowStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TableRowPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
