import styled from 'styled-components';

import { ImageObjectFitType, ImageStylesPropsType } from './types';

export const ImageStyled = styled.img``;

export const ImagePictureStyled = styled.picture<ImageStylesPropsType>`
  position: relative;
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  width: ${({ width }) => width || '100%'};

  ${({ ratio }) => !!ratio && `aspect-ratio: ${ratio};`};

  @supports not (aspect-ratio: 16 / 9) {
    ${({ fallbackRatio }) => `padding-top: ${fallbackRatio}%;`};
  }

  & img {
    max-width: 100%;
    border-radius: ${props => props.borderRadius};
    object-fit: ${props => (props.objectFit ? props.objectFit : ImageObjectFitType.CONTAIN)};

    ${({ ratio }) => !!ratio && `aspect-ratio: ${ratio};`};

    @supports not (aspect-ratio: 16 / 9) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
  }
`;
