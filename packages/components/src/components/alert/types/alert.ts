import type { AriaAttributes } from 'react';

import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type AlertCssClasses = ComponentSelected<ComponentsTypesComponents['ALERT']>;

/**
 * Interface for the standalone Alert component.
 * A simplified component that displays alert messages. Always visible.
 */
export interface AlertStandAloneProps extends DataAttributes {
  content: CommonTextProps;
  role?: React.AriaRole;
  id?: string;
  ariaLive?: AriaAttributes['aria-live'];
  cssClasses?: AlertCssClasses;
}

/**
 * Interface for the Alert component.
 * Extends the AlertStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Alert.
 */
export interface AlertProps<
  Variant = undefined extends string ? unknown : string,
> extends AlertStandAloneProps {
  variant?: Variant;
  additionalClasses?: Partial<AlertCssClasses>;
}
