import * as React from 'react';

import { pickAriaProps } from '@/utils/aria/aria';

import { TextStyled } from './text.styled';
import { type ITextStandAlone, TextTransformType } from './types';

const TextStandAloneComponent = (
  {
    children,
    component,
    dataTestId,
    htmlFor,
    id,
    onClick,
    role,
    styles,
    weight,
    isDisabled,
    align,
    transform = TextTransformType.NONE,
    ...props
  }: ITextStandAlone,
  ref: React.ForwardedRef<HTMLParagraphElement> | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  return (
    <TextStyled
      {...props}
      {...ariaProps}
      ref={ref}
      $transform={transform}
      align={align}
      as={component}
      content={undefined}
      data-testid={dataTestId}
      htmlFor={htmlFor}
      id={id}
      isDisabled={isDisabled}
      role={role}
      styles={styles}
      weight={weight}
      onClick={onClick}
    >
      {children}
    </TextStyled>
  );
};

/**
 * @description
 * Text component is a component that can be used to create a text.
 * @param {React.PropsWithChildren<ITextStandAlone>} props
 * @returns {JSX.Element}
 * @constructor
 */
export const TextStandAlone = React.forwardRef(TextStandAloneComponent);
