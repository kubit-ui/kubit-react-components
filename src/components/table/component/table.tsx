import React from 'react';

import { Footer } from '@/components/footer/footer';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks/useId/useId';
import { ROLES } from '@/types/role/role';
import { pickAriaProps } from '@/utils/aria/aria';

import {
  TableCaptionStyled,
  TableColumnHeaderStyled,
  TableEmptyColumnHeaderStyled,
  TableRowGroupBodyStyled,
  TableRowGroupHeaderStyled,
  TableRowHeaderStyled,
  TableStyled,
} from '../table.styled';
import { ConfigType, ITableStandAlone } from '../types/table';
import { TableRow } from './tableRow';

interface ITableComponent extends Omit<ITableStandAlone, 'headerVariant'> {
  initialExpanded: boolean;
  hasSomeExpandedContent: boolean;
  headerVariant: string;
}

export const TableComponent = (
  { ariaHiddenDividerColumn = true, ariaHiddenEmptyColumn = true, ...props }: ITableComponent,
  ref: React.ForwardedRef<HTMLTableElement> | undefined | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  const footerVariant = props.footer?.variant ?? props.styles?.footerVariant;
  const uniqueId = useId('tableCaption');
  const DIVIDER_CONTENT = 'DividerContent';
  const hasSomeDivider = props.headers.some(h => h.config?.hasDivider);
  const hasSomeDividerContent = props.values.some(o => {
    return !!Object.getOwnPropertyDescriptor(o, 'dividerContent');
  });
  const headersElement = props.headers.filter(
    ({ config }: { config?: ConfigType }) => !config?.hidden?.[props.device]
  );
  const headersElementWithoutDivider = headersElement.filter(
    element => !element.config?.hasDivider || !hasSomeDividerContent
  );
  const hasRowHeader = props.values.some(o => {
    return !!Object.getOwnPropertyDescriptor(o, 'rowHeader');
  });

  return (
    <>
      <TableStyled
        ref={ref}
        aria-describedby={uniqueId}
        data-testid={props.dataTestId}
        styles={props.styles.table}
        {...ariaProps}
      >
        <TableCaptionStyled id={uniqueId}>{props.captionDescription}</TableCaptionStyled>
        <TableRowGroupHeaderStyled
          $scrolling={props.scrolling}
          hidden={props.hiddenHeaderOn?.[props.device]}
          lineSeparatorBottomOnHeader={props.lineSeparatorBottomOnHeader}
          lineSeparatorLineStyles={props.lineSeparatorLineStyles}
          lineSeparatorTopOnHeader={props.lineSeparatorTopOnHeader}
          styles={props.styles.header?.[props.headerVariant]}
        >
          <TableRowHeaderStyled
            hasSomeDivider={hasSomeDivider}
            hasSomeDividerContent={hasSomeDividerContent}
            hasSomeExpandedContent={props.hasSomeExpandedContent}
            numberOfCells={headersElement.length}
            styles={props.styles.header?.[props.headerVariant]}
          >
            {hasRowHeader && (
              <TableEmptyColumnHeaderStyled
                aria-hidden={ariaHiddenEmptyColumn}
                styles={props.styles.header?.[props.headerVariant]}
              />
            )}
            {hasSomeDividerContent && (
              <TableColumnHeaderStyled
                key={'dividerContent'}
                aria-hidden={ariaHiddenDividerColumn}
                hasDivider={true}
                scope="col"
                styles={props.styles.header?.[props.headerVariant]}
              >
                <Text
                  component={TextComponentType.SPAN}
                  customTypography={props.styles.header?.[props.headerVariant]?.typography}
                >
                  {DIVIDER_CONTENT}
                </Text>
              </TableColumnHeaderStyled>
            )}
            {headersElementWithoutDivider.map((headerValue, index) => {
              const headerVariant = headerValue.variant ? headerValue.variant : props.headerVariant;
              return (
                <TableColumnHeaderStyled
                  key={headerValue.id}
                  aria-hidden={headerValue.config?.['aria-hidden']}
                  customAlign={
                    headerValue?.config?.alignHeader?.[props.device] ||
                    headerValue?.config?.alignHeader
                  }
                  customBackgroundColor={headerValue?.config?.backgroundColor}
                  customWidth={headerValue?.config?.width}
                  flexWidth={headerValue?.config?.flexWidth}
                  hasDivider={headerValue?.config?.hasDivider}
                  scope="col"
                  showDivider={
                    headerValue?.config?.srOnlyHeader?.[props.device] ||
                    headerValue?.config?.showDividerHeader
                  }
                  srOnly={
                    headerValue?.config?.srOnlyHeader?.[props.device] ||
                    headerValue?.config?.srOnlyHeader
                  }
                  styles={props.styles.header?.[headerVariant]}
                >
                  <Text
                    align={
                      headerValue?.config?.alignHeader?.[props.device] ||
                      headerValue?.config?.alignHeader
                    }
                    component={TextComponentType.SPAN}
                    customTypography={props.styles.header?.[headerVariant]?.typography}
                  >
                    {headerValue.label}
                  </Text>
                </TableColumnHeaderStyled>
              );
            })}
            {props.hasSomeExpandedContent && (
              <TableColumnHeaderStyled
                key={'expandedContent'}
                hasDivider={true}
                scope="col"
                styles={props.styles.header?.[props.headerVariant]}
              >
                <Text
                  component={TextComponentType.SPAN}
                  customTypography={props.styles.header?.[props.headerVariant]?.typography}
                >
                  {'ExpandedContent'}
                </Text>
              </TableColumnHeaderStyled>
            )}
          </TableRowHeaderStyled>
        </TableRowGroupHeaderStyled>
        <TableRowGroupBodyStyled
          aria-label={props.hasScroll ? props.tBodyScrollArias?.['aria-label'] : undefined}
          aria-labelledby={
            props.hasScroll ? props.tBodyScrollArias?.['aria-labelledby'] : undefined
          }
          role={props.hasScroll ? ROLES.REGION : undefined}
          styles={props.styles}
          tabIndex={props.hasScroll ? 0 : undefined}
        >
          {props.values.map((value, indexValue) => {
            return (
              <TableRow
                {...props}
                key={indexValue}
                hasSomeDivider={hasSomeDivider}
                hasSomeDividerContent={hasSomeDividerContent}
                hasSomeExpandedContent={props.hasSomeExpandedContent}
                headers={headersElement}
                indexRow={indexValue}
                value={value}
              />
            );
          })}
        </TableRowGroupBodyStyled>
      </TableStyled>
      {props.footer?.content && footerVariant && (
        <Footer simpleContainer={false} {...props.footer} variant={footerVariant}>
          {props.footer.content}
        </Footer>
      )}
    </>
  );
};

/**
 * @description
 * Table component is used to display data in a tabular format.
 */

export const Table = React.forwardRef(TableComponent);
