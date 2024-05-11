import { TextStylesType } from '@/components/text/types';

import { FONT_FAMILY, HEADING, PARAGRAPH } from '../../foundations';
import { TextVariantType } from './variants';

export const TEXT_STYLES: TextStylesType<TextVariantType> = {
  [TextVariantType.HEADING_DISPLAY_1_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.DISPLAY,
  },
  [TextVariantType.HEADING_H1_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.H1,
  },
  [TextVariantType.HEADING_H2_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.H2,
  },
  [TextVariantType.HEADING_H3_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.H3,
  },
  [TextVariantType.HEADING_H4_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.H4,
  },
  [TextVariantType.PARAGRAPH_LARGE_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.LARGE,
  },
  [TextVariantType.PARAGRAPH_MEDIUM_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.MEDIUM,
  },
  [TextVariantType.PARAGRAPH_SMALL_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.SMALL,
  },
  [TextVariantType.PARAGRAPH_CAPTION_EXPANDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.CAPTION,
  },

  [TextVariantType.HEADING_DISPLAY_1_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.DISPLAY,
  },
  [TextVariantType.HEADING_H1_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.H1,
  },
  [TextVariantType.HEADING_H2_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.H2,
  },
  [TextVariantType.HEADING_H3_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.H3,
  },
  [TextVariantType.HEADING_H4_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: HEADING.H4,
  },
  [TextVariantType.PARAGRAPH_LARGE_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.LARGE,
  },
  [TextVariantType.PARAGRAPH_MEDIUM_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.MEDIUM,
  },
  [TextVariantType.PARAGRAPH_SMALL_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.SMALL,
  },
  [TextVariantType.PARAGRAPH_CAPTION_EXTENDED]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.CAPTION,
  },
  [TextVariantType.DEFAULT]: {
    font_family: FONT_FAMILY.font_family_nunito_sans,
    typography: PARAGRAPH.CAPTION,
  },
  [TextVariantType.PARAGRAPH_MEDIUM_MONO]: {
    font_family: FONT_FAMILY.font_family_roboto_condensed,
    typography: PARAGRAPH.MEDIUM,
  },
};
