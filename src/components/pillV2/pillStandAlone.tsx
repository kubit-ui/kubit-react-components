import React from 'react';

import { useId } from '@/hooks/useId/useId';
import { InputTypeType } from '@/types/inputType/inputType';

import { ROLES } from '../../types/role/role';
import { ButtonType } from '../button/types/type';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { Text } from '../text/text';
import { TextComponentType } from '../text/types/component';
import {
  PillAsButton,
  PillContentContainerStyled,
  PillInputStyled,
  PillRootContainerStyled,
} from './pill.styled';
import { IPillStandAlone } from './types/pill';
import { PillType } from './types/pillType';

const PillStandAloneComponent = (
  { dataTestId = 'pill', type = PillType.BUTTON, ...props }: IPillStandAlone,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => {
  const id = useId('pill');
  const pillContentId = `${id}-content`;

  return (
    <PillRootContainerStyled
      ref={ref}
      aria-controls={props['aria-controls']}
      aria-selected={type === PillType.TAB ? props.selected : undefined}
      as={[PillType.BUTTON, PillType.TAB].includes(type) ? PillAsButton : undefined}
      data-testid={dataTestId}
      role={type === PillType.TAB ? ROLES.TAB : undefined}
      styles={props.styles}
      type={[PillType.BUTTON, PillType.TAB].includes(type) ? ButtonType.BUTTON : undefined}
      onClick={props.onClick}
    >
      <PillContentContainerStyled id={pillContentId} styles={props.styles}>
        <ElementOrIcon customIconStyles={props.styles?.leftIcon} {...props.leftIcon} />
        <Text
          component={TextComponentType.SPAN}
          customTypography={props.styles?.label}
          {...props.label}
        >
          {props.label?.content}
        </Text>
        <ElementOrIcon customIconStyles={props.styles?.rightIcon} {...props.rightIcon} />
      </PillContentContainerStyled>
      {[PillType.SELECTOR_SIMPLE, PillType.SELECTOR_MULTIPLE].includes(type) && (
        <PillInputStyled
          aria-labelledby={pillContentId}
          checked={props.selected}
          disabled={props.disabled}
          name={props.name}
          styles={props.styles}
          type={type === PillType.SELECTOR_SIMPLE ? InputTypeType.RADIO : InputTypeType.CHECKBOX}
          value={props.value}
          onChange={props.onChange}
        />
      )}
    </PillRootContainerStyled>
  );
};

export const PillStandAlone = React.forwardRef(PillStandAloneComponent);
