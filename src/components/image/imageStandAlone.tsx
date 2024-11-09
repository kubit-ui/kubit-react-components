import React from 'react';

import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { ROLES } from '../../types/role/role';
// internal components
import { PictureSourceStandAlone } from './components/pictureSourceStandAlone';
// styles
import { ImagePictureStyled, ImageStyled } from './image.styled';
import { IImageStandAlone } from './types/image';
import { ImageLoadingType } from './types/loading';
import { getFallbackRatio } from './utils/getFallbackRatio';

const ImageStandAloneComponent = (
  { dataTestId = 'image', loading = ImageLoadingType.LAZY, ...props }: IImageStandAlone,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => {
  return (
    <figure ref={ref} data-testid={dataTestId}>
      <ImagePictureStyled
        borderRadius={props?.borderRadius}
        fallbackRatio={props.ratio && getFallbackRatio(props.ratio)}
        objectFit={props?.objectFit}
        ratio={props.ratio}
        tabIndex={props.tabIndex}
      >
        <PictureSourceStandAlone mediaSource={props.images[DeviceBreakpointsType.LARGE_DESKTOP]} />
        <PictureSourceStandAlone mediaSource={props.images[DeviceBreakpointsType.DESKTOP]} />
        <PictureSourceStandAlone mediaSource={props.images[DeviceBreakpointsType.TABLET]} />
        <PictureSourceStandAlone mediaSource={props.images[DeviceBreakpointsType.MOBILE]} />
        <ImageStyled
          alt={props.alt}
          as={props.component || ROLES.IMG}
          height={props.height}
          loading={loading}
          src={props.images.DEFAULT.src}
          title={props.title}
          width={props.width}
          onLoad={props.onLoad}
        />
      </ImagePictureStyled>
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  );
};

/**
 * @description
 * Image component to load images
 */
export const ImageStandAlone = React.forwardRef(ImageStandAloneComponent);
