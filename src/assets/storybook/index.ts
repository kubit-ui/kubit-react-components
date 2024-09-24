import ICON_CHECKMARK_THICK from './icons/checkmark_thick.svg';
import ICON_CHEVRON_DOWN from './icons/icon_chevron_down.svg';
import ICON_CHEVRON_LEFT from './icons/icon_chevron_left.svg';
import ICON_CHEVRON_RIGHT from './icons/icon_chevron_right.svg';
import ICON_CHEVRON_UP from './icons/icon_chevron_up.svg';
import ICON_DRAG from './icons/icon_ds_handle.svg';
import ICON_GHOST from './icons/icon_ghost.svg';
import ICON_PLACEHOLDER from './icons/icon_placeholder.svg';
import ICON_CLOSE from './icons/icon_x_close.svg';
import ICON_PLAY_BUTTON from './icons/play_button.svg';
import ICON_REPLACE from './icons/replace.svg';
import ILLUSTRATION from './illustrations/illustration.svg';
import IMAGE_1 from './images/image_1.png';
import IMAGE_2 from './images/image_2.png';
import IMAGE_3 from './images/image_3.png';
import IMAGE_4 from './images/image_4.png';

export const ICONS = {
  NO_ICON: null,
  ICON_CHEVRON_UP,
  ICON_CHEVRON_DOWN,
  ICON_GHOST,
  ICON_PLACEHOLDER,
  ICON_CHEVRON_LEFT,
  ICON_CHEVRON_RIGHT,
  ICON_CLOSE,
  ICON_PLAY_BUTTON,
  ICON_CHECKMARK_THICK,
  ICON_REPLACE,
  ICON_DRAG,
};

export const ILLUSTRATIONS = {
  NO_ILLUSTRATION: null,
  ILLUSTRATION,
};

export const IMAGES = {
  NO_IMAGE: null,
  IMAGE_1,
  IMAGE_2,
  IMAGE_3,
  IMAGE_4,
};

export type DecorativeType = typeof ICONS | typeof ILLUSTRATIONS | typeof IMAGES;
