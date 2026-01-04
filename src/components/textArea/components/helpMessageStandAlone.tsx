import type { CommonTextProps } from '@/lib/types/commons/text';

import { Text } from '@/components/text/text';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { TextAreaCssClasses } from '../types/textArea';

export const HelpMessageStandAlone = ({
  cssClasses,
  customAttributtes,
  helpMessage,
  id,
}: {
  id: string;
  helpMessage?: CommonTextProps;
  customAttributtes?;
  cssClasses?: TextAreaCssClasses;
}): JSX.Element | null => {
  return (
    <Text
      additionalClasses={{
        text: cssClasses?.helpmessage,
      }}
      component="small"
      customAttributes={customAttributtes}
      id={id}
      {...processTextProp(helpMessage)}
    />
  );
};
