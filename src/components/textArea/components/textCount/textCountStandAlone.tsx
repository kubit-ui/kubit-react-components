import { type AriaAttributes, type ForwardedRef, forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TextCountStandAloneProps } from './types/textCount';

/**
 * Standalone text counter component for textarea fields.
 *
 * This component displays the current character count and maximum length
 * for a textarea input with accessibility support.
 *
 * @example
 * ```tsx
 * <TextCountStandAlone
 *   currentCharacters={150}
 *   maxLength={500}
 * />
 * ```
 */
const TextCountStandAloneComponent = (
  {
    cssClasses,
    currentCharacters,
    id,
    leftColor,
    leftWeight,
    marginTop,
    maxLength,
    rightColor,
    rightWeight,
    screenReaderText,
    textVariant,
    ...props
  }: TextCountStandAloneProps,
  ref: ForwardedRef<HTMLDivElement> | undefined | null,
): JSX.Element => {
  const getAriaLive = (): AriaAttributes['aria-live'] => {
    if (currentCharacters === 0 || currentCharacters >= maxLength) {
      return 'polite';
    }
    return undefined;
  };

  const customProps = pickCustomAttributes(props);

  return (
    <div
      ref={ref}
      aria-live={getAriaLive()}
      className={cssClasses?.text_count}
      data-testid="text-count"
      style={{
        marginTop,
      }}
      {...customProps}
    >
      <screen-reader-only key={currentCharacters}>
        {screenReaderText}
      </screen-reader-only>
      <Text
        additionalClasses={{
          text: cssClasses?.letftext,
        }}
        aria-hidden={true}
        color={leftColor}
        component="span"
        variant={textVariant}
        weight={leftWeight}
      >
        {currentCharacters}
      </Text>
      <Text
        additionalClasses={{
          text: cssClasses?.righttext,
        }}
        aria-hidden={true}
        color={rightColor}
        component="span"
        variant={textVariant}
        weight={rightWeight}
      >
        {` / ${maxLength}`}
      </Text>
    </div>
  );
};

/**
 * @description
 * TextCount component is a component that can be used to create a counter of characters.
 * @param {PropsWithChildren<TextCountProps>} props
 * @returns {JSX.Element}
 */
export const TextCountStandAlone = forwardRef(TextCountStandAloneComponent);
