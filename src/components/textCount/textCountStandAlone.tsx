import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text, TextComponentType } from '@/components/text';
import { AriaLiveOptionType } from '@/types/ariaLiveOption';

import { TextCountContainerStyled } from './textCount.styled';
import { ITextCountStandAlone } from './types/textCount';

const stylesProps = (styles, leftWeight, leftColor, rightWeight, rightColor) => {
  const lWeight = leftWeight ?? styles?.letfText.font_weight;
  const lColor = leftColor ?? styles?.letfText.color;
  const rWeight = rightWeight ?? styles?.rightText.font_weight;
  const rColor = rightColor ?? styles?.rightText.color;

  return { lWeight, lColor, rWeight, rColor };
};

const TextCountStandAloneComponent = (
  {
    styles,
    maxLength,
    currentCharacters,
    id,
    screenReaderText,
    textVariant,
    leftWeight,
    rightWeight,
    leftColor,
    rightColor,
    marginTop,
    dataTestId = 'textCount',
  }: ITextCountStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const { lWeight, lColor, rWeight, rColor } = stylesProps(
    styles,
    leftWeight,
    leftColor,
    rightWeight,
    rightColor
  );
  const getAriaLive = (): AriaLiveOptionType | undefined => {
    if (currentCharacters === 0 || currentCharacters >= maxLength) {
      return AriaLiveOptionType.POLITE;
    }
    return undefined;
  };

  return (
    <TextCountContainerStyled
      ref={ref}
      aria-live={getAriaLive()}
      data-testid={dataTestId}
      marginTop={marginTop}
      styles={styles}
    >
      <ScreenReaderOnly key={currentCharacters} id={id}>
        {screenReaderText}
      </ScreenReaderOnly>
      <Text
        aria-hidden={true}
        color={lColor}
        component={TextComponentType.SPAN}
        variant={textVariant ?? styles?.letfText?.font_variant}
        weight={lWeight}
      >
        {currentCharacters}
      </Text>
      <Text
        aria-hidden={true}
        color={rColor}
        component={TextComponentType.SPAN}
        variant={textVariant ?? styles?.rightText?.font_variant}
        weight={rWeight}
      >
        {` / ${maxLength}`}
      </Text>
    </TextCountContainerStyled>
  );
};

/**
 * @description
 * TextCount component is a component that can be used to create a counter of characters.
 * @param {React.PropsWithChildren<ITextCountControlled>} props
 * @returns {JSX.Element}
 */
export const TextCountStandAlone = React.forwardRef(TextCountStandAloneComponent);
