import * as React from 'react';

import { ButtonType } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { LineSeparatorLinePropsStylesType } from '@/components/lineSeparator';
import { IText, TextComponentType } from '@/components/text/types';
import { CustomTokenTypes } from '@/types';

import { AccordionPropsStylesType } from './accordionTheme';

export type AccordionTextType = Omit<IText<string>, 'children'> & {
  content?: React.ReactNode;
};

export type AccordionTriggerButtonType = {
  ['aria-label']?: string;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * @description
 * interface for the accordion standAlone
 * @interface IAccordionStandAlone
 */
export interface IAccordionStandAlone {
  styles: AccordionPropsStylesType;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  open?: boolean;
  title?: AccordionTextType;
  titleIcon?: IElementOrIcon;
  subHeaderContent?: React.ReactNode;
  headerRightContent?: React.ReactNode;
  hasHeaderLineSeparator?: boolean;
  footerContent?: React.ReactNode;
  triggerComponent?: TextComponentType;
  triggerButton?: AccordionTriggerButtonType;
  triggerIcon?: IElementOrIcon;
  dataTestId?: string;
}

/**
 * @description
 * interface for the controlled accordion
 * @template V
 * @interface IAccordionControlled
 */
export interface IAccordionControlled<V = undefined extends string ? unknown : string>
  extends React.PropsWithChildren<Omit<IAccordionStandAlone, 'styles' | 'lineSeparatorLineStyles'>>,
    Omit<CustomTokenTypes<AccordionPropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}

/**
 * @description
 * interface for the accordion
 * @template V
 * @interface IAccordion
 */
export interface IAccordion<V = undefined extends string ? unknown : string>
  extends Omit<IAccordionControlled<V>, 'open'> {
  defaultOpen?: boolean;
  onOpenClose?: (open: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
}
