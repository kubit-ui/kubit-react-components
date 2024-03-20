import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { IconPositionType } from '@/components/button';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { LinkAsButton } from '../linkAsButton';

const mockBase = {
  variant: 'PRIMARY',
  size: 'LARGE',
  url: '',
  textVariant: 'BODY_SMALL',
  onClick: jest.fn(),
};

const mockPropsWithIcon = {
  ...mockBase,
  icon: { icon: 'icon', altText: 'altText' },
  iconPosition: IconPositionType.LEFT,
};

test('Link component left icon', async () => {
  const { container } = renderProvider(<LinkAsButton {...mockPropsWithIcon}>Link</LinkAsButton>);
  const link = screen.getByText('Link');
  const results = await axe(container);

  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
  expect(link).toBeInTheDocument();
});

test('Link component right icon', async () => {
  const { container } = renderProvider(
    <LinkAsButton {...mockPropsWithIcon} iconPosition={IconPositionType.RIGHT}>
      Link
    </LinkAsButton>
  );
  const link = screen.getByText('Link');
  const results = await axe(container);

  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
  expect(link).toBeInTheDocument();
});

test('LinkAsButton component without icon', async () => {
  const { container } = renderProvider(<LinkAsButton {...mockBase}>Link</LinkAsButton>);
  const link = screen.getByText('Link');
  const results = await axe(container);

  expect(link).toBeInTheDocument();

  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
  expect(link).toBeInTheDocument();
});

test('LinkAsButton disabled', async () => {
  const { container } = renderProvider(
    <LinkAsButton {...mockPropsWithIcon} disabled>
      Link
    </LinkAsButton>
  );
  const link = screen.getByText('Link');
  const results = await axe(container);

  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
  expect(link).toBeInTheDocument();
});

test('Should call onClick when user click on button', async () => {
  const { container } = renderProvider(<LinkAsButton {...mockPropsWithIcon}>Link</LinkAsButton>);

  const link = screen.getByText('Link');
  const results = await axe(container);
  await userEvent.click(link);

  expect(mockBase.onClick).toHaveBeenCalled();

  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
  expect(link).toBeInTheDocument();
});
