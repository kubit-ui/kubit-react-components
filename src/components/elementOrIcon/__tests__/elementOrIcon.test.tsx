import { fireEvent } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { ROLES } from '@/types';

import { ElementOrIcon } from '../elementOrIcon';

window.matchMedia = windowMatchMedia();

const mockProps = {
  icon: 'CLOSE',
  altText: 'icon alt text',
  width: '30px',
  height: '30px',
  ['aria-label']: 'ariaLabel',
};

describe('Icon Component', () => {
  it('Passing isBasic=true It should render IconBasic', async () => {
    const mockOnClick = jest.fn();
    const { getByRole, container } = renderProvider(
      <ElementOrIcon {...mockProps} basic={true} onClick={mockOnClick} />
    );

    const icon = getByRole(ROLES.BUTTON);
    expect(icon).toBeInTheDocument();

    fireEvent.click(icon);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('With isBasic=false It should render Icon', async () => {
    const mockOnClick = jest.fn();
    const { getByRole, container } = renderProvider(
      <ElementOrIcon {...mockProps} onClick={mockOnClick} />
    );

    const icon = getByRole(ROLES.BUTTON);
    expect(icon).toBeInTheDocument();

    fireEvent.click(icon);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Not Passing an icon it should return nothing', async () => {
    const { queryByRole, container } = renderProvider(
      <ElementOrIcon {...mockProps} icon={undefined} />
    );

    const icon = queryByRole(ROLES.IMG);
    expect(icon).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('If element is not a string, return the element', async () => {
    const { getByText, container } = renderProvider(
      <ElementOrIcon {...mockProps} icon={<span>elementSpan</span>} />
    );

    const element = getByText('elementSpan');
    expect(element).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
