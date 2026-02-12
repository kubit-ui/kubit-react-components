/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CSSProperties } from 'react';

import type { GenericLinkType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { TextComponentType } from './component';

export type TextCssClasses = ComponentSelected<
  ComponentsTypesComponents['TEXT']
>;

/**
 * Represents the ARIA attributes for the Text component.
 */
type TextAriaProps = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-hidden'
  | 'aria-level'
  | 'aria-live'
>;

/**
 * Interface for the standalone Text component.
 * Includes ARIA attributes, styling options, event handlers, and additional attributes.
 */
export interface TextStandAloneProps extends TextAriaProps, DataAttributes {
  children: React.ReactNode;
  component?: TextComponentType | GenericLinkType;
  htmlFor?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  role?: React.AriaRole;
  color?: string;
  wordBreak?: CSSProperties['wordBreak'];
  wordWrap?: CSSProperties['wordWrap'];
  textWrap?: CSSProperties['textWrap'];
  filter?: string;
  display?: CSSProperties['display'];
  decoration?: CSSProperties['textDecoration'];
  cursor?: string;
  weight?: number;
  target?: string;
  textSizeAdjust?: CSSProperties['textSizeAdjust'];
  truncate?: boolean;
  maxTruncatedLines?: number;
  align?: CSSProperties['textAlign'];
  transform?: CSSProperties['textTransform'];
  url?: string;
  draggable?: boolean;
  cssClasses?: TextCssClasses;
  disabled?: boolean;
  customAttributes?: Record<string, string | boolean | any>;
}

/**
 * Interface for the Text component with a variant.
 * Extends the TextStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Text.
 */
export interface TextProps<
  Variant = undefined extends string ? unknown : string,
> extends TextStandAloneProps {
  variant?: Variant;
  additionalClasses?: Partial<TextCssClasses>;
}
