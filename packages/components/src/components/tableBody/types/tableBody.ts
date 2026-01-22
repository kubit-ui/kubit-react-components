import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TableBodyCssClasses = ComponentSelected<
  ComponentsTypesComponents['TABLE_BODY']
>;

export interface TableBodyStandAloneProps extends DataAttributes {
  cssClasses?: TableBodyCssClasses;
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
}

export interface TableBodyProps extends TableBodyStandAloneProps {
  variant?: string;
  additionalClasses?: Partial<TableBodyCssClasses>;
}
