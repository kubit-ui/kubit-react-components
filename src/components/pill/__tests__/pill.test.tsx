import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { Icon } from '@/components/icon';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { PillUnControlled as Pill } from '../pillUnControlled';

const mockProps = {
  variant: 'DEFAULT',
  size: 'LARGE',
  dataTestId: 'pillComponent',
  label: { content: 'label' },
};

describe('Pill component', () => {
  it('render', async () => {
    const { container } = renderProvider(<Pill {...mockProps}>Pill</Pill>);

    const pill = screen.getByText('Pill');

    expect(pill).toBeInTheDocument();

    // Axe validations
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render a decorative icon when provider', async () => {
    const { container } = renderProvider(
      <Pill
        {...mockProps}
        decorativeIcon={{ icon: <Icon altText="default_icon" icon="UNICORN" /> }}
      >
        Pill
      </Pill>
    );
    const decorativeIcon = screen.getByRole('img', { name: 'default_icon' });
    expect(decorativeIcon).toBeInTheDocument();

    // Axe validations
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Could be disabled', () => {
    renderProvider(
      <Pill {...mockProps} disabled>
        Pill
      </Pill>
    );

    const pillInput = screen.getByRole('radio');
    expect(pillInput).toBeDisabled();
  });

  it('Could be pressed and disabled at the same time', async () => {
    renderProvider(
      <Pill {...mockProps} disabled selected>
        Pill
      </Pill>
    );

    const pillInput = screen.getByRole('radio');

    expect(pillInput).toBeDisabled();
    expect(pillInput).toBeChecked();
  });

  it('Should show the selected icon, when the pill status is selected', () => {
    renderProvider(
      <Pill {...mockProps} initialState={true} selectedIcon={{ icon: 'UNICORN' }}>
        Pill
      </Pill>
    );
    const selectedIcon = screen.getByTestId(mockProps.dataTestId + 'SelectedIcon');
    expect(selectedIcon).toBeInTheDocument();
  });

  it('When focus prop is true, the pill should be focused', () => {
    renderProvider(
      <Pill {...mockProps} focus tabIndex={0}>
        Pill
      </Pill>
    );

    const pill = screen.getByTestId(mockProps.dataTestId);
    expect(pill).toHaveFocus();
  });

  it('When isMultiple, input should be CHECKBOX instead of RADIO', () => {
    renderProvider(
      <Pill {...mockProps} multiSelect>
        Pill
      </Pill>
    );

    const pillInput = screen.getByRole(ROLES.CHECKBOX);
    expect(pillInput).toBeInTheDocument();
  });

  it('Should call onChange prop should be call on click, press space or enter', () => {
    const onChangeMocked = jest.fn();
    renderProvider(
      <Pill {...mockProps} multiSelect onPillChange={onChangeMocked}>
        Pill
      </Pill>
    );

    const pillInput = screen.getByRole(ROLES.CHECKBOX);

    fireEvent.click(pillInput);
    fireEvent.keyDown(pillInput, { key: 'Enter', code: 'Enter' });
    fireEvent.keyDown(pillInput, { key: ' ', code: 'Space' });

    expect(onChangeMocked).toHaveBeenCalledTimes(3);
  });

  it('When no setSelected, selected state is handled internally', () => {
    renderProvider(
      <Pill {...mockProps} multiSelect>
        Pill
      </Pill>
    );

    const pillInput = screen.getByRole(ROLES.CHECKBOX);
    expect(pillInput).not.toBeChecked();
    fireEvent.click(pillInput);
    expect(pillInput).toBeChecked();
  });
});
