import { isValidElement } from 'react';

import type { TextProps } from '@/components/text/types/text';
import type { CommonTextProps } from '@/lib/types/commons/text';

/**
 * Processes a text input and returns it in a standardized format, optionally truncating it to a maximum length.
 *
 * @param text - The text to process. It can be a string, a React node, or an object containing text properties.
 * @param maxLength - An optional maximum length for the text. If provided, the text will be truncated to this length.
 * @returns An object of type `IText<string>` containing the processed text.
 *
 * @remarks
 * - If the input is a string, it is returned as the `children` property of the resulting object.
 * - If the input is a React node, it is returned as the `children` property of the resulting object.
 * - If the input is an object with a `content` property, the `content` value is used as the text.
 * - If a `maxLength` is provided, the text is truncated to the specified length.
 * - If the input is `undefined`, the `children` property is set to `null`.
 *
 * @example
 * ```typescript
 * const text1 = processText('Hello, world!'); // Returns { children: 'Hello, world!' }
 * const text2 = processText('Hello, world!', 5); // Returns { children: 'Hello' }
 * const text3 = processText(<span>Hello</span>); // Returns { children: <span>Hello</span> }
 * const text4 = processText({ content: 'Hello', style: { color: 'red' } }, 3); // Returns { children: 'Hel', style: { color: 'red' } }
 * const text5 = processText(); // Returns { children: null }
 * ```
 */
export const processText = (
  text?: CommonTextProps,
  maxLength?: number,
): TextProps => {
  if (!text) {
    return { children: null };
  }

  let processedText: string | undefined;

  if (typeof text === 'string' || isValidElement(text)) {
    processedText = typeof text === 'string' ? text : undefined;
  } else if (typeof text === 'object' && 'content' in text) {
    processedText = (text as { content: string }).content;
  }

  if (maxLength && processedText) {
    processedText = processedText.substring(0, maxLength);
  }

  if (isValidElement(text)) {
    return { children: text as React.ReactNode };
  }

  return typeof text === 'object'
    ? { children: processedText, ...text }
    : { children: processedText };
};
