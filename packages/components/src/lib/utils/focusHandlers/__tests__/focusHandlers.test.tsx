import {
  focusNextFocusableElement,
  focusPreviousFocusableElement,
} from '../focusHandlers';

it('focusNextFocusableElement - The next element focusable is the brother', () => {
  const element = document.createElement('div');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  element.appendChild(button1);
  element.appendChild(button2);

  const result = focusNextFocusableElement(button1);
  expect(result).toBeTruthy();
});

it('focusNextFocusableElement - The next element focusable is the brother inside a container', () => {
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

it('focusNextFocusableElement - It didnt find another element brother focusable', () => {
  const element = document.createElement('div');
  const button1 = document.createElement('button');
  element.appendChild(button1);

  const result = focusNextFocusableElement(button1);
  expect(result).toBeFalsy();
});

it('focusPreviousFocusableElement - The previous element focusable is the brother', () => {
  const element = document.createElement('div');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  element.appendChild(button1);
  element.appendChild(button2);

  const result = focusPreviousFocusableElement(button2);
  expect(result).toBeTruthy();
});

it('focusPreviousFocusableElement - The previous element focusable is the father', () => {
  const element = document.createElement('input');
  const button1 = document.createElement('button');
  element.appendChild(button1);

  const result = focusPreviousFocusableElement(button1);
  expect(result).toBeTruthy();
});

it('focusPreviousFocusableElement - The previous element focusable is the brother inside a container', () => {
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
