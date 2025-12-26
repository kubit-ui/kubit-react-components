import { forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import { PaginationButtonControl } from './fragments/paginationButtonControl';
import type {
  PaginationButtonControlProps,
  PaginationStandAloneProps,
} from './types/pagination';

export const PaginationStandAlone = forwardRef<
  HTMLDivElement,
  PaginationStandAloneProps
>(
  (
    {
      cssClasses,
      leftDisabled,
      onStepClick,
      paginationLeftButtonControl,
      paginationRightButtonControl,
      rightDisabled,
      stepActive,
      stepsNumber,
      ...props
    },
    ref,
  ) => {
    const dataTestId = props['data-testid'] || 'pagination';
    return (
      <div
        ref={ref}
        className={cssClasses?.pagination}
        data-testid={dataTestId}
      >
        <PaginationButtonControl
          cssClasses={cssClasses}
          disabled={leftDisabled}
          paginationButtonControl={paginationLeftButtonControl}
        />
        <div
          className={cssClasses?.pagescontainer}
          data-testid={`${dataTestId}-steps-content`}
        >
          {stepsNumber.map((value, index) => {
            const state =
              stepActive === index ? STATES.SELECTED : STATES.DEFAULT;
            const isClickable = typeof value === 'number';

            const customAttributes = {
              'data-clickable': isClickable,
              'data-state': state,
            };

            const customProps = pickCustomAttributes(props);

            return (
              <CustomComponent
                key={`PaginationContent-${value}-${index.toString()}`}
                className={cssClasses?.pagecontainer}
                component={isClickable ? 'button' : undefined}
                type={isClickable ? 'button' : undefined}
                onClick={isClickable ? onStepClick?.(value - 1) : undefined}
                {...customProps}
              >
                <Text
                  additionalClasses={{
                    text: cssClasses?.page,
                  }}
                  component="span"
                  customAttributes={customAttributes}
                >
                  {value}
                </Text>
              </CustomComponent>
            );
          })}
        </div>
        <PaginationButtonControl
          cssClasses={cssClasses}
          disabled={rightDisabled}
          paginationButtonControl={
            paginationRightButtonControl as PaginationButtonControlProps
          }
          position="right"
        />
      </div>
    );
  },
);
