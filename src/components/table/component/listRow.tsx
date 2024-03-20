/* eslint-disable complexity */
import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';

import { useContent } from '../hooks/useContent';
import {
  ListEmptyExpandedContentItem,
  ListItemExpandedStyled,
  ListItemStyled,
  ListRowContainerStyled,
  ListRowStyled,
  TableExpandedButton,
} from '../table.styled';
import { IListRow } from '../types/table';
import { ListDivider } from './listDivider';

export const ListRow = (props: IListRow): JSX.Element => {
  const {
    divider,
    dividerValue,
    getExpandedAria,
    getValue,
    handleShowExpandedContent,
    hasExpandedContentRow,
    showExpandedContent,
    rowVariant,
  } = useContent({ ...props });

  return (
    <ListRowContainerStyled
      hasDivider={!!dividerValue()}
      lineSeparatorLineStyles={props.lineSeparatorLineStyles}
      styles={props.styles}
    >
      <ListDivider divider={dividerValue()} dividerStyles={props.styles.divider} />
      <ListRowStyled formatSideBySideInList={props.formatSideBySideInList} styles={props.styles}>
        {props.headers
          .filter(headerValue => headerValue.id !== divider?.id)
          .map((headerValue, indexHeader) => {
            const hasExpandedIcon = indexHeader === 0;
            return (
              <ListItemStyled
                key={indexHeader}
                data-testid={`${props.dataTestId}ItemList${indexHeader}`}
                hasSomeExpandedContent={
                  hasExpandedIcon && props.hasSomeExpandedContent && hasExpandedContentRow
                }
                styles={props.styles}
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
                    <ListEmptyExpandedContentItem />
                  ))}
                {getValue(headerValue) as string | JSX.Element}
              </ListItemStyled>
            );
          })}
        {hasExpandedContentRow && (
          <ListItemExpandedStyled
            showExpandedContent={showExpandedContent}
            styles={props.styles.bodyRows?.[rowVariant]}
          >
            {showExpandedContent && props.value.expandedContent
              ? props.value.expandedContent[props.device]
              : props.expandedContentHelpMessage}
          </ListItemExpandedStyled>
        )}
      </ListRowStyled>
    </ListRowContainerStyled>
  );
};
