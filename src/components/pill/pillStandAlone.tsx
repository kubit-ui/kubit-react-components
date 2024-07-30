import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { InputTypeType } from '@/components/input';
import { useId } from '@/hooks';
import { pickAriaProps } from '@/utils/aria/aria';

import { Text, TextComponentType } from '../text';
import {
  IconContainerStyled,
  LabelContainerStyled,
  ParentContainerStyled,
  PillInputStyled,
  PillLabelStyled,
  PillStyled,
} from './pill.styled';
import { IPillStandAlone } from './types';
import { getPillState } from './utils';

const PillStandAloneComponent = (
  {
    styles,
    decorativeIcon,
    selectedIcon,
    dataTestId,
    children,
    multiSelect = false,
    disabled,
    selected,
    name,
    onFocus,
    tabIndex,
    onPillChange,
    onKeyDown,
    value,
    ...props
  }: IPillStandAlone,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const ariaProps = pickAriaProps(props);
  const id = useId('pill');
  const component = multiSelect ? InputTypeType.CHECKBOX : InputTypeType.RADIO;

  const state = getPillState(selected, disabled);
  const stateStyles = styles[state];

  return (
    <ParentContainerStyled styles={stateStyles}>
      <PillStyled
        ref={ref}
        data-testid={dataTestId}
        styles={stateStyles}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown?.(value || '')}
      >
        <PillInputStyled
          aria-checked={selected}
          {...ariaProps}
          checked={selected}
          data-testid={`${dataTestId}Input`}
          disabled={disabled}
          id={id}
          name={name}
          styles={stateStyles}
          tabIndex={-1}
          type={component}
          value={value}
          onChange={onPillChange}
          onFocus={onFocus}
        />
        {decorativeIcon && (
          <IconContainerStyled styles={stateStyles}>
            <ElementOrIcon
              color={stateStyles?.decorativeIcon?.color}
              dataTestId={dataTestId + 'DecorativeIcon'}
              height={stateStyles?.decorativeIcon?.height}
              width={stateStyles?.decorativeIcon?.width}
              {...decorativeIcon}
            />
          </IconContainerStyled>
        )}
        <PillLabelStyled htmlFor={id} styles={stateStyles}>
          {children}
        </PillLabelStyled>
        {selectedIcon && selected && (
          <ElementOrIcon
            color={stateStyles?.selectedIcon?.color}
            dataTestId={dataTestId + 'SelectedIcon'}
            height={stateStyles?.selectedIcon?.height}
            width={stateStyles?.selectedIcon?.width}
            {...selectedIcon}
          />
        )}
      </PillStyled>
      {props.label?.content && props.label.content !== null && (
        <LabelContainerStyled styles={stateStyles}>
          <Text
            component={TextComponentType.PARAGRAPH}
            customTypography={stateStyles?.labelContent}
            {...props.label}
          >
            {props.label.content}
          </Text>
        </LabelContainerStyled>
      )}
    </ParentContainerStyled>
  );
};

export const PillStandAlone = React.forwardRef(PillStandAloneComponent);
