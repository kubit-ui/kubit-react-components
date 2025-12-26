import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useManageState } from '@/lib/hooks/useManageState/useManageState';
import { STATES } from '@/lib/types/states/states';
import { processIcon } from '@/lib/utils/process/processIcon/processIcon';

import { ButtonStandAlone } from './buttonStandAlone';
import type { ButtonProps } from './types/button';

/**
 * Generic button component for triggering actions or submitting forms.
 *
 * This component supports custom variants and sizes through generic type parameters,
 * allowing you to extend the button's appearance and behavior for your design system.
 * It handles disabled and loading states, and can render an icon and/or children.
 *
 * Internally, it uses {@link ButtonStandAlone} for rendering and applies CSS classes
 * based on the provided variant and size.
 *
 * ### Generics
 * - `<Variant extends string | undefined>`: Allows you to define custom variant types for theming.
 * - `<Size extends string | undefined>`: Allows you to define custom size types for sizing.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 *
 * // With custom variant and size types:
 * type MyVariant = "primary" | "danger";
 * type MySize = "sm" | "lg";
 * <Button<MyVariant, MySize> variant="danger" size="lg">Delete</Button>
 * ```
 *
 * @returns The rendered button element, or null if no content is provided.
 */
export const Button = forwardRef(
  <Variant extends string | undefined, Size extends string | undefined>(
    {
      additionalSizeClasses,
      additionalVariantClasses,
      children,
      disabled = false,
      icon,
      loading = false,
      size,
      type = 'button',
      variant,
      ...props
    }: ButtonProps<Variant, Size>,
    ref: ForwardedRef<HTMLButtonElement> | undefined | null,
  ): JSX.Element | null => {
    const cssVariantClasses = useClassName({
      additionalClassNames: additionalVariantClasses,
      component: 'BUTTON',
      variant,
    });
    const cssSizeClasses = useClassName({
      additionalClassNames: additionalSizeClasses,
      component: 'BUTTON',
      variant: size,
    });

    const { setRef } = useManageState({
      disabled,
      loading,
      ref: ref as ForwardedRef<HTMLElement> | undefined | null,
      states: Object.values(STATES),
    });

    if (!children && !processIcon(icon).icon) {
      return null;
    }

    return (
      <ButtonStandAlone
        {...props}
        ref={setRef as ForwardedRef<HTMLButtonElement>}
        cssSizeClasses={cssSizeClasses}
        cssVariantClasses={cssVariantClasses}
        disabled={disabled}
        icon={icon}
        loading={loading}
        type={type}
      >
        {children}
      </ButtonStandAlone>
    );
  },
);
