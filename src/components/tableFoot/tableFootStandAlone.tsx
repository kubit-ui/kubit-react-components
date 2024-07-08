import * as React from 'react';

import { TFootStyled } from './tableFoot.styled';
import { ITableFootStandAlone } from './types';

const TableFootStandAloneComponent = (
  {
    dataTestId = 'tableFoot',
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
