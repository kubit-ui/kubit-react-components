import * as React from 'react';

import { Loader } from '@/components/loader';
import { Text } from '@/components/text';

// styles
import { LoadingWrapper } from '../inputDropdown.styled';
import { ILoadingIconDropdown } from '../types/inputDropdown';

export const LoadingIcon = ({
  optionList = { options: [] },
  ...props
}: ILoadingIconDropdown): JSX.Element => {
  return (
    <>
      {(props.stateStyles?.loader?.variant || props.loader?.variant) && (
        <LoadingWrapper
          $expanded={optionList.options.length !== 0}
          loading={props.loading}
          styles={props.stateStyles}
        >
          <Loader
            variant={props.stateStyles?.loader?.variant}
            visible={props.loading}
            width={props.stateStyles?.loader?.width}
            {...props.loader}
          />
          {props.loading && optionList.options.length === 0 && (
            <Text customTypography={props.stateStyles?.loadingText} {...props.loadingText}>
              {props.loadingText?.content}
            </Text>
          )}
        </LoadingWrapper>
      )}
    </>
  );
};
