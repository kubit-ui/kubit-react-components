import type { CSSProperties } from 'react';

import type { DEVICE_BREAKPOINTS } from '@/lib/constants/breakpoints/breakpoints';
import type { GenericImageType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { PictureSourceProps } from './pictureSource';

import { type ImageLoadingType } from './loading';

export interface ImageStandAloneProps extends DataAttributes {
  images: {
    DEFAULT: Omit<PictureSourceProps, 'media'>;
    [DEVICE_BREAKPOINTS.LARGE_DESKTOP]?: PictureSourceProps;
    [DEVICE_BREAKPOINTS.DESKTOP]?: PictureSourceProps;
    [DEVICE_BREAKPOINTS.TABLET]?: PictureSourceProps;
    [DEVICE_BREAKPOINTS.MOBILE]?: PictureSourceProps;
  };
  caption?: string;
  loading?: ImageLoadingType;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  ratio?: number;
  borderRadius?: string;
  objectFit?: CSSProperties['objectFit'];
  component?: GenericImageType;
}

export type IImage = ImageStandAloneProps;
