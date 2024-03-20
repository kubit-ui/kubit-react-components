import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Tag } from '@/components/tag';
import { Text, TextComponentType, TextDecorationType } from '@/components/text';
import { DeviceBreakpointsType } from '@/types';

import {
  NavigationCardContentStyled,
  NavigationCardDescriptionContainerStyled,
  NavigationCardLinesTextStyled,
  NavigationCardTagContainer,
} from '../navigationCard.styled';
import {
  NavigationCardStylesPropsType,
  NavigationCardTagType,
  NavigationCardTextType,
} from '../types';

interface INavigationCardInfo {
  styles: NavigationCardStylesPropsType;
  title?: NavigationCardTextType;
  description?: NavigationCardTextType;
  tag?: NavigationCardTagType;
  device: DeviceBreakpointsType;
  dataTestId?: string;
  customHeight?: string;
}

export const NavigationCardInfo = (props: INavigationCardInfo): JSX.Element => (
  <NavigationCardContentStyled>
    <NavigationCardLinesTextStyled
      lines={props.styles.title?.[props.device]?.linesNumber ?? props.styles.title?.linesNumber}
    >
      <Text
        component={props.styles.title?.[props.device]?.component ?? props.styles.title?.component}
        customTypography={props.styles.title}
        dataTestId={`${props.dataTestId}Text`}
        decoration={TextDecorationType.NONE}
        {...props.title}
      >
        {props.title?.content}
      </Text>
    </NavigationCardLinesTextStyled>
    {props.description && (
      <NavigationCardDescriptionContainerStyled styles={props.styles}>
        <NavigationCardLinesTextStyled
          lines={
            props.styles.description?.[props.device]?.linesNumber ??
            props.styles.description?.linesNumber
          }
        >
          <Text
            component={TextComponentType.SPAN}
            customTypography={props.styles.description}
            dataTestId={`${props.dataTestId}Description`}
            decoration={TextDecorationType.NONE}
            {...props.description}
          >
            {props.description.content}
          </Text>
        </NavigationCardLinesTextStyled>
      </NavigationCardDescriptionContainerStyled>
    )}
    {props.tag && props.styles.containerExpandedContent && (
      <NavigationCardTagContainer styles={props.styles}>
        <Tag
          dataTestId={`${props.dataTestId}Tag`}
          option={props.styles.tag?.option}
          variant={props.styles.tag?.variant}
          {...props.tag}
        >
          <ScreenReaderOnly>{props.tag?.screenReaderText}</ScreenReaderOnly>
          {props.tag?.content}
        </Tag>
      </NavigationCardTagContainer>
    )}
  </NavigationCardContentStyled>
);
