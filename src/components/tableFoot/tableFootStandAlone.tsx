import React from 'react';

import { TFootStyled } from './tableFoot.styled';
import { ITableFootStandAlone } from './types/tableFoot';

const TableFootStandAloneComponent = (
  {
    dataTestId = 'table-foot',
    children,
    styles,
    id,
    component,
  }: React.PropsWithChildren<ITableFootStandAlone>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  return (
    <TFootStyled ref={ref} $styles={styles} as={component} data-testid={dataTestId} id={id}>
      {children}
    </TFootStyled>
  );
};

export const TableFootStandAlone = React.forwardRef(TableFootStandAloneComponent);
