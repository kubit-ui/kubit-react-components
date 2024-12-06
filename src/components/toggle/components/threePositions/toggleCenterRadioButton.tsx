import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { POSITIONS } from '@/types/positions/positions';

import { TextLeftWrapperStyled, TextRightWrapperStyled } from '../../toggle.styled';
import { IToggleStandAlone } from '../../types/toggle';
import { ToggleRadioButton } from './toggleRadioButton';

type ITextOrIcon = Pick<
  IToggleStandAlone,
  | 'styles'
  | 'togglePosition'
  | 'screenReaderId'
  | 'disabled'
  | 'inputValues'
  | 'radioButtonToggleName'
  | 'onClick'
  | 'dataTestId'
  | 'offText'
  | 'onText'
> & { block?: boolean };

export const ToggleCenterRadioButton = ({ block = false, ...props }: ITextOrIcon): JSX.Element => {
  return (
    <>
      {props.togglePosition === POSITIONS.CENTER && (
        <TextLeftWrapperStyled margin={props.styles?.label?.margin_left}>
          <Text
            aria-hidden={true}
            color={props.styles?.label?.color}
            component={TextComponentType.LABEL}
            variant={props.styles?.label?.font_variant}
            weight={props.styles?.label?.font_weight}
          >
            {props.offText?.content}
          </Text>
        </TextLeftWrapperStyled>
      )}
      <ToggleRadioButton
        block={block}
        dataTestId={props.dataTestId}
        disabled={props.disabled}
        inputValues={props.inputValues}
        position={POSITIONS.CENTER}
        radioButtonToggleName={props.radioButtonToggleName}
        screenReaderId={props.screenReaderId}
        styles={props.styles}
        togglePosition={props.togglePosition}
        onClick={props.onClick}
      />
      {props.togglePosition === POSITIONS.CENTER && (
        <TextRightWrapperStyled margin={props.styles?.label?.margin_right}>
          <Text
            aria-hidden={true}
            color={props.styles?.label?.color}
            component={TextComponentType.LABEL}
            variant={props.styles?.label?.font_variant}
            weight={props.styles?.label?.font_weight}
          >
            {props.onText?.content}
          </Text>
        </TextRightWrapperStyled>
      )}
    </>
  );
};
