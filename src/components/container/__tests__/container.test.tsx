import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Container } from '../container';

const mockProps = {
  children: 'children',
  variant: 'DEFAULT',
};

describe('Container Component', () => {
  const renderContainer = (props = mockProps) =>
    render(
      <Container
        title={{
          component: 'h4',
          content: 'title',
        }}
        {...props}
      />,
    );

  it('Should render Container', async () => {
    const { container, getByText } = renderContainer();

    expect(getByText('children')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render title prop as h4 by default', async () => {
    const { container, getByRole } = renderContainer();

    expect(getByRole('heading', { level: 4, name: 'title' })).not.toBeNull();

    const results = await axe(container);
    expect(container).not.toBeNull();
    expect(results.violations).toHaveLength(0);
  });
});
