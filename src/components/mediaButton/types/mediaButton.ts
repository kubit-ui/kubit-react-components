import { IElementOrIcon } from '@/components/elementOrIcon';
import { ILoader } from '@/components/loader/types';
import { CustomTokenTypes } from '@/types';

import {
  MediaButtonVariantStateStylesType,
  MediaButtonVariantStylesType,
} from './mediaButtonTheme';
import { MediaButtonSizeType } from './sizes';

export type MediaButtonLoader = Omit<ILoader, 'variant'> & {
  variant?: string;
};

export interface IMediaButtonStandAlone {
  styles?: MediaButtonVariantStylesType;
  icon: IElementOrIcon;
  twistedIcon?: IElementOrIcon;
  twisted?: boolean;
  loader?: MediaButtonLoader;
  hasBackground?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  loading?: boolean;
  ['aria-hidden']?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type propsToOmit = 'styles';

export interface IMediaButton<V = undefined extends string ? unknown : string>
  extends Omit<IMediaButtonStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<MediaButtonVariantStateStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  size: MediaButtonSizeType;
}
