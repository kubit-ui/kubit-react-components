import { IAvatar } from '../../avatar/types/avatar';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IIconHighlighted } from '../../iconHighlighted/types/iconHighlighted';
import { IIllustration } from '../../illustration/types/illustration';
import { IImage } from '../../image/types/image';

/**
 * @name DecorativeType
 * @description
 * Enum for the DecorativeType
 */
export enum DecorativeType {
  ICON = 'ICON',
  ICON_HIGHLIGHTED = 'ICON_HIGHLIGHTED',
  ILLUSTRATION = 'ILLUSTRATION',
  IMAGE = 'IMAGE',
  AVATAR = 'AVATAR',
}

/**
 * @name DecorativePropsType
 * @description
 * Interface for the DecorativePropsType
 *
 */
export type DecorativePropsType = {
  [DecorativeType.ICON]?: IElementOrIcon;
  [DecorativeType.ICON_HIGHLIGHTED]?: IIconHighlighted;
  [DecorativeType.ILLUSTRATION]?: IIllustration;
  [DecorativeType.IMAGE]?: IImage;
  [DecorativeType.AVATAR]?: IAvatar;
};

/**
 * @name IDecorativeElement
 * @description
 * Interface for the DecorativeElement component
 *
 */
export interface IDecorativeElementStandAlone {
  element: DecorativePropsType;
  additionalProps?: object;
  dataTestId?: string;
}
