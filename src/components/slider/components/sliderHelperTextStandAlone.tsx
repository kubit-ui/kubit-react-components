import { Text } from '@/components/text/text';

import type { SliderCssClasses } from '../types/slider';

interface SliderHelperTextStandAloneProps {
  leftHelperText?: string;
  leftHelperTextId?: string;
  rightHelperText?: string;
  rightHelperTextId?: string;
  cssClasses?: SliderCssClasses;
  customAttributes?: Record<string, string>;
}

/**
 * @description
 * SliderHelperTextStandAlone component is used to display helper text for the slider.
 * It can be displayed on the left or right side of the slider.
 */
export const SliderHelperTextStandAlone = ({
  cssClasses,
  customAttributes,
  leftHelperText,
  leftHelperTextId,
  rightHelperText,
  rightHelperTextId,
}: SliderHelperTextStandAloneProps): JSX.Element | null => {
  if (!leftHelperText && !rightHelperText) {
    return null;
  }
  return (
    <div className={cssClasses?.helpertextcontainer}>
      {!!leftHelperText && (
      <div className={cssClasses?.helpertextleftcontainer}>
        <Text
          additionalClasses={{
              text: cssClasses?.helpertext,
            }}
          component="span"
          customAttributes={customAttributes}
          id={leftHelperTextId}
        >
          {leftHelperText}
        </Text>
      </div>
)}
      {!!rightHelperText && (
      <div className={cssClasses?.helpertextrightcontainer}>
        <Text
          additionalClasses={{
              text: cssClasses?.helpertext,
            }}
          component="span"
          customAttributes={customAttributes}
          id={rightHelperTextId}
        >
          {rightHelperText}
        </Text>
      </div>
)}
    </div>
  );
};
