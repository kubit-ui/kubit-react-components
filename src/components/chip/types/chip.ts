import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ChipStateType } from './state';

type ChipCssClasses = ComponentSelected<ComponentsTypesComponents['CHIP']>;

/**
 * Interface for the standalone chip component.
 * Includes optional icons, labels, error messages, and CSS classes.
 */
export interface ChipStandAloneProps extends DataAttributes {
  label?: CommonTextProps;
  closeIcon?: CommonIconProps;
  leftIcon?: CommonIconProps;
  errorIcon?: CommonIconProps;
  range?: {
    label: string;
    key?: string;
  }[];
  rangeIcon?: ElementOrIconProps;
  errorMessage?: CommonTextProps;
  rangeSeparator?: CommonTextProps;
  state: ChipStateType;
  cssClasses?: ChipCssClasses;
}

/**
 * Interface for the controlled chip component.
 * Extends the ChipStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the chip.
 */
export interface ChipProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<ChipStandAloneProps, 'state'> {
  variant?: Variant;
  state?: ChipStateType;
  additionalClasses?: Partial<ChipCssClasses>;
}
