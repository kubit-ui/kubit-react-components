import { CommonStyleType, TypographyTypes } from '@/types';

export type TableRowPropsStylesType = {
  container?: CommonStyleType & TypographyTypes;
  // Apply styles hover the cell when the row is active or hovered
  // Styles are applied over the cell and no over the row, this is because the cell background could have been set, and it should be overriden when active or hover
  activeCellContainer?: CommonStyleType & TypographyTypes;
  hoveredCellContainer?: CommonStyleType & TypographyTypes;
};

export type TableRowStylesType<P extends string | number | symbol> = {
  [variant in P]: TableRowPropsStylesType;
};
