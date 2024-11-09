import React from 'react';

import { Button } from '@/components/button/button';
import { Text } from '@/components/text/text';
import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import { IconHighlighted } from '../../iconHighlighted/iconHighlighted';
import { TextComponentType } from '../../text/types/component';
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
  const isInformationAssociatedVisible =
    !!props.informationAssociatedValue &&
    (props.state === InputState.FILLED ||
      props.state === InputState.ERROR_FILLED_WITH_INFO ||
      props.state === InputState.DISABLED_FILLED_WITH_INFO);

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

  return (
    <>
      {props.informationAssociatedValue && (
        <InformationAssociatedWrapperStyled
          aria-live={AriaLiveOptionType.POLITE}
          data-testid={`${props.dataTestId}-information-associated`}
          iconPosition={
            props.informationAssociatedIcon?.position ||
            props.highlightedInformationAssociatedIcon?.position
          }
          styles={props.styles}
        >
          {isInformationAssociatedVisible && (
            <>
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
                  {props.informationAssociatedValue?.content}
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
            </>
          )}
        </InformationAssociatedWrapperStyled>
      )}
    </>
  );
};
