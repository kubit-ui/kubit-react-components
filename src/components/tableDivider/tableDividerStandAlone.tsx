import React from 'react';

import { DividerStyled } from './tableDivider.styled';
import { ITableDividerStandAlone } from './types/tableDivider';

const TableDividerStandAloneComponent = (
  {
    dataTestId = 'table-divider',
    children,
    styles,
    id,
    component,
  }: React.PropsWithChildren<ITableDividerStandAlone>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <DividerStyled
      ref={ref}
      data-table-divider
      $styles={styles}
      as={component}
      data-testid={dataTestId}
      id={id}
    >
      {children}
    </DividerStyled>
  );
};

export const TableDividerStandAlone = React.forwardRef(TableDividerStandAloneComponent);
