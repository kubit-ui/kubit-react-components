import React from 'react';

import { Text } from '@/components/text/text';

import { Loader } from '../../loader/loader';
// styles
import { LoadingWrapper } from '../inputSearch.styled';
import { ILoadingIcon } from '../types/inputSearch';

export const LoadingIcon = (props: ILoadingIcon): JSX.Element => {
  return (
    <>
      {(props.stateStyles?.loader?.variant || props.loader?.variant) && (
        <LoadingWrapper
          $expanded={props.expanded}
          loading={props.loading}
          styles={props.stateStyles}
        >
          <Loader
            variant={props.stateStyles?.loader?.variant}
            visible={props.loading}
            width={props.stateStyles?.loader?.width}
            {...props.loader}
          />
          {props.loading && props.expanded && (
            <Text customTypography={props.stateStyles?.loadingText} {...props.loadingText}>
              {props.loadingText?.content}
            </Text>
          )}
        </LoadingWrapper>
      )}
    </>
  );
};
