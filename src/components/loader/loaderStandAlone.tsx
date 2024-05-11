import * as React from 'react';

import { ROLES } from '@/types/index';
import { pickAriaProps } from '@/utils/aria/aria';

import { ScreenReaderOnly } from '../screenReaderOnly';
// styles
import { LoaderStyled, LoaderWrapperStyled } from './loader.styled';
import { ILoaderStandAlone } from './types';

const LoaderStandaloneComponent = (
  {
    width,
    styles,
    altText,
    position,
    dataTestId = 'loaderStandaloneTestId',
    visible,
    ...props
  }: ILoaderStandAlone,
  ref: React.ForwardedRef<HTMLSpanElement> | undefined | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  return (
    <LoaderWrapperStyled role={ROLES.STATUS}>
      {visible && (
        <>
          <LoaderStyled
            ref={ref}
            $width={width}
            data-testid={dataTestId}
            position={position}
            styles={styles}
          />
          <ScreenReaderOnly dataTestId={`${dataTestId}ScreenReader`}>{altText}</ScreenReaderOnly>
        </>
      )}
    </LoaderWrapperStyled>
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
