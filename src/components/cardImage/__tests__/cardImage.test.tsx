import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { CardImage } from '../cardImage';

const mockProps = {
  altTextImage: 'altTextImage',
  image: {
    [DEVICE_BREAKPOINTS.DESKTOP]: '',
    [DEVICE_BREAKPOINTS.MOBILE]: '',
    [DEVICE_BREAKPOINTS.TABLET]: '',
  },
  title: { content: 'title' },
  variant: 'DEFAULT',
};

describe('CardImage component', () => {
  it('CardImage component', async () => {
    const { container } = render(<CardImage {...mockProps} />);

    const text = screen.getByText('title');

    expect(text).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render without altText', () => {
    const { ...restMock } = mockProps;
    render(<CardImage {...restMock} />);

    const text = screen.getByText('title');
    expect(text).toBeDefined();
  });
});
