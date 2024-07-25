import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text } from '@/components/text';
import { TextComponentType } from '@/components/text/types';
import { Toggle } from '@/components/toggle';
import { useId } from '@/hooks';

import { ToggleWithLabelStyled } from './toggleWithLabel.styled';
import type { IToggleWithLabelStandAlone } from './types';

const ToggleWithLabelStandAloneComponent = (
  {
    screenReaderText,
    id,
    displayRow,
    styles,
    label,
    required,
    requiredSymbol,
    textVariant,
    toggleVariant,
    labelPosition,
    ...props
  }: IToggleWithLabelStandAlone,
  ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('toggle');
  const toggleId = id ?? uniqueId;
  const screenReaderId = `${uniqueId}ScreenReader`;
  const labelId = `${uniqueId}Label`;

  const legendStyles =
    props.disabled && styles?.legend?.disabled ? styles?.legend?.disabled : styles?.legend;

  return (
    <ToggleWithLabelStyled
      ref={ref}
      as={label ? 'fieldset' : 'div'}
      displayRow={displayRow}
      labelPosition={labelPosition}
      styles={styles}
      onClick={props.onClick}
    >
      {label && (
        <Text
          component={TextComponentType.LEGEND}
          customTypography={legendStyles}
          dataTestId={`${props.dataTestId}Label`}
          id={labelId}
          variant={textVariant ?? styles?.legend?.font_variant}
          {...label}
        >
          {label.content}
          {required && (
            <Text
              aria-hidden={true}
              color={styles?.required?.color}
              component={TextComponentType.SPAN}
              dataTestId={`${props.dataTestId}Required`}
              variant={styles?.required?.font_variant}
              weight={styles?.required?.font_weight}
              {...requiredSymbol}
            >
              {requiredSymbol?.content}
            </Text>
          )}
        </Text>
      )}
      <Toggle
        {...props}
        ref={props.toggleRef}
        aria-describedby={labelId}
        id={toggleId}
        screenReaderId={screenReaderId}
        variant={toggleVariant}
      />
      <ScreenReaderOnly dataTestId={`${props.dataTestId}ScreenReader`} id={screenReaderId}>
        {screenReaderText}
      </ScreenReaderOnly>
    </ToggleWithLabelStyled>
  );
};

export const ToggleWithLabelStandAlone = React.forwardRef(ToggleWithLabelStandAloneComponent);
