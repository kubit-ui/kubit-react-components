import React from 'react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { ROLES } from '@/types/role/role';
import { AriaType } from '@/types/type/type';

import { ReplaceContentStyled } from './replaceContent.styled';

interface IReplaceContent extends AriaType {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  id?: string;
  role?: ROLES;
  as?: React.ElementType;
  tabIndex?: number;
}

export const ReplaceContent = React.forwardRef(
  (
    { children, ...props }: IReplaceContent,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <ReplaceContentStyled as={props.as} {...props} ref={ref}>
        <img alt="" height={48} src={ICONS.ICON_REPLACE} width={48} />
        {!children ? (
          <>
            <span>Replace here your Content</span>
          </>
        ) : (
          children
        )}
      </ReplaceContentStyled>
    );
  }
);

ReplaceContent.displayName = 'ReplaceContent';
