import type { CommonIconProps } from '@/lib/types/commons/icon';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type ToggleVariantCssClasses = ComponentSelected<
  ComponentsTypesComponents['TOGGLE']
>;

type ToggleAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-describedby' | 'aria-labelledby'
>;

/**
 * Interface for the standalone Toggle component.
 * Includes all basic props, ARIA attributes, and event handlers.
 */
export interface ToggleStandaloneProps
  extends DataAttributes, ToggleAriaAttributes {
  /** Toggle state (true = active, false = inactive) */
  checked?: boolean;
  /** Component type to render as, defaults to 'button'. Use 'span' or 'div' for decorative toggles */
  component?: React.ElementType;
  cssClasses?: ToggleVariantCssClasses;
  /** Test identifier for the component */
  dataTestId?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Unique component ID */
  id?: string;
  /** Icon displayed on the left side when the toggle is inactive */
  leftIcon?: CommonIconProps;
  /** Name for forms */
  name?: string;
  // Native button event handlers
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  /** Icon displayed on the right side when the toggle is active */
  rightIcon?: CommonIconProps;
  tabIndex?: number;
  /** Value for forms */
  value?: string;
}

/**
 * Interface for the Toggle component with a variant.
 * Extends the ToggleStandaloneProps interface and adds variant property with generic typing.
 *
 * @template Variant - The type of the variant for the Toggle.
 */
export interface ToggleProps<
  Variant = undefined extends string ? unknown : string,
> extends ToggleStandaloneProps {
  variant?: Variant;
  additionalVariantClasses?: Partial<ToggleVariantCssClasses>;
  onToggle?: (checked: boolean) => void;
}

/**
 * Interface for the uncontrolled Toggle component.
 * Excludes 'checked' prop and adds 'defaultChecked' for initial state.
 */
export interface ToggleUncontrolledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<ToggleProps<Variant>, 'checked'> {
  defaultChecked?: boolean;
}
