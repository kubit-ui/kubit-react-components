import { fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { ElementOrIcon } from '../elementOrIcon';

const mockProps = {
  altText: 'icon alt text',
  ['aria-label']: 'ariaLabel',
  height: '30px',
  icon: 'CLOSE',
  width: '30px',
};

describe('Icon Component', () => {
  it('Passing isBasic=true It should render IconBasic', async () => {
    const mockOnClick = vi.fn();
    const { container, getByRole } = render(
      <ElementOrIcon {...mockProps} basic onClick={mockOnClick} />,
    );

    const icon = getByRole('button');
    expect(icon).not.toBeNull();

    fireEvent.click(icon);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('With isBasic=false It should render Icon', async () => {
    const mockOnClick = vi.fn();
    const { container, getByRole } = render(
      <ElementOrIcon {...mockProps} onClick={mockOnClick} />,
    );

    const icon = getByRole('button');
    expect(icon).not.toBeNull();

    fireEvent.click(icon);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Not Passing an icon it should return nothing', async () => {
    const { container, queryByRole } = render(
      <ElementOrIcon {...mockProps} icon={undefined} />,
    );

    const icon = queryByRole('img');
    expect(icon).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('If element is not a string, return the element', async () => {
    const { container, getByText } = render(
      <ElementOrIcon {...mockProps} icon={<span>elementSpan</span>} />,
    );

    const element = getByText('elementSpan');
    expect(element).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
