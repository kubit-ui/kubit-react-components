import './styles/index.css';

import { forwardRef } from 'react';

import { CustomComponent } from '@/lib/components/customComponent/customComponent';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { IPopoverStandAlone } from './types/popover';
import { getArrowBorderStyles } from './utils/styling.utils';

const PopoverStandAloneComponent = (
  {
    anchorElement,
    arrowStyles,
    children,
    component = 'div',
    cssClasses,
    disableAnimations,
    id,
    isClosing,
    isVisible,
    overlay,
    placement,
    popoverContainerRef,
    zIndex = 'auto',
    ...props
  }: IPopoverStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null,
): JSX.Element | null => {
  const customAttributes = pickCustomAttributes(props, true) as Record<
    string,
    string
  >;
  const { ['data-testid']: dataTestId = 'popover', ...restCustomAttributes } =
    customAttributes;

  return (
    <div ref={ref} data-testid={dataTestId} id={id}>
      {isVisible && (
        <>
          {overlay}
          <CustomComponent
            ref={popoverContainerRef}
            {...restCustomAttributes}
            {...props}
            className={classNames(cssClasses?.popover)}
            component={component}
            data-kbt-anchor-element={anchorElement}
            data-kbt-closing={isClosing}
            data-kbt-disable-animations={disableAnimations}
            data-kbt-has-arrow={!!arrowStyles}
            data-kbt-id="popover"
            data-kbt-placement={placement}
            style={{ zIndex: zIndex || 'auto' }}
          >
            {!!arrowStyles && (
              <div
                className={classNames(cssClasses?.arrow)}
                data-kbt-arrow-border={!!arrowStyles}
                data-kbt-id="popover-arrow"
                data-kbt-placement={placement}
                style={{
                  ...(placement
                    ? getArrowBorderStyles(placement, arrowStyles)
                    : {}),
                  zIndex: typeof zIndex === 'number' ? zIndex + 1 : zIndex,
                }}
              />
            )}
            {children}
          </CustomComponent>
        </>
      )}
    </div>
  );
};

export const PopoverStandAlone = forwardRef(PopoverStandAloneComponent);
