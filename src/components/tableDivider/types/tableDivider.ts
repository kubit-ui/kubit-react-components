import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TableDividerCssClasses = ComponentSelected<
  ComponentsTypesComponents['TABLE_DIVIDER']
>;

export interface TableDividerStandAloneProps extends DataAttributes {
  cssClasses?: TableDividerCssClasses;
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
}

export interface TableDividerProps extends TableDividerStandAloneProps {
  variant?: string;
  additionalClasses?: Partial<TableDividerCssClasses>;
}
