import * as React from 'react';

import { Button } from '@/components/button/button';
import { ButtonStateType } from '@/components/button/types/state';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useUtilsProvider } from '@/provider';

import { CalendarElementType } from '../types';
// styles
import {
  IconAndBackTextStyled,
  OptionsStyled,
  RightIconStyled,
  SelectorStyled,
} from './selector.styled';
import { ISelector } from './types/selector';

export const Selector = (props: ISelector): JSX.Element => {
  const { dateHelpers, formatDate } = useUtilsProvider();

  const { leftArrowIcon, rightArrowIcon, variantSelectorButton, sizeSelectorButton } =
    props.configCalendar;

  const onChangeCurrentDate = (newDate: Date) => {
    props.setCurrentDate(newDate);
  };

  const isDaySelector = props.styles?.useDaySelector;

  const showCustomSelector = (props.showMonthSelector || props.showYearSelector) && !isDaySelector;

  const monthWithCapitalLetter = (month: string) => {
    return month.charAt(0).toUpperCase() + month.slice(1);
  };

  const iconArrowDisabled = (limitDate: Date) => {
    return (
      !showCustomSelector &&
      limitDate.getMonth() === props.currentDate.getMonth() &&
      limitDate.getFullYear() === props.currentDate.getFullYear()
    );
  };

  const renderButtonSelector = (
    type: string,
    showSelector: boolean,
    ariaLabel?: string,
    role?: string
  ) => {
    const buttonState = showSelector ? ButtonStateType.DISABLED : ButtonStateType.DEFAULT;

    const selectorToShow = () => {
      switch (type) {
        case CalendarElementType.DAY:
          return props.currentDate.getDate();
        case CalendarElementType.MONTH:
          return monthWithCapitalLetter(formatDate(props.currentDate, { month: 'long' }));
        case CalendarElementType.YEAR:
          return props.currentDate.getFullYear();
        default:
          return null;
      }
    };

    const handleClickButtonSelector: React.MouseEventHandler<HTMLButtonElement> = event => {
      props.setShowDaySelector(type === CalendarElementType.DAY);
      props.setShowMonthSelector(type === CalendarElementType.MONTH);
      props.setShowYearSelector(type === CalendarElementType.YEAR);
      if (type === CalendarElementType.DAY) {
        props.onDaySelectorClick?.(selectorToShow()?.toString(), event);
      } else if (type === CalendarElementType.MONTH) {
        props.onMonthSelectorClick?.(selectorToShow()?.toString(), event);
      } else {
        props.onYearSelectorClick?.(selectorToShow()?.toString(), event);
      }
    };
    return (
      <Button
        aria-label={ariaLabel}
        disabled={showSelector}
        role={role}
        size={sizeSelectorButton || props.styles?.selectorOptions?.sizeSelectorButton}
        variant={variantSelectorButton || props.styles?.selectorOptions?.variantSelectorButton}
        onClick={handleClickButtonSelector}
      >
        <Text
          component={TextComponentType.SPAN}
          customTypography={props.styles?.selectorOptions?.[buttonState]}
        >
          {selectorToShow()}
        </Text>
      </Button>
    );
  };

  const onClickLeftIcon = () => {
    const auxCurrentDate = new Date(props.currentDate);
    !showCustomSelector
      ? onChangeCurrentDate(dateHelpers.getSubMonths(auxCurrentDate, 1))
      : props.setShowYearSelector(false);
    props.setShowMonthSelector(false);
    props.setShowDaySelector(true);
  };

  const onClickRightIcon = () => {
    const auxCurrentDate = new Date(props.currentDate);
    onChangeCurrentDate(dateHelpers.getAddMonths(auxCurrentDate, 1));
  };

  const handleOnClickLeftIcon: React.MouseEventHandler<HTMLButtonElement> = event => {
    onClickLeftIcon();
    leftArrowIcon.onClick?.(event);
    props.onLeftIconClick?.(event);
  };

  const handleOnClickRightIcon: React.MouseEventHandler<HTMLButtonElement> = event => {
    onClickRightIcon();
    rightArrowIcon.onClick?.(event);
    props.onRightIconClick?.(event);
  };

  return (
    <SelectorStyled isDaySelector={isDaySelector} styles={props.styles}>
      <IconAndBackTextStyled styles={props.styles}>
        <ElementOrIcon
          color={iconArrowDisabled(props.minDate) ? props.styles?.colorArrowDisabled : undefined}
          customIconStyles={props.styles?.leftArrow}
          disabled={iconArrowDisabled(props.minDate)}
          {...leftArrowIcon}
          aria-label={
            showCustomSelector
              ? props.configAccesibility?.backToMonthAriaLabel
              : leftArrowIcon['aria-label']
          }
          onClick={handleOnClickLeftIcon}
        />
        {showCustomSelector && (
          <Text component={TextComponentType.PARAGRAPH} customTypography={props.styles?.backText}>
            {'Back'}
          </Text>
        )}
      </IconAndBackTextStyled>
      <OptionsStyled styles={props.styles}>
        {isDaySelector &&
          renderButtonSelector(
            CalendarElementType.DAY,
            props.showDaySelector,
            props.configAccesibility?.daySelectorAriaLabel,
            props.configAccesibility?.daySelectorRole
          )}
        {renderButtonSelector(
          CalendarElementType.MONTH,
          props.showMonthSelector,
          props.configAccesibility?.monthSelectorAriaLabel,
          props.configAccesibility?.monthSelectorRole
        )}
        {renderButtonSelector(
          CalendarElementType.YEAR,
          props.showYearSelector,
          props.configAccesibility?.yearSelectorAriaLabel,
          props.configAccesibility?.yearSelectorRole
        )}
      </OptionsStyled>
      <RightIconStyled showCustomSelector={showCustomSelector}>
        <ElementOrIcon
          color={iconArrowDisabled(props.maxDate) ? props.styles?.colorArrowDisabled : undefined}
          customIconStyles={props.styles?.rightArrow}
          disabled={iconArrowDisabled(props.maxDate)}
          {...rightArrowIcon}
          onClick={handleOnClickRightIcon}
        />
      </RightIconStyled>
    </SelectorStyled>
  );
};
