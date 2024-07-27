import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { AriaLiveOptionType } from '@/types/ariaLiveOption';

import {
  ChipStyled,
  ErrorStyled,
  RangeContainerStyled,
  RangeItemWrapperStyled,
} from './chip.styled';
import { ChipStateType, IChipStandAlone } from './types';

const ChipStandAloneComponent = (
  {
    styles,
    dataTestId,
    range,
    rangeIcon,
    state,
    closeIcon,
    leftIcon,
    errorIcon,
    errorMessage = { content: 'Error message' },
    rangeSeparator = { content: 'to' },
    deleteText = 'Delete',
    ...props
  }: IChipStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const buildLabel = () => {
    if (closeIcon?.altText) {
      return closeIcon.altText;
    }

    if (!range) {
      return `${deleteText} ${props.label?.content}`;
    }

    return `${deleteText} ${range.map(item => item.label).join(` ${rangeSeparator} `)}`;
  };

  const controlCapitalLetters = (label: string) => {
    return label.charAt(0) + label.slice(1).toLowerCase();
  };

  const buildRangeOrLabel = () => {
    if (!range) {
      return (
        <Text component={TextComponentType.SPAN} customTypography={styles?.label} {...props.label}>
          {props.label?.content && controlCapitalLetters(props.label.content)}
        </Text>
      );
    }

    return (
      <RangeContainerStyled>
        {range.map((rangeItem, index) => {
          const isNotLastElement = index !== range.length - 1;

          return (
            <RangeItemWrapperStyled
              key={`option-${rangeItem.key ? rangeItem.key : rangeItem.label}`}
              styles={styles}
            >
              <Text component={TextComponentType.SPAN} customTypography={styles?.rangeItemText}>
                {controlCapitalLetters(rangeItem.label)}
              </Text>
              {isNotLastElement &&
                (rangeIcon?.icon ? (
                  <ElementOrIcon
                    altText={rangeSeparator.content}
                    customIconStyles={styles?.rangeIcon}
                    {...rangeIcon}
                  />
                ) : (
                  <Text
                    component={TextComponentType.SPAN}
                    customTypography={styles?.rangeItemSeparator}
                    {...rangeSeparator}
                  >
                    {rangeSeparator.content}
                  </Text>
                ))}
            </RangeItemWrapperStyled>
          );
        })}
      </RangeContainerStyled>
    );
  };

  return (
    <>
      <ChipStyled
        ref={ref}
        aria-disabled={state === ChipStateType.DISABLED}
        aria-hidden={state === ChipStateType.DISABLED}
        data-testid={dataTestId}
        styles={styles}
      >
        {!range && leftIcon && <ElementOrIcon customIconStyles={styles?.leftIcon} {...leftIcon} />}
        {buildRangeOrLabel()}
        {closeIcon && (
          <ElementOrIcon
            customIconStyles={styles?.closeIcon}
            disabled={state === ChipStateType.DISABLED}
            {...closeIcon}
            altText={`${buildLabel()}`}
          />
        )}
      </ChipStyled>
      <ErrorStyled aria-live={AriaLiveOptionType.POLITE} styles={styles}>
        {state === ChipStateType.ERROR && !!errorIcon && (
          <>
            <ElementOrIcon customIconStyles={styles?.errorIcon} {...errorIcon} />
            <Text
              component={TextComponentType.SPAN}
              customTypography={styles?.errorMessage}
              {...errorMessage}
            >
              {errorMessage.content}
            </Text>
          </>
        )}
      </ErrorStyled>
    </>
  );
};

/**
 * @description
 * Chip component is a selector.
 * @param {React.PropsWithChildren<IChipControlled<V>>} props
 * @returns {JSX.Element}
 * @constructor
 */
export const ChipStandAlone = React.forwardRef(ChipStandAloneComponent);
