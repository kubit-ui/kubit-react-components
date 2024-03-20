import * as React from 'react';

import { Loader } from '@/components/loader';
import { Text } from '@/components/text';

// styles
import { LoadingWrapper } from '../inputSearch.styled';
import { ILoadingIcon } from '../types/inputSearch';

export const LoadingIcon = (props: ILoadingIcon): JSX.Element | null => {
  return props.loading ? (
    <LoadingWrapper $expanded={props.expanded} styles={props.stateStyles}>
      <Loader
        variant={props.stateStyles?.loader?.variant}
        width={props.stateStyles?.loader?.width}
        {...props.loader}
      />
      {props.expanded && (
        <Text customTypography={props.stateStyles?.loadingText} {...props.loadingText}>
          {props.loadingText?.content}
        </Text>
      )}
    </LoadingWrapper>
  ) : null;
};
