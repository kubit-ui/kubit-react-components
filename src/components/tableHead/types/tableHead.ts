import type { ComponentType } from 'react';

import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TableHeadCssClasses = ComponentSelected<
  ComponentsTypesComponents['TABLE_HEAD']
>;

export interface TableHeadStandAloneProps extends DataAttributes {
  cssClasses?: TableHeadCssClasses;
  id?: string;
  sticky?: boolean;
  hidden?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | ComponentType<any>;
}

export interface TableHeadProps extends TableHeadStandAloneProps {
  variant?: string;
  additionalClasses?: Partial<TableHeadCssClasses>;
}
