// hook
import userEvent from '@testing-library/user-event';

import { renderHook } from '@testing-library/react-hooks';

import { useTrapFocus } from '../useTrapFocus';

const container = document.createElement('div');
container.id = 'test-container';

const button1Focusable = document.createElement('button');
button1Focusable.id = 'button1Focusable';

const button2Focusable = document.createElement('button');
button2Focusable.id = 'button2Focusable';

const button3Focusable = document.createElement('button');
button3Focusable.id = 'button3Focusable';

container.appendChild(button1Focusable);
container.appendChild(button2Focusable);
container.appendChild(button3Focusable);

document.body.appendChild(container);

const ref = { current: container };

describe('useTrapFocus', () => {
  it('not trap focus when hasFocusTrap is false', async () => {
    renderHook(() => useTrapFocus({ element: ref, hasFocusTrap: false }));

    const user = userEvent.setup();

    button3Focusable.focus();
    expect(button3Focusable).toHaveFocus();

    await user.tab();

    expect(document.body).toHaveFocus();
  });

  it('traps focus on the first element when last element is focused and tab is pressed', async () => {
    renderHook(() => useTrapFocus({ element: ref }));

    const user = userEvent.setup();

    // Focus last element
    button3Focusable.focus();
    expect(button3Focusable).toHaveFocus();

    // Press Tab
    await user.tab();

    // Focus first element
    expect(button1Focusable).toHaveFocus();

    // Press shift + Tab
    await user.tab({ shift: true });
    // Focus last element
    expect(button3Focusable).toHaveFocus();
  });

  // when blur and key tab is no pressed, focus to the next focusable element
  it('focuses on the next focusable element when blur and key tab is not pressed', () => {
    renderHook(() => useTrapFocus({ element: ref }));

    button1Focusable.focus();
    expect(button1Focusable).toHaveFocus();

    button1Focusable.blur();

    // waiting for document.activeElement to be updated
    setTimeout(() => {
      expect(button2Focusable).toHaveFocus();
    }, 0);
  });
  it('focuses on the first focusable element when blur and key tab is not pressed if last element is disabled', () => {
    renderHook(() => useTrapFocus({ element: ref }));

    const button4Focusable = document.createElement('button');
    button4Focusable.id = 'button4Focusable';
    button4Focusable.disabled = true;

    container.appendChild(button4Focusable);

    button3Focusable.focus();
    expect(button3Focusable).toHaveFocus();

    button3Focusable.blur();

    // waiting for document.activeElement to be updated
    setTimeout(() => {
      expect(button1Focusable).toHaveFocus();
    }, 0);
  });
});
