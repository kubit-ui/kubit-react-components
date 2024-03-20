import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import styled from 'styled-components';

import { axe } from 'jest-axe';

import { SPACE } from '@/constants';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { ItemRove } from '../itemRove';

const mockProps = {};
const heading = styled.h2``;

test('Should render ItemRove component', async () => {
  const { container } = renderProvider(
    <ItemRove
      asElement={heading}
      focus={false}
      index={0}
      setFocus={jest.fn()}
      onSelectItem={undefined}
      {...mockProps}
    >
      <>
        <span>Children</span>
      </>
    </ItemRove>
  );

  const item = screen.getByRole('heading');

  expect(item).toBeDefined();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Should render ItemRove component with focus', async () => {
  const { container } = renderProvider(
    <ItemRove
      asElement={heading}
      focus={true}
      index={0}
      setFocus={jest.fn()}
      onSelectItem={undefined}
      {...mockProps}
    >
      <>
        <span>Children</span>
      </>
    </ItemRove>
  );

  const item = screen.getByRole('heading');

  expect(item).toBeDefined();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Should call to setFocus and onSelectItem on click', async () => {
  const setFocus = jest.fn();
  const onSelectItem = jest.fn();
  const { container } = renderProvider(
    <ItemRove
      asElement={heading}
      focus={true}
      index={0}
      setFocus={setFocus}
      onSelectItem={onSelectItem}
      {...mockProps}
    >
      <>
        <span>Children</span>
      </>
    </ItemRove>
  );

  const item = screen.getByRole('heading');

  fireEvent.click(item);

  expect(setFocus).toHaveBeenCalled();
  expect(onSelectItem).toHaveBeenCalled();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Should call to setFocus and not to onSelectItem on key down', async () => {
  const setFocus = jest.fn();
  const onSelectItem = jest.fn();
  const { container } = renderProvider(
    <ItemRove
      asElement={heading}
      focus={true}
      index={0}
      setFocus={setFocus}
      onSelectItem={onSelectItem}
      {...mockProps}
    >
      <>
        <span>Children</span>
      </>
    </ItemRove>
  );

  const item = screen.getByRole('heading');

  fireEvent.keyDown(item, SPACE);

  expect(setFocus).toHaveBeenCalled();
  expect(onSelectItem).not.toHaveBeenCalled();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
