import type { ReactNode } from 'react';

import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ButtonProps } from '../../button/types/button';
import type { SliderType } from './type';

export type SliderCssClasses = ComponentSelected<
  ComponentsTypesComponents['SLIDER']
>;
/**
 * Represents the offset boundaries for the Slider component.
 */
export interface SliderOffsetBoundariesProps {
  min: number;
  max: number;
}

/**
 * Represents the type for the buttons in the Slider component.
 */
export type SliderButtonProps = Omit<
  ButtonProps,
  'variant' | 'size' | 'children'
> & {
  variant?: string;
  size?: string;
  content?: ReactNode;
};

/**
 * Represents the type for the tooltip in the Slider component.
 */
export interface SliderTooltipProps {
  title?: string;
  content?: JSX.Element | string;
  closeIcon?: string;
  closeIconAriaLabel?: string;
  closeIconColor?: string;
}

/**
 * Interface for the standalone Slider component.
 * Includes properties for range, scale, tooltips, event handlers, and CSS classes.
 */
export interface SliderStandAloneProps extends DataAttributes {
  range?: boolean;
  max: number;
  min: number;
  step: number;
  disabled: boolean;
  label?: CommonTextProps;
  showScale: boolean;
  scaleOffsets: number[];
  tooltip?: SliderTooltipProps;
  rightTooltip?: SliderTooltipProps;
  leftHelperText?: string;
  rightHelperText?: string;
  value: number | number[];
  offset: number;
  offsetLeft: number;
  offsetRight: number;
  hover: boolean;
  pressed: boolean;
  activePointer: React.MutableRefObject<string>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onChange: (event: MouseEvent | React.TouchEvent | React.MouseEvent) => void;
  onTouchStart: React.TouchEventHandler<HTMLDivElement>;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
  onKeyPress: React.KeyboardEventHandler<HTMLElement>;
  incrementButton?: SliderButtonProps;
  decrementButton?: SliderButtonProps;
  thumbIcon?: ElementOrIconProps;
  rightThumbIcon?: ElementOrIconProps;
  ariaLabel?: string;
  rightAriaLabel?: string;
  ariaLabelBy?: string;
  rightAriaLabelBy?: string;
  cssClasses?: SliderCssClasses;
}

type SliderPropsToOmit =
  | 'max'
  | 'min'
  | 'step'
  | 'disabled'
  | 'showScale'
  | 'scaleOffsets'
  | 'value'
  | 'offset'
  | 'offsetLeft'
  | 'offsetRight'
  | 'hover'
  | 'pressed'
  | 'activePointer'
  | 'containerRef'
  | 'onMouseDown'
  | 'onChange'
  | 'onTouchStart'
  | 'setHover'
  | 'onKeyPress';

/**
 * Interface for the Slider component with a variant.
 * Extends the SliderStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Slider.
 */
export interface SliderProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<SliderStandAloneProps, SliderPropsToOmit> {
  variant?: Variant;
  type?: SliderType;
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
  initialStepOffset?: number;
  additionalClasses?: Partial<SliderCssClasses>;
  thumbExceedsTrack?: boolean;
}
