import userEvent from '@testing-library/user-event';

import { act, fireEvent } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ButtonStateType } from '@/components/button';
import { IconHighlightedType } from '@/components/iconHighlighted';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { InputUnControlled as Input } from '../inputUnControlled';
import { InputIconPosition, MASK_TYPE } from '../types';

const commonProps = {
  variant: 'DEFAULT',
  name: 'username',
  label: { content: 'Username' },
  informationAssociatedValue: { content: 'Value InfoAssociated' },
  dataTestId: 'test',
  onChange: jest.fn(),
  value: 'value',
};

function backspace(element) {
  let actuallyTyped = element.value;

  const backspaceKey = {
    key: 'Backspace',
    code: 8,
    inputType: 'deleteContentBackward',
  };

  const sharedEventConfig = {
    key: backspaceKey.key,
    charCode: backspaceKey.code,
    keyCode: backspaceKey.code,
    which: backspaceKey.code,
  };

  const downEvent = fireEvent.keyDown(element, sharedEventConfig);

  if (downEvent) {
    actuallyTyped = actuallyTyped.slice(0, -1);

    fireEvent.input(element, {
      target: { value: actuallyTyped },
      inputType: backspaceKey.inputType,
      bubbles: true,
      cancelable: true,
    });
  }

  fireEvent.keyUp(element, sharedEventConfig);
}

const writeText = jest.fn();

// eslint-disable-next-line n/no-unsupported-features/node-builtins
Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

const format = {
  maximumFractionDigits: 3,
  minimumFractionDigits: 1,
};

describe('New Input Component', () => {
  it('Should always have an accessible label', async () => {
    const { container, getByRole } = renderProvider(
      <Input {...commonProps} formatNumber={format} />
    );

    const input = getByRole('textbox', { name: commonProps.label.content });
    expect(input).toHaveAccessibleName(commonProps.label.content);

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should have a secondaryLabel and additionalInfo', async () => {
    const { container, getByRole, getByText } = renderProvider(
      <Input
        {...commonProps}
        additionalInfo={<span>Tooltip</span>}
        required={false}
        secondaryLabel={<span>Secondary</span>}
      />
    );

    const input = getByRole('textbox', { name: `${commonProps.label.content} Secondary` });
    expect(input).toHaveAccessibleName(`${commonProps.label.content} Secondary`);

    const additionalInfo = getByText('Tooltip');
    expect(additionalInfo).toBeInTheDocument();

    const secondaryLabel = getByText('Secondary');
    expect(secondaryLabel).toBeInTheDocument();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should display an accessible placeholder if provided', async () => {
    const accessiblePlaceholder = 'Peter Smith';

    const { container, getByPlaceholderText } = renderProvider(
      <Input {...commonProps} placeholder={accessiblePlaceholder} />
    );

    const input = getByPlaceholderText(accessiblePlaceholder);
    expect(input).toBeInTheDocument();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should provide visual and non-visual feedback when an input is required', async () => {
    const RequiredSymbol = () => <b>* required</b>;

    const { container, getByRole, getByText } = renderProvider(
      <Input
        {...commonProps}
        required
        label={{ ...commonProps.label, requiredSymbol: <RequiredSymbol /> }}
      />
    );

    const input = getByRole('textbox', { name: commonProps.label.content });
    const requiredSymbol = getByText(/required/);

    expect(input).toBeRequired();
    expect(requiredSymbol).toBeInTheDocument();

    // A11Y and w3c validator
    const results = await axe(container);
    // attribute-boolean-style off for "required" attribute
    expect(container).toHTMLValidate({
      rules: {
        'attribute-boolean-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should call onLeftIconClick when user click on left icon', async () => {
    const onIconClick = jest.fn();
    const { container, getByRole } = renderProvider(
      <Input
        {...commonProps}
        leftIcon={{ icon: 'UNICORN', altText: 'Open Info', onClick: onIconClick }}
        placeholder={'placeholder'}
      />
    );

    const triggerButton = getByRole('button', { name: 'Open Info' });
    fireEvent.click(triggerButton);
    expect(onIconClick).toHaveBeenCalled();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should call onRightIconClick when user click on right icon', async () => {
    const onIconClick = jest.fn();
    const { container, getByRole } = renderProvider(
      <Input
        {...commonProps}
        placeholder={'placeholder'}
        rightIcon={{ icon: 'UNICORN', altText: 'Open Info', onClick: onIconClick }}
      />
    );

    const triggerButton = getByRole('button', { name: 'Open Info' });
    fireEvent.click(triggerButton);
    expect(onIconClick).toHaveBeenCalled();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should be autoformated the text with mask', async () => {
    const onChange = jest.fn();
    const { container, getByRole } = renderProvider(
      <Input {...commonProps} mask="##/##/####" maskType={MASK_TYPE.NUMBERS} onChange={onChange} />
    );

    const input = getByRole('textbox', { name: commonProps.label.content }) as HTMLInputElement;
    await userEvent.type(input, '1234a5678');
    backspace(input);
    expect(input.value).toBe('12/34/567');
    expect(onChange).toHaveBeenCalled();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should be called onKeyDown', async () => {
    const onKeyDown = jest.fn();
    const { container, getByRole } = renderProvider(
      <Input
        {...commonProps}
        mask="## - ##"
        maskType={MASK_TYPE.LETTERS}
        value=""
        onKeyDown={onKeyDown}
      />
    );

    const input = getByRole('textbox', { name: commonProps.label.content }) as HTMLInputElement;
    fireEvent.keyDown(input, { key: 'a', code: 'a', keyCode: 67, charCode: 67 });
    await userEvent.type(input, '12MAES');

    expect(input.value).toBe('MA - ES');
    expect(onKeyDown).toHaveBeenCalled();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should manage focus and blur', async () => {
    const { container, getByRole } = renderProvider(<Input {...commonProps} />);
    const input = getByRole('textbox', { name: commonProps.label.content }) as HTMLInputElement;
    act(() => input.focus());
    expect(input).toHaveFocus();
    act(() => input.blur());
    expect(input).not.toHaveFocus();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should allow to be disabled without value', async () => {
    const { container, getByRole } = renderProvider(<Input {...commonProps} disabled value={''} />);

    const input = getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('');
    expect(input).toBeDisabled();

    // A11Y and w3c validator
    const results = await axe(container);
    // attribute-boolean-style off for "disabled" attribute
    expect(container).toHTMLValidate({
      rules: {
        'attribute-boolean-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should allow to be disabled with value', async () => {
    const { container, getByRole } = renderProvider(
      <Input {...commonProps} disabled value={'test'} />
    );
    const input = getByRole('textbox') as HTMLInputElement;
    expect(input).toBeDisabled();

    // A11Y and w3c validator
    const results = await axe(container);
    // attribute-boolean-style off for "disabled" attribute
    expect(container).toHTMLValidate({
      rules: {
        'attribute-boolean-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When error, should allow to show an error message', async () => {
    const informationAssociatedConfig = {
      informationAssociatedButton: undefined,
      iconInformationAssociatedConfig: undefined,
      informationAssociatedValue: undefined,
      informationAssociatedIcon: undefined,
    };
    const { container, getByText, getByLabelText } = renderProvider(
      <Input
        {...commonProps}
        {...informationAssociatedConfig}
        error
        errorIcon={{ icon: 'ERROR', altText: 'Error alt text' }}
        errorMessage={{ content: 'ERROR' }}
      />
    );

    const errorMessage = getByText('ERROR');
    expect(errorMessage).toBeInTheDocument();

    const errorIcon = getByLabelText('Error alt text');
    expect(errorIcon).toBeInTheDocument();
    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show input with loader', async () => {
    const { container, getByTestId } = renderProvider(
      <Input {...commonProps} loading loader={{ altText: 'loader alt text' }} />
    );

    const loaderVariant = getByTestId('loaderStandaloneTestId');
    expect(loaderVariant).toBeDefined();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show input without loader', async () => {
    const { container, queryByRole } = renderProvider(<Input {...commonProps} />);

    expect(queryByRole('img')).toBeNull();
    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Input can have a helpMessage', async () => {
    const { container, getByText } = renderProvider(
      <Input {...commonProps} helpMessage={{ content: 'helpMessage' }} />
    );

    const helpMessage = getByText('helpMessage');
    expect(helpMessage).toBeInTheDocument();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Input can have a title', async () => {
    const { container, getByText } = renderProvider(
      <Input {...commonProps} title={{ content: 'title' }} />
    );

    const title = getByText('title');
    expect(title).toBeInTheDocument();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show left icon as img instead of as button', async () => {
    const iconClick = jest.fn();
    const { container, getByRole } = renderProvider(
      <Input
        {...commonProps}
        leftIcon={{ icon: 'UNICORN', altText: 'Open Info', onClick: iconClick }}
        placeholder={'placeholder'}
      />
    );

    const triggerButton = getByRole('button', { name: 'Open Info' });
    expect(triggerButton).toBeInTheDocument();

    fireEvent.click(triggerButton);

    expect(iconClick).toHaveBeenCalled();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should show right icon as img instead of as button', async () => {
    const iconClick = jest.fn();
    const { container, getByRole } = renderProvider(
      <Input
        {...commonProps}
        placeholder={'placeholder'}
        rightIcon={{ icon: 'UNICORN', altText: 'Open Info', onClick: iconClick }}
      />
    );

    const triggerButton = getByRole('button', { name: 'Open Info' });
    expect(triggerButton).toBeInTheDocument();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should have a textCount', async () => {
    const { container, getByText } = renderProvider(
      <Input {...commonProps} textCounter={<span>Count</span>} />
    );

    const count = getByText('Count');
    expect(count).toBeInTheDocument();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('call onCopy and onPaste functions', async () => {
    const { container, getByRole } = renderProvider(
      <Input {...commonProps} disabledCopyAndPaste value="Value" />
    );

    const input = getByRole('textbox', { name: commonProps.label.content });

    fireEvent.copy(input);
    fireEvent.paste(input);

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Expect a null label', async () => {
    const { container, queryByRole } = renderProvider(<Input {...commonProps} label={undefined} />);

    const label = queryByRole('label');

    expect(label).toBeNull();

    // A11Y and w3c validator
    expect(container).toHTMLValidate();
  });

  it('Show informationAssociated with button and IconHighlighted', async () => {
    const iconHighlightedInformationAssociatedConfig = {
      icon: 'UNICORN',
      altText: 'unicorn alt text',
      type: IconHighlightedType.INFORMATIVE,
      position: InputIconPosition.LEFT,
    };
    const buttonInformationAssociatedConfig = {
      content: 'TextButton',
      state: ButtonStateType.DEFAULT,
      onClick: jest.fn(),
    };
    const { container, getByLabelText, getByText } = renderProvider(
      <Input
        {...commonProps}
        error={true}
        highlightedInformationAssociatedIcon={iconHighlightedInformationAssociatedConfig}
        informationAssociatedButton={buttonInformationAssociatedConfig}
        value={'Input to show information associated'}
      />
    );

    const iconInfoAssociated = getByLabelText(iconHighlightedInformationAssociatedConfig.altText);
    const valueInfoAssociated = getByText(commonProps.informationAssociatedValue.content);
    const buttonInfoAssociated = getByText('TextButton');

    expect(iconInfoAssociated).toBeInTheDocument();
    expect(valueInfoAssociated).toBeInTheDocument();
    expect(buttonInfoAssociated).toBeInTheDocument();

    fireEvent.click(buttonInfoAssociated);
    expect(buttonInformationAssociatedConfig.onClick).toHaveBeenCalled();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
