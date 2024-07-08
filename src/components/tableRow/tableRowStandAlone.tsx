import * as React from 'react';

import { TRStyled } from './tableRow.styled';
import { ITableRowStandAlone } from './types';

const TableRowStandAloneComponent = (
  {
    dataTestId = 'tableRow',
    children,
    styles,
    id,
    active,
    hoverable = true,
    component,
    onClick,
    onMouseEnter,
    onMouseLeave,
  }: React.PropsWithChildren<ITableRowStandAlone>,
  ref: React.ForwardedRef<HTMLTableRowElement>
) => {
  return (
    <TRStyled
      ref={ref}
      // Need to be accesible from the datatable component when the component is not a tr
      data-table-row
      $styles={styles}
      as={component}
      data-active={active}
      data-hoverable={hoverable}
      data-testid={dataTestId}
      id={id}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </TRStyled>
  );
};

export const TableRowStandAlone = React.forwardRef(TableRowStandAloneComponent);
