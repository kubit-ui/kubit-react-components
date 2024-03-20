import React from 'react';

import { ReplaceContentStyled } from './replaceContent.styled';

export const ReplaceContent = ({
  children,
  width,
  height,
  id,
}: {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  id?: string;
}): JSX.Element => {
  return (
    <ReplaceContentStyled height={height} id={id} width={width}>
      {!children ? <span>Replace here your Content</span> : children}
    </ReplaceContentStyled>
  );
};
