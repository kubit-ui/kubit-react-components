import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useGenericComponents } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';

import { disabledLink } from './helpers/disabled';
import { LinkStandAlone } from './linkStandAlone';
import type { LinkProps } from './types/link';

/**
 * Link is a versatile component that renders a link with consistent styling.
 * It supports custom CSS classes, ARIA properties, and forwards a ref to the inner component.
 *
 * @param {LinkProps} props - The props for the link component.
 * @param {ForwardedRef<HTMLElement>} ref - The forwarded ref for the inner component.
 * @returns {JSX.Element} The rendered link component.
 */
export const Link = forwardRef<HTMLElement, LinkProps>(
  (
    {
      action = 'navigation',
      additionalClasses,
      additionalTextClasses,
      alignCenter = false,
      color,
      decoration = 'auto',
      disabled = false,
      icon,
      role: roleProp,
      textVariant,
      variant,
      weight,
      ...props
    },
    ref,
  ): JSX.Element => {
    const { LINK: genericLinkComponent } = useGenericComponents();
    const { role } = disabledLink(disabled, roleProp);
    const ariaDisabled = disabled || undefined;

    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'LINK',
      variant: `${action}_${variant}`,
    });

    const cssTextClasses = useClassName({
      additionalClassNames: additionalTextClasses,
      component: 'TEXT',
      variant: textVariant,
    });

    return (
      <LinkStandAlone
        {...props}
        ref={ref}
        action={action}
        alignCenter={alignCenter}
        aria-disabled={ariaDisabled}
        color={color}
        component={genericLinkComponent}
        cssClasses={cssClasses}
        cssTextClasses={cssTextClasses}
        decoration={action === 'inline' ? 'underline' : decoration}
        disabled={disabled}
        icon={icon}
        role={role}
        weight={weight}
      />
    );
  },
);
