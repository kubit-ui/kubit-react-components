import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { TagPropsStylesType } from './tagTheme';

type TagAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-describedby' | 'aria-disabled' | 'aria-labelledby'
>;

export type TagLabelType = Omit<IText<string>, 'children'> & {
  content?: string;
};

/**
 * @description
 * Tag props
 */
export interface ITagStandAlone extends TagAriaAttributes {
  styles: TagPropsStylesType;
  icon?: IElementOrIcon;
  label?: TagLabelType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
}

/**
 * @description
 * Tag props
 * @interface ITag
 */
export interface ITag<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<ITagStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TagPropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
