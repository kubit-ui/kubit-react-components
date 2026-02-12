/**
 * Global type declarations for React 19 compatibility
 *
 * React 19 moved the JSX namespace to React.JSX
 * This file re-exports it to maintain backward compatibility
 * with existing code that uses JSX.Element
 */
import type React from 'react';

declare global {
  namespace JSX {
    type Element = React.JSX.Element;
    type ElementType = React.JSX.ElementType;
    type IntrinsicElements = React.JSX.IntrinsicElements;
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<
      C,
      P
    >;
  }
}

export {};
