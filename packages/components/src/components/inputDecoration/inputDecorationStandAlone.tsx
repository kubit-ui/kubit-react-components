import { forwardRef } from 'react';

import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processIconProp } from '@/lib/utils/process/processCommonProp';

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
  const processedDecoration = processIconProp(decoration);
  if (!processedDecoration?.icon) {
    return null;
  }
  const customProps = pickCustomAttributes(props);

  return (
    <div
      ref={ref}
      className={cssClasses?.input_decoration}
      style={{
        pointerEvents: processedDecoration.onClick ? 'auto' : 'none',
      }}
      {...customProps}
    >
      <ElementOrIcon
        className={cssClasses?.decoration}
        {...processedDecoration}
        onClick={processedDecoration.onClick}
      />
    </div>
  );
});
