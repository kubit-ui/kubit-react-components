import * as React from 'react';

import { ROLES } from '@/types/index';

import { ScreenReaderOnly } from '../screenReaderOnly';
// styles
import { LoaderStyled, LoaderWrapperStyled } from './loader.styled';
import { ILoaderStandAlone } from './types';

const LoaderStandaloneComponent = (
  { dataTestId = 'loaderStandaloneTestId', ...props }: ILoaderStandAlone,
  ref: React.ForwardedRef<HTMLSpanElement> | undefined | null
): JSX.Element => {
  return (
    <LoaderWrapperStyled role={ROLES.STATUS} styles={props.styles}>
      {props.visible && (
        <>
          <LoaderStyled
            ref={ref}
            $width={props.width}
            data-testid={dataTestId}
            position={props.position}
            styles={props.styles}
          />
          <ScreenReaderOnly dataTestId={`${dataTestId}ScreenReader`}>
            {props.altText}
          </ScreenReaderOnly>
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
