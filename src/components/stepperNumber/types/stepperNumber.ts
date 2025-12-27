import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { TextProps } from '../../text/types/text';
import type { StepperNumberOrientationType } from './orientation';
import type { StepperNumberprefixSuffixProps } from './prefixSuffix';
import type { StepperNumberStateType } from './state';

type StepperNumberCssClasses = ComponentSelected<
  ComponentsTypesComponents['STEPPER_NUMBER']
>;

/**
 * Represents the state of a step in the StepperNumber component.
 */
export interface StepStateProps {
  name: string;
  state: StepperNumberStateType;
  ['aria-label']?: string;
}

/**
 * Represents the screen reader text configuration for the StepperNumber component.
 */
export type StepperNumberScreenReaderTextProps = Pick<
  TextProps,
  'component'
> & {
  content?: string;
};

export interface Steps {
  name: string;
  ['aria-label']?: string;
}

/**
 * Interface for the standalone StepperNumber component.
 * Includes properties for orientation, steps, icons, screen reader text, and CSS classes.
 */
export interface StepperNumberStandAloneProps extends DataAttributes {
  orientation: StepperNumberOrientationType;
  horizontalOrientationWidth?: string;
  completedStepIcon?: ElementOrIconProps;
  steps?: Steps[];
  stepMaxTruncatedLines?: number;
  currentStep?: number;

  screenReaderTitle?: StepperNumberScreenReaderTextProps;
  screenReaderCompletedStep?: StepperNumberScreenReaderTextProps;
  screenReaderTextBuilder?: StepperNumberprefixSuffixProps;

  cssVariantClasses?: StepperNumberCssClasses;
  cssOrientationClasses?: StepperNumberCssClasses;
}

/**
 * Interface for the StepperNumber component with a variant.
 * Extends the StepperNumberStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the StepperNumber.
 */
export interface StepperNumberProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<StepperNumberStandAloneProps, 'orientation'> {
  variant?: Variant;
  orientation?: StepperNumberOrientationType;

  additionalVariantClasses?: Partial<StepperNumberCssClasses>;
  additionalOrientationClasses?: Partial<StepperNumberCssClasses>;
}
