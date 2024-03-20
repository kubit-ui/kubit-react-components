import { ListDaysStateType } from './state';

export type ListVariantStylesType = {
  label_font_color?: string;
  label_font_size?: string;
  label_font_weight?: number;
  label_font_align?: string;
  border?: string;
  border_top?: string;
  border_bottom?: string;
  radius_size?: string;
  background_color?: string;
  gap_days?: string;
};

export type ListStylesVariantType = {
  [state in ListDaysStateType]?: ListVariantStylesType;
};

export type ListStylesType = ListStylesVariantType;
