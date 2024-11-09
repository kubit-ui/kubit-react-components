import React from 'react';

import { ScreenReaderOnlyStyled } from './screenReaderOnly.styled';
import { IScreenReaderOnly } from './types/screenReaderOnly';

export const ScreenReaderOnly = ({
  children,
  as,
  id,
  ariaLive,
  dataTestId = 'screen-reader',
}: IScreenReaderOnly): JSX.Element => {
  return (
    <ScreenReaderOnlyStyled aria-live={ariaLive} as={as} data-testid={dataTestId} id={id}>
      {children}
    </ScreenReaderOnlyStyled>
  );
};
