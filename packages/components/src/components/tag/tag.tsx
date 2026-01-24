import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { TagProps } from './types/tag';

import { TagStandAlone } from './tagStandAlone';

/**
 * A React component that renders a customizable tag element.
 *
 * The `Tag` component is a higher-order component that leverages `forwardRef`
 * to allow the parent component to access the underlying DOM element. It supports
 * dynamic styling through the `useClassName` hook, which generates CSS classes
 * based on the provided `variant` and `additionalClasses`.
 *
 * This component is generic, allowing you to specify a `Variant` type to enforce
 * stricter typing for the `variant` prop. This makes it highly flexible for use
 * in applications where tags need to adapt to different visual themes or states.
 *
 * Internally, the `TagStandAlone` component is used to render the actual tag,
 * ensuring separation of concerns and reusability.
 *
 * ### Example Usage
 * ```tsx
 * import { Tag } from './tag';
 *
 * const MyComponent = () => (
 *   <Tag variant="primary" additionalClasses="custom-class">
 *     Example Tag
 *   </Tag>
 * );
 * ```
 *
 * @template Variant - A string type representing the possible variants of the tag.
 * @param props - The properties for the `Tag` component, including `variant` for styling
 * and `additionalClasses` for custom class names.
 * @param ref - A forwarded reference to the underlying `div` element.
 * @returns A JSX element representing the tag.
 */
export const Tag = forwardRef(
  <Variant extends string>(
    { additionalClasses, variant, ...props }: TagProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'TAG',
      variant,
    });

    return <TagStandAlone {...props} ref={ref} cssClasses={cssClasses} />;
  },
);
