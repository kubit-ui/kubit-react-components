import React from 'react';

import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IButton } from '../../button/types/button';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IElementOrillustration } from '../../elementOrIllustration/types/elementOrIllustration';
import { ILink } from '../../link/types/link';
import type { IText } from '../../text/types/text';
import { EmptyStatePropsStylesType, EmptyStateVariantStylesType } from './emptyStateTheme';

export type EmptyStateTitleType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type EmptyStateSubtitleType = Omit<IText<string>, 'children'> & {
  content: React.ReactNode;
};

export type EmptyStateButtonType = Omit<IButton, 'children' | 'size'> & {
  content?: React.ReactNode;
  size?: string;
};

export type EmptyStateLinkType = Omit<ILink, 'children'> & {
  content?: string;
};

export interface IEmptyStateStandAlone<V = undefined extends string ? unknown : string> {
  styles?: EmptyStatePropsStylesType;
  variant: V;
  title?: EmptyStateTitleType;
  subtitle: EmptyStateSubtitleType;
  button?: EmptyStateButtonType;
  link?: EmptyStateLinkType;
  icon?: IElementOrIcon;
  dataTestId?: string;
  illustration?: IElementOrillustration;
}

export interface IEmptyState<V = undefined extends string ? unknown : string>
  extends Omit<IEmptyStateStandAlone<V>, 'styles' | 'device'>,
    Omit<CustomTokenTypes<EmptyStateVariantStylesType<string>>, 'cts' | 'extraCt'> {
  state: string;
}
