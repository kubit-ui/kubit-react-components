import styled, { css } from 'styled-components';

import { CommonStyleType } from '@/types/styles';
import { getStyles } from '@/utils/getStyles/getStyles';

import { HeaderStructurePropsStyles } from './types';

export const HeaderContainerStyled = styled.div<
  HeaderStructurePropsStyles & {
    containerHeight?: string;
    scrolling?: boolean;
    backgroundColor?: string;
  }
>`
  width: 100%;
  height: ${({ containerHeight }) => containerHeight};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${props => getStyles(props.styles?.container)}
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
background-color: ${backgroundColor};
`}
${({ styles, scrolling }) =>
    scrolling
      ? css`
          box-shadow: ${styles?.container?.box_shadow ?? 'none'};
        `
      : 'box-shadow: none'}
`;

export const HeaderContainerContentStyled = styled.div<HeaderStructurePropsStyles>`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  ${props => getStyles(props.styles?.content)}
`;

export const HeaderContentStyled = styled.div<{ styles?: CommonStyleType }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  ${props => getStyles(props.styles)}
`;

export const BreadcrumbsWrapper = styled.div<HeaderStructurePropsStyles>`
  ${props => getStyles(props.styles?.breadcrumbs)}
`;
