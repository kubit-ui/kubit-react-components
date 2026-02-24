/**
 * Global type declarations for React 19 compatibility
 *
 * React 19 moved the JSX namespace to React.JSX
 * This file re-exports it to maintain backward compatibility
 * with existing code that uses JSX.Element
 */
import type { JSX } from 'react';

declare global {
  namespace JSX {
    type Element = JSX.Element;
    type ElementType = JSX.ElementType;
    type IntrinsicElements = JSX.IntrinsicElements;
    type LibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;
  }
}

export {};
