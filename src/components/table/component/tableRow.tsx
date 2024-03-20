/* eslint-disable complexity */
import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';

import { useContent } from '../hooks/useContent';
import {
  TableColumnBodyStyled,
  TableEmptyExpandedContentRow,
  TableExpandedButton,
  TableExpandedCellStyled,
  TableRowBodyStyled,
} from '../table.styled';
import { ITableStandAlone, IValue } from '../types';
import { TableDivider } from './tableDivider';

export interface ITableRow extends Omit<ITableStandAlone, 'values' | 'headerVariant'> {
  hasSomeExpandedContent?: boolean;
  initialExpanded: boolean;
  value: IValue;
  indexRow: number;
  hasSomeDivider: boolean;
  hasSomeDividerContent: boolean;
}

/**
 * @description
 * TableRow component is used to display a row in a table.
 */
export const TableRow = (props: ITableRow): JSX.Element => {
  const {
    divider,
    dividerValue,
    getExpandedAria,
    getValue,
    handleShowExpandedContent,
    hasExpandedContentRow,
    hasFooter,
    showExpandedContent,
    rowVariant,
  } = useContent({ ...props, index: props.indexRow });
  return (
    <>
      <TableRowBodyStyled
        borderPosition={props.value.rowBorderPosition}
        data-testid={`${props.dataTestId}Row${props.indexRow}`}
        hasDivider={!!dividerValue()}
        hasDividerContent={!!props.value.dividerContent}
        hasFooter={hasFooter}
        hasSomeDivider={props.hasSomeDivider}
        hasSomeDividerContent={props.hasSomeDividerContent}
        hasSomeExpandedContent={props.hasSomeExpandedContent}
        lineSeparatorLineStyles={props.lineSeparatorLineStyles}
        numberOfCells={props.headers.length}
        styles={props.styles.bodyRows?.[rowVariant]}
      >
        <TableDivider divider={dividerValue()} styles={props.styles.divider} />
        {props.headers
          .filter(headerValue => headerValue.id !== divider?.id)
          .map((headerValue, indexHeader) => {
            const hasExpandedIcon = indexHeader === 0;
            return (
              <TableColumnBodyStyled
                key={indexHeader}
                customAlign={
                  headerValue.config?.alignValue?.[props.device] ||
                  headerValue?.config?.alignValue ||
                  headerValue.config?.alignHeader?.[props.device] ||
                  headerValue?.config?.alignHeader
                }
                customBackgroundColor={props.value.backgroundColor}
                customWidth={headerValue.config?.width}
                data-testid={`${props.dataTestId}Row${props.indexRow}Content${indexHeader}`}
                flexWidth={headerValue.config?.flexWidth}
                hasSomeExpandedContent={props.hasSomeExpandedContent && hasExpandedIcon}
                styles={props.styles.bodyRows?.[rowVariant]}
              >
                {hasExpandedIcon &&
                  props.hasSomeExpandedContent &&
                  (hasExpandedContentRow ? (
                    <TableExpandedButton
                      aria-label={getExpandedAria()}
                      styles={props.styles.bodyRows?.[rowVariant]}
                      type={ButtonType.BUTTON}
                      onClick={() => {
                        props.onExpandedContentOpen?.(
                          !showExpandedContent,
                          getValue(headerValue),
                          indexHeader
                        );
                        handleShowExpandedContent(!showExpandedContent);
                      }}
                    >
                      <ElementOrIcon
                        customIconStyles={props.styles.bodyRows?.[rowVariant]?.accordionIcon}
                        rotate={showExpandedContent ? '180deg' : '0deg'}
                        {...props.accordionIcon}
                      />
                    </TableExpandedButton>
                  ) : (
                    <TableEmptyExpandedContentRow styles={props.styles.bodyRows?.[rowVariant]} />
                  ))}
                {getValue(headerValue) as React.ReactNode}
              </TableColumnBodyStyled>
            );
          })}
        {props.hasSomeExpandedContent && (
          <TableExpandedCellStyled
            data-testid={`${props.dataTestId}Row${props.indexRow}ExpandedContent`}
            showExpandedContent={showExpandedContent}
            styles={props.styles.bodyRows?.[rowVariant]}
          >
            {showExpandedContent && props.value.expandedContent
              ? props.value.expandedContent[props.device]
              : props.expandedContentHelpMessage}
          </TableExpandedCellStyled>
        )}
      </TableRowBodyStyled>
    </>
  );
};
