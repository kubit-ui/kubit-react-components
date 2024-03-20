import '@testing-library/jest-dom';

import { RenderResult, render } from '@testing-library/react';
import { RenderHookResult, renderHook } from '@testing-library/react-hooks';
import * as React from 'react';

import { KubitProvider } from '@/provider/kubitProvider';

export const renderProvider = (node: React.ReactElement): RenderResult => {
  const Wrapper = ({ children }: React.PropsWithChildren) => (
    <KubitProvider>{children}</KubitProvider>
  );

  return render(node, { wrapper: Wrapper });
};

export const renderHookProvider = <P extends { children?: React.ReactNode }, R>(
  hook: (props: P) => R
): RenderHookResult<P, R> => {
  const Wrapper: React.FunctionComponent<P> = ({ children }) => (
    <KubitProvider>{children}</KubitProvider>
  );

  return renderHook(hook, { wrapper: Wrapper });
};
