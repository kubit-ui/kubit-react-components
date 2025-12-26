import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Avatar } from '../avatar';

const mockProps = {
  dot: {
    maxNumber: 2,
    number: 1,
    size: 'BIG',
    variant: 'WITH_BORDER',
  },
  onClick: vi.fn(),
  size: 'SMALL',
};

const mockPropsWithoutOnClick = {
  dot: {
    maxNumber: 2,
    number: 1,
    size: 'BIG',
    variant: 'WITH_BORDER',
  },
  size: 'SMALL',
};

describe('Avatar component', () => {
  it('Should render Avatar with Initials component', async () => {
    const { container } = render(
      <Avatar {...mockProps} initials={{ content: 'HA' }} />,
    );
    const avatar = screen.queryByText('HA');
    expect(avatar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Avatar with Initials component without onclick', async () => {
    const { container } = render(
      <Avatar {...mockPropsWithoutOnClick} initials={{ content: 'HA' }} />,
    );
    const avatar = screen.queryByText('HA');
    expect(avatar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Avatar with Icon component', async () => {
    const { container } = render(
      <Avatar {...mockProps} icon={{ icon: 'ARROW_ICON' }} />,
    );
    const avatar = screen.queryByText('1');
    expect(avatar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Avatar with Image component', async () => {
    const { container } = render(<Avatar image="url" {...mockProps} />);
    const avatar = screen.queryByText('1');
    expect(avatar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Avatar with simulate icon onClick', async () => {
    const { container } = render(<Avatar image="url" {...mockProps} />);

    const triggerIcon = screen.getByRole('button');
    await userEvent.click(triggerIcon);

    expect(mockProps.onClick).toHaveBeenCalled();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Avatar like link', async () => {
    const { container } = render(
      <Avatar image="url" {...mockProps} link={{ url: '/' }} />,
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
