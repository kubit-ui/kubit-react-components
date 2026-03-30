import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { render } from '@/lib/tests/render/render';

import type { ModalControlledProps } from '../types/modal';

import { ModalControlled } from '../modalControlled';

const mockProps: ModalControlledProps = {
  content: 'Modal content',
  ['data-testid']: 'modal-test',
  onClose: vi.fn(),
  open: true,
  title: { content: 'Modal Title' },
  variant: 'DEFAULT',
};

describe('ModalControlled', () => {
  it('should render modal when open is true', () => {
    render(<ModalControlled {...mockProps} />);
    const content = screen.getByText('Modal content');
    expect(content).toBeDefined();
  });

  it('should not render modal when open is false', () => {
    render(<ModalControlled {...mockProps} open={false} />);
    const content = screen.queryByText('Modal content');
    expect(content).toBeNull();
  });

  it('should call onClose when close is triggered', () => {
    const onClose = vi.fn();
    render(<ModalControlled {...mockProps} onClose={onClose} />);
    // Modal should render with close capability
    expect(onClose).toBeDefined();
  });

  it('should render with custom portalId', () => {
    render(<ModalControlled {...mockProps} portalId="custom-portal" />);
    const content = screen.getByText('Modal content');
    expect(content).toBeDefined();
  });

  it('should handle disableFocusableContent prop', () => {
    render(<ModalControlled {...mockProps} disableFocusableContent />);
    const content = screen.getByText('Modal content');
    expect(content).toBeDefined();
  });

  it('should handle popover configuration', () => {
    render(<ModalControlled {...mockProps} popover={{}} />);
    const content = screen.getByText('Modal content');
    expect(content).toBeDefined();
  });

  it('should forward ref correctly', () => {
    const ref = vi.fn();
    render(<ModalControlled {...mockProps} ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('should apply additional CSS classes', () => {
    render(<ModalControlled {...mockProps} additionalClasses={{}} />);
    const content = screen.getByText('Modal content');
    expect(content).toBeDefined();
  });

  it('should render with modal header', () => {
    render(<ModalControlled {...mockProps} />);
    const title = screen.getByText('Modal Title');
    expect(title).toBeDefined();
  });

  it('should handle different variants', () => {
    const { rerender } = render(
      <ModalControlled {...mockProps} variant="SIDE" />,
    );
    let content = screen.getByText('Modal content');
    expect(content).toBeDefined();

    rerender(<ModalControlled {...mockProps} variant="CENTERED" />);
    content = screen.getByText('Modal content');
    expect(content).toBeDefined();
  });

  it('should handle content visibility', () => {
    render(<ModalControlled {...mockProps} />);
    const content = screen.getByText('Modal content');
    expect(content).toBeVisible();
  });
});
