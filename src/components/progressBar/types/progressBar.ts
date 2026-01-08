import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type ProgressBarCssClasses = ComponentSelected<
  ComponentsTypesComponents['PROGRESS_BAR']
>;

/**
 * Represents the color configuration for the ProgressBar component.
 */
export interface ProgressBarColorProps {
  bar?: string;
  progressBar?: string;
}

/**
 * Interface for the standalone ProgressBar component.
 * Includes properties for styles, progress, callbacks, and CSS classes.
 */
export interface ProgressBarStandAloneProps extends DataAttributes {
  cssVariantClasses?: ProgressBarCssClasses;
  cssSizeClasses?: ProgressBarCssClasses;
  barAriaLabel?: string;
  progressCompleted: number;
  progressAnimation?: {
    duration?: string;
    timingFunction?: string;
  };
  color?: ProgressBarColorProps;
}

/**
 * Interface for the ProgressBar component with a variant and size.
 * Extends the ProgressBarStandAloneProps interface and adds variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the ProgressBar.
 * @template Size - The type of the size for the ProgressBar.
 */
export interface ProgressBarProps<
  Variant = undefined extends string | unknown
    ? string | undefined
    : string | unknown,
  Size = undefined extends string | unknown
    ? string | undefined
    : string | unknown,
> extends Omit<
    ProgressBarStandAloneProps,
    'cssVariantClasses' | 'cssSizeClasses' | 'progressCompleted'
  > {
  variant?: Variant;
  size?: Size;

  additionalVariantClasses?: Partial<ProgressBarCssClasses>;
  additionalSizeClasses?: Partial<ProgressBarCssClasses>;
  percentProgressCompleted?: number;
}
