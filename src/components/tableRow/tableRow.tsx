import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';

import { TableRowStandAlone } from './tableRowStandAlone';
import { ITableRow } from './types/tableRow';
import { TableRowPropsStylesType } from './types/tableRowTheme';

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
