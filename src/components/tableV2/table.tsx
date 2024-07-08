import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { useTableHasScroll, useTableShadow, useTableStickyColumns } from './hooks';
import { TableStandAlone } from './tableStandAlone';
import { ITableV2, TablePropsStylesTypeV2 } from './types';

const TableComponent = (
  {
    variant,
    ctv,
    autoRightStickyCalc = true,
    disableShadowEffects,
    ...props
  }: React.PropsWithChildren<ITableV2>,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const styles = useStylesV2<TablePropsStylesTypeV2>({
    styleName: STYLES_NAME.TABLE_V2,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  const innerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement, []);

  // Indicates if table has scroll in order to add accesibility aria props
  const { hasScroll } = useTableHasScroll({ ref: innerRef, disabled: props.hasScrollDisabled });
  // Set column sticky if table has horizontal scroll
  useTableStickyColumns({ ref: innerRef, disabled: !autoRightStickyCalc });
  // Set shadow when scrolling
  useTableShadow({
    ref: innerRef,
    headBoxShadow: styles?.headBoxShadow,
    leftBoxShadow: styles?.leftBoxShadow,
    rightBoxShadow: styles?.rightBoxShadow,
    disabled: disableShadowEffects,
  });

  return <TableStandAlone ref={innerRef} hasScroll={hasScroll} styles={styles} {...props} />;
};

export const Table = React.forwardRef(TableComponent);
