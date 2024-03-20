import { createContext } from 'react';

import { ErrorBoundaryContextType } from './types/errorBoundary';

export const ErrorBoundaryContext = createContext({} as ErrorBoundaryContextType);
