import { forwardRef, useId } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type { SliderStandAloneProps } from './types/slider';

import { Text } from '../text/text';
import { SliderButtonStandAlone } from './components/sliderButtonStandAlone';
import { SliderHelperTextStandAlone } from './components/sliderHelperTextStandAlone';
import { SliderScaleStandAlone } from './components/sliderScaleStandAlone';
import { SliderThumbStandAlone } from './components/sliderThumbStandAlone';
import { buildAriaDescribedBy } from './utils/accessibility.utils';
import { getState } from './utils/state.utils';
import { isActive } from './utils/ui.utils';

export const SliderStandAlone = forwardRef<
  HTMLDivElement,
  SliderStandAloneProps
>(
  (
    {
      activePointer,
      ariaLabel,
      ariaLabelBy: propsAriaLabelBy,
      containerRef,
      cssClasses,
      decrementButton,
      disabled,
      hover,
      incrementButton,
      label,
      leftHelperText,
      max,
      min,
      offset,
      offsetLeft,
      offsetRight,
      onChange,
      onKeyPress,
      onMouseDown,
      onTouchStart,
      pressed,
      range,
      rightAriaLabel,
      rightAriaLabelBy,
      rightHelperText,
      rightThumbIcon,
      rightTooltip,
      scaleOffsets,
      setHover,
      showScale,
      step,
      thumbIcon,
      tooltip,
      value,
      ...props
    },
    ref,
  ) => {
    const reactId = useId();
    const id = `slider-${reactId.replace(/:/g, '')}`;
    const state = getState({ disabled, hover, pressed });
    const customAttributes = {
      'data-state': state,
    };
    const dataTestId = props['data-testid'] ?? 'slider';
    const customProps = pickCustomAttributes(customAttributes);

    // auxiliar ids
    const labelId =
      processText(label).children && !range ? `${id}Label` : undefined;
    const leftHelperTextId = `${id}LeftHelperText`;
    const rightHelperTextId = `${id}RightHelperText`;

    const ariaLabelBy = propsAriaLabelBy ?? labelId;

    return (
      <div
        ref={ref}
        className={cssClasses?.slider}
        data-disabled={disabled}
        data-hover={hover}
        data-pressed={pressed}
        {...customProps}
      >
        {/* Label */}
        <div className={cssClasses?.labelcontainer} {...customProps}>
          <Text
            additionalClasses={{
              text: cssClasses?.label,
            }}
            component="label"
            customAttributes={customAttributes}
            id={labelId}
            {...processText(label)}
          />
        </div>
        {/* Scale */}
        <SliderScaleStandAlone
          cssClasses={cssClasses}
          customAttributes={customAttributes}
          scaleOffsets={scaleOffsets}
          showScale={showScale}
        />
        <div className={cssClasses?.buttonstrackscontainer}>
          <SliderButtonStandAlone
            {...decrementButton}
            cssClasses={cssClasses}
            customAttributes={customAttributes}
          />
          <div className={cssClasses?.tracksthumbscontainer}>
            <div
              ref={containerRef}
              className={cssClasses?.tracksthumbsinnercontainer}
              data-testid={`${dataTestId}-container`}
              role="button"
              tabIndex={0}
              onMouseDown={onMouseDown}
              onTouchMove={onChange}
              onTouchStart={onTouchStart}
            >
              {range && (
                <>
                  {/* Tracks */}
                  {/* Left Track */}
                  <div
                    className={classNames({
                      [`${cssClasses?.activetrack}`]: false,
                      [`${cssClasses?.inactivetrack}`]: true,
                    })}
                    {...customProps}
                    data-disabled={disabled}
                    data-hover={hover}
                    data-pressed={pressed}
                    data-testid={`${dataTestId}-inactive-left-track`}
                    style={{ left: 0, width: `${offsetLeft}%` }}
                  />
                  {/* Active Track */}
                  <div
                    className={classNames({
                      [`${cssClasses?.activetrack}`]: true,
                      [`${cssClasses?.inactivetrack}`]: false,
                    })}
                    data-disabled={disabled}
                    data-hover={hover}
                    data-pressed={pressed}
                    data-testid={`${dataTestId}-active-track`}
                    style={{ left: `${offsetLeft}%`, right: `${offsetRight}%` }}
                    {...customProps}
                  />
                  {/* Right Track */}
                  <div
                    className={classNames({
                      [`${cssClasses?.activetrack}`]: false,
                      [`${cssClasses?.inactivetrack}`]: true,
                    })}
                    data-disabled={disabled}
                    data-hover={hover}
                    data-pressed={pressed}
                    data-testid={`${dataTestId}-inactive-right-track`}
                    style={{ right: 0, width: `${offsetRight}%` }}
                    {...customProps}
                  />
                  {/* Thumbs */}
                  <SliderThumbStandAlone
                    ariaDescribedBy={buildAriaDescribedBy([
                      {
                        helperText: leftHelperText,
                        helperTextId: leftHelperTextId,
                      },
                      {
                        helperText: rightHelperText,
                        helperTextId: rightHelperTextId,
                      },
                    ])}
                    ariaLabel={ariaLabel}
                    ariaLabelBy={ariaLabelBy}
                    cssClasses={cssClasses}
                    customAttributes={customAttributes}
                    data-testid={`${dataTestId}-left-thumb`}
                    disabled={disabled}
                    hover={isActive(hover, activePointer.current, 'left')}
                    icon={thumbIcon}
                    max={value[1] - step}
                    min={min}
                    pressed={isActive(pressed, activePointer.current, 'left')}
                    state={state}
                    style={{ left: `${offsetLeft}%` }}
                    tooltip={tooltip}
                    value={value[0]}
                    onFocus={() => (activePointer.current = 'left')}
                    onKeyDown={onKeyPress}
                    onMouseOut={() => setHover(false)}
                    onMouseOver={() => {
                      setHover(true);
                      activePointer.current = 'left';
                    }}
                    onTouchStart={() => {
                      activePointer.current = 'left';
                    }}
                  />
                  <SliderThumbStandAlone
                    ariaDescribedBy={buildAriaDescribedBy([
                      {
                        helperText: leftHelperText,
                        helperTextId: leftHelperTextId,
                      },
                      {
                        helperText: rightHelperText,
                        helperTextId: rightHelperTextId,
                      },
                    ])}
                    ariaLabel={rightAriaLabel}
                    ariaLabelBy={rightAriaLabelBy}
                    cssClasses={cssClasses}
                    customAttributes={customAttributes}
                    data-testid={`${dataTestId}-right-thumb`}
                    disabled={disabled}
                    hover={isActive(hover, activePointer.current, 'right')}
                    icon={rightThumbIcon}
                    max={max}
                    min={value[0] + step}
                    pressed={isActive(pressed, activePointer.current, 'right')}
                    rightThumb={true}
                    state={state}
                    style={{ right: `${offsetRight}%` }}
                    tooltip={rightTooltip}
                    value={value[1]}
                    onFocus={() => (activePointer.current = 'right')}
                    onKeyDown={onKeyPress}
                    onMouseOut={() => setHover(false)}
                    onMouseOver={() => {
                      setHover(true);
                      activePointer.current = 'right';
                    }}
                    onTouchStart={() => {
                      activePointer.current = 'right';
                    }}
                  />
                </>
              )}
              {!range && (
                <>
                  {/* Tracks */}
                  {/* Active Track */}
                  <div
                    className={classNames({
                      [`${cssClasses?.activetrack}`]: true,
                      [`${cssClasses?.inactivetrack}`]: false,
                    })}
                    data-disabled={disabled}
                    data-hover={hover}
                    data-pressed={pressed}
                    data-testid={`${dataTestId}-active-track`}
                    style={{ width: `${offset}%` }}
                    {...customProps}
                  />
                  {/* Inactive Track */}
                  <div
                    className={classNames({
                      [`${cssClasses?.activetrack}`]: false,
                      [`${cssClasses?.inactivetrack}`]: true,
                    })}
                    data-disabled={disabled}
                    data-hover={hover}
                    data-pressed={pressed}
                    data-testid={`${dataTestId}-inactive-track`}
                    style={{ right: 0, width: `calc(${100 - offset}%)` }}
                    {...customProps}
                  />
                  {/* Thumb */}
                  <SliderThumbStandAlone
                    ariaDescribedBy={buildAriaDescribedBy([
                      {
                        helperText: leftHelperText,
                        helperTextId: leftHelperTextId,
                      },
                      {
                        helperText: rightHelperText,
                        helperTextId: rightHelperTextId,
                      },
                    ])}
                    ariaLabel={ariaLabel}
                    ariaLabelBy={ariaLabelBy}
                    cssClasses={cssClasses}
                    customAttributes={customAttributes}
                    data-testid={`${dataTestId}-thumb`}
                    disabled={disabled}
                    hover={hover}
                    icon={thumbIcon}
                    max={max}
                    min={min}
                    pressed={pressed}
                    state={state}
                    style={{ left: `${offset}%` }}
                    tooltip={tooltip}
                    value={value as number}
                    onKeyDown={onKeyPress}
                    onMouseOut={() => setHover(false)}
                    onMouseOver={() => setHover(true)}
                  />
                </>
              )}
            </div>
          </div>
          <SliderButtonStandAlone
            {...incrementButton}
            cssClasses={cssClasses}
            customAttributes={customAttributes}
          />
        </div>
        <SliderHelperTextStandAlone
          cssClasses={cssClasses}
          customAttributes={customAttributes}
          leftHelperText={leftHelperText}
          leftHelperTextId={leftHelperTextId}
          rightHelperText={rightHelperText}
          rightHelperTextId={rightHelperTextId}
        />
      </div>
    );
  },
);
