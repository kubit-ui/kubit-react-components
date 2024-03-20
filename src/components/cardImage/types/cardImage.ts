import { ILink } from '@/components/link';
import { IText } from '@/components/text';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { CardImageVariantStylesType } from './cardImageTheme';

type ImagesType = {
  [DeviceBreakpointsType.DESKTOP]: string;
  [DeviceBreakpointsType.MOBILE]: string;
  [DeviceBreakpointsType.TABLET]: string;
};

export type CardImageTitleAndDescriptionType = Omit<IText<string>, 'children'> & {
  content: React.ReactNode;
};

export type CardImageLinkType = Omit<ILink, 'children'> & {
  content: string;
};

export interface ICardImageStandAlone {
  styles: CardImageVariantStylesType;
  image: ImagesType;
  title: CardImageTitleAndDescriptionType;
  description?: CardImageTitleAndDescriptionType;
  link?: CardImageLinkType;
  device: string;
  imageAltText?: string;
  as?: string | React.ElementType;
  onClick?: React.MouseEventHandler;
}

export interface ICardImage<V = undefined extends string ? unknown : string>
  extends Omit<ICardImageStandAlone, 'styles' | 'device'>,
    Omit<CustomTokenTypes<CardImageVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
