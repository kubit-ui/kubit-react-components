import * as React from 'react';

import {
  focusFirstDescendant,
  focusNextFocusableElement,
  focusPreviousFocusableElement,
  getFocusableDescendants,
  trapFocus,
} from '../focusHandlers';

test('focusFirstDescendant - It focuses a button', () => {
  const section = document.createElement('section');
  section.id = 'test-section';
  document.body.appendChild(section);

  const button = document.createElement('button');
  document.getElementById('test-section')?.appendChild(button);

  focusFirstDescendant(section);

  expect(getFocusableDescendants(section)).toContain(button);
  expect(button).toHaveFocus();
});

test('focusFirstDescendant - It doest not focus a disabled button', () => {
  const section = document.createElement('section');
  section.id = 'test-section';
  document.body.appendChild(section);

  const button = document.createElement('button');

  button.disabled = true;

  document.getElementById('test-section')?.appendChild(button);

  focusFirstDescendant(section);

  expect(getFocusableDescendants(section)).toBeFalsy();
  expect(button).not.toHaveFocus();
});

test('focusFirstDescendant - It doest not focus on a button with an aria-disabled', () => {
  const section = document.createElement('section');
  section.id = 'test-section';
  document.body.appendChild(section);

  const button = document.createElement('button');

  button['aria-disabled'] = true;
  document.getElementById('test-section')?.appendChild(button);

  focusFirstDescendant(section);

  expect(getFocusableDescendants(section)).toBeFalsy();
  expect(button).not.toHaveFocus();
});

test('focusFirstDescendant - It does not focus on an element that is not focusable', () => {
  const section = document.createElement('section');
  section.id = 'test-section';

  document.body.appendChild(section);

  const p = document.createElement('p');
  document.getElementById('test-section')?.appendChild(p);

  focusFirstDescendant(section);

  expect(getFocusableDescendants(section)).toBeFalsy();
  expect(p).not.toHaveFocus();
});

test('focusFirstDescendant - It does not focus on an element with negative tabindex', () => {
  const section = document.createElement('section');
  section.id = 'test-section';

  document.body.appendChild(section);

  const button = document.createElement('button');
  button.tabIndex = -1;

  document.getElementById('test-section')?.appendChild(button);

  focusFirstDescendant(section);

  expect(getFocusableDescendants(section)).toBeFalsy();
  expect(button).not.toHaveFocus();
});

test('trapFocus - will focus on the first element when try to scape from forward or backward', () => {
  const focusableSection = document.createElement('section');
  focusableSection.id = 'test-section';

  const button1Focusable = document.createElement('button');
  button1Focusable.id = 'button1Focusable';

  const button2Focusable = document.createElement('button');
  button2Focusable.id = 'button2Focusable';

  const button3Focusable = document.createElement('button');
  button3Focusable.id = 'button3Focusable';

  focusableSection.appendChild(button1Focusable);
  focusableSection.appendChild(button2Focusable);
  focusableSection.appendChild(button3Focusable);

  document.body.appendChild(focusableSection);

  // Focus last element
  button3Focusable.focus();

  // Trying to forward scape redirect the focus to the first one
  const mockEventForwardScape = {
    shiftKey: false,
    preventDefault: jest.fn(),
  } as unknown as React.KeyboardEvent<HTMLElement>;
  trapFocus(focusableSection, mockEventForwardScape);
  expect(document.activeElement).toBe(button1Focusable);

  // Focus in the first element
  button1Focusable.focus();

  // Trying to backward scape redirect the focus to the first one
  const mockEventBackwardScape = {
    shiftKey: true,
    preventDefault: jest.fn(),
  } as unknown as React.KeyboardEvent<HTMLElement>;
  trapFocus(focusableSection, mockEventBackwardScape);
  expect(document.activeElement).toBe(button3Focusable);
});

test('trapFocus - It executes preventDefault if there are nothing to get the focus', () => {
  const element = document.createElement('div');

  const mockPreventDefault = jest.fn();
  const event = {
    key: 'ArrowDown',
    preventDefault: mockPreventDefault,
  } as unknown as React.KeyboardEvent<HTMLInputElement>;

  trapFocus(element, event);
  expect(mockPreventDefault).toHaveBeenCalled();
});

test('focusNextFocusableElement - The next element focusable is the brother', () => {
  const element = document.createElement('div');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  element.appendChild(button1);
  element.appendChild(button2);

  const result = focusNextFocusableElement(button1);
  expect(result).toBeTruthy();
});

test('focusNextFocusableElement - The next element focusable is the brother inside a container', () => {
  const element = document.createElement('div');
  const button1 = document.createElement('button');
  const containerButton2 = document.createElement('div');
  const button2 = document.createElement('button');

  containerButton2.appendChild(button2);
  element.appendChild(button1);
  element.appendChild(containerButton2);

  const result = focusNextFocusableElement(button1);
  expect(result).toBeTruthy();
});

test('focusNextFocusableElement - It didnt find another element brother focusable', () => {
  const element = document.createElement('div');
  const button1 = document.createElement('button');
  element.appendChild(button1);

  const result = focusNextFocusableElement(button1);
  expect(result).toBeFalsy();
});

test('focusPreviousFocusableElement - The previous element focusable is the brother', () => {
  const element = document.createElement('div');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  element.appendChild(button1);
  element.appendChild(button2);

  const result = focusPreviousFocusableElement(button2);
  expect(result).toBeTruthy();
});

test('focusPreviousFocusableElement - The previous element focusable is the father', () => {
  const element = document.createElement('input');
  const button1 = document.createElement('button');
  element.appendChild(button1);

  const result = focusPreviousFocusableElement(button1);
  expect(result).toBeTruthy();
});

test('focusPreviousFocusableElement - The previous element focusable is the brother inside a container', () => {
  const element = document.createElement('div');
  const containerButton1 = document.createElement('div');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  containerButton1.appendChild(button1);
  element.appendChild(containerButton1);
  element.appendChild(button2);

  const result = focusPreviousFocusableElement(button2);
  expect(result).toBeTruthy();
});
