import { type KeyboardEvent, type MouseEventHandler, forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { ENTER, SPACE } from '@/lib/constants/keyboardKeys/keyboardKeys';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import {
  processIconProp,
  processTextProp,
} from '@/lib/utils/process/processCommonProp';

import type { OptionStandAloneProps } from './types/option';
import type { OptionStateType } from './types/state';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import { isKeyPressed } from '../../lib/utils/keyboard/keyboard';
import { OptionLabelSlice } from './components.ts/optionLabelSlice';
import { getHighlightedIndexes, getState } from './utils/option.utils';

/**
 * Standalone option component for rendering selectable list items.
 *
 * This component renders a single option with label, icon, and visual states (selected, highlighted, disabled).
 * It supports keyboard navigation and click interactions.
 *
 * @example
 * ```tsx
 * <OptionStandAlone
 *   label="Option 1"
 *   selected={true}
 *   onClick={() => {}}
 * />
 * ```
 */
export const OptionStandAlone = forwardRef(
  (
    {
      checkedIcon,
      component,
      componentLink,
      cssClasses,
      disabled: disabledProp,
      extraContent,
      focus,
      hover,
      icon,
      label,
      labelCharsHighlighted,
      multiSelect,
      onBlur,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      role,
      selected,
      sublabel,
      tabIndex,
      url,
      ...props
    }: OptionStandAloneProps,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    const filling =
      !!labelCharsHighlighted && labelCharsHighlighted?.length > 0;
    const state = getState(
      disabledProp,
      focus,
      selected,
      multiSelect,
      hover,
      filling,
    );
    // const stateStyles = props.styles[state];
    const customAttributes = {
      'data-state': state,
    };
    const disabled = state === STATES.DISABLED;
    const handleClickOption: MouseEventHandler<HTMLDivElement> = (event) => {
      if (!disabled) {
        onClick?.(event);
      }
    };
    const customProps = pickCustomAttributes({
      ...props,
      customAttributes,
    });
    const customAttributesProps = pickCustomAttributes(customAttributes);
    const dataTestId = customProps['data-testid'] || 'option';
    const hasCheckedIcon = [
      STATES.MULTIPLE_SELECTED,
      STATES.MULTIPLE_SELECTED_HOVER,
      STATES.SELECTED,
    ].includes(
      state as Extract<
        OptionStateType,
        'multiple_selected' | 'multiple_selected_hover' | 'selected'
      >,
    );
    let _firstNoHighlightedLabel;
    let _highlightedLabel;
    let _lastNoHighlightedLabel;
    if (typeof label === 'string') {
      const { firstHighlightedIndex, lastHighlightedIndex } =
        getHighlightedIndexes(label, labelCharsHighlighted);
      _firstNoHighlightedLabel = label.substring(0, firstHighlightedIndex);
      _highlightedLabel = label.substring(
        firstHighlightedIndex,
        lastHighlightedIndex,
      );
      _lastNoHighlightedLabel = label.substring(lastHighlightedIndex);
    }
    return (
      <CustomComponent
        ref={ref}
        aria-disabled={disabled}
        className={cssClasses?.option}
        {...customProps}
        component={url ? componentLink : (component ?? 'div')}
        data-testid={dataTestId}
        role={role}
        tabIndex={tabIndex}
        url={url}
        onBlur={onBlur}
        onClick={handleClickOption}
        onFocus={onFocus}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          if (!disabled && isKeyPressed(event.key, ENTER.key, SPACE.key)) {
            onClick?.(event);
          }
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...customAttributesProps}
      >
        <div className={cssClasses?.firstrowcontainer}>
          <div
            className={cssClasses?.labeliconcontainer}
            {...customAttributesProps}
          >
            <ElementOrIcon
              className={cssClasses?.icon}
              customAttributes={customAttributes}
              {...processIconProp(icon)}
            />
            {!!processTextProp(sublabel).children && (
              <div
                className={cssClasses?.sublabelcontainer}
                {...customAttributesProps}
              >
                <Text
                  additionalClasses={{
                    text: cssClasses?.sublabel,
                  }}
                  component="span"
                  customAttributes={customAttributes}
                  {...processTextProp(sublabel)}
                />
              </div>
            )}
            <p>
              {typeof label === 'string' ? (
                <>
                  {' '}
                  <OptionLabelSlice
                    component="span"
                    cssClasses={cssClasses?.label}
                    customAttributes={customAttributes}
                    data-testid={`${dataTestId}-first-no-hightlighted-label`}
                  >
                    {_firstNoHighlightedLabel}
                  </OptionLabelSlice>
                  <OptionLabelSlice
                    component="span"
                    cssClasses={`${cssClasses?.label} ${cssClasses?.labelhighlighted}`}
                    customAttributes={customAttributes}
                    data-testid={`${dataTestId}-highlighted-label`}
                  >
                    {_highlightedLabel}
                  </OptionLabelSlice>
                  <OptionLabelSlice
                    component="span"
                    cssClasses={`${cssClasses?.label} ${cssClasses?.labelhighlighted}`}
                    customAttributes={customAttributes}
                    data-testid={`${dataTestId}-last-no-hightlighted-label`}
                  >
                    {_lastNoHighlightedLabel}
                  </OptionLabelSlice>
                </>
              ) : (
                <OptionLabelSlice
                  component="span"
                  cssClasses={cssClasses?.label}
                  customAttributes={customAttributes}
                  data-testid={`${dataTestId}-label`}
                >
                  {label}
                </OptionLabelSlice>
              )}
            </p>
          </div>
          {hasCheckedIcon && (
            <ElementOrIcon
              className={cssClasses?.checkedicon}
              customAttributes={customAttributes}
              {...processIconProp(checkedIcon)}
            />
          )}
        </div>
        {!!extraContent && extraContent}
      </CustomComponent>
    );
  },
);
