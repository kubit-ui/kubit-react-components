import { IconHighlightedSizeType } from '@/components/iconHighlighted/types';
import { NavigationCardStylesType } from '@/components/navigationCard/types';
import { TextComponentType } from '@/components/text/types';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, FONT_WEIGHT, SHADOW, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { TagOptionType, TagVariantType } from '../variants';
import { NavigationCardVariantType } from './variants';

const commonTokens = {
  container: {
    width: '100%',
    position: 'relative',
    height: 'auto',
    display: 'flex',
    flex_direction: 'row',
    align_items: 'center',
    justify_content: 'space-between',
    cursor: 'pointer',
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    box_shadow: SHADOW.shadow_10,
  },
  contentContainer: {
    display: 'flex',
    flex_direction: 'column',
    width: 'auto',
  },
  rightContentContainer: {
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
    width: 'auto',
    [DeviceBreakpointsType.MOBILE]: {
      justify_content: 'flex-start',
    },
  },
  decorativeElementContainer: {
    height: 'auto',
    width: 'auto',
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
    align_self: 'center',
  },
};

const PRIMARY_TOKENS = {
  ...commonTokens,
  containerExpandedContent: false,
  container: {
    ...commonTokens.container,
    padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_300}`,
  },
  decorativeElementContainer: {
    ...commonTokens.decorativeElementContainer,
    align_self: 'flex-start',
  },
  icon: {
    color: COLORS.NEUTRAL.color_neutral_icon_50,
    width: SIZES.size_250,
    height: SIZES.size_250,
    margin_right: SPACINGS.spacing_150,
  },
  title: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_600,
    color: COLORS.ACCENT.color_accent_default_font_50,
    component: TextComponentType.SPAN,
  },
  descriptionContainer: {
    margin_top: SPACINGS.spacing_250,
  },
  description: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_50,
  },
  arrowIcon: {
    color: COLORS.ACCENT.color_accent_default_font_100,
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
};

export const NAVIGATION_CARD_STYLES: NavigationCardStylesType<NavigationCardVariantType> = {
  [NavigationCardVariantType.PRIMARY_ICON]: {
    ...PRIMARY_TOKENS,
  },
  [NavigationCardVariantType.PRIMARY_ICON_BASIC]: {
    ...PRIMARY_TOKENS,
    decorativeElementContainer: {
      ...PRIMARY_TOKENS.decorativeElementContainer,
      align_self: 'center',
    },
    title: {
      ...PRIMARY_TOKENS.title,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
  },
  [NavigationCardVariantType.PRIMARY_ICON_HIGHLIGHTED]: {
    ...commonTokens,
    containerExpandedContent: true,
    container: {
      ...commonTokens.container,
      padding: SPACINGS.spacing_400,
    },
    rightContentContainer: {
      ...commonTokens.rightContentContainer,
      [DeviceBreakpointsType.MOBILE]: {
        ...commonTokens.rightContentContainer[DeviceBreakpointsType.MOBILE],
        margin_top: SPACINGS.spacing_300,
      },
    },
    title: {
      font_variant: TextVariantType.HEADING_H3_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_600,
      color: COLORS.NEUTRAL.color_neutral_font_50,
      component: TextComponentType.H3,
    },
    descriptionContainer: {
      margin_top: SPACINGS.spacing_250,
    },
    description: {
      font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.ACCENT.color_accent_default_font_50,
    },
    iconHighlighted: {
      variant: 'SQUARE',
      size: IconHighlightedSizeType.EXTRA_SMALL,
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      margin_right: SPACINGS.spacing_300,
      backgroundColor: COLORS.SECONDARY.color_secondary_bg_100,
    },
    tagContainer: {
      margin_top: SPACINGS.spacing_250,
    },
    tag: {
      variant: TagVariantType.SQUARE,
      option: TagOptionType.INFORMATIVE,
    },
    arrowIcon: {
      color: COLORS.ACCENT.color_accent_default_icon_100,
      width: SIZES.size_200,
      height: SIZES.size_200,
    },
    arrowIconText: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      color: COLORS.ACCENT.color_accent_default_font_100,
    },
  },
};
