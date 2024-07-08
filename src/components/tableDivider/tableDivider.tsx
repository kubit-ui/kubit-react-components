import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { TableDividerStandAlone } from './tableDividerStandAlone';
import { ITableDivider, TableDividerPropsStylesType } from './types';

const TableDividerComponent = (
  { variant, ctv, ...props }: React.PropsWithChildren<ITableDivider>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  const styles = useStylesV2<TableDividerPropsStylesType>({
    styleName: STYLES_NAME.TABLE_DIVIDER,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  return <TableDividerStandAlone ref={ref} styles={styles} {...props} />;
};

export const TableDivider = React.forwardRef(TableDividerComponent);
