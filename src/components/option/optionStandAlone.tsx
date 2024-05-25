/* eslint-disable complexity */

/* eslint-disable react/display-name */
import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text, TextComponentType, TextDecorationType } from '@/components/text';
import { Toggle } from '@/components/toggle';
import { isKeyEnterPressed, isKeySpacePressed } from '@/utils';
import { pickAriaProps } from '@/utils/aria/aria';

import { OptionLabelSlice } from './components.ts';
import {
  OptionDivStyled,
  OptionFirstRowWrapperStyled,
  OptionLabelHighlightedLabelWrapper,
  OptionLabelIconWrapper,
  OptionStyled,
  OptionSublabelContainer,
} from './option.styled';
import { IOptionStandAlone, OptionStateType } from './types';
import { getHighlightedIndexes, getState } from './utils';

const OptionStandAlone = React.forwardRef(
  (props: IOptionStandAlone, ref: React.ForwardedRef<HTMLElement | undefined>) => {
    const ariaProps = pickAriaProps(props);
    const filling = !!props.labelCharsHighlighted && props.labelCharsHighlighted?.length > 0;
    const state = getState(props.disabled, props.selected, props.multiSelect, props.hover, filling);
    const stateStyles = props.styles[state];
    const disabled = state === OptionStateType.DISABLED;

    const handleClickOption: React.MouseEventHandler<HTMLDivElement> = event => {
      if (!disabled) {
        props.onClick?.(event);
      }
    };

    const hasCheckedIcon = [
      OptionStateType.MULTIPLE_SELECTED,
      OptionStateType.MULTIPLE_SELECTED_HOVER,
    ].includes(state);

    const { firstHighlightedIndex, lastHighlightedIndex } = getHighlightedIndexes(
      props.label,
      props.labelCharsHighlighted
    );
    const _firstNoHighlightedLabel = props.label.substring(0, firstHighlightedIndex);
    const _highlightedLabel = props.label.substring(firstHighlightedIndex, lastHighlightedIndex);
    const _lastNoHighlightedLabel = props.label.substring(lastHighlightedIndex);
    return (
      <OptionStyled
        ref={ref}
        aria-disabled={disabled}
        {...ariaProps}
        $stateStyles={stateStyles}
        $styles={props.styles}
        as={props.url ? props.componentLink : props.as ?? OptionDivStyled}
        data-testid={props.dataTestId}
        role={props.role}
        tabIndex={props.tabIndex}
        url={props.url}
        onClick={handleClickOption}
        onFocus={props.onFocus}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (!disabled && (isKeyEnterPressed(event.key) || isKeySpacePressed(event.key))) {
            props.onClick?.(event);
          }
        }}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <OptionFirstRowWrapperStyled>
          <OptionLabelIconWrapper stateStyles={stateStyles}>
            <ElementOrIcon
              color={stateStyles?.icon?.color}
              dataTestId={`${props.dataTestId}Icon`}
              height={stateStyles?.icon?.height}
              width={stateStyles?.icon?.width}
              {...props.icon}
            />
            {props.sublabel?.content && (
              <OptionSublabelContainer stateStyles={stateStyles}>
                <Text
                  color={stateStyles?.sublabel?.color}
                  component={TextComponentType.SPAN}
                  dataTestId={`${props.dataTestId}Sublabel`}
                  decoration={stateStyles?.sublabel?.text_decoration as TextDecorationType}
                  variant={stateStyles?.sublabel?.font_variant}
                  weight={stateStyles?.sublabel?.font_weight}
                  {...props.sublabel}
                >
                  {props.sublabel?.content}
                </Text>
              </OptionSublabelContainer>
            )}
            <OptionLabelHighlightedLabelWrapper>
              <OptionLabelSlice
                color={stateStyles?.label?.color}
                component={TextComponentType.SPAN}
                dataTestId={`${props.dataTestId}FirstNoHightlightedLabel`}
                decoration={stateStyles?.label?.text_decoration as TextDecorationType}
                variant={stateStyles?.label?.font_variant}
                weight={stateStyles?.label?.font_weight}
              >
                {_firstNoHighlightedLabel}
              </OptionLabelSlice>
              <OptionLabelSlice
                color={stateStyles?.label?.color}
                component={TextComponentType.SPAN}
                dataTestId={`${props.dataTestId}HighlightedLabel`}
                decoration={stateStyles?.labelHightlighted?.text_decoration as TextDecorationType}
                variant={stateStyles?.labelHightlighted?.font_variant}
                weight={stateStyles?.labelHightlighted?.font_weight}
              >
                {_highlightedLabel}
              </OptionLabelSlice>
              <OptionLabelSlice
                color={stateStyles?.label?.color}
                component={TextComponentType.SPAN}
                dataTestId={`${props.dataTestId}LastNoHightlightedLabel`}
                decoration={stateStyles?.label?.text_decoration as TextDecorationType}
                variant={stateStyles?.label?.font_variant}
                weight={stateStyles?.label?.font_weight}
              >
                {_lastNoHighlightedLabel}
              </OptionLabelSlice>
            </OptionLabelHighlightedLabelWrapper>
          </OptionLabelIconWrapper>
          {hasCheckedIcon && (
            <ElementOrIcon
              color={stateStyles?.checkedIcon?.color}
              dataTestId={`${props.dataTestId}IconChecked`}
              height={stateStyles?.checkedIcon?.height}
              width={stateStyles?.checkedIcon?.width}
              {...props.checkedIcon}
            />
          )}
        </OptionFirstRowWrapperStyled>
        {props.toggle && <Toggle {...props.toggle} />}
        {props.extraContent && props.extraContent}
      </OptionStyled>
    );
  }
);

/**
 * @description
 * Option component is used to render an option.
 * @param {React.PropsWithChildren<IOptionStandAlone>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Option label="Option 1" />
 */
export { OptionStandAlone };
