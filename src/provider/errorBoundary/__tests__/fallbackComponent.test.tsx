import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { FallbackComponent } from '../fallbackComponent';

const FakeChildren = () => <div data-testid="fake">Fake children</div>;
const FakeErrorChildren = () => {
  throw new Error('Test error');
};

describe('FallbackComponent tests', () => {
  it('Should be render correctly', () => {
    const { getByTestId } = renderProvider(
      <FallbackComponent>
        <FakeChildren />
      </FallbackComponent>
    );

    const children = getByTestId('fake');
    expect(children).toBeInTheDocument();
  });
  it('Should be catch the Children`s error', () => {
    // Avoid to console the error, it is expected and catched with the fallbackComponent
    jest.spyOn(console, 'error').mockImplementationOnce(jest.fn());
    const { queryByTestId } = renderProvider(
      <FallbackComponent>
        <FakeErrorChildren />
      </FallbackComponent>
    );
    expect(queryByTestId('fake')).toBeNull();
  });
});
