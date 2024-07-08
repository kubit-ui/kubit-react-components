import * as React from 'react';

import { ROLES } from '@/types';

import { TableBody } from '../tableBody';
import { TableCaption } from '../tableCaption';
import { TableDivider } from '../tableDivider';
import { TableV2 } from '../tableV2';
import { DataTableHead, DataTableRows, HiddenDataTableHead } from './components';
import {
  LeftBoxShadowContainerStyled,
  RightBoxShadowContainerStyled,
  ScrollableContainerStyled,
  WrapperStyled,
} from './dataTable.styled';
import { IDataTableStandAlone } from './types';
import { applyPositionToWrapper, applyZIndexToWrapper } from './utils';

const DataTableStandAloneComponent = (
  {
    dataTestId = 'dataTable',
    styles,
    hasScroll,
    columns,
    rowGroups,
    rows,
    activeRows,
    hoverable,
    hoverableRows,
    nonHoverableRows,
    stickyHead,
    config,
    caption,
    ...props
  }: IDataTableStandAlone,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const usingRowGroups = rowGroups && rowGroups.length > 0;
  return (
    <WrapperStyled ref={ref} $styles={styles} data-testid={dataTestId}>
      <ScrollableContainerStyled
        data-datatable-scrollable-container
        $styles={styles}
        aria-label={hasScroll ? props['aria-label'] : undefined}
        aria-labelledby={hasScroll ? props['aria-labelledby'] : undefined}
        role={hasScroll ? ROLES.REGION : undefined}
        tabIndex={hasScroll ? 0 : undefined}
      >
        <TableV2
          autoRightStickyCalc={false}
          component={usingRowGroups ? 'div' : undefined}
          disableShadowEffects={true}
          hasScrollDisabled={true}
          sticky={stickyHead}
          variant={styles?.table?.variant}
          {...applyZIndexToWrapper({ tableConfig: config?.table, zIndex: styles?.table?.z_index })}
        >
          {caption?.content && (
            <TableCaption
              component={usingRowGroups ? 'div' : undefined}
              variant={styles?.tableCaption?.variant}
              {...caption}
            >
              {caption.content}
            </TableCaption>
          )}
          <DataTableHead
            columns={columns}
            sticky={stickyHead}
            tableHeadCellVariant={styles?.tableHeadCell?.variant}
            tableHeadConfig={config?.tableHead}
            tableHeadRowConfig={config?.tableHeadRow}
            tableHeadRowVariant={styles?.tableHeadRow?.variant}
            tableHeadVariant={styles?.tableHead?.variant}
            usingRowGroups={usingRowGroups}
          />
          {!usingRowGroups && rows && rows.length > 0 && (
            <TableBody variant={styles?.tableBody?.variant} {...config?.tableBody}>
              <DataTableRows
                activeRows={activeRows}
                columns={columns}
                hoverable={hoverable}
                hoverableRows={hoverableRows}
                nonHoverableRows={nonHoverableRows}
                rows={rows}
                tableBodyCellVariant={styles?.tableBodyCell?.variant}
                tableBodyRowVariant={styles?.tableBodyRow?.variant}
                usingRowGroups={usingRowGroups}
              />
            </TableBody>
          )}
        </TableV2>
        {rowGroups?.map((rowGroup, index) => {
          return (
            <React.Fragment key={index}>
              {rowGroup.divider && (
                <TableDivider variant="DEFAULT" {...rowGroup.divider}>
                  {rowGroup.divider?.content}
                </TableDivider>
              )}
              <TableV2
                autoRightStickyCalc={false}
                disableShadowEffects={true}
                hasScrollDisabled={true}
                variant={styles?.rowGroup?.table?.variant}
                {...applyPositionToWrapper({
                  tableConfig: rowGroup.config?.table,
                  position: 'static',
                })}
              >
                {rowGroup.caption?.content && (
                  <TableCaption
                    variant={styles?.rowGroup?.tableCaption?.variant}
                    {...rowGroup.caption}
                  >
                    {rowGroup.caption?.content}
                  </TableCaption>
                )}
                <HiddenDataTableHead
                  columns={columns}
                  tableHeadCellVariant={styles?.rowGroup?.tableHeadCell?.variant}
                  tableHeadRowVariant={styles?.rowGroup?.tableHeadRow?.variant}
                  tableHeadVariant={styles?.rowGroup?.tableHead?.variant}
                />
                <TableBody
                  variant={styles?.rowGroup?.tableBody?.variant}
                  {...rowGroup.config?.tableBody}
                >
                  <DataTableRows
                    activeRows={activeRows}
                    columns={columns}
                    hoverable={hoverable}
                    hoverableRows={hoverableRows}
                    nonHoverableRows={nonHoverableRows}
                    rows={rowGroup.rows}
                    tableBodyCellVariant={styles?.rowGroup?.tableBodyCell?.variant}
                    tableBodyRowVariant={styles?.rowGroup?.tableBodyRow?.variant}
                    usingRowGroups={usingRowGroups}
                  />
                </TableBody>
              </TableV2>
            </React.Fragment>
          );
        })}
      </ScrollableContainerStyled>
      {/* This is the left border shadow, it needs to be an independent element in order to the inner scroll content do not hide it */}
      <LeftBoxShadowContainerStyled data-datatable-left-shadow $styles={styles} />
      {/* This is the sticky border shadow, it needs to be an independent element in order to be shown on the dividers and have a right-2-left shadow */}
      <RightBoxShadowContainerStyled data-datatable-right-shadow $styles={styles} />
    </WrapperStyled>
  );
};

export const DataTableStandAlone = React.forwardRef(DataTableStandAloneComponent);
