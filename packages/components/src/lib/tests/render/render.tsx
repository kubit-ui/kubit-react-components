import { Provider } from '@kubit-ui-web/design-system/provider/Provider';
import { type RenderOptions, render } from '@testing-library/react';

import { StylesProvider } from '@/lib/provider/stylesProvider/stylesProvider';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StylesProvider bernovaProvider={Provider as never}>
      {children}
    </StylesProvider>
  );
};

const customRender = (
  ui: JSX.Element,
  options?: RenderOptions,
): ReturnType<typeof render> =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
