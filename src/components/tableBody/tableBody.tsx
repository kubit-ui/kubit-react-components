import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { TableBodyStandAlone } from './tableBodyStandAlone';
import { ITableBody, TableBodyPropsStylesType } from './types';

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
