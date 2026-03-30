import { Fragment, forwardRef } from 'react';

import { TableBody } from '@/components/tableBody/tableBody';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { DataTableStandAloneProps } from './types/dataTable';

import { Table } from '../table/table';
import { TableCaption } from '../tableCaption/tableCaption';
import { TableDivider } from '../tableDivider/tableDivider';
import { DataTableHead } from './components/dataTableHead';
import { DataTableRows } from './components/dataTableRows';
import { HiddenDataTableHead } from './components/hiddenDataTableHead';
import {
  applyPositionToWrapper,
  applyZIndexToWrapper,
} from './utils/tableConfig';

/**
 * Standalone data table component for displaying structured tabular data.
 *
 * This component renders a complete table with headers, body, rows, and cells.
 * It supports scrolling, sticky columns, active row selection, and custom configurations
 * for complex table layouts.
 *
 * @example
 * ```tsx
 * <DataTableStandAlone
 *   columns={[{ field: 'name', header: 'Name' }]}
 *   rows={[{ name: 'John' }]}
 * />
 * ```
 */
export const DataTableStandAlone = forwardRef<
  HTMLDivElement,
  DataTableStandAloneProps
>(
  (
    {
      activeRows,
      caption,
      columns,
      config,
      cssClasses,
      hasScroll,
      hoverable,
      hoverableRows,
      nonHoverableRows,
      rowGroups,
      rows,
      stickyHead,
      styles,
      ...props
    },
    ref,
  ) => {
    const usingRowGroups = rowGroups && rowGroups.length > 0;
    const customProps = pickCustomAttributes(props);

    return (
      <div
        ref={ref}
        className={cssClasses?.data_table}
        data-testid="data-table"
        {...customProps}
      >
        <div
          data-datatable-scrollable-container
          aria-label={hasScroll ? props['aria-label'] : undefined}
          aria-labelledby={hasScroll ? props['aria-labelledby'] : undefined}
          className={cssClasses?.scrollablecontainer}
          role={hasScroll ? 'region' : undefined}
          {...(hasScroll ? { tabIndex: 0 } : {})}
        >
          <Table
            disableShadowEffects
            hasScrollDisabled
            additionalClasses={cssClasses?.table}
            aria-hidden={usingRowGroups ? true : undefined}
            autoLeftStickyCalc={false}
            autoRightStickyCalc={false}
            component={usingRowGroups ? 'div' : undefined}
            sticky={stickyHead}
            {...applyZIndexToWrapper({
              tableConfig: config?.table,
              zIndex: 1,
            })}
          >
            {!!caption?.content && (
              <TableCaption
                additionalClasses={cssClasses?.table_caption}
                component={usingRowGroups ? 'div' : undefined}
                {...caption}
              >
                {caption?.content}
              </TableCaption>
            )}
            <DataTableHead
              columns={columns}
              cssClasses={cssClasses}
              sticky={stickyHead}
              tableHeadConfig={config?.tableHead}
              tableHeadRowConfig={config?.tableHeadRow}
              usingRowGroups={usingRowGroups}
            />
            {!usingRowGroups && rows && rows.length > 0 && (
              <TableBody
                additionalClasses={cssClasses?.table_body}
                {...config?.tableBody}
              >
                <DataTableRows
                  activeRows={activeRows}
                  columns={columns}
                  cssClasses={cssClasses}
                  hoverable={hoverable}
                  hoverableRows={hoverableRows}
                  nonHoverableRows={nonHoverableRows}
                  rows={rows}
                  usingRowGroups={usingRowGroups}
                />
              </TableBody>
            )}
          </Table>
          {rowGroups?.map((rowGroup, index) => {
            return (
              <Fragment
                key={`${rowGroup.caption?.['data-testid']}-${index.toString()}`}
              >
                {!!rowGroup.divider && (
                  <TableDivider variant="DEFAULT" {...rowGroup.divider}>
                    {rowGroup.divider?.content}
                  </TableDivider>
                )}
                <Table
                  disableShadowEffects
                  hasScrollDisabled
                  additionalClasses={cssClasses?.row_group_table}
                  autoLeftStickyCalc={false}
                  autoRightStickyCalc={false}
                  {...applyPositionToWrapper({
                    position: 'static',
                    tableConfig: rowGroup.config?.table,
                  })}
                >
                  {!!rowGroup.caption?.content && (
                    <TableCaption
                      additionalClasses={cssClasses?.row_group_table_caption}
                      {...rowGroup.caption}
                    >
                      {rowGroup.caption?.content}
                    </TableCaption>
                  )}
                  <HiddenDataTableHead
                    columns={columns}
                    cssClasses={cssClasses}
                  />
                  <TableBody
                    additionalClasses={cssClasses?.row_group_table_body}
                    {...rowGroup.config?.tableBody}
                  >
                    <DataTableRows
                      isRowGroup
                      activeRows={activeRows}
                      columns={columns}
                      cssClasses={cssClasses}
                      hoverable={hoverable}
                      hoverableRows={hoverableRows}
                      nonHoverableRows={nonHoverableRows}
                      rows={rowGroup.rows}
                      usingRowGroups={usingRowGroups}
                    />
                  </TableBody>
                </Table>
              </Fragment>
            );
          })}
        </div>
        {/* This is the left border shadow, it needs to be an independent element in order to the inner scroll content do not hide it */}
        <div
          data-datatable-left-shadow
          className={cssClasses?.leftboxshadowcontainer}
        />
        {/* This is the sticky border shadow, it needs to be an independent element in order to be shown on the dividers and have a right-2-left shadow */}
        <div
          data-datatable-right-shadow
          className={cssClasses?.rightboxshadowcontainer}
        />
      </div>
    );
  },
);
