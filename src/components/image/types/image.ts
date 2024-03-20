import { DeviceBreakpointsType } from '@/types/breakpoints';

import { ImageLoadingType } from './loading';
import { ImageObjectFitType } from './objectFit';
import { PictureSourceType } from './pictureSource';

export interface IImageStandAlone {
  images: {
    DEFAULT: Omit<PictureSourceType, 'media'>;
    [DeviceBreakpointsType.LARGE_DESKTOP]?: PictureSourceType;
    [DeviceBreakpointsType.DESKTOP]?: PictureSourceType;
    [DeviceBreakpointsType.TABLET]?: PictureSourceType;
    [DeviceBreakpointsType.MOBILE]?: PictureSourceType;
  };
  caption?: string;
  loading?: ImageLoadingType;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  ratio?: number;
  dataTestId?: string;
  borderRadius?: string;
  objectFit?: ImageObjectFitType;
}

export type IImage = IImageStandAlone;
