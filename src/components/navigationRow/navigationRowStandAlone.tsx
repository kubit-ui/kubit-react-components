import React, { forwardRef } from 'react';

import { ButtonType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { IconHighlighted } from '../iconHighlighted';
import {
  DecorativeElementContainerStyled,
  IconAndIconHighlightedContainerStyled,
  NavigationRowStyled,
  TextSectionStyled,
} from './navigationRow.styled';
import { INavigationRowStandAlone } from './types';

const NavigationRowStandaloneComponent = (
  {
    dataTestId = 'navigation-row',
    topLine = false,
    bottomLine = false,
    ...props
  }: INavigationRowStandAlone,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => {
  const iconHighlightedSize = props.iconHighlighted?.size ?? props.styles.iconHighlighted?.size;
  return (
    <NavigationRowStyled
      ref={ref}
      bottomLine={bottomLine}
      data-testid={dataTestId}
      lineSeparatorLineStyles={props.lineSeparatorLineStyles}
      styles={props.styles}
      topLine={topLine}
      type={ButtonType.BUTTON}
      onClick={props.onClick}
    >
      <IconAndIconHighlightedContainerStyled styles={props.styles}>
        {props.decorativeIcon && !props.iconHighlighted && (
          <ElementOrIcon customIconStyles={props.styles.decorativeIcon} {...props.decorativeIcon} />
        )}
        {props.iconHighlighted && props.styles.iconHighlighted && iconHighlightedSize && (
          <IconHighlighted
            backgroundColor={props.styles.iconHighlighted?.backgroundColor}
            color={props.styles.iconHighlighted?.color}
            variant={props.styles.iconHighlighted?.variant}
            {...props.iconHighlighted}
            size={iconHighlightedSize}
          />
        )}
      </IconAndIconHighlightedContainerStyled>
      <DecorativeElementContainerStyled styles={props.styles}>
        {props.decorativeElement}
      </DecorativeElementContainerStyled>
      <TextSectionStyled styles={props.styles}>
        {props.text && (
          <Text
            component={TextComponentType.SPAN}
            customTypography={props.styles.text}
            {...props.text}
          >
            {props.text.content}
          </Text>
        )}
        <Text
          component={TextComponentType.SPAN}
          customTypography={props.styles.description}
          {...props.description}
        >
          {props.description?.content}
        </Text>
      </TextSectionStyled>

      <ElementOrIcon customIconStyles={props.styles.arrowIcon} {...props.arrowIcon} />
    </NavigationRowStyled>
  );
};

export const NavigationRowStandalone = forwardRef(NavigationRowStandaloneComponent);
