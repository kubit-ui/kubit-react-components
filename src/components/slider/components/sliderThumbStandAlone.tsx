import * as React from 'react';

import { ElementOrIcon, IElementOrIcon } from '@/components/elementOrIcon';
import { Tooltip } from '@/components/tooltip';
import { useMediaDevice } from '@/hooks';
import { ROLES } from '@/types';

import { SliderBaseStylesType, SliderStateType, SliderTooltipType } from '../types';
import { isTooltipVisible } from '../utils';
import { StyledThumb, StyledTooltipThumb } from './sliderThumbStandAlone.styled';

interface ISliderThumbStandAlone {
  styles: SliderBaseStylesType;
  state: SliderStateType;
  style?: React.CSSProperties;
  rightThumb?: boolean;
  disabled: boolean;
  pressed: boolean;
  hover: boolean;
  max: number;
  min: number;
  value: number;
  tooltip?: SliderTooltipType;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onTouchStart?: () => void;
  onFocus?: () => void;
  onKeyDown: React.KeyboardEventHandler<HTMLElement>;
  icon?: IElementOrIcon;
  ariaLabel?: string;
  ariaLabelBy?: string;
  ariaDescribedBy?: string;
  dataTestId?: string;
}

/**
 * @description
 * SliderThumbStandAlone component is used to display a thumb for the slider.
 */
export const SliderThumbStandAlone = ({
  styles,
  style,
  state,
  rightThumb,
  disabled,
  pressed,
  hover,
  max,
  min,
  value,
  tooltip,
  onMouseOver,
  onMouseOut,
  onTouchStart,
  onFocus,
  onKeyDown,
  icon,
  ariaLabel,
  ariaLabelBy,
  ariaDescribedBy,
  dataTestId,
}: ISliderThumbStandAlone): JSX.Element | null => {
  const device = useMediaDevice();

  if (!isTooltipVisible(tooltip, pressed, device) || !styles.tooltip?.variant) {
    return (
      <StyledThumb
        aria-describedby={ariaDescribedBy}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelBy}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        data-disabled={disabled}
        data-hover={hover}
        data-pressed={pressed}
        data-testid={dataTestId}
        rightThumb={rightThumb}
        role={ROLES.SLIDER}
        style={style}
        styles={styles}
        tabIndex={0}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onTouchStart={onTouchStart}
      >
        <ElementOrIcon
          customIconStyles={styles.states?.[state]?.[rightThumb ? 'rightThumbIcon' : 'thumbIcon']}
          {...icon}
        />
      </StyledThumb>
    );
  }
  return (
    <StyledThumb
      data-disabled={disabled}
      data-hover={hover}
      data-pressed={pressed}
      rightThumb={rightThumb}
      role={ROLES.PRESENTATION}
      style={style}
      styles={styles}
    >
      <Tooltip
        align={styles.tooltip?.align}
        childrenAsButton={false}
        closeIcon={
          tooltip?.closeIcon
            ? {
                'icon': tooltip.closeIcon,
                'aria-label': tooltip.closeIconAriaLabel,
                'color': tooltip.closeIconColor,
              }
            : undefined
        }
        content={{ content: tooltip?.content }}
        title={{ content: tooltip?.title }}
        tooltipAsModal={false}
        variant={styles.tooltip.variant}
      >
        <StyledTooltipThumb
          aria-describedby={ariaDescribedBy}
          aria-disabled={disabled}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelBy}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={value}
          data-disabled={disabled}
          data-hover={hover}
          data-pressed={pressed}
          data-testid={dataTestId}
          role={ROLES.SLIDER}
          styles={styles}
          tabIndex={0}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          onTouchStart={onTouchStart}
        >
          <ElementOrIcon
            customIconStyles={styles.states?.[state]?.[rightThumb ? 'rightThumbIcon' : 'thumbIcon']}
            {...icon}
          />
        </StyledTooltipThumb>
      </Tooltip>
    </StyledThumb>
  );
};
