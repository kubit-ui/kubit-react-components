import { isValidElement } from 'react';

/**
 * Configuration options for processing common props
 */
export interface ProcessCommonPropConfig {
  /** The property name to use when wrapping a string value (default: 'children') */
  propertyName?: 'icon' | 'children';
  /** Maximum length for string truncation (only applies to text) */
  maxLength?: number;
  /** Whether to handle React elements (only applies to text processing) */
  allowReactElements?: boolean;
  /** Whether to extract 'content' property from objects (only applies to text) */
  extractContent?: boolean;
}

/**
 * Universal function to process common props (icon, text, etc.) and return them in a standardized format.
 *
 * This function combines the functionality of `processIcon` and `processText` into a single,
 * flexible utility that can handle various input types and convert them to the appropriate format.
 *
 * @param prop - The property to process. Can be a string, React node, or object with properties.
 * @param config - Configuration options for processing
 * @returns A standardized object containing the processed property
 *
 * @remarks
 * - If the input is a string, it's wrapped in an object with the specified property name
 * - If the input is a React node (when `allowReactElements` is true), it's returned as children
 * - If the input is an object, it's returned as-is (with optional content extraction)
 * - If the input is `undefined`, an empty object or object with null children is returned
 * - Strings can be truncated to a maximum length when specified
 *
 * @example
 * ```typescript
 * // Process icon (simple string to object)
 * processCommonProp('home', { propertyName: 'icon' })
 * // Returns: { icon: 'home' }
 *
 * // Process icon object
 * processCommonProp({ icon: 'settings', size: 'large' }, { propertyName: 'icon' })
 * // Returns: { icon: 'settings', size: 'large' }
 *
 * // Process text (string to children)
 * processCommonProp('Hello, world!')
 * // Returns: { children: 'Hello, world!' }
 *
 * // Process text with truncation
 * processCommonProp('Hello, world!', { maxLength: 5 })
 * // Returns: { children: 'Hello' }
 *
 * // Process React element
 * processCommonProp(<span>Hello</span>, { allowReactElements: true })
 * // Returns: { children: <span>Hello</span> }
 *
 * // Process object with content property
 * processCommonProp(
 *   { content: 'Hello', style: { color: 'red' } },
 *   { extractContent: true, maxLength: 3 }
 * )
 * // Returns: { children: 'Hel', style: { color: 'red' } }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const processCommonProp = <T = any>(
  prop?: string | React.ReactNode | T,
  config: ProcessCommonPropConfig = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  const {
    allowReactElements = true,
    extractContent = true,
    maxLength,
    propertyName = 'children',
  } = config;

  // Handle undefined/null input (but not empty string which is valid)
  if (prop === undefined || prop === null) {
    return propertyName === 'children' ? { children: null } : {};
  }

  // Handle string input (including empty strings)
  if (typeof prop === 'string') {
    const truncatedValue =
      maxLength && prop.length > maxLength
        ? prop.substring(0, maxLength)
        : prop;
    return { [propertyName]: truncatedValue };
  }

  // Handle React elements (only for text processing)
  if (allowReactElements && isValidElement(prop)) {
    return { children: prop };
  }

  // Handle object input
  if (typeof prop === 'object' && prop !== null) {
    // Extract content property if configured (for text processing)
    if (extractContent && 'content' in prop) {
      const content = (prop as Record<string, unknown>).content;
      const truncatedContent =
        maxLength && typeof content === 'string'
          ? content.substring(0, maxLength)
          : content;

      return {
        ...prop,
        children: truncatedContent,
      };
    }

    // Return object as-is
    return prop;
  }

  // Fallback for other types
  return propertyName === 'children' ? { children: null } : {};
};

/**
 * Helper function to process icon props (wrapper around processCommonProp)
 *
 * @param icon - The icon to process
 * @returns An object with the icon property
 *
 * @example
 * ```typescript
 * processIconProp('home') // Returns: { icon: 'home' }
 * processIconProp({ icon: 'settings', size: 'large' }) // Returns: { icon: 'settings', size: 'large' }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const processIconProp = (icon?: any): any => {
  return processCommonProp(icon, {
    allowReactElements: false,
    extractContent: false,
    propertyName: 'icon',
  });
};

/**
 * Helper function to process text props (wrapper around processCommonProp)
 *
 * @param text - The text to process
 * @param maxLength - Optional maximum length for truncation
 * @returns An object with the children property
 *
 * @example
 * ```typescript
 * processTextProp('Hello') // Returns: { children: 'Hello' }
 * processTextProp('Hello, world!', 5) // Returns: { children: 'Hello' }
 * processTextProp(<span>Hello</span>) // Returns: { children: <span>Hello</span> }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const processTextProp = (text?: any, maxLength?: number): any => {
  return processCommonProp(text, {
    allowReactElements: true,
    extractContent: true,
    maxLength,
    propertyName: 'children',
  });
};
