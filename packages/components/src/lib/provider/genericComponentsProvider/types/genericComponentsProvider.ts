import type {
  AriaAttributes,
  AriaRole,
  ForwardRefExoticComponent,
  ImgHTMLAttributes,
  RefAttributes,
} from 'react';

import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

/**
 * Subset of ARIA attributes applicable to link elements.
 * Ensures proper accessibility for navigation components.
 */
type GenericLinkAriaAttributes = Pick<
  AriaAttributes,
  | 'aria-label'
  | 'aria-describedby'
  | 'aria-labelledby'
  | 'aria-disabled'
  | 'aria-current'
>;

/**
 * Props for a generic link component.
 * Provides a flexible interface for custom link implementations that can be used
 * throughout the component library (e.g., for React Router, Next.js Link, etc.).
 */
export type GenericLinkProps = {
  /** The destination URL for the link */
  url: string;
  /** Optional unique identifier for the link element */
  id?: string;
  /** Content to be displayed inside the link */
  children: string | JSX.Element;
  /** Optional CSS class name(s) for styling */
  className?: string;
  /** Specifies where to open the linked document ('_blank', '_self', '_parent', '_top') */
  target?: string;
  /** Callback function invoked when the link is clicked */
  onClick?: () => void;
  /** Callback function invoked when the link receives focus */
  onFocus?: () => void;
  /** Callback function invoked when the mouse pointer enters the link area */
  onMouseEnter?: () => void;
  /** Callback function invoked when the mouse pointer leaves the link area */
  onMouseLeave?: () => void;
  /** Relationship between the current document and the linked document */
  rel?: string;
  /** ARIA role to override the default link role if needed */
  role?: AriaRole;
  /** Test ID for automated testing purposes */
  dataTestId?: string;
  /** Whether the element can be dragged */
  draggable?: boolean;
} & GenericLinkAriaAttributes &
  DataAttributes;

/**
 * Type definition for a generic link component.
 * Can be either a functional component or a forward ref component to support refs.
 */
export type GenericLinkType =
  | ((props: GenericLinkProps) => JSX.Element)
  | ForwardRefExoticComponent<GenericLinkProps & RefAttributes<unknown>>;

/**
 * Props for a generic image component.
 * Inherits all standard HTML image attributes.
 */
export type GenericImageProps = ImgHTMLAttributes<HTMLImageElement>;

/**
 * Type definition for a generic image component.
 * Can be either a functional component or a forward ref component to support refs.
 */
export type GenericImageType =
  | ((props: GenericImageProps) => JSX.Element)
  | ForwardRefExoticComponent<GenericImageProps & RefAttributes<unknown>>;

/**
 * Collection of generic component implementations.
 * Allows customization of primitive components used throughout the library.
 */
export interface GenericComponentsType {
  /** Link component implementation (required) */
  LINK: GenericLinkType;
  /** Image component implementation (optional) */
  IMAGE?: GenericImageType;
}

/**
 * Props for the GenericComponentsProvider.
 * Wraps the application with custom component implementations.
 */
export interface GenericComponentsProviderProps {
  /** The custom generic components to be made available to child components */
  value: GenericComponentsType;
}
