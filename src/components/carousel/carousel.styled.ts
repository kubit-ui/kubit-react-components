import styled, { css } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { CarouselArrowStateType, CarouselPropsStylesType } from './types';

export const RootStyled = styled.article<{
  styles: CarouselPropsStylesType;
  allowModifySliceWidth?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ styles }) => getStyles(styles.container)};
  ${({ allowModifySliceWidth }) =>
    allowModifySliceWidth &&
    css`
      width: 100%;
    `};
`;

export const ArrowAndCarouselWrapperStyled = styled.div<{
  styles: CarouselPropsStylesType;
  allowModifySliceWidth?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  ${({ styles }) => getStyles(styles.arrowAndCarouselContainer)};
  ${({ allowModifySliceWidth }) =>
    allowModifySliceWidth &&
    css`
      width: 100%;
    `};
`;

export const CarouselContainerStyled = styled.div<{ styles: CarouselPropsStylesType }>`
  overflow: hidden;
  position: relative;
  width: 0px;
  &:focus-visible {
    outline-color: transparent;
  }
  ${({ styles }) => getStyles(styles.carouselContainer)};
`;

export const CarouselContentStyled = styled.div<{
  styles: CarouselPropsStylesType;
  centerMode?: boolean;
  disableSwipe?: boolean;
}>`
  position: relative;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  > * {
    flex-shrink: 0;
  }

  cursor: ${({ disableSwipe }) => (!disableSwipe ? 'grab' : 'default')};
  :active {
    cursor: ${({ disableSwipe }) => (!disableSwipe ? 'grabbing' : 'default')};
  }

  &.shifting {
    transition: left 0.5s ease-out;
  }

  ${({ centerMode }) =>
    centerMode &&
    css`
      > * {
        transform: scale(0.85);
        transition: transform 0.5s ease-out;
        &.highlight {
          transform: scale(1);
        }
      }
    `};
  ${({ styles }) => getStyles(styles.content)};
`;

export const ExtraPaddingArrowStyled = styled.button<{
  styles: CarouselPropsStylesType;
  extraPadding: number;
  right?: boolean;
}>`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ styles, extraPadding, right }) => css`
    width: calc(${extraPadding}px - ${styles.content?.gap || '0px'});
    right: ${right ? 0 : undefined};
    left: ${right ? undefined : 0};
  `}
`;

export const PageControlContainerStyled = styled.div<{
  styles: CarouselPropsStylesType;
}>`
  ${({ styles }) => getStyles(styles.pageControlContainer)};
`;

export const PageControlAutomateContainerStyled = styled.div<{
  styles: CarouselPropsStylesType;
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  ${({ styles }) => getStyles(styles.pageControlAutomateContainer)};
`;

export const ArrowLeftIconContainer = styled.div<{
  styles: CarouselPropsStylesType;
}>`
  > button {
    position: absolute;
    top: 0;
    ${({ styles }) =>
      getStyles(styles[CarouselArrowStateType.DEFAULT]?.arrowLeftIconButtonContainer)};
    &:focus {
      ${props =>
        getStyles(props.styles[CarouselArrowStateType.DEFAULT]?.arrowLeftIconButtonContainer)}
    }
    &:hover {
      ${props =>
        getStyles(props.styles[CarouselArrowStateType.HOVER]?.arrowLeftIconButtonContainer)}
    }
    &:active {
      ${props =>
        getStyles(props.styles[CarouselArrowStateType.PRESSED]?.arrowLeftIconButtonContainer)}
    }
  }
  ${({ styles }) => getStyles(styles[CarouselArrowStateType.DEFAULT]?.arrowLeftIconContainer)};
  &:hover {
    ${props => getStyles(props.styles[CarouselArrowStateType.HOVER]?.arrowLeftIconContainer)}
  }
  &:active {
    ${props => getStyles(props.styles[CarouselArrowStateType.PRESSED]?.arrowLeftIconContainer)}
  }
  &[data-disabled='true'] {
    ${({ styles }) => getStyles(styles[CarouselArrowStateType.DISABLED]?.arrowLeftIconContainer)};
    > button {
      ${({ styles }) =>
        getStyles(styles[CarouselArrowStateType.DISABLED]?.arrowLeftIconButtonContainer)};
    }
  }
`;

export const ArrowRightIconContainer = styled.div<{
  styles: CarouselPropsStylesType;
}>`
  > button {
    position: absolute;
    top: 0;
    ${({ styles }) =>
      getStyles(styles[CarouselArrowStateType.DEFAULT]?.arrowRightIconButtonContainer)};
    &:hover {
      ${props =>
        getStyles(props.styles[CarouselArrowStateType.HOVER]?.arrowRightIconButtonContainer)}
    }
    &:active {
      ${props =>
        getStyles(props.styles[CarouselArrowStateType.PRESSED]?.arrowRightIconButtonContainer)}
    }
  }
  ${({ styles }) => getStyles(styles[CarouselArrowStateType.DEFAULT]?.arrowRightIconContainer)};
  &:hover {
    ${props => getStyles(props.styles[CarouselArrowStateType.HOVER]?.arrowRightIconContainer)}
  }
  &:active {
    ${props => getStyles(props.styles[CarouselArrowStateType.PRESSED]?.arrowRightIconContainer)}
  }
  &[data-disabled='true'] {
    ${({ styles }) => getStyles(styles[CarouselArrowStateType.DISABLED]?.arrowRightIconContainer)};
    > button {
      ${({ styles }) =>
        getStyles(styles[CarouselArrowStateType.DISABLED]?.arrowRightIconButtonContainer)};
    }
  }
`;
