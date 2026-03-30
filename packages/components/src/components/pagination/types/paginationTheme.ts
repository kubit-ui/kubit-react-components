import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface PaginationStyleProps extends CssLibPropsType {
  _pagesContainer?: CssLibPropsType;
  _paginationLeftArrowIcon?: CssLibPropsType;
  _paginationRightArrowIcon?: CssLibPropsType;
  _paginationCountersNumber?: CssLibPropsType;
  _page?: CssLibPropsType;
  _pageContainer?: CssLibPropsType;
}

export type PaginationVariantStyles<Variant extends string> =
  PaginationStyleProps & {
    [key in Variant]: PaginationStyleProps;
  };
