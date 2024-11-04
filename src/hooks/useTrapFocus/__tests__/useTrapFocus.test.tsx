import userEvent from '@testing-library/user-event';

import { renderHook } from '@testing-library/react-hooks';

import { useTrapFocus } from '../useTrapFocus';

describe('useTrapFocus', () => {
  let container: HTMLDivElement;
  let button1Focusable: HTMLButtonElement;
  let button2Focusable: HTMLButtonElement;
  let button3Focusable: HTMLButtonElement;
  let ref: React.RefObject<HTMLElement>;

  beforeEach(() => {
    container = document.createElement('div');

    button1Focusable = document.createElement('button');
    button2Focusable = document.createElement('button');
    button3Focusable = document.createElement('button');

    container.appendChild(button1Focusable);
    container.appendChild(button2Focusable);
    container.appendChild(button3Focusable);
    document.body.appendChild(container);
    ref = { current: container };
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('does not trap focus when trapFocus is false (default value)', async () => {
    renderHook(() => useTrapFocus({ ref }));

    const user = userEvent.setup();

    button3Focusable.focus();

    await user.tab();

    expect(document.body).toHaveFocus();
  });

  it('does not trap focus if element is not defined', async () => {
    renderHook(() => useTrapFocus({ ref: { current: null }, trapFocus: true }));

    const user = userEvent.setup();

    button3Focusable.focus();
    expect(button3Focusable).toHaveFocus();

    await user.tab();

    expect(document.body).toHaveFocus();
  });

  it('will not change focus if key pressed is different from tab', async () => {
    renderHook(() => useTrapFocus({ ref, trapFocus: true }));

    const user = userEvent.setup();

    button3Focusable.focus();
    await user.type(button3Focusable, '{enter}');

    expect(button3Focusable).toHaveFocus();
  });

  it('does not trap focus if the element does not have focusable elements', async () => {
    const externalButton1 = document.createElement('button');
    const _container = document.createElement('div');
    const internalContainer = document.createElement('div');
    _container.appendChild(internalContainer);
    const externalButton2 = document.createElement('button');
    document.body.appendChild(externalButton1);
    document.body.appendChild(_container);
    document.body.appendChild(externalButton2);

    renderHook(() => useTrapFocus({ ref: { current: _container }, trapFocus: true }));

    const user = userEvent.setup();

    externalButton1.focus();

    await user.tab();

    expect(externalButton2).toHaveFocus();
  });

  it('will focus to the first focusable element if the current active element is the last one, and tab (no shift) is pressed', async () => {
    renderHook(() => useTrapFocus({ ref, trapFocus: true }));

    const user = userEvent.setup();

    button3Focusable.focus();
    await user.tab();

    expect(button1Focusable).toHaveFocus();
  });

  it('will focus to the last focusable element if the current active element is the first one, and tab + shift is pressed', async () => {
    renderHook(() => useTrapFocus({ ref, trapFocus: true }));

    const user = userEvent.setup();

    button1Focusable.focus();
    await user.tab({ shift: true });

    expect(button3Focusable).toHaveFocus();
  });

  it('will focus to the first focusable element if the current active element is before the first focusable element, and tab is pressed', async () => {
    renderHook(() => useTrapFocus({ ref, trapFocus: true }));

    const user = userEvent.setup();

    document.body.focus();

    await user.tab();

    expect(button1Focusable).toHaveFocus();
  });

  it('will focus to the last focusable element if the current active element is before the first focusable element, and tab + shift is pressed', async () => {
    renderHook(() => useTrapFocus({ ref, trapFocus: true }));

    const user = userEvent.setup();

    document.body.focus();

    await user.tab({ shift: true });

    expect(button3Focusable).toHaveFocus();
  });

  it('will focus to the first focusable element if the current active element is after the last focusable element, and tab is pressed', async () => {
    const container = document.createElement('div');
    const firstFocusableElement = document.createElement('button');
    const lastFocusableElement = document.createElement('button');
    const optionElement = document.createElement('div');
    optionElement.setAttribute('tabIndex', '-1');
    container.appendChild(firstFocusableElement);
    container.appendChild(lastFocusableElement);
    container.appendChild(optionElement);
    document.body.appendChild(container);

    renderHook(() => useTrapFocus({ ref: { current: container }, trapFocus: true }));

    const user = userEvent.setup();

    optionElement.focus();

    await user.tab();

    expect(firstFocusableElement).toHaveFocus();
  });

  it('will focus to the last focusable element if the current active element is after the last focusable element, and tab + shift is pressed', async () => {
    const container = document.createElement('div');
    const firstFocusableElement = document.createElement('button');
    const lastFocusableElement = document.createElement('button');
    const optionElement = document.createElement('div');
    optionElement.setAttribute('tabIndex', '-1');
    container.appendChild(firstFocusableElement);
    container.appendChild(lastFocusableElement);
    container.appendChild(optionElement);
    document.body.appendChild(container);

    renderHook(() => useTrapFocus({ ref: { current: container }, trapFocus: true }));

    const user = userEvent.setup();

    optionElement.focus();

    await user.tab({ shift: true });

    expect(lastFocusableElement).toHaveFocus();
  });
});
