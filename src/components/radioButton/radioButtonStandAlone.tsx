import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { RenderIf } from '@/components/renderIf/renderIf';
import { Text } from '@/components/text/text';
import { useId } from '@/lib/hooks/useId/useId';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type { RadioButtonStandAloneProps } from './types/radioButton';

import { ElementOrIcon } from './../elementOrIcon/elementOrIcon';
import { buildAriaLabelledBy } from './utils/aria.utils';

const CURSOR_DEFAULT = 'default';
const CURSOR_POINTER = 'pointer';

export const RadioButtonStandAlone = ({
  altVariant = false,
  checked,
  cssClasses,
  disabled,
  error,
  errorAriaLiveType,
  errorIcon,
  errorMessage,
  id,
  label,
  lastChild,
  name,
  onBlur,
  onChange,
  screenReaderId,
  state,
  subTitle,
  tabIndex,
  value,
  ...props
}: RadioButtonStandAloneProps): JSX.Element => {
  let inputId = useId('RadioButton');

  inputId = id ?? inputId;

  const descriptionId = processText(subTitle).id && `${inputId}__description`;

  const errorMessageId = errorMessage && `${inputId}__error`;

  const customAttributes = {
    'data-state': state,
  };

  const customProps = pickCustomAttributes(customAttributes);

  const dataTestId = props['data-testid'] ?? 'radio-button';

  return (
    <div
      className={cssClasses?.rowcontainer}
      data-testid={dataTestId}
      {...customProps}
      style={{
        display: label ? 'grid' : 'block',
        marginBottom: lastChild ? 0 : undefined,
      }}
    >
      <div {...customProps} className={cssClasses?.radiobuttoncontainer}>
        <input
          aria-describedby={buildAriaLabelledBy({
            descriptionId,
            error: error,
            errorMessage: errorMessage,
            errorMessageId,
            screenReaderId: screenReaderId,
          })}
          aria-hidden={props['aria-hidden']}
          aria-label={props['aria-label']}
          aria-labelledby={props['aria-labelledby']}
          checked={checked}
          className={classNames(cssClasses?.radio_button, {
            ['global-focus-visible']: !!altVariant,
          })}
          data-testid={`${dataTestId}-input`}
          disabled={disabled}
          id={inputId}
          name={name}
          tabIndex={tabIndex}
          type="radio"
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          {...customProps}
        />
      </div>
      <div className={cssClasses?.infocontainer}>
        <RenderIf condition={!!label?.content}>
          <div className={cssClasses?.labelcontainer}>
            <Label
              cursor={disabled ? CURSOR_DEFAULT : CURSOR_POINTER}
              customAttributes={customAttributes}
              inputId={inputId}
              textCssClasses={classNames(cssClasses?.label, {
                [`${cssClasses?.speciallabel}`]: !!subTitle,
              })}
              {...label}
            >
              {label?.content}
            </Label>
          </div>
        </RenderIf>
        <RenderIf condition={!!processText(subTitle).children}>
          {typeof processText(subTitle) === 'string' ? (
            <Text
              additionalClasses={{
                text: cssClasses?.sublabel,
              }}
              {...processText(subTitle)}
              id={descriptionId}
            />
          ) : (
            <div id={descriptionId}>{processText(subTitle).children}</div>
          )}
        </RenderIf>
        <RenderIf condition={!!(error && errorMessage)}>
          <div
            aria-live={errorAriaLiveType}
            className={cssClasses?.errormessagecontainer}
            id={errorMessageId}
            {...customProps}
          >
            <Text
              additionalClasses={{
                text: cssClasses?.errormessage,
              }}
              customAttributes={customAttributes}
            >
              <RenderIf condition={!!errorIcon}>
                <span
                  {...customProps}
                  className={cssClasses?.errormessageiconcontainer}
                >
                  <ElementOrIcon
                    className={cssClasses?.errormessageicon}
                    customAttributes={customAttributes}
                    {...errorIcon}
                  />
                </span>
              </RenderIf>
              {errorMessage}
            </Text>
          </div>
        </RenderIf>
      </div>
    </div>
  );
};
