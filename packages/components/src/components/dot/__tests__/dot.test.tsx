import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Dot } from '../dot';

const mockProps = {
  'data-testid': 'dataTestId',
  maxNumber: 25,
  number: 0,
  size: 'SMALL',
  sizeStyles: {
    container_size_height: '',
    container_size_width: '',
  },
  styles: {
    background_color: '',
    border_color: '',
    border_width: '',
  },
  variant: 'ALTERNATIVE',
};

const mockMaxNumberProps = {
  maxNumber: 99,
  number: 100,
  size: 'BIG',
  sizeStyles: {
    container_size_height: '',
    container_size_width: '',
  },
  styles: {
    background_color: '',
    border_color: '',
    border_width: '',
  },
  variant: 'WITH_BORDER',
};

describe('Dot component', () => {
  it('Should render Dot component', async () => {
    const { container, getByTestId } = render(<Dot {...mockProps} />);
    const dot = getByTestId(mockProps['data-testid']);

    expect(dot).toBeDefined();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Dot with plus symbol', async () => {
    const { container, getByText } = render(<Dot {...mockMaxNumberProps} />);

    const dot = getByText('+99');

    expect(dot).not.toBeNull();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Get label', async () => {
    const { container, getByText } = render(
      <Dot {...mockMaxNumberProps} label="myLabel" number={undefined} />,
    );

    const dot = getByText('myLabel');

    expect(dot).not.toBeNull();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
