import type { ReactNode } from 'react';

import type { DeviceBreakpointsType } from '@/lib/types/breakpoints/breakpoints';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';

type TabsCssClasses = ComponentSelected<ComponentsTypesComponents['TABS']>;

/**
 * Represents the type for a tab in the Tabs component.
 */
export type TabsTabProps = CommonTextProps & {
  disabled?: boolean;
};

/**
 * Interface for the standalone Tabs component.
 * Includes properties for tabs, controls, content, and CSS classes.
 */
export interface TabsStandAloneProps extends DataAttributes {
  device: DeviceBreakpointsType;
  selectedTab?: number;
  tabs?: TabsTabProps[];
  content?: ReactNode[];
  leftControlAriaLabel?: string;
  leftIcon?: ElementOrIconProps;
  rightControlAriaLabel?: string;
  rightIcon?: ElementOrIconProps;
  allowFocusTabPanel?: boolean;
  autoWidth?: boolean;
  maxTabsInView?: number;
  hideLabelForSingleTab?: boolean;
  onSelectTab?: (tab: number) => void;
  unMountContent?: boolean;
  cssClasses?: TabsCssClasses;
}

/**
 * Interface for the controlled Tabs component.
 * Extends the TabsStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Tabs.
 */
export interface TabsProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<TabsStandAloneProps, 'device'> {
  variant?: Variant;
  additionalClasses?: Partial<TabsCssClasses>;
}

/**
 * Interface for the uncontrolled Tabs component.
 * Extends the TabsProps interface and adds default properties.
 *
 * @template Variant - The type of the variant for the Tabs.
 */
export interface TabsUnControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<TabsProps<Variant>, 'selectedTab'> {
  defaultSelectedTab?: number;
}
