import * as React from 'react';

import { Label } from '@/components/label';
import { TextCount } from '@/components/textCount';
import { AriaLiveOptionType } from '@/types';

import { useId } from '../../hooks';
// internal components
import { ErrorStandAlone, HelpMessageStandAlone, TitleStandAlone } from './components';
// styles
import {
  HelperTextAndErrorWrapperStyled,
  LabelAndAdditionalInfoContainer,
  TextAreaBottomStyled,
  TextAreaBoxStyled,
  TextAreaContainerStyled,
  TextAreaStyled,
} from './textArea.styled';
import { ITextAreaStandAlone, TextAreaStateType } from './types';
import { buildAriaDescribedBy } from './utils';

const TextAreaStandAloneComponent = (
  { errorAriaLiveType = AriaLiveOptionType.ASSERTIVE, ...props }: ITextAreaStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('textArea');
  const textAreaId = props.id ?? uniqueId;
  const textAreaHelpTextId = `${textAreaId}HelpText`;
  const textAreaErrorId = `${textAreaId}Error`;
  const textAreaTextCountId = `${textAreaId}TextCount`;

  const stateStyles = props.styles?.[props.state];
  const disabled = [TextAreaStateType.DISABLED_EMPTY, TextAreaStateType.DISABLED_FILLED].includes(
    props.state
  );

  return (
    <TextAreaContainerStyled
      ref={ref}
      data-testid={`${props.dataTestId}TextArea`}
      styles={stateStyles}
    >
      <TitleStandAlone styles={stateStyles} title={props.title} />
      <TextAreaBoxStyled
        height={props.styles?.labelInsideTextArea ? props.height : undefined}
        styles={stateStyles}
        onClick={() => {
          if (props.styles?.labelInsideTextArea) {
            document.getElementById(textAreaId)?.focus();
          }
        }}
      >
        <LabelAndAdditionalInfoContainer styles={stateStyles}>
          <Label
            asteriskColor={stateStyles?.required?.color}
            asteriskVariant={stateStyles?.required?.font_variant}
            asteriskWeight={stateStyles?.required?.font_weight}
            color={stateStyles?.label?.color}
            dataTestId={`${props.dataTestId}Label`}
            inputId={textAreaId}
            required={props.required}
            textVariant={stateStyles?.label?.font_variant}
            weight={stateStyles?.label?.font_weight}
            {...props.label}
          >
            {props.label.content}
          </Label>
          {props.additionalInfo}
        </LabelAndAdditionalInfoContainer>
        <TextAreaStyled
          aria-describedby={buildAriaDescribedBy({
            helpMessage: props.helpMessage?.content,
            textAreaHelpTextId,
            errorMessage: props.errorMessage?.content,
            state: props.state,
            textAreaErrorId,
          })}
          disabled={disabled}
          height={!props.styles?.labelInsideTextArea ? props.height : undefined}
          id={textAreaId}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          required={props.required}
          styles={stateStyles}
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onFocus={props.onFocus}
        >
          {props.value}
        </TextAreaStyled>
      </TextAreaBoxStyled>
      <TextAreaBottomStyled styles={stateStyles}>
        <HelperTextAndErrorWrapperStyled styles={stateStyles}>
          <ErrorStandAlone
            dataTestId={`${props.dataTestId}Error`}
            errorAriaLiveType={errorAriaLiveType}
            errorIcon={props.errorIcon}
            errorMessage={props.errorMessage}
            id={textAreaErrorId}
            state={props.state}
            styles={stateStyles}
          />
          <HelpMessageStandAlone
            dataTestId={`${props.dataTestId}HelpMessage`}
            helpMessage={props.helpMessage}
            id={textAreaHelpTextId}
            styles={stateStyles}
          />
        </HelperTextAndErrorWrapperStyled>
        {stateStyles?.counterVariant && (
          <TextCount
            currentCharacters={props.value?.length ?? 0}
            dataTestId={`${props.dataTestId}TextCount`}
            id={textAreaTextCountId}
            leftColor={stateStyles?.counterLeft?.color}
            leftWeight={stateStyles?.counterLeft?.font_weight}
            maxLength={props.maxLength}
            rightColor={stateStyles?.counterRight?.color}
            rightWeight={stateStyles?.counterRight?.font_weight}
            screenReaderText={props.screenReaderTextCount}
            textVariant={stateStyles?.counter?.font_variant}
            variant={stateStyles?.counterVariant}
          />
        )}
      </TextAreaBottomStyled>
    </TextAreaContainerStyled>
  );
};

export const TextAreaStandAlone = React.forwardRef(TextAreaStandAloneComponent);
