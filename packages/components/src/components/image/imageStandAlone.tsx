/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './image.css';

import { type CSSProperties, forwardRef } from 'react';

import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { ImageStandAloneProps } from './types/image';

import { PictureSourceStandAlone } from './components/pictureSourceStandAlone';
import { getFallbackRatio } from './utils/getFallbackRatio';

/**
 * Standalone image component for responsive and customizable image rendering.
 *
 * This component is designed to handle responsive images using the `<picture>` element
 * and supports custom styles, captions, and lazy loading. It adapts to different
 * breakpoints by rendering appropriate image sources for each device type.
 *
 * Internally, it uses {@link PictureSourceStandAlone} to render individual `<source>` elements
 * for responsive behavior.
 *
 * @example
 * ```tsx
 * <ImageStandAlone
 *   alt="Example image"
 *   images={{
 *     DEFAULT: { src: 'default.jpg' },
 *     MOBILE: { src: 'mobile.jpg' },
 *     TABLET: { src: 'tablet.jpg' },
 *     DESKTOP: { src: 'desktop.jpg' },
 *   }}
 *   ratio="16:9"
 * />
 * ```
 */
export const ImageStandAlone = forwardRef<HTMLElement, ImageStandAloneProps>(
  (
    {
      alt,
      borderRadius,
      caption,
      height,
      images,
      loading = 'lazy',
      objectFit,
      onLoad,
      ratio,
      title,
      width,
      ...props
    },
    ref,
  ) => {
    const style = {
      '--border-radius': borderRadius,
      '--fallback-ratio': ratio && getFallbackRatio(ratio) + '%',
      '--object-fit': objectFit,
      '--ratio': ratio,
    } as CSSProperties;

    const customProps = pickCustomAttributes(props);

    return (
      <figure ref={ref} data-testid="image" {...customProps}>
        <picture className="kbt-picture" style={style}>
          <PictureSourceStandAlone
            mediaSource={images[DEVICE_BREAKPOINTS.LARGE_DESKTOP]}
          />
          <PictureSourceStandAlone
            mediaSource={images[DEVICE_BREAKPOINTS.DESKTOP]}
          />
          <PictureSourceStandAlone
            mediaSource={images[DEVICE_BREAKPOINTS.TABLET]}
          />
          <PictureSourceStandAlone
            mediaSource={images[DEVICE_BREAKPOINTS.MOBILE]}
          />
          <img
            alt={alt}
            height={height}
            loading={loading}
            src={images.DEFAULT.src}
            title={title}
            width={width}
            onLoad={onLoad}
          />
        </picture>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    );
  },
);
