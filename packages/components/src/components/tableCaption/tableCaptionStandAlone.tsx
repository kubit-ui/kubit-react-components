import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableCaptionStandAloneProps } from './types/tableCaption';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * Standalone table caption component for rendering table titles.
 *
 * This component renders a caption element for tables, providing a title
 * or description with optional hidden visibility.
 *
 * @example
 * ```tsx
 * <TableCaptionStandAlone>
 *   Sales Report 2024
 * </TableCaptionStandAlone>
 * ```
 */
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
