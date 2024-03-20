import * as React from 'react';

import { ROLES } from '@/types/index';
import { pickAriaProps } from '@/utils/aria/aria';

// styles
import { LoaderStyled } from './loader.styled';
import { ILoaderStandAlone } from './types';

const LoaderStandaloneComponent = (
  {
    width,
    styles,
    altText,
    position,
    dataTestId = 'loaderStandaloneTestId',
    ...props
  }: ILoaderStandAlone,
  ref: React.ForwardedRef<HTMLSpanElement> | undefined | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  return (
    <LoaderStyled
      ref={ref}
      $width={width}
      aria-label={altText}
      data-testid={dataTestId}
      img-alt={altText}
      position={position}
      role={ROLES.IMG}
      styles={styles}
      {...ariaProps}
    />
  );
};

/**
 * @description
 * Loader component is used to show a loading state.
 * @param {React.PropsWithChildren<ILoaderStandAlone>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <LoaderStandalone />
 * <LoaderStandalone width="100px" />
 */
export const LoaderStandalone = React.forwardRef(LoaderStandaloneComponent);
