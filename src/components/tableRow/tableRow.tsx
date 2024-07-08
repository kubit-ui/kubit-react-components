import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { TableRowStandAlone } from './tableRowStandAlone';
import { ITableRow, TableRowPropsStylesType } from './types';

const TableRowComponent = (
  { variant, ctv, ...props }: React.PropsWithChildren<ITableRow>,
  ref: React.ForwardedRef<HTMLTableRowElement>
) => {
  const styles = useStylesV2<TableRowPropsStylesType>({
    styleName: STYLES_NAME.TABLE_ROW,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  return <TableRowStandAlone ref={ref} styles={styles} {...props} />;
};

export const TableRow = React.forwardRef(TableRowComponent);
