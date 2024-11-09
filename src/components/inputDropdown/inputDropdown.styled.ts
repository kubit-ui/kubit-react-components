import styled, { css } from 'styled-components';

import { srOnlyMixin } from '../../styles/mixins/srOnly.mixin';
import { CommonStyleType } from '../../types/styles/commonStyle';
import { getStyles } from '../../utils/getStyles/getStyles';
import { InputDropdownStateProps } from './types/inputDropdownTheme';

type InputDropdownStylesType = {
  styles?: InputDropdownStateProps;
  isSelected?: boolean;
  loading?: boolean;
};

type InputDropdownLoadingStylesType = {
  $expanded: boolean;
  loading?: boolean;
  styles?: InputDropdownStateProps;
};

type InputDropdownCustomHeightType = {
  $height: string;
  useActionBottomSheet?: boolean;
};

export const InputDropdownStyled = styled.div<InputDropdownStylesType>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ styles }) => getStyles(styles?.inputDropdownContainer)}
`;

const buildHeight = ({
  searchListContainerDeviceStyles,
  $height,
  useActionBottomSheet,
}: {
  searchListContainerDeviceStyles?: CommonStyleType;
  $height: string;
  useActionBottomSheet?: boolean;
}) => {
  if (useActionBottomSheet) {
    return;
  }
  if (!$height) {
    return;
  }
  return css`
    height: ${`calc(${$height} + ${
      searchListContainerDeviceStyles?.border_bottom_width ?? '0px'
    } + ${searchListContainerDeviceStyles?.padding_top ?? '0px'} + ${
      searchListContainerDeviceStyles?.padding_bottom ?? '0px'
    })`};
  `;
};

export const ListContainerStyled = styled.div<
  InputDropdownStylesType & InputDropdownCustomHeightType
>`
  transition: height 200ms;
  ${({ styles }) => getStyles(styles?.searchListContainer)}
`;

export const InputDropdownListStyled = styled.div<
  InputDropdownStylesType & InputDropdownCustomHeightType
>`
  ${({ styles }) => getStyles(styles?.searchListSubContainer)};
  ${({ $height }) =>
    $height &&
    css`
      overflow-y: auto;
    `}
  ${({
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
    $height,
    useActionBottomSheet,
    styles,
  }) => css`
    ${onlyDesktop} {
      ${buildHeight({
        searchListContainerDeviceStyles: styles?.searchListContainer?.DESKTOP,
        $height,
        useActionBottomSheet,
      })}
    }
    ${onlyTablet} {
      ${buildHeight({
        searchListContainerDeviceStyles: styles?.searchListContainer?.TABLET,
        $height,
        useActionBottomSheet,
      })}
    }
    ${onlyMobile} {
      ${buildHeight({
        searchListContainerDeviceStyles: styles?.searchListContainer?.MOBILE,
        $height,
        useActionBottomSheet,
      })}
    }
  `};
`;

export const LoadingWrapper = styled.div<InputDropdownLoadingStylesType>`
  ${({ loading }) => !loading && srOnlyMixin}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ styles, $expanded }) =>
    $expanded
      ? getStyles(styles?.loaderExpandedContainer)
      : getStyles(styles?.loaderContractedContainer)};
`;

export const NoResultsTextWrapper = styled.div<{ styles?: InputDropdownStateProps }>`
  display: flex;
  ${({ styles }) => getStyles(styles?.noResultsTextContainer)};
`;
