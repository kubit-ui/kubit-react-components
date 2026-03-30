import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface SliderStyleProps extends CssLibPropsType {
  _labelContainer?: CssLibPropsType;
  _scaleContainer?: CssLibPropsType;
  _scaleOption?: CssLibPropsType;
  _buttonsTracksContainer?: CssLibPropsType;
  _tracksThumbsContainer?: CssLibPropsType;
  _tracksThumbsInnerContainer?: CssLibPropsType;
  _helperTextContainer?: CssLibPropsType;
  _helperTextLeftContainer?: CssLibPropsType;
  _helperTextRightContainer?: CssLibPropsType;
  _label?: CssLibPropsType;
  _thumb?: CssLibPropsType;
  _rightThumb?: CssLibPropsType;
  _thumbIcon?: CssLibPropsType;
  _rightThumbIcon?: CssLibPropsType;
  _innerThumbTooltip?: CssLibPropsType;
  _activeTrack?: CssLibPropsType;
  _inactiveTrack?: CssLibPropsType;
  _helperText?: CssLibPropsType;
}
// $foreign?: {
//   decrementButtonVariant?: object;
//   decrementButtonSize?: object;
//   tooltip?: object;
// };

export type SliderVariantStyles<Variant extends string> = SliderStyleProps & {
  [key in Variant]: SliderStyleProps;
};
