import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { ErrorBoundary } from '../errorBoundary';
import { ErrorBoundaryProvider } from '../errorBoundaryProvider';

const FakeFallbackComponent = () => <div data-testid="fake">Fake FallbackComponent</div>;
const FakeErrorChildren = () => {
  throw new Error('Test error');
};

jest.mock('../../../../../assets/storybook/icons/icon_x_close.svg', () => (
  <img alt="closeIcon" src="" />
));

describe('ErrorBoundaryProvider test', () => {
  beforeEach(() => {
    // Avoid to console the error, it is expected and catched with the fallbackComponent
    jest.spyOn(console, 'error').mockImplementationOnce(jest.fn());
  });
  it('Should be work correctly. Portal is created in the boy by default', () => {
    const { getByText } = renderProvider(
      <ErrorBoundaryProvider showErrorMessage={true}>
        <ErrorBoundary fallBackComponent={<FakeFallbackComponent />}>
          <FakeErrorChildren />
        </ErrorBoundary>
      </ErrorBoundaryProvider>
    );

    const snackbarError = getByText('Error(s) 1');
    fireEvent.click(snackbarError);

    expect(getByText('Test error')).toBeInTheDocument();
  });

  it('Id of the element where to create the portal can be specify', () => {
    const { getByText } = renderProvider(
      <>
        <div id="test" />
        <ErrorBoundaryProvider idCreateModal="test" showErrorMessage={true}>
          <ErrorBoundary fallBackComponent={<FakeFallbackComponent />}>
            <FakeErrorChildren />
          </ErrorBoundary>
        </ErrorBoundaryProvider>
      </>
    );

    const snackbarError = getByText('Error(s) 1');
    fireEvent.click(snackbarError);

    expect(getByText('Test error')).toBeInTheDocument();
  });

  it('When the id provided does not exists, the portal will be created in the body', () => {
    const { getByText } = renderProvider(
      <>
        <ErrorBoundaryProvider idCreateModal="test" showErrorMessage={true}>
          <ErrorBoundary fallBackComponent={<FakeFallbackComponent />}>
            <FakeErrorChildren />
          </ErrorBoundary>
        </ErrorBoundaryProvider>
      </>
    );

    const snackbarError = getByText('Error(s) 1');
    fireEvent.click(snackbarError);

    expect(getByText('Test error')).toBeInTheDocument();
  });

  it('ErrorBoundary can reset resetCondition to reload the component', () => {
    const { getByText, rerender } = renderProvider(
      <>
        <ErrorBoundaryProvider showErrorMessage={true}>
          <ErrorBoundary fallBackComponent={<FakeFallbackComponent />} resetCondition={false}>
            <FakeErrorChildren />
          </ErrorBoundary>
        </ErrorBoundaryProvider>
      </>
    );

    const fallback = getByText(/FallbackComponent/);
    expect(fallback).toBeInTheDocument();

    rerender(
      <ErrorBoundaryProvider showErrorMessage={true}>
        <ErrorBoundary fallBackComponent={<FakeFallbackComponent />} resetCondition={true}>
          <div>hello world</div>
        </ErrorBoundary>
      </ErrorBoundaryProvider>
    );

    expect(fallback).not.toBeInTheDocument();
  });
});
