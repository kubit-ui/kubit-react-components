import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { Avatar } from '../index';

const mockProps = {
  size: 'SMALL',
  dot: {
    variant: 'WITH_BORDER',
    size: 'BIG',
    number: 1,
    maxNumber: 2,
  },
  onClick: jest.fn(),
};

const mockPropsWithoutOnClick = {
  size: 'SMALL',
  dot: {
    variant: 'WITH_BORDER',
    size: 'BIG',
    number: 1,
    maxNumber: 2,
  },
};

describe('Avatar component', () => {
  test('Should render Avatar with Initials component', async () => {
    const { container } = renderProvider(<Avatar {...mockProps} initials={{ content: 'HA' }} />);
    const avatar = screen.queryByText('HA');
    expect(avatar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Should render Avatar with Initials component without onclick', async () => {
    const { container } = renderProvider(
      <Avatar {...mockPropsWithoutOnClick} initials={{ content: 'HA' }} />
    );
    const avatar = screen.queryByText('HA');
    expect(avatar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Should render Avatar with Icon component', async () => {
    const { container } = renderProvider(<Avatar {...mockProps} icon={{ icon: 'ARROW_ICON' }} />);
    const avatar = screen.queryByText('1');
    expect(avatar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Should render Avatar with Image component', async () => {
    const { container } = renderProvider(<Avatar image="url" {...mockProps} />);
    const avatar = screen.queryByText('1');
    expect(avatar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Should render Avatar with simulate icon onClick', async () => {
    const { container } = renderProvider(<Avatar image="url" {...mockProps} />);

    const triggerIcon = screen.getByRole(ROLES.BUTTON);
    fireEvent.click(triggerIcon);

    expect(mockProps.onClick).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Should render Avatar like link', async () => {
    const { container } = renderProvider(
      <Avatar
        image="url"
        {...mockProps}
        link={{ content: 'content', variant: 'PRIMARY', url: '/' }}
      />
    );

    const linkElement = screen.getByRole(ROLES.LINK);
    expect(linkElement).toBeInTheDocument();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
