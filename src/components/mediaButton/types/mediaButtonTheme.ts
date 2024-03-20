import { CommonStyleType, IconTypes } from '@/types';

import { MediaButtonSizeType } from './sizes';

export type MediaButtonVariantStylesType = {
  altVariant?: boolean;
  container?: CommonStyleType;
  buttonContainer?: CommonStyleType;
  icon?: IconTypes & { disabled?: IconTypes };
  iconToTransition?: IconTypes;
  loader?: {
    variant: string;
  };
};

export type MediaButtonVariantStateStylesType = {
  [key in MediaButtonSizeType]?: MediaButtonVariantStylesType;
};

/**
 * @description
 * MediaButton styles type
 * @interface MediaButtonStylesType
 * @property {boolean} altVariant - Alternative variant of the media button.
 * @property {CommonStyleType} container - Container of the media button.
 * @property {IconTypes} icon - Icon of the media button.
 * @property {IconTypes} iconToTransition - Icon to transition of the media button.
 * @property {LoaderVariantType} loader.variant - Loader variant of the media button.
 * @example
 * <Button variant={ButtonVariantType.PRIMARY} size={ButtonSizeType.SMALL} />
 */

export type MediaButtonStylesType<P extends string | number | symbol> = {
  [key in P]: MediaButtonVariantStateStylesType;
};
