import * as React from 'react';

import { Loader } from '@/components/loader';

// styles
import { LoaderWrapperStyled } from '../input.styled';
import { IInputLoader } from '../types/input';

export const LoaderStandAlone = (props: IInputLoader): JSX.Element | null => {
  if (!props.loading || !(props.styles?.loaderVariant || props.loader?.variant)) {
    return null;
  }
  return (
    <LoaderWrapperStyled styles={props.styles}>
      <Loader
        variant={props.styles?.loaderVariant}
        width={props.styles?.loaderIcon?.width}
        {...props.loader}
      />
    </LoaderWrapperStyled>
  );
};
