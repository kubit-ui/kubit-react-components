import { useId } from 'react';

import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import {
  processIconProp,
  processTextProp,
} from '@/lib/utils/process/processCommonProp';

import type { RadioButtonStandAloneProps } from './types/radioButton';

import { buildAriaLabelledBy } from './utils/aria.utils';

const CURSOR_DEFAULT = 'default';
const CURSOR_POINTER = 'pointer';

/**
 * Standalone radio button component for rendering selectable radio inputs.
 *
 * This component renders a radio button with label, optional legend, error message,
 * and custom icon states. It handles accessibility attributes and visual states.
 *
 * @example
 * ```tsx
 * <RadioButtonStandAlone
 *   label={{ content: "Option A" }}
 *   checked={true}
 *   onChange={() => {}}
 * />
 * ```
 */

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
  const reactId = useId();
  let inputId = `radiobutton-${reactId.replace(/:/g, '')}`;

  inputId = id ?? inputId;

  const descriptionId =
    processTextProp(subTitle).id && `${inputId}__description`;

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
        {!!label?.content && (
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
        )}
        {!!processTextProp(subTitle).children &&
          (typeof processTextProp(subTitle) === 'string' ? (
            <Text
              additionalClasses={{
                text: cssClasses?.sublabel,
              }}
              {...processTextProp(subTitle)}
              id={descriptionId}
            />
          ) : (
            <div id={descriptionId}>{processTextProp(subTitle).children}</div>
          ))}
        {!!(error && errorMessage) && (
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
              {!!errorIcon && (
                <span
                  {...customProps}
                  className={cssClasses?.errormessageiconcontainer}
                >
                  <ElementOrIcon
                    className={cssClasses?.errormessageicon}
                    customAttributes={customAttributes}
                    {...processIconProp(errorIcon)}
                  />
                </span>
              )}
              {errorMessage}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};
