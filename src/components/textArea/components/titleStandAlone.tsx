import type { TextComponentType } from '@/components/text/types/component';
import type { CommonTextProps } from '@/lib/types/commons/text';

import { Text } from '@/components/text/text';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

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
        {...processTextProp(title)}
        component={(processTextProp(title).component as TextComponentType) ?? 'p'}
      >
        {processTextProp(title).children}
      </Text>
    </div>
  );
};
