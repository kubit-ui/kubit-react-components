import * as React from 'react';

import { CommonStyleType } from '@/types';

import { HeaderContentStyled } from '../headerStructure.styled';
import { HeaderStructureContentPositionType } from '../types';

interface IHeaderContent {
  styles?: CommonStyleType;
  contentDirection?: HeaderStructureContentPositionType;
  children: React.ReactNode[];
}

export const HeaderContent = (props: IHeaderContent): React.JSX.Element => {
  // always returned something, cause we need to put container to flex direction
  const ariaHidden = props.children.length > 0 ? false : true;
  return (
    <HeaderContentStyled aria-hidden={ariaHidden} styles={props.styles}>
      {props.children}
    </HeaderContentStyled>
  );
};
