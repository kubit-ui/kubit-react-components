import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { ListOptions } from '../listOptions';
import { ListOptionsType } from '../types';

const MOCK = {
  title: { content: 'title' },
  variant: 'DEFAULT',
  optionVariant: 'DEFAULT',
  options: [
    {
      label: 'labelTest',
      icon: { icon: 'ERROR' },
      disabled: false,
      variant: 'SIDE_MENU_LEVEL_1',
      value: 1,
    },
    {
      label: 'labelTest2',
      icon: { icon: 'ERROR' },
      disabled: false,
      variant: 'SIDE_MENU_LEVEL_1',
      value: 2,
    },
  ],
  content: <div>Content</div>,
  onOptionClick: jest.fn(),
};

test('Should render  ListOptions component', async () => {
  const ref = jest.fn();
  const { container } = renderProvider(<ListOptions ref={ref} {...MOCK} />);

  expect(screen.getByText('labelTest')).toBeInTheDocument();

  // When type = SELECTION, the component will be executed inside a combobox
  const results = await axe(container, {
    rules: {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
      'aria-input-field-name': { enabled: false },
    },
  });
  expect(container).toHTMLValidate({
    rules: {
      'prefer-native-element': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});

test('Should render ListOptions component with onClick option', async () => {
  const { container } = renderProvider(<ListOptions {...MOCK} />);

  const triggerButton = screen.getByRole(ROLES.OPTION, { name: 'labelTest' });
  fireEvent.click(triggerButton);

  expect(MOCK.onOptionClick).toHaveBeenCalled();

  // When type = SELECTION, the component will be executed inside a combobox
  const results = await axe(container, {
    rules: {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
      'aria-input-field-name': { enabled: false },
    },
  });
  expect(container).toHTMLValidate({
    rules: {
      'prefer-native-element': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});

test('Execute onFucus must provide the focus', async () => {
  const { container } = renderProvider(<ListOptions {...MOCK} />);

  const option = screen.getByRole(ROLES.OPTION, { name: 'labelTest' });
  fireEvent.focus(option);

  expect(option).toHaveFocus();

  const results = await axe(container, {
    rules: {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
      'aria-input-field-name': { enabled: false },
    },
  });
  expect(container).toHTMLValidate({
    rules: {
      'prefer-native-element': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});

test('Should render ListOptions component with selectedValue equal to first option', async () => {
  const newMockProps = {
    ...MOCK,
    selectedValue: 1,
  };

  const { container } = renderProvider(<ListOptions {...newMockProps} />);

  expect(screen.getByText('labelTest')).toBeInTheDocument();

  // When type = SELECTION, the component will be executed inside a combobox
  const results = await axe(container, {
    rules: {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
      'aria-input-field-name': { enabled: false },
    },
  });
  expect(container).toHTMLValidate({
    rules: {
      'prefer-native-element': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});

test('List options with type=NAVIGATION must render a role=presentation', async () => {
  const { container, getAllByRole } = renderProvider(
    <ListOptions {...MOCK} type={ListOptionsType.NAVIGATION} />
  );
  const options = getAllByRole(ROLES.PRESENTATION);
  expect(options.length).toBe(2);

  // When type = SELECTION, the component will be executed inside a combobox
  const results = await axe(container, {
    rules: {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
      'aria-input-field-name': { enabled: false },
    },
  });
  expect(container).toHTMLValidate({
    rules: {
      'prefer-native-element': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});
