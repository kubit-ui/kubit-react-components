import { CustomTokenTypes } from '@/types';

import { TableBodyPropsStylesType } from './tableBodyTheme';

export interface ITableBodyStandAlone {
  styles?: TableBodyPropsStylesType;
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
}

export interface ITableBody
  extends Omit<ITableBodyStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TableBodyPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
