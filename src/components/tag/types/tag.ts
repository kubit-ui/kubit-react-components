import { IElementOrIcon } from '@/components/elementOrIcon';
import { CustomTokenTypes } from '@/types';

import { TagStateKeyOfType, TagStylesOptionPropsType, TagStylesVariantPropsType } from './tagTheme';

type TagAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-describedby' | 'aria-disabled' | 'aria-labelledby'
>;

/**
 * @description
 * Tag props
 */
export interface ITagStandAlone<V extends string | unknown = string | unknown>
  extends TagAriaAttributes {
  children: React.ReactNode;
  variantStatusStyles?: TagStylesVariantPropsType;
  optionStyles: TagStylesOptionPropsType;
  dataTestId?: string;
  icon?: IElementOrIcon;
  variant: V;
  truncateText?: boolean;
}

/**
 * @description
 * Tag props
 * @interface ITag
 */
export interface ITag<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<ITagStandAlone<V>, 'variantStatusStyles' | 'optionStyles'>,
    Omit<CustomTokenTypes<TagStateKeyOfType, undefined, TagStylesOptionPropsType>, 'cts'> {
  option: S;
  status: string;
}
