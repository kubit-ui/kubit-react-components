export type PositionType =
  | 'bottom'
  | 'bottom-center'
  | 'bottom-center-fixed'
  | 'bottom-fixed'
  | 'bottom-gap-right'
  | 'bottom-left'
  | 'bottom-left-fit-content'
  | 'bottom-right'
  | 'bottom-right-fit-content'
  | 'center'
  | 'left'
  | 'left-bottom-fixed'
  | 'left-fixed'
  | 'right'
  | 'right-fixed'
  | 'top'
  | 'top-center'
  | 'top-center-fixed'
  | 'top-left'
  | 'top-right'
  | 'without';

export const POSITIONS = {
  BOTTOM: 'bottom',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_CENTER_FIXED: 'bottom-center-fixed',
  BOTTOM_FIXED: 'bottom-fixed',
  BOTTOM_GAP_RIGHT: 'bottom-gap-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_LEFT_FIT_CONTENT: 'bottom-left-fit-content',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_RIGHT_FIT_CONTENT: 'bottom-right-fit-content',
  CENTER: 'center',
  LEFT: 'left',
  LEFT_BOTTOM_FIXED: 'left-bottom-fixed',
  LEFT_FIXED: 'left-fixed',
  RIGHT: 'right',
  RIGHT_FIXED: 'right-fixed',
  TOP: 'top',
  TOP_CENTER: 'top-center',
  TOP_CENTER_FIXED: 'top-center-fixed',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  WITHOUT: 'without',
} as const;

export const MIRROR_POSITIONS = {
  [POSITIONS.BOTTOM]: POSITIONS.TOP,
  [POSITIONS.BOTTOM_CENTER]: POSITIONS.TOP_CENTER,
  [POSITIONS.LEFT]: POSITIONS.RIGHT,
  [POSITIONS.RIGHT]: POSITIONS.LEFT,
  [POSITIONS.TOP]: POSITIONS.BOTTOM,
  [POSITIONS.TOP_CENTER]: POSITIONS.BOTTOM_CENTER,
};
