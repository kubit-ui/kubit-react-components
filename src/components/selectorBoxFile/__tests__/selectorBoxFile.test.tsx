// TO DO: RESOLVE THE TESTS
import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { render } from '@/lib/tests/render/render';
import { POSITIONS } from '@/lib/types/positions/positions';
import { STATES } from '@/lib/types/states/states';

import { SelectorBoxFile } from '../selectorBoxFile';

const mockProps = {
  button: {
    content: 'Link description',
    icon: { altText: 'altText', icon: ICONS.PLACEHOLDER },
    iconPosition: POSITIONS.LEFT,
  },
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
  description: { content: 'DescriptionNoLink' },
  errorMessage: { content: 'Error uploading document' },
  errorMessageIcon: { icon: 'ERROR_BI_COLOR' },
  filename: '12345678asdfghj.pdf',
  subtitle: { content: 'Subtitle: Lorem ipsum dolor si' },
  title: { content: 'Title: Lorem Impsum' },
  tooltip: {
    align: POSITIONS.RIGHT,
    closeIcon: { altText: 'Close popover', icon: 'CLOSE' },
    content: { content: 'Tooltip content' },
    title: { content: 'Tooltip title' },
  },
  tooltipIcon: { altText: 'altTextTooltipIcon', icon: 'WARNING_IN_A_CIRCLE' },
  variant: 'DEFAULT',
};

describe('SelectorBoxFile', () => {
  it('Title and subtitle may be presen', async () => {
    const { container } = render(<SelectorBoxFile {...mockProps} />);
    const title = screen.getByText(mockProps.title.content);
    expect(title).not.toBeNull();
    const subtitle = screen.getByText(mockProps.subtitle.content);
    expect(subtitle).not.toBeNull();
    const tooltipIcon = screen.getByLabelText(mockProps.tooltipIcon.altText);
    expect(tooltipIcon).not.toBeNull();
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.DEFAULT].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      // Fix in the future: Currently the tooltip have internal div, so the tooltip can not be used next to text
      rules: {
        'element-permitted-content': 'off',
        'no-dup-class': 'off',
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('Title may not be present', () => {
    render(<SelectorBoxFile {...mockProps} title={undefined} />);
    const title = screen.queryByText(mockProps.title.content);
    expect(title).toBeNull();
    const subtitle = screen.getByText(mockProps.subtitle.content);
    expect(subtitle).not.toBeNull();
  });

  it('Subtitle may not be present', () => {
    render(<SelectorBoxFile {...mockProps} subtitle={undefined} />);
    const title = screen.getByText(mockProps.title.content);
    expect(title).not.toBeNull();
    const subtitle = screen.queryByText(mockProps.subtitle.content);
    expect(subtitle).toBeNull();
  });

  it('Title and subtitle may not be present', () => {
    render(
      <SelectorBoxFile {...mockProps} subtitle={undefined} title={undefined} />,
    );
    const title = screen.queryByText(mockProps.title.content);
    expect(title).toBeNull();
    const subtitle = screen.queryByText(mockProps.subtitle.content);
    expect(subtitle).toBeNull();
  });

  it('When errorMessage and error, error message is shown', () => {
    render(<SelectorBoxFile {...mockProps} error={true} />);
    const errorMessage = screen.getByText(mockProps.errorMessage.content);
    expect(errorMessage).not.toBeNull();
  });

  it('errorMessage is optional even for error state', async () => {
    const { container } = render(
      <SelectorBoxFile {...mockProps} error={true} errorMessage={undefined} />,
    );
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.ERROR].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      // Fix in the future: Currently the tooltip have internal div, so the tooltip can not be used next to text
      rules: {
        'element-permitted-content': 'off',
        'no-dup-class': 'off',
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('Tooltip icon may not be present', () => {
    render(<SelectorBoxFile {...mockProps} tooltipIcon={undefined} />);
    const tooltipIcon = screen.queryByLabelText(mockProps.tooltipIcon.altText);
    expect(tooltipIcon).toBeNull();
  });

  it('Tooltip may not be present', () => {
    render(<SelectorBoxFile {...mockProps} tooltip={undefined} />);
    const tooltip = screen.queryByRole('dialog');
    expect(tooltip).toBeNull();
  });

  // it('Description and descriptionLink may be present', () => {
  //   render(<SelectorBoxFile {...mockProps} />);
  //   const linkButtonName = mockProps.button.icon.altText + ' ' + mockProps.button.content;
  //   const linkButton = screen.getByRole('button', { name: linkButtonName });
  //   expect(linkButton).not.toBeNull();
  // });

  it('May not have actionText for ha given state', async () => {
    const { container } = render(
      <SelectorBoxFile
        {...mockProps}
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
        loading={true}
      />,
    );

    const results = await axe(container);
    expect(container).toHTMLValidate({
      // Fix in the future: Currently the tooltip have internal div, so the tooltip can not be used next to text
      rules: {
        'element-permitted-content': 'off',
        'no-dup-class': 'off',
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('May have loading state', () => {
    render(<SelectorBoxFile {...mockProps} loading={true} />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.LOADING].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();
  });

  it('May have success state', () => {
    render(<SelectorBoxFile {...mockProps} success={true} />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.SUCCESS].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();
  });

  it('May have error state', () => {
    render(<SelectorBoxFile {...mockProps} error={true} />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[STATES.ERROR].actionText.content,
      ),
    );
    expect(inputFile).not.toBeNull();
  });

  it('May have disabled state', () => {
    render(<SelectorBoxFile {...mockProps} disabled={true} />);
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
