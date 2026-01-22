import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TableCaptionCssClasses = ComponentSelected<
  ComponentsTypesComponents['TABLE_CAPTION']
>;

export interface TableCaptionStandAloneProps extends DataAttributes {
  cssClasses?: TableCaptionCssClasses;
  id?: string;
  hidden?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
}

export interface TableCaptionProps extends TableCaptionStandAloneProps {
  variant?: string;
  additionalClasses?: Partial<TableCaptionCssClasses>;
}
