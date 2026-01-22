type keyMoveType =
  | number
  | ((previous: number, e?: KeyboardEvent) => number)
  | null;

export interface UseRoveFocusProps {
  size: number;
  keyDownMove?: keyMoveType;
  keyUpMove?: keyMoveType;
  keyRightMove?: keyMoveType;
  keyLeftMove?: keyMoveType;
  keyTabMove?: keyMoveType;
  keyPageDownMove?: keyMoveType;
  keyPageUpMove?: keyMoveType;
  currentFocusSelected?: number;
}
