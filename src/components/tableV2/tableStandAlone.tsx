import * as React from 'react';

import { ROLES } from '@/types';

import {
  LeftBoxShadowContainerStyled,
  RightBoxShadowContainerStyled,
  TableScrollableContainerStyled,
  TableStyled,
  TableWrapperStyled,
} from './table.styled';
import { ITableStandAloneV2 } from './types';

const TableStandAloneComponent = (
  {
    dataTestId = 'table',
    children,
    styles,
    hasScrollDisabled,
    hasScroll,
    sticky,
    component,
    ...props
  }: React.PropsWithChildren<ITableStandAloneV2>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <TableWrapperStyled
      ref={ref}
      $styles={styles}
      data-sticky={sticky}
      data-testid={`${dataTestId}Wrapper`}
    >
      {/* display table, by default does not allow scroll, that's why we need to add a wrapper */}
      <TableScrollableContainerStyled
        data-table-scrollable-container
        $hasScrollDisabled={hasScrollDisabled}
        $styles={styles}
        aria-label={hasScroll ? props['aria-label'] : undefined}
        aria-labelledby={hasScroll ? props['aria-labelledby'] : undefined}
        data-testid={`${dataTestId}ScrollableContainer`}
        role={hasScroll ? ROLES.REGION : undefined}
        tabIndex={hasScroll ? 0 : undefined}
      >
        <TableStyled $styles={styles} as={component} data-testid={dataTestId}>
          {children}
        </TableStyled>
      </TableScrollableContainerStyled>
      {/* This is the left border shadow, it needs to be an independent element in order to the inner scroll content do not hide it */}
      <LeftBoxShadowContainerStyled data-table-left-shadow $styles={styles} />
      {/* This is the sticky border shadow, it needs to be an independent element in order to have a right-2-left shadow */}
      <RightBoxShadowContainerStyled data-table-right-shadow $styles={styles} />
    </TableWrapperStyled>
  );
};

export const TableStandAlone = React.forwardRef(TableStandAloneComponent);
