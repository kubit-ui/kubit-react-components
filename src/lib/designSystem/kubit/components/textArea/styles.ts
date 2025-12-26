import type { TextAreaVariantStyles } from '@/components/textArea/types/textAreaTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { PARAGRAPH } from '../../foundations/typography';
import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { TextAreaVariantType } from './variants';

type TextAreaVariants = keyof typeof TextAreaVariantType;

export const TEXT_AREA: TextAreaVariantStyles<TextAreaVariants> = {
  _bottomContainer: {
    align_items: 'flex-start',
    display: 'flex',
    flex_direction: 'row',
    justify_content: 'space-between',
    margin_top: cssVars.spacings_spacing_100,
    padding: `${cssVars.spacings_spacing_0} ${cssVars.spacings_spacing_50}`,
    width: '100%',
  },
  _counter: {
    display: 'flex',
  },
  _counterLeft: {
    ...TEXT[TextVariantType.DEFAULT],
    font_weight: cssVars.font_weight_400,
    padding: cssVars.spacings_spacing_0,
  },
  _counterRight: {
    ...TEXT[TextVariantType.DEFAULT],
    font_weight: cssVars.font_weight_400,
    padding: cssVars.spacings_spacing_0,
  },
  _errorContainer: {
    align_items: 'center',
    display: 'flex',
    gap: cssVars.spacings_spacing_100,
    margin_bottom: cssVars.spacings_spacing_100,
    margin_top: cssVars.spacings_spacing_100,
  },
  _errorIcon: {
    height: cssVars.spacings_spacing_100,
    width: cssVars.spacings_spacing_100,
  },
  _errorMessage: {
    ...TEXT[TextVariantType.DEFAULT],
    font_weight: cssVars.font_weight_400,
  },
  _helpMessage: {
    ...TEXT[TextVariantType.DEFAULT],
    font_weight: cssVars.font_weight_400,
  },
  _helpMessageErrorContainer: {
    display: 'flex',
    flex_direction: 'column',
  },
  _label: {
    ...TEXT[TextVariantType.DEFAULT],
    font_weight: cssVars.font_weight_400,
  },
  _labelAndAdditionalInfoContainer: {
    align_items: 'center',
    display: 'flex',
  },
  _labelTextAreaContainer: {
    border_style: 'solid',
    display: 'flex',
    flex_direction: 'column',
    gap: cssVars.spacings_spacing_0,
    min_height: '5.5rem',
    padding: `${cssVars.spacings_spacing_100} ${cssVars.spacings_spacing_50}`,
  },
  _required: {
    ...TEXT[TextVariantType.DEFAULT],
    font_weight: cssVars.font_weight_400,
  },
  _textArea: {
    $pseudoElements: {
      placeholder: {
        font_size: PARAGRAPH.CAPTION[DEVICE_BREAKPOINTS.DESKTOP].font_size,
        font_weight: cssVars.font_weight_400,
        line_height: PARAGRAPH.CAPTION[DEVICE_BREAKPOINTS.DESKTOP].line_height,
      },
    },
    background_color: 'transparent',
    border: 'none',
    border_style: 'none',
    flex: '1',
    padding: cssVars.spacings_spacing_0,
    resize: 'none',
  },
  _title: {
    ...TEXT[TextVariantType.DEFAULT],
    font_weight: cssVars.font_weight_400,
  },
  _titleContainer: {
    margin_bottom: cssVars.spacings_spacing_100,
  },
  display: 'flex',
  flex_direction: 'column',
  [TextAreaVariantType.DEFAULT]: {},
  width: cssVars.spacings_spacing_100_percent,
};
