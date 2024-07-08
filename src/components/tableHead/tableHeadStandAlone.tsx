import * as React from 'react';

import { THeadStyled } from './tableHead.styled';
import { ITableHeadStandAlone } from './types';

const TableHeadStandAloneComponent = (
  {
    dataTestId = 'tableHead',
    children,
    styles,
    id,
    sticky,
    hidden,
    component,
  }: React.PropsWithChildren<ITableHeadStandAlone>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  return (
    <THeadStyled
      ref={ref}
      // Need to be accesible from the datatable component when the component is not a thead
      data-table-head
      $styles={styles}
      as={component}
      data-hidden={hidden}
      data-sticky={sticky}
      data-testid={dataTestId}
      id={id}
    >
      {children}
    </THeadStyled>
  );
};

export const TableHeadStandAlone = React.forwardRef(TableHeadStandAloneComponent);
