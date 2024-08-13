import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ICONS } from '@/assets';
import {
  PillSelectorSizeTypeV2,
  PillSelectorVariantTypeV2,
} from '@/designSystem/kubit/components/variants';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { PillSelectorControlled } from '../pillSelectorControlled';
import { PillSelectorUnControlled } from '../pillSelectorUnControlled';
import { IPillSelectorControlled, IPillSelectorUnControlled, PillSelectorType } from '../types';

const mockProps: IPillSelectorUnControlled = {
  variant: PillSelectorVariantTypeV2.DEFAULT,
  size: PillSelectorSizeTypeV2.LARGE,
  pills: [
    { label: { content: 'Pill 1' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 1' },
    { label: { content: 'Pill 2' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 2' },
    { label: { content: 'Pill 3' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 3' },
    { label: { content: 'Pill 4' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 4' },
  ],
};

describe('PillSelectorUncontrolled', () => {
  it('Should render a set of pills, by default pill type is input checkbox (PillSelectorType.SELECTOR_MULTIPLE)', async () => {
    const { container } = renderProvider(<PillSelectorUnControlled {...mockProps} />);

    const pills = screen.getAllByRole(ROLES.CHECKBOX);
    expect(pills).toHaveLength(mockProps.pills?.length as number);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When SELECTOR_SIMPLE, pills are render as checkbox', async () => {
    const { container } = renderProvider(
      <PillSelectorUnControlled {...mockProps} type={PillSelectorType.SELECTOR_SIMPLE} />
    );

    const pills = screen.getAllByRole(ROLES.RADIO);
    expect(pills).toHaveLength(mockProps.pills?.length as number);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Size prop is optional', () => {
    const { size, ...restMockProps } = mockProps;
    renderProvider(<PillSelectorUnControlled {...restMockProps} />);

    const pills = screen.getAllByRole(ROLES.CHECKBOX);
    expect(pills).toHaveLength(mockProps.pills?.length as number);
  });

  it('When SELECTOR_MULTIPLE, value should be an array of the value of the selected options', () => {
    const value = [mockProps.pills?.[0].value as string];
    renderProvider(<PillSelectorUnControlled {...mockProps} defaultValue={value} />);

    const pills = screen.getAllByRole(ROLES.CHECKBOX);
    expect(pills[0]).toBeChecked();
  });

  it('When SELECTOR_SIMPLE, value should be a value from the values of the selected options', () => {
    const value = mockProps.pills?.[0].value as string;
    renderProvider(
      <PillSelectorUnControlled
        {...mockProps}
        defaultValue={value}
        type={PillSelectorType.SELECTOR_SIMPLE}
      />
    );

    const pills = screen.getAllByRole(ROLES.RADIO);
    expect(pills[0]).toBeChecked();
  });

  it('When SELECTOR_MULTIPLE, onChange should return an array of the value of the selected options', () => {
    const value = [mockProps.pills?.[0].value as string];
    const handleChange = jest.fn();
    renderProvider(<PillSelectorUnControlled {...mockProps} onChange={handleChange} />);

    const pills = screen.getAllByRole(ROLES.CHECKBOX);
    pills[0].click();
    expect(handleChange).toHaveBeenCalledWith(value);
  });

  it('When SELECTOR_MULTIPLE, onChange should return an array of the value of the selected options, if it is already selected it should be removed', () => {
    const value = [mockProps.pills?.[0].value as string];
    const handleChange = jest.fn();
    renderProvider(
      <PillSelectorUnControlled {...mockProps} defaultValue={value} onChange={handleChange} />
    );

    const pills = screen.getAllByRole(ROLES.CHECKBOX);
    pills[0].click();
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it('When SELECTOR_MULTIPLE, onChange should return an array of the value of the selected options, if it not is already selected it should be added', () => {
    const value = [mockProps.pills?.[0].value as string];
    const handleChange = jest.fn();
    renderProvider(
      <PillSelectorUnControlled {...mockProps} defaultValue={value} onChange={handleChange} />
    );

    const pills = screen.getAllByRole(ROLES.CHECKBOX);
    pills[1].click();
    expect(handleChange).toHaveBeenCalledWith([
      mockProps.pills?.[0].value as string,
      mockProps.pills?.[1].value as string,
    ]);
  });

  it('When SELECTOR_SIMPLE, onChange should return a value from the values of the selected options', () => {
    const value = mockProps.pills?.[0].value as string;
    const handleChange = jest.fn();
    renderProvider(
      <PillSelectorUnControlled
        {...mockProps}
        type={PillSelectorType.SELECTOR_SIMPLE}
        onChange={handleChange}
      />
    );

    const pills = screen.getAllByRole(ROLES.RADIO);
    pills[0].click();
    expect(handleChange).toHaveBeenCalledWith(value);
  });
});

const mockPropsControlled: IPillSelectorControlled = {
  variant: PillSelectorVariantTypeV2.DEFAULT,
  size: PillSelectorSizeTypeV2.LARGE,
  pills: [
    { label: { content: 'Pill 1' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 1' },
    { label: { content: 'Pill 2' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 2' },
    { label: { content: 'Pill 3' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 3' },
    { label: { content: 'Pill 4' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 4' },
  ],
};

describe('PillSelectorcontrolled', () => {
  it('Should render a set of pills, by default pill type is input checkbox (PillSelectorType.SELECTOR_MULTIPLE)', () => {
    renderProvider(<PillSelectorControlled {...mockPropsControlled} />);

    const pills = screen.getAllByRole(ROLES.CHECKBOX);
    expect(pills).toHaveLength(mockProps.pills?.length as number);
  });

  it('If onChange is not passed, when pressing over a pill it will not trigger any action', () => {
    renderProvider(<PillSelectorControlled {...mockPropsControlled} />);

    const pills = screen.getAllByRole(ROLES.CHECKBOX);
    pills[0].click();

    expect(pills[0]).not.toBeChecked();
  });
});
