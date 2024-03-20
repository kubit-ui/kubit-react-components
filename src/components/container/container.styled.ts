import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { ContainerPropsStylesType } from './types';

type ContainerPropsStyles = {
  styles: ContainerPropsStylesType;
};

export const ParentContainerStyled = styled.div<ContainerPropsStyles>`
  ${props => getStyles(props.styles.parentContainer)}
`;

export const HeaderStyled = styled.div<ContainerPropsStyles>`
  ${props => getStyles(props.styles.header)}
`;

export const ContainerStyled = styled.div<ContainerPropsStyles>`
  ${props => getStyles(props.styles.container)}
`;
