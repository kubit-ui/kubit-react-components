import { type PropsWithChildren, forwardRef } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TableCellStandAloneProps } from './types/tableCell';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';

/**
 * Standalone table cell component for rendering td or th elements.
 *
 * This component renders a table cell with flexible positioning, alignment,
 * and styling options including sticky behavior and custom dimensions.
 *
 * @example
 * ```tsx
 * <TableCellStandAlone component="td">
 *   Cell content
 * </TableCellStandAlone>
 * ```
 */
export const TableCellStandAlone = forwardRef<
  HTMLTableCellElement,
  PropsWithChildren<TableCellStandAloneProps>
>(
  (
    {
      alignItems,
      bottom,
      children,
      colSpan,
      component,
      cssClasses,
      height,
      hidden,
      id,
      justifyContent,
      left,
      maxWidth,
      minWidth,
      onClick,
      onMouseEnter,
      onMouseLeave,
      right,
      role,
      rowSpan,
      scope,
      sticky,
      textAlign,
      th,
      top,
      verticalAlign,
      width,
      ...props
    },
    ref,
  ) => {
    const customProps = pickCustomAttributes(props);
    const tableCellVars = cssClasses?.dynamic_values({
      $tdAlignItems: alignItems || '',
      $tdBottom: bottom || '',
      $tdHeight: height || '',
      $tdJustifyContent: justifyContent || '',
      $tdLeft: left || '',
      $tdMaxWidth: maxWidth || '',
      $tdMinWidth: minWidth || '',
      $tdRight: right || '',
      $tdTextAlign: textAlign || '',
      $tdTop: top || '',
      $tdVerticalAlign: verticalAlign || '',
      $tdWidth: width || '',
    }).object;

    return (
      <CustomComponent
        ref={ref}
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
        className={cssClasses?.table_cell}
        colSpan={colSpan}
        component={component || (th ? 'th' : 'td')}
        data-hidden={hidden}
        data-sticky={sticky}
        data-testid="table-cell"
        id={id}
        role={role}
        rowSpan={rowSpan}
        scope={scope}
        style={tableCellVars}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...customProps}
      >
        {hidden ? <span>{children}</span> : children}
      </CustomComponent>
    );
  },
);
