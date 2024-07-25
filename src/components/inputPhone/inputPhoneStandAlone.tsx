import React, { ForwardedRef, forwardRef, useCallback, useState } from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon';
import { Text } from '@/components/text';
import { useId } from '@/hooks';
import { useElementBoundingClientRect } from '@/hooks/useElementBoundingClientRect/useElementBoundingClientRect';
import { POSITIONS } from '@/types';
import { pxToRem } from '@/utils';

import { IconHighlighted, IconHighlightedSizeType } from '../iconHighlighted';
import { InputControlled as Input } from '../input';
import { InputContentPosition } from '../input/types';
import { getExtraStyles } from '../input/utils';
import { AffixIconWrapperStyled, AffixStyled } from './inputPhone.styled';
import { IInputPhoneStandAlone } from './types';

export const InputPhoneStandAloneComponent = (
  props: IInputPhoneStandAlone,
  ref: ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => {
  const [width, setWidth] = useState(0);

  const { measures } = useElementBoundingClientRect({
    ref: ref as React.MutableRefObject<HTMLInputElement>,
  });

  const measuredRef = useCallback(node => {
    if (node !== null) {
      const widthWithMargin =
        props.styles?.[props.state]?.affixContainerPosition === InputContentPosition.OUT
          ? Number(pxToRem(node.getBoundingClientRect().width)) +
            Number(props.styles?.[props.state]?.affixContainer?.margin_right?.replace('rem', ''))
          : Number(pxToRem(node.getBoundingClientRect().width));
      setWidth(widthWithMargin);
    }
  }, []);

  const uniqueId = useId('inputPhone');
  const inputId = props.id ?? uniqueId;
  const inputAffixId = `${inputId}Affix`;
  const extraAriaLabelledBy = props.extraAriaLabelledBy
    ? `${inputAffixId}-${props.extraAriaLabelledBy}`
    : inputAffixId;

  const flagVariant =
    props.flag?.variant ?? props.styles?.[props.state]?.affixIconHighlighted?.variant;
  const flagSize = props.flag?.size ?? props.styles?.[props.state]?.affixIconHighlighted?.size;

  const renderAffix = () => (
    <AffixStyled ref={measuredRef} id={extraAriaLabelledBy} styles={props.styles?.[props.state]}>
      {props.prefixNode ? (
        props.prefixNode
      ) : (
        <>
          <AffixIconWrapperStyled styles={props.styles?.[props.state]}>
            {props.flag?.type && flagVariant && flagSize ? (
              <IconHighlighted
                backgroundColor={props.styles?.[props.state]?.affixIconHighlighted?.backgroundColor}
                size={
                  props.styles?.[props.state]?.affixIconHighlighted?.size as IconHighlightedSizeType
                }
                variant={props.styles?.[props.state]?.affixIconHighlighted?.variant}
                {...props.flag}
              />
            ) : (
              <ElementOrIcon
                height={props.styles?.[props.state]?.affixIcon?.height}
                width={props.styles?.[props.state]?.affixIcon?.width}
                {...props.flag}
              />
            )}
          </AffixIconWrapperStyled>
          <Text
            customTypography={props.styles?.[props.state]?.affix}
            dataTestId={`${props.dataTestId}Suffix`}
            {...props.prefix}
          >
            {props.prefix?.content}
          </Text>
        </>
      )}
    </AffixStyled>
  );

  // The extra styles are for the input structure atom
  // In this way we do not have to pass references or ids of the elements to get the measurements
  return (
    <div data-testid={`${props.dataTestId}InputPhone`}>
      <Input
        {...props}
        ref={ref}
        bottomExtraStyles={
          props.styles?.[props.state]?.bottomExtraStyles ??
          getExtraStyles(
            POSITIONS.BOTTOM,
            POSITIONS.LEFT,
            width,
            props.styles?.[props.state]?.affixContainerPosition === InputContentPosition.OUT,
            props.styles?.[props.state]?.helpMessage?.position
          )
        }
        centerExtraStyles={
          props.styles?.[props.state]?.centerExtraStyles ??
          getExtraStyles(
            POSITIONS.CENTER,
            POSITIONS.LEFT,
            width,
            props.styles?.[props.state]?.affixContainerPosition === InputContentPosition.OUT,
            props.styles?.[props.state]?.helpMessage?.position
          )
        }
        extraAriaLabelledBy={extraAriaLabelledBy}
        id={inputId}
        leftContent={renderAffix()}
        leftExtraStyles={
          props.styles?.[props.state]?.leftExtraStyles ??
          getExtraStyles(
            POSITIONS.LEFT,
            POSITIONS.LEFT,
            width,
            props.styles?.[props.state]?.affixContainerPosition === InputContentPosition.OUT,
            props.styles?.[props.state]?.helpMessage?.position
          )
        }
        overrideStyles={props.styles}
        topExtraStyles={
          props.styles?.[props.state]?.topExtraStyles ??
          getExtraStyles(
            POSITIONS.TOP,
            POSITIONS.LEFT,
            width,
            props.styles?.[props.state]?.affixContainerPosition === InputContentPosition.OUT,
            props.styles?.[props.state]?.helpMessage?.position,
            measures?.width
          )
        }
        variant={props.inputVariant ?? props.styles?.[props.state]?.inputVariant}
      />
    </div>
  );
};

export const InputPhoneStandAlone = forwardRef(InputPhoneStandAloneComponent);
