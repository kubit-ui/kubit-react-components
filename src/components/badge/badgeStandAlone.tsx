import * as React from 'react';

import { ButtonType } from '@/components/button';
import { Dot } from '@/components/dot';
//components
import { ElementOrIcon } from '@/components/elementOrIcon';
import { PopoverControlled as Popover } from '@/components/popover';
import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Text, TextComponentType } from '@/components/text';
import { useId } from '@/hooks';
import { POSITIONS } from '@/types';
import { AriaLiveOptionType } from '@/types/ariaLiveOption';

import {
  BadgeContainerStyled,
  BadgeDotStyled,
  BadgeLabelStyled,
  BadgeStyled,
  SpanContainerIconAndDot,
} from './badge.styled';
import { DotUseStateType, IBadgeStandAlone } from './types';

const BadgeStandAloneComponent = (
  { ...props }: IBadgeStandAlone,
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
      data-testid={`${props.dataTestId}BadgeContainer`}
      onBlur={props.onBadgeBlur}
    >
      <BadgeStyled
        ref={badgeButtonRef}
        aria-controls={`${id}-popover`}
        aria-expanded={props.open}
        aria-label={props['aria-label']}
        data-testid={`${props.dataTestId}Badge`}
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
              <Dot ref={dotRef} dataTestId={`${props.dataTestId}Dot`} {...props.dot} />
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
              dataTestId={`${props.dataTestId}Label`}
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
        <ScreenReaderOnly
          ariaLive={AriaLiveOptionType.POLITE}
          dataTestId={`${props.dataTestId}ScreenReader`}
        >
          {props.ariaLiveText}
        </ScreenReaderOnly>
      </BadgeStyled>
      {props.popover.variant && props.popover.content && (
        <Popover
          ref={callbackRef}
          align={POSITIONS.BOTTOM_GAP_RIGHT}
          dataTestId={`${props.dataTestId}Popover`}
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
