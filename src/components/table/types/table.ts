import React from 'react';

import { IDivider } from '@/components/divider';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IFooter } from '@/components/footer';
import {
  LineSeparatorLinePropsStylesType,
  LineSeparatorPositionType,
} from '@/components/lineSeparator';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { FormatListHeaderPriorityType } from './formatListHeaderPriority';
import { TableRowHeaderTypes } from './tableTheme';

/**
 * @description
/**
 * @description
 * List props
 * @interface IListComponent
 */
export interface IListComponent extends Omit<ITableStandAlone, 'headerVariant'> {
  hasSomeExpandedContent: boolean;
  initialExpanded: boolean;
  headerVariant: string;
}

// Should be deprecated, it does not appears in the new designs ?
export interface IListRowPriority extends IListComponent {
  value: IValue;
  index: number;
}

/**
 * @description
 * IListRowHeaderPriority
 * @interface IListRowHeaderPriority
 */
export interface IListRowHeaderPriority extends IListComponent {
  value: IValue;
  index: number;
}

type AlignType = {
  [keys in DeviceBreakpointsType]?: string;
};

type HiddenType = {
  [keys in DeviceBreakpointsType]?: boolean;
};

type ShowDividerHeaderType = {
  [keys in DeviceBreakpointsType]?: boolean;
};

type SrOnlyHeaderType = {
  [keys in DeviceBreakpointsType]?: boolean;
};

type ExpandedContentType = {
  [keys in DeviceBreakpointsType]?: JSX.Element;
};

export type FlexWidthType = {
  [keys in DeviceBreakpointsType]?: number | string;
};

export type TableDividerType = Omit<IDivider, 'variant'> & {
  variant?: string;
};

export type ValueConfigType = {
  value?:
    | string
    | JSX.Element
    | undefined
    | ExpandedContentType
    | TableDividerType
    | object
    | number
    | boolean;
  backgroundColor?: string;
  align?: string;
};

export type IValueConfigPropsType = {
  expandedContent?: ExpandedContentType;
  dividerContent?: TableDividerType;
  accordionIconCollapsedAriaLabel?: string;
  accordionIconExpandedAriaLabel?: string;
  rowVariant?: string;
  rowHeader?: ITableRowHeader;
  rowBorderPosition?: LineSeparatorPositionType;
  backgroundColor?: string;
  align?: string;
};

/**
 * @description
 * Table value props
 * @interface IValue
 */
export type IValue = IValueConfigPropsType & {
  [key: string]:
    | string
    | JSX.Element
    | undefined
    | ExpandedContentType
    | TableDividerType
    | object
    | number
    | boolean;
};

/**
 * @description
 * Table header config props
 */
export type ConfigType = {
  alignHeader?: string | AlignType;
  alignValue?: string | AlignType;
  hasDivider?: boolean;
  showDividerHeader?: boolean | ShowDividerHeaderType;
  width?: string;
  hidden?: HiddenType;
  srOnlyHeader?: boolean | SrOnlyHeaderType;
  flexWidth?: number | string | FlexWidthType;
  backgroundColor?: string;
};

export type ValueFunctionType = (
  value?: IValue
) => string | JSX.Element | { dividerContent: TableDividerType };

export type DividerContent = { dividerContent?: TableDividerType };

/**
 * @description
 * Table header props
 * @interface ITableHeader
 */
export interface ITableHeader {
  label: React.ReactNode;
  id: string;
  config?: ConfigType;
  value?: ValueFunctionType & DividerContent;
  variant?: string;
}

export interface ITableRowHeader extends Omit<ITableHeader, 'id'> {
  variant: string;
}

export type TableFooterType = Omit<IFooter, 'children' | 'variant'> & {
  content?: JSX.Element[] | JSX.Element;
  variant?: string;
};

type TableAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby'
>;

type TBodyScrollAriasType = {
  ['aria-label']?: string;
  ['aria-labelledby']?: string;
};

/**
 * @description
 * Table props
 * @interface ITableStandAlone
 */
export interface ITableStandAlone extends TableAriaAttributes {
  styles: TableRowHeaderTypes<string, string>;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  lineSeparatorTopOnHeader?: boolean;
  lineSeparatorBottomOnHeader?: boolean;
  values: IValue[];
  headers: ITableHeader[];
  accordionIcon?: IElementOrIcon;
  accordionIconCollapsedAriaLabel?: string;
  accordionIconExpandedAriaLabel?: string;
  footer?: TableFooterType;
  captionDescription: string;
  initialExpanded?: boolean;
  dataTestId?: string;
  hiddenHeaderOn?: HiddenType;
  device: DeviceBreakpointsType;
  scrolling: boolean;
  hasScroll: boolean;
  tBodyScrollArias?: TBodyScrollAriasType;
  headerVariant?: string;
  expandedContentHelpMessage?: string;
  formatList?: { [key in DeviceBreakpointsType]?: boolean };
  formatListHeaderPriority?: FormatListHeaderPriorityType;
  /** @deprecated Use instead hasFormatList */
  formatListInMobile?: boolean;
  formatSideBySideInList?: boolean;
  onExpandedContentOpen?: (
    open: boolean,
    value: string | JSX.Element | DividerContent,
    indexHeader: number
  ) => void;
}

/**
 * @description
 * Table props
 * @interface ITable
 */
export interface ITable<V = undefined extends string ? unknown : string>
  extends Omit<
      ITableStandAlone,
      'styles' | 'lineSeparatorLineStyles' | 'device' | 'scrolling' | 'hasScroll'
    >,
    Omit<CustomTokenTypes<TableRowHeaderTypes<string, string>>, 'cts' | 'extraCt'> {
  variant: V;
  lineSeparatorLineVariant?: string;
}
