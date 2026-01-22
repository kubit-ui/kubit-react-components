import { TextVariantType } from './variants';

export const FONT_FAMILY = {
  font_family_digit_password_large_square:
    '"DigitPasswordLargeSquare", sans-serif',
  font_family_digit_password_small_square:
    '"DigitPasswordSmallSquare", sans-serif',
  font_family_gt_america_expanded: '"GT-America-Expanded Font", sans-serif',
  font_family_gt_america_extended: '"GT-America-Extended Font", sans-serif',
  font_family_nunito_sans: '"Nunito Sans"',
  font_family_roboto_condensed: '"Roboto-Mono", sans-serif',
} as const;

const FONT_SIZE = {
  font_body_50: '1.125rem', // 18px
  font_body_100: '1rem', // 16px
  font_body_150: '0.875rem', // 14px
  font_body_200: '0.75rem', // 12px
  font_heading_50: '3rem', // 48px
  font_heading_100: '2.5rem', // 40px
  font_heading_150: '2rem', // 32px
  font_heading_200: '1.5rem', // 24px
  font_heading_250: '1.25rem', // 20px
} as const;

const LINE_HEIGHT = {
  line_height_50: '3.5rem', // 56px
  line_height_100: '3rem', // 48px
  line_height_150: '2.5rem', // 40px
  line_height_200: '1.5rem', // 24px
  line_height_250: '1.25rem', // 20px
  line_height_300: '1rem', // 16px
} as const;

export const FONT_WEIGHT = {
  font_weight_000: '0',
  font_weight_300: '300',
  font_weight_400: '400',
  font_weight_500: '500',
  font_weight_600: '600',
} as const;

export const TEXT = {
  font_family: FONT_FAMILY.font_family_nunito_sans,
  [TextVariantType.DEFAULT]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_200,
        line_height: LINE_HEIGHT.line_height_300,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_200,
        line_height: LINE_HEIGHT.line_height_300,
      },
    },
  },
  [TextVariantType.HEADING_DISPLAY_1_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_50,
        line_height: LINE_HEIGHT.line_height_50,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
  },
  [TextVariantType.HEADING_DISPLAY_1_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_50,
        line_height: LINE_HEIGHT.line_height_50,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
  },
  [TextVariantType.HEADING_H1_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_100,
        line_height: LINE_HEIGHT.line_height_100,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_150,
        line_height: LINE_HEIGHT.line_height_150,
      },
    },
  },
  [TextVariantType.HEADING_H1_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_100,
        line_height: LINE_HEIGHT.line_height_100,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_150,
        line_height: LINE_HEIGHT.line_height_150,
      },
    },
  },
  [TextVariantType.HEADING_H2_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_150,
        line_height: LINE_HEIGHT.line_height_150,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_200,
        line_height: LINE_HEIGHT.line_height_150,
      },
    },
  },
  [TextVariantType.HEADING_H2_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_150,
        line_height: LINE_HEIGHT.line_height_150,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_200,
        line_height: LINE_HEIGHT.line_height_150,
      },
    },
  },
  [TextVariantType.HEADING_H3_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_200,
        line_height: LINE_HEIGHT.line_height_150,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
  },
  [TextVariantType.HEADING_H3_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_200,
        line_height: LINE_HEIGHT.line_height_150,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
  },
  [TextVariantType.HEADING_H4_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_50,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
  },
  [TextVariantType.HEADING_H4_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_50,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
  },
  [TextVariantType.MAIN_HEADING_DISPLAY_1_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_50,
        line_height: LINE_HEIGHT.line_height_50,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
    font_family: FONT_FAMILY.font_family_gt_america_expanded,
  },
  [TextVariantType.MAIN_HEADING_H1_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_100,
        line_height: LINE_HEIGHT.line_height_100,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_150,
        line_height: LINE_HEIGHT.line_height_150,
      },
    },
    font_family: FONT_FAMILY.font_family_gt_america_expanded,
  },
  [TextVariantType.MAIN_HEADING_H2_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_150,
        line_height: LINE_HEIGHT.line_height_150,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_200,
        line_height: LINE_HEIGHT.line_height_150,
      },
    },
    font_family: FONT_FAMILY.font_family_gt_america_expanded,
  },
  [TextVariantType.MAIN_HEADING_H3_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_200,
        line_height: LINE_HEIGHT.line_height_150,
      },
      mobile: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
    font_family: FONT_FAMILY.font_family_gt_america_expanded,
  },
  [TextVariantType.MAIN_HEADING_H4_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_heading_250,
        line_height: LINE_HEIGHT.line_height_200,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_50,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
    font_family: FONT_FAMILY.font_family_gt_america_expanded,
  },
  [TextVariantType.PARAGRAPH_CAPTION_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_200,
        line_height: LINE_HEIGHT.line_height_300,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_200,
        line_height: LINE_HEIGHT.line_height_300,
      },
    },
  },
  [TextVariantType.PARAGRAPH_CAPTION_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_200,
        line_height: LINE_HEIGHT.line_height_300,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_200,
        line_height: LINE_HEIGHT.line_height_300,
      },
    },
  },
  [TextVariantType.PARAGRAPH_LARGE_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_50,
        line_height: LINE_HEIGHT.line_height_200,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_100,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
  },
  [TextVariantType.PARAGRAPH_LARGE_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_50,
        line_height: LINE_HEIGHT.line_height_200,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_100,
        line_height: LINE_HEIGHT.line_height_200,
      },
    },
  },
  [TextVariantType.PARAGRAPH_MEDIUM_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_100,
        line_height: LINE_HEIGHT.line_height_200,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_150,
        line_height: LINE_HEIGHT.line_height_250,
      },
    },
  },
  [TextVariantType.PARAGRAPH_MEDIUM_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_100,
        line_height: LINE_HEIGHT.line_height_200,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_150,
        line_height: LINE_HEIGHT.line_height_250,
      },
    },
  },
  [TextVariantType.PARAGRAPH_MEDIUM_MONO]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_100,
        line_height: LINE_HEIGHT.line_height_200,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_150,
        line_height: LINE_HEIGHT.line_height_250,
      },
    },
    font_family: FONT_FAMILY.font_family_roboto_condensed,
  },
  [TextVariantType.PARAGRAPH_SMALL_EXPANDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_150,
        line_height: LINE_HEIGHT.line_height_250,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_200,
        line_height: LINE_HEIGHT.line_height_300,
      },
    },
  },
  [TextVariantType.PARAGRAPH_SMALL_EXTENDED]: {
    $mediaQueries: {
      desktop: {
        font_size: FONT_SIZE.font_body_150,
        line_height: LINE_HEIGHT.line_height_250,
      },
      mobile: {
        font_size: FONT_SIZE.font_body_200,
        line_height: LINE_HEIGHT.line_height_300,
      },
    },
  },
};
