import {
  focusFirstDescendant,
  focusNextFocusableElement,
  focusPreviousFocusableElement,
  getFocusableDescendants,
  getFocusableDescendantsV2,
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

describe('getFocusableDescendantsV2', () => {
  it('Filter disabled', () => {
    const element = document.createElement('div');
    const button = document.createElement('button');
    button.disabled = true;
    element.appendChild(button);

    const result = getFocusableDescendantsV2({ element });
    expect(result).toHaveLength(0);
  });

  it('Filter aria-disabled elements', () => {
    const element = document.createElement('div');
    const button = document.createElement('button');
    button.setAttribute('aria-disabled', 'true');
    element.appendChild(button);

    const result = getFocusableDescendantsV2({ element });
    expect(result).toHaveLength(0);
  });

  it('Filter aria-hidden attributes', () => {
    const element = document.createElement('div');
    const button = document.createElement('button');
    button.setAttribute('aria-hidden', 'true');
    element.appendChild(button);

    const result = getFocusableDescendantsV2({ element });
    expect(result).toHaveLength(0);
  });

  it('Filter elements to omit', () => {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const omit = document.createElement('div');
    omit.appendChild(button);
    element.appendChild(omit);

    const result = getFocusableDescendantsV2({ element, elementsToOmit: [omit] });
    expect(result).toHaveLength(0);
  });

  it('Filter elements that are not summary and are inside a closed details', () => {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const details = document.createElement('details');
    details.appendChild(button);
    element.appendChild(details);

    const result = getFocusableDescendantsV2({ element });
    expect(result).toHaveLength(0);
  });

  it('Return focusable elements', () => {
    const element = document.createElement('div');
    const button = document.createElement('button');
    element.appendChild(button);

    const result = getFocusableDescendantsV2({ element });
    expect(result).toHaveLength(1);
  });
});
