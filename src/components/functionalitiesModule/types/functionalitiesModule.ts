import { ReactNode } from 'react';

import { IActionBottomSheetControlled } from '@/components/actionBottomSheet';
import { IButton } from '@/components/button';
import { ListOptionsOptionType, ListOptionsTitleType } from '@/components/listOptions';
import { ITabsUnControlled, PrimaryTabTabType } from '@/components/tabs';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { FunctionalitiesModuleVariantStylesType } from './functionalitiesModuleTheme';

export type FunctionalitiesModuleTriggerType = Omit<IButton, 'children'> & {
  content?: ReactNode;
};

export type FunctionalitiesModuleActionBottomSheetType = Omit<
  IActionBottomSheetControlled,
  'variant' | 'children' | 'open'
> & {
  variant?: string;
};

export type FunctionalitiesModuleSectionType = {
  tab: PrimaryTabTabType;
  options: Omit<ListOptionsOptionType, 'highlighted'>[];
  optionsTitle?: ListOptionsTitleType;
};

export type FunctionalitiesModuleTabsConfig = Omit<
  ITabsUnControlled,
  'tabs' | 'content' | 'variant'
> & {
  variant?: string;
};
export interface IFunctionalitiesModuleStandAlone {
  styles: FunctionalitiesModuleVariantStylesType;
  device: DeviceBreakpointsType;

  tabsContainerAriaLabel?: string;
  tabsConfig?: FunctionalitiesModuleTabsConfig;
  sections?: FunctionalitiesModuleSectionType[];
  hasTitleSection?: boolean;
  selectedValue?: number | string;

  // When tablet or mobile, a trigger to open the bottom sheet is needed
  trigger?: FunctionalitiesModuleTriggerType;
  open?: boolean;
  actionBottomSheet?: FunctionalitiesModuleActionBottomSheetType;

  dataTestId?: string;
  onOptionClick?: (value?: string | number) => void;
}

export interface IFunctionalitiesModuleControlled
  extends Omit<IFunctionalitiesModuleStandAlone, 'styles' | 'device'>,
    Omit<CustomTokenTypes<FunctionalitiesModuleVariantStylesType>, 'cts' | 'extraCt'> {
  variant: string;
}

export interface IFunctionalitiesModuleUnControlled
  extends Omit<IFunctionalitiesModuleControlled, 'open' | 'defaultTabSelected' | 'selectedValue'> {
  defaultOpen?: boolean;
  onOpenClose?: (value: boolean) => void;
  defaultSelectedValue?: number | string;
}
