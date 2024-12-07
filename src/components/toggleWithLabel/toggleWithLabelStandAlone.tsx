import React from 'react';

import { Text } from '@/components/text/text';
import { useId } from '@/hooks/useId/useId';

import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
import { TextComponentType } from '../text/types/component';
import { ToggleControlled } from '../toggle/toggleControlled';
import { ToggleWithLabelStyled } from './toggleWithLabel.styled';
import type { IToggleWithLabelStandAlone } from './types/toggleWithLabel';

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
    onFieldSetClick,
    dataTestId = 'toggle-with-label',
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
      data-testid={dataTestId}
      displayRow={displayRow}
      labelPosition={labelPosition}
      styles={styles}
      onClick={onFieldSetClick}
    >
      {label && (
        <Text
          component={TextComponentType.LEGEND}
          customTypography={legendStyles}
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
              variant={styles?.required?.font_variant}
              weight={styles?.required?.font_weight}
              {...requiredSymbol}
            >
              {requiredSymbol?.content}
            </Text>
          )}
        </Text>
      )}
      <ToggleControlled
        {...props}
        aria-describedby={labelId}
        id={toggleId}
        screenReaderId={screenReaderId}
        variant={toggleVariant}
      />
      <ScreenReaderOnly id={screenReaderId}>{screenReaderText}</ScreenReaderOnly>
    </ToggleWithLabelStyled>
  );
};

export const ToggleWithLabelStandAlone = React.forwardRef(ToggleWithLabelStandAloneComponent);
