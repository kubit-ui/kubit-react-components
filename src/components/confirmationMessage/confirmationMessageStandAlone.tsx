/* eslint-disable complexity */
import React from 'react';

import { Text } from '@/components/text/text';

import { buildPropsDecorativeElement } from '../../utils/buildPropsDecorativeElement/buildPropsDecorativeElement';
import { DecorativeElement } from '../decorativeElement/decorativeElementStandAlone';
import { Footer } from '../footer/footer';
import { ContentDirectionType } from '../footer/types/direction';
import { TextComponentType } from '../text/types/component';
import {
  ConfirmationMessageStyled,
  ContentContainerStyled,
  DescriptionTextStyled,
  FooterStyled,
  FooterWrapperStyled,
  TitleAndDescriptionStyled,
  TitleTextStyled,
} from './confirmationMessage.styled';
import {
  ALIGN_TYPE,
  AlignTypeConfirmationMessage,
  IConfirmationMessageStandAlone,
} from './types/confirmationMessage';
import { ConfirmationMessagePropsStylesType } from './types/confirmationMessageTheme';

const alignValue: AlignTypeConfirmationMessage = {
  center: 'center',
  right: 'flex-end',
  left: 'flex-start',
};

const ConfirmationMessageStandAloneComponent = (
  {
    align = ALIGN_TYPE.CENTER,
    dataTestId = 'confirmation-message',
    ...props
  }: IConfirmationMessageStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const footerVariant = props.stylesState?.footer?.variant || props.footer?.variant;

  const buildDescription = (): React.ReactNode => {
    const isTextContent = typeof props.description.content === 'string';
    return (
      <>
        {isTextContent ? (
          <Text
            component={TextComponentType.PARAGRAPH}
            customTypography={props.stylesState?.description}
            {...props.description}
          >
            {props.description.content}
          </Text>
        ) : (
          props.description.content
        )}
      </>
    );
  };

  return (
    <ConfirmationMessageStyled ref={ref} data-testid={dataTestId} styles={props.stylesState}>
      <TitleAndDescriptionStyled
        align={alignValue[align.toLocaleLowerCase()]}
        data-testid={`${dataTestId}-title-and-description-container`}
        styles={props.stylesState}
      >
        {props.title && (
          <TitleTextStyled
            align={alignValue[align.toLocaleLowerCase()]}
            data-testid={`${dataTestId}-title-container`}
            styles={props.stylesState}
          >
            {props.decorativeElement?.element && (
              <DecorativeElement
                {...props.decorativeElement}
                element={buildPropsDecorativeElement<
                  ConfirmationMessagePropsStylesType | undefined
                >(props.decorativeElement?.element, props.stylesState)}
              />
            )}
            <Text
              align={align}
              component={props.title?.component || TextComponentType.H2}
              customTypography={props.stylesState?.title}
              {...props.title}
            >
              {props.title.content}
            </Text>
          </TitleTextStyled>
        )}
        <DescriptionTextStyled
          align={alignValue[align.toLocaleLowerCase()]}
          data-testid={`${dataTestId}-description-container`}
          styles={props.stylesState}
        >
          {buildDescription()}
          <Text
            component={TextComponentType.PARAGRAPH}
            customTypography={props.stylesState?.secondaryDescription}
            {...props.secondaryDescription}
          >
            {props.secondaryDescription?.content}
          </Text>
        </DescriptionTextStyled>
      </TitleAndDescriptionStyled>
      {props.content && (
        <ContentContainerStyled
          align={alignValue[align.toLocaleLowerCase()]}
          data-testid={`${dataTestId}-content`}
          styles={props.stylesState}
        >
          {props.content}
        </ContentContainerStyled>
      )}
      {props.footer?.content && footerVariant && (
        <FooterWrapperStyled align={alignValue[align.toLocaleLowerCase()]}>
          <FooterStyled
            as={Footer as unknown as React.ElementType}
            contentDirection={
              alignValue[align.toLocaleLowerCase()] === ALIGN_TYPE.CENTER
                ? ContentDirectionType.VERTICAL
                : ContentDirectionType.HORIZONTAL
            }
            customFooterStyles={props.stylesState}
            dataTestId={`${dataTestId}-navbar`}
            forceVertical={alignValue[align.toLocaleLowerCase()] === ALIGN_TYPE.CENTER}
            variant={footerVariant}
            {...props.footer}
          >
            {props.footer.content}
          </FooterStyled>
        </FooterWrapperStyled>
      )}
    </ConfirmationMessageStyled>
  );
};

export const ConfirmationMessageStandAlone = React.forwardRef(
  ConfirmationMessageStandAloneComponent
);
