import { render, renderHook } from '@testing-library/react';

import {
  GenericComponentContext,
  GenericComponentsProvider,
  useGenericComponents,
} from '../genericComponentsProvider';

describe('GenericComponentsProvider', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

  beforeAll(() => {
    // Suppress console errors and warnings for tests that expect errors
    consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
    consoleWarnSpy = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => undefined);
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
    consoleWarnSpy.mockRestore();
  });

  it('should render children correctly when provided', () => {
    const { getByText } = render(
      <GenericComponentsProvider
        value={{ LINK: () => <div>Link Component</div> }}
      >
        <div>Child Component</div>
      </GenericComponentsProvider>,
    );
    expect(getByText('Child Component')).not.toBeNull();
  });

  it('should pass the correct value to the context', () => {
    const LINKComponent = () => <div>Link Component</div>;
    const TestComponent = () => {
      const { LINK: Link } = useGenericComponents();
      return <Link children="" url="" />;
    };

    const { getByText } = render(
      <GenericComponentsProvider value={{ LINK: LINKComponent }}>
        <TestComponent />
      </GenericComponentsProvider>,
    );

    expect(getByText('Link Component')).not.toBeNull();
  });

  it('should throw an error when context value is null', () => {
    // Test that the hook throws an error when used without a proper provider
    // Console errors are suppressed globally via beforeAll/afterAll hooks
    expect(() => {
      renderHook(() => useGenericComponents(), {
        wrapper: ({ children }: { children: React.ReactNode }) => (
          <GenericComponentContext.Provider value={null}>
            {children}
          </GenericComponentContext.Provider>
        ),
      });
    }).toThrow(
      'Generic components context is being used without a provider or with an unsupported value',
    );
  });
});
