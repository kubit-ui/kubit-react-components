import type { AriaAttributes, ComponentType, MouseEventHandler } from 'react';

import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TableCellCssClasses = ComponentSelected<
  ComponentsTypesComponents['TABLE_CELL']
>;

/**
 * Interface for standalone table cell properties.
 * Includes ARIA attributes, data attributes, and optional CSS classes.
 */
export interface TableCellStandAloneProps
  extends
    Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'>,
    DataAttributes {
  cssClasses?: TableCellCssClasses;
  id?: string;
  scope?: string;
  th?: boolean;
  colSpan?: number;
  rowSpan?: number;
  height?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  textAlign?: string;
  justifyContent?: string;
  verticalAlign?: string;
  alignItems?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  role?: string;
  /**
   * @remarks Avoid using boolean values for `sticky`. Prefer specifying 'left' or 'right' to define the sticky side.
   */
  sticky?: boolean | 'left' | 'right';
  hidden?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | ComponentType<any>;
  onClick?: MouseEventHandler<HTMLTableCellElement>;
  onMouseEnter?: MouseEventHandler<HTMLTableCellElement>;
  onMouseLeave?: MouseEventHandler<HTMLTableCellElement>;
}

/**
 * Interface for table cell properties with a variant.
 * Extends the TableCellStandAloneProps interface and adds a variant and additional CSS classes.
 */
export interface TableCellProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<TableCellStandAloneProps, 'cssClasses'> {
  variant?: Variant;
  additionalClasses?: Partial<TableCellCssClasses>;
}
