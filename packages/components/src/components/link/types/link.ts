import type { CSSProperties } from 'react';

import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { GenericLinkType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';
import type { StateType } from '@/lib/types/states/states';

import type {
  ButtonCssClasses,
  ButtonStandAloneProps,
} from '../../button/types/button';
import type { TextComponentType } from '../../text/types/component';
import type { TextCssClasses } from '../../text/types/text';
import type { LinkActionType } from './action';
import type { LinkPositionType } from './position';

/**
 * Represents the CSS classes for the Link component.
 */
type LinkCssClasses = ComponentSelected<ComponentsTypesComponents['LINK']>;
type LinkAsButtonCssClasses = ComponentSelected<
  ComponentsTypesComponents['LINK_AS_BUTTON']
>;
/**
 * Represents the ARIA attributes for the Link component.
 */
type LinkAriaProps = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-describedby'
  | 'aria-disabled'
  | 'aria-current'
  | 'aria-labelledby'
>;

/**
 * Interface for the standalone Link component.
 * Includes ARIA attributes, styling options, event handlers, and additional attributes.
 */
export interface LinkStandAloneProps extends LinkAriaProps, DataAttributes {
  action?: LinkActionType;
  id?: string;
  children: JSX.Element | string;
  color?: string;
  component?: GenericLinkType;
  decoration?: CSSProperties['textDecoration'];
  icon?: ElementOrIconProps;
  iconPosition?: LinkPositionType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rel?: string;
  role?: React.AriaRole;
  target?: React.HTMLAttributeAnchorTarget;
  url: string;
  weight?: number;
  alignCenter: boolean;
  draggable?: boolean;
  cssTextClasses?: TextCssClasses;
  cssClasses?: LinkCssClasses;
  additionalTextClasses?: Partial<TextCssClasses>;
  additionalClasses?: Partial<LinkCssClasses>;
  disabled?: boolean;
}

/**
 * Interface for the Link component with a variant.
 * Extends the LinkStandAloneProps interface and adds a variant and additional CSS classes.
 */
export interface LinkProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
  LinkStandAloneProps,
  'component' | 'alignCenter' | 'aria-disabled'
> {
  alignCenter?: boolean;
  variant?: Variant;
  textVariant?: string;
}

/**
 * Interface for the standalone LinkAsButton component.
 * Extends the ButtonStandAloneProps interface and includes additional properties for links.
 */
export interface LinkAsButtonStandAloneProps extends Omit<
  ButtonStandAloneProps,
  'showLoader'
> {
  children: string | JSX.Element;
  component?: TextComponentType | GenericLinkType;
  fullWidth?: boolean;
  url: string;
  state: Extract<
    StateType,
    'loading' | 'disabled' | 'pressed' | 'default' | 'hover'
  >;
  target?: string;
  rel?: string;
  role?: React.AriaRole;
  ariaLabelText?: string;
  cssLinkAsButtonClasses?: LinkAsButtonCssClasses;
}

/**
 * Interface for the LinkAsButton component with a variant.
 * Extends the LinkAsButtonStandAloneProps interface and adds size, variant, and additional CSS classes.
 */
export interface LinkAsButtonProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<LinkAsButtonStandAloneProps, 'component'> {
  size: string;
  variant?: Variant;
  disabled?: boolean;
  additionalClasses?: Partial<LinkCssClasses>;
  additionalVariantClasses?: Partial<ButtonCssClasses>;
  additionalSizeClasses?: Partial<ButtonCssClasses>;
}
