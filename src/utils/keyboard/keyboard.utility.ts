import {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  ENTER,
  ESCAPE,
  SPACE,
  TAB,
} from '@/constants';

export const isKeyEnterPressed = (key: string): boolean => key === ENTER.key;
export const isKeySpacePressed = (key: string): boolean => key === SPACE.key;
export const isArrowLeftPressed = (key: string): boolean => key === ARROW_LEFT.key;
export const isArrowRightPressed = (key: string): boolean => key === ARROW_RIGHT.key;
export const isArrowDownPressed = (key: string): boolean => key === ARROW_DOWN.key;
export const isArrowUpPressed = (key: string): boolean => key === ARROW_UP.key;
export const isKeyEscapePressed = (key: string): boolean =>
  ESCAPE.key.some(escKey => escKey === key);
export const isKeyTabPressed = (key: string): boolean => key === TAB.key;
