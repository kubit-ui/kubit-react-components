import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';

import { TableDividerStandAlone } from './tableDividerStandAlone';
import { ITableDivider } from './types/tableDivider';
import { TableDividerPropsStylesType } from './types/tableDividerTheme';

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
