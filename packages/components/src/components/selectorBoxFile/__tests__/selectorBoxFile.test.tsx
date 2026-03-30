import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';
import { STATES } from '@/lib/types/states/states';

import { SelectorBoxFile } from '../selectorBoxFile';

const mockProps = {
  containerBoxStateContent: {
    [STATES.DEFAULT]: {
      actionText: { content: 'Browse and select a file' },
      descriptionText: { content: 'and upload it here' },
      icon: { icon: 'UPLOAD' },
    },
    [STATES.DISABLED]: {
      actionText: { content: 'Browse and select a file' },
      descriptionText: { content: 'and upload it here' },
      icon: { icon: 'UPLOAD' },
    },
    [STATES.ERROR]: {
      actionText: { content: 'Try again' },
      icon: { icon: 'RENOVATION' },
    },
    [STATES.LOADING]: {
      actionText: { content: 'Cancel upload' },
      icon: { icon: 'UPLOAD' },
    },
    [STATES.SUCCESS]: {
      actionText: { content: 'Delete file' },
      icon: { icon: 'CHECKMARK' },
    },
  },
  filename: '12345678asdfghj.pdf',
  variant: 'DEFAULT',
};

describe('SelectorBoxFile', () => {
  it('Should render the component with the containerBoxStateContent', async () => {
    const { container } = render(<SelectorBoxFile {...mockProps} />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.DEFAULT].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-dup-class': 'off',
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('May not have actionText for a given state', async () => {
    const { container } = render(
      <SelectorBoxFile
        {...mockProps}
        loading
        containerBoxStateContent={{
          ...mockProps.containerBoxStateContent,
          [STATES.LOADING]: {
            actionText: undefined,
            description: { content: 'descriptionText' },
            icon: {
              ...mockProps.containerBoxStateContent[STATES.LOADING].icon,
              altText: 'iconAltText',
            },
          },
        }}
      />,
    );

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-dup-class': 'off',
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('May have loading state', () => {
    render(<SelectorBoxFile {...mockProps} loading />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.LOADING].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();
  });

  it('May have success state', () => {
    render(<SelectorBoxFile {...mockProps} success />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.SUCCESS].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();
  });

  it('May have error state', () => {
    render(<SelectorBoxFile {...mockProps} error />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.ERROR].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();
  });

  it('May have disabled state', () => {
    render(<SelectorBoxFile {...mockProps} disabled />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.DISABLED].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();
  });

  it('May focus and on blur on the input', () => {
    // Test only ussed to increase test coverage
    // onFocus and onBlur only change styles
    render(<SelectorBoxFile {...mockProps} />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.DEFAULT].actionText.content,
      ),
    );
    fireEvent.focus(inputFile);
    fireEvent.blur(inputFile);
    expect(inputFile).not.toBeNull();
  });

  it('When onChange and fileExtension is not valid, onFileError should be called', () => {
    const onFileError = vi.fn();
    render(
      <SelectorBoxFile
        {...mockProps}
        fileExtension={['pdf']}
        onFileError={onFileError}
      />,
    );
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.DEFAULT].actionText.content,
      ),
    );
    const file = new File([''], 'filename.jpg');
    fireEvent.change(inputFile, { target: { files: [file] } });
    expect(onFileError).toHaveBeenCalled();
  });

  it('When onChange and maxSize is not valid, onSizeError should be called', () => {
    const onSizeError = vi.fn();
    render(
      <SelectorBoxFile
        {...mockProps}
        maxSize={0.000001}
        onSizeError={onSizeError}
      />,
    );
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.DEFAULT].actionText.content,
      ),
    );
    const file = new File(['0123456789'], 'filename.jpg');
    fireEvent.change(inputFile, { target: { files: [file] } });
    expect(onSizeError).toHaveBeenCalled();
  });

  it('When onChange and no files, onSizeError nor onFileError should not be called', () => {
    const onSizeError = vi.fn();
    const onFileError = vi.fn();
    render(
      <SelectorBoxFile
        {...mockProps}
        onFileError={onFileError}
        onSizeError={onSizeError}
      />,
    );
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.DEFAULT].actionText.content,
      ),
    );

    fireEvent.change(inputFile, { target: { files: [] } });
    expect(onSizeError).not.toHaveBeenCalled();
    expect(onFileError).not.toHaveBeenCalled();
  });

  it('May not render animation containers', () => {
    const dataTestId = 'selectorBoxFileAnimations';
    const { queryByTestId } = render(<SelectorBoxFile {...mockProps} />);
    expect(queryByTestId(dataTestId)).toBeNull();
  });
});
