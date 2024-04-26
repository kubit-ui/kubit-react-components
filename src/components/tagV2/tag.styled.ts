import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { TagPropsStylesType } from './types';

export const TagContainerStyled = styled.div<{ styles: TagPropsStylesType }>`
  ${({ styles }) => getStyles(styles.container)};
`;
