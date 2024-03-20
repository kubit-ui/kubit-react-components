import styled from 'styled-components';

import { getStyles } from '@/utils';

import { FunctionalitiesModuleVariantStylesType } from './types/functionalitiesModuleTheme';

type FunctionalitiesStylesTypes = {
  styles: FunctionalitiesModuleVariantStylesType;
};

export const TabsContainerStyled = styled.section<FunctionalitiesStylesTypes>`
  ${props => getStyles(props.styles?.tabsContainer)}
`;

export const ContentContainerStyled = styled.div<FunctionalitiesStylesTypes>`
  ${props => getStyles(props.styles?.contentContainer)}
  :not(:last-child) {
    ${props => getStyles(props.styles?.contentNotLastChild)}
  }
`;

export const ButtonContainerStyled = styled.div<FunctionalitiesStylesTypes>`
  ${props => getStyles(props.styles?.buttonContainer)}
`;

export const ActionBottomSheetContainerStyled = styled.div<FunctionalitiesStylesTypes>`
  ${props => getStyles(props.styles?.actionBottomSheetContainer)}
`;
