import {
  type RenderHookResult,
  renderHook as renderHookrtl,
} from '@testing-library/react';

import { KubitProvider } from '@/lib/provider/kubitProvider/kubitProvider';

export const renderHook = <
  R,
  P extends { children?: React.ReactNode } = { children?: React.ReactNode },
>(
  hook: (props: P) => R,
): RenderHookResult<R, P> => {
  const Wrapper: React.FunctionComponent<{ children?: React.ReactNode }> = ({
    children,
  }) => <KubitProvider>{children}</KubitProvider>;

  return renderHookrtl(() => hook({} as P), { wrapper: Wrapper });
};
