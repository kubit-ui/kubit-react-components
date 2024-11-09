import styled from 'styled-components';

import { getStyles } from '../../utils/getStyles/getStyles';
import { LoadingStateGlobalStateStylesType } from './types/loadingStateTheme';

export const LoadingStateStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapperStyled = styled.div<{ styles: LoadingStateGlobalStateStylesType }>`
  ${({ styles }) => getStyles(styles.titleContainer)};
`;

export const DescriptionWrapperStyled = styled.div<{ styles: LoadingStateGlobalStateStylesType }>`
  ${({ styles }) => getStyles(styles.descriptionContainer)};
`;
