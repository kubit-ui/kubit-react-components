// vendors
import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useElementBoundingClientRect } from '@/hooks/useElementBoundingClientRect/useElementBoundingClientRect';
import { useId } from '@/hooks/useId/useId';
import { POSITIONS } from '@/types/positions/positions';

import { pxToRem } from '../../utils/pxToRem/pxToRem';
import { InputControlled } from '../input/inputControlled';
import { InputContentPosition } from '../input/types/inputTheme';
import { getExtraStyles } from '../input/utils/extraStyles.utils';
import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
// styles
import { AffixStyled } from './inputCurrency.styled';
import { IInputCurrencyStandAlone } from './types/inputCurrency';

export const InputCurrencyStandAloneComponent = (
  props: IInputCurrencyStandAlone,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => {
  const [width, setWidth] = React.useState(0);

  const { measures } = useElementBoundingClientRect({
    ref: ref as React.MutableRefObject<HTMLInputElement>,
  });

  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      const widthWithMargin =
        props.currencyNameContainerPosition === InputContentPosition.OUT ||
        props.styles?.[props.state]?.currencyNameContainerPosition === InputContentPosition.OUT
          ? Number(pxToRem(node.getBoundingClientRect().width)) +
            Number(
              props.styles?.[
                props.state
              ]?.currencyNameContainer?.marginLeftOrRightByIsOutAndPosition?.replace('rem', '')
            )
          : Number(pxToRem(node.getBoundingClientRect().width));
      setWidth(widthWithMargin);
    }
  }, []);

  const uniqueId = useId('inputCurrency');
  const inputId = props.id ?? uniqueId;
  const inputAffixId = `${inputId}Affix`;
  const ariaDescribedBy = !props['aria-describedby']
    ? inputAffixId
    : `${props['aria-describedby']} ${inputAffixId}`;

  const renderAffix = () => (
    <AffixStyled
      ref={measuredRef}
      $isOutPositionAffix={
        props.currencyNameContainerPosition === InputContentPosition.OUT ||
        props.styles?.[props.state]?.currencyNameContainerPosition === InputContentPosition.OUT
      }
      $positionAffix={props.currencyPosition}
      id={ariaDescribedBy}
      styles={props.styles?.[props.state]}
    >
      <ScreenReaderOnly>{props.screenReaderCurrencyName}</ScreenReaderOnly>
      <Text
        aria-hidden={props.screenReaderCurrencyName ? true : false}
        component={TextComponentType.SPAN}
        customTypography={props.styles?.[props.state]?.currencyName}
        {...props.currencyName}
      >
        {props.currencyName.content}
      </Text>
    </AffixStyled>
  );

  // The extra styles are for the input structure atom
  // In this way we do not have to pass references or ids of the elements to get the measurements
  return (
    <InputControlled
      ref={ref}
      aria-describedby={ariaDescribedBy}
      bottomExtraStyles={
        props.styles?.[props.state]?.bottomExtraStyles ??
        getExtraStyles(
          POSITIONS.BOTTOM,
          props.currencyPosition,
          width,
          props.currencyNameContainerPosition === InputContentPosition.OUT ||
            props.styles?.[props.state]?.currencyNameContainerPosition === InputContentPosition.OUT,
          props.helpMessagePosition ?? props.styles?.[props.state]?.helpMessage?.position
        )
      }
      centerExtraStyles={
        props.styles?.[props.state]?.centerExtraStyles ??
        getExtraStyles(
          POSITIONS.CENTER,
          props.currencyPosition,
          width,
          props.currencyNameContainerPosition === InputContentPosition.OUT ||
            props.styles?.[props.state]?.currencyNameContainerPosition === InputContentPosition.OUT
        )
      }
      extraAriaLabelledBy={props.extraAriaLabelledBy}
      id={inputId}
      leftContent={props.currencyPosition === POSITIONS.LEFT ? renderAffix() : undefined}
      leftExtraStyles={
        props.styles?.[props.state]?.leftExtraStyles ??
        getExtraStyles(
          POSITIONS.LEFT,
          props.currencyPosition,
          width,
          props.currencyNameContainerPosition === InputContentPosition.OUT ||
            props.styles?.[props.state]?.currencyNameContainerPosition === InputContentPosition.OUT,
          props.helpMessagePosition ?? props.styles?.[props.state]?.helpMessage?.position
        )
      }
      overrideStyles={props.styles}
      rightContent={props.currencyPosition === POSITIONS.RIGHT ? renderAffix() : undefined}
      rightExtraStyles={
        props.styles?.[props.state]?.rightExtraStyles ??
        getExtraStyles(
          POSITIONS.RIGHT,
          props.currencyPosition,
          width,
          props.currencyNameContainerPosition === InputContentPosition.OUT ||
            props.styles?.[props.state]?.currencyNameContainerPosition === InputContentPosition.OUT,
          props.helpMessagePosition ?? props.styles?.[props.state]?.helpMessage?.position
        )
      }
      topExtraStyles={
        props.styles?.[props.state]?.topExtraStyles ??
        getExtraStyles(
          POSITIONS.TOP,
          props.currencyPosition,
          width,
          props.currencyNameContainerPosition === InputContentPosition.OUT ||
            props.styles?.[props.state]?.currencyNameContainerPosition === InputContentPosition.OUT,
          props.helpMessagePosition ?? props.styles?.[props.state]?.helpMessage?.position,
          measures?.width
        )
      }
      truncate={true}
      variant={props.inputVariant ?? props.styles?.[props.state]?.inputVariant}
      {...props}
    />
  );
};

export const InputCurrencyStandAlone = React.forwardRef(InputCurrencyStandAloneComponent);
