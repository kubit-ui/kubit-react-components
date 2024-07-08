import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStylesV2 } from '@/hooks';

import { TableCaptionStandAlone } from './tableCaptionStandAlone';
import { ITableCaption, TableCaptionPropsStylesType } from './types';

const TableCaptionComponent = (
  { variant, ctv, ...props }: React.PropsWithChildren<ITableCaption>,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  const styles = useStylesV2<TableCaptionPropsStylesType>({
    styleName: STYLES_NAME.TABLE_CAPTION,
    variantName: variant,
    customTokens: ctv,
    isOptional: true,
  });

  return <TableCaptionStandAlone ref={ref} styles={styles} {...props} />;
};

export const TableCaption = React.forwardRef(TableCaptionComponent);
