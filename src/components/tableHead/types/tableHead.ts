import { CustomTokenTypes } from '@/types';

import { TableHeadPropsStylesType } from './tableHeadTheme';

export interface ITableHeadStandAlone {
  styles?: TableHeadPropsStylesType;
  id?: string;
  sticky?: boolean;
  hidden?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
}

export interface ITableHead
  extends Omit<ITableHeadStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TableHeadPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
