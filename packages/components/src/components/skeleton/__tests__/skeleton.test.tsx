import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Skeleton } from '../skeleton';

const mockProps = {
  'data-testid': 'skeletontest',
  duration: '3s',
  height: '10px',
  shapeVariant: 'CIRCLE',
  variant: 'DEFAULT',
  width: '10px',
};

describe('Skeleton component', () => {
  it('Skeleton component', async () => {
    const { container } = render(<Skeleton {...mockProps} />);

    const skeleton = screen.getByTestId('skeletontest');

    expect(skeleton).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
  it('Skeleton component default duration', async () => {
    const { container } = render(
      <Skeleton {...mockProps} duration={undefined} />,
    );

    const skeleton = screen.getByTestId('skeletontest');

    expect(skeleton).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
