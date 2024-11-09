import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

// styles
import {
  AdditionalInfoWrapperStyled,
  TitleAndAdditionalInfoWrapperStyled,
  TitleWrapperStyled,
} from '../input.styled';
import { ITitle } from '../types/input';
import { InputTitleComponentType } from '../types/titleComponent';

export const TitleStandAlone = (props: ITitle): JSX.Element | null => {
  if (!props.title?.content) {
    return null;
  }

  return (
    <TitleAndAdditionalInfoWrapperStyled styles={props.styles}>
      <TitleWrapperStyled
        $titleStyles={props.styles}
        as={Text}
        customTypography={props.styles?.title}
        {...props.title}
        component={
          (props.title.component
            ? props.title.component
            : InputTitleComponentType.PARAGRAPH) as unknown as TextComponentType
        }
      >
        {props.title.content}
      </TitleWrapperStyled>
      <AdditionalInfoWrapperStyled styles={props.styles}>
        {props.additionalInfo}
      </AdditionalInfoWrapperStyled>
    </TitleAndAdditionalInfoWrapperStyled>
  );
};
