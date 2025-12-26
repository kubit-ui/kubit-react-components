import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import type { TableStandAloneProps } from './types/table';

/**
 * TableStandAloneComponent - A standalone table component with customizable scroll and sticky options.
 *
 * @param {PropsWithChildren<TableStandAloneProps>} props - The properties for the table component.
 * @param {React.ForwardedRef<HTMLDivElement>} ref - The forwarded ref for the table wrapper div.
 * @returns {JSX.Element} The rendered table component.
 */
export const TableStandAlone = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableStandAloneProps>
>(
  (
    {
      children,
      component = 'table',
      cssClasses,
      hasScroll,
      hasScrollDisabled,
      sticky,
      ...props
    },
    ref,
  ) => {
    const customProps = pickCustomAttributes(props);
    const dataTestId = props['data-testid'] || 'table-standalone';
    return (
      <div
        ref={ref}
        className={cssClasses?.table}
        data-sticky={sticky}
        data-testid={`${dataTestId}-wrapper`}
      >
        {/* Display table, by default does not allow scroll, that's why we need to add a wrapper */}
        <div
          aria-hidden={props['aria-hidden']}
          aria-label={hasScroll ? props['aria-label'] : undefined}
          aria-labelledby={hasScroll ? props['aria-labelledby'] : undefined}
          className={cssClasses?.scrollablecontainer}
          data-table-scrollable-container={true}
          data-testid={`${dataTestId}-scrollable-container`}
          role={hasScroll ? 'region' : undefined}
          style={{ overflow: hasScrollDisabled ? 'visible' : 'auto' }}
          {...(hasScroll ? { tabIndex: 0 } : {})}
        >
          <CustomComponent
            className={cssClasses?.container}
            component={component}
            data-testid={dataTestId}
            {...customProps}
          >
            {children}
          </CustomComponent>
        </div>
        {/* This is the left border shadow, it needs to be an independent element in order to the inner scroll content do not hide it */}
        <div
          className={cssClasses?.leftboxshadowcontainer}
          data-table-left-shadow={true}
        />
        {/* This is the sticky border shadow, it needs to be an independent element in order to have a right-2-left shadow */}
        <div
          className={cssClasses?.rightboxshadowcontainer}
          data-table-right-shadow={true}
        />
      </div>
    );
  },
);
