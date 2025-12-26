import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useManageState } from '@/lib/hooks/useManageState/useManageState';
import { useGenericComponents } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';
import { STATES } from '@/lib/types/states/states';

import type { LinkAsButtonProps } from '../types/link';
import { LinkAsButtonStandAlone } from './linkAsButtonStandAlone';

export const LinkAsButton = forwardRef(
  (
    {
      additionalSizeClasses,
      additionalVariantClasses,
      disabled,
      size,
      variant,
      ...props
    }: LinkAsButtonProps,
    ref: ForwardedRef<HTMLElement> | undefined,
  ): JSX.Element => {
    const cssLinkAsButtonClasses = useClassName({
      component: 'LINK_AS_BUTTON',
    });
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

    const { LINK: genericLinkComponent } = useGenericComponents();

    const { setRef } = useManageState({
      disabled: disabled,
      ref,
      states: Object.values(STATES),
    });

    return (
      <LinkAsButtonStandAlone
        {...props}
        ref={setRef}
        component={genericLinkComponent}
        cssLinkAsButtonClasses={cssLinkAsButtonClasses}
        cssSizeClasses={cssSizeClasses}
        cssVariantClasses={cssVariantClasses}
        disabled={disabled}
      />
    );
  },
);
