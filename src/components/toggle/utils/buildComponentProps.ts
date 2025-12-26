import type { ToggleStandaloneProps } from '../types/toggle';

/**
 * Props extracted from IToggleStandAlone to build component properties
 * Only includes props relevant for element attribute construction
 */
export type ToggleElementBaseProps = Pick<
  ToggleStandaloneProps,
  | 'id'
  | 'name'
  | 'value'
  | 'tabIndex'
  | 'checked'
  | 'disabled'
  | 'onClick'
  | 'onFocus'
  | 'onBlur'
  | 'onKeyDown'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'aria-label'
  | 'aria-describedby'
  | 'aria-labelledby'
>;

/**
 * Complete props that the toggle element can have (includes additional HTML/ARIA attributes)
 */
export type ToggleElementProps = ToggleElementBaseProps & {
  'aria-hidden'?: boolean;
  'aria-checked'?: boolean;
  role?: string;
};

/**
 * Configuration for building component props
 */
export interface BuildPropsConfig extends ToggleElementBaseProps {
  decorative: boolean;
}

/**
 * Returns props for decorative toggle elements
 *
 * Decorative toggles:
 * - Are hidden from assistive technology (aria-hidden="true")
 * - Have no role or interactive attributes
 * - Don't receive focus or handle events
 * - Are used within clickable containers that handle interaction
 * - Only preserve id for styling/targeting purposes
 */
const getDecorativeProps = (config: BuildPropsConfig): ToggleElementProps => ({
  'aria-hidden': true,
  id: config.id,
  // Form attributes are undefined for decorative elements
  name: undefined,
  value: undefined,
});

/**
 * Builds interactive props for a toggle component with accessibility support.
 *
 * @param config - Configuration object containing component properties and event handlers
 * @returns An object containing all interactive props including ARIA attributes,
 *          event handlers, and HTML button attributes configured for a toggle switch
 */
const getInteractiveProps = (config: BuildPropsConfig): ToggleElementProps => {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    checked,
    disabled,
    id,
    name,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    tabIndex,
    value,
  } = config;

  return {
    'aria-checked': Boolean(checked),
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    disabled: Boolean(disabled),
    id,
    name,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    role: 'switch',
    tabIndex,
    value,
  };
};

/**
 * Build appropriate props for toggle component based on rendering mode
 *
 * @description
 * Factory function that returns different prop sets depending on whether the toggle
 * should be interactive (button) or decorative (span/div). This architectural pattern
 * ensures proper accessibility while maintaining design flexibility.
 *
 * **Interactive Mode Logic:**
 * When `component="button"`, creates a fully accessible toggle:
 * - Sets `role="switch"` and `aria-checked` for screen readers
 * - Adds keyboard handlers for Space and Enter keys
 * - Includes click handler that calls onChange
 * - Respects disabled state and tabIndex
 * - Forwards aria-label for accessibility
 *
 * **Decorative Mode Logic:**
 * When `component` is anything else ("span", "div"), creates visual-only element:
 * - Sets `aria-hidden="true"` to hide from assistive technology
 * - Removes all interactive behavior and ARIA attributes
 * - No event handlers (parent container handles interaction)
 * - Only preserves visual styling and data attributes
 *
 * @param config - Complete configuration including decorative flag and all props
 * @returns Complete props object for the toggle element including accessibility and form attributes
 */
export const buildComponentProps = (
  config: BuildPropsConfig,
): ToggleElementProps => {
  return config.decorative
    ? getDecorativeProps(config)
    : getInteractiveProps(config);
};
