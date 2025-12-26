import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { PictureSourceSandAloneProps } from '../types/pictureSource';

/**
 * A standalone `<source>` element for responsive images.
 *
 * This component renders a `<source>` element for use within a `<picture>` tag. It is designed
 * to handle media queries and source sets for responsive image rendering. If no `mediaSource`
 * is provided, it returns `null`.
 *
 * @example
 * ```tsx
 * <PictureSourceStandAlone
 *   mediaSource={{
 *     media: '(min-width: 768px)',
 *     src: 'example.jpg',
 *     width: 800,
 *     height: 600,
 *   }}
 * />
 * ```
 */
export const PictureSourceStandAlone = ({
  mediaSource,
  ...props
}: PictureSourceSandAloneProps): JSX.Element | null => {
  if (!mediaSource) {
    return null;
  }

  const customProps = pickCustomAttributes(props);

  return (
    <source
      height={mediaSource.height}
      media={mediaSource.media}
      srcSet={mediaSource.src}
      width={mediaSource.width}
      {...customProps}
    />
  );
};
