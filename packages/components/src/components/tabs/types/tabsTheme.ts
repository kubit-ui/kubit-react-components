import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface TabsStyleProps extends CssLibPropsType {
  _tabContainer?: CssLibPropsType;
  _arrowIconContainer?: CssLibPropsType;
  _icon?: CssLibPropsType;
  _firstTabButton?: CssLibPropsType;
  _lastTabButton?: CssLibPropsType;
  _oneTabContainer?: CssLibPropsType;
  _contentContainer?: CssLibPropsType;
  _tabButtonsContainer?: CssLibPropsType;
  _container?: CssLibPropsType;
  _label?: CssLibPropsType;
  _tabButton?: CssLibPropsType;
}

export type TabsVariantStyles<Variant extends string> = TabsStyleProps & {
  [key in Variant]?: TabsStyleProps;
};
