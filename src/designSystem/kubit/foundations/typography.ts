import { DeviceBreakpointsType } from '@/types';

export const FONT_FAMILY = {
  font_family_gt_america_expanded: '"GT-America-Expanded Font", sans-serif',
  font_family_gt_america_extended: '"GT-America-Extended Font", sans-serif',
  font_family_roboto_condensed: '"Roboto-Mono Font", sans-serif',
} as const;

const FONT_SIZE = {
  font_heading_50: '3rem', // 48px
  font_heading_100: '2.5rem', // 40px
  font_heading_150: '2rem', // 32px
  font_heading_200: '1.5rem', // 24px
  font_heading_250: '1.25rem', // 20px
  font_body_50: '1.125rem', // 18px
  font_body_100: '1rem', // 16px
  font_body_150: '0.875rem', // 14px
  font_body_200: '0.75rem', // 12px
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
  font_weight_000: 0,
  font_weight_300: 300,
  font_weight_400: 400,
  font_weight_500: 500,
  font_weight_600: 600,
} as const;

export const HEADING = {
  DISPLAY: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_heading_50,
      line_height: LINE_HEIGHT.line_height_50,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_heading_50,
      line_height: LINE_HEIGHT.line_height_50,
    },
  },
  H1: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_heading_100,
      line_height: LINE_HEIGHT.line_height_100,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_heading_100,
      line_height: LINE_HEIGHT.line_height_100,
    },
  },
  H2: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_heading_150,
      line_height: LINE_HEIGHT.line_height_150,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_heading_150,
      line_height: LINE_HEIGHT.line_height_150,
    },
  },
  H3: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_heading_200,
      line_height: LINE_HEIGHT.line_height_150,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_heading_200,
      line_height: LINE_HEIGHT.line_height_150,
    },
  },
  H4: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_heading_250,
      line_height: LINE_HEIGHT.line_height_200,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_heading_250,
      line_height: LINE_HEIGHT.line_height_200,
    },
  },
} as const;

export const PARAGRAPH = {
  LARGE: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_body_50,
      line_height: LINE_HEIGHT.line_height_200,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_body_50,
      line_height: LINE_HEIGHT.line_height_200,
    },
  },
  MEDIUM: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_body_100,
      line_height: LINE_HEIGHT.line_height_200,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_body_100,
      line_height: LINE_HEIGHT.line_height_200,
    },
  },
  SMALL: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_body_150,
      line_height: LINE_HEIGHT.line_height_250,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_body_150,
      line_height: LINE_HEIGHT.line_height_250,
    },
  },
  CAPTION: {
    [DeviceBreakpointsType.DESKTOP]: {
      font_size: FONT_SIZE.font_body_200,
      line_height: LINE_HEIGHT.line_height_300,
    },
    [DeviceBreakpointsType.MOBILE]: {
      font_size: FONT_SIZE.font_body_200,
      line_height: LINE_HEIGHT.line_height_300,
    },
  },
} as const;

export const TEXT_ALIGN = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export type FontFamilyType = typeof FONT_FAMILY;
export type FontSizeType = typeof FONT_SIZE;
export type LineHeightType = typeof LINE_HEIGHT;
export type HeadingType = typeof HEADING;
export type ParagraphType = typeof PARAGRAPH;
export type FontWeightType = typeof FONT_WEIGHT;
export type TextAlignType = typeof TEXT_ALIGN;
