import * as React from 'react';

import { Loader } from '@/components/loader';
import { Text } from '@/components/text';

// styles
import { LoadingWrapper } from '../inputDropdown.styled';
import { ILoadingIconDropdown } from '../types/inputDropdown';

export const LoadingIcon = ({
  optionList = { options: [] },
  ...props
}: ILoadingIconDropdown): JSX.Element | null => {
  return props.loading && (props.stateStyles?.loader?.variant || props.loader?.variant) ? (
    <LoadingWrapper $expanded={optionList.options.length !== 0} styles={props.stateStyles}>
      <Loader
        variant={props.stateStyles?.loader?.variant}
        width={props.stateStyles?.loader?.width}
        {...props.loader}
      />
      {optionList.options.length === 0 && (
        <Text customTypography={props.stateStyles?.loadingText} {...props.loadingText}>
          {props.loadingText?.content}
        </Text>
      )}
    </LoadingWrapper>
  ) : null;
};
