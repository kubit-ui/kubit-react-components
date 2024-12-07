import React from 'react';

import { pickAriaProps } from '@/utils/aria/aria';

import { TextStyled } from './text.styled';
import { ITextStandAlone } from './types/text';
import { TextTransformType } from './types/transform';

const TextStandAloneComponent = (
  { dataTestId = 'text', transform = TextTransformType.NONE, ...props }: ITextStandAlone,
  ref: React.ForwardedRef<HTMLParagraphElement> | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  return (
    <TextStyled
      {...props}
      {...ariaProps}
      ref={ref}
      $maxTruncatedLines={props.maxTruncatedLines}
      $transform={transform}
      $truncate={props.truncate}
      align={props.align}
      as={props.component}
      content={undefined}
      data-testid={dataTestId}
      htmlFor={props.htmlFor}
      id={props.id}
      isDisabled={props.isDisabled}
      role={props.role}
      styles={props.styles}
      weight={props.weight}
      onClick={props.onClick}
    >
      {props.children}
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
