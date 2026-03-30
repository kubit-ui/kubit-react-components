import type { ReactNode } from 'react';

import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';
import type { StateType } from '@/lib/types/states/states';

type CardCssClasses = ComponentSelected<ComponentsTypesComponents['CARD']>;

/**
 * Interface for the standalone card component.
 * It includes optional custom CSS classes, header, content, footer sections and interactive states.
 */
export interface CardStandAloneProps extends DataAttributes {
  cssClasses?: CardCssClasses;
  header?: CommonTextProps | ReactNode;
  content?: CommonTextProps | ReactNode;
  footer?: CommonTextProps | ReactNode;
  state?: StateType;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * Interface for the card component with a variant.
 * Extends the ICardStandAlone interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the card.
 */
export interface CardProps<Variant extends string | unknown> extends Omit<
  CardStandAloneProps,
  'cssClasses'
> {
  variant?: Variant;
  additionalClasses?: Partial<CardCssClasses>;
}
