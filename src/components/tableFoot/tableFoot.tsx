import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';

import { TableFootStandAlone } from './tableFootStandAlone';
import { ITableFoot } from './types/tableFoot';
import { TableFootPropsStylesType } from './types/tableFootTheme';

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
