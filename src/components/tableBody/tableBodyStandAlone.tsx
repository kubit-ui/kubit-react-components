import * as React from 'react';

import { TBodyStyled } from './tableBody.styled';
import { ITableBodyStandAlone } from './types';

const TableBodyStandAloneComponent = (
  {
    dataTestId = 'tableBody',
    children,
    styles,
    id,
    component,
  }: React.PropsWithChildren<ITableBodyStandAlone>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  return (
    <TBodyStyled ref={ref} $styles={styles} as={component} data-testid={dataTestId} id={id}>
      {children}
    </TBodyStyled>
  );
};

export const TableBodyStandAlone = React.forwardRef(TableBodyStandAloneComponent);
