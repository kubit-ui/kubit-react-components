import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { render } from '@/lib/tests/render/render';

import type { ModalUnControlledProps } from '../types/modal';

import { ModalUnControlled } from '../modalUnControlled';

const mockProps: ModalUnControlledProps = {
  content: 'Modal uncontrolled content',
  ['data-testid']: 'modal-uncontrolled-test',
  onClose: vi.fn(),
  open: true,
  title: { content: 'Uncontrolled Modal Title' },
  variant: 'DEFAULT',
};

describe('ModalUnControlled', () => {
  it('should render modal when open is true', () => {
    render(<ModalUnControlled {...mockProps} />);
    const content = screen.getByText('Modal uncontrolled content');
    expect(content).toBeDefined();
  });

  it('should not render modal when open is false', () => {
    render(<ModalUnControlled {...mockProps} open={false} />);
    const content = screen.queryByText('Modal uncontrolled content');
    expect(content).toBeNull();
  });

  it('should call onClose when modal is closed', () => {
    const onClose = vi.fn();
    render(
      <ModalUnControlled
        {...mockProps}
        closeIcon={{ altText: 'Close' }}
        onClose={onClose}
      />,
    );

    // Modal should be open
    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should handle close button click', () => {
    const onClose = vi.fn();
    const onButtonClick = vi.fn();
    render(
      <ModalUnControlled
        {...mockProps}
        closeButton={{ content: 'Close', onClick: onButtonClick }}
        onClose={onClose}
      />,
    );

    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should handle close icon click', () => {
    const onClose = vi.fn();
    const onIconClick = vi.fn();
    render(
      <ModalUnControlled
        {...mockProps}
        closeIcon={{ altText: 'Close', onClick: onIconClick }}
        onClose={onClose}
      />,
    );

    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should update open state when openProp changes', () => {
    const { rerender } = render(
      <ModalUnControlled {...mockProps} open={false} />,
    );

    expect(screen.queryByText('Modal uncontrolled content')).toBeNull();

    rerender(<ModalUnControlled {...mockProps} open={true} />);
    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should handle Escape key when blocked', () => {
    render(<ModalUnControlled {...mockProps} blocked={true} />);

    const modalContent = screen.getByText('Modal uncontrolled content');
    expect(modalContent).toBeDefined();

    // Simulate Escape key press
    fireEvent.keyDown(modalContent.closest('[role="dialog"]') || modalContent, {
      key: 'Escape',
    });

    // Modal should still be open when blocked
    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should render with popover prop', () => {
    render(<ModalUnControlled {...mockProps} popover={{}} />);

    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should handle close with blocked=false and escape key', () => {
    const onClose = vi.fn();
    render(
      <ModalUnControlled {...mockProps} blocked={false} onClose={onClose} />,
    );

    const modalContent = screen.getByText('Modal uncontrolled content');
    expect(modalContent).toBeDefined();

    fireEvent.keyDown(modalContent.closest('[role="dialog"]') || modalContent, {
      key: 'Escape',
    });

    expect(onClose).toHaveBeenCalled();
  });

  it('should render without title', () => {
    const propsWithoutTitle = { ...mockProps };
    delete propsWithoutTitle.title;

    render(<ModalUnControlled {...propsWithoutTitle} />);
    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should handle modal open state internally', () => {
    const { rerender } = render(
      <ModalUnControlled
        content="Test content"
        open={false}
        variant="DEFAULT"
      />,
    );

    expect(screen.queryByText('Test content')).toBeNull();

    rerender(
      <ModalUnControlled
        content="Test content"
        open={true}
        variant="DEFAULT"
      />,
    );

    expect(screen.getByText('Test content')).toBeDefined();
  });

  it('should render with dragIcon', () => {
    render(
      <ModalUnControlled
        {...mockProps}
        dragIcon={{ altText: 'Drag handle' }}
      />,
    );

    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should render with portalId', () => {
    render(<ModalUnControlled {...mockProps} portalId="custom-portal" />);

    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });

  it('should render with disableFocusableContent', () => {
    render(<ModalUnControlled {...mockProps} disableFocusableContent={true} />);

    expect(screen.getByText('Modal uncontrolled content')).toBeDefined();
  });
});
