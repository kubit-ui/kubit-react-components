import React from 'react';

import { ROLES } from '@/types/role/role';

import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
// styles
import { LoaderStyled, LoaderWrapperStyled } from './loader.styled';
import { ILoaderStandAlone } from './types/loader';

const LoaderStandaloneComponent = (
  { dataTestId = 'loader', ...props }: ILoaderStandAlone,
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
          <ScreenReaderOnly>{props.altText}</ScreenReaderOnly>
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
