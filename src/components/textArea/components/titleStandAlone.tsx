import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { TitleWrapperStyled } from '../textArea.styled';
import { TextAreaPropsThemeType, TextAreaTitleComponentType, TextAreaTitleType } from '../types';

export const TitleStandAlone = ({
  title,
  styles,
}: {
  title?: TextAreaTitleType;
  styles?: TextAreaPropsThemeType;
}): JSX.Element | null => {
  if (!title) {
    return null;
  }
  return (
    <TitleWrapperStyled styles={styles}>
      <Text
        customTypography={styles?.title}
        {...title}
        component={
          (title.component as unknown as TextComponentType) ?? TextAreaTitleComponentType.PARAGRAPH
        }
      >
        {title.content}
      </Text>
    </TitleWrapperStyled>
  );
};
