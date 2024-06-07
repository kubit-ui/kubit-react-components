import * as React from 'react';

import { axe } from 'jest-axe';

import { IconHighlightedType } from '@/components/iconHighlighted';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

// fixture
import { prefixOptions } from '../fixture/prefixOptions';
import { InputPhone } from '../inputPhone';
import { IInputPhone } from '../types';

const mockProps: IInputPhone = {
  flag: { icon: prefixOptions.flag, altText: 'flag' },
  prefix: { content: prefixOptions.prefix },
  variant: 'DEFAULT',
  name: 'InputPhone',
  dataTestId: 'IPInput',
  label: { content: 'input phone' },
  value: '',
  onChange: jest.fn(),
};

describe('New Input Phone Component', () => {
  it('Should display the component correctly', async () => {
    const { container, getByText, getByTestId } = renderProvider(
      <InputPhone {...mockProps} mask={'###-###-###'} />
    );
    const phoneInput = getByTestId('IPInputInput');
    const prefixBox = getByText(mockProps.prefix?.content as string);

    expect(phoneInput).toBeInTheDocument();
    expect(prefixBox).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should display the component correctly without mask', async () => {
    const { container, getByTestId } = renderProvider(
      <InputPhone {...mockProps} prefixNode="prefixNode" />
    );
    const phoneInput = getByTestId('IPInputInput');

    expect(phoneInput).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Should display the component correctly with affix_out and extraAriaLabelledBy', async () => {
    const { container, getByText, getByTestId, getByAltText } = renderProvider(
      <InputPhone
        {...mockProps}
        extraAriaLabelledBy={'ExtraAria'}
        flag={{ ...mockProps.flag, type: IconHighlightedType.INFORMATIVE }}
        mask={'###-###-###'}
        variant="AFFIX_OUT"
      />
    );
    const phoneInput = getByTestId('IPInputInput');
    const prefixBox = getByText(mockProps.prefix?.content as string);

    expect(phoneInput).toBeInTheDocument();
    expect(prefixBox).toBeInTheDocument();

    const flag = getByAltText('flag');
    expect(flag).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
