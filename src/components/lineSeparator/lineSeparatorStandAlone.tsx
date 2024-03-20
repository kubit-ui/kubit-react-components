import * as React from 'react';

import { Text, TextComponentType } from '@/components/text';

import {
  LineSeparatorRootWrapperStyled,
  LineSeparatorTextWrapperStyled,
} from './lineSeparator.styled';
import { ILineSeparatorStandAlone } from './types';

const LineSeparatorStandAloneComponent = (
  {
    labelStyles,
    lineStyles,
    label,
    externalNodeTag,
    internalNodeTag,
    dataTestId,
  }: ILineSeparatorStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return (
    <LineSeparatorRootWrapperStyled
      ref={ref}
      as={externalNodeTag}
      data-testid={dataTestId}
      styles={lineStyles}
    >
      {label?.content && (
        <LineSeparatorTextWrapperStyled as={internalNodeTag} styles={labelStyles}>
          <Text
            align={labelStyles?.label?.text_align}
            color={labelStyles?.label?.color}
            component={TextComponentType.SPAN}
            variant={labelStyles?.label?.font_variant}
            weight={labelStyles?.label?.font_weight}
            {...label}
          >
            {label.content}
          </Text>
        </LineSeparatorTextWrapperStyled>
      )}
    </LineSeparatorRootWrapperStyled>
  );
};

/**
 * @description
 * LineSeparator component to separate content
 */
export const LineSeparatorStandAlone = React.forwardRef(LineSeparatorStandAloneComponent);
