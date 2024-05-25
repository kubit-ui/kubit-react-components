import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import * as stylesHook from '../../../hooks/useStyles/useStyles';
import { PillSelectorUnControlled } from '../pillSelectorUnControlled';
import { IPillSelectorUnControlled } from '../types';

const mockProps: IPillSelectorUnControlled = {
  variant: 'DEFAULT',
  pillVariant: 'DEFAULT',
  pillSize: 'LARGE',
  pills: [
    {
      label: 'PillSelector label',
      value: 1,
    },
    {
      label: 'PillSelector',
      value: 2,
    },
  ],
  dataTestId: 'dataTestId',
};

const mockStyles = {
  container: {
    display: 'flex',
    flex_direction: 'row',
    max_width: 'fit-content',
  },
  pill: {
    border_left: '0',
    border_right: '0',
  },
  firstPill: {
    border_right: '0',
  },
  lastPill: {
    border_left: '0',
  },
  thumb: {
    background_color: 'red',
  },
  ['DEFAULT']: {},
};

describe('PillSelector component', () => {
  it('Render', async () => {
    const { container } = renderProvider(
      <PillSelectorUnControlled {...mockProps} ref={jest.fn()} />
    );

    const pillSelector = screen.getAllByText('PillSelector');

    expect(pillSelector[0]).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render pillSelector UnControlled with no pills', async () => {
    const { container } = renderProvider(<PillSelectorUnControlled {...mockProps} pills={[]} />);

    const pillSelector = screen.queryByText('PillSelector');
    expect(pillSelector).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should select the pill when click', () => {
    renderProvider(<PillSelectorUnControlled {...mockProps} />);

    const firstPillInput = screen.getByDisplayValue(mockProps.pills[0].value.toString());
    fireEvent.click(firstPillInput);

    expect(firstPillInput).toBeChecked();
  });

  it('When isMultipleSelect, could select more than one pill', () => {
    renderProvider(<PillSelectorUnControlled {...mockProps} multiSelect />);

    const firstPillInput = screen.getByDisplayValue(mockProps.pills[0].value.toString());
    const secondtPillInput = screen.getByDisplayValue(mockProps.pills[1].value.toString());

    // Select the first and second pill
    fireEvent.click(firstPillInput);
    fireEvent.click(secondtPillInput);
    expect(firstPillInput).toBeChecked();
    expect(secondtPillInput).toBeChecked();

    // Deselect first pill
    fireEvent.click(firstPillInput);
    expect(firstPillInput).not.toBeChecked();
    expect(secondtPillInput).toBeChecked();
  });

  it('Pills can receive focus', () => {
    renderProvider(<PillSelectorUnControlled {...mockProps} multiSelect />);

    const firstPill = screen.getByTestId(`${mockProps.dataTestId}Pill0`);
    const secondPill = screen.getByTestId(`${mockProps.dataTestId}Pill1`);
    const firstPillInput = screen.getByRole(ROLES.CHECKBOX, {
      name: mockProps.pills[0].label?.toString(),
    });
    const secondtPillInput = screen.getByRole(ROLES.CHECKBOX, {
      name: mockProps.pills[1].label?.toString(),
    });

    fireEvent.focus(firstPillInput);
    expect(firstPill).toHaveFocus();

    fireEvent.focus(secondtPillInput);
    expect(secondPill).toHaveFocus();
  });

  it('Render thumb', () => {
    jest.spyOn(stylesHook, 'useStyles').mockImplementation(() => mockStyles);
    renderProvider(<PillSelectorUnControlled {...mockProps} />);

    const thumb = screen.getByTestId(`${mockProps.dataTestId}Thumb`);

    expect(thumb).toBeInTheDocument();

    const firstPillInput = screen.getByDisplayValue(mockProps.pills[0].value.toString());
    fireEvent.click(firstPillInput);

    expect(firstPillInput).toBeChecked();
  });
});
