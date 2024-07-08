import { CustomTokenTypes } from '@/types';

import { TableFootPropsStylesType } from './tableFootTheme';

export interface ITableFootStandAlone {
  styles?: TableFootPropsStylesType;
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
}

export interface ITableFoot
  extends Omit<ITableFootStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TableFootPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
