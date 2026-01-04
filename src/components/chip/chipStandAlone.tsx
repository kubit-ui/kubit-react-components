import { forwardRef, isValidElement } from 'react';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import {
  processIconProp,
  processTextProp,
} from '@/lib/utils/process/processCommonProp';

import type { ChipStandAloneProps } from './types/chip';

/**
 * Standalone chip component for displaying a customizable label, tag, or range.
 *
 * This component renders a chip with optional icons, close button, error state, and flexible content.
 * It is useful for displaying tags, filters, categories, or interactive pills in lists and forms.
 * Supports range display, custom icons, and error feedback.
 *
 * This component accepts a generic type parameter `<Variant extends string>` to allow for custom variant values,
 * enabling flexible theming and styling.
 *
 * @example
 * ```tsx
 * <ChipStandAlone label={{ content: "Active" }} />
 *
 * // With a custom variant type:
 * type MyVariant = "primary" | "secondary";
 * <ChipStandAlone<MyVariant> label={{ content: "Primary" }} variant="primary" />
 * ```
 */
export const ChipStandAlone = forwardRef(
  (
    {
      closeIcon,
      cssClasses,
      deleteText = 'Delete',
      errorIcon,
      errorMessage = { content: 'Error message' },
      label,
      leftIcon,
      range,
      rangeIcon,
      rangeSeparator = { content: 'to' },
      state,
      ...props
    }: ChipStandAloneProps,
    ref: React.ForwardedRef<HTMLSpanElement>,
  ): JSX.Element => {
    const customAttributes = { 'data-state': state };
    const customProps = pickCustomAttributes(props);

    const buildLabel = () => {
      if (typeof closeIcon !== 'string' && closeIcon?.altText) {
        return closeIcon.altText;
      }
      return deleteText;
    };

    const buildRangeOrLabel = () => {
      if (!range) {
        return (
          <Text
            additionalClasses={{ text: cssClasses?.label }}
            component="span"
            {...processTextProp(label)}
            customAttributes={customAttributes}
          />
        );
      }

      return (
        <span>
          {range.map((rangeItem, index) => {
            const isNotLastElement = index !== range.length - 1;
            return (
              <span
                key={`option-${rangeItem.key ?? rangeItem.label}`}
                className={cssClasses?.rangeitemwrapper}
              >
                <Text
                  additionalClasses={{ text: cssClasses?.rangeitemtext }}
                  component="span"
                  customAttributes={customAttributes}
                >
                  {rangeItem.label}
                </Text>
                {isNotLastElement &&
                  (rangeIcon?.icon ? (
                    <ElementOrIcon
                      altText={
                        typeof label === 'string' || isValidElement(label)
                          ? (processTextProp(rangeSeparator).children as string) ||
                            ''
                          : (processTextProp(rangeSeparator).children as string) ||
                            ''
                      }
                      className={cssClasses?.rangeicon}
                      {...processIconProp(rangeIcon)}
                      customAttributes={customAttributes}
                    />
                  ) : (
                    <Text
                      additionalClasses={{
                        text: cssClasses?.rangeitemseparator,
                      }}
                      component="span"
                      customAttributes={customAttributes}
                      {...processTextProp(rangeSeparator)}
                    />
                  ))}
              </span>
            );
          })}
        </span>
      );
    };

    return (
      <>
        <span
          ref={ref}
          aria-disabled={state === STATES.DISABLED}
          aria-hidden={state === STATES.DISABLED}
          className={cssClasses?.chip}
          data-testid="chip"
          {...customProps}
          {...customAttributes}
        >
          {!range && leftIcon && (
            <ElementOrIcon
              className={cssClasses?.lefticon}
              {...processIconProp(leftIcon)}
            />
          )}

          {buildRangeOrLabel()}

          <ElementOrIcon
            className={cssClasses?.closeicon}
            disabled={state === STATES.DISABLED}
            {...processIconProp(closeIcon)}
            altText={buildLabel()}
            customAttributes={customAttributes}
          />
        </span>

        {state === STATES.ERROR && (
          <span aria-live="polite" className={cssClasses?.errorcontainer}>
            <ElementOrIcon
              className={cssClasses?.erroricon}
              {...processIconProp(errorIcon)}
            />
            <Text
              additionalClasses={{ text: cssClasses?.errormessage }}
              component="span"
              customAttributes={customAttributes}
              {...processTextProp(errorMessage)}
            />
          </span>
        )}
      </>
    );
  },
);
