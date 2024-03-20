import * as React from 'react';

import { Divider } from '@/components/divider';
import { LineSeparator } from '@/components/lineSeparator';

import { DividerInternalWrapper } from '../table.styled';
import { TableDividerStylesType, TableDividerType } from '../types';

export interface ITableDivider {
  divider: null | TableDividerType | unknown;
  styles?: TableDividerStylesType;
}

/**
 * @description
 * TableDivider component is used to display a divider between table rows.
 * It can be a string or a Divider component.
 * If it is a string, it will be rendered as a LineSeparator component.
 * If it is a Divider component, it will be rendered as a Divider component.
 * If it is null, it will not be rendered.
 * @example
 * <TableDivider dividerValue="test" />
 * <TableDivider dividerValue={<Divider variant="dashed" />} />
 */
export const TableDivider = ({ divider, styles }: ITableDivider): JSX.Element | null => {
  if (!divider) {
    return null;
  }
  if (typeof divider === 'string') {
    return (
      <LineSeparator
        externalNodeTag="td"
        label={{ content: divider as string }}
        labelVariant={styles?.lineSeparatorLabelVariant}
        lineVariant={styles?.lineSeparatorLineVariant}
      />
    );
  }
  const dividerVariant = (divider as TableDividerType).variant ?? styles?.dividerVariant;
  if (!dividerVariant) {
    return null;
  }
  return (
    <DividerInternalWrapper>
      <Divider {...(divider as TableDividerType)} variant={dividerVariant} />
    </DividerInternalWrapper>
  );
};
