import { act, fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import * as mediaHooks from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { render } from '@/lib/tests/render/render';
import { windowMatchMedia } from '@/lib/tests/windowMatchMedia/windowMatchMedia';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { IconBasic as Icon } from '../../icon/icon';
import { Modal } from '../modalUnControlled';

const mockProps = {
  onClose: vi.fn(),
  open: true,
  popover: {
    pressEscapeClose: true,
  },
  title: { content: 'title', variant: 'PARAGRAPH_MEDIUM_EXPANDED' },
  variant: 'DEFAULT',
};

describe('Modal component', () => {
  it('Should render with a valid HTML structure', async () => {
    const { container } = render(
      <Modal {...mockProps} ref={vi.fn() as never} />,
    );

    const modal = screen.getByRole('dialog');

    expect(modal).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('When no variant, should render the component', async () => {
    const { container } = render(<Modal {...mockProps} variant={undefined} />);

    const modal = screen.getByRole('dialog');

    expect(modal).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('Should close the modal when the close icon button is pressed', () => {
    render(
      <Modal
        {...mockProps}
        closeIcon={{ altText: 'close modal', icon: 'PLUG' }}
      />,
    );

    const modal = screen.getByRole('dialog');

    expect(modal).not.toBeNull();

    const closeButton = screen.getByRole('button', { name: 'close modal' });
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('Should close the modal when the close text button is pressed', () => {
    render(
      <Modal
        {...mockProps}
        closeButton={{
          content: 'close modal',
          size: 'MEDIUM',
          variant: 'PRIMARY',
        }}
      />,
    );

    const modal = screen.getByRole('dialog');

    expect(modal).not.toBeNull();

    const closeButton = screen.getByRole('button', { name: 'close modal' });
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('When no footer variant, should render the component', () => {
    render(<Modal {...mockProps} />);

    const modal = screen.getByRole('dialog');

    expect(modal).not.toBeNull();
  });

  it('Can have custom icons', () => {
    render(
      <Modal
        {...mockProps}
        closeIcon={{ icon: <Icon altText="close_icon" icon="UNICORN" /> }}
      />,
    );

    const closeIcon = screen.getByRole('img', { name: 'close_icon' });

    expect(closeIcon).not.toBeNull();
  });

  it('When title no visible, should have a right html Structure', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    vi.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.MOBILE,
    );
    const { container, getByText } = render(
      <Modal {...mockProps} title={{ ...mockProps.title, visible: false }} />,
    );

    const title = getByText(mockProps.title.content);
    expect(title).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('Modal can be closed using pressing escape', async () => {
    const mockOnClose = vi.fn(); // Mock de la función onClose
    render(
      <Modal
        {...mockProps}
        content={<button type="button">testButton</button>}
        onClose={mockOnClose}
      />,
    );

    const button = screen.getByText('testButton');

    await act(async () => {
      fireEvent.keyDown(button, {
        code: 'Escape',
        key: 'Escape',
      });
    });

    // Verifica que la función onClose haya sido llamada
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('Should stop propague the event, when the escape has been pressed from the modal', async () => {
    render(<Modal {...mockProps} blocked={true} />);

    const modal = screen.getByTestId('modal');

    const stopPropagationSpy = vi.spyOn(Event.prototype, 'stopPropagation');

    fireEvent.keyDown(modal, { key: 'Escape' });
    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});
