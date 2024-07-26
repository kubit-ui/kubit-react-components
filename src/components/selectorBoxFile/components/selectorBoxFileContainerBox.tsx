import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Loader } from '@/components/loader';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import {
  ActionIconAndActionTextContainerStyled,
  ContainerBoxActionDescriptionTextWrapper,
  ContainerBoxStyled,
  ContainerBoxTextWrapper,
} from '../selectorBoxFile.styled';
import {
  SelectorBoxFileContainerBoxStateContentType,
  SelectorBoxFilePropsStylesType,
  SelectorBoxFileStateType,
} from '../types';

interface ISelectorBoxFileContainerBox {
  styles: SelectorBoxFilePropsStylesType;
  htmlFor: string;
  state: SelectorBoxFileStateType;
  containerBoxStateContent: SelectorBoxFileContainerBoxStateContentType;
  filename?: string;
  focus: boolean;
}

export const SelectorBoxFileContainerBox = (props: ISelectorBoxFileContainerBox): JSX.Element => {
  return (
    <ContainerBoxStyled
      data-focus={props.focus}
      htmlFor={props.htmlFor}
      state={props.state}
      styles={props.styles}
    >
      <span>
        <Loader
          altText={props.containerBoxStateContent[props.state]?.icon?.altText}
          variant={
            props.styles?.states?.[SelectorBoxFileStateType.LOADING]?.containerBoxLoader?.variant
          }
          visible={props.state === SelectorBoxFileStateType.LOADING}
          width={
            props.styles?.states?.[SelectorBoxFileStateType.LOADING]?.containerBoxLoader?.width
          }
        />
        {props.state !== SelectorBoxFileStateType.LOADING && (
          <ElementOrIcon
            customIconStyles={props.styles?.states?.[props.state]?.containerBoxIcon}
            {...props.containerBoxStateContent[props.state]?.icon}
          />
        )}
      </span>
      <ContainerBoxTextWrapper state={props.state} styles={props.styles}>
        {props.filename &&
        [
          SelectorBoxFileStateType.LOADING,
          SelectorBoxFileStateType.SUCCESS,
          SelectorBoxFileStateType.ERROR,
        ].includes(props.state) ? (
          <Text
            component={TextComponentType.SPAN}
            customTypography={props.styles?.states?.[props.state]?.containerBoxFilename}
          >
            {props.filename}
          </Text>
        ) : null}
        <ContainerBoxActionDescriptionTextWrapper>
          {props.containerBoxStateContent[props.state]?.actionText?.content ? (
            <ActionIconAndActionTextContainerStyled state={props.state} styles={props.styles}>
              <ElementOrIcon
                altText={props.containerBoxStateContent[props.state]?.icon?.altText}
                customIconStyles={props.styles?.states?.[props.state]?.actionIcon}
                {...props.containerBoxStateContent[props.state]?.actionIcon}
              />
              <Text
                component={TextComponentType.SPAN}
                customTypography={props.styles?.states?.[props.state]?.containerBoxActionText}
                {...props.containerBoxStateContent[props.state]?.actionText}
              >
                {props.containerBoxStateContent[props.state]?.actionText?.content}
              </Text>
            </ActionIconAndActionTextContainerStyled>
          ) : null}
          {props.containerBoxStateContent[props.state]?.description ? (
            <Text
              component={TextComponentType.SPAN}
              customTypography={props.styles?.states?.[props.state]?.containerBoxDescription}
              {...props.containerBoxStateContent[props.state]?.description}
            >
              {props.containerBoxStateContent[props.state]?.description?.content}
            </Text>
          ) : null}
        </ContainerBoxActionDescriptionTextWrapper>
      </ContainerBoxTextWrapper>
    </ContainerBoxStyled>
  );
};
