import React from 'react';

import { ErrorBoundaryContext } from './errorBoundaryContext';
import {
  ErrorBoundaryContextType,
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from './types/errorBoundary';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, resetCondition: props.resetCondition };
  }

  static contextType: React.Context<ErrorBoundaryContextType> = ErrorBoundaryContext;

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  static getDerivedStateFromProps(
    props: ErrorBoundaryProps,
    state: ErrorBoundaryState
  ): ErrorBoundaryState | null {
    if (props.resetCondition !== state.resetCondition) {
      return { hasError: false, resetCondition: props.resetCondition };
    }
    return null;
  }

  componentDidCatch(error: Error): ErrorBoundaryState {
    const { getErrors } = this.context as ErrorBoundaryContextType;
    getErrors({ error: error.message, errorInfo: error.stack });
    return { hasError: true };
  }

  render(): React.ReactNode {
    const { customFallback } = this.context as ErrorBoundaryContextType;
    if (this.state.hasError || this.props.error) {
      return customFallback || this.props.fallBackComponent;
    }

    return this.props.children;
  }
}
