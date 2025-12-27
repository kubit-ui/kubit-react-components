import {
  type PropsWithChildren,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TableProps } from './types/table';

import { useTableHasScroll } from './hooks/useTableHasScroll';
import { useTableShadow } from './hooks/useTableShadow';
import { useTableStickyLeftColumns } from './hooks/useTableStickyLeftColumns';
import { useTableStickyRightColumns } from './hooks/useTableStickyRightColumns';
import { TableStandAlone } from './tableStandAlone';

export const Table = forwardRef<HTMLDivElement, PropsWithChildren<TableProps>>(
  (
    {
      additionalClasses,
      autoLeftStickyCalc = true,
      autoRightStickyCalc = true,
      disableShadowEffects,
      hasScrollDisabled,
      variant,
      ...props
    },
    ref,
  ) => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'TABLE',
      variant,
    });
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    const { hasScroll } = useTableHasScroll({
      disabled: hasScrollDisabled,
      ref: innerRef,
    });

    useTableStickyRightColumns({
      disabled: !autoRightStickyCalc,
      ref: innerRef,
    });

    useTableStickyLeftColumns({
      disabled: !autoLeftStickyCalc,
      ref: innerRef,
    });

    useTableShadow({
      disabled: disableShadowEffects,
      headBoxShadow: cssClasses?.headboxshadow,
      leftBoxShadow: cssClasses?.leftboxshadow,
      ref: innerRef,
      rightBoxShadow: cssClasses?.rightboxshadow,
    });

    return (
      <TableStandAlone
        ref={innerRef}
        cssClasses={cssClasses}
        hasScroll={hasScroll}
        {...props}
      />
    );
  },
);
