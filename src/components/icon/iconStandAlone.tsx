import * as React from 'react';

//types
import { ROLES } from '@/types/index';

// styles
import { IconComplexStyled, IconSVGStyled, IconStyled } from './icon.styled';
import { IIconComplex, IIconStandAlone } from './types';

const IconComplexComponent = (
  {
    id,
    color,
    height,
    width,
    emptyAltText,
    altText,
    icon,
    dataTestId,
    rotate,
    transitionDuration,
    twistAnimationTransformValue,
    customIconStyles,
  }: IIconComplex,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  const [svgContent, setSvgContent] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const res = await fetch(icon);
      let response = '';
      if (res) {
        response = await res?.text();
      }
      setSvgContent(response);
    })();
  }, [icon]);

  return (
    <IconComplexStyled
      ref={ref as React.ForwardedRef<HTMLSpanElement>}
      $color={color}
      $customIconStyles={customIconStyles}
      $height={height}
      $moveRound={rotate}
      $srcImage={icon}
      $transitionDuration={transitionDuration}
      $width={width}
      aria-hidden={emptyAltText}
      aria-label={altText}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      data-testid={dataTestId}
      id={id}
      role={emptyAltText ? ROLES.NONE : ROLES.IMG}
      twistAnimationTransformValue={twistAnimationTransformValue}
    />
  );
};

export const IconComplex = React.forwardRef(IconComplexComponent);

const IconStandAloneComponent = (
  {
    id,
    linearIcon,
    icon,
    altText,
    width,
    height,
    color,
    rotate = '0deg',
    transitionDuration = '0.2s',
    dataTestId,
    twistAnimationTransformValue,
    complex = false,
    customIconStyles,
  }: IIconStandAlone,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element => {
  const isEmptyAltText = !altText;

  if (complex) {
    return (
      <IconComplex
        ref={ref as React.ForwardedRef<HTMLSpanElement>}
        altText={altText}
        color={color}
        customIconStyles={customIconStyles}
        dataTestId={dataTestId}
        emptyAltText={isEmptyAltText}
        height={height}
        icon={icon}
        id={id}
        moveRound={rotate}
        transitionDuration={transitionDuration}
        twistAnimationTransformValue={twistAnimationTransformValue}
        width={width}
      />
    );
  }

  return !linearIcon ? (
    <IconStyled
      ref={ref as React.ForwardedRef<HTMLImageElement>}
      $customIconStyles={customIconStyles}
      $height={height}
      $moveRound={rotate}
      $transitionDuration={transitionDuration}
      $width={width}
      alt={altText}
      aria-hidden={isEmptyAltText}
      data-testid={dataTestId}
      id={id}
      loading="lazy"
      src={icon}
    />
  ) : (
    <IconSVGStyled
      ref={ref as React.ForwardedRef<SVGSVGElement>}
      $color={color}
      $customIconStyles={customIconStyles}
      $height={height}
      $moveRound={rotate}
      $srcImage={icon}
      $transitionDuration={transitionDuration}
      $width={width}
      aria-hidden={isEmptyAltText}
      aria-label={altText}
      data-testid={dataTestId}
      id={id}
      role={isEmptyAltText ? ROLES.NONE : ROLES.IMG}
      twistAnimationTransformValue={twistAnimationTransformValue}
    />
  );
};

export const IconStandAlone = React.forwardRef(IconStandAloneComponent);
