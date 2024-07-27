import * as React from 'react';

import { Footer } from '@/components/footer/footer';

import { ListContainerHeaderPriorityStyled, ListContainerStyled } from '../table.styled';
import { FormatListHeaderPriorityType } from '../types/formatListHeaderPriority';
import { IListComponent } from '../types/table';
import { ListColumnHeaderPriority } from './listColumnHeaderPriority';
import { ListRowHeaderPriority } from './listRowHeaderPriority';
import { ListRowPriority } from './listRowPriority';

export const List = ({
  formatListHeaderPriority = FormatListHeaderPriorityType.ROW,
  ...props
}: IListComponent): JSX.Element => {
  const footerVariant = props.footer?.variant ?? props.styles?.footerVariant;
  return (
    <>
      {formatListHeaderPriority === FormatListHeaderPriorityType.ROW && (
        <ListContainerStyled data-testid={`${props.dataTestId}Table`} styles={props.styles}>
          {formatListHeaderPriority === FormatListHeaderPriorityType.ROW &&
            props.values.map((value, indexValue) => {
              return (
                <ListRowPriority key={indexValue} {...props} index={indexValue} value={value} />
              );
            })}
        </ListContainerStyled>
      )}
      {formatListHeaderPriority === FormatListHeaderPriorityType.ROW_HEADER && (
        <ListContainerHeaderPriorityStyled
          data-testid={`${props.dataTestId}Table`}
          styles={props.styles}
        >
          {props.values.map((value, indexValue) => {
            return (
              <ListRowHeaderPriority key={indexValue} {...props} index={indexValue} value={value} />
            );
          })}
        </ListContainerHeaderPriorityStyled>
      )}
      {formatListHeaderPriority === FormatListHeaderPriorityType.COLUMN_HEADER && (
        <ListContainerHeaderPriorityStyled
          data-testid={`${props.dataTestId}Table`}
          styles={props.styles}
        >
          <ListColumnHeaderPriority {...props} />
        </ListContainerHeaderPriorityStyled>
      )}
      {props.footer?.content && footerVariant && (
        <Footer
          dataTestId={`${props.dataTestId}Navbar`}
          simpleContainer={false}
          {...props.footer}
          variant={footerVariant}
        >
          {props.footer.content}
        </Footer>
      )}
    </>
  );
};
