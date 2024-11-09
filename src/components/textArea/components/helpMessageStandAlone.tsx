import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { TextAreaTextType } from '../types/textArea';
import { TextAreaPropsThemeType } from '../types/textAreaTheme';

export const HelpMessageStandAlone = ({
  id,
  helpMessage,
  dataTestId,
  styles,
}: {
  id: string;
  helpMessage?: TextAreaTextType;
  dataTestId?: string;
  styles?: TextAreaPropsThemeType;
}): JSX.Element | null => {
  if (!helpMessage?.content) {
    return null;
  }

  return (
    <Text
      color={styles?.helpMessage?.color}
      component={TextComponentType.SMALL}
      id={id}
      variant={styles?.helpMessage?.font_variant}
      weight={styles?.helpMessage?.font_weight}
      {...helpMessage}
    >
      {helpMessage.content}
    </Text>
  );
};
