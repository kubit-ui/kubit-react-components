import { CustomTokenTypes } from '@/types';

import { TableDividerPropsStylesType } from './tableDividerTheme';

export interface ITableDividerStandAlone {
  styles?: TableDividerPropsStylesType;
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
}

export interface ITableDivider
  extends Omit<ITableDividerStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TableDividerPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
