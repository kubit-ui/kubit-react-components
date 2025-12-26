import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import type { TableCaptionStandAloneProps } from './types/tableCaption';

export const TableCaptionStandAlone = forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<TableCaptionStandAloneProps>
>(
  (
    { children, component = 'caption', cssClasses, hidden, id, ...props },
    ref,
  ) => {
    const customProps = pickCustomAttributes(props);

    return (
      <CustomComponent
        ref={ref}
        className={cssClasses?.table_caption}
        component={component}
        data-hidden={hidden}
        id={id}
        {...customProps}
      >
        {children}
      </CustomComponent>
    );
  },
);
