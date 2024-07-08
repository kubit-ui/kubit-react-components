import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { TableFootStandAlone } from './tableFootStandAlone';
import { ITableFoot, TableFootPropsStylesType } from './types';

const TableFootComponent = (
  { variant, ctv, ...props }: React.PropsWithChildren<ITableFoot>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  const styles = useStylesV2<TableFootPropsStylesType>({
    styleName: STYLES_NAME.TABLE_FOOT,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  return <TableFootStandAlone ref={ref} styles={styles} {...props} />;
};

export const TableFoot = React.forwardRef(TableFootComponent);
