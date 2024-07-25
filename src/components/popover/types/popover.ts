import * as React from 'react';

import {
  CssAnimationConfig,
  CssAnimationExecuteOption,
  CssAnimationType,
  ICssAnimationOptions,
} from '@/components/cssAnimation';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';
import { POSITIONS } from '@/types/positions';

import type { PopoverComponentType } from './component';
import type { PopoverVariantStylesType } from './popoverTheme';
import type { PopoverPositionVariantType } from './positionVariant';

export interface IPopoverStandAlone {
  forwardedRef: (node: HTMLDivElement | null) => void;
  positionVariant?: PopoverPositionVariantType;
  align?: POSITIONS;
  autoWidth?: boolean;
  hasBackDrop?: boolean;
  open?: boolean;
  children: React.ReactNode;
  styles: PopoverVariantStylesType;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  maxHeight?: string;
  maxWidth?: string;
  component?: PopoverComponentType;
  id?: string;
  ['aria-label']?: string;
  ['aria-modal']?: boolean;
  ['aria-description']?: string;
  ['aria-labelledby']?: string;
  role?: string;
  tabIndex?: number;
  transparentBackground?: boolean;
  extraAlignGap?: string;
  animation?: CssAnimationType;
  animationOptions?: ICssAnimationOptions;
  animationExecution?: CssAnimationExecuteOption;
  fullWidth?: boolean;
  animationConfig: CssAnimationConfig;
  device: DeviceBreakpointsType;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  preventCloseOnClickElements?: (HTMLElement | null | undefined)[];
  dataTestId?: string;
  clickOverlayClose?: boolean;
  extraWidth?: string;
  extraWidthSide?: POSITIONS;
}

export interface IPopoverControlled
  extends Omit<IPopoverStandAlone, 'styles' | 'animationConfig' | 'forwardedRef' | 'device'>,
    Omit<CustomTokenTypes<PopoverVariantStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
  onCloseInternally?: () => void;
  forwardedRef?: (node: HTMLDivElement) => void;
  focusFirstDescendantAutomatically?: boolean;
  focusLastElementFocusedAfterClose?: boolean;
  focusScreenFirstDescendantAfterClose?: boolean;
  trapFocusInsideModal?: boolean;
  blockBack?: boolean;
  pressEscapeClose?: boolean;
  preventScrollOnCloseFocus?: boolean;
}

export type IPopoverUnControlled = Omit<IPopoverControlled, 'onCloseInternally'>;
