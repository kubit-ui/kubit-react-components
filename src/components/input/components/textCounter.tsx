import * as React from 'react';

// styles
import { TextCounterStyled } from '../input.styled';
import { ITextCount } from '../types/input';

export const TextCountStandAlone = ({ styles, ...props }: ITextCount): JSX.Element | null => {
  if (!props.textCounter) {
    return null;
  }
  return <TextCounterStyled styles={styles}>{props.textCounter}</TextCounterStyled>;
};
