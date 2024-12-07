import userEvent from '@testing-library/user-event';

import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { POSITIONS } from '@/types/positions/positions';
import { ROLES } from '@/types/role/role';
import * as keyboard from '@/utils/keyboard/keyboard.utility';

import { InputTypeType } from '../../input/types/inputType';
import { ToggleControlled } from '../toggleControlled';
import { ToggleUnControlled as Toggle } from '../toggleUnControlled';

const mockProps = {
  onIcon: { icon: 'WARNING' },
  offIcon: { icon: 'CLOSE' },
  variant: 'DEFAULT',
  inputValues: {
    rightInputValue: 'on option',
    centerInputValue: 'undeterminated option',
    leftInputValue: 'off option',
    rightIconAltText: 'on option',
    centerIconAltText: 'undeterminated option',
    leftIconAltText: 'off option',
  },
  dataTestId: 'toggleId',
  ['aria-label']: 'toggle',
};

const mockPropsThreePositions = {
  ...mockProps,
  onText: { content: 'SI' },
  offText: { content: 'NO' },
  inputValues: {
    rightInputValue: 'on option',
    centerInputValue: 'undeterminated option',
    leftInputValue: 'off option',
  },
  hasThreePositions: true,
};

const user = userEvent.setup();

describe('Toggle component', () => {
  it('should display an accesible text by default corresponding to the unchecked state', async () => {
    const { container } = renderProvider(<Toggle {...mockProps} />);

    const toggle = screen.getByRole(ROLES.SWITCH);

    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('should display with initial state checked', async () => {
    const { container } = renderProvider(
      <Toggle {...mockProps} defaultTogglePosition={POSITIONS.RIGHT} />
    );

    const toggle = screen.getByRole(ROLES.SWITCH);

    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('should display with disabled state and checked', async () => {
    const { container } = renderProvider(
      <Toggle {...mockProps} defaultTogglePosition={POSITIONS.RIGHT} disabled={true} />
    );

    const toggle = screen.getByRole(ROLES.SWITCH);

    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('should hide said text and display an alternative when clicked', async () => {
    const { container } = renderProvider(<Toggle {...mockProps} />);

    const toggle = screen.getByRole(ROLES.SWITCH);

    expect(toggle).not.toBeChecked();

    await user.click(toggle);

    expect(toggle).toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should call onChange when keyDown from left position (enter)', async () => {
    jest.spyOn(keyboard, 'isKeyEnterPressed').mockReturnValueOnce(true);
    const { container } = renderProvider(<Toggle {...mockProps} />);

    expect(screen.getByTestId('toggleId-on-option')).toBeInTheDocument();
    expect(screen.getByTestId('toggleId-off-option')).toBeInTheDocument();

    const group = screen.getByTestId('toggleId');
    expect(group).toBeInTheDocument();
    fireEvent.keyDown(group);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should call onChange when keyDown from right position (enter)', async () => {
    jest.spyOn(keyboard, 'isKeyEnterPressed').mockReturnValueOnce(true);
    const onChange = jest.fn();
    renderProvider(
      <Toggle {...mockProps} defaultTogglePosition={POSITIONS.RIGHT} onChange={onChange} />
    );

    const group = screen.getByTestId('toggleId');
    expect(group).toBeInTheDocument();
    fireEvent.keyDown(group);

    expect(onChange).toHaveBeenCalled();
  });

  it('Should call onChange when keyDown from left position (space)', async () => {
    jest.spyOn(keyboard, 'isKeySpacePressed').mockReturnValueOnce(true);
    const onChange = jest.fn();
    renderProvider(<Toggle {...mockProps} onChange={onChange} />);

    const toggle = screen.getByRole(ROLES.SWITCH);
    expect(toggle).not.toBeChecked();
    await user.click(toggle);
    expect(toggle).toBeChecked();

    await user.click(toggle);
    expect(toggle).not.toBeChecked();

    const group = screen.getByTestId('toggleId');
    expect(group).toBeInTheDocument();
    fireEvent.keyDown(group);

    expect(onChange).toHaveBeenCalled();
  });

  it('Should call onChange when keyDown from right position (space)', async () => {
    jest.spyOn(keyboard, 'isKeySpacePressed').mockReturnValueOnce(true);
    const onChange = jest.fn();
    renderProvider(
      <Toggle {...mockProps} defaultTogglePosition={POSITIONS.RIGHT} onChange={onChange} />
    );

    const group = screen.getByTestId('toggleId');
    expect(group).toBeInTheDocument();
    fireEvent.keyDown(group);

    expect(onChange).toHaveBeenCalled();
  });

  it('Click on thumb should call onClick', async () => {
    const onClick = jest.fn();
    renderProvider(<Toggle {...mockProps} onClick={onClick} />);

    const thumb = screen.getByTestId('toggleId-thumb');

    fireEvent.click(thumb);

    expect(onClick).toHaveBeenCalled();
  });
});

describe('Toogle Three Positions', () => {
  it('ThreePositions - should display the toggle with three position', async () => {
    const { container } = renderProvider(<Toggle {...mockPropsThreePositions} />);

    const toggle = screen.getAllByRole(InputTypeType.RADIO)[0];

    expect(toggle).not.toBeChecked();

    await user.click(toggle);

    expect(toggle).toBeChecked();

    const results = await axe(container, {
      rules: {
        label: { enabled: false },
      },
    });
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('ThreePositions - Should click in onText and called onKeyDown', async () => {
    jest.spyOn(keyboard, 'isKeySpacePressed').mockReturnValueOnce(true);
    const onClick = jest.fn();
    const onKeyDown = jest.fn();
    renderProvider(
      <Toggle
        {...mockPropsThreePositions}
        blockCenter={true}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
    );

    const onLabelOption = screen.getByTestId('toggleId-on-label-option');
    expect(onLabelOption).toBeInTheDocument();
    fireEvent.click(onLabelOption);
    expect(onClick).toHaveBeenCalled();

    const group = screen.getByTestId('toggleId');
    expect(group).toBeInTheDocument();
    fireEvent.keyDown(onLabelOption);
    expect(onKeyDown).toHaveBeenCalled();
  });

  it('ThreePositions - With disabled true click shouldnt work', async () => {
    jest.spyOn(keyboard, 'isKeySpacePressed').mockReturnValueOnce(true);
    const onClick = jest.fn();
    const onKeyDown = jest.fn();
    renderProvider(
      <Toggle
        {...mockPropsThreePositions}
        disabled={true}
        onClick={onClick}
        onKeyDown={onKeyDown}
      />
    );

    const onLabelOption = screen.getByTestId('toggleId-on-label-option');
    expect(onLabelOption).toBeInTheDocument();
    fireEvent.click(onLabelOption);
    expect(onClick).not.toHaveBeenCalled();

    const group = screen.getByTestId('toggleId');
    expect(group).toBeInTheDocument();
    fireEvent.keyDown(onLabelOption);
    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it('ThreePositions - Should click in offText and called onKeyDown', () => {
    jest.spyOn(keyboard, 'isKeySpacePressed').mockReturnValueOnce(true);
    renderProvider(<Toggle {...mockPropsThreePositions} />);

    const offLabelOption = screen.getByTestId('toggleId-off-label-option');
    expect(offLabelOption).toBeInTheDocument();
    fireEvent.click(offLabelOption);

    const group = screen.getByTestId('toggleId');
    expect(group).toBeInTheDocument();
    fireEvent.keyDown(group);
  });

  it('ThreePositions - When click in the center position, should be marked as checked', async () => {
    renderProvider(<Toggle {...mockPropsThreePositions} />);

    const toggle = screen.getAllByRole(InputTypeType.RADIO)[1];

    expect(toggle).not.toBeChecked();

    await user.click(toggle);

    expect(toggle).toBeChecked();
  });

  it('ThreePositions - When click in the right position, should be marked as checked', async () => {
    renderProvider(<Toggle {...mockPropsThreePositions} />);

    const toggle = screen.getAllByRole(InputTypeType.RADIO)[2];

    expect(toggle).not.toBeChecked();

    await user.click(toggle);

    expect(toggle).toBeChecked();
  });
});

describe('ToggleControlled', () => {
  it('should display an accesible text by default corresponding to the unchecked state', async () => {
    const { container } = renderProvider(<ToggleControlled {...mockProps} />);

    const toggle = screen.getByRole(ROLES.SWITCH);

    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});

describe('ToggleControlled Three Positions', () => {
  it('ThreePositions - should display the toggle with three position', async () => {
    const { container } = renderProvider(<ToggleControlled {...mockPropsThreePositions} />);

    const toggle = screen.getAllByRole(InputTypeType.RADIO)[0];

    expect(toggle).not.toBeChecked();

    await user.click(toggle);

    //We have 3 inputs acting like 1. If left is selected, it shouldn't be marked as checked
    expect(toggle).toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
