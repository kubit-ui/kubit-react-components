import * as React from 'react';

import { Slider } from '../slider/slider';
import { SliderType } from '../slider/types/type';
import {
  BarContainerStyled,
  BarStyled,
  ParentContainerStyled,
  ProgressBarStyled,
} from './progressBar.styled';
import { IProgressBarStandAlone } from './types';

const SLIDER_MAX_VALUE = 1000;
const SLIDER_MIN_VALUE = 0;
const SLIDER_PERCENTAGE_CONVERSION = 10;

const ProgressBarStandaloneComponent = (
  props: IProgressBarStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <ParentContainerStyled ref={ref} styles={props.styles}>
      <BarContainerStyled styles={props.styles}>
        {props.styles.useAsSlider && props.styles.sliderVariant ? (
          <Slider
            ariaLabel={props.barAriaLabel}
            max={SLIDER_MAX_VALUE}
            min={SLIDER_MIN_VALUE}
            tooltip={props.tooltip}
            type={SliderType.CONTINUOUS}
            // Convert 0-100 values to 0 - 1000
            value={props.progressCompleted * SLIDER_PERCENTAGE_CONVERSION}
            variant={props.styles.sliderVariant}
            onChange={(newValue: number | number[]) => {
              if (props.onChange && !Array.isArray(newValue)) {
                // in order to retun a value 0 - 100
                props.onChange(newValue / SLIDER_PERCENTAGE_CONVERSION);
              }
            }}
            onDragEnd={props.onDragEnd}
            onDragStart={props.onDragStart}
          />
        ) : (
          <>
            <BarStyled
              data-testid={`${props.dataTestIdBar}`}
              sizeStyles={props.sizeStyles}
              styles={props.styles}
            />
            <ProgressBarStyled
              data-testid={`${props.dataTestIdProgressBar}`}
              progressCompleted={props.progressCompleted}
              sizeStyles={props.sizeStyles}
              styles={props.styles}
            />
          </>
        )}
      </BarContainerStyled>
    </ParentContainerStyled>
  );
};

/**
 * @description
 * ProgressBar component is used to show a progress bar.
 * @param {React.PropsWithChildren<IProgressBarStandAlone>} props
 * @returns {JSX.Element}
 */
export const ProgressBarStandalone = React.forwardRef(ProgressBarStandaloneComponent);
