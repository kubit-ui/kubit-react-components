import type { CommonIconProps } from '@/lib/types/commons/icon';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';
import type { StateType } from '@/lib/types/states/states';

import type { LinkProps } from '../../link/types/link';
import type { TextComponentType } from '../../text/types/component';

/**
 * Type for CSS classes specific to the breadcrumbs component.
 */
type BreadcrumbsCssClasses = ComponentSelected<
  ComponentsTypesComponents['BREADCRUMBS']
>;

/**
 * Interface for the styled breadcrumb list item.
 * Includes optional state and a flag for the last breadcrumb.
 */
export interface BreadcrumbLiStyledProps {
  state?: StateType;
  lastCrumb?: boolean;
}

/**
 * Type for an individual breadcrumb.
 * Includes name, URL, optional onClick handler, and ARIA label.
 */
export interface BreadcrumbProps extends DataAttributes {
  name: string;
  url: string;
  onClick?: (
    url: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  ariaLabel?: string;
  id?: string;
}

/**
 * Type for a breadcrumb link with optional content.
 * Extends the ILink type with specific overrides.
 */
export type BreadcrumbLinkProps = Omit<
  LinkProps,
  'children' | 'onClick' | 'aria-label' | 'url'
> & {
  content?: string;
};

/**
 * Interface for a standalone breadcrumb component.
 * Includes optional CSS classes, link, crumb, and other properties.
 */
export interface BreadcrumbStandAloneProps extends DataAttributes {
  cssClasses?: BreadcrumbsCssClasses;
  link?: BreadcrumbLinkProps;
  crumb: BreadcrumbProps;
  lastCrumb?: boolean;
  lastOneCrumbComponent?: TextComponentType;
  dividerIcon?: CommonIconProps;
}

/**
 * Type for ARIA attributes used in breadcrumbs.
 */
type BreadcrumbAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-describedby' | 'aria-disabled' | 'aria-labelledby'
>;

/**
 * Interface for the standalone breadcrumbs component.
 * Includes ARIA attributes, crumbs, and optional properties.
 */
export interface BreadcrumbsStandAloneProps
  extends BreadcrumbAriaAttributes, DataAttributes {
  link?: BreadcrumbLinkProps;
  id?: string;
  crumbs: BreadcrumbProps[];
  minCharLimit?: number;
  dividerIcon?: CommonIconProps;
  lastOneCrumbComponent?: TextComponentType;
  cssClasses?: BreadcrumbsCssClasses;
}

/**
 * Interface for the controlled breadcrumbs component.
 * Extends the BreadcrumbsStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the breadcrumbs.
 */
export interface BreadcrumbsProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<BreadcrumbsStandAloneProps, 'styles'> {
  variant?: Variant;
  additionalClasses?: Partial<BreadcrumbsCssClasses>;
}
