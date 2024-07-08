import React from 'react';

import { ROLES } from '@/types/role';

/**
 * Defines the properties for a generic link component.
 * @property {string} url - The URL the link points to.
 * @property {string | JSX.Element} children - The content inside the link.
 * @property {string} [className] - Optional CSS class for styling.
 * @property {string} [target] - Specifies where to open the linked document.
 * @property {boolean} [aria-disabled] - Indicates that the element is perceivable but disabled.
 * @property {string} [aria-label] - Defines a string value that labels the current element.
 * @property {() => void} [onClick] - Function to call when the link is clicked.
 * @property {() => void} [onFocus] - Function to call when the link is focused.
 * @property {() => void} [onMouseEnter] - Function to call when the mouse enters the link area.
 * @property {() => void} [onMouseLeave] - Function to call when the mouse leaves the link area.
 * @property {ROLES} [role] - ARIA role to describe the link's type.
 * @property {string} [dataTestId] - Test ID for testing purposes.
 * @property {boolean} [draggable] - Indicates whether the element can be dragged.
 */
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

/**
 * Defines the type for a generic link component, which can be either a functional component or a forward ref component.
 */
export type GenericLinkType =
  | ((props: IGenericLink) => JSX.Element)
  | React.ForwardRefExoticComponent<IGenericLink & React.RefAttributes<unknown>>;

/**
 * Defines the properties for a generic image component.
 */
export interface IGenericImage extends React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * Defines the type for a generic image component, which can be either a functional component or a forward ref component.
 */
export type GenericImageType =
  | ((props: IGenericImage) => JSX.Element)
  | React.ForwardRefExoticComponent<IGenericImage & React.RefAttributes<unknown>>;

/**
 * Defines the types for generic components, including links and images.
 */
export type GenericComponentsType = {
  LINK: GenericLinkType;
  IMAGE?: GenericImageType;
};

/**
 * Provides the interface for the generic components provider.
 * @property {GenericComponentsType} value - The actual components to be provided.
 */
export interface IGenericComponentsProvider {
  value: GenericComponentsType;
}
