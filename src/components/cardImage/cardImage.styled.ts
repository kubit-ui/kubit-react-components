import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { CardImageVariantStylesType } from './types/cardImageTheme';

type CardImageStyles = {
  image?: string;
  styles: CardImageVariantStylesType;
};

export const CardImageTitleStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})``;

export const CardImageSubTitleStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})``;

export const CardImageStyled = styled.div<CardImageStyles>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  ${props => getStyles(props.styles.container)}

  ${CardImageTitleStyled} {
    ${props => getStyles(props.styles.titleContainer)}
  }

  ${CardImageSubTitleStyled} {
    ${props => getStyles(props.styles.descriptionContainer)}
  }
`;

export const CardImageImageStyled = styled.div<CardImageStyles>`
  background: ${props => `url(${props.image}) no-repeat`};
  background-size: auto;
  background-position: 50% 50%;
  height: 100%;
  flex: 1;
  ${props => getStyles(props.styles.imageContainer)}
`;

export const CardImageContentStyled = styled.div<CardImageStyles>`
  ${props => getStyles(props.styles.content)}
`;

export const CardImageTesxtContainerStyled = styled.div<CardImageStyles>`
  ${props => getStyles(props.styles.textContainer)}
`;

export const CardImageLinkStyled = styled.div<CardImageStyles>`
  display: flex;
  ${props => getStyles(props.styles.linkContainer)}
`;
