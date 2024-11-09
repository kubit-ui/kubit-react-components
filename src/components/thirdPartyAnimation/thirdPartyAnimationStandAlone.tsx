import React from 'react';

import { ROLES } from '../../types/role/role';
// styles
import { ThirdPartyAnimationStyled } from './thirdPartyAnimation.styled';
import { IThirdPartyAnimationStandAlone } from './types/thirdPartyAnimation';

const ThirdPartyAnimationStandAloneComponent = (
  { dataTestId = 'third-party-animation', height, width, ...props }: IThirdPartyAnimationStandAlone,
  ref: React.ForwardedRef<HTMLSpanElement | null>
): JSX.Element => {
  const emptyAriaLabel = props['aria-label'].length === 0;

  return (
    <ThirdPartyAnimationStyled
      ref={ref}
      $height={height}
      $width={width}
      aria-hidden={emptyAriaLabel}
      aria-label={props['aria-label']}
      data-testid={dataTestId}
      role={ROLES.IMG}
    />
  );
};

/**
 * @description
 * ThirdPartyAnimation component is a component that can be used to create a ThirdPartyAnimation.
 * @param {React.PropsWithChildren<IThirdPartyAnimationStandAlone>} props
 * @returns {JSX.Element}
 */
export const ThirdPartyAnimationStandAlone = React.forwardRef(
  ThirdPartyAnimationStandAloneComponent
);
