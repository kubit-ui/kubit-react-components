import { forwardRef } from 'react';

import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { InputDecorationStandAloneProps } from './types/inputDecoration';

/**
 * Standalone input decoration component for rendering icons beside input fields.
 *
 * This component renders decorative icons on the left or right side of an input.
 * It returns null if no decoration icon is provided.
 *
 * @example
 * ```tsx
 * <InputDecorationStandAlone
 *   decoration={{ icon: <SearchIcon /> }}
 *   disabled={false}
 * />
 * ```
 */
export const InputDecorationStandAlone = forwardRef<
  HTMLDivElement,
  InputDecorationStandAloneProps
>(({ cssClasses, decoration, disabled, ...props }, ref) => {
  if (!decoration?.icon) {
    return null;
  }
  const customProps = pickCustomAttributes(props);

  return (
    <div
      ref={ref}
      className={cssClasses?.input_decoration}
      style={{
        pointerEvents: decoration.onClick ? 'auto' : 'none',
      }}
      {...customProps}
    >
      <ElementOrIcon
        className={cssClasses?.decoration}
        {...decoration}
        onClick={decoration.onClick}
      />
    </div>
  );
});
