import { CrumbType, IBreadcrumbsControlled } from '@/components/breadcrumbs/types/breadcrumbs';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import { HeaderStructurePropsStylesType } from './headerStructureTheme';

export type HeaderStructureBreadcrumbsType = Omit<IBreadcrumbsControlled, 'crumbs'>;

export interface IHeaderStructureStandAlone {
  styles: HeaderStructurePropsStylesType;
  children: JSX.Element[] | JSX.Element;
  device: DeviceBreakpointsType;
  scrolling: boolean;
  dataTestId?: string;
  containerHeight?: string;
  crumbs?: CrumbType[];
  backgroundColor?: string;
  configBreadcrumbs?: HeaderStructureBreadcrumbsType;
}

export interface IHeaderStructure<V = undefined extends string ? unknown : string>
  extends Omit<IHeaderStructureStandAlone, 'styles' | 'device' | 'scrolling'>,
    Omit<CustomTokenTypes<HeaderStructurePropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
