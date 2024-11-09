import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';

import { TableHeadStandAlone } from './tableHeadStandAlone';
import { ITableHead } from './types/tableHead';
import { TableHeadPropsStylesType } from './types/tableHeadTheme';

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
