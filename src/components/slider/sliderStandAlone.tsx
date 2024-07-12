import * as React from 'react';

import { useId } from '@/hooks';

import { Text, TextComponentType } from '../text';
import {
  SliderButtonStandAlone,
  SliderHelperTextStandAlone,
  SliderScaleStandAlone,
  SliderThumbStandAlone,
} from './components';
import {
  StyledActiveTrack,
  StyledButtonsTracksContainer,
  StyledContainer,
  StyledLabelContainer,
  StyledRoot,
  StyledTrack,
  StyledWrap,
} from './slider.styled';
import { ISliderStandAlone } from './types';
import { buildAriaDescribedBy, getState, isActive } from './utils';

const SliderStandAloneComponent = (
  {
    // Original props
    range,
    min,
    max,
    step,
    disabled,
    // label
    label,
    // Scale
    showScale,
    scaleOffsets,
    // Tooltip
    tooltip,
    rightTooltip,
    // Helper Text
    leftHelperText,
    rightHelperText,
    // Generated props
    value,
    offset,
    offsetLeft,
    offsetRight,
    hover,
    pressed,
    activePointer,
    containerRef,
    // Modifier functions
    onMouseDown,
    onChange,
    onTouchStart,
    setHover,
    onKeyPress,
    // Increment and decrement buttons
    incrementButton,
    decrementButton,
    // Thumb icons
    thumbIcon,
    rightThumbIcon,
    // Aria helpers
    ariaLabel,
    rightAriaLabel,
    ariaLabelBy: propsAriaLabelBy,
    rightAriaLabelBy,
    // Styles
    styles,
    // Test ID
    dataTestId = 'slider',
  }: ISliderStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const id = useId('slider');
  const state = getState({ disabled, hover, pressed });

  // auxiliar ids
  const labelId = label?.content && !range ? `${id}Label` : undefined;
  const leftHelperTextId = `${id}LeftHelperText`;
  const rightHelperTextId = `${id}RightHelperText`;

  const ariaLabelBy = propsAriaLabelBy ?? labelId;

  return (
    <StyledRoot
      ref={ref}
      data-disabled={disabled}
      data-hover={hover}
      data-pressed={pressed}
      styles={styles}
    >
      {/* Label */}
      {label?.content && (
        <StyledLabelContainer styles={styles}>
          <Text
            component={TextComponentType.LABEL}
            customTypography={styles.states?.[state]?.label}
            id={labelId}
            {...label}
          >
            {label?.content}
          </Text>
        </StyledLabelContainer>
      )}
      {/* Scale */}
      <SliderScaleStandAlone scaleOffsets={scaleOffsets} showScale={showScale} styles={styles} />
      <StyledButtonsTracksContainer styles={styles}>
        <SliderButtonStandAlone
          {...decrementButton}
          styles={styles.states?.[state]?.decrementButton}
        />
        <StyledWrap styles={styles}>
          <StyledContainer
            ref={containerRef}
            data-testid={`${dataTestId}Container`}
            styles={styles}
            onMouseDown={onMouseDown}
            onTouchMove={onChange}
            onTouchStart={onTouchStart}
          >
            {range ? (
              <>
                {/* Tracks */}
                {/* Left Track */}
                <StyledTrack
                  data-disabled={disabled}
                  data-hover={hover}
                  data-pressed={pressed}
                  data-testid={`${dataTestId}InactiveLeftTrack`}
                  style={{ width: `${offsetLeft}%`, left: 0 }}
                  styles={styles}
                />
                {/* Active Track */}
                <StyledActiveTrack
                  data-disabled={disabled}
                  data-hover={hover}
                  data-pressed={pressed}
                  data-testid={`${dataTestId}ActiveTrack`}
                  style={{ left: `${offsetLeft}%`, right: `${offsetRight}%` }}
                  styles={styles}
                />
                {/* Right Track */}
                <StyledTrack
                  data-disabled={disabled}
                  data-hover={hover}
                  data-pressed={pressed}
                  data-testid={`${dataTestId}InactiveRightTrack`}
                  style={{ width: `${offsetRight}%`, right: 0 }}
                  styles={styles}
                />
                {/* Thumbs */}
                <SliderThumbStandAlone
                  ariaDescribedBy={buildAriaDescribedBy([
                    { helperText: leftHelperText, helperTextId: leftHelperTextId },
                    { helperText: rightHelperText, helperTextId: rightHelperTextId },
                  ])}
                  ariaLabel={ariaLabel}
                  ariaLabelBy={ariaLabelBy}
                  dataTestId={`${dataTestId}LeftThumb`}
                  disabled={disabled}
                  hover={isActive(hover, activePointer.current, 'left')}
                  icon={thumbIcon}
                  max={value[1] - step}
                  min={min}
                  pressed={isActive(pressed, activePointer.current, 'left')}
                  state={state}
                  style={{ left: `${offsetLeft}%` }}
                  styles={styles}
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
                  rightThumb
                  ariaDescribedBy={buildAriaDescribedBy([
                    { helperText: leftHelperText, helperTextId: leftHelperTextId },
                    { helperText: rightHelperText, helperTextId: rightHelperTextId },
                  ])}
                  ariaLabel={rightAriaLabel}
                  ariaLabelBy={rightAriaLabelBy}
                  dataTestId={`${dataTestId}RightThumb`}
                  disabled={disabled}
                  hover={isActive(hover, activePointer.current, 'right')}
                  icon={rightThumbIcon}
                  max={max}
                  min={value[0] + step}
                  pressed={isActive(pressed, activePointer.current, 'right')}
                  state={state}
                  style={{ right: `${offsetRight}%` }}
                  styles={styles}
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
            ) : (
              <>
                {/* Tracks */}
                {/* Active Track */}
                <StyledActiveTrack
                  data-disabled={disabled}
                  data-hover={hover}
                  data-pressed={pressed}
                  data-testid={`${dataTestId}ActiveTrack`}
                  style={{ width: `${offset}%` }}
                  styles={styles}
                />
                {/* Inactive Track */}
                <StyledTrack
                  data-disabled={disabled}
                  data-hover={hover}
                  data-pressed={pressed}
                  data-testid={`${dataTestId}InactiveTrack`}
                  style={{ width: `calc(${100 - offset}%)`, right: 0 }}
                  styles={styles}
                />
                {/* Thumb */}
                <SliderThumbStandAlone
                  ariaDescribedBy={buildAriaDescribedBy([
                    { helperText: leftHelperText, helperTextId: leftHelperTextId },
                    { helperText: rightHelperText, helperTextId: rightHelperTextId },
                  ])}
                  ariaLabel={ariaLabel}
                  ariaLabelBy={ariaLabelBy}
                  dataTestId={`${dataTestId}Thumb`}
                  disabled={disabled}
                  hover={hover}
                  icon={thumbIcon}
                  max={max}
                  min={min}
                  pressed={pressed}
                  state={state}
                  style={{ left: `${offset}%` }}
                  styles={styles}
                  tooltip={tooltip}
                  value={value as number}
                  onKeyDown={onKeyPress}
                  onMouseOut={() => setHover(false)}
                  onMouseOver={() => setHover(true)}
                />
              </>
            )}
          </StyledContainer>
        </StyledWrap>
        <SliderButtonStandAlone
          {...incrementButton}
          styles={styles.states?.[state]?.incrementButton}
        />
      </StyledButtonsTracksContainer>
      <SliderHelperTextStandAlone
        leftHelperText={leftHelperText}
        leftHelperTextId={leftHelperTextId}
        rightHelperText={rightHelperText}
        rightHelperTextId={rightHelperTextId}
        state={state}
        styles={styles}
      />
    </StyledRoot>
  );
};

/**
 * @description
 * SliderStandAlone component is used to render a slider component.
 */
export const SliderStandAlone = React.forwardRef(SliderStandAloneComponent);
