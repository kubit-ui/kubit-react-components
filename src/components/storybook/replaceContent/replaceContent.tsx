import React from 'react';

import { AriaType, ROLES } from '@/types';

import { ReplaceContentStyled } from './replaceContent.styled';

interface IReplaceContent extends AriaType {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  id?: string;
  role?: ROLES;
  as?: React.ElementType;
}

export const ReplaceContent = ({ children, ...props }: IReplaceContent): JSX.Element => {
  return (
    <ReplaceContentStyled as={props.as} {...props}>
      {!children ? <span>Replace here your Content</span> : children}
    </ReplaceContentStyled>
  );
};
