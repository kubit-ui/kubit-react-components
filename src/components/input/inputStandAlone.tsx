import * as React from 'react';

import { InputStructure } from '@/components/inputStructure/inputStructure';
import { pickAriaProps } from '@/utils/aria/aria';

import {
  ErrorMessageStandAlone,
  HelpMessageStandAlone,
  InformationAssociatedStandAlone,
  InputIconStandAlone,
  InputIconStandAloneDeprecated,
  LabelStandAlone,
  LoaderStandAlone,
  TextCountStandAlone,
  TitleStandAlone,
} from './components';
// styles
import {
  BottomContentWrapperStyled,
  InputErrorAndHelpMessageWrapperStyled,
  InputStyled,
  InputWrapperStyled,
  MessagesAndCounterWrapperStyled,
  TopContentWrapperStyled,
} from './input.styled';
import {
  AUTOCOMPLETE_TYPE,
  IInputStandAlone,
  InputHelpMessagePosition,
  InputIconPosition,
  LABEL_TYPE,
  MultipleRef,
} from './types';
import { buildAriaLabelledBy, hasError, isDisabled } from './utils';

const InputStandAloneComponent = (
  {
    extraAriaLabelledBy,
    styles,
    state,
    helpMessage,
    errorMessage,
    inputMode = 'text',
    autocomplete = AUTOCOMPLETE_TYPE.ON,
    autoCapitalize = 'off',
    ...props
  }: IInputStandAlone,
  ref: React.ForwardedRef<unknown>
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  const helpMessageId = `${props.inputId}HelpText`;
  const errorMessageId = `${props.inputId}Error`;
  const labelId = `${props.inputId}Label`;
  // eslint-disable-next-line complexity
  const buildInput = () => (
    <InputWrapperStyled styles={styles?.[state]}>
      <LoaderStandAlone loader={props.loader} loading={props.loading} styles={styles?.[state]} />
      <InputIconStandAlone
        ref={
          ref && 'refLeftIcon' in ref
            ? ((ref as unknown as MultipleRef)
                ?.refLeftIcon as React.MutableRefObject<HTMLDivElement>)
            : undefined
        }
        disabled={isDisabled(state)}
        iconPosition={InputIconPosition.LEFT}
        leftIcon={props.leftIcon}
        state={state}
        styles={styles?.[state]}
      />
      <InputStyled
        ref={
          ref && 'refInput' in ref
            ? ((ref as unknown as MultipleRef).refInput as React.MutableRefObject<HTMLInputElement>)
            : (ref as React.MutableRefObject<HTMLInputElement>)
        }
        aria-haspopup={props['aria-haspopup']}
        aria-invalid={hasError(state)}
        aria-labelledby={buildAriaLabelledBy({
          extraAriaLabelledBy,
          labelId,
          helpMessage: helpMessage?.content as string,
          helpMessageId,
          errorMessage: errorMessage?.content,
          errorMessageId,
          state,
        })}
        {...ariaProps}
        autoCapitalize={autoCapitalize}
        autoComplete={autocomplete}
        cursorPointer={styles?.[state]?.inputContainer?.cursor}
        data-testid={`${props.dataTestId}Input`}
        data-truncate={props.truncate}
        disabled={isDisabled(state)}
        icon={props.icon?.icon}
        iconPosition={props.iconPosition}
        id={props.inputId}
        inputMode={inputMode}
        leftIcon={props.leftIcon}
        max={props.max}
        maxLength={props.maxLength}
        min={props.min}
        minLength={props.minLength}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        rightIcon={props.rightIcon}
        role={props.role}
        state={state}
        styles={styles}
        type={props.type}
        value={props.value || ''}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onClick={props.onClick}
        onCopy={e => {
          if (props.disabledCopyAndPaste) {
            e.preventDefault();
          }
        }}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        onPaste={e => {
          if (props.disabledCopyAndPaste) {
            e.preventDefault();
          }
        }}
      />
      <InputIconStandAlone
        ref={
          ref && 'refRightIcon' in ref
            ? ((ref as unknown as MultipleRef)
                ?.refRightIcon as React.MutableRefObject<HTMLDivElement>)
            : undefined
        }
        disabled={isDisabled(state)}
        iconPosition={InputIconPosition.RIGHT}
        rightIcon={props.rightIcon}
        state={state}
        styles={styles?.[state]}
      />
      {/* remove this <InputIconStandalone> when prop `icon` is removed */}
      <InputIconStandAloneDeprecated
        ref={
          ref && 'refIcon' in ref
            ? ((ref as unknown as MultipleRef)?.refIcon as React.MutableRefObject<HTMLDivElement>)
            : undefined
        }
        disabled={isDisabled(state)}
        icon={{ dataTestId: `${props.dataTestId}Icon`, ...props.icon }}
        iconPosition={props.iconPosition}
        loading={props.loading}
        state={state}
        styles={styles?.[state]}
      />
    </InputWrapperStyled>
  );

  const buildTopContent = () => (
    <TopContentWrapperStyled styles={styles?.[state]}>
      <TitleStandAlone dataTestId={props.dataTestId} styles={styles?.[state]} title={props.title} />
      <LabelStandAlone
        additionalInfo={props.additionalInfo}
        dataTestId={props.dataTestId}
        id={labelId}
        inputId={props.inputId}
        label={props.label}
        leftExtraStyles={
          styles?.[state]?.label?.type !== LABEL_TYPE.STANDARD || !!props.leftExtraStyles
        }
        placeholder={props.placeholder}
        required={props.required}
        secondaryLabel={props.secondaryLabel}
        state={state}
        styles={styles}
        topExtraStyles={
          styles?.[state]?.label?.type !== LABEL_TYPE.STANDARD && !!props.topExtraStyles
        }
      />
      {styles?.[state]?.helpMessage?.position === InputHelpMessagePosition.TOP ? (
        <HelpMessageStandAlone
          dataTestId={props.dataTestId}
          helpMessage={helpMessage}
          helpMessageId={helpMessageId}
          styles={styles?.[state]}
        />
      ) : null}
    </TopContentWrapperStyled>
  );

  const buildBottomContent = () => (
    <BottomContentWrapperStyled isExpanded={!!props['aria-expanded']}>
      <InformationAssociatedStandAlone
        dataTestId={props.dataTestId}
        highlightedInformationAssociatedIcon={props.highlightedInformationAssociatedIcon}
        informationAssociatedButton={props.informationAssociatedButton}
        informationAssociatedIcon={props.informationAssociatedIcon}
        informationAssociatedValue={props.informationAssociatedValue}
        state={state}
        styles={styles?.[state]}
      />
      <MessagesAndCounterWrapperStyled>
        <InputErrorAndHelpMessageWrapperStyled styles={styles?.[state]}>
          <ErrorMessageStandAlone
            dataTestId={props.dataTestId}
            errorAriaLiveType={props.errorAriaLiveType}
            errorIcon={props.errorIcon}
            errorMessage={errorMessage}
            errorMessageId={errorMessageId}
            state={state}
            styles={styles?.[state]}
          />

          {styles?.[state]?.helpMessage?.position === InputHelpMessagePosition.BOTTOM ? (
            <HelpMessageStandAlone
              dataTestId={props.dataTestId}
              helpMessage={helpMessage}
              helpMessageId={helpMessageId}
              styles={styles?.[state]}
            />
          ) : null}
        </InputErrorAndHelpMessageWrapperStyled>
        <TextCountStandAlone styles={styles?.[state]} textCounter={props.textCounter} />
      </MessagesAndCounterWrapperStyled>
    </BottomContentWrapperStyled>
  );

  return (
    <InputStructure
      bottomContent={buildBottomContent()}
      bottomExtraStyles={props.bottomExtraStyles}
      centerContent={buildInput()}
      centerExtraStyles={props.centerExtraStyles}
      leftContent={props.leftContent}
      leftExtraStyles={props.leftExtraStyles}
      rightContent={props.rightContent}
      rightExtraStyles={props.rightExtraStyles}
      topContent={buildTopContent()}
      topExtraStyles={props.topExtraStyles}
    />
  );
};

export const InputStandAlone = React.forwardRef(InputStandAloneComponent);
