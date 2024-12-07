import React from 'react';

import { ButtonType } from '@/components/button/types/type';
import { CommonStyleType } from '@/types/styles/commonStyle';
import { pickAriaProps } from '@/utils/aria/aria';

import { ButtonControStyled } from '../pageControl.styled';
import { ButtonControl } from '../types/pageControl';

interface IButtonControlStandAlone extends ButtonControl {
  buttonControlStyles?: CommonStyleType;
  dataTestId?: string;
}

export const ButtonControlStandAlone = ({
  buttonControlStyles,
  disabled = false,
  ...props
}: IButtonControlStandAlone): JSX.Element => {
  const ariaProps = pickAriaProps(props);

  return (
    <ButtonControStyled
      data-testid={props.dataTestId}
      disabled={disabled}
      styles={buttonControlStyles}
      type={ButtonType.BUTTON}
      {...props}
      {...ariaProps}
    />
  );
};
