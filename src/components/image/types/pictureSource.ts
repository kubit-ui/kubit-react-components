export type PictureSourceType = {
  src: string;
  media: string;
  width?: string;
  height?: string;
};

export type IPictureSourceSandAlone = {
  mediaSource?: PictureSourceType;
  dataTestId?: string;
};
