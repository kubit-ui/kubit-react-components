import { forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { InputBaseStandAloneProps } from './types/inputBase';

/**
 * Standalone base input component for rendering the core input element.
 *
 * This component renders the underlying `<input>` element with minimal styling.
 * It is used as the foundation for higher-level input components.
 *
 * @example
 * ```tsx
 * <InputBaseStandAlone
 *   type="text"
 *   value=""
 *   onChange={() => {}}
 * />
 * ```
 */
export const InputBaseStandAlone = forwardRef<
  HTMLInputElement,
  InputBaseStandAloneProps
>(({ cssClasses, truncate, ...props }, ref) => {
  const customProps = pickCustomAttributes(props);

  return (
    <input
      ref={ref}
      className={cssClasses?.input_base}
      {...props}
      {...customProps}
    />
  );
});
