import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';

import { ROLES } from '../../types/role/role';
import { ButtonType } from '../button/types/type';
import { PaginationButtonControl } from './fragments/paginationButtonControl';
import {
  PaginationContainerStyled,
  PaginationPageContainerStyled,
  PaginationPagesContainerStyled,
} from './pagination.styled';
// interfaces
import { IPaginationButtonControl, IPaginationStandAlone } from './types/pagination';
import { PaginationState } from './types/state';

const PaginationStandAloneComponent = (
  {
    styles,
    stepActive,
    stepsNumber,
    onStepClick,
    paginationLeftButtonControl,
    paginationRightButtonControl,
    leftDisabled,
    rightDisabled,
    dataTestId = 'pagination',
  }: IPaginationStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <PaginationContainerStyled ref={ref} data-testid={dataTestId} styles={styles}>
      <PaginationButtonControl
        disabled={leftDisabled}
        paginationButtonControl={paginationLeftButtonControl as IPaginationButtonControl}
        styles={styles.paginationLeftArrowIcon}
      />
      <PaginationPagesContainerStyled data-testid={`${dataTestId}-steps-content`} styles={styles}>
        {stepsNumber.map((value, index) => {
          const state = stepActive === index ? PaginationState.SELECTED : PaginationState.DEFAULT;
          const isClickable = typeof value === 'number';
          return (
            <PaginationPageContainerStyled
              key={`PaginationContent-${index}`}
              $isClickable={isClickable}
              as={isClickable ? ROLES.BUTTON : undefined}
              state={state}
              styles={styles}
              type={isClickable ? ButtonType.BUTTON : undefined}
              onClick={isClickable ? onStepClick?.(value - 1) : undefined}
            >
              <Text component={TextComponentType.SPAN} customTypography={styles[state]?.page}>
                {value}
              </Text>
            </PaginationPageContainerStyled>
          );
        })}
      </PaginationPagesContainerStyled>
      <PaginationButtonControl
        disabled={rightDisabled}
        paginationButtonControl={paginationRightButtonControl as IPaginationButtonControl}
        styles={styles.paginationRightArrowIcon}
      />
    </PaginationContainerStyled>
  );
};

export const PaginationStandAlone = React.forwardRef(PaginationStandAloneComponent);
