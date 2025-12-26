import { render } from '@/lib/tests/render/render';

import {
  GenericComponentContext,
  GenericComponentsProvider,
  useGenericComponents,
} from '../genericComponentsProvider';

describe('GenericComponentsProvider', () => {
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
    vi.spyOn(console, 'error').mockImplementation(() => {
      // Suppress error output in test environment
    });

    const TestComponent = () => {
      useGenericComponents();
      return <div />;
    };

    expect(() =>
      render(
        <GenericComponentContext.Provider value={null}>
          <TestComponent />
        </GenericComponentContext.Provider>,
      ),
    ).toThrow(
      'Generic components context is being used without a provider or with an unsupported value',
    );
  });
});
