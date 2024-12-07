import React from 'react';

import { pickAriaProps } from '@/utils/aria/aria';

//components
import { IconHost as Icon } from '../icon/iconHost';
import { BackToTopStyled } from './backToTop.styled';
import { IBackToTopStandAlone } from './types/backToTop';

const BackToTopStandAloneComponent = (
  { dataTestId = 'back-to-top', ...props }: IBackToTopStandAlone,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  return (
    <BackToTopStyled
      {...ariaProps}
      ref={ref}
      data-testid={dataTestId}
      styles={props.styles}
      onClick={props.onClick}
    >
      {props.icon?.icon && (
        <Icon customIconStyles={props.styles[props.state]?.icon} {...props.icon} />
      )}
    </BackToTopStyled>
  );
};

export const BackToTopStandAlone = React.forwardRef(BackToTopStandAloneComponent);
