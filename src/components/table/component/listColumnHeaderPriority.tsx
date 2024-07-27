import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { useContent } from '../hooks/useContent';
import {
  ListHeaderItemStylesStyled,
  ListItemExpandedStyled,
  ListItemHeaderPriorityStyled,
  ListRowContainerHeaderPriorityStyled,
  ListRowHeaderPriorityStyled,
  TableExpandedButton,
} from '../table.styled';
import { IListComponent, ITableHeader, IValue } from '../types';

export const ListColumnHeaderPriority = (props: IListComponent): JSX.Element => {
  return (
    <React.Fragment>
      {props.headers
        // By now you can't have a divider in a column header priority
        .filter(header => !header.config?.hasDivider)
        .map((header: ITableHeader, indexHeader: number) => {
          return (
            <ListRowContainerHeaderPriorityStyled
              key={indexHeader}
              // By now you can't have a divider in a column header priority
              hasDivider={false}
              lineSeparatorLineStyles={props.lineSeparatorLineStyles}
              styles={props.styles}
            >
              {header.label && (
                <ListHeaderItemStylesStyled
                  customAlign={
                    header?.config?.alignHeader?.[props.device] || header?.config?.alignHeader
                  }
                  customBackgroundColor={header?.config?.backgroundColor}
                  customWidth={header?.config?.width}
                  flexWidth={header?.config?.flexWidth}
                  hidden={props.hiddenHeaderOn?.[props.device]}
                  index={indexHeader}
                  lineSeparatorBottomOnHeader={props.lineSeparatorBottomOnHeader}
                  lineSeparatorLineStyles={props.lineSeparatorLineStyles}
                  lineSeparatorTopOnHeader={props.lineSeparatorTopOnHeader}
                  styles={props.styles.header?.[props.headerVariant]}
                >
                  <Text
                    component={TextComponentType.SPAN}
                    customTypography={props.styles.header?.[props.headerVariant]?.typography}
                    dataTestId={`${props.dataTestId}ItemListRowHeader${header.label}`}
                  >
                    {header.label}
                  </Text>
                </ListHeaderItemStylesStyled>
              )}
              <ListRowHeaderPriorityStyled styles={props.styles}>
                {/* If rowHeader, render it first */}
                {props.values.map((value, indexValue) => {
                  return (
                    <ListColumnHeaderValue
                      key={indexValue}
                      {...props}
                      hasExpandedIcon={indexValue === 0}
                      header={header}
                      indexHeader={indexHeader}
                      value={value}
                    />
                  );
                })}
              </ListRowHeaderPriorityStyled>
            </ListRowContainerHeaderPriorityStyled>
          );
        })}
    </React.Fragment>
  );
};

interface IListColumnHeaderValue extends IListComponent {
  hasExpandedIcon: boolean;
  header: ITableHeader;
  indexHeader: number;
  value: IValue;
}

const ListColumnHeaderValue = (props: IListColumnHeaderValue): JSX.Element => {
  const {
    rowHeader,
    getExpandedAria,
    getValue,
    getCellTokenValue,
    handleShowExpandedContent,
    hasExpandedContentRow,
    showExpandedContent,
    rowVariant,
  } = useContent({ ...props });

  return (
    <li>
      {rowHeader && (
        <ListHeaderItemStylesStyled
          customAlign={
            rowHeader?.config?.alignHeader?.[props.device] || rowHeader?.config?.alignHeader
          }
          customBackgroundColor={rowHeader?.config?.backgroundColor}
          customWidth={rowHeader?.config?.width}
          flexWidth={rowHeader?.config?.flexWidth}
          hidden={props.hiddenHeaderOn?.[props.device]}
          lineSeparatorBottomOnHeader={props.lineSeparatorBottomOnHeader}
          lineSeparatorLineStyles={props.lineSeparatorLineStyles}
          styles={props.styles.header?.[rowHeader.variant]}
        >
          <Text
            component={TextComponentType.SPAN}
            customTypography={props.styles.header?.[rowHeader.variant]?.typography}
            dataTestId={`${props.dataTestId}ItemListRowHeader${rowHeader.label}`}
          >
            {rowHeader.label}
          </Text>
        </ListHeaderItemStylesStyled>
      )}
      <ul>
        <ListItemHeaderPriorityStyled
          borderPosition={props.value.rowBorderPosition}
          customAlign={
            getCellTokenValue({ headerValue: props.header, token: 'align' }) ||
            props.header?.config?.alignValue?.[props.device] ||
            props.header?.config?.alignValue ||
            props.header?.config?.alignHeader?.[props.device] ||
            props.header?.config?.alignHeader
          }
          customBackgroundColor={
            getCellTokenValue({ headerValue: props.header, token: 'backgroundColor' }) ??
            props.value.backgroundColor
          }
          customWidth={props.header?.config?.width}
          flexWidth={props.header?.config?.flexWidth}
          hasSomeExpandedContent={props.hasSomeExpandedContent}
          lineSeparatorLineStyles={props.lineSeparatorLineStyles}
          styles={props.styles.bodyRows?.[rowVariant]}
        >
          {props.hasExpandedIcon && hasExpandedContentRow && (
            <TableExpandedButton
              aria-label={getExpandedAria()}
              styles={props.styles.bodyRows?.[rowVariant]}
              type={ButtonType.BUTTON}
              onClick={() => {
                props.onExpandedContentOpen?.(
                  !showExpandedContent,
                  getValue(props.header),
                  props.indexHeader
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
          )}
          {getValue(props.header) as string | JSX.Element}
          {props.hasExpandedIcon && hasExpandedContentRow && (
            <ListItemExpandedStyled
              showExpandedContent={showExpandedContent}
              styles={props.styles.bodyRows?.[rowVariant]}
            >
              {showExpandedContent && props.value.expandedContent
                ? props.value.expandedContent[props.device]
                : props.expandedContentHelpMessage}
            </ListItemExpandedStyled>
          )}
        </ListItemHeaderPriorityStyled>
      </ul>
    </li>
  );
};
