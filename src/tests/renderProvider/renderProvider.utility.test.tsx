import { screen } from '@testing-library/react';
import React from 'react';

import { Container } from '@/components/container/container';

import { renderProvider } from './renderProvider.utility';

describe('renderProvider', () => {
  test('should rerender with same providers properly', () => {
    const { rerender } = renderProvider(<Container variant={'DEFAULT'}>TEST_TEXT</Container>);

    expect(screen.getByText('TEST_TEXT')).toBeVisible();

    rerender(<Container variant={'DEFAULT'}>TEST_TEXT_2</Container>);

    expect(screen.getByText('TEST_TEXT_2')).toBeVisible();
  });
});
