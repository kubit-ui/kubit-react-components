import { IIcon } from '@/components/icon/types';

/**
 * @name IElementOrIcon
 * @description
 * Interface for the ElementOrIcon component
 * @property { JSX.Element | HTMLElement | React.ReactNode} icon - Icon to be displayed
 * @property {boolean} basic - If true, the icon will be displayed as a basic icon
 */
export interface IElementOrIcon extends Omit<IIcon, 'icon'> {
  icon?: JSX.Element | HTMLElement | React.ReactNode | string;
  basic?: boolean;
}
