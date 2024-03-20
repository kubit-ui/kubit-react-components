import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { Icon } from '@/components/icon';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType, ROLES } from '@/types';

import { ModalUnControlled as Modal } from '../modalUnControlled';

window.matchMedia = windowMatchMedia();

const mockProps = {
  title: { content: 'title', variant: 'PARAGRAPH_MEDIUM_EXPANDED' },
  onClose: jest.fn(),
  variant: 'DEFAULT',
  open: true,
  footer: {
    variant: 'DEFAULT',
    content: [],
  },
  popover: {
    pressEscapeClose: true,
  },
};

describe('Modal component', () => {
  it('Should render with a valid HTML structure', async () => {
    const { container } = renderProvider(<Modal {...mockProps} ref={jest.fn()} />);

    const modal = screen.getByRole(ROLES.DIALOG);

    expect(modal).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When no variant, should render the component', async () => {
    const { container } = renderProvider(<Modal {...mockProps} variant={undefined} />);

    const modal = screen.getByRole(ROLES.DIALOG);

    expect(modal).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should close the modal when the close icon button is pressed', () => {
    renderProvider(<Modal {...mockProps} closeIcon={{ icon: 'PLUG', altText: 'close modal' }} />);

    const modal = screen.getByRole(ROLES.DIALOG);

    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByRole(ROLES.BUTTON, { name: 'close modal' });
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('Should close the modal when the close text button is pressed', () => {
    renderProvider(
      <Modal
        {...mockProps}
        closeButton={{ content: 'close modal', variant: 'PRIMARY', size: 'MEDIUM' }}
      />
    );

    const modal = screen.getByRole(ROLES.DIALOG);

    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByRole(ROLES.BUTTON, { name: 'close modal' });
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('When no footer variant, should render the component', () => {
    renderProvider(<Modal {...mockProps} footer={{ ...mockProps.footer, variant: undefined }} />);

    const modal = screen.getByRole(ROLES.DIALOG);

    expect(modal).toBeInTheDocument();
  });

  it('Can have custom icons', () => {
    renderProvider(
      <Modal {...mockProps} closeIcon={{ icon: <Icon altText="close_icon" icon="UNICORN" /> }} />
    );

    const closeIcon = screen.getByRole(ROLES.IMG, { name: 'close_icon' });

    expect(closeIcon).toBeInTheDocument();
  });

  it('When title no visible, should have a right html Structure', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { getByText, container } = renderProvider(
      <Modal {...mockProps} title={{ ...mockProps.title, visible: false }} />
    );

    const title = getByText(mockProps.title.content);
    expect(title).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When rendering an illustration, should have a correct html structure', async () => {
    const { container } = renderProvider(
      <Modal {...mockProps} imageIllustrationHeader={{ illustration: 'ILLUSTRATION' }} />
    );

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When rendering an imageHeader, should have a correct html structure', () => {
    renderProvider(<Modal {...mockProps} imageHeader={{ icon: <div>image</div> }} />);

    const img = screen.getByText('image');
    expect(img).toBeInTheDocument();
  });

  it('Modal can be closed using pressing escape', async () => {
    const mockOnClose = jest.fn();
    renderProvider(
      <Modal
        {...mockProps}
        content={<button type="button">testButton</button>}
        dataTestId="modalTestId"
        onClose={mockOnClose}
      />
    );
    const modal = screen.getByTestId('modalTestId');
    const button = screen.getByRole('button');
    expect(button).toHaveFocus();
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
      });
    });
    expect(modal).not.toBeInTheDocument();
  });

  it('Should stop propague the event, when the escape has been pressed from the modal', async () => {
    renderProvider(<Modal {...mockProps} blocked={true} dataTestId="modalTestId" />);

    const modal = screen.getByTestId('modalTestId');

    const stopPropagationSpy = jest.spyOn(Event.prototype, 'stopPropagation');

    fireEvent.keyDown(modal, { key: 'Escape' });
    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});
