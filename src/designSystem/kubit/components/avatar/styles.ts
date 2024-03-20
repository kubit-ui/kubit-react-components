import {
  AvatarBackgroundColor,
  AvatarContentType,
  AvatarStylesType,
} from '@/components/avatar/types';

import {
  BORDERS,
  COLORS,
  FONT_WEIGHT,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { TextVariantType } from '../text';
import { AvatarSize } from './variants';

const containerBackgroundColor = {
  [AvatarBackgroundColor.COLOR_DEFAULT]: {
    backgroundColor: COLORS.NEUTRAL.color_neutral_bg_200,
    contentColor: COLORS.NEUTRAL.color_neutral_icon_50,
    borderColor: COLORS.NEUTRAL.color_neutral_border_50,
  },
  [AvatarBackgroundColor.COLOR_RED]: {
    backgroundColor: COLORS.ACCENT.color_accent_default_bg_100,
    contentColor: COLORS.ACCENT.color_accent_default_icon_100,
    borderColor: COLORS.ACCENT.color_accent_default_border_100,
  },
  [AvatarBackgroundColor.COLOR_WHITE]: {
    backgroundColor: COLORS.NEUTRAL.color_neutral_bg_250,
    contentColor: COLORS.NEUTRAL.color_neutral_icon_50,
    borderColor: COLORS.NEUTRAL.color_neutral_border_50,
  },
};

const commonSmallTokens = {
  linkContainer: {
    width: SPACINGS.spacing_450,
    height: SPACINGS.spacing_450,
    border_radius: RADIUS.radius_circle,
  },
  avatarContainer: {
    width: SPACINGS.spacing_450,
    height: SPACINGS.spacing_450,
    max_width: SPACINGS.spacing_450,
    max_height: SPACINGS.spacing_450,
    border_radius: RADIUS.radius_circle,
  },
};
const commonMediumTokens = {
  linkContainer: {
    width: SPACINGS.spacing_500,
    height: SPACINGS.spacing_500,
    border_radius: RADIUS.radius_circle,
  },
  avatarContainer: {
    width: SPACINGS.spacing_500,
    height: SPACINGS.spacing_500,
    max_width: SPACINGS.spacing_500,
    max_height: SPACINGS.spacing_500,
    border_radius: RADIUS.radius_circle,
  },
};
const commonLargeTokens = {
  linkContainer: {
    width: SPACINGS.spacing_600,
    height: SPACINGS.spacing_600,
    border_radius: RADIUS.radius_circle,
  },
  avatarContainer: {
    width: SPACINGS.spacing_600,
    height: SPACINGS.spacing_600,
    max_width: SPACINGS.spacing_600,
    max_height: SPACINGS.spacing_600,
    border_radius: RADIUS.radius_circle,
  },
};
const commonExtraLargeTokens = {
  linkContainer: {
    width: SPACINGS.spacing_675,
    height: SPACINGS.spacing_675,
    border_radius: RADIUS.radius_circle,
  },
  avatarContainer: {
    width: SPACINGS.spacing_675,
    height: SPACINGS.spacing_675,
    max_width: SPACINGS.spacing_675,
    max_height: SPACINGS.spacing_675,
    border_radius: RADIUS.radius_circle,
  },
};

export const AVATAR_STYLES: AvatarStylesType<AvatarSize> = {
  [AvatarSize.SMALL]: {
    [AvatarContentType.WITH_ICON]: {
      ...commonSmallTokens,
      containerBorderWidth: BORDERS.border_50,
      containerBackgroundColor,
      avatar: {
        width: SIZES.size_150,
        height: SIZES.size_150,
      },
    },
    [AvatarContentType.WITH_IMAGE]: {
      ...commonSmallTokens,
    },
    [AvatarContentType.WITH_INITIALS]: {
      ...commonSmallTokens,
      containerBackgroundColor,
      initials: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        text_align: TEXT_ALIGN.center,
      },
    },
  },
  [AvatarSize.MEDIUM]: {
    [AvatarContentType.WITH_ICON]: {
      ...commonMediumTokens,
      containerBorderWidth: BORDERS.border_50,
      containerBackgroundColor,
      avatar: {
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
    },
    [AvatarContentType.WITH_IMAGE]: {
      ...commonMediumTokens,
    },
    [AvatarContentType.WITH_INITIALS]: {
      ...commonMediumTokens,
      containerBackgroundColor,
      initials: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        text_align: TEXT_ALIGN.center,
      },
    },
  },
  [AvatarSize.LARGE]: {
    [AvatarContentType.WITH_ICON]: {
      ...commonLargeTokens,
      containerBorderWidth: BORDERS.border_50,
      containerBackgroundColor,
      avatar: {
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
    },
    [AvatarContentType.WITH_IMAGE]: {
      ...commonLargeTokens,
    },
    [AvatarContentType.WITH_INITIALS]: {
      ...commonLargeTokens,
      containerBackgroundColor,
      initials: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        text_align: TEXT_ALIGN.center,
      },
    },
  },
  [AvatarSize.EXTRA_LARGE]: {
    [AvatarContentType.WITH_ICON]: {
      ...commonExtraLargeTokens,
      containerBorderWidth: BORDERS.border_50,
      containerBackgroundColor,
      avatar: {
        width: SIZES.size_300,
        height: SIZES.size_300,
      },
    },
    [AvatarContentType.WITH_IMAGE]: {
      ...commonExtraLargeTokens,
    },
    [AvatarContentType.WITH_INITIALS]: {
      ...commonExtraLargeTokens,
      containerBackgroundColor,
      initials: {
        font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        text_align: TEXT_ALIGN.center,
      },
    },
  },
};
