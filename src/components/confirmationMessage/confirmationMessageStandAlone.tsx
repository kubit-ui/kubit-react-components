import * as React from 'react';

import { ContentDirectionType, Footer } from '@/components/footer';
import { Text } from '@/components/text';
import { TextComponentType } from '@/components/text/types';
import { buildPropsDecorativeElement } from '@/utils';

import { DecorativeElement } from '../decorativeElement/decorativeElementStandAlone';
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
  ConfirmationMessagePropsStylesType,
  IConfirmationMessageStandAlone,
} from './types';

const alignValue: AlignTypeConfirmationMessage = {
  center: 'center',
  right: 'flex-end',
  left: 'flex-start',
};

const ConfirmationMessageStandAloneComponent = (
  { align = ALIGN_TYPE.CENTER, ...props }: IConfirmationMessageStandAlone,
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
            dataTestId={`${props.dataTestId}Description`}
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
    <ConfirmationMessageStyled ref={ref} styles={props.stylesState}>
      <TitleAndDescriptionStyled
        align={alignValue[align.toLocaleLowerCase()]}
        data-testid={`${props.dataTestId}TitleAndDescriptionContainer`}
        styles={props.stylesState}
      >
        {props.title && (
          <TitleTextStyled
            align={alignValue[align.toLocaleLowerCase()]}
            data-testid={`${props.dataTestId}TitleContainer`}
            styles={props.stylesState}
          >
            {props.decorativeElement?.element && (
              <DecorativeElement
                {...props.decorativeElement}
                dataTestId={`${props.dataTestId}DecorativeElement`}
                element={buildPropsDecorativeElement<
                  ConfirmationMessagePropsStylesType | undefined
                >(props.decorativeElement?.element, props.stylesState)}
              />
            )}
            <Text
              align={align}
              component={props.title?.component || TextComponentType.H2}
              customTypography={props.stylesState?.title}
              dataTestId={`${props.dataTestId}Title`}
              {...props.title}
            >
              {props.title.content}
            </Text>
          </TitleTextStyled>
        )}
        <DescriptionTextStyled
          align={alignValue[align.toLocaleLowerCase()]}
          data-testid={`${props.dataTestId}DescriptionContainer`}
          styles={props.stylesState}
        >
          {buildDescription()}
          <Text
            component={TextComponentType.PARAGRAPH}
            customTypography={props.stylesState?.secondaryDescription}
            dataTestId={`${props.dataTestId}SecondaryDescription`}
            {...props.secondaryDescription}
          >
            {props.secondaryDescription?.content}
          </Text>
        </DescriptionTextStyled>
      </TitleAndDescriptionStyled>
      {props.content && (
        <ContentContainerStyled
          align={alignValue[align.toLocaleLowerCase()]}
          data-testid={`${props.dataTestId}Content`}
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
            dataTestId={`${props.dataTestId}Navbar`}
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
