export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallBackComponent: React.ReactNode;
  resetCondition?: unknown;
  error?: boolean;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  resetCondition?: unknown;
}

export interface ErrorBoundaryContextType {
  customFallback?: JSX.Element;
  errors: ErrorBoundaryErrors[];
  getErrors: (err: ErrorBoundaryErrors) => void;
}

export interface ErrorBoundaryErrors {
  error: string;
  errorInfo?: string;
}
