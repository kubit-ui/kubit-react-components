import * as React from 'react';

import { ButtonType } from '@/components/button';
import { pickAriaProps } from '@/utils/aria/aria';

import { IllustrationButtonStyled } from './illustration.styled';
import { IllustrationStandAlone } from './illustrationStandAlone';
import { IIllustration } from './types';

const IllustrationBasicComponent = (
  { tabIndex = 0, ...props }: IIllustration,
  ref: React.ForwardedRef<HTMLImageElement> | undefined | null
): JSX.Element | null => {
  const illustrationWithTitle = (
    <IllustrationStandAlone {...props} ref={ref} altText="" illustration={props.illustration} />
  );

  const buildButton = (): JSX.Element => {
    const ariaProps = pickAriaProps(props);
    let illustrationElement = <></>;
    if (props.illustration) {
      if (props.onClick) {
        illustrationElement = (
          <IllustrationButtonStyled
            {...ariaProps}
            aria-disabled={props.disabled}
            aria-label={props['aria-label'] || props.altText}
            disabled={props.disabled}
            tabIndex={tabIndex}
            type={ButtonType.BUTTON}
            onClick={props.onClick}
          >
            {illustrationWithTitle}
          </IllustrationButtonStyled>
        );
      } else {
        illustrationElement = (
          <IllustrationStandAlone {...props} ref={ref} illustration={props.illustration} />
        );
      }
      return illustrationElement;
    }
    return illustrationElement;
  };

  return buildButton();
};

export const IllustrationBasic = React.forwardRef(IllustrationBasicComponent);
