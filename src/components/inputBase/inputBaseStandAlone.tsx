import { forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { InputBaseStandAloneProps } from './types/inputBase';

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
