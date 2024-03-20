// types
import { BreadcrumbsStateType, BreadcrumbsStylesType } from '@/components/breadcrumbs/types';
import { TextDecorationType } from '@/components/text/types';
import { DeviceBreakpointsType } from '@/types';

// constants
import { COLORS, FONT_WEIGHT, PARAGRAPH, SIZES, TEXT_ALIGN } from '../../foundations';
import { BreadcrumbsVariantType } from './variants';

const commonProps = {
  link: {
    font_size: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
    line_height: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].line_height,
    text_align: TEXT_ALIGN.left,
    font_weight: FONT_WEIGHT.font_weight_500,
  },
  iconDivider: {
    width: SIZES.size_150,
    height: SIZES.size_150,
  },
};

const commonPropsDefault = {
  ...commonProps,
  iconDivider: {
    ...commonProps.iconDivider,
    color: COLORS.ACCENT.color_accent_default_icon_50,
  },
};
const commonPropsAlternate = {
  ...commonProps,
  iconDivider: {
    ...commonProps.iconDivider,
    color: COLORS.ACCENT.color_accent_default_icon_150,
  },
};
const lastOneCrumbCommonProps = {
  font_size: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
  line_height: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].line_height,
  font_weight: FONT_WEIGHT.font_weight_500,
};

export const BREADCRUMB_STYLES: BreadcrumbsStylesType<BreadcrumbsVariantType> = {
  [BreadcrumbsVariantType.DEFAULT]: {
    [BreadcrumbsStateType.DEFAULT]: {
      ...commonPropsDefault,
      link: {
        ...commonPropsDefault.link,
        color: COLORS.ACCENT.color_accent_default_font_50,
        text_decoration: TextDecorationType.UNDERLINE,
      },
      lastOneCrumb: {
        ...lastOneCrumbCommonProps,
        color: COLORS.ACCENT.color_accent_default_font_50,
      },
    },
    [BreadcrumbsStateType.HOVER]: {
      ...commonPropsDefault,
      link: {
        ...commonPropsDefault.link,
        color: COLORS.ACCENT.color_accent_default_font_50,
      },
      lastOneCrumb: {
        ...lastOneCrumbCommonProps,
        color: COLORS.ACCENT.color_accent_default_font_50,
      },
    },
    [BreadcrumbsStateType.ACTIVE]: {
      ...commonPropsDefault,
      link: {
        ...commonPropsDefault.link,
        color: COLORS.DISABLED.color_accentDisabled_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      lastOneCrumb: {
        ...lastOneCrumbCommonProps,
        color: COLORS.ACCENT.color_accent_default_font_50,
      },
    },
  },
  [BreadcrumbsVariantType.ALTERNATIVE]: {
    [BreadcrumbsStateType.DEFAULT]: {
      ...commonPropsAlternate,
      link: {
        ...commonPropsAlternate.link,
        color: COLORS.ACCENT.color_accent_default_font_150,
        text_decoration: TextDecorationType.UNDERLINE,
      },
      lastOneCrumb: {
        ...lastOneCrumbCommonProps,
        color: COLORS.ACCENT.color_accent_default_font_150,
      },
    },
    [BreadcrumbsStateType.HOVER]: {
      ...commonPropsAlternate,
      link: {
        ...commonPropsAlternate.link,
        color: COLORS.ACCENT.color_accent_default_font_150,
      },
      lastOneCrumb: {
        ...lastOneCrumbCommonProps,
        color: COLORS.ACCENT.color_accent_default_font_150,
      },
    },
    [BreadcrumbsStateType.ACTIVE]: {
      ...commonPropsAlternate,
      link: {
        ...commonPropsAlternate.link,
        color: COLORS.ACCENT.color_accent_default_font_150,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      lastOneCrumb: {
        ...lastOneCrumbCommonProps,
        color: COLORS.ACCENT.color_accent_default_font_150,
      },
    },
  },
};
