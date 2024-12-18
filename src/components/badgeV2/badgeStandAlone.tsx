import React from 'react';

import { Dot } from '@/components/dot/dot';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';

import { pickAriaProps } from '../../utils/aria/aria';
import { ButtonType } from '../button/types/type';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
import {
  BadgeContainerStyled,
  BadgeDotStyled,
  BadgeLabelStyled,
  BadgeStyled,
  SpanContainerIconAndDot,
} from './badge.styled';
import { IBadgeStandAlone } from './types/badge';

const BadgeStandAloneComponent = (
  { dataTestId = 'badge', ...props }: IBadgeStandAlone,
  ref: React.ForwardedRef<unknown> | undefined | null
): JSX.Element => {
  const badgeButtonRef = React.useRef(null);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const ariaProps = pickAriaProps(props);

  React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement, []);

  const getCustomDotTranslate = () => {
    if (props.customDotTranslate) {
      return props.customDotTranslate;
    }
    if (props.sizeStyles.customDotNumberTranslate && props.dot?.number !== undefined) {
      return props.sizeStyles.customDotNumberTranslate;
    }
    return props.sizeStyles.customDotTranslate;
  };

  const labelStyles = { ...props.styles.label, ...props.sizeStyles.label };

  return (
    <BadgeContainerStyled
      ref={containerRef}
      data-testid={`${dataTestId}-container`}
      onBlur={props.onBadgeBlur}
    >
      <BadgeStyled
        ref={badgeButtonRef}
        data-testid={dataTestId}
        role={props.role}
        styles={props.styles}
        type={ButtonType.BUTTON}
        onClick={props.onClick}
        {...ariaProps}
      >
        <SpanContainerIconAndDot>
          {props.hasDot && props.dot && (
            <BadgeDotStyled aria-hidden customDotTranslate={getCustomDotTranslate()}>
              <Dot {...props.dot} />
            </BadgeDotStyled>
          )}
          <ElementOrIcon
            color={props.styles?.icon?.color}
            customIconStyles={props.sizeStyles.icon}
            {...props.icon}
          />
        </SpanContainerIconAndDot>
        {props.label?.content && (
          <BadgeLabelStyled aria-hidden styles={props.styles}>
            <Text
              color={props.styles?.label?.color}
              component={TextComponentType.SPAN}
              customTypography={labelStyles}
              {...props.label}
            >
              {props.label.content}
            </Text>
            <ElementOrIcon
              color={props.styles?.labelIcon?.color}
              customIconStyles={props.styles.labelIcon}
              rotate={props.active ? '180deg' : '0deg'}
              {...props.labelIcon}
            />
          </BadgeLabelStyled>
        )}
        <ScreenReaderOnly ariaLive={AriaLiveOptionType.POLITE}>
          {props.ariaLiveText}
        </ScreenReaderOnly>
      </BadgeStyled>
    </BadgeContainerStyled>
  );
};

export const BadgeStandAlone = React.forwardRef(BadgeStandAloneComponent);
