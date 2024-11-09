import React from 'react';

import { Loader } from '../../loader/loader';
// styles
import { LoaderWrapperStyled } from '../input.styled';
import { IInputLoader } from '../types/input';

export const LoaderStandAlone = (props: IInputLoader): JSX.Element => {
  return (
    <LoaderWrapperStyled styles={props.styles}>
      <Loader
        variant={props.styles?.loaderVariant}
        visible={props.loading}
        width={props.styles?.loaderIcon?.width}
        {...props.loader}
      />
    </LoaderWrapperStyled>
  );
};
