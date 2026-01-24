import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface DataTableStyleProps extends CssLibPropsType {
  _scrollableContainer?: CssLibPropsType;
  _container?: CssLibPropsType;
  _table?: CssLibPropsType;
  _tableCaption?: CssLibPropsType;
  _tableHead?: CssLibPropsType;
  _tableHeadRow?: CssLibPropsType;
  _tableHeadCell?: CssLibPropsType;
  _tableBody?: CssLibPropsType;
  _tableBodyRow?: CssLibPropsType;
  _tableBodyCell?: CssLibPropsType;
  _rowGroupTable?: CssLibPropsType;
  _rowGroupTableCaption?: CssLibPropsType;
  _rowGroupTableHead?: CssLibPropsType;
  _rowGroupTableHeadRow?: CssLibPropsType;
  _rowGroupTableHeadCell?: CssLibPropsType;
  _rowGroupTableBody?: CssLibPropsType;
  _rowGroupTableBodyRow?: CssLibPropsType;
  _rowGroupTableBodyCell?: CssLibPropsType;
  _leftBoxShadowContainer?: CssLibPropsType;
  _rightBoxShadowContainer?: CssLibPropsType;
  _headBoxShadow?: CssLibPropsType;
  _leftBoxShadow?: CssLibPropsType;
  _rightBoxShadow?: CssLibPropsType;
  // $foreign?: {
  //   rowGroupTable?: object;
  //   rowGroupTableBody?: object;
  //   rowGroupTableBodyCell?: object;
  //   rowGroupTableBodyRow?: object;
  //   rowGroupTableCaption?: object;
  //   rowGroupTableHead?: object;
  //   rowGroupTableHeadCell?: object;
  //   rowGroupTableHeadRow?: object;
  //   table?: object;
  //   tableBody?: object;
  //   tableBodyCell?: object;
  //   tableBodyRow?: object;
  //   tableCaption?: object;
  //   tableHead?: object;
  //   tableHeadCell?: object;
  //   tableHeadRow?: object;
  // };
}

export type DataTableVariantStyles<Variant extends string> =
  DataTableStyleProps & {
    [key in Variant]: DataTableStyleProps;
  };
