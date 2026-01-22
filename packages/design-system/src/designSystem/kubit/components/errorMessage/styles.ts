import type { ErrorMessageVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';

import { TextVariantType } from '../text/variants';
import { ErrorMessageVariantType } from './variants';

type ErrorMessageVariants = keyof typeof ErrorMessageVariantType;

export const ERROR_MESSAGE: ErrorMessageVariantStyles<ErrorMessageVariants> = {
  _icon: {
    color: cssVars.colors_feedback_color_feedbackerror_icon_100,
    height: cssVars.sizes_size_150,
    width: cssVars.sizes_size_150,
  },
  _typography: {
    color: cssVars.colors_feedback_color_feedbackerror_font_50,
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    font_weight: cssVars.font_weight_400,
  },
  align_items: 'center',
  display: 'flex',
  [ErrorMessageVariantType.DEFAULT]: {},
  gap: cssVars.spacings_spacing_100,
};
