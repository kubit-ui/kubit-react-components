import { act, fireEvent } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { IconBasic } from '../icon';
import { IconHost } from '../iconHost';

const mockProps = {
  altText: 'icon alt text',
  ['aria-label']: 'ariaLabel',
  height: '30px',
  icon: 'CLOSE',
  width: '30px',
};
describe('Icon Component', () => {
  it('Should render Icon component as an img', async () => {
    const { container, getByRole } = render(<IconBasic {...mockProps} />);

    const icon = getByRole('img');

    expect(icon).not.toBeNull();
    expect(icon.tagName.toLowerCase()).toBe('span');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Icon component as an svg when color', async () => {
    const { container, getByRole } = render(
      <IconBasic {...mockProps} color="red" />,
    );

    const icon = getByRole('img');

    expect(icon).not.toBeNull();
    expect(icon.tagName.toLowerCase()).toBe('span');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Icon component as a button when onClick prop', async () => {
    const mockOnClick = vi.fn();
    const { container, getByRole } = render(
      <IconBasic {...mockProps} onClick={mockOnClick} />,
    );

    const iconAsButton = getByRole('button');
    expect(iconAsButton).not.toBeNull();

    fireEvent.click(iconAsButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
  it('If there is no icon, should return nothing', async () => {
    const { container, queryByAltText } = render(
      <IconBasic {...mockProps} icon="" />,
    );

    const icon = queryByAltText(mockProps.altText);
    expect(icon).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
  it('Return an icon complex', async () => {
    const { container, getByRole } = render(
      <IconBasic {...mockProps} complex={true} />,
    );

    const iconComplex = getByRole('img');
    expect(iconComplex).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('IconHost - when no context a local icon is return', async () => {
    let getByRole, container;

    await act(async () => {
      const renderResult = render(<IconHost {...mockProps} />);
      getByRole = renderResult.getByRole;
      container = renderResult.container;
    });

    const icon = getByRole('img');

    expect(icon).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('IconHost - when  context a local icon is return', async () => {
    let getByRole, container;

    await act(async () => {
      const renderResult = render(<IconHost {...mockProps} icon="ICON" />);
      getByRole = renderResult.getByRole;
      container = renderResult.container;
    });

    const icon = getByRole('img');

    expect(icon).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
