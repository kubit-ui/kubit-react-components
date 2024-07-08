import * as React from 'react';

import { TDStyled } from './tableCell.styled';
import { ITableCellStandAlone } from './types';

const TableCellStandAloneComponent = (
  {
    dataTestId = 'tableCell',
    children,
    styles,
    id,
    scope,
    th,
    colSpan,
    rowSpan,
    height,
    width,
    minWidth,
    maxWidth,
    textAlign,
    top,
    left,
    right,
    bottom,
    sticky,
    hidden,
    component,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props
  }: React.PropsWithChildren<ITableCellStandAlone>,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <TDStyled
      ref={ref}
      $bottom={bottom}
      $height={height}
      $left={left}
      $maxWidth={maxWidth}
      $minWidth={minWidth}
      $right={right}
      $styles={styles}
      $textAlign={textAlign}
      $top={top}
      $width={width}
      aria-label={props['aria-label']}
      aria-labelledby={props['aria-labelledby']}
      as={component ? component : th ? 'th' : 'td'}
      colSpan={colSpan}
      data-hidden={hidden}
      data-sticky={sticky}
      data-testid={dataTestId}
      id={id}
      rowSpan={rowSpan}
      scope={scope}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* When Hidden, wrap the children in order to apply srOnlyMixin to this wrapper */}
      {hidden ? <div>{children}</div> : children}
    </TDStyled>
  );
};

export const TableCellStandAlone = React.forwardRef(TableCellStandAloneComponent);
