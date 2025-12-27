import {
  type ForwardedRef,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type TouchEventHandler,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { SliderOffsetBoundariesProps, SliderProps } from './types/slider';

import { SliderStandAlone } from './sliderStandAlone';
import {
  calcNewValueAfterKeyPress,
  decrementValue,
  incrementValue,
} from './utils/accessibility.utils';
import {
  calcDefaultValue,
  calcNewRangeValue,
  calcScaleValue,
  calcValueByOffset,
  calculateChange,
  equalsRangeValues,
  getOffset,
  getScale,
} from './utils/slider.utils';

const ON_CHANGE_DEBOUNCE_TIMEOUT = 50;

export const Slider = forwardRef(
  <Variant extends string>(
    {
      additionalClasses,
      // Aria helpers
      ariaLabel,
      ariaLabelBy,
      decrementButton,
      defaultValue,
      disabled = false,
      // Increment and decrement buttons
      incrementButton,
      initialStepOffset,
      // label
      label,
      leftHelperText,
      max = 100,
      min = 0,
      onChange,
      onDragEnd,
      onDragStart,
      range = false,
      rightAriaLabel,
      rightAriaLabelBy,
      rightHelperText,
      rightThumbIcon,
      rightTooltip,
      step = 1,
      thumbExceedsTrack = true,
      // Thumb icons
      thumbIcon,
      tooltip,
      type = 'discrete',
      value: propValue,
      variant,
    }: SliderProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const _calcDefaultValue = (_value) =>
      calcDefaultValue({
        initialStepOffset,
        max,
        min,
        range,
        step,
        value: _value,
      });

    const containerRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<number | number[]>(
      _calcDefaultValue(propValue ?? defaultValue),
    );
    const [hover, setHover] = useState(false);
    const [pressed, setPressed] = useState(false);
    const activePointer = useRef('left');
    const [offsetBoundaries, setOffsetBoundaries] =
      useState<SliderOffsetBoundariesProps>({
        max: 100,
        min: 0,
      });

    // Debounce callback to avoid calling onChange too many times
    const timeoutOnChange = useRef<number | NodeJS.Timeout>();
    const onChangeDebounce = useCallback(
      (val: number | number[]) => {
        if (!onChange) {
          return;
        }

        clearTimeout(timeoutOnChange.current);
        timeoutOnChange.current = setTimeout(() => {
          onChange(val);
        }, ON_CHANGE_DEBOUNCE_TIMEOUT);
      },
      [onChange],
    );

    const handleChange = (event: MouseEvent | TouchEvent | MouseEvent) => {
      if (!containerRef.current || disabled) {
        return;
      }
      // Offset percentaje
      const _offset = calculateChange({
        container: containerRef.current,
        event: event as never,
        offsetBoundaries,
      });
      const _value = calcValueByOffset({
        max,
        min,
        offset: _offset,
        offsetBoundaries: offsetBoundaries,
        step,
      });
      const newValue = calcScaleValue({
        initialStepOffset,
        max,
        min,
        step,
        value: _value,
      });

      setValue((prevValue) => {
        let _newValue: number | number[] = newValue;
        if (range) {
          _newValue = calcNewRangeValue({
            activePointer,
            newValue,
            prevValue: prevValue as number[],
          });
        }
        onChangeDebounce(_newValue);
        return _newValue;
      });
    };

    const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (disabled) {
        return;
      }
      const newValue = calcNewValueAfterKeyPress({
        activePointer: activePointer.current,
        event,
        max,
        min,
        range,
        step,
        value,
      });
      if (newValue !== undefined) {
        setValue(newValue);
        onChangeDebounce(newValue);
      }
    };

    const handleIncrementClick = (event) => {
      const newValue = incrementValue({
        activePointer: activePointer.current,
        max,
        range,
        step,
        value,
      });
      if (newValue !== undefined) {
        setValue(newValue);
        onChangeDebounce(newValue);
      }
      incrementButton?.onClick?.(event);
    };

    const handleDecrementClick = (event) => {
      const newValue = decrementValue({
        activePointer: activePointer.current,
        min,
        range,
        step,
        value,
      });
      if (newValue !== undefined) {
        setValue(newValue);
        onChangeDebounce(newValue);
      }
      decrementButton?.onClick?.(event);
    };

    const onMouseUp = () => {
      onDragEnd?.();
      setPressed(false);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      unbindEventListeners();
    };

    const { scaleOffsets, showScale } = getScale({
      initialStepOffset,
      max,
      min,
      step,
      type,
    });
    const { offset, offsetLeft, offsetRight } = getOffset({
      max,
      min,
      offsetBoundaries,
      range,
      value,
    });

    const unbindEventListeners = () => {
      window.removeEventListener('mousemove', handleChange);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };

    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'SLIDER',
      variant,
    });

    // When !thumbExceedsTrack, the ratio of the thumb to the track could change
    // So the offset boundaries should be recalculated
    // When thumbExceedsTrack is true, the offset boundaries are always 0 and 100
    const initialiceBoundaries = useCallback(() => {
      if (thumbExceedsTrack) {
        setOffsetBoundaries({ max: 100, min: 0 });
        return;
      }
      if (!containerRef.current) {
        return;
      }
      // Select by "slider"
      const thumb = containerRef.current.querySelector(`[role="${'slider'}"]`);
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

      setOffsetBoundaries({ max: maxOffset, min: minOffset });
    }, [thumbExceedsTrack]);

    useEffect(() => {
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
    useEffect(() => {
      if (propValue !== undefined) {
        if (
          (range &&
            !equalsRangeValues({
              values1: propValue as number[],
              values2: value as number[],
            })) ||
          (!range && propValue !== value)
        ) {
          setValue(_calcDefaultValue(propValue));
        }
      }
    }, [propValue]);

    // On unmount call unbindEventListeners
    useEffect(() => {
      return unbindEventListeners;
    }, []);

    const onMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
      onDragStart?.();
      setPressed(true);
      handleChange(event as never);
      window.addEventListener('mousemove', handleChange);
      window.addEventListener('mouseup', onMouseUp);
    };

    const onTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
      onDragStart?.();
      setPressed(true);
      handleChange(event as never);
      window.addEventListener('touchend', onMouseUp);
    };

    return (
      <SliderStandAlone
        ref={ref}
        activePointer={activePointer}
        ariaLabel={ariaLabel}
        ariaLabelBy={ariaLabelBy}
        containerRef={containerRef}
        cssClasses={cssClasses}
        decrementButton={{
          ...decrementButton,
          disabled: disabled || decrementButton?.disabled,
          onClick: handleDecrementClick,
        }}
        disabled={disabled}
        hover={hover}
        incrementButton={{
          ...incrementButton,
          disabled: disabled || incrementButton?.disabled,
          onClick: handleIncrementClick,
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
        scaleOffsets={scaleOffsets}
        setHover={setHover}
        showScale={showScale}
        step={step}
        thumbIcon={thumbIcon}
        tooltip={tooltip}
        value={value}
        onChange={handleChange as never}
        onKeyPress={handleKeyPress}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
    );
  },
);
