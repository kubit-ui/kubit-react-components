/* eslint-disable complexity */
import * as React from 'react';

import { Footer } from '@/components/footer';

import { ListContainerStyled } from '../table.styled';
import { IListComponent } from '../types/table';
import { ListRow } from './listRow';

export const List = (props: IListComponent): JSX.Element => {
  const footerVariant = props.footer?.variant ?? props.styles?.footerVariant;
  return (
    <>
      <ListContainerStyled data-testid={`${props.dataTestId}Table`} styles={props.styles}>
        {props.values.map((value, indexValue) => {
          return <ListRow key={indexValue} {...props} index={indexValue} value={value} />;
        })}
      </ListContainerStyled>
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
