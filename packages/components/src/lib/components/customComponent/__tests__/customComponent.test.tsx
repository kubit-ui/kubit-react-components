import { screen } from '@testing-library/react';
import { createRef } from 'react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { CustomComponent } from '../customComponent';

describe('CustomComponent', () => {
  it('should render with default component type (span)', async () => {
    const { container } = render(
      <CustomComponent>Test Content</CustomComponent>,
    );

    const element = screen.getByText('Test Content');
    expect(element.tagName).toBe('SPAN');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('should render with a custom component type', async () => {
    const { container } = render(
      <CustomComponent component="div">Test Content</CustomComponent>,
    );

    const element = screen.getByText('Test Content');
    expect(element.tagName).toBe('DIV');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('should apply additional class names', async () => {
    const { container } = render(
      <CustomComponent className="custom-class">Test Content</CustomComponent>,
    );

    const element = screen.getByText('Test Content');
    expect(element).toHaveClass('custom-class');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('should forward refs', async () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(
      <CustomComponent ref={ref} component="div">
        Test Content
      </CustomComponent>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
