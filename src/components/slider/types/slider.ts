import { ReactNode } from 'react';

import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { SliderBaseStylesType } from './sliderTheme';
import { SliderType } from './type';

export type SliderOffsetBoundaries = {
  min: number;
  max: number;
};

export type SliderLabelType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export type SliderButtonType = Omit<IButton, 'variant' | 'size' | 'childrend'> & {
  variant?: string;
  size?: string;
  content?: ReactNode;
};

export type SliderTooltipType = {
  title?: string;
  content?: JSX.Element | string;
  closeIcon?: string;
  closeIconAriaLabel?: string;
  closeIconColor?: string;
};

export interface ISliderStandAlone {
  // Original props with default values
  range: boolean;
  max: number;
  min: number;
  step: number;
  disabled: boolean;
  // label
  label?: SliderLabelType;
  // Scale
  showScale: boolean;
  scaleArray: number[];
  scaleCount: number;
  // Tooltip
  tooltip?: SliderTooltipType;
  rightTooltip?: SliderTooltipType;
  // Helper Text
  leftHelperText?: string;
  rightHelperText?: string;
  // Generated props
  value: number | number[];
  offset: number;
  offsetLeft: number;
  offsetRight: number;
  hover: boolean;
  pressed: boolean;
  activePointer: React.MutableRefObject<string>;
  containerRef: React.RefObject<HTMLDivElement>;
  // Modifier functions
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onChange: (event: MouseEvent | React.TouchEvent | React.MouseEvent) => void;
  onTouchStart: React.TouchEventHandler<HTMLDivElement>;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
  onKeyPress: React.KeyboardEventHandler<HTMLElement>;
  // Increment and decrement buttons
  incrementButton?: SliderButtonType;
  decrementButton?: SliderButtonType;
  // Thumb icons
  thumbIcon?: IElementOrIcon;
  rightThumbIcon?: IElementOrIcon;
  // Aria helpers
  ariaLabel?: string;
  rightAriaLabel?: string;
  ariaLabelBy?: string;
  rightAriaLabelBy?: string;
  // Styles
  styles: SliderBaseStylesType;
  // Test ID
  dataTestId?: string;
}

type propsToOmit =
  // styles
  | 'styles'
  // Original props with default values
  | 'range'
  | 'max'
  | 'min'
  | 'step'
  | 'disabled'
  // Scale
  | 'showScale'
  | 'scaleArray'
  | 'scaleCount'
  // Generated props
  | 'value'
  | 'offset'
  | 'offsetLeft'
  | 'offsetRight'
  | 'hover'
  | 'pressed'
  | 'activePointer'
  | 'containerRef'
  // Modifier functions
  | 'onMouseDown'
  | 'onChange'
  | 'onTouchStart'
  | 'setHover'
  | 'onKeyPress';

export interface ISlider<V = undefined extends string ? unknown : string>
  extends Omit<ISliderStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<SliderBaseStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  type?: SliderType;
  range?: boolean;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | number[];
  value?: number | number[];
  onChange?: (value: number | number[]) => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  disabled?: boolean;
}
