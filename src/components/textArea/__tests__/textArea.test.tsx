import { fireEvent, screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';
import { processText } from '@/lib/utils/process/processText/processText';

import { TextArea } from '../textArea';
import type { TextAreaProps } from '../types/textArea';

const mockProps: TextAreaProps = {
  counterVariant: 'DEFAULT',
  'data-testid': 'textarea-component',
  errorMessage: { content: 'errorMessage' },
  label: 'textAreaLabel',
  maxLength: 30,
  onChange: () => null,
  placeholder: 'placeholder',
  screenReaderTextCount: '',
  variant: 'DEFAULT',
};

describe('TextArea component', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<TextArea {...mockProps} />);
    const textArea = screen.getByTestId(mockProps['data-testid'] as string);
    expect(textArea).not.toBeNull();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('can have a value', () => {
    const { container } = render(<TextArea {...mockProps} value="textArea" />);
    const textArea = screen.getByText('textArea');
    expect(textArea).not.toBeNull();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('when error, errorMessage should be shown', () => {
    const { container } = render(<TextArea {...mockProps} error={true} />);
    const errorMessage = screen.getByText(
      processText(mockProps.errorMessage).children as string,
    );
    expect(errorMessage).not.toBeNull();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('when disabled, no error should be shown', () => {
    const { container } = render(
      <TextArea {...mockProps} disabled={true} error={true} />,
    );
    const errorMessage = screen.queryByText(
      processText(mockProps.errorMessage).children as string,
    );
    expect(errorMessage).toBeNull();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('when disabled, it can have a value', () => {
    const { container } = render(
      <TextArea {...mockProps} disabled={true} value="textArea" />,
    );
    const textArea = screen.getByText('textArea');
    expect(textArea).not.toBeNull();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('can be focus', async () => {
    const onFocus = vi.fn();
    const { container } = render(<TextArea {...mockProps} onFocus={onFocus} />);
    const textArea = screen.getByRole('textbox');
    await fireEvent.focus(textArea);
    expect(onFocus).toHaveBeenCalled();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('can be blur', async () => {
    const onBlur = vi.fn();
    const { container } = render(<TextArea {...mockProps} onBlur={onBlur} />);
    const textArea = screen.getByRole('textbox');
    await fireEvent.blur(textArea);
    expect(onBlur).toHaveBeenCalled();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('can have a title', () => {
    const { container } = render(
      <TextArea {...mockProps} title={{ content: 'title' }} />,
    );
    const title = screen.getByText('title');
    expect(title).not.toBeNull();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('can have a help message', () => {
    const { container } = render(
      <TextArea {...mockProps} helpMessage={{ content: 'helpMessage' }} />,
    );
    const helpMessage = screen.getByText('helpMessage');
    expect(helpMessage).not.toBeNull();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });

  it('when click on textarea container, textarea should be focus', async () => {
    const onFocus = vi.fn();
    const { container } = render(<TextArea {...mockProps} onFocus={onFocus} />);
    const textArea = screen.getByRole('textbox');
    if (textArea.parentElement) {
      await fireEvent.click(textArea.parentElement);
    }
    expect(onFocus).toHaveBeenCalled();
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
  });
});
