import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export interface PictureSourceProps {
  src: string;
  media: string;
  width?: string;
  height?: string;
}

export interface PictureSourceSandAloneProps extends DataAttributes {
  mediaSource?: PictureSourceProps;
}
