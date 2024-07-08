import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { TableHeadStandAlone } from './tableHeadStandAlone';
import { ITableHead, TableHeadPropsStylesType } from './types';

const TableHeadComponent = (
  { variant, ctv, ...props }: React.PropsWithChildren<ITableHead>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  const styles = useStylesV2<TableHeadPropsStylesType>({
    styleName: STYLES_NAME.TABLE_HEAD,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  return <TableHeadStandAlone ref={ref} styles={styles} {...props} />;
};

export const TableHead = React.forwardRef(TableHeadComponent);
