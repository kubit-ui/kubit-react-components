import { forwardRef, useImperativeHandle, useRef } from 'react';

import { CustomComponent } from '@/lib/components/customComponent/customComponent';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processIcon } from '@/lib/utils/process/processIcon/processIcon';

import type { ToggleStandaloneProps } from './types/toggle';

import { buildComponentProps } from './utils/buildComponentProps';
import { useToggleTransform } from './utils/thumbTransformCalculations';

/**
 * Toggle StandAlone - Atomic toggle component with dual rendering modes
 *
 * @description
 * Atomic toggle component that implements the WAI-ARIA switch pattern with support
 * for both interactive and decorative rendering modes. This architectural pattern
 * solves complex accessibility challenges in modern UI design using Venus patterns.
 *
 * ## Rendering Modes
 *
 * **Interactive Mode (component="button")**:
 * - Full WAI-ARIA switch implementation
 * - Handles own focus, keyboard, and click events
 * - Suitable for standalone toggles
 *
 * **Decorative Mode (component="span" | "div")**:
 * - Visual-only representation with aria-hidden="true"
 * - No interactive behavior or accessibility attributes
 * - Designed for use within larger clickable containers
 * - Prevents nested interactive element accessibility violations
 *
 * @architectural_pattern
 * The decorative mode addresses a common accessibility challenge where designers
 * want toggles inside clickable cards/list items. Instead of creating nested
 * interactive elements (accessibility violation), the toggle becomes purely visual
 * while the parent container handles all interaction and accessibility.
 *
 * Uses Venus architecture with CustomComponent and buildComponentProps factory
 * for consistent prop generation and accessibility patterns. Icons are rendered
 * using ElementOrIcon for consistent icon handling and accessibility.
 *
 * @example
 * ```tsx
 * // Interactive toggle with icons
 * <ToggleStandAlone
 *   component="button"
 *   checked={true}
 *   onClick={(e) => console.log('clicked')}
 *   rightIcon={{ icon: "checkmark", altText: "Active" }}
 *   leftIcon={{ icon: "close", altText: "Inactive" }}
 *   cssClasses={{}}
 * />
 *
 * // Decorative toggle in clickable container
 * <div onClick={handleContainerClick}>
 *   <ToggleStandAlone
 *     component="span"
 *     checked={state}
 *     cssClasses={{}}
 *   />
 *   <span>Toggle this option</span>
 * </div>
 * ```
 *
 * @returns The rendered toggle element.
 */

const ToggleStandAloneComponent = (
  {
    checked = false,
    component = 'button',
    cssClasses,
    dataTestId = 'toggle',
    disabled = false,
    id,
    leftIcon,
    name,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    rightIcon,
    tabIndex,
    value,
    ...props
  }: ToggleStandaloneProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
): JSX.Element => {
  const shouldShowRightIcon = checked && !!rightIcon;
  const shouldShowLeftIcon = !checked && !!leftIcon;

  // Determine component rendering mode based on element type
  // Interactive mode: component="button" -> full accessibility, event handling
  // Decorative mode: component="span|div" -> visual only, aria-hidden, no interaction
  const decorative = component !== 'button';

  const trackRef = useRef<HTMLButtonElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const { transform } = useToggleTransform({ checked, thumbRef, trackRef });

  // Expose the trackRef to parent components using useImperativeHandle
  // This way external consumers get the same ref used for transform calculations
  useImperativeHandle(ref, () => trackRef.current as HTMLButtonElement, []);

  const customProps = pickCustomAttributes(props);

  // Build appropriate props for toggle component based on rendering mode
  // Uses the factory pattern to generate correct accessibility and form attributes
  const componentProps = buildComponentProps({
    'aria-describedby': props['aria-describedby'],
    'aria-label': props['aria-label'],
    'aria-labelledby': props['aria-labelledby'],
    checked,
    decorative,
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
  });

  return (
    <CustomComponent
      {...customProps}
      {...componentProps}
      ref={trackRef}
      className={cssClasses?.track}
      component={component}
      data-checked={checked ? true : undefined}
      data-disabled={disabled ? true : undefined}
      data-testid={dataTestId}
    >
      <span
        ref={thumbRef}
        className={cssClasses?.thumb}
        data-checked={checked ? true : undefined}
        data-disabled={disabled ? true : undefined}
        style={{ transform }}
      >
        {/* Right Icon - shown when toggle is ON */}
        <div
          className={cssClasses?.iconwrapper}
          data-testid={`${dataTestId}-right-icon`}
          style={{ opacity: shouldShowRightIcon ? 1 : 0 }}
        >
          <ElementOrIcon
            className={cssClasses?.icon}
            data-disabled={disabled ? true : undefined}
            {...processIcon(rightIcon)}
          />
        </div>

        {/* Left Icon - shown when toggle is OFF */}
        <div
          className={cssClasses?.iconwrapper}
          data-testid={`${dataTestId}-left-icon`}
          style={{ opacity: shouldShowLeftIcon ? 1 : 0 }}
        >
          <ElementOrIcon
            className={cssClasses?.icon}
            data-disabled={disabled ? true : undefined}
            {...processIcon(leftIcon)}
          />
        </div>
      </span>
    </CustomComponent>
  );
};

ToggleStandAloneComponent.displayName = 'ToggleStandAlone';

export const ToggleStandalone = forwardRef(ToggleStandAloneComponent);
