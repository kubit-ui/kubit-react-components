import { ROLES } from '@/types/role';

export type IGenericLink = {
  url: string;
  children: string | JSX.Element;
  className?: string;
  target?: string;
  ['aria-disabled']?: boolean;
  ['aria-label']?: string;
  onClick?: () => void;
  onFocus?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  role?: ROLES;
  dataTestId?: string;
  draggable?: boolean;
};

export type GenericLinkType =
  | ((props: IGenericLink) => JSX.Element)
  | React.ForwardRefExoticComponent<IGenericLink & React.RefAttributes<unknown>>;

export type GenericComponentsType = {
  LINK: GenericLinkType;
};

export interface IGenericComponentsProvider {
  value: GenericComponentsType;
}
