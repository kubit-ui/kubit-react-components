import React from 'react';

import { IDivider } from '@/components/divider';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IFooter } from '@/components/footer';
import {
  LineSeparatorLinePropsStylesType,
  LineSeparatorPositionType,
} from '@/components/lineSeparator';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { TableRowHeaderTypes } from './tableTheme';

/**
 * @description
 * IListRow
 * @interface IListRow
 */
export interface IListRow extends IListComponent {
  value: IValue;
  index: number;
}

/**
 * @description
 * List props
 * @interface IListComponent
 */
export interface IListComponent extends Omit<ITableStandAlone, 'headerVariant'> {
  hasSomeExpandedContent: boolean;
  initialExpanded: boolean;
}

type AlignType = {
  [keys in DeviceBreakpointsType]?: string;
};

type HiddenType = {
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

/**
 * @description
 * Table value props
 * @interface IValue
 */
export type IValue = {
  expandedContent?: ExpandedContentType;
  dividerContent?: TableDividerType;
  accordionIconCollapsedAriaLabel?: string;
  accordionIconExpandedAriaLabel?: string;
  rowVariant?: string;
  rowBorderPosition?: LineSeparatorPositionType;
  backgroundColor?: string;
} & {
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
  width?: string;
  hidden?: HiddenType;
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
  config: ConfigType;
  value?: ValueFunctionType & DividerContent;
}

export type TableFooterType = Omit<IFooter, 'children' | 'variant'> & {
  content?: JSX.Element[] | JSX.Element;
  variant?: string;
};

type TableAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby'
>;

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
  headerVariant?: string;
  expandedContentHelpMessage?: string;
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
  extends Omit<ITableStandAlone, 'styles' | 'lineSeparatorLineStyles' | 'device'>,
    Omit<CustomTokenTypes<TableRowHeaderTypes<string, string>>, 'cts' | 'extraCt'> {
  variant: V;
  lineSeparatorLineVariant?: string;
}
