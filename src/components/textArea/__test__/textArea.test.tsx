import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { TextArea } from '../index';
import { ITextArea } from '../types/index';

const mockProps: ITextArea = {
  variant: 'DEFAULT',
  label: { content: 'test' },
  maxLength: 30,
  placeholder: 'placeholder',
  screenReaderTextCount: '',
  onChange: () => null,
  dataTestId: 'textarea-component',
  errorMessage: { content: 'errorMessage' },
};

describe('TextArea component', () => {
  it('should render', () => {
    renderProvider(<TextArea {...mockProps} />);
    const textArea = screen.getByTestId(mockProps.dataTestId + 'TextArea');
    expect(textArea).toBeInTheDocument();
  });

  it('can have a value', () => {
    renderProvider(<TextArea {...mockProps} value="textArea" />);
    const textArea = screen.getByText('textArea');
    expect(textArea).toBeInTheDocument();
  });

  it('when error, errorMessage should be shown', () => {
    renderProvider(<TextArea {...mockProps} error />);
    const errorMessage = screen.getByText(mockProps.errorMessage?.content as string);
    expect(errorMessage).toBeInTheDocument();
  });

  it('when disabled, no error should be shown', () => {
    renderProvider(<TextArea {...mockProps} disabled error />);
    const errorMessage = screen.queryByText(mockProps.errorMessage?.content as string);
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('when disabled, it can have a value', () => {
    renderProvider(<TextArea {...mockProps} disabled value="textArea" />);
    const textArea = screen.getByText('textArea');
    expect(textArea).toBeInTheDocument();
  });

  it('can be focus', async () => {
    const onFocus = jest.fn();
    renderProvider(<TextArea {...mockProps} onFocus={onFocus} />);
    const textArea = screen.getByRole(ROLES.TEXTBOX);
    await fireEvent.focus(textArea);
    expect(onFocus).toHaveBeenCalled();
  });

  it('can be blur', async () => {
    const onBlur = jest.fn();
    renderProvider(<TextArea {...mockProps} onBlur={onBlur} />);
    const textArea = screen.getByRole(ROLES.TEXTBOX);
    await fireEvent.blur(textArea);
    expect(onBlur).toHaveBeenCalled();
  });

  it('can have a title', () => {
    renderProvider(<TextArea {...mockProps} title={{ content: 'title' }} />);
    const title = screen.getByText('title');
    expect(title).toBeInTheDocument();
  });

  it('can have a help message', () => {
    renderProvider(<TextArea {...mockProps} helpMessage={{ content: 'helpMessage' }} />);
    const helpMessage = screen.getByText('helpMessage');
    expect(helpMessage).toBeInTheDocument();
  });

  it('when click on textarea container, textarea should be focus', async () => {
    const onFocus = jest.fn();
    renderProvider(<TextArea {...mockProps} onFocus={onFocus} />);
    const textArea = screen.getByRole(ROLES.TEXTBOX);
    if (textArea.parentElement) {
      await fireEvent.click(textArea.parentElement);
    }
    expect(onFocus).toHaveBeenCalled();
  });
});
