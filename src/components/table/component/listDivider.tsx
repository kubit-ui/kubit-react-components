import React from 'react';

import { Divider } from '../../divider/divider';
import { LineSeparator } from '../../lineSeparator/lineSeparator';
import { TableDividerType } from '../types/table';
import { TableDividerStylesType } from '../types/tableTheme';

export interface IListDivider {
  divider: null | TableDividerType | unknown;
  dividerStyles?: TableDividerStylesType;
}

/**
 * @description
 * ListDivider component is used to display a divider between lists.
 * It can be a string or a Divider component.
 * If it is a string, it will be rendered as a LineSeparator component.
 * If it is a Divider component, it will be rendered as a Divider component.
 * If it is null, it will not be rendered.
 * @example
 * <ListDivider dividerValue="test" />
 * <ListDivider dividerValue={<Divider variant="dashed" />} />
 */
export const ListDivider = (props: IListDivider): JSX.Element | null => {
  if (!props.divider) {
    return null;
  }
  if (typeof props.divider === 'string') {
    return (
      <LineSeparator
        label={{ content: props.divider as string }}
        labelVariant={props.dividerStyles?.lineSeparatorLabelVariant}
        lineVariant={props.dividerStyles?.lineSeparatorLineVariant}
      />
    );
  }
  const dividerVariant =
    (props.divider as TableDividerType).variant ?? props.dividerStyles?.dividerVariant;
  if (!dividerVariant) {
    return null;
  }
  return <Divider {...(props.divider as TableDividerType)} variant={dividerVariant} />;
};
