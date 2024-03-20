import * as React from 'react';

import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IElementOrillustration } from '@/components/elementOrIllustration';
import { ILink } from '@/components/link';
import type { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

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
