import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { DataTableStandAlone } from './dataTableStandAlone';
import {
  useDataTableHasScroll,
  useDataTableShadow,
  useDataTableStickyDividers,
  useDataTableStickyLeftColumns,
  useDataTableStickyRightColumns,
} from './hooks';
import { DataTablePropsStylesType, IDataTable } from './types';

const DataTableComponent = (
  { variant, ctv, ...props }: IDataTable,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const styles = useStylesV2<DataTablePropsStylesType>({
    styleName: STYLES_NAME.DATA_TABLE,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  const innerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement, []);

  // Indicates if the data-table has scroll in order to add accesibility aria props
  const { hasScroll } = useDataTableHasScroll({ ref: innerRef });
  // Set column sticky right if data table has horizontal scroll
  useDataTableStickyRightColumns({ ref: innerRef });
  // Set column sticky left if data table has horizontal scroll
  useDataTableStickyLeftColumns({ ref: innerRef });
  // Set dividers sticky position and width if data table has horizontal scroll
  useDataTableStickyDividers({ ref: innerRef });
  // Set shadow when scrolling
  useDataTableShadow({
    ref: innerRef,
    headBoxShadow: styles?.headBoxShadow,
    leftBoxShadow: styles?.leftBoxShadow,
    rightBoxShadow: styles?.rightBoxShadow,
  });

  return <DataTableStandAlone ref={innerRef} hasScroll={hasScroll} styles={styles} {...props} />;
};

export const DataTable = React.forwardRef(DataTableComponent);
