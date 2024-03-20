import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { Divider } from '../divider';
import { IDivider } from '../types';

window.matchMedia = windowMatchMedia();

const mockProps: IDivider = {
  variant: 'DEFAULT',
  icon: { icon: 'UNICORN', altText: 'Alt text info' },
  iconTooltip: {
    title: { content: 'Tooltip title' },
    content: { content: 'Tooltip content' },
  },
  leftLabel: { content: 'Label left' },
  rightLabel: { content: 'Label right' },
  leftSublabel: { content: 'Sublabel left' },
  rightSublabel: { content: 'SUblabel right' },
  leftIcon: { icon: 'UNICORN', altText: 'alt text left' },
};

test('Divider component', async () => {
  const { container, getByText } = renderProvider(<Divider {...mockProps} />);

  expect(getByText(mockProps.leftLabel?.content as string)).toBeInTheDocument();
  expect(getByText(mockProps.rightLabel?.content as string)).toBeInTheDocument();
  expect(getByText(mockProps.leftSublabel?.content as string)).toBeInTheDocument();
  expect(getByText(mockProps.rightSublabel?.content as string)).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Divider component icon and alt property', async () => {
  const { container, getByLabelText } = renderProvider(<Divider {...mockProps} />);
  const icon = getByLabelText('Alt text info');
  expect(icon).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

it('Should show the tooltip when the cursor is over the icon', async () => {
  const { container, getByLabelText } = renderProvider(<Divider {...mockProps} />);
  const icon = getByLabelText('Alt text info');

  fireEvent.click(icon);

  const tooltip = screen.getByRole('dialog');
  expect(tooltip).toBeInTheDocument();

  const results = await axe(container);
  // Tooltip may have inline styles
  expect(container).toHTMLValidate({
    rules: {
      'no-inline-style': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});

it('without sublabels', async () => {
  const { leftSublabel, rightSublabel, ...restMock } = mockProps;
  const { container, getByText } = renderProvider(<Divider {...restMock} />);

  expect(getByText(mockProps.leftLabel?.content as string)).toBeInTheDocument();
  expect(getByText(mockProps.rightLabel?.content as string)).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
