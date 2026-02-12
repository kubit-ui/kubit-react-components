/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type IconCssClasses = ComponentSelected<ComponentsTypesComponents['ICON']>;

/**
 * Represents the ARIA attributes for the icon component.
 */
type IconAriaProps = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-controls'
  | 'aria-checked'
  | 'aria-hidden'
  | 'aria-haspopup'
  | 'aria-expanded'
>;

/**
 * Interface for the standalone Icon component.
 * Includes ARIA attributes, styling options, event handlers, and additional attributes.
 */
export interface IconStandAloneProps extends IconAriaProps, DataAttributes {
  id?: string;
  altText?: string;
  color?: string;
  height?: string;
  icon: string;
  fallbackIcon?: string;
  loading?: 'lazy' | 'eager';
  linearIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLImageElement | SVGSVGElement>;
  width?: string;
  rotate?: string;
  transitionDuration?: string;
  disabled?: boolean;
  fileExtension?: string;
  tabIndex?: number;
  twistAnimationTransformValue?: string | null | undefined;
  complex?: boolean;
  title?: string;
  className?: string;
  customAttributes?: Record<string, string | boolean | any>;
  cssClasses?: IconCssClasses;
}

/**
 * Interface for the Icon component with additional properties.
 * Extends the IconStandAloneProps interface and adds screen reader text.
 */
export interface IconProps extends Omit<
  IconStandAloneProps,
  'onKeyDown' | 'linearIcon'
> {
  screenReaderText?: string;
}

/**
 * Interface for a complex Icon component.
 * Includes additional properties for animations and transformations.
 */
export interface IconComplexProps extends DataAttributes {
  id?: string;
  color?: string;
  height?: string;
  width?: string;
  emptyAltText?: boolean;
  altText?: string;
  icon: string;
  rotate?: string;
  transitionDuration?: string;
  twistAnimationTransformValue?: string | null | undefined;
  moveRound?: string;
  className?: string;
  customAttributes?: Record<string, string | boolean | any>;
  cssClasses?: IconCssClasses;
}
