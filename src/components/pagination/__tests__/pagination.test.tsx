import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Pagination } from '../pagination';

const mockProps = {
  'data-testid': 'Pagination',
  maxStepsNumber: 10,
  paginationLeftButtonControl: {
    ariaLabel: 'left button',
    icon: 'CHEVRON_LEFT',
    onClick: vi.fn(),
  },
  paginationRightButtonControl: {
    ariaLabel: 'right button',
    icon: 'CHEVRON_RIGHT',
    onClick: vi.fn(),
  },
  variant: 'DEFAULT',
};

const onStepClick = vi.fn();

describe('Pagination Component', () => {
  it('Should have a valid HTML structure', async () => {
    const { container } = render(<Pagination {...mockProps} currentStep={0} />);

    const results = await axe(container);

    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should call paginationControl onClick when pressed', () => {
    render(
      <Pagination {...mockProps} currentStep={5} onStepClick={onStepClick} />,
    );

    const leftButton = screen.getByLabelText('left button');
    const rightButton = screen.getByLabelText('right button');
    const anyCounter = screen.getByTestId(
      `${mockProps['data-testid']}-steps-content`,
    ).children[0];

    fireEvent.click(leftButton);
    expect(mockProps.paginationLeftButtonControl.onClick).toHaveBeenCalled();

    fireEvent.click(rightButton);
    expect(mockProps.paginationRightButtonControl.onClick).toHaveBeenCalled();

    fireEvent.click(anyCounter);
    expect(onStepClick).toHaveBeenCalled();
  });

  it('Should have the left button disabled when the current position is the first', () => {
    render(<Pagination currentStep={0} {...mockProps} />);

    const leftButton = screen.getByLabelText('left button');
    expect(leftButton).toBeDisabled();
  });

  it('Should have the right button disabled when the current position is the last', () => {
    render(<Pagination currentStep={9} {...mockProps} />);

    const rightButton = screen.getByLabelText('right button');
    expect(rightButton).toBeDisabled();
  });

  it('Should accept a custom counter number', () => {
    const maxCountersNumber = 3;
    render(
      <Pagination
        {...mockProps}
        currentStep={10}
        maxCountersNumber={maxCountersNumber}
      />,
    );

    const childsNumber = screen.getByTestId(
      `${mockProps['data-testid']}-steps-content`,
    ).childElementCount;
    const ellipsis = screen.getAllByText('...').length;

    expect(childsNumber).toBe(maxCountersNumber + ellipsis);
  });
});
