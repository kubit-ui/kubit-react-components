import { screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { ScreenReaderOnly } from '../screenReaderOnly';

const mockBase = {
  show: true,
};

describe('ScreenReaderOnly component', () => {
  it('Render', () => {
    renderProvider(<ScreenReaderOnly {...mockBase}>Reader</ScreenReaderOnly>);

    const container = screen.getByText('Reader');

    expect(container).toBeInTheDocument();
  });
});
