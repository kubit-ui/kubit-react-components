import React, { ReactNode } from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { TabsVariantStylesType } from './tabsTheme';

export type PrimaryTabTabType = Omit<IText<string>, 'children'> & {
  content?: ReactNode;
  disabled?: boolean;
};
export interface ITabsStandAlone {
  styles: TabsVariantStylesType;
  device: DeviceBreakpointsType;
  selectedTab?: number;
  tabs?: PrimaryTabTabType[];
  content?: React.ReactNode[];
  leftControlAriaLabel?: string;
  leftIcon?: IElementOrIcon;
  rightControlAriaLabel?: string;
  rightIcon?: IElementOrIcon;
  allowFocusTabPanel?: boolean;
  autoWidth?: boolean;
  /**
   * @deprecated `minTabsInView` will be removed in the next major version
   */
  minTabsInView?: number;
  maxTabsInView?: number;
  hideLabelForSingleTab?: boolean;
  dataTestId?: string;
  onSelectTab?: (tab: number) => void;
  unMountContent?: boolean;
}

export interface ITabsControlled<V = undefined extends string ? unknown : string>
  extends Omit<ITabsStandAlone, 'styles' | 'device'>,
    Omit<CustomTokenTypes<TabsVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
export interface ITabsUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<ITabsControlled<V>, 'selectedTab'> {
  defaultSelectedTab?: number;
}
