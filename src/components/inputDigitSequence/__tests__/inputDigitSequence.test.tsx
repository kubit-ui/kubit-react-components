import userEvent from '@testing-library/user-event';

import { act, fireEvent } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { ROLES } from '@/types';

import { InputDigitSequence } from '../index';

const MOCK_PROPS = {
  variant: 'DEFAULT',
  title: { content: 'Label' },
  actionButton: {
    variant: 'ACTION_SECONDARY_ALT',
    icon: { icon: 'CARD_DETAIL' },
    content: 'Show code',
    ['aria-label']: 'aria-label test',
  },
  errorText: { content: 'This is the error text' },
  errorIcon: { icon: 'ERROR', altText: 'Alt text error icon' },
  inputsArray: [
    { blockedBySystem: false, ['aria-label']: 'input1' },
    { blockedBySystem: false, ['aria-label']: 'input2' },
    { blockedBySystem: true, ['aria-label']: 'input3' },
    { blockedBySystem: true, ['aria-label']: 'input4' },
    { blockedBySystem: false, ['aria-label']: 'input5' },
    { blockedBySystem: true, ['aria-label']: 'input6' },
    { blockedBySystem: true, ['aria-label']: 'input7' },
    { blockedBySystem: true, ['aria-label']: 'input8' },
  ],
};

window.matchMedia = windowMatchMedia();

describe('InputDigitSequence component', () => {
  it('Should render InputDigitSequence', async () => {
    const { getByText, container } = renderProvider(<InputDigitSequence {...MOCK_PROPS} />);

    expect(getByText('Label')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Could have a help text', async () => {
    const { getByText, container } = renderProvider(
      <InputDigitSequence {...MOCK_PROPS} helpText={{ content: 'Help text' }} />
    );

    expect(getByText('Help text')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Could have a tooltip icon', async () => {
    const { getByAltText, container } = renderProvider(
      <InputDigitSequence
        {...MOCK_PROPS}
        tooltipIcon={{ icon: 'ICON_PLACEHOLDER', altText: 'Tooltip icon' }}
      />
    );

    expect(getByAltText('Tooltip icon')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Could have a tooltip allong with the icon', async () => {
    const { getByAltText, container } = renderProvider(
      <InputDigitSequence
        {...MOCK_PROPS}
        tooltip={{
          variant: 'DEFAULT',
          title: { content: 'Tooltip title' },
          tooltipAsModal: false,
        }}
        tooltipIcon={{ icon: 'ICON_PLACEHOLDER', altText: 'Tooltip icon' }}
      />
    );

    expect(getByAltText('Tooltip icon')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When animated, input-container-animated container is shown', () => {
    const { container } = renderProvider(<InputDigitSequence {...MOCK_PROPS} animated />);

    const element = container.querySelector('[data-id="input-container-animated"]');
    expect(element).toBeInTheDocument();
  });

  it('OnClick actionButton', async () => {
    const callbackOnClickActionButton = jest.fn();
    const { getByRole, container } = renderProvider(
      <InputDigitSequence
        {...MOCK_PROPS}
        actionButton={{ ...MOCK_PROPS.actionButton, onClick: callbackOnClickActionButton }}
      />
    );

    const triggerButton = getByRole('button', { name: MOCK_PROPS.actionButton['aria-label'] });
    await act(async () => {
      fireEvent.click(triggerButton);
    });

    expect(callbackOnClickActionButton).toHaveBeenCalled();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Write input sequence going to next input available after write and called callback', async () => {
    const callbackOnChangeInput = jest.fn();
    const { getByLabelText, container } = renderProvider(
      <InputDigitSequence {...MOCK_PROPS} onInputChange={callbackOnChangeInput} />
    );

    const input1 = getByLabelText('input1') as HTMLInputElement;
    await act(async () => {
      await userEvent.type(input1, '789');
    });

    const input2 = getByLabelText('input2') as HTMLInputElement;
    const input3 = getByLabelText('input3') as HTMLInputElement;
    const input4 = getByLabelText('input4') as HTMLInputElement;
    const input5 = getByLabelText('input5') as HTMLInputElement;
    const input6 = getByLabelText('input6') as HTMLInputElement;
    const input7 = getByLabelText('input7') as HTMLInputElement;
    const input8 = getByLabelText('input8') as HTMLInputElement;

    expect(input1.value).toBe('7');
    expect(input2.value).toBe('8');
    expect(input3.value).toBe('');
    expect(input4.value).toBe('');
    expect(input5.value).toBe('9');
    expect(input6.value).toBe('');
    expect(input7.value).toBe('');
    expect(input8.value).toBe('');

    expect(callbackOnChangeInput).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Write input sequence going to next input available after write and called callback with showDigitAfterWrite=false', async () => {
    const callbackOnChangeInput = jest.fn();
    const { getByLabelText, container } = renderProvider(
      <InputDigitSequence
        {...MOCK_PROPS}
        showDigitAfterWrite={false}
        onInputChange={callbackOnChangeInput}
      />
    );

    const input1 = getByLabelText('input1') as HTMLInputElement;
    await act(async () => {
      await userEvent.type(input1, '789');
    });

    const input2 = getByLabelText('input2') as HTMLInputElement;
    const input3 = getByLabelText('input3') as HTMLInputElement;
    const input4 = getByLabelText('input4') as HTMLInputElement;
    const input5 = getByLabelText('input5') as HTMLInputElement;
    const input6 = getByLabelText('input6') as HTMLInputElement;
    const input7 = getByLabelText('input7') as HTMLInputElement;
    const input8 = getByLabelText('input8') as HTMLInputElement;

    expect(input1.value).toBe('7');
    expect(input2.value).toBe('8');
    expect(input3.value).toBe('');
    expect(input4.value).toBe('');
    expect(input5.value).toBe('9');
    expect(input6.value).toBe('');
    expect(input7.value).toBe('');
    expect(input8.value).toBe('');

    expect(callbackOnChangeInput).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('InputDigitSequence error', async () => {
    const { getByRole, queryByText, container } = renderProvider(
      <InputDigitSequence {...MOCK_PROPS} error={true} />
    );

    const error = queryByText(MOCK_PROPS.errorText.content);
    const errorIcon = getByRole(ROLES.IMG, { name: MOCK_PROPS.errorIcon.altText });

    expect(error).toBeInTheDocument();
    expect(errorIcon).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('InputDigitSequence disabled', async () => {
    const { getByLabelText, container } = renderProvider(
      <InputDigitSequence {...MOCK_PROPS} disabled={true} />
    );

    const input1 = getByLabelText('input1') as HTMLInputElement;
    await act(async () => {
      await userEvent.type(input1, '789');
    });

    const input2 = getByLabelText('input2') as HTMLInputElement;
    const input3 = getByLabelText('input3') as HTMLInputElement;
    expect(input1.value).toBe('');
    expect(input2.value).toBe('');
    expect(input3.value).toBe('');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
