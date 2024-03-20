import { screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Skeleton } from '../skeleton';

const mockProps = {
  variant: 'DEFAULT',
  width: '10px',
  height: '10px',
  duration: '3s',
  dataTestId: 'skeletontest',
  shapeVariant: 'CIRCLE',
};

describe('Skeleton component', () => {
  it('Skeleton component', async () => {
    const { container } = renderProvider(<Skeleton {...mockProps} />);

    const skeleton = screen.getByTestId('skeletontest');

    expect(skeleton).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Skeleton component default duration', async () => {
    const { container } = renderProvider(<Skeleton {...mockProps} duration={undefined} />);

    const skeleton = screen.getByTestId('skeletontest');

    expect(skeleton).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
