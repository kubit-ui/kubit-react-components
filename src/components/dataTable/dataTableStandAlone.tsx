import { Fragment, forwardRef } from 'react';

import { RenderIf } from '@/components/renderIf/renderIf';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { Table } from '../table/table';
import { TableBody } from '../tableBody/tableBody';
import { TableCaption } from '../tableCaption/tableCaption';
import { TableDivider } from '../tableDivider/tableDivider';
import { DataTableHead } from './components/dataTableHead';
import { DataTableRows } from './components/dataTableRows';
import { HiddenDataTableHead } from './components/hiddenDataTableHead';
import type { DataTableStandAloneProps } from './types/dataTable';
import {
  applyPositionToWrapper,
  applyZIndexToWrapper,
} from './utils/tableConfig';

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
          aria-label={hasScroll ? props['aria-label'] : undefined}
          aria-labelledby={hasScroll ? props['aria-labelledby'] : undefined}
          className={cssClasses?.scrollablecontainer}
          data-datatable-scrollable-container={true}
          role={hasScroll ? 'region' : undefined}
          {...(hasScroll ? { tabIndex: 0 } : {})}
        >
          <Table
            additionalClasses={cssClasses?.table}
            aria-hidden={usingRowGroups ? true : undefined}
            autoLeftStickyCalc={false}
            autoRightStickyCalc={false}
            component={usingRowGroups ? 'div' : undefined}
            disableShadowEffects={true}
            hasScrollDisabled={true}
            sticky={stickyHead}
            {...applyZIndexToWrapper({
              tableConfig: config?.table,
              zIndex: 1,
            })}
          >
            <RenderIf condition={!!caption?.content}>
              <TableCaption
                additionalClasses={cssClasses?.table_caption}
                component={usingRowGroups ? 'div' : undefined}
                {...caption}
              >
                {caption?.content}
              </TableCaption>
            </RenderIf>
            <DataTableHead
              columns={columns}
              cssClasses={cssClasses}
              sticky={stickyHead}
              tableHeadConfig={config?.tableHead}
              tableHeadRowConfig={config?.tableHeadRow}
              usingRowGroups={usingRowGroups}
            />
            <RenderIf condition={!usingRowGroups && rows && rows.length > 0}>
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
            </RenderIf>
          </Table>
          {rowGroups?.map((rowGroup, index) => {
            return (
              <Fragment
                key={`${rowGroup.caption?.['data-testid']}-${index.toString()}`}
              >
                <RenderIf condition={!!rowGroup.divider}>
                  <TableDivider variant="DEFAULT" {...rowGroup.divider}>
                    {rowGroup.divider?.content}
                  </TableDivider>
                </RenderIf>
                <Table
                  additionalClasses={cssClasses?.row_group_table}
                  autoLeftStickyCalc={false}
                  autoRightStickyCalc={false}
                  disableShadowEffects={true}
                  hasScrollDisabled={true}
                  {...applyPositionToWrapper({
                    position: 'static',
                    tableConfig: rowGroup.config?.table,
                  })}
                >
                  <RenderIf condition={!!rowGroup.caption?.content}>
                    <TableCaption
                      additionalClasses={cssClasses?.row_group_table_caption}
                      {...rowGroup.caption}
                    >
                      {rowGroup.caption?.content}
                    </TableCaption>
                  </RenderIf>
                  <HiddenDataTableHead
                    columns={columns}
                    cssClasses={cssClasses}
                  />
                  <TableBody
                    additionalClasses={cssClasses?.row_group_table_body}
                    {...rowGroup.config?.tableBody}
                  >
                    <DataTableRows
                      activeRows={activeRows}
                      columns={columns}
                      cssClasses={cssClasses}
                      hoverable={hoverable}
                      hoverableRows={hoverableRows}
                      isRowGroup={true}
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
          className={cssClasses?.leftboxshadowcontainer}
          data-datatable-left-shadow={true}
        />
        {/* This is the sticky border shadow, it needs to be an independent element in order to be shown on the dividers and have a right-2-left shadow */}
        <div
          className={cssClasses?.rightboxshadowcontainer}
          data-datatable-right-shadow={true}
        />
      </div>
    );
  },
);
