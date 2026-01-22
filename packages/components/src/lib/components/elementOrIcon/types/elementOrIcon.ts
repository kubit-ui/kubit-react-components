import type { IconProps } from '@/components/icon/types/icon';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

/**
 * @name ElementOrIconProps
 * @description
 * Interface for the ElementOrIcon component
 * @property { JSX.Element | HTMLElement | React.ReactNode} icon - Icon to be displayed
 * @property {boolean} basic - If true, the icon will be displayed as a basic icon
 */
export interface ElementOrIconProps
  extends Omit<IconProps, 'icon'>, DataAttributes {
  icon?: JSX.Element | HTMLElement | React.ReactNode | string;
  basic?: boolean;
}
