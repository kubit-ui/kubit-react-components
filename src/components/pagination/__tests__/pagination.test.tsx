import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Pagination } from '../pagination';

const mockProps = {
  dataTestId: 'Pagination',
  variant: 'DEFAULT',
  maxStepsNumber: 10,
  paginationLeftButtonControl: {
    icon: 'CHEVRON_LEFT',
    ariaLabel: 'left button',
    onClick: jest.fn(),
  },
  paginationRightButtonControl: {
    icon: 'CHEVRON_RIGHT',
    ariaLabel: 'right button',
    onClick: jest.fn(),
  },
};

const onStepClick = jest.fn();

describe('Pagination Component', () => {
  it('Should have a valid HTML structure', async () => {
    const { container } = renderProvider(<Pagination {...mockProps} currentStep={0} />);

    const results = await axe(container);

    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Should call paginationControl onClick when pressed', () => {
    renderProvider(<Pagination {...mockProps} currentStep={5} onStepClick={onStepClick} />);

    const leftButton = screen.getByLabelText('left button');
    const rightButton = screen.getByLabelText('right button');
    const anyCounter = screen.getByTestId(`${mockProps.dataTestId}StepsContent`).children[0];

    fireEvent.click(leftButton);
    expect(mockProps.paginationLeftButtonControl.onClick).toHaveBeenCalled();

    fireEvent.click(rightButton);
    expect(mockProps.paginationRightButtonControl.onClick).toHaveBeenCalled();

    fireEvent.click(anyCounter);
    expect(onStepClick).toHaveBeenCalled();
  });

  it('Should have the left button disabled when the current position is the first', () => {
    renderProvider(<Pagination currentStep={0} {...mockProps} />);

    const leftButton = screen.getByLabelText('left button');
    expect(leftButton).toBeDisabled();
  });

  it('Should have the right button disabled when the current position is the last', () => {
    renderProvider(<Pagination currentStep={9} {...mockProps} />);

    const rightButton = screen.getByLabelText('right button');
    expect(rightButton).toBeDisabled();
  });

  it('Should accept a custom counter number', () => {
    const maxCountersNumber = 6;
    renderProvider(
      <Pagination {...mockProps} currentStep={10} maxCountersNumber={maxCountersNumber} />
    );

    const childsNumber = screen.getByTestId(
      `${mockProps.dataTestId}StepsContent`
    ).childElementCount;
    const ellipsis = screen.getAllByText('...').length;

    expect(childsNumber).toBe(maxCountersNumber + ellipsis);
  });
});
