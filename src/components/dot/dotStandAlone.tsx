import React from 'react';

import { DotStyled } from './dot.styled';
import { IDotStandAlone } from './types/dot';

const DotStandAloneComponent = (
  { formatedNumber, label, sizeStyles, styles, dataTestId = 'dot', height, width }: IDotStandAlone,
  ref: React.ForwardedRef<HTMLSpanElement> | undefined | null
): JSX.Element => {
  return (
    <DotStyled
      ref={ref}
      $height={height}
      $width={width}
      data-testid={dataTestId}
      sizeStyles={sizeStyles}
      styles={styles}
    >
      {label}
      {formatedNumber}
    </DotStyled>
  );
};

/**
 * @description
 * Dot component is a component that can be used to display a dot.
 * It can be used to display a notification dot or a dot to indicate a status.
 * @param {IDotStandAlone} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Dot variant="primary" size="SMALL" number={1} maxNumber={99} />
 */
export const DotStandAlone = React.forwardRef(DotStandAloneComponent);
