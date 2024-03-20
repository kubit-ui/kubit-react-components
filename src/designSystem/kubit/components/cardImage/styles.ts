import { CardImageStylesType } from '@/components/cardImage/types/cardImageTheme';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, FONT_WEIGHT, RADIUS, SHADOW, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { TextVariantType } from '../text';
import { CardImageStateVariantType } from './variants';

export const CARD_IMAGE_STYLES: CardImageStylesType<CardImageStateVariantType> = {
  [CardImageStateVariantType.DEFAULT]: {
    container: {
      border_radius: RADIUS.radius_50,
      background_color: COLORS.NEUTRAL.color_neutral_bg_100,
      box_shadow: SHADOW.shadow_10,
    },
    imageContainer: {
      min_height: '12rem',
      max_height: '12rem',
      height: '12rem',
      border_top_left_radius: RADIUS.radius_50,
      border_top_right_radius: RADIUS.radius_50,
    },
    content: {
      height: '100%',
      display: 'flex',
      flex_direction: 'column',
      justify_content: 'space-between',
      padding: SPACINGS.spacing_150,
    },
    titleContainer: {
      margin_bottom: SPACINGS.spacing_150,
    },
    title: {
      font_weight: FONT_WEIGHT.font_weight_600,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      [DeviceBreakpointsType.DESKTOP]: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
      },
      [DeviceBreakpointsType.TABLET]: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
      },
      [DeviceBreakpointsType.MOBILE]: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
      },
    },
    descriptionContainer: {
      margin_bottom: SPACINGS.spacing_150,
    },
    description: {
      font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      text_align: TEXT_ALIGN.left,
    },
    linkContainer: {
      justify_content: TEXT_ALIGN.left,
    },
  },
  [CardImageStateVariantType.ALTERNATIVE]: {
    container: {
      border_radius: RADIUS.radius_50,
      background_color: COLORS.NEUTRAL.color_neutral_bg_100,
    },
    imageContainer: {
      min_height: '12rem',
      max_height: '12rem',
      height: '12rem',
      border_top_left_radius: RADIUS.radius_50,
      border_top_right_radius: RADIUS.radius_50,
    },
    content: {
      height: '100%',
      display: 'flex',
      flex_direction: 'column',
      justify_content: 'space-between',
      padding: SPACINGS.spacing_150,
    },
    titleContainer: {
      margin_bottom: SPACINGS.spacing_150,
    },
    title: {
      font_weight: FONT_WEIGHT.font_weight_600,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      [DeviceBreakpointsType.DESKTOP]: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
      },
      [DeviceBreakpointsType.TABLET]: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
      },
      [DeviceBreakpointsType.MOBILE]: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
      },
    },
    descriptionContainer: {
      margin_bottom: SPACINGS.spacing_150,
    },
    description: {
      font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXPANDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.NEUTRAL.color_neutral_bg_100,
      text_align: TEXT_ALIGN.left,
    },
    linkContainer: {
      justify_content: TEXT_ALIGN.left,
    },
  },
};
