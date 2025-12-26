import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
import type { ArrowsControlStyleProps } from './pageControlTheme';

export type PageControlCssClasses = ComponentSelected<
  ComponentsTypesComponents['PAGE_CONTROL']
>;

/**
 * Represents the ARIA attributes for a button control in the PageControl component.
 */
export type PageControlButtonAriaProps = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-controls'
  | 'aria-expanded'
  | 'aria-pressed'
  | 'aria-disabled'
  | 'aria-hidden'
>;

/**
 * Represents a button control in the PageControl component.
 */
export type PageControlButtonProps = PageControlButtonAriaProps & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

/**
 * Represents the type for a control in the PageControl component.
 */
export type PageControlControlProps =
  | ElementOrIconProps
  | PageControlButtonProps;

/**
 * Interface for the standalone PageControl component.
 * Includes properties for pages, controls, styles, and CSS classes.
 */
export interface PageControlStandAloneProps extends DataAttributes {
  arrowsControlStyles?: ArrowsControlStyleProps;
  pages: number;
  dots: number;
  currentPosition: number;
  firstVisiblePosition: number;
  lastVisiblePosition: number;
  leftControl?: PageControlControlProps;
  rightControl?: PageControlControlProps;
  cssArrowControlClasses?: PageControlCssClasses;
  cssPageControlClasses?: PageControlCssClasses;
  isBullet?: boolean;
}

/**
 * Interface for the PageControl component with a variant.
 * Extends the PageControlStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the PageControl.
 */
export interface PageControlProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
    PageControlStandAloneProps,
    | 'arrowsControlStyles'
    | 'dots'
    | 'firstVisiblePosition'
    | 'lastVisiblePosition'
  > {
  maxDots?: number;
  arrowsControlVariant?: string;
  variant?: Variant;
  additionalPageControlClasses?: Partial<PageControlCssClasses>;
  additionalArrowControlClasses?: Partial<PageControlCssClasses>;
}
