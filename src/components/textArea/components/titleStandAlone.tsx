import type { TextComponentType } from '@/components/text/types/component';
import type { CommonTextProps } from '@/lib/types/commons/text';

import { Text } from '@/components/text/text';
import { processText } from '@/lib/utils/process/processText/processText';

import type { TextAreaCssClasses } from '../types/textArea';

export const TitleStandAlone = ({
  cssClasses,
  customAttributtes,
  title,
}: {
  title?: CommonTextProps;
  customAttributtes?;
  cssClasses?: TextAreaCssClasses;
}): JSX.Element | null => {
  if (!title) {
    return null;
  }
  return (
    <div className={cssClasses?.titlecontainer} {...customAttributtes}>
      <Text
        additionalClasses={{
          text: cssClasses?.title,
        }}
        customAttributes={customAttributtes}
        {...processText(title)}
        component={(processText(title).component as TextComponentType) ?? 'p'}
      >
        {processText(title).children}
      </Text>
    </div>
  );
};
