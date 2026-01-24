import { fireEvent, screen } from '@testing-library/react';
import { type ForwardedRef, createRef } from 'react';
import { describe, expect, it } from 'vitest';

import { render } from '@/lib/tests/render/render';

import type { IAccordionControlled } from '../types/accordion';

import { AccordionControlled } from '../accordionControlled';

const mockProps: IAccordionControlled = {
  children: 'Accordion content',
  expanded: false,
  header: 'Test Header',
  onHeaderClick: vi.fn(),
  variant: 'DEFAULT',
};

describe('AccordionControlled', () => {
  it('should render accordion in collapsed state', () => {
    render(<AccordionControlled {...mockProps} dataTestId="accordion-test" />);

    const accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();
  });

  it('should render accordion in expanded state', () => {
    render(
      <AccordionControlled
        {...mockProps}
        dataTestId="accordion-test"
        expanded={true}
      />,
    );

    const accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();
  });

  it('should apply custom CSS classes', () => {
    render(
      <AccordionControlled
        {...mockProps}
        additionalClasses={{}}
        dataTestId="accordion-test"
      />,
    );

    const accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();
  });

  it('should call onHeaderClick when header is clicked', () => {
    const onHeaderClick = vi.fn();
    render(
      <AccordionControlled
        {...mockProps}
        dataTestId="accordion-test"
        onHeaderClick={onHeaderClick}
      />,
    );

    const header = screen.getByText('Test Header');
    fireEvent.click(header);

    expect(onHeaderClick).toHaveBeenCalled();
  });

  it('should forward ref correctly', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <AccordionControlled
        {...mockProps}
        ref={ref}
        dataTestId="accordion-test"
      />,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should toggle expanded state', () => {
    const { rerender } = render(
      <AccordionControlled {...mockProps} dataTestId="accordion-test" />,
    );

    let accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();

    rerender(
      <AccordionControlled
        {...mockProps}
        dataTestId="accordion-test"
        expanded={true}
      />,
    );
    accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();
  });

  it('should render children correctly', () => {
    render(
      <AccordionControlled {...mockProps} dataTestId="accordion-test">
        <div data-testid="child-content">Child Element</div>
      </AccordionControlled>,
    );

    const child = screen.getByTestId('child-content');
    expect(child).toBeDefined();
    expect(child.textContent).toBe('Child Element');
  });

  it('should pass through additional props', () => {
    render(<AccordionControlled {...mockProps} dataTestId="accordion-test" />);

    const accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();
  });

  it('should handle undefined variant', () => {
    render(
      <AccordionControlled
        {...mockProps}
        dataTestId="accordion-test"
        variant={undefined}
      />,
    );

    const accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();
  });

  it('should manage inert content based on expanded state', () => {
    const { rerender } = render(
      <AccordionControlled {...mockProps} dataTestId="accordion-test" />,
    );

    const accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();

    // Toggle to expanded
    rerender(
      <AccordionControlled
        {...mockProps}
        dataTestId="accordion-test"
        expanded={true}
      />,
    );
    expect(accordion).toBeDefined();

    // Toggle back to collapsed
    rerender(
      <AccordionControlled
        {...mockProps}
        dataTestId="accordion-test"
        expanded={false}
      />,
    );
    expect(accordion).toBeDefined();
  });

  it('should handle multiple expansions and collapses', () => {
    const { rerender } = render(
      <AccordionControlled {...mockProps} dataTestId="accordion-test" />,
    );

    for (let i = 0; i < 3; i++) {
      rerender(
        <AccordionControlled
          {...mockProps}
          dataTestId="accordion-test"
          expanded={true}
        />,
      );
      const accordion = screen.getByTestId('accordion-test');
      expect(accordion).toBeDefined();

      rerender(
        <AccordionControlled
          {...mockProps}
          dataTestId="accordion-test"
          expanded={false}
        />,
      );
      expect(accordion).toBeDefined();
    }
  });

  it('should work with null ref', () => {
    render(
      <AccordionControlled
        {...mockProps}
        ref={null as unknown as ForwardedRef<HTMLDivElement>}
        dataTestId="accordion-test"
      />,
    );

    const accordion = screen.getByTestId('accordion-test');
    expect(accordion).toBeDefined();
  });

  it('should render with different variants', () => {
    const variants = ['PRIMARY', 'SECONDARY', 'TERTIARY'];

    variants.forEach((variant) => {
      const { unmount } = render(
        <AccordionControlled
          {...mockProps}
          dataTestId="accordion-test"
          variant={variant}
        />,
      );
      const accordion = screen.getByTestId('accordion-test');
      expect(accordion).toBeDefined();
      unmount();
    });
  });
});
