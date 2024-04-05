import * as React from 'react';

// styles
import {
  HorizontalContentStyled,
  InputStructureContainerStyled,
  InputStructureContentBottomStyled,
  InputStructureContentLeftStyled,
  InputStructureContentRightStyled,
  InputStructureContentTopStyled,
  InputStructureWrapperStyled,
  VerticalContentStyled,
} from './inputStructure.styled';
import { IInputStructure } from './types/inputStructure';

/**
 * @description
 * InputStructure component to structure inputs
 * @param {IInputStructure} props
 * @returns {JSX.Element}
 */
export const InputStructureStandAlone = (props: IInputStructure): JSX.Element => (
  <InputStructureContainerStyled
    data-testid={props.dataTestIdParentContainer}
    onBlur={props.onBlurStructure}
    onFocus={props.onFocusStructure}
  >
    <VerticalContentStyled>
      <InputStructureContentTopStyled extraStyles={props.topExtraStyles}>
        {props.topContent}
      </InputStructureContentTopStyled>
      <HorizontalContentStyled>
        <InputStructureContentLeftStyled extraStyles={props.leftExtraStyles}>
          {props.leftContent}
        </InputStructureContentLeftStyled>
        <InputStructureWrapperStyled extraStyles={props.centerExtraStyles}>
          {props.centerContent}
        </InputStructureWrapperStyled>
        <InputStructureContentRightStyled extraStyles={props.rightExtraStyles}>
          {props.rightContent}
        </InputStructureContentRightStyled>
      </HorizontalContentStyled>
      <InputStructureContentBottomStyled extraStyles={props.bottomExtraStyles}>
        {props.bottomContent}
      </InputStructureContentBottomStyled>
    </VerticalContentStyled>
  </InputStructureContainerStyled>
);
