import type { TextComponentType } from '@/components/text/types/component';
import type { CommonTextProps } from '@/lib/types/commons/text';

import { Text } from '@/components/text/text';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { TextAreaCssClasses } from '../types/textArea';

/**
 * Standalone title component for textarea fields.
 *
 * This component displays a title or heading above the textarea field.
 * Returns null if no title is provided.
 *
 * @example
 * ```tsx
 * <TitleStandAlone
 *   title={{ content: "Comments Section" }}
 * />
 * ```
 */
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
        component={
          (processTextProp(title).component as TextComponentType) ?? 'p'
        }
      >
        {processTextProp(title).children}
      </Text>
    </div>
  );
};
