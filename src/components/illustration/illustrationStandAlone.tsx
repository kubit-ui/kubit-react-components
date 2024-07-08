import * as React from 'react';

// styles
import { IllustrationStyled } from './illustration.styled';
import { IIllustrationStandAlone } from './types';

const IllustrationStandAloneComponent = (
  {
    illustration,
    customIllustrationStyles,
    altText,
    width,
    height,
    rotate = '0deg',
    transitionDuration = '0.2s',
    dataTestId,
    'aria-hidden': ariaHidden,
  }: IIllustrationStandAlone,
  ref: React.ForwardedRef<HTMLImageElement> | undefined | null
): JSX.Element => {
  const isEmptyAltText = ariaHidden || !altText;

  return (
    <IllustrationStyled
      ref={ref}
      $height={height}
      $width={width}
      alt={altText}
      aria-hidden={isEmptyAltText}
      customIllustrationStyles={customIllustrationStyles}
      data-testid={dataTestId}
      loading="lazy"
      moveRound={rotate}
      src={illustration}
      transitionDuration={transitionDuration}
    />
  );
};

export const IllustrationStandAlone = React.forwardRef(IllustrationStandAloneComponent);
