import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { TableCellStandAlone } from './tableCellStandAlone';
import { ITableCell, TableCellPropsStylesType } from './types';

const TableCellComponent = (
  { variant, ctv, ...props }: React.PropsWithChildren<ITableCell>,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  const styles = useStylesV2<TableCellPropsStylesType>({
    styleName: STYLES_NAME.TABLE_CELL,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  return <TableCellStandAlone ref={ref} styles={styles} {...props} />;
};

export const TableCell = React.forwardRef(TableCellComponent);
