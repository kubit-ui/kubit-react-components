import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { ListDivider } from '../listDivider';

describe('ListDivider', () => {
  it('should render null when divider prop is null', () => {
    const { container } = renderProvider(<ListDivider divider={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render LineSeparator when divider prop is a string', () => {
    const dividerValue = 'test';
    const { getByText } = renderProvider(<ListDivider divider={dividerValue} />);
    expect(getByText(dividerValue)).toBeInTheDocument();
  });

  it('should render Divider when divider prop is a Divider object', () => {
    const dividerObject = {
      variant: 'DEFAULT',
    };
    const { container } = renderProvider(<ListDivider divider={dividerObject} />);

    expect(container.firstChild).not.toBeNull();
  });

  it('should render null when divider object has no variant and either dividerStyles', () => {
    const dividerObject = {
      leftLabel: 'Left label',
    };
    const { container } = renderProvider(<ListDivider divider={dividerObject} />);

    expect(container.firstChild).toBeNull();
  });
});
