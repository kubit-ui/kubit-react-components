import * as React from 'react';

import { ScreenReaderOnlyStyled } from './screenReaderOnly.styled';
import { IScreenReaderOnly } from './types';

export const ScreenReaderOnly = ({
  children,
  id,
  ariaLive,
  dataTestId,
}: IScreenReaderOnly): JSX.Element => {
  return (
    <>
      {children && (
        <ScreenReaderOnlyStyled aria-live={ariaLive} data-testid={dataTestId} id={id}>
          {children}
        </ScreenReaderOnlyStyled>
      )}
    </>
  );
};
