//types
import { IElementOrIcon } from '@/components/elementOrIcon';
import { ILink } from '@/components/link';
import { TextComponentType } from '@/components/text';
import { CustomTokenTypes, STATES } from '@/types';

import { BreadcrumbsPropsStateStylesType } from './breadcrumbsTheme';

export interface IBreadcrumbLiStyled {
  styles: BreadcrumbsPropsStateStylesType;
  state?: STATES;
  lastCrumb?: boolean;
}

export type CrumbType = {
  name: string;
  url: string;
  onClick?: (url: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  ariaLabel?: string;
};

export type BreadcrumbsLinkType = Omit<ILink, 'children' | 'onClick' | 'aria-label' | 'url'> & {
  content?: string;
};

export interface IBreadcrumbStandAlone {
  styles: BreadcrumbsPropsStateStylesType;
  link?: BreadcrumbsLinkType;
  crumb: CrumbType;
  lastCrumb?: boolean;
  lastOneCrumbComponent?: TextComponentType;
  dividerIcon?: IElementOrIcon;
  dataTestId?: string;
}

type BreadcrumbsAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-describedby' | 'aria-disabled' | 'aria-labelledby'
>;

/**
 * @description
 * interface for the breadcrumbs standAlone
 */
export interface IBreadcrumbsStandAlone extends BreadcrumbsAriaAttributes {
  link?: BreadcrumbsLinkType;
  id?: string;
  crumbs: CrumbType[];
  minCharLimit?: number;
  dataTestId?: string;
  styles: BreadcrumbsPropsStateStylesType;
  dividerIcon?: IElementOrIcon;
  lastOneCrumbComponent?: TextComponentType;
}

/**
 * @description
 * interface for the breadcrumbs controlled
 * @interface IBreadcrumbsControlled
 * @template V
 * @property {V} variant - Variant of the breadcrumbs.
 */
export interface IBreadcrumbsControlled<V = undefined extends string ? unknown : string>
  extends Omit<IBreadcrumbsStandAlone, 'styles'>,
    Omit<CustomTokenTypes<BreadcrumbsPropsStateStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
