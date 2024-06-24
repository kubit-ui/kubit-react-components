import * as React from 'react';

import { Button } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { IconHighlighted } from '@/components/iconHighlighted';
import { Text } from '@/components/text';
import { TextComponentType } from '@/components/text/types';
import { AriaLiveOptionType } from '@/types';

// styles
import {
  InfoAssociatedButtonStyled,
  InfoAssociatedTextAndDecorativeStyled,
  InformationAssociatedWrapperStyled,
} from '../input.styled';
import { IInformationAssociated, IInformationAssociatedDecoration } from '../types/input';
import { InputState } from '../types/inputTheme';

export const InformationAssociatedStandAlone = (
  props: IInformationAssociated
): JSX.Element | null => {
  const InfoAssociatedDecoration = (
    props: IInformationAssociatedDecoration
  ): JSX.Element | null => {
    const iconHighlightedVariant =
      props.highlightedInformationAssociatedIcon?.variant ??
      props.styles?.informationAssociatedIconHightlight?.variant;
    const iconHighlightedSize =
      props.highlightedInformationAssociatedIcon?.size ??
      props.styles?.informationAssociatedIconHightlight?.size;

    return props.highlightedInformationAssociatedIcon?.icon &&
      iconHighlightedVariant &&
      iconHighlightedSize ? (
      <IconHighlighted
        backgroundColor={
          props.styles?.informationAssociatedIconHightlightContainer?.background_color
        }
        color={props.styles?.informationAssociatedIconHightlight?.color}
        {...props.highlightedInformationAssociatedIcon}
        size={iconHighlightedSize}
        variant={iconHighlightedVariant}
      />
    ) : (
      <ElementOrIcon
        customIconStyles={props.styles?.informationAssociatedIcon}
        {...props.informationAssociatedIcon}
      />
    );
  };

  if (
    !props.informationAssociatedValue ||
    (props.state !== InputState.FILLED &&
      props.state !== InputState.DISABLED_FILLED_WITH_INFO &&
      props.state !== InputState.ERROR_FILLED_WITH_INFO)
  ) {
    return null;
  }

  return (
    <InformationAssociatedWrapperStyled
      aria-live={AriaLiveOptionType.POLITE}
      data-testid={`${props.dataTestId}InfoAssociated`}
      iconPosition={
        props.informationAssociatedIcon?.position ||
        props.highlightedInformationAssociatedIcon?.position
      }
      styles={props.styles}
    >
      <InfoAssociatedTextAndDecorativeStyled styles={props.styles}>
        <InfoAssociatedDecoration
          highlightedInformationAssociatedIcon={props.highlightedInformationAssociatedIcon}
          informationAssociatedIcon={props.informationAssociatedIcon}
          styles={props.styles}
        />
        <Text
          component={TextComponentType.SPAN}
          customTypography={props.styles?.informationAssociated}
          {...props.informationAssociatedValue}
        >
          {props.informationAssociatedValue.content}
        </Text>
      </InfoAssociatedTextAndDecorativeStyled>
      {props.informationAssociatedButton &&
        (props.styles?.informationAssociatedButton?.size ||
          props.informationAssociatedButton?.size) &&
        (props.styles?.informationAssociatedButton?.variant ||
          props.informationAssociatedButton?.variant) &&
        props.state === InputState.ERROR_FILLED_WITH_INFO && (
          <InfoAssociatedButtonStyled styles={props.styles}>
            <Button
              size={props.styles?.informationAssociatedButton?.size}
              variant={props.styles?.informationAssociatedButton?.variant}
              {...props.informationAssociatedButton}
            >
              {props.informationAssociatedButton.content}
            </Button>
          </InfoAssociatedButtonStyled>
        )}
    </InformationAssociatedWrapperStyled>
  );
};
