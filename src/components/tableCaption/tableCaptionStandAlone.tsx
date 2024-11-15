import React from 'react';

import { CaptionStyled } from './tableCaption.styled';
import { ITableCaptionStandAlone } from './types/tableCaption';

const TableCaptionStandAloneComponent = (
  {
    dataTestId = 'table-caption',
    children,
    styles,
    id,
    hidden,
    component,
  }: React.PropsWithChildren<ITableCaptionStandAlone>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  return (
    <CaptionStyled
      ref={ref}
      $styles={styles}
      as={component}
      data-hidden={hidden}
      data-testid={dataTestId}
      id={id}
    >
      {children}
    </CaptionStyled>
  );
};

export const TableCaptionStandAlone = React.forwardRef(TableCaptionStandAloneComponent);
