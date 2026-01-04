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

  it('Should render with link', () => {
    render(
      <CardImage
        {...mockProps}
        link={{ content: 'Read more', url: '/details' }}
      />,
    );

    const linkText = screen.getByText('Read more');
    expect(linkText).toBeDefined();
  });

  it('Should not render link when url is missing', () => {
    render(
      <CardImage {...mockProps} link={{ content: 'Read more', url: '' }} />,
    );

    const linkText = screen.queryByText('Read more');
    expect(linkText).toBeNull();
  });

  it('Should render with description', () => {
    render(
      <CardImage
        {...mockProps}
        description={{ content: 'Card description text' }}
      />,
    );

    const description = screen.getByText('Card description text');
    expect(description).toBeDefined();
  });

  it('Should render with onClick handler', () => {
    const onClick = vi.fn();
    render(<CardImage {...mockProps} onClick={onClick} />);

    const text = screen.getByText('title');
    expect(text).toBeDefined();
  });

  it('Should render with custom component', () => {
    render(<CardImage {...mockProps} component="article" />);

    const text = screen.getByText('title');
    expect(text).toBeDefined();
  });

  it('Should render image for specific device', () => {
    render(
      <CardImage
        {...mockProps}
        image={{
          [DEVICE_BREAKPOINTS.DESKTOP]: 'desktop.jpg',
          [DEVICE_BREAKPOINTS.MOBILE]: 'mobile.jpg',
          [DEVICE_BREAKPOINTS.TABLET]: 'tablet.jpg',
        }}
      />,
    );

    const text = screen.getByText('title');
    expect(text).toBeDefined();
  });
});
