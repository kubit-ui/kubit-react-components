import { forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { CustomComponent } from '@/lib/components/customComponent/customComponent';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import {
  processIconProp,
  processTextProp,
} from '@/lib/utils/process/processCommonProp';

import type { TagStandAloneProps } from './types/tag';

/**
 * A React component that renders a standalone tag element with customizable styles, icon, and label.
 *
 * This component is designed to provide a flexible and reusable tag UI element, allowing developers
 * to specify the underlying HTML element, apply custom CSS classes, and include an icon and label
 * for enhanced visual representation. It leverages utility functions to process the icon and label
 * properties, ensuring consistent behavior and formatting.
 *
 * The `TagStandAlone` component is built using `forwardRef` to allow the parent component to access
 * the underlying DOM element, making it suitable for scenarios requiring direct DOM manipulation or
 * integration with third-party libraries.
 *
 * ### Features:
 * - **Customizable HTML Element**: Specify the type of HTML element to render (e.g., `div`, `span`).
 * - **Icon and Label Support**: Includes an icon and label with processed attributes for consistent rendering.
 * - **CSS Class Management**: Apply custom CSS classes to the container, icon, and label for styling flexibility.
 * - **Custom Attributes**: Automatically extracts and applies additional attributes using `pickCustomAttributes`.
 *
 * ### Example Usage:
 * ```tsx
 * import { TagStandAlone } from '@/components/tag/tagStandAlone';
 *
 * const MyComponent = () => (
 *   <TagStandAlone
 *     component="div"
 *     cssClasses={{
 *       container: 'tag-container',
 *       icon: 'tag-icon',
 *       label: 'tag-label',
 *     }}
 *     icon={{ name: 'check', size: 'small' }}
 *     label="Active"
 *   />
 * );
 * ```
 *
 * @typeParam HTMLDivElement - The type of the underlying DOM element, defaulting to `div`.
 * @param props - The properties for configuring the tag, including `component`, `cssClasses`, `icon`, and `label`.
 * @returns A JSX element representing the standalone tag.
 */
export const TagStandAlone = forwardRef<HTMLDivElement, TagStandAloneProps>(
  (
    { component = 'div', cssClasses, icon, label, ...props },
    ref,
  ): JSX.Element => {
    const customProps = pickCustomAttributes(props);

    return (
      <CustomComponent
        ref={ref}
        className={cssClasses?.tag}
        component={component}
        data-testid="tag"
        {...customProps}
      >
        <>
          <ElementOrIcon
            className={cssClasses?.icon}
            {...processIconProp(icon)}
          />
          <Text
            additionalClasses={{ text: cssClasses?.label }}
            component="span"
            {...processTextProp(label)}
          />
        </>
      </CustomComponent>
    );
  },
);
