import type { AriaRole, MouseEventHandler } from 'react';

import { Button } from '@/components/button/button';
import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { RenderIf } from '@/lib/components/renderIf/renderIf';
import { useUtilsProvider } from '@/lib/provider/utilsProvider/utilsProvider';

import type { SelectorProps } from './types/selector';

export const Selector = ({
  configAccesibility,
  configCalendar,
  cssClasses,
  currentDate,
  customBackText,
  maxDate,
  minDate,
  onDaySelectorClick,
  onLeftIconClick,
  onMonthSelectorClick,
  onRightIconClick,
  onYearSelectorClick,
  setCurrentDate,
  setShowDaySelector,
  setShowMonthSelector,
  setShowYearSelector,
  showDaySelector,
  showMonthSelector,
  showYearSelector,
  useDaySelector = false,
}: SelectorProps): JSX.Element => {
  const { dateHelpers, formatDate } = useUtilsProvider();
  const {
    leftArrowIcon,
    rightArrowIcon,
    sizeSelectorButton,
    variantSelectorButton,
  } = configCalendar;
  const onChangeCurrentDate = (newDate: Date) => {
    setCurrentDate(newDate);
  };
  const isDaySelector = useDaySelector;
  const showCustomSelector =
    (showMonthSelector || showYearSelector) && !isDaySelector;
  const monthWithCapitalLetter = (month: string) => {
    return month.charAt(0).toUpperCase() + month.slice(1);
  };
  const iconArrowDisabled = (limitDate: Date) => {
    return (
      !showCustomSelector &&
      limitDate.getMonth() === currentDate.getMonth() &&
      limitDate.getFullYear() === currentDate.getFullYear()
    );
  };
  const renderButtonSelector = (
    type: string,
    showSelector: boolean,
    ariaLabel?: string,
    role?: AriaRole,
  ) => {
    const selectorToShow = () => {
      switch (type) {
        case 'day':
          return currentDate.getDate();
        case 'month':
          return monthWithCapitalLetter(
            formatDate(currentDate, {
              month: 'long',
            }),
          );
        case 'year':
          return currentDate.getFullYear();
        default:
          return null;
      }
    };
    const handleClickButtonSelector: MouseEventHandler<HTMLButtonElement> = (
      event,
    ) => {
      setShowDaySelector(type === 'day');
      setShowMonthSelector(type === 'month');
      setShowYearSelector(type === 'year');
      if (type === 'day') {
        onDaySelectorClick?.(selectorToShow()?.toString(), event);
      } else if (type === 'month') {
        onMonthSelectorClick?.(selectorToShow()?.toString(), event);
      } else {
        onYearSelectorClick?.(selectorToShow()?.toString(), event);
      }
    };
    return (
      <Button
        additionalSizeClasses={
          !sizeSelectorButton ? cssClasses?.button_size : undefined
        }
        additionalVariantClasses={
          !variantSelectorButton ? cssClasses?.button_variant : undefined
        }
        aria-label={ariaLabel}
        disabled={showSelector}
        role={role}
        size={sizeSelectorButton}
        variant={variantSelectorButton}
        onClick={handleClickButtonSelector}
      >
        <Text component="span">{selectorToShow()}</Text>
      </Button>
    );
  };
  const onClickLeftIcon = () => {
    const auxCurrentDate = new Date(currentDate);
    if (!showCustomSelector) {
      onChangeCurrentDate(dateHelpers.getSubMonths(auxCurrentDate, 1));
    } else {
      setShowYearSelector(false);
    }
    setShowMonthSelector(false);
    setShowDaySelector(true);
  };
  const onClickRightIcon = () => {
    const auxCurrentDate = new Date(currentDate);
    onChangeCurrentDate(dateHelpers.getAddMonths(auxCurrentDate, 1));
  };
  const handleOnClickLeftIcon: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    onClickLeftIcon();
    leftArrowIcon.onClick?.(event);
    onLeftIconClick?.(event);
  };
  const handleOnClickRightIcon: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    onClickRightIcon();
    rightArrowIcon.onClick?.(event);
    onRightIconClick?.(event);
  };
  const customAttributes = {
    'data-state': iconArrowDisabled(minDate),
  };
  return (
    <div
      className={cssClasses?.selectorcontainer}
      style={{
        justifyContent: isDaySelector ? 'center' : 'space-between',
      }}
    >
      <button
        aria-label={showCustomSelector ? '' : leftArrowIcon['aria-label']}
        className={cssClasses?.selectoriconandbacktextcontainer}
        data-testid="previous-button"
        type="button"
        onClick={handleOnClickLeftIcon}
      >
        <ElementOrIcon
          className={cssClasses?.leftarrow}
          customAttributes={customAttributes}
          disabled={iconArrowDisabled(minDate)}
          {...leftArrowIcon}
          aria-label={undefined}
        />
        <RenderIf condition={showCustomSelector}>
          <Text
            additionalClasses={{
              text: cssClasses?.backtext,
            }}
            component="span"
          >
            {customBackText}
          </Text>
        </RenderIf>
      </button>
      <div className={cssClasses?.selectoroptionscontainer}>
        <RenderIf condition={isDaySelector}>
          {renderButtonSelector(
            'day',
            showDaySelector,
            configAccesibility?.daySelectorAriaLabel,
            configAccesibility?.daySelectorRole,
          )}
        </RenderIf>
        {renderButtonSelector(
          'month',
          showMonthSelector,
          configAccesibility?.monthSelectorAriaLabel,
          configAccesibility?.monthSelectorRole,
        )}
        {renderButtonSelector(
          'year',
          showYearSelector,
          configAccesibility?.yearSelectorAriaLabel,
          configAccesibility?.yearSelectorRole,
        )}
      </div>
      <span
        style={{
          visibility: showCustomSelector ? 'hidden' : 'visible',
        }}
      >
        <ElementOrIcon
          className={cssClasses?.rightarrow}
          customAttributes={customAttributes}
          data-testid="next-button"
          disabled={iconArrowDisabled(maxDate)}
          onClick={handleOnClickRightIcon}
          {...rightArrowIcon}
        />
      </span>
    </div>
  );
};
