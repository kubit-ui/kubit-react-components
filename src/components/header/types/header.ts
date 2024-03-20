import { CrumbType, IBreadcrumbsControlled } from '@/components/breadcrumbs/types/breadcrumbs';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { HeaderPropsStylesType } from './headerTheme';

export type HeaderBreadcrumbsType = Omit<IBreadcrumbsControlled, 'crumbs'>;

export interface IHeaderStandAlone {
  styles: HeaderPropsStylesType;
  children: JSX.Element[] | JSX.Element;
  configBreadcrumbs?: HeaderBreadcrumbsType;
  crumbs?: CrumbType[];
  device: DeviceBreakpointsType;
  dataTestId?: string;
}

export interface IHeader<V = undefined extends string ? unknown : string>
  extends Omit<IHeaderStandAlone, 'styles' | 'device'>,
    Omit<CustomTokenTypes<HeaderPropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
