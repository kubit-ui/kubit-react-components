import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export type PaginationCssClasses = ComponentSelected<
  ComponentsTypesComponents['PAGINATION']
>;

/**
 * Represents the type for a pagination button control in the Pagination component.
 */
export interface PaginationButtonControlProps {
  icon?: string | JSX.Element;
  ariaLabel?: string;
  ariaControls?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Interface for the standalone Pagination component.
 * Includes properties for steps, controls, and CSS classes.
 */
export interface PaginationStandAloneProps extends DataAttributes {
  cssClasses?: PaginationCssClasses;
  stepsNumber: (string | number)[];
  stepActive: number;
  onStepClick?: (step: number) => React.MouseEventHandler<HTMLButtonElement>;
  paginationLeftButtonControl?: PaginationButtonControlProps;
  paginationRightButtonControl?: PaginationButtonControlProps;
  leftDisabled: boolean;
  rightDisabled: boolean;
}

type PaginationOmittedProps =
  | 'stepsNumber'
  | 'stepActive'
  | 'leftDisabled'
  | 'rightDisabled';

/**
 * Interface for the Pagination component with a variant.
 * Extends the PaginationStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Pagination.
 */
export interface PaginationProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<PaginationStandAloneProps, PaginationOmittedProps> {
  variant?: Variant;
  currentStep: number;
  maxStepsNumber: number;
  maxCountersNumber?: number;
  additionalClasses?: Partial<PaginationCssClasses>;
}
