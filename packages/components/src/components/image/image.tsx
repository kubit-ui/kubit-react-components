import { forwardRef } from 'react';

import { useGenericComponents } from '@/lib/provider/genericComponentsProvider/genericComponentsProvider';

import type { IImage } from './types/image';

import { ImageStandAlone } from './imageStandAlone';

/**
 * A flexible image component that supports generic customization.
 *
 * This component dynamically renders an image using a generic type provided by the
 * `useGenericComponents` hook. It is designed to be highly reusable and adaptable
 * to different rendering contexts, such as standalone images or custom image types.
 *
 * Internally, it wraps {@link ImageStandAlone} and passes the necessary props, including
 * the dynamically resolved `GenericImageType` component.
 *
 * This component accepts a generic type parameter `<T>` to allow for custom image
 * implementations, enabling flexible rendering strategies.
 *
 * @example
 * ```tsx
 * // Basic usage:
 * <Image src="example.jpg" alt="Example" />
 *
 * // With a custom generic image type:
 * const CustomImage = () => <img src="custom.jpg" alt="Custom" />;
 * <GenericComponentsProvider value={{ IMAGE: CustomImage }}>
 *   <Image src="example.jpg" alt="Example with custom image" />
 * </GenericComponentsProvider>
 * ```
 */
export const Image = forwardRef<HTMLElement, IImage>(
  (props, ref): JSX.Element => {
    const { IMAGE: GenericImageType } = useGenericComponents();

    // Render the image with the resolved generic type
    return (
      <ImageStandAlone {...props} ref={ref} component={GenericImageType} />
    );
  },
);
