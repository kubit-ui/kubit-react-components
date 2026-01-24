import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface CalendarStyleProps extends CssLibPropsType {
  _container?: CssLibPropsType;
  _selectorContainer?: CssLibPropsType;
  _selectorIconAndBackTextContainer?: CssLibPropsType;
  _leftArrow?: CssLibPropsType;
  _rightArrow?: CssLibPropsType;
  _table?: CssLibPropsType;
  _tbody?: CssLibPropsType;
  _tableRow?: CssLibPropsType;
  _backText?: CssLibPropsType;
  _selectorOptionsContainer?: CssLibPropsType;
  _listElementEmpty?: CssLibPropsType;
  _listElementRove?: CssLibPropsType;
  //_selectorOptions?: CssLibPropsType; //! unused
  _headerContainer?: CssLibPropsType;
  _headerRow?: CssLibPropsType;
  _headerTh?: CssLibPropsType;
  _weekDayContainer?: CssLibPropsType;
  //_weekDay?: CssLibPropsType; //! unused
  _daysList?: CssLibPropsType;
  _monthsList?: CssLibPropsType;
  _monthListItem?: CssLibPropsType;
  _monthElement?: CssLibPropsType;
  //_month?: CssLibPropsType; //! unused
  _yearsList?: CssLibPropsType;
  _yearListItem?: CssLibPropsType;
  _yearElement?: CssLibPropsType;
  _year?: CssLibPropsType;

  // $foreign?: {
  //   buttonSize?: object;
  //   buttonVariant?: object;
  // };
}

export type CalendarVariantStyles<Variant extends string> =
  CalendarStyleProps & {
    [key in Variant]?: CalendarStyleProps;
  };
