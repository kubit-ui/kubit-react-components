import { DeviceBreakpointsType } from '../breakpoints';
import { WordWrapTypes } from './wordWrap';

/**
 * @property font_variant variant for the Text component
 */
type TypographyCustomType = {
  font_variant?: string;
};

type GenericDeviceTypographyType = {
  font_family?: string;
  font_size?: string;
  font_weight?: number;
  font_style?: string;
  line_height?: string;
  letter_spacing?: string;
  text_align?: string;
  text_decoration?: string;
  text_transform?: string;
  text_shadow?: string;
  text_indent?: string;
  text_justify?: string;
  color?: string;
  overflow?: string;
} & TypographyCustomType &
  WordWrapTypes;

export type TypographyTypes = GenericDeviceTypographyType & {
  [key in DeviceBreakpointsType]?: GenericDeviceTypographyType;
};
