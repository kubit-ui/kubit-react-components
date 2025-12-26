import type {
  ComponentType,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';

import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TableRowCssClasses = ComponentSelected<
  ComponentsTypesComponents['TABLE_ROW']
>;

export interface TableRowStandAloneProps extends DataAttributes {
  cssClasses?: TableRowCssClasses;
  id?: string;
  active?: boolean;
  hoverable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | ComponentType<any>;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTableRowElement>;
  onMouseEnter?: MouseEventHandler<HTMLTableRowElement>;
  onMouseLeave?: MouseEventHandler<HTMLTableRowElement>;
}

export interface TableRowProps extends TableRowStandAloneProps {
  variant?: string;
  additionalClasses?: Partial<TableRowCssClasses>;
}
