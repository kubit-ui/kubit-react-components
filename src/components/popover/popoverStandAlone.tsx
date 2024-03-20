import * as React from 'react';

import { CssAnimation } from '@/components/cssAnimation';
import { Overlay } from '@/components/overlay';
import { pickAriaProps } from '@/utils/aria/aria';

import { PopoverAnimationStyled, PopoverStyled } from './popover.styled';
import { IPopoverStandAlone } from './types';

const PopoverStandAloneComponent = (
  { children, animationExecution, animationConfig, dataTestId, ...props }: IPopoverStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element | null => {
  const ariaProps = pickAriaProps(props);
  if (props.open) {
    return (
      <div ref={ref}>
        {props.hasBackDrop && <Overlay variant={props.styles[props.device]?.overlay} />}
        <PopoverAnimationStyled
          ref={props.forwardedRef}
          as={animationConfig ? CssAnimation : 'div'}
          data-testid={dataTestId}
          exec={animationExecution}
          id={props.id}
          options={animationConfig?.animationOptions}
          variant={animationConfig?.animation}
        >
          <PopoverStyled
            {...ariaProps}
            align={props.align}
            as={props.component}
            autoWidth={props?.autoWidth}
            bottom={props?.bottom}
            device={props.device}
            extraAlignGap={props.extraAlignGap}
            extraWidth={props.extraWidth || props.styles?.[props.device]?.extraWidth}
            extraWidthSide={props.extraWidthSide || props.styles?.[props.device]?.extraWidthSide}
            left={props?.left}
            open={props.open}
            positionVariant={props.positionVariant}
            right={props?.right}
            role={props.role}
            tabIndex={props.tabIndex}
            top={props?.top}
            onKeyDown={props.onKeyDown}
            {...props.styles}
          >
            {children}
          </PopoverStyled>
        </PopoverAnimationStyled>
      </div>
    );
  }
  return <PopoverAnimationStyled id={props.id} />;
};

export const PopoverStandAlone = React.forwardRef(PopoverStandAloneComponent);
