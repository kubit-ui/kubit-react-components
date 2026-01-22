/**
 * Keyboard key constants
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 */

const BACKSPACE = {
  code: 'Backspace',
  key: 'Backspace',
  keyCode: 8,
  which: 8,
};

const TAB = {
  code: 'Tab',
  key: 'Tab',
  keyCode: 9,
  which: 9,
};

const ENTER = {
  code: 'Enter',
  key: 'Enter',
  keyCode: 13,
  which: 13,
};

const ESCAPE = {
  code: 'Esc',
  key: [
    'Escape',
    // IE11 Escape
    'Esc',
  ],
  keyCode: 27,
  which: 27,
};

const SPACE = {
  code: 'Space',
  key: ' ',
  keyCode: 32,
  which: 32,
};

const PAGE_UP = {
  code: 'PageUp',
  key: 'PageUp',
  keyCode: 33,
  which: 33,
};

const PAGE_DOWN = {
  code: 'PageDown',
  key: 'PageDown',
  keyCode: 34,
  which: 34,
};

const ARROW_LEFT = {
  code: 'ArrowLeft',
  key: 'ArrowLeft',
  keyCode: 37,
  which: 37,
};

const ARROW_UP = {
  code: 'ArrowUp',
  key: 'ArrowUp',
  keyCode: 38,
  which: 38,
};

const ARROW_RIGHT = {
  code: 'ArrowRight',
  key: 'ArrowRight',
  keyCode: 39,
  which: 39,
};

const ARROW_DOWN = {
  code: 'ArrowDown',
  key: 'ArrowDown',
  keyCode: 40,
  which: 40,
};

const DELETE = {
  code: 'ArrowDecimal',
  key: 'Delete',
  keyCode: 46,
  which: 46,
};

const HOME = {
  key: 'Home',
};

const END = {
  key: 'End',
};

export {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  BACKSPACE,
  DELETE,
  END,
  ENTER,
  ESCAPE,
  HOME,
  PAGE_DOWN,
  PAGE_UP,
  SPACE,
  TAB,
};
