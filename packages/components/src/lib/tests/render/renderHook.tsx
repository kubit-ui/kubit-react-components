import { Provider } from '@kubit-ui-web/design-system/provider/Provider';
import {
  type RenderHookResult,
  renderHook as renderHookrtl,
} from '@testing-library/react';

import { StylesProvider } from '@/lib/provider/stylesProvider/stylesProvider';

export const renderHook = <
  R,
  P extends { children?: React.ReactNode } = { children?: React.ReactNode },
>(
  hook: (props: P) => R,
): RenderHookResult<R, P> => {
  const Wrapper: React.FunctionComponent<{ children?: React.ReactNode }> = ({
    children,
  }) => (
    <StylesProvider bernovaProvider={Provider as never}>
      {children}
    </StylesProvider>
  );

  return renderHookrtl(() => hook({} as P), { wrapper: Wrapper });
};
