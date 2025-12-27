import { type ForwardedRef, forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useMediaDevice } from '@/lib/hooks/useMediaDevice/useMediaDevice';

import type { CardImageProps } from './types/cardImage';

import { CardImageStandAlone } from './cardImageStandAlone';

/**
 * CardImage component for displaying an image card with responsive and theme support.
 *
 * This component is useful for rendering images in a card layout, adapting its style
 * based on the current device and variant. It leverages generics to allow custom variant
 * types, enabling flexible theming and styling.
 *
 * Internally, it uses {@link CardImageStandAlone} and injects device and CSS class information.
 *
 * The generic type parameter `<Variant extends string>` allows you to define your own variant
 * types for more precise theming.
 *
 * @example
 * ```tsx
 * <CardImage variant="primary" />
 *
 * // With a custom variant type:
 * type MyVariant = "rounded" | "square";
 * <CardImage<MyVariant> variant="rounded" />
 * ```
 */
export const CardImage = forwardRef(
  <Variant extends string = string>(
    { additionalClasses, variant, ...props }: CardImageProps<Variant>,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const device = useMediaDevice();
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'CARD_IMAGE',
      variant,
    });

    return (
      <CardImageStandAlone
        {...props}
        ref={ref}
        cssClasses={cssClasses}
        device={device}
      />
    );
  },
);
