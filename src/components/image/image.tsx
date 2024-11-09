import React from 'react';

import { useGenericComponents } from '../../provider/genericComponents/genericComponentsProvider';
import { ImageStandAlone } from './imageStandAlone';
import type { IImage } from './types/image';

const ImageComponent = (
  props: IImage,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => {
  const { IMAGE: GenericImageType } = useGenericComponents();
  return <ImageStandAlone {...props} ref={ref} component={GenericImageType} />;
};

/**
 * @description
 * Image component to load images
 */
export const Image = React.forwardRef(ImageComponent);
