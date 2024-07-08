import { CustomTokenTypes } from '@/types';

import { TableCaptionPropsStylesType } from './tableCaptionTheme';

export interface ITableCaptionStandAlone {
  styles?: TableCaptionPropsStylesType;
  id?: string;
  hidden?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
}

export interface ITableCaption
  extends Omit<ITableCaptionStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TableCaptionPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
}
