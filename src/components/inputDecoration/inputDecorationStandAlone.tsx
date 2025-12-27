import { forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { InputDecorationStandAloneProps } from './types/inputDecoration';

import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';

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
