import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ICONS } from '@/assets';
import { IconPositionType } from '@/components/button';
import { TooltipAlignType } from '@/components/tooltip';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { SelectorBoxFile } from '../selectorBoxFile';
import { SelectorBoxFileStateType } from '../types';

const mockProps = {
  variant: 'DEFAULT',
  title: { content: 'Title: Lorem Impsum' },
  subtitle: { content: 'Subtitle: Lorem ipsum dolor sit' },
  tooltipIcon: { icon: 'WARNING_IN_A_CIRCLE', altText: 'altTextTooltipIcon' },
  tooltip: {
    align: TooltipAlignType.RIGHT,
    title: { content: 'Tooltip title' },
    content: { content: 'Tooltip content' },
    closeIcon: { icon: 'CLOSE', altText: 'Close popover' },
  },
  containerBoxStateContent: {
    [SelectorBoxFileStateType.DEFAULT]: {
      icon: { icon: 'UPLOAD' },
      actionText: { content: 'Browse and select a file' },
      descriptionText: { content: 'and upload it here' },
    },
    [SelectorBoxFileStateType.LOADING]: {
      icon: { icon: 'UPLOAD' },
      actionText: { content: 'Cancel upload' },
    },
    [SelectorBoxFileStateType.SUCCESS]: {
      icon: { icon: 'CHECKMARK' },
      actionText: { content: 'Delete file' },
    },
    [SelectorBoxFileStateType.ERROR]: {
      icon: { icon: 'RENOVATION' },
      actionText: { content: 'Try again' },
    },
    [SelectorBoxFileStateType.DISABLED]: {
      icon: { icon: 'UPLOAD' },
      actionText: { content: 'Browse and select a file' },
      descriptionText: { content: 'and upload it here' },
    },
  },
  filename: '12345678asdfghj.pdf',
  errorMessageIcon: { icon: 'ERROR_BI_COLOR' },
  errorMessage: { content: 'Error uploading document' },
  description: { content: 'DescriptionNoLink' },
  button: {
    content: 'Link description',
    icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'altText' },
    iconPosition: IconPositionType.LEFT,
  },
};

describe('SelectorBoxFile', () => {
  it('Title and subtitle may be present', async () => {
    const { container } = renderProvider(<SelectorBoxFile {...mockProps} />);
    const title = screen.getByText(mockProps.title.content);
    expect(title).toBeInTheDocument();
    const subtitle = screen.getByText(mockProps.subtitle.content);
    expect(subtitle).toBeInTheDocument();
    const tooltipIcon = screen.getByAltText(mockProps.tooltipIcon.altText);
    expect(tooltipIcon).toBeInTheDocument();
    const inputFile = screen.getByLabelText(
      new RegExp(mockProps.containerBoxStateContent.DEFAULT.actionText.content)
    );
    expect(inputFile).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      // Fix in the future: Currently the tooltip have internal div, so the tooltip can not be used next to text
      rules: {
        'element-permitted-content': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Title may not be present', () => {
    renderProvider(<SelectorBoxFile {...mockProps} title={undefined} />);
    const title = screen.queryByText(mockProps.title.content);
    expect(title).not.toBeInTheDocument();
    const subtitle = screen.getByText(mockProps.subtitle.content);
    expect(subtitle).toBeInTheDocument();
  });

  it('Subtitle may not be present', () => {
    renderProvider(<SelectorBoxFile {...mockProps} subtitle={undefined} />);
    const title = screen.getByText(mockProps.title.content);
    expect(title).toBeInTheDocument();
    const subtitle = screen.queryByText(mockProps.subtitle.content);
    expect(subtitle).not.toBeInTheDocument();
  });

  it('Title and subtitle may not be present', () => {
    renderProvider(<SelectorBoxFile {...mockProps} subtitle={undefined} title={undefined} />);
    const title = screen.queryByText(mockProps.title.content);
    expect(title).not.toBeInTheDocument();
    const subtitle = screen.queryByText(mockProps.subtitle.content);
    expect(subtitle).not.toBeInTheDocument();
  });

  it('When errorMessage and error, error message is shown', () => {
    renderProvider(<SelectorBoxFile {...mockProps} error />);
    const errorMessage = screen.getByText(mockProps.errorMessage.content);
    expect(errorMessage).toBeInTheDocument();
  });

  it('errorMessage is optional even for error state', async () => {
    const { container } = renderProvider(
      <SelectorBoxFile {...mockProps} error errorMessage={undefined} />
    );
    const inputFile = screen.getByLabelText(
      new RegExp(mockProps.containerBoxStateContent.ERROR.actionText.content)
    );
    expect(inputFile).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      // Fix in the future: Currently the tooltip have internal div, so the tooltip can not be used next to text
      rules: {
        'element-permitted-content': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Tooltip icon may not be present', () => {
    renderProvider(<SelectorBoxFile {...mockProps} tooltipIcon={undefined} />);
    const tooltipIcon = screen.queryByLabelText(mockProps.tooltipIcon.altText);
    expect(tooltipIcon).not.toBeInTheDocument();
  });

  it('Tooltip may not be present', () => {
    renderProvider(<SelectorBoxFile {...mockProps} tooltip={undefined} />);
    const tooltip = screen.queryByRole(ROLES.DIALOG);
    expect(tooltip).not.toBeInTheDocument();
    const tooltipIcon = screen.getByAltText(mockProps.tooltipIcon.altText);
    expect(tooltipIcon).toBeInTheDocument();
  });

  it('Description and descriptionLink may be present', () => {
    renderProvider(<SelectorBoxFile {...mockProps} />);
    const linkButtonName = mockProps.button.icon.altText + ' ' + mockProps.button.content;
    const linkButton = screen.getByRole(ROLES.BUTTON, { name: linkButtonName });
    expect(linkButton).toBeInTheDocument();
  });

  it('DescriptionLink may be present without and description', () => {
    renderProvider(<SelectorBoxFile {...mockProps} description={undefined} />);
    const linkButtonName = mockProps.button.icon.altText + ' ' + mockProps.button.content;
    const linkButton = screen.queryByRole(ROLES.BUTTON, { name: linkButtonName });
    expect(linkButton).toBeInTheDocument();
  });

  it('May not have actionText for ha given state', async () => {
    const { container } = renderProvider(
      <SelectorBoxFile
        {...mockProps}
        loading
        containerBoxStateContent={{
          ...mockProps.containerBoxStateContent,
          LOADING: {
            actionText: undefined,
            description: { content: 'descriptionText' },
            icon: { ...mockProps.containerBoxStateContent.LOADING.icon, altText: 'iconAltText' },
          },
        }}
      />
    );

    const results = await axe(container);
    expect(container).toHTMLValidate({
      // Fix in the future: Currently the tooltip have internal div, so the tooltip can not be used next to text
      rules: {
        'element-permitted-content': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('May have loading state', () => {
    renderProvider(<SelectorBoxFile {...mockProps} loading />);
    const inputFile = screen.getByLabelText(
      new RegExp(mockProps.containerBoxStateContent.LOADING.actionText.content)
    );
    expect(inputFile).toBeInTheDocument();
  });

  it('May have success state', () => {
    renderProvider(<SelectorBoxFile {...mockProps} success />);
    const inputFile = screen.getByLabelText(
      new RegExp(mockProps.containerBoxStateContent.SUCCESS.actionText.content)
    );
    expect(inputFile).toBeInTheDocument();
  });

  it('May have error state', () => {
    renderProvider(<SelectorBoxFile {...mockProps} error />);
    const inputFile = screen.getByLabelText(
      new RegExp(mockProps.containerBoxStateContent.ERROR.actionText.content)
    );
    expect(inputFile).toBeInTheDocument();
  });

  it('May have disabled state', () => {
    renderProvider(<SelectorBoxFile {...mockProps} disabled />);
    const inputFile = screen.getByLabelText(
      new RegExp(mockProps.containerBoxStateContent.DISABLED.actionText.content)
    );
    expect(inputFile).toBeInTheDocument();
  });

  it('May focus and on blur on the input', () => {
    // Test only ussed to increase test coverage
    // onFocus and onBlur only change styles
    renderProvider(<SelectorBoxFile {...mockProps} />);
    const inputFile = screen.getByLabelText(
      new RegExp(mockProps.containerBoxStateContent.DEFAULT.actionText.content)
    );
    fireEvent.focus(inputFile);
    fireEvent.blur(inputFile);
    expect(inputFile).toBeInTheDocument();
  });

  it('When onChange and fileExtension is not valid, onFileError should be called', () => {
    const onFileError = jest.fn();
    renderProvider(
      <SelectorBoxFile {...mockProps} fileExtension={['pdf']} onFileError={onFileError} />
    );
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[SelectorBoxFileStateType.DEFAULT].actionText.content
      )
    );
    const file = new File([''], 'filename.jpg');
    fireEvent.change(inputFile, { target: { files: [file] } });
    expect(onFileError).toHaveBeenCalled();
  });

  it('When onChange and maxSize is not valid, onSizeError should be called', () => {
    const onSizeError = jest.fn();
    renderProvider(<SelectorBoxFile {...mockProps} maxSize={0.000001} onSizeError={onSizeError} />);
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[SelectorBoxFileStateType.DEFAULT].actionText.content
      )
    );
    const file = new File(['0123456789'], 'filename.jpg');
    fireEvent.change(inputFile, { target: { files: [file] } });
    expect(onSizeError).toHaveBeenCalled();
  });

  it('When onChange and no files, onSizeError nor onFileError should not be called', () => {
    const onSizeError = jest.fn();
    const onFileError = jest.fn();
    renderProvider(
      <SelectorBoxFile {...mockProps} onFileError={onFileError} onSizeError={onSizeError} />
    );
    const inputFile = screen.getByLabelText(
      new RegExp(
        mockProps.containerBoxStateContent[SelectorBoxFileStateType.DEFAULT].actionText.content
      )
    );

    fireEvent.change(inputFile, { target: { files: [] } });
    expect(onSizeError).not.toHaveBeenCalled();
    expect(onFileError).not.toHaveBeenCalled();
  });
});
