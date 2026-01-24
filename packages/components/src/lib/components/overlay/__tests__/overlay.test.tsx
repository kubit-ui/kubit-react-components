import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Overlay } from '../overlay';

const mockProps = {
  'data-testid': 'overlayId',
  variant: 'DEFAULT',
};

describe('Overlay component', () => {
  it('Render with a valid HTML structure', async () => {
    const { container, getByTestId } = render(<Overlay {...mockProps} />);

    expect(getByTestId(mockProps['data-testid'])).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
