import { forwardRef } from 'react';

import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { RenderIf } from '@/components/renderIf/renderIf';
import { useId } from '@/lib/hooks/useId/useId';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import { ErrorStandAlone } from './components/errorStandAlone';
import { HelpMessageStandAlone } from './components/helpMessageStandAlone';
import { TextCount } from './components/textCount/textCount';
import { TitleStandAlone } from './components/titleStandAlone';
import type { TextAreaStateType } from './types/state';
import type { TextAreaStandAloneProps } from './types/textArea';
import { buildAriaDescribedBy } from './utils/aria.utils';

export const TextAreaStandAlone = forwardRef<
  HTMLDivElement,
  TextAreaStandAloneProps
>(
  (
    {
      additionalInfo,
      counterVariant,
      cssClasses,
      errorAriaLiveType = 'assertive',
      errorIcon,
      errorMessage,
      height,
      helpMessage,
      id,
      label,
      labelInsideTextArea,
      maxLength,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      screenReaderTextCount,
      spellCheck,
      state,
      title,
      value,
      ...props
    },
    ref,
  ) => {
    const uniqueId = useId('textArea');
    const textAreaId = id ?? uniqueId;
    const textAreaHelpTextId = `${textAreaId}HelpText`;
    const textAreaErrorId = `${textAreaId}Error`;
    const textAreaTextCountId = `${textAreaId}TextCount`;

    const customAttributes = pickCustomAttributes({
      'data-state': state,
    });

    const disabled = [STATES.DISABLED_EMPTY, STATES.DISABLED_FILLED].includes(
      state as Extract<TextAreaStateType, 'disabled_empty' | 'disabled_filled'>,
    );

    return (
      <div
        ref={ref}
        className={cssClasses?.text_area}
        data-testid="text-area"
        {...customAttributes}
        {...pickCustomAttributes(props)}
      >
        <TitleStandAlone
          cssClasses={cssClasses}
          customAttributtes={customAttributes}
          title={title}
        />
        <div
          className={cssClasses?.labeltextareacontainer}
          role="button"
          style={{ height: labelInsideTextArea ? height : undefined }}
          tabIndex={0}
          onClick={() => document.getElementById(textAreaId)?.focus()}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              document.getElementById(textAreaId)?.focus();
            }
          }}
        >
          <div className={cssClasses?.labelandadditionalinfocontainer}>
            <Label
              asteriskCssClasses={cssClasses?.required}
              customAttributes={customAttributes}
              inputId={textAreaId}
              required={required}
              textCssClasses={cssClasses?.label}
              {...processText(label)}
            >
              {processText(label).children}
            </Label>
            {additionalInfo}
          </div>
          <textarea
            aria-describedby={buildAriaDescribedBy({
              errorMessage: processText(errorMessage).children as string,
              helpMessage: processText(helpMessage).children as string,
              state,
              textAreaErrorId,
              textAreaHelpTextId,
            })}
            className={cssClasses?.textarea}
            disabled={disabled}
            id={textAreaId}
            maxLength={maxLength}
            placeholder={placeholder}
            required={required}
            spellCheck={spellCheck}
            style={{ height: height || undefined }}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            {...customAttributes}
          >
            {value}
          </textarea>
        </div>
        <div className={cssClasses?.bottomcontainer} {...customAttributes}>
          <div
            className={cssClasses?.helpmessageerrorcontainer}
            {...customAttributes}
          >
            <ErrorStandAlone
              cssClasses={cssClasses}
              customAttributtes={customAttributes}
              errorAriaLiveType={errorAriaLiveType}
              errorIcon={errorIcon}
              errorMessage={errorMessage}
              id={textAreaErrorId}
              state={state}
            />
            <HelpMessageStandAlone
              cssClasses={cssClasses}
              customAttributtes={customAttributes}
              helpMessage={helpMessage}
              id={textAreaHelpTextId}
            />
          </div>
          <RenderIf condition={!!counterVariant}>
            <TextCount
              additionalClasses={{
                letftext: cssClasses?.counterleft,
                righttext: cssClasses?.counterright,
                text_count: cssClasses?.counter,
              }}
              currentCharacters={value?.length ?? 0}
              id={textAreaTextCountId}
              maxLength={maxLength}
              screenReaderText={screenReaderTextCount}
              variant={counterVariant}
            />
          </RenderIf>
        </div>
      </div>
    );
  },
);
