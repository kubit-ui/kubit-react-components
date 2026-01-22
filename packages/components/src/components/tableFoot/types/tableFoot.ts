import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TableFootCssClasses = ComponentSelected<
  ComponentsTypesComponents['TABLE_FOOT']
>;

export interface TableFootStandAloneProps extends DataAttributes {
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  cssClasses?: TableFootCssClasses;
}

export interface TableFootProps extends TableFootStandAloneProps {
  variant?: string;
  additionalClasses?: Partial<TableFootCssClasses>;
}
