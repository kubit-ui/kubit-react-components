import * as React from 'react';

import { useActiveBreakpoints } from '@/hooks';

import { List } from './component/list';
import { Table } from './component/table';
import { ITableStandAlone } from './types';

const TableStandAloneComponent = (
  {
    accordionIconCollapsedAriaLabel = 'Expand current last cell',
    accordionIconExpandedAriaLabel = 'Collapse current las cell',
    initialExpanded = false,
    dataTestId = 'tableDataTestId',
    headerVariant = 'PRIMARY',
    formatListInMobile = false,
    formatSideBySideInList = false,
    ...props
  }: ITableStandAlone,
  ref: React.ForwardedRef<HTMLTableElement> | undefined | null
): JSX.Element => {
  const hasSomeExpandedContent = props.values.some(o => {
    return !!Object.getOwnPropertyDescriptor(o, 'expandedContent');
  });

  const { isMobile } = useActiveBreakpoints();
  const isList = isMobile && formatListInMobile;

  return isList ? (
    <List
      {...props}
      accordionIconCollapsedAriaLabel={accordionIconCollapsedAriaLabel}
      accordionIconExpandedAriaLabel={accordionIconExpandedAriaLabel}
      dataTestId={dataTestId}
      formatSideBySideInList={formatSideBySideInList}
      hasSomeExpandedContent={hasSomeExpandedContent}
      initialExpanded={initialExpanded}
    />
  ) : (
    <Table
      {...props}
      ref={ref}
      accordionIconCollapsedAriaLabel={accordionIconCollapsedAriaLabel}
      accordionIconExpandedAriaLabel={accordionIconExpandedAriaLabel}
      dataTestId={dataTestId}
      hasSomeExpandedContent={hasSomeExpandedContent}
      headerVariant={headerVariant}
      initialExpanded={initialExpanded}
    />
  );
};

/**
 * @description
 * Table component is used to display data in a tabular format.
 */

export const TableStandAlone = React.forwardRef(TableStandAloneComponent);
