import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ICONS } from '@/assets';
import { PillSizeTypeV2, PillVariantTypeV2 } from '@/designSystem/kubit/components/variants';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { Pill } from '../pill';
import { IPill, PillType } from '../types';

const mockProps: IPill = {
  variant: PillVariantTypeV2.DEFAULT,
  size: PillSizeTypeV2.LARGE,
  leftIcon: { icon: ICONS.ICON_PLACEHOLDER },
  label: { content: 'LABEL' },
  rightIcon: { icon: ICONS.ICON_PLACEHOLDER },
  onChange: jest.fn(),
};

describe('Pill component', () => {
  it('Should render pill component', async () => {
    const { container } = renderProvider(<Pill {...mockProps} />);

    const label = screen.getByText(mockProps.label?.content as string);
    expect(label).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Size prop is optional', async () => {
    const { size, ...restMockProps } = mockProps;
    const { container } = renderProvider(<Pill {...restMockProps} />);

    const label = screen.getByText(mockProps.label?.content as string);
    expect(label).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('The default type of the pill is a button', async () => {
    const { size, ...restMockProps } = mockProps;
    const { container } = renderProvider(<Pill {...restMockProps} />);

    const pill = screen.getByRole(ROLES.BUTTON);
    expect(pill).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When type is TAB it will render a tab', async () => {
    const { size, ...restMockProps } = mockProps;
    const { container } = renderProvider(
      <div>
        <div role={ROLES.TABLIST}>
          <Pill {...restMockProps} aria-controls="aria-controls-div" type={PillType.TAB} />
        </div>
        <div id="aria-controls-div" />
      </div>
    );

    const pill = screen.getByRole(ROLES.TAB);
    expect(pill).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When type is SELECTOR_MULTIPLE it will render an input checkbox', async () => {
    const { size, ...restMockProps } = mockProps;
    const { container } = renderProvider(
      <Pill {...restMockProps} type={PillType.SELECTOR_MULTIPLE} />
    );

    const pill = screen.getByRole(ROLES.CHECKBOX);
    expect(pill).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When type is SELECTOR_SIMPLE it will render an input radio', async () => {
    const { size, ...restMockProps } = mockProps;
    const { container } = renderProvider(
      <Pill {...restMockProps} type={PillType.SELECTOR_SIMPLE} />
    );

    const pill = screen.getByRole(ROLES.RADIO);
    expect(pill).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When type is SELECTOR and selected is true it will render an input checked', async () => {
    const { size, ...restMockProps } = mockProps;
    const { container } = renderProvider(
      <Pill {...restMockProps} selected type={PillType.SELECTOR_SIMPLE} />
    );

    const pill = screen.getByRole(ROLES.RADIO);
    expect(pill).toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When type is SELECTOR and disabled is true it will render an input disabled', async () => {
    const { size, ...restMockProps } = mockProps;
    const { container } = renderProvider(
      <Pill {...restMockProps} disabled type={PillType.SELECTOR_MULTIPLE} />
    );

    const pill = screen.getByRole(ROLES.CHECKBOX);
    expect(pill).toBeDisabled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When type is SELECTOR and selected and disabled is true it will render an input selected and disabled', async () => {
    const { size, ...restMockProps } = mockProps;
    const { container } = renderProvider(
      <Pill {...restMockProps} disabled selected type={PillType.SELECTOR_MULTIPLE} />
    );

    const pill = screen.getByRole(ROLES.CHECKBOX);
    expect(pill).toBeDisabled();
    expect(pill).toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
