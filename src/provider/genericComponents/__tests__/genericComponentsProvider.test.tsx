import { render } from '@testing-library/react';
import * as React from 'react';

// hook
import { GenericComponentsProvider, useGenericComponents } from '../genericComponentsProvider';

const ComponentWithUseGenericComponent = () => {
  useGenericComponents();
  return <div data-testid="testId">hello world</div>;
};

const ComponentWithProvider = () => {
  return (
    <GenericComponentsProvider value={{ LINK: () => <div>hello link</div> }}>
      <ComponentWithUseGenericComponent />
    </GenericComponentsProvider>
  );
};

describe('genericComponentsProvider', () => {
  it('useGenericComponents with Provider should work properly', () => {
    const { getByTestId } = render(<ComponentWithProvider />);
    expect(getByTestId('testId')).toBeInTheDocument();
  });
  it('useGenericComponents without Provider should throw an exception', () => {
    // Avoid console.error when it's expected to catch an exception
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    expect(() => {
      render(<ComponentWithUseGenericComponent />);
    }).toThrow(
      'Generic components context is being used without a provider or with an unsupported value'
    );
  });
});
