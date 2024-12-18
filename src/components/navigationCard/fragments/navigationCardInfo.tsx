import React from 'react';

import { Tag } from '@/components/tag/tag';
import { Text } from '@/components/text/text';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { ScreenReaderOnly } from '../../screenReaderOnly/screenReaderOnly';
import { TextComponentType } from '../../text/types/component';
import { TextDecorationType } from '../../text/types/decoration';
import {
  NavigationCardContentStyled,
  NavigationCardDescriptionContainerStyled,
  NavigationCardLinesTextStyled,
  NavigationCardTagContainer,
} from '../navigationCard.styled';
import { NavigationCardTagType, NavigationCardTextType } from '../types/navigationCard';
import { NavigationCardStylesPropsType } from '../types/navigationCardTheme';

interface INavigationCardInfo {
  styles: NavigationCardStylesPropsType;
  innerContainersComponent?: 'div' | 'span';
  title?: NavigationCardTextType;
  description?: NavigationCardTextType;
  tag?: NavigationCardTagType;
  device: DeviceBreakpointsType;
  customHeight?: string;
}

export const NavigationCardInfo = (props: INavigationCardInfo): JSX.Element => (
  <NavigationCardContentStyled as={props.innerContainersComponent}>
    <NavigationCardLinesTextStyled
      as={props.innerContainersComponent}
      lines={props.styles.title?.[props.device]?.linesNumber ?? props.styles.title?.linesNumber}
    >
      <Text
        component={
          props.styles.title?.[props.device]?.component ??
          props.styles.title?.component ??
          TextComponentType.SPAN
        }
        customTypography={props.styles.title}
        decoration={TextDecorationType.NONE}
        {...props.title}
      >
        {props.title?.content}
      </Text>
    </NavigationCardLinesTextStyled>
    {props.description && (
      <NavigationCardDescriptionContainerStyled
        as={props.innerContainersComponent}
        styles={props.styles}
      >
        <NavigationCardLinesTextStyled
          as={props.innerContainersComponent}
          lines={
            props.styles.description?.[props.device]?.linesNumber ??
            props.styles.description?.linesNumber
          }
        >
          <Text
            component={TextComponentType.SPAN}
            customTypography={props.styles.description}
            decoration={TextDecorationType.NONE}
            {...props.description}
          >
            {props.description.content}
          </Text>
        </NavigationCardLinesTextStyled>
      </NavigationCardDescriptionContainerStyled>
    )}
    {props.tag && props.styles.containerExpandedContent && (
      <NavigationCardTagContainer as={props.innerContainersComponent} styles={props.styles}>
        <Tag option={props.styles.tag?.option} variant={props.styles.tag?.variant} {...props.tag}>
          <ScreenReaderOnly>{props.tag?.screenReaderText}</ScreenReaderOnly>
          {props.tag?.content}
        </Tag>
      </NavigationCardTagContainer>
    )}
  </NavigationCardContentStyled>
);
