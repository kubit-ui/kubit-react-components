/* eslint-disable complexity */
import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text, TextComponentType } from '@/components/text';

import { useContent } from '../hooks/useContent';
import {
  ListHeaderItemStylesStyled,
  ListItemExpandedStyled,
  ListItemHeaderPriorityStyled,
  ListRowContainerHeaderPriorityStyled,
  ListRowHeaderPriorityStyled,
  TableExpandedButton,
} from '../table.styled';
import { IListRowHeaderPriority } from '../types/table';
import { ListDivider } from './listDivider';

export const ListRowHeaderPriority = (props: IListRowHeaderPriority): JSX.Element => {
  const {
    rowHeader,
    divider,
    dividerValue,
    getExpandedAria,
    getValue,
    getCellTokenValue,
    handleShowExpandedContent,
    hasExpandedContentRow,
    showExpandedContent,
    rowVariant,
  } = useContent({ ...props });

  return (
    <ListRowContainerHeaderPriorityStyled
      hasDivider={!!dividerValue()}
      lineSeparatorLineStyles={props.lineSeparatorLineStyles}
      styles={props.styles}
    >
      {rowHeader && (
        <ListHeaderItemStylesStyled
          customAlign={
            rowHeader?.config?.alignHeader?.[props.device] || rowHeader?.config?.alignHeader
          }
          customBackgroundColor={rowHeader?.config?.backgroundColor}
          customWidth={rowHeader?.config?.width}
          flexWidth={rowHeader?.config?.flexWidth}
          lineSeparatorBottomOnHeader={props.lineSeparatorBottomOnHeader}
          lineSeparatorLineStyles={props.lineSeparatorLineStyles}
          lineSeparatorTopOnHeader={props.lineSeparatorTopOnHeader}
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
      <ListDivider divider={dividerValue()} dividerStyles={props.styles.divider} />
      <ListRowHeaderPriorityStyled styles={props.styles}>
        {/* If rowHeader, render it first */}
        {props.headers
          .filter(header => header.id !== divider?.id)
          .map((header, indexHeader) => {
            const hasExpandedIcon = indexHeader === 0;
            return (
              <li key={indexHeader}>
                {header.label && (
                  <ListHeaderItemStylesStyled
                    customAlign={
                      header?.config?.alignHeader?.[props.device] || header?.config?.alignHeader
                    }
                    customBackgroundColor={header?.config?.backgroundColor}
                    customWidth={header?.config?.width}
                    flexWidth={header?.config?.flexWidth}
                    hidden={props.hiddenHeaderOn?.[props.device]}
                    lineSeparatorBottomOnHeader={props.lineSeparatorBottomOnHeader}
                    lineSeparatorLineStyles={props.lineSeparatorLineStyles}
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
                <ul>
                  <ListItemHeaderPriorityStyled
                    borderPosition={props.value.rowBorderPosition}
                    customAlign={
                      getCellTokenValue({ headerValue: header, token: 'align' }) ||
                      header?.config?.alignValue?.[props.device] ||
                      header?.config?.alignValue ||
                      header?.config?.alignHeader?.[props.device] ||
                      header?.config?.alignHeader
                    }
                    customBackgroundColor={
                      getCellTokenValue({ headerValue: header, token: 'backgroundColor' }) ??
                      props.value.backgroundColor
                    }
                    customWidth={header?.config?.width}
                    data-testid={`${props.dataTestId}ItemList${indexHeader}`}
                    flexWidth={header?.config?.flexWidth}
                    hasSomeExpandedContent={props.hasSomeExpandedContent}
                    lineSeparatorLineStyles={props.lineSeparatorLineStyles}
                    styles={props.styles.bodyRows?.[rowVariant]}
                  >
                    {hasExpandedIcon && hasExpandedContentRow && (
                      <TableExpandedButton
                        aria-label={getExpandedAria()}
                        styles={props.styles.bodyRows?.[rowVariant]}
                        type={ButtonType.BUTTON}
                        onClick={() => {
                          props.onExpandedContentOpen?.(
                            !showExpandedContent,
                            getValue(header),
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
                    )}
                    {getValue(header) as string | JSX.Element}
                    {hasExpandedIcon && hasExpandedContentRow && (
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
          })}
      </ListRowHeaderPriorityStyled>
    </ListRowContainerHeaderPriorityStyled>
  );
};
