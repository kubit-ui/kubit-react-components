import React, { forwardRef } from 'react';

import { ButtonType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text, TextComponentType } from '@/components/text';

import { IconHighlighted } from '../iconHighlighted';
import {
  IconAndIconHighlightedContainerStyled,
  NavigationRowStyled,
  TextSectionStyled,
} from './navigationRow.styled';
import { INavigationRowStandAlone } from './types';

const NavigationRowStandaloneComponent = (
  {
    dataTestId = 'NavigationRow',
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
          <ElementOrIcon
            customIconStyles={props.styles.decorativeIcon}
            dataTestId={`${dataTestId}DecorativeIcon`}
            {...props.decorativeIcon}
          />
        )}
        {props.iconHighlighted && props.styles.iconHighlighted && iconHighlightedSize && (
          <IconHighlighted
            backgroundColor={props.styles.iconHighlighted?.backgroundColor}
            color={props.styles.iconHighlighted?.color}
            dataTestId={`${dataTestId}IconHighlighted`}
            variant={props.styles.iconHighlighted?.variant}
            {...props.iconHighlighted}
            size={iconHighlightedSize}
          />
        )}
      </IconAndIconHighlightedContainerStyled>
      <TextSectionStyled styles={props.styles}>
        {props.text && (
          <Text
            component={TextComponentType.SPAN}
            customTypography={props.styles.text}
            dataTestId={`${dataTestId}Text`}
            {...props.text}
          >
            {props.text.content}
          </Text>
        )}
        <Text
          component={TextComponentType.SPAN}
          customTypography={props.styles.description}
          dataTestId={`${dataTestId}Description`}
          {...props.description}
        >
          {props.description?.content}
        </Text>
      </TextSectionStyled>

      <ElementOrIcon
        customIconStyles={props.styles.arrowIcon}
        dataTestId={`${dataTestId}ArrowIcon`}
        {...props.arrowIcon}
      />
    </NavigationRowStyled>
  );
};

export const NavigationRowStandalone = forwardRef(NavigationRowStandaloneComponent);
