import * as React from 'react';

import { Text, TextComponentType } from '@/components/text';

// styles
import { TitleWrapperStyled } from '../input.styled';
import { InputTitleComponentType } from '../types';
import { ITitle } from '../types/input';

export const TitleStandAlone = (props: ITitle): JSX.Element | null => {
  if (!props.title?.content) {
    return null;
  }
  return (
    <TitleWrapperStyled
      $titleStyles={props.styles}
      as={Text}
      customTypography={props.styles?.title}
      dataTestId={`${props.dataTestId}Title`}
      {...props.title}
      component={
        (props.title.component
          ? props.title.component
          : InputTitleComponentType.PARAGRAPH) as unknown as TextComponentType
      }
    >
      {props.title.content}
    </TitleWrapperStyled>
  );
};
