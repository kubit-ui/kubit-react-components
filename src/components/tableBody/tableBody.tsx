import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';

import { TableBodyStandAlone } from './tableBodyStandAlone';
import { ITableBody } from './types/tableBody';
import { TableBodyPropsStylesType } from './types/tableBodyTheme';

const TableBodyComponent = (
  { variant, ctv, ...props }: React.PropsWithChildren<ITableBody>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  const styles = useStylesV2<TableBodyPropsStylesType>({
    styleName: STYLES_NAME.TABLE_BODY,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  return <TableBodyStandAlone ref={ref} styles={styles} {...props} />;
};

export const TableBody = React.forwardRef(TableBodyComponent);
