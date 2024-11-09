import React from 'react';

import { Dot } from '@/components/dot/dot';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks/useId/useId';
import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';

import { POSITIONS } from '../../types/positions/positions';
import { ButtonType } from '../button/types/type';
//components
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { PopoverControlled as Popover } from '../popover/popoverControlled';
import { ScreenReaderOnly } from '../screenReaderOnly/screenReaderOnly';
import {
  BadgeContainerStyled,
  BadgeDotStyled,
  BadgeLabelStyled,
  BadgeStyled,
  SpanContainerIconAndDot,
} from './badge.styled';
import { DotUseStateType, IBadgeStandAlone } from './types/badge';

const BadgeStandAloneComponent = (
  { dataTestId = 'badge', ...props }: IBadgeStandAlone,
  ref: React.ForwardedRef<unknown> | undefined | null
): JSX.Element => {
  const badgeButtonRef = React.useRef(null);
  const [dotWidthHeight, setDotWidthHeight] = React.useState<DotUseStateType | null>(null);
  const id = useId('badget');
  const dotRef = React.useRef<HTMLSpanElement>(null);
  const popoverRef = React.useRef(null);
  const containerRef = React.useRef(null);

  // catch the reference when the popover appears
  const callbackRef = React.useCallback(node => {
    if (node) {
      popoverRef.current = node;
    }
  }, []);

  React.useEffect(() => {
    if (dotRef && dotRef.current) {
      setDotWidthHeight({
        dotWidth: dotRef.current.offsetWidth,
        dotHeight: dotRef.current.offsetHeight,
      });
    }
  }, [props.dot?.size]);

  React.useImperativeHandle(ref, () => ({
    get badge() {
      return containerRef.current;
    },
    get popover() {
      return popoverRef.current;
    },
  }));

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
        aria-controls={`${id}-popover`}
        aria-expanded={props.open}
        aria-label={props['aria-label']}
        data-testid={dataTestId}
        styles={props.styles}
        type={ButtonType.BUTTON}
        onClick={props.onClick}
      >
        <SpanContainerIconAndDot>
          {props.hasDot && props.dot && (
            <BadgeDotStyled
              aria-hidden
              customDotTranslate={getCustomDotTranslate()}
              dotWidthHeight={dotWidthHeight}
            >
              <Dot ref={dotRef} {...props.dot} />
            </BadgeDotStyled>
          )}
          <ElementOrIcon
            color={props.iconStyles?.iconColor}
            customIconStyles={props.sizeStyles.icon}
            {...props.icon}
          />
        </SpanContainerIconAndDot>
        {props.label?.content && (
          <BadgeLabelStyled aria-hidden styles={props.styles}>
            <Text
              color={props.iconStyles?.labelFontColor}
              component={TextComponentType.SPAN}
              customTypography={labelStyles}
              dataTestId={`${dataTestId}-label`}
              {...props.label}
            >
              {props.label.content}
            </Text>
            <ElementOrIcon
              color={props.iconStyles?.labelIconColor}
              customIconStyles={props.styles.labelIcon}
              rotate={props.open ? '180deg' : '0deg'}
              {...props.labelIcon}
            />
          </BadgeLabelStyled>
        )}
        <ScreenReaderOnly ariaLive={AriaLiveOptionType.POLITE}>
          {props.ariaLiveText}
        </ScreenReaderOnly>
      </BadgeStyled>
      {props.popover.variant && props.popover.content && (
        <Popover
          ref={callbackRef}
          align={POSITIONS.BOTTOM_GAP_RIGHT}
          id={`${id}-popover`}
          open={props.open}
          preventCloseOnClickElements={[badgeButtonRef.current]}
          tabIndex={0}
          {...props.popover}
        >
          {props.popover?.content}
        </Popover>
      )}
    </BadgeContainerStyled>
  );
};

export const BadgeStandAlone = React.forwardRef(BadgeStandAloneComponent);
