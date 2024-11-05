import * as React from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import {
  BodyStyled,
  ContainerStyled,
  HeaderStyled,
  HeaderTitleIconStyled,
  LeftIconWrapper,
  RightIconWrapper,
  TitleWrapper,
} from './summaryDetails.styled';
import { ISummaryDetailsStandAlone } from './types';

const SummaryDetailsStandAloneComponent = (
  {
    dataTestId = 'summary-details',
    rotateOpenIcon = '180deg',
    hasLineSeparator = true,
    ...props
  }: React.PropsWithChildren<ISummaryDetailsStandAlone>,
  ref: React.ForwardedRef<HTMLDetailsElement> | undefined | null
): JSX.Element => {
  const leftIcon = props.open && props.leftOpenIcon ? props.leftOpenIcon : props.leftIcon;
  const rightIcon = props.open && props.openIcon ? props.openIcon : props.icon;

  const leftIconStyles = props.open ? props.styles.leftOpenIcon : props.styles.leftClosedIcon;
  const rightIconStyles = props.open ? props.styles.rightOpenIcon : props.styles.rightClosedIcon;

  const leftRotateOpen = props.leftOpenIcon ? '0deg' : rotateOpenIcon;
  const rightRotateOpen = props.openIcon ? '0deg' : rotateOpenIcon;

  return (
    <ContainerStyled
      ref={ref}
      data-testid={dataTestId}
      open={props.open}
      styles={props.styles}
      onClick={props.onClick}
    >
      <HeaderStyled
        $isOpen={props.open}
        data-testid={`${dataTestId}-summary`}
        hasLineSeparator={hasLineSeparator}
        lineSeparatorLineStyles={props.lineSeparatorLineStyles}
        styles={props.styles}
      >
        <HeaderTitleIconStyled as={props.title.component} styles={props.styles}>
          {leftIcon && (
            <LeftIconWrapper styles={props.styles}>
              <ElementOrIcon
                customIconStyles={leftIconStyles}
                rotate={
                  props.styles.leftIconContainer?.allowRotate && props.open
                    ? leftRotateOpen
                    : '0deg'
                }
                {...leftIcon}
              />
            </LeftIconWrapper>
          )}
          <TitleWrapper styles={props.styles}>
            <Text
              customTypography={props.styles.title}
              {...props.title}
              component={TextComponentType.SPAN}
            >
              {props.title.content}
            </Text>
          </TitleWrapper>
          {rightIcon && (
            <RightIconWrapper styles={props.styles}>
              <ElementOrIcon
                customIconStyles={rightIconStyles}
                rotate={
                  props.styles.rightIconContainer?.allowRotate && props.open
                    ? rightRotateOpen
                    : '0deg'
                }
                {...rightIcon}
              />
            </RightIconWrapper>
          )}
        </HeaderTitleIconStyled>
        <Text
          component={TextComponentType.SPAN}
          customTypography={props.styles.description}
          {...props.description}
        >
          {props.description?.content}
        </Text>
      </HeaderStyled>
      <BodyStyled
        data-testid={`${dataTestId}-content`}
        styles={props.styles}
        onClick={props.onBodyClick}
      >
        {props.children}
      </BodyStyled>
    </ContainerStyled>
  );
};

export const SummaryDetailsStandAlone = React.forwardRef(SummaryDetailsStandAloneComponent);
