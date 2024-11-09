import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

export type TableHeaderStylesTypes = {
  container?: CommonStyleType;
  row?: CommonStyleType;
  rowPaddingWhenDividerShown?: string;
  column?: CommonStyleType & { lastColumn?: CommonStyleType };
  typography?: TypographyTypes;
};

export type TableRowStylesTypes = {
  row?: CommonStyleType & { lastRow?: CommonStyleType };
  rowPaddingWhenDividerShown?: string;
  column?: CommonStyleType & { lastColumn?: CommonStyleType };
  typography?: TypographyTypes;
  accordionIconContainer?: CommonStyleType;
  accordionIcon?: IconTypes;
  expanded?: CommonStyleType;
};

export type TableDividerStylesType = {
  lineSeparatorLabelVariant?: string;
  lineSeparatorLineVariant?: string;
  dividerVariant?: string;
};

export type TableHeaderVariantStylesTypes<S extends string | number | symbol> = {
  [variant in S]?: TableHeaderStylesTypes;
};

export type TableRowVariantStylesTypes<T extends string | number | symbol> = {
  [variant in T]?: TableRowStylesTypes;
};

export type TableRowHeaderTypes<
  S extends string | number | symbol = string,
  T extends string | number | symbol = string,
> = {
  table?: CommonStyleType;
  header?: TableHeaderVariantStylesTypes<S>;
  bodyContainer?: CommonStyleType;
  bodyRows?: TableRowVariantStylesTypes<T>;
  divider?: TableDividerStylesType;
  footerVariant?: string;
  // List structure
  listContainer?: CommonStyleType;
  listContainerHeaderPriority?: CommonStyleType;
  listContainerSydeBySyde?: CommonStyleType;
  listRowContainer?: CommonStyleType;
  listRowContainerHeaderPriority?: CommonStyleType;
  // listRowContainerBorder check is done because in some themes the line separtor may not be wanted
  // If is required in all themes, should be deleted
  listRowContainerBorder?: boolean;
  listRow?: CommonStyleType;
  listRowHeaderPriority?: CommonStyleType;
  listRowSideBySide?: CommonStyleType;
  listItem?: CommonStyleType;
  // Not need listItemHeaderPriority becaouse it takes the styles from the row
};

/**
 * @description
 * Table styles type
 * @interface TableStylesType
 */
export type TableStylesType<
  P extends string | number | symbol,
  S extends string | number | symbol,
  T extends string | number | symbol,
> = {
  [variant in P]: TableRowHeaderTypes<S, T>;
};
