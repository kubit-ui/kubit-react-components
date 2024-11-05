import * as React from 'react';

//components
import { Icon } from '@/components/icon';
import { pickAriaProps } from '@/utils/aria/aria';

import { BackToTopStyled } from './backToTop.styled';
import { IBackToTopStandAlone } from './types';

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
