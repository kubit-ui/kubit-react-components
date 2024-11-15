import React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon/elementOrIcon';

import { LabelStandAlone as Label } from '../label/labelStandAlone';
import { QuickButtonContainerStyled, QuickButtonStyled } from './quickButton.styled';
import { IQuickButtonStandAlone } from './types/quickButton';
import { QuickButtonState } from './types/state';

const QuickButtonStandAloneComponent = (
  { dataTestId = 'quick-button', ...props }: IQuickButtonStandAlone,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => {
  const button = (
    <QuickButtonStyled
      ref={ref}
      aria-label={props.label ? '' : props['aria-label']}
      data-testid={dataTestId}
      disabled={props.state === QuickButtonState.DISABLED}
      id={props.buttonId}
      role={props.role}
      styles={props.styles}
      type={props.type}
      onClick={props.onClick}
    >
      <ElementOrIcon
        color={props.styles?.[props.state]?.icon?.color}
        height={props.styles?.[props.state]?.icon?.height}
        width={props.styles?.[props.state]?.icon?.width}
        {...props.icon}
      />
    </QuickButtonStyled>
  );

  return props.label ? (
    <QuickButtonContainerStyled maxWidth={props.maxWidth} styles={props.styles}>
      {button}
      <Label
        color={props.styles?.[props.state]?.label?.color}
        inputId={props.buttonId}
        textVariant={props.styles?.[props.state]?.label?.font_family}
        weight={props.styles?.[props.state]?.label?.font_weight}
        {...props.label}
      >
        {props.label.content}
      </Label>
    </QuickButtonContainerStyled>
  ) : (
    button
  );
};

/**
 * @description
 * QuickButton component is a button component that can be used to create a button.
 * @param {React.PropsWithChildren<IQuickButtonStandAlone>} props
 * @returns {JSX.Element}
 * @constructor
 */
export const QuickButtonStandAlone = React.forwardRef(QuickButtonStandAloneComponent);
