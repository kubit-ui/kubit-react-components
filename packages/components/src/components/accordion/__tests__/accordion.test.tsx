import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { AccordionControlled } from '../accordionControlled';
import { Accordion } from '../accordionUnControlled';

describe('Accordion', () => {
  it('should render the accordion with header and content', () => {
    render(
      <Accordion header="Test Accordion" variant="NEUTRAL">
        <div>Test Content</div>
      </Accordion>,
    );

    // Header should be visible
    expect(
      screen.getByRole('button', { name: /Test Accordion/i }),
    ).toBeInTheDocument();

    // Content should exist but be collapsed
    const headerButton = screen.getByRole('button', {
      name: /Test Accordion/i,
    });
    expect(headerButton).toHaveAttribute('aria-expanded', 'false');

    // Content should be in the DOM
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should expand and collapse when clicked', () => {
    render(
      <Accordion header="Test Accordion" variant="NEUTRAL">
        <div>Test Content</div>
      </Accordion>,
    );

    const headerButton = screen.getByRole('button', {
      name: /Test Accordion/i,
    });

    // Initial state - collapsed
    expect(headerButton).toHaveAttribute('aria-expanded', 'false');

    // Click to expand
    fireEvent.click(headerButton);
    expect(headerButton).toHaveAttribute('aria-expanded', 'true');

    // Click to collapse
    fireEvent.click(headerButton);
    expect(headerButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('should call onExpandCollapse with current state and event when expanded/collapsed', () => {
    const onExpandCollapse = vi.fn();
    render(
      <Accordion
        header="Test Accordion"
        variant="NEUTRAL"
        onExpandCollapse={onExpandCollapse}
      >
        <div>Test Content</div>
      </Accordion>,
    );

    // Click to expand
    fireEvent.click(screen.getByRole('button', { name: /Test Accordion/i }));

    expect(onExpandCollapse).toHaveBeenCalledTimes(1);
    expect(onExpandCollapse.mock.calls[0][0]).toBe(true);
    expect(onExpandCollapse.mock.calls[0][1]).toBeDefined();

    // Click to collapse
    fireEvent.click(screen.getByRole('button', { name: /Test Accordion/i }));

    expect(onExpandCollapse).toHaveBeenCalledTimes(2);
    expect(onExpandCollapse.mock.calls[1][0]).toBe(false);
    expect(onExpandCollapse.mock.calls[1][1]).toBeDefined();
  });

  it('should render in expanded state when defaultExpanded is true', () => {
    render(
      <Accordion
        defaultExpanded={true}
        header="Test Accordion"
        variant="NEUTRAL"
      >
        <div>Test Content</div>
      </Accordion>,
    );

    // Header should have aria-expanded="true"
    const headerButton = screen.getByRole('button', {
      name: /Test Accordion/i,
    });
    expect(headerButton).toHaveAttribute('aria-expanded', 'true');

    // Content should be visible with expanded state
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render controlled component correctly', async () => {
    const onHeaderClick = vi.fn();
    const { container } = render(
      <AccordionControlled
        expanded={true}
        header="Test Controlled"
        variant="STANDARD"
        onHeaderClick={onHeaderClick}
      >
        <div>Controlled Content</div>
      </AccordionControlled>,
    );

    // Content should be visible initially because expanded={true}
    const headerButton = screen.getByRole('button', {
      name: /Test Controlled/i,
    });
    expect(headerButton).toHaveAttribute('aria-expanded', 'true');

    // Click should trigger onHeaderClick
    fireEvent.click(headerButton);
    expect(onHeaderClick).toHaveBeenCalledTimes(1);

    // Verificamos que se ha llamado a la función (el evento siempre se pasa)
    expect(onHeaderClick.mock.calls[0][0].type).toBe('click');

    // Content should still be visible (component is controlled externally)
    expect(headerButton).toHaveAttribute('aria-expanded', 'true');

    // Accessibility validation
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);

    // HTML validation
    // Disable no-inline-style because overflow in handled via hook
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
  });

  it('should be accessible with proper ARIA attributes', async () => {
    const { container } = render(
      <Accordion header="Accessible Accordion" variant="NEUTRAL">
        <div>Accessible Content</div>
      </Accordion>,
    );

    const headerButton = screen.getByRole('button', {
      name: /Accessible Accordion/i,
    });
    expect(headerButton).toHaveAttribute('aria-expanded', 'false');

    // Content should have proper ARIA attributes
    const contentId = headerButton.getAttribute('aria-controls');
    const content = document.getElementById(contentId as string);
    expect(content).toBeInTheDocument();

    // Accessibility validation
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);

    // HTML validation
    // Disable no-inline-style because overflow in handled via hook
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
  });
});
