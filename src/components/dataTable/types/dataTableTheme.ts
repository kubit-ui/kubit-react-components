import { CommonStyleType } from '@/types';

export type DataTablePropsStylesType = {
  wrapper?: CommonStyleType;
  scrollableContainer?: CommonStyleType;
  table?: {
    variant?: string;
    // This props will be added to the table that act as tableHead when using rowGroups
    z_index?: number;
  };
  tableCaption?: {
    variant?: string;
  };
  tableHead?: {
    variant?: string;
  };
  tableHeadRow?: {
    variant?: string;
  };
  tableHeadCell?: {
    variant?: string;
  };
  tableBody?: {
    variant?: string;
  };
  tableBodyRow?: {
    variant?: string;
  };
  tableBodyCell?: {
    variant?: string;
  };
  rowGroup?: {
    table?: {
      variant?: string;
    };
    tableCaption?: {
      variant?: string;
    };
    tableHead?: {
      variant?: string;
    };
    tableHeadRow?: {
      variant?: string;
    };
    tableHeadCell?: {
      variant?: string;
    };
    tableBody?: {
      variant?: string;
    };
    tableBodyRow?: {
      variant?: string;
    };
    tableBodyCell?: {
      variant?: string;
    };
  };
  leftBoxShadowContainer?: CommonStyleType;
  rightBoxShadowContainer?: CommonStyleType;
  headBoxShadow?: string;
  leftBoxShadow?: string;
  rightBoxShadow?: string;
};

export type DataTableStylesType<P extends string | number | symbol> = {
  [variant in P]: DataTablePropsStylesType;
};
