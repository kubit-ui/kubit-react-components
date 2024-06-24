import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { ROLES } from '@/types';

import { SliderStandAlone } from './sliderStandAlone';
import {
  ISlider,
  ISliderStandAlone,
  SliderBaseStylesType,
  SliderOffsetBoundaries,
  SliderType,
} from './types';
import {
  calcDefaultValue,
  calcNewRangeValue,
  calcNewValueAfterKeyPress,
  calcScaleValue,
  calcValueByOffset,
  calculateChange,
  decrementValue,
  equalsRangeValues,
  getOffset,
  getScale,
  incrementValue,
} from './utils';

const ON_CHANGE_DEBOUNCE_TIMEOUT = 50;
const SLIDER_STYLES = 'SLIDER_STYLES';

export const SliderComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      variant,
      type = SliderType.DISCRETE,
      range = false,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      defaultValue,
      value: propValue,
      onChange,
      onDragStart,
      onDragEnd,
      tooltip,
      rightTooltip,
      leftHelperText,
      rightHelperText,
      // label
      label,
      // Increment and decrement buttons
      incrementButton,
      decrementButton,
      // Thumb icons
      thumbIcon,
      rightThumbIcon,
      // Aria helpers
      ariaLabel,
      rightAriaLabel,
      ariaLabelBy,
      rightAriaLabelBy,
      ctv,
    }: ISlider<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const _calcDefaultValue = _value => calcDefaultValue(range, max, min, step, _value);

    const containerRef = React.useRef<HTMLDivElement>(null);
    const [value, setValue] = React.useState<number | number[]>(
      _calcDefaultValue(propValue ?? defaultValue)
    );
    const [hover, setHover] = React.useState(false);
    const [pressed, setPressed] = React.useState(false);
    const activePointer = React.useRef('left');
    const [offsetBoundaries, setOffsetBoundaries] = React.useState<SliderOffsetBoundaries>({
      min: 0,
      max: 100,
    });

    const styles = useStyles<SliderBaseStylesType, V>(SLIDER_STYLES, variant, ctv);

    // thumbExceedsTrack by default is true
    const thumbExceedsTrack = React.useMemo(
      () => styles?.thumbExceedsTrack ?? true,
      [styles?.thumbExceedsTrack]
    );

    // When !thumbExceedsTrack, the ratio of the thumb to the track could change
    // So the offset boundaries should be recalculated
    // When thumbExceedsTrack is true, the offset boundaries are always 0 and 100
    const initialiceBoundaries = React.useCallback(() => {
      if (thumbExceedsTrack) {
        setOffsetBoundaries({ min: 0, max: 100 });
        return;
      }
      if (!containerRef.current) {
        return;
      }
      // Select by ROLES.Slider
      const thumb = containerRef.current.querySelector(`[role="${ROLES.SLIDER}"]`);
      if (!thumb) {
        return;
      }
      // Get container width
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      // Get thumb width
      const thumbWidth = thumb.getBoundingClientRect().width;
      // Calc thumbWidth as percentage of the containerWidth
      const thumbWidthPercentage = (thumbWidth / containerWidth) * 100.0;
      // Calc min and max offset boundaries
      const minOffset = thumbWidthPercentage / 2;
      const maxOffset = 100 - minOffset;

      setOffsetBoundaries({ min: minOffset, max: maxOffset });
    }, [thumbExceedsTrack]);

    React.useEffect(() => {
      initialiceBoundaries();
      // Only add resize event listener if thumbExceedsTrack is false
      // When false, the ratio of the thumb to the track could change
      if (!thumbExceedsTrack) {
        window.addEventListener('resize', initialiceBoundaries);
      }
      return () => {
        if (!thumbExceedsTrack) {
          window.removeEventListener('resize', initialiceBoundaries);
        }
      };
    }, [thumbExceedsTrack]);

    // Update inner value when new propValue is received
    React.useEffect(() => {
      if (propValue !== undefined) {
        if (
          (range && !equalsRangeValues(propValue as number[], value as number[])) ||
          (!range && propValue !== value)
        ) {
          setValue(_calcDefaultValue(propValue));
        }
      }
    }, [propValue]);

    // Debounce callback to avoid calling onChange too many times
    const timeoutOnChange = React.useRef<number | NodeJS.Timeout>();
    const onChangeDebounce = React.useCallback(
      (val: number | number[]) => {
        if (!onChange) {
          return;
        }

        clearTimeout(timeoutOnChange.current);
        timeoutOnChange.current = setTimeout(() => {
          onChange(val);
        }, ON_CHANGE_DEBOUNCE_TIMEOUT);
      },
      [onchange]
    );

    // On unmount call unbindEventListeners
    React.useEffect(() => {
      return unbindEventListeners;
    }, []);

    const onMouseDown: React.MouseEventHandler<HTMLDivElement> = event => {
      onDragStart?.();
      setPressed(true);
      handleChange(event);
      window.addEventListener('mousemove', handleChange);
      window.addEventListener('mouseup', onMouseUp);
    };

    const onMouseUp = () => {
      onDragEnd?.();
      setPressed(false);
      unbindEventListeners();
    };

    const onTouchStart: React.TouchEventHandler<HTMLDivElement> = event => {
      onDragStart?.();
      setPressed(true);
      handleChange(event);
      window.addEventListener('touchend', onMouseUp);
    };

    const handleChange = (event: MouseEvent | React.TouchEvent | React.MouseEvent) => {
      if (!containerRef.current || disabled) {
        return;
      }
      // Offset percentaje
      const _offset = calculateChange({ event, container: containerRef.current, offsetBoundaries });
      const _value = calcValueByOffset({
        max,
        min,
        step,
        offset: _offset,
        offsetBoundaries: offsetBoundaries,
      });
      const newValue = calcScaleValue(max, min, step, _value);

      setValue(prevValue => {
        let _newValue: number | number[] = newValue;
        if (range) {
          _newValue = calcNewRangeValue(prevValue as number[], newValue, activePointer);
        }
        onChangeDebounce(_newValue);
        return _newValue;
      });
    };

    const unbindEventListeners = () => {
      window.removeEventListener('mousemove', handleChange);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };

    const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = event => {
      if (disabled) {
        return;
      }
      const newValue = calcNewValueAfterKeyPress(
        event,
        range,
        activePointer.current,
        max,
        min,
        step,
        value
      );
      if (newValue !== undefined) {
        setValue(newValue);
        onChangeDebounce(newValue);
      }
    };

    const handleIncrementClick = event => {
      const newValue = incrementValue(activePointer.current, range, max, step, value);
      if (newValue !== undefined) {
        setValue(newValue);
        onChangeDebounce(newValue);
      }
      incrementButton?.onClick?.(event);
    };

    const handleDecrementClick = event => {
      const newValue = decrementValue(activePointer.current, range, min, step, value);
      if (newValue !== undefined) {
        setValue(newValue);
        onChangeDebounce(newValue);
      }
      decrementButton?.onClick?.(event);
    };

    const { showScale, scaleCount, scaleArray } = getScale(type, max, min, step);
    const { offset, offsetLeft, offsetRight } = getOffset({
      range,
      max,
      min,
      value,
      offsetBoundaries,
    });

    return (
      <SliderStandAlone
        ref={ref}
        activePointer={activePointer}
        ariaLabel={ariaLabel}
        ariaLabelBy={ariaLabelBy}
        containerRef={containerRef}
        decrementButton={{
          ...decrementButton,
          onClick: handleDecrementClick,
          disabled: disabled || decrementButton?.disabled,
        }}
        disabled={disabled}
        hover={hover}
        incrementButton={{
          ...incrementButton,
          onClick: handleIncrementClick,
          disabled: disabled || incrementButton?.disabled,
        }}
        label={label}
        leftHelperText={leftHelperText}
        max={max}
        min={min}
        offset={offset}
        offsetLeft={offsetLeft}
        offsetRight={offsetRight}
        pressed={pressed}
        range={range}
        rightAriaLabel={rightAriaLabel}
        rightAriaLabelBy={rightAriaLabelBy}
        rightHelperText={rightHelperText}
        rightThumbIcon={rightThumbIcon}
        rightTooltip={rightTooltip}
        scaleArray={scaleArray}
        scaleCount={scaleCount}
        setHover={setHover}
        showScale={showScale}
        step={step}
        styles={styles}
        thumbIcon={thumbIcon}
        tooltip={tooltip}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
    );
  }
);
SliderComponent.displayName = 'SliderComponent';

const SliderBoundary = <V extends string | unknown>(
  props: ISlider<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <SliderStandAlone {...(props as unknown as ISliderStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <SliderComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Slider component is used to select a value from a range of values.
 */
const Slider = React.forwardRef(SliderBoundary) as <V extends string | unknown>(
  props: ISlider<V> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => JSX.Element;

export { Slider };
