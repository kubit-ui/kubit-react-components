import { type RenderOptions, render } from '@testing-library/react';

import { KubitProvider } from '@/lib/provider/kubitProvider/kubitProvider';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <KubitProvider>{children}</KubitProvider>;
};

const customRender = (
  ui: JSX.Element,
  options?: RenderOptions,
): ReturnType<typeof render> =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
