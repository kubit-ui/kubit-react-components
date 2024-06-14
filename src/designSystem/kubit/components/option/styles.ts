import { OptionStateType, OptionStylesType } from '@/components/option/types';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, COLORS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { OptionVariantType } from './variants';

const commonContainer = {
  position: 'relative',
  display: 'flex',
  cursor: 'pointer',
  width: '100%',
  text_decoration: 'none',
};

const commonContainerSideMenuLevel1 = {
  ...commonContainer,
  padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
};

const commonContainerInverted = {
  ...commonContainer,
  padding_top: SPACINGS.spacing_250,
  padding_bottom: SPACINGS.spacing_250,
  padding_left: SPACINGS.spacing_50,
  padding_right: SPACINGS.spacing_50,
  border_radius: RADIUS.radius_50,
};

const commonLabelIconContainerSideMenuLevel1 = {
  display: 'flex',
  align_items: 'initial',
  gap: SPACINGS.spacing_150,
};

const commonLabelSideMenuLevel1 = {
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
};

const commonIconSideMenuLevel1 = {
  width: SIZES.size_250,
  height: SIZES.size_250,
};

const commonContainerSideMenuLevel2 = {
  ...commonContainer,
  padding_top: SPACINGS.spacing_150,
  padding_bottom: SPACINGS.spacing_150,
  padding_left: SPACINGS.spacing_400,
  padding_right: SPACINGS.spacing_150,
};

const commonLabelIconContainerSideMenuLevel2 = {
  display: 'flex',
  align_items: 'initial',
};

const commonLabelSideMenuLevel2 = {
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
};

const commonContaineCodeViewerSubtheme = {
  ...commonContainer,
  background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
  border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
};

const commonLabelIconContainerCodeViewerSubtheme = {
  display: 'flex',
  align_items: 'initial',
};

const commonLabelCodeViewerSubtheme = {
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  color: COLORS.NEUTRAL.color_neutral_font_50,
  font_weigh: FONT_WEIGHT.font_weight_400,
};

const commonContainerInputOption = {
  ...commonContainer,
  padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
};

const commonLabelIconContainerInputSearch = {
  display: 'flex',
  align_items: 'initial',
  gap: SPACINGS.spacing_150,
};

const commonLabelInputSearch = {
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  color: COLORS.NEUTRAL.color_neutral_font_50,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonLabelHightlightedInputSearch = {
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  color: COLORS.NEUTRAL.color_neutral_font_50,
  font_weight: FONT_WEIGHT.font_weight_600,
};

const commonIconInputSearch = {
  width: SIZES.size_250,
  height: SIZES.size_250,
  color: COLORS.NEUTRAL.color_neutral_icon_50,
};

const commonSublabelInputSearch = {
  font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
  color: COLORS.NEUTRAL.color_neutral_font_50,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonContainerHighlighted = {
  ...commonContainer,
  padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300}`,
};

const commonLabelIconContainerHighlighted = {
  display: 'flex',
  align_items: 'initial',
  gap: SPACINGS.spacing_150,
};

const commonLabelHighlighted = {
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  color: COLORS.NEUTRAL.color_neutral_font_50,
  font_weight: FONT_WEIGHT.font_weight_600,
};

const commonLabelHightlightedHighlighted = {
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  color: COLORS.NEUTRAL.color_neutral_font_50,
  font_weight: FONT_WEIGHT.font_weight_600,
};

const commonIconHighlighted = {
  width: SIZES.size_250,
  height: SIZES.size_250,
  color: COLORS.NEUTRAL.color_neutral_icon_50,
};

const commonSublabelHighlighted = {
  font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
  color: COLORS.NEUTRAL.color_neutral_font_50,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonContainerTopbar = {
  ...commonContainer,
  padding_left: SPACINGS.spacing_150,
  padding_top: SPACINGS.spacing_100,
};

const commonLabelIconContainerTopbar = {
  display: 'flex',
  align_items: 'initial',
};

const commonLabelTopbar = {
  font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
};

const commonTopbar = {
  container: {
    ...commonContainerTopbar,
  },
  labelIconContainer: {
    ...commonLabelIconContainerTopbar,
  },
};

export const OPTION_STYLES: OptionStylesType<OptionVariantType> = {
  [OptionVariantType.SIDE_MENU_LEVEL_1]: {
    [OptionStateType.DEFAULT]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.HOVER]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.SELECTED]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.SELECTED_HOVER]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.DISABLED]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.ACCENT.color_accent_default_bg_150,
        border_left: `${BORDERS.border_200} solid ${COLORS.ACCENT.color_accent_default_bg_150}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_100,
      },
    },
    [OptionStateType.FILLING]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
  },
  [OptionVariantType.SIDE_MENU_LEVEL_2]: {
    [OptionStateType.DEFAULT]: {
      container: {
        ...commonContainerSideMenuLevel2,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_100} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel2,
      },
      label: {
        ...commonLabelSideMenuLevel2,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.HOVER]: {
      container: {
        ...commonContainerSideMenuLevel2,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_100} solid ${COLORS.NEUTRAL.color_neutral_icon_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel2,
      },
      label: {
        ...commonLabelSideMenuLevel2,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.SELECTED]: {
      container: {
        ...commonContainerSideMenuLevel2,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_100} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel2,
      },
      label: {
        ...commonLabelSideMenuLevel2,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
    },
    [OptionStateType.SELECTED_HOVER]: {
      container: {
        ...commonContainerSideMenuLevel2,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_100} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel2,
      },
      label: {
        ...commonLabelSideMenuLevel2,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      container: {
        ...commonContainerSideMenuLevel2,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_100} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel2,
      },
      label: {
        ...commonLabelSideMenuLevel2,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      container: {
        ...commonContainerSideMenuLevel2,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_100} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel2,
      },
      label: {
        ...commonLabelSideMenuLevel2,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.DISABLED]: {
      container: {
        ...commonContainerSideMenuLevel2,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_100} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel2,
      },
      label: {
        ...commonLabelSideMenuLevel2,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.FILLING]: {
      container: {
        ...commonContainerSideMenuLevel2,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_100} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel2,
      },
      label: {
        ...commonLabelSideMenuLevel2,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
  },
  [OptionVariantType.CODE_VIEWER_SUBTHEME]: {
    [OptionStateType.DEFAULT]: {
      container: {
        ...commonContaineCodeViewerSubtheme,
      },
      labelIconContainer: {
        ...commonLabelIconContainerCodeViewerSubtheme,
      },
      label: {
        ...commonLabelCodeViewerSubtheme,
      },
    },
    [OptionStateType.HOVER]: {
      container: {
        ...commonContaineCodeViewerSubtheme,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_border_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerCodeViewerSubtheme,
      },
      label: {
        ...commonLabelCodeViewerSubtheme,
      },
    },
    [OptionStateType.SELECTED]: {
      container: {
        ...commonContaineCodeViewerSubtheme,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerCodeViewerSubtheme,
      },
      label: {
        ...commonLabelCodeViewerSubtheme,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
    },
    [OptionStateType.SELECTED_HOVER]: {
      container: {
        ...commonContaineCodeViewerSubtheme,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerCodeViewerSubtheme,
      },
      label: {
        ...commonLabelCodeViewerSubtheme,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      container: {
        ...commonContaineCodeViewerSubtheme,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerCodeViewerSubtheme,
      },
      label: {
        ...commonLabelCodeViewerSubtheme,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      container: {
        ...commonContaineCodeViewerSubtheme,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerCodeViewerSubtheme,
      },
      label: {
        ...commonLabelCodeViewerSubtheme,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
    },
    [OptionStateType.DISABLED]: {
      container: {
        ...commonContaineCodeViewerSubtheme,
      },
      labelIconContainer: {
        ...commonLabelIconContainerCodeViewerSubtheme,
      },
      label: {
        ...commonLabelCodeViewerSubtheme,
      },
    },
    [OptionStateType.FILLING]: {
      container: {
        ...commonContaineCodeViewerSubtheme,
        border_left: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerCodeViewerSubtheme,
      },
      label: {
        ...commonLabelCodeViewerSubtheme,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
  },
  [OptionVariantType.INPUT_DROPDOWN]: {
    [OptionStateType.DEFAULT]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
        padding: SPACINGS.spacing_300,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.HOVER]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
        padding: SPACINGS.spacing_300,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.SELECTED]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
        padding: SPACINGS.spacing_300,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.SELECTED_HOVER]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
        padding: SPACINGS.spacing_300,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
        padding: SPACINGS.spacing_300,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
        padding: SPACINGS.spacing_300,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
    [OptionStateType.DISABLED]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.ACCENT.color_accent_default_bg_150,
        border_left: `${BORDERS.border_200} solid ${COLORS.ACCENT.color_accent_default_bg_150}`,
        padding: SPACINGS.spacing_300,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_100,
      },
    },
    [OptionStateType.FILLING]: {
      container: {
        ...commonContainerSideMenuLevel1,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
        padding: SPACINGS.spacing_300,
      },
      labelIconContainer: {
        ...commonLabelIconContainerSideMenuLevel1,
      },
      label: {
        ...commonLabelSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_font_50,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      icon: {
        ...commonIconSideMenuLevel1,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
    },
  },
  [OptionVariantType.INPUT_OPTION]: {
    [OptionStateType.DEFAULT]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
    [OptionStateType.HOVER]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
    [OptionStateType.FILLING]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
    [OptionStateType.SELECTED]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
    [OptionStateType.SELECTED_HOVER]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
    [OptionStateType.DISABLED]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.ACCENT.color_accent_default_bg_150,
        border_left: `${BORDERS.border_200} solid ${COLORS.ACCENT.color_accent_default_bg_150}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
        color: COLORS.NEUTRAL.color_neutral_icon_100,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
    [OptionStateType.FOCUS]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
  },
  [OptionVariantType.INPUT_OPTION_HIGHTLIGHTED]: {
    [OptionStateType.DEFAULT]: {
      container: {
        ...commonContainerHighlighted,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerHighlighted,
      },
      label: {
        ...commonLabelHighlighted,
      },
      labelHightlighted: {
        ...commonLabelHightlightedHighlighted,
      },
      icon: {
        ...commonIconHighlighted,
      },
      sublabel: {
        ...commonSublabelHighlighted,
      },
    },
    [OptionStateType.FILLING]: {
      container: {
        ...commonContainerHighlighted,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_250}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerHighlighted,
      },
      label: {
        ...commonLabelHighlighted,
      },
      labelHightlighted: {
        ...commonLabelHightlightedHighlighted,
      },
      icon: {
        ...commonIconHighlighted,
      },
      sublabel: {
        ...commonSublabelHighlighted,
      },
    },
    [OptionStateType.HOVER]: {
      container: {
        ...commonContainerHighlighted,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerHighlighted,
      },
      label: {
        ...commonLabelHighlighted,
      },
      labelHightlighted: {
        ...commonLabelHightlightedHighlighted,
      },
      icon: {
        ...commonIconHighlighted,
      },
      sublabel: {
        ...commonSublabelHighlighted,
      },
    },
    [OptionStateType.SELECTED]: {
      container: {
        ...commonContainerHighlighted,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerHighlighted,
      },
      label: {
        ...commonLabelHighlighted,
      },
      labelHightlighted: {
        ...commonLabelHightlightedHighlighted,
      },
      icon: {
        ...commonIconHighlighted,
      },
      sublabel: {
        ...commonSublabelHighlighted,
      },
    },
    [OptionStateType.SELECTED_HOVER]: {
      container: {
        ...commonContainerHighlighted,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerHighlighted,
      },
      label: {
        ...commonLabelHighlighted,
      },
      labelHightlighted: {
        ...commonLabelHightlightedHighlighted,
      },
      icon: {
        ...commonIconHighlighted,
      },
      sublabel: {
        ...commonSublabelHighlighted,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      container: {
        ...commonContainerHighlighted,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerHighlighted,
      },
      label: {
        ...commonLabelHighlighted,
      },
      labelHightlighted: {
        ...commonLabelHightlightedHighlighted,
      },
      icon: {
        ...commonIconHighlighted,
      },
      sublabel: {
        ...commonSublabelHighlighted,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      container: {
        ...commonContainerHighlighted,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.NEUTRAL.color_neutral_bg_200}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerHighlighted,
      },
      label: {
        ...commonLabelHighlighted,
      },
      labelHightlighted: {
        ...commonLabelHightlightedHighlighted,
      },
      icon: {
        ...commonIconHighlighted,
      },
      sublabel: {
        ...commonSublabelHighlighted,
      },
    },
    [OptionStateType.DISABLED]: {
      container: {
        ...commonContainerHighlighted,
        background_color: COLORS.ACCENT.color_accent_default_bg_150,
        border_left: `${BORDERS.border_200} solid ${COLORS.ACCENT.color_accent_default_bg_150}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerHighlighted,
      },
      label: {
        ...commonLabelHighlighted,
      },
      labelHightlighted: {
        ...commonLabelHightlightedHighlighted,
      },
      icon: {
        ...commonIconHighlighted,
      },
      sublabel: {
        ...commonSublabelHighlighted,
      },
    },

    [OptionStateType.FOCUS]: {
      container: {
        ...commonContainerInputOption,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
        border_left: `${BORDERS.border_200} solid ${COLORS.BRAND.color_brand_border_50}`,
      },
      labelIconContainer: {
        ...commonLabelIconContainerInputSearch,
      },
      label: {
        ...commonLabelInputSearch,
        font_weight: FONT_WEIGHT.font_weight_600,
      },
      labelHightlighted: {
        ...commonLabelHightlightedInputSearch,
      },
      icon: {
        ...commonIconInputSearch,
      },
      sublabel: {
        ...commonSublabelInputSearch,
      },
    },
  },
  [OptionVariantType.INVERTED]: {
    [OptionStateType.DEFAULT]: {
      container: {
        ...commonContainerInverted,
        background_color: COLORS.NEUTRAL.color_neutral_bg_200,
      },
      containerBefore: {
        right: SPACINGS.spacing_300,
      },
      containerFocusVisible: {},
      labelIconContainer: {},
      label: {
        font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      labelHightlighted: {},
    },
    [OptionStateType.FILLING]: {
      container: {
        ...commonContainerInverted,
      },
      containerBefore: {
        right: SPACINGS.spacing_50,
      },
      containerFocusVisible: {},
      labelIconContainer: {},
      label: {},
      labelHightlighted: {},
    },
    [OptionStateType.HOVER]: {
      container: {
        ...commonContainerInverted,
      },
      containerBefore: {
        right: SPACINGS.spacing_50,
      },
      containerFocusVisible: {},
      labelIconContainer: {},
      label: {},
      labelHightlighted: {},
    },
    [OptionStateType.SELECTED]: {
      container: {
        ...commonContainerInverted,
      },
      containerBefore: {},
      containerFocusVisible: {},
      labelIconContainer: {},
      label: {},
      labelHightlighted: {},
    },
    [OptionStateType.SELECTED_HOVER]: {
      container: {
        ...commonContainerInverted,
      },
      containerBefore: {},
      containerFocusVisible: {},
      labelIconContainer: {},
      label: {},
      labelHightlighted: {},
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      container: {
        ...commonContainerInverted,
      },
      containerBefore: {},
      containerFocusVisible: {},
      labelIconContainer: {},
      label: {},
      labelHightlighted: {},
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      container: {
        ...commonContainerInverted,
      },
      containerBefore: {},
      containerFocusVisible: {},
      labelIconContainer: {},
      label: {},
      labelHightlighted: {},
    },
    [OptionStateType.DISABLED]: {
      container: {
        ...commonContainerInverted,
        cursor: 'auto',
        pointer_events: 'none',
      },
      containerBefore: {
        right: SPACINGS.spacing_50,
      },
      containerFocusVisible: {},
      labelIconContainer: {},
      label: {},
      labelHightlighted: {},
    },
  },
  [OptionVariantType.TOPBAR]: {
    [OptionStateType.DEFAULT]: {
      ...commonTopbar,
      label: {
        ...commonLabelTopbar,
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      labelHightlighted: {
        ...commonLabelTopbar,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.FILLING]: {
      ...commonTopbar,
      label: {
        ...commonLabelTopbar,
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      labelHightlighted: {
        ...commonLabelTopbar,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.HOVER]: {
      ...commonTopbar,
      label: {
        ...commonLabelTopbar,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      labelHightlighted: {
        ...commonLabelTopbar,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.SELECTED]: {
      ...commonTopbar,
      label: {
        ...commonLabelTopbar,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      labelHightlighted: {
        ...commonLabelTopbar,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.SELECTED_HOVER]: {
      ...commonTopbar,
      label: {
        ...commonLabelTopbar,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      labelHightlighted: {
        ...commonLabelTopbar,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      ...commonTopbar,
      label: {
        ...commonLabelTopbar,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      labelHightlighted: {
        ...commonLabelTopbar,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      ...commonTopbar,
      label: {
        ...commonLabelTopbar,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      labelHightlighted: {
        ...commonLabelTopbar,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
    [OptionStateType.DISABLED]: {
      ...commonTopbar,
      label: {
        ...commonLabelTopbar,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
      labelHightlighted: {
        ...commonLabelTopbar,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
    },
  },
  [OptionVariantType.TOPBAR_TAB]: {
    [OptionStateType.DEFAULT]: {
      container: {
        cursor: 'pointer',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        background_color: COLORS.NEUTRAL.color_neutral_bg_50,
        [DeviceBreakpointsType.MOBILE]: {
          padding: SPACINGS.spacing_300,
          padding_left: SPACINGS.spacing_400,
        },
      },
      label: {
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: FONT_WEIGHT.font_weight_400,
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      },
    },
    [OptionStateType.SELECTED]: {
      container: {
        cursor: 'pointer',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        background_color: COLORS.NEUTRAL.color_neutral_bg_50,
        [DeviceBreakpointsType.MOBILE]: {
          padding: SPACINGS.spacing_300,
          padding_left: SPACINGS.spacing_400,
        },
      },
      label: {
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: FONT_WEIGHT.font_weight_400,
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      },
    },
    [OptionStateType.HOVER]: {
      container: {
        cursor: 'pointer',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        [DeviceBreakpointsType.MOBILE]: {
          padding: SPACINGS.spacing_300,
          padding_left: SPACINGS.spacing_400,
        },
      },
      label: {
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: FONT_WEIGHT.font_weight_400,
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      },
    },
    [OptionStateType.SELECTED_HOVER]: {
      container: {
        cursor: 'pointer',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        [DeviceBreakpointsType.MOBILE]: {
          padding: SPACINGS.spacing_300,
          padding_left: SPACINGS.spacing_400,
        },
      },
      label: {
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: FONT_WEIGHT.font_weight_400,
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED]: {
      container: {
        cursor: 'pointer',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        background_color: COLORS.NEUTRAL.color_neutral_bg_50,
        [DeviceBreakpointsType.MOBILE]: {
          padding: SPACINGS.spacing_300,
          padding_left: SPACINGS.spacing_400,
        },
      },
      label: {
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: FONT_WEIGHT.font_weight_400,
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      },
    },
    [OptionStateType.MULTIPLE_SELECTED_HOVER]: {
      container: {
        cursor: 'pointer',
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        [DeviceBreakpointsType.MOBILE]: {
          padding: SPACINGS.spacing_300,
          padding_left: SPACINGS.spacing_400,
        },
      },
      label: {
        color: COLORS.NEUTRAL.color_neutral_font_250,
        font_weight: FONT_WEIGHT.font_weight_400,
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      },
    },
  },
};
