import * as React from 'react';

import { ImageStandAlone } from './imageStandAlone';
import type { IImage } from './types';

const ImageComponent = (
  props: IImage,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => {
  return <ImageStandAlone {...props} ref={ref} />;
};

/**
 * @description
 * Image component to load images
 */
export const Image = React.forwardRef(ImageComponent);
