import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { HeaderPropsStyles } from './types';

export const HeaderContainerStyled = styled.div<HeaderPropsStyles>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${props => getStyles(props.styles?.container)}
`;

export const HeaderContentStyled = styled.div<HeaderPropsStyles>`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${props => getStyles(props.styles?.content)}
`;

export const HeaderLeftContentStyled = styled.div<HeaderPropsStyles>`
  width: 80%;
  max-width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  ${props => getStyles(props.styles?.leftContent)}
`;

export const HeaderRightContentStyled = styled.div<HeaderPropsStyles>`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  ${props => getStyles(props.styles?.rightContent)}
`;

export const BreadcrumbsWrapper = styled.div<HeaderPropsStyles>`
  ${props => getStyles(props.styles?.breadcrumbs)}
`;
