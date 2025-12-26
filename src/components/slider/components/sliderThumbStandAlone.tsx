import type { CSSProperties, KeyboardEventHandler } from 'react';

import { TooltipUnControlled as Tooltip } from '@/components/tooltip/tooltipUnControlled';
import { useMediaDevice } from '@/lib/hooks/useMediaDevice/useMediaDevice';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
import type { SliderCssClasses, SliderTooltipProps } from '../types/slider';
import { type SliderStateType } from '../types/state';
import { isTooltipVisible } from '../utils/ui.utils';

interface SliderThumbStandAloneProps extends DataAttributes {
  state: SliderStateType;
  style?: CSSProperties;
  rightThumb?: boolean;
  disabled: boolean;
  pressed: boolean;
  hover: boolean;
  max: number;
  min: number;
  value: number;
  tooltip?: SliderTooltipProps;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onTouchStart?: () => void;
  onFocus?: () => void;
  onKeyDown: KeyboardEventHandler<HTMLElement>;
  icon?: ElementOrIconProps;
  ariaLabel?: string;
  ariaLabelBy?: string;
  ariaDescribedBy?: string;
  cssClasses?: SliderCssClasses;
  customAttributes?: Record<string, string>;
  tooltipAlign?: string;
}

/**
 * @description
 * SliderThumbStandAlone component is used to display a thumb for the slider.
 */
export const SliderThumbStandAlone = ({
  ariaDescribedBy,
  ariaLabel,
  ariaLabelBy,
  cssClasses,
  customAttributes,
  disabled,
  hover,
  icon,
  max,
  min,
  onFocus,
  onKeyDown,
  onMouseOut,
  onMouseOver,
  onTouchStart,
  pressed,
  rightThumb,
  style,
  tooltip,
  tooltipAlign = 'top',
  value,
  ...props
}: SliderThumbStandAloneProps): JSX.Element | null => {
  const device = useMediaDevice();

  const customProps = pickCustomAttributes({ ...props, ...customAttributes });
  const customAttributesProps = pickCustomAttributes(customAttributes);

  if (!isTooltipVisible(tooltip, pressed, device) || !cssClasses?.tooltip) {
    return (
      <div
        aria-describedby={ariaDescribedBy}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelBy}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        className={cssClasses?.thumb}
        data-disabled={disabled}
        data-hover={hover}
        data-position={rightThumb ? 'right' : undefined}
        data-pressed={pressed}
        role="slider"
        style={style}
        tabIndex={0}
        onBlur={onMouseOut}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onTouchStart={onTouchStart}
        {...customProps}
      >
        <ElementOrIcon className={cssClasses?.thumbicon} {...icon} />
      </div>
    );
  }
  return (
    <div
      data-disabled={disabled}
      data-hover={hover}
      data-pressed={pressed}
      role="presentation"
      style={style}
      {...customProps}
      className={cssClasses?.thumb}
    >
      <Tooltip
        additionalClasses={cssClasses?.tooltip}
        align={tooltipAlign}
        childrenAsButton={false}
        closeIcon={
          tooltip?.closeIcon
            ? {
                'aria-label': tooltip.closeIconAriaLabel,
                color: tooltip.closeIconColor,
                icon: tooltip.closeIcon,
              }
            : undefined
        }
        content={{ content: tooltip?.content }}
        title={{ content: tooltip?.title }}
        tooltipAsModal={false}
      >
        <div
          aria-describedby={ariaDescribedBy}
          aria-disabled={disabled}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelBy}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={value}
          className={cssClasses.innerthumbtooltip}
          data-disabled={disabled}
          data-hover={hover}
          data-pressed={pressed}
          role="slider"
          tabIndex={0}
          onBlur={onMouseOut}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          onTouchStart={onTouchStart}
          {...customAttributesProps}
        >
          <ElementOrIcon
            className={
              rightThumb ? cssClasses?.rightthumbicon : cssClasses?.thumbicon
            }
            {...icon}
          />
        </div>
      </Tooltip>
    </div>
  );
};
