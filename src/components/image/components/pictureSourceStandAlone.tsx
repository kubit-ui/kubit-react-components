import * as React from 'react';

import { IPictureSourceSandAlone } from '../types';

/**
 * @description
 * PictureSourceStandAlone component to load images
 * @param {IPictureSourceSandAlone} props
 * @returns {JSX.Element | null}
 * @constructor
 * @example
 * <PictureSourceStandAlone
 * mediaSource={{
 *  height: '100',
 * media: '(min-width: 1024px)',
 * src: 'https://via.placeholder.com/1024x768',
 * width: '100',
 * }}
 * />
 *
 */
export const PictureSourceStandAlone = ({
  mediaSource,
  dataTestId,
}: IPictureSourceSandAlone): JSX.Element | null => {
  if (!mediaSource) {
    return null;
  }
  return (
    <source
      data-testid={dataTestId}
      height={mediaSource.height}
      media={mediaSource.media}
      srcSet={mediaSource.src}
      width={mediaSource.width}
    />
  );
};
