import { DropdownSelectedPropsStylesType, DropdownSelectedStylesType } from '@/components';
import { DropdownSelectedStateType } from '@/components/dropdownSelected/types/states';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, COLORS, FONT_WEIGHT, SHADOW, SPACINGS } from '../../foundations';
import { ListOptionsVariantType } from '../listOptions';
import { OptionVariantType } from '../option';
import { PopoverVariantType } from '../popover';
import { TextVariantType } from '../text';
import { DropdownSelectedVariantType } from './variants';

const commonDefaultVariantStateProps: DropdownSelectedPropsStylesType = {
  container: {
    border_right: `${SPACINGS.spacing_25} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
  },
  buttonOrLinkContainer: {
    display: 'flex',
    gap: SPACINGS.spacing_150,
    cursor: 'pointer',
    align_items: 'center',
    background_color: COLORS.NEUTRAL.color_neutral_bg_50,
    width: '100%',
    justify_content: 'space-between',
    padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_150}`,
  },
  labelOpened: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_150,
  },
  labelClosed: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_150,
  },
  iconOpened: {
    width: SPACINGS.spacing_400,
    height: SPACINGS.spacing_400,
    color: COLORS.NEUTRAL.color_neutral_icon_250,
  },
  iconClosed: {
    width: SPACINGS.spacing_400,
    height: SPACINGS.spacing_400,
    color: COLORS.NEUTRAL.color_neutral_font_250,
  },
  popover: {
    variant: PopoverVariantType.INPUT_DROPDOWN_LEVEL_TWO,
  },
  listOptions: {
    variant: ListOptionsVariantType.CODE_VIEWER_SUBTHEME,
    optionVariant: OptionVariantType.CODE_VIEWER_SUBTHEME,
  },
  listOptionsContainer: {
    max_width: '15rem',
    box_shadow: SHADOW.shadow_10,
    border: `${SPACINGS.spacing_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
  },
};

const commonTopBarVariantStateProps: DropdownSelectedPropsStylesType = {
  container: {
    padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_0}`,
    border_width: BORDERS.border_00,
  },
  buttonOrLinkContainer: {
    display: 'flex',
    gap: SPACINGS.spacing_150,
    cursor: 'pointer',
    align_items: 'center',
    background_color: COLORS.NEUTRAL.color_neutral_bg_100,
    width: '100%',
    justify_content: 'space-between',
    padding: `${SPACINGS.spacing_150}`,
  },
  labelOpened: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_150,
  },
  labelClosed: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_150,
  },
  iconOpened: {
    width: SPACINGS.spacing_350,
    height: SPACINGS.spacing_350,
    color: COLORS.NEUTRAL.color_neutral_font_250,
  },
  iconClosed: {
    width: SPACINGS.spacing_350,
    height: SPACINGS.spacing_350,
    color: COLORS.NEUTRAL.color_neutral_font_250,
  },
  popover: {
    variant: PopoverVariantType.INPUT_DROPDOWN_LEVEL_ONE,
  },
  listOptions: {
    variant: ListOptionsVariantType.INPUT_DROPDOWN_SECTION,
    optionVariant: OptionVariantType.TOPBAR,
  },
  listOptionsContainer: {
    max_width: '15rem',
    border_style: 'solid',
    border_color: COLORS.NEUTRAL.color_neutral_border_50,
    border_width: BORDERS.border_00,
    background_color: COLORS.NEUTRAL.color_neutral_bg_100,
    margin_top: SPACINGS.spacing_100,
    padding_bottom: SPACINGS.spacing_100,
  },
};

const commonSideMenuVariantStateProps: DropdownSelectedPropsStylesType = {
  container: {
    padding: SPACINGS.spacing_100,
    border_width: BORDERS.border_00,
  },
  buttonOrLinkContainer: {
    display: 'flex',
    gap: SPACINGS.spacing_150,
    cursor: 'pointer',
    align_items: 'center',
    background_color: COLORS.NEUTRAL.color_neutral_bg_100,
    width: '100%',
    justify_content: 'space-between',
    padding: `${SPACINGS.spacing_150}`,
  },
  labelOpened: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_150,
  },
  labelClosed: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_150,
  },
  iconOpened: {
    width: SPACINGS.spacing_350,
    height: SPACINGS.spacing_350,
    color: COLORS.NEUTRAL.color_neutral_font_250,
  },
  iconClosed: {
    width: SPACINGS.spacing_350,
    height: SPACINGS.spacing_350,
    color: COLORS.NEUTRAL.color_neutral_font_250,
  },
  popover: {
    variant: PopoverVariantType.INPUT_DROPDOWN_LEVEL_TWO,
  },
  listOptions: {
    variant: ListOptionsVariantType.DROPDOWN_SELECTED_SECTION,
    optionVariant: OptionVariantType.INPUT_DROPDOWN,
  },
  listOptionsContainer: {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    margin_top: SPACINGS.spacing_350,
    border: '1px solid black',
  },
};

const commonTopbarTapVariantStateProps: DropdownSelectedPropsStylesType = {
  container: {
    display: 'flex',
    flex_direction: 'column',
    [DeviceBreakpointsType.MOBILE]: {
      width: '100%',
    },
  },
  buttonOrLinkContainer: {
    display: 'flex',
    justify_content: 'space-between',
    gap: SPACINGS.spacing_150,
    cursor: 'pointer',
    align_items: 'center',
    padding: SPACINGS.spacing_250,
    text_decoration: 'none',
    background_color: COLORS.NEUTRAL.color_neutral_bg_50,
    [DeviceBreakpointsType.MOBILE]: {
      width: '100%',
      padding: SPACINGS.spacing_300,
      height: SPACINGS.spacing_550,
    },
  },
  labelOpened: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_150,
  },
  labelClosed: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_150,
  },
  iconOpened: {
    width: SPACINGS.spacing_350,
    height: SPACINGS.spacing_350,
    color: COLORS.NEUTRAL.color_neutral_icon_250,
  },
  iconClosed: {
    width: SPACINGS.spacing_350,
    height: SPACINGS.spacing_350,
    color: COLORS.NEUTRAL.color_neutral_icon_250,
  },
  popover: {
    variant: PopoverVariantType.TOPBAR_TAP,
  },
  listOptions: {
    variant: ListOptionsVariantType.DEFAULT,
    optionVariant: OptionVariantType.TOPBAR_TAB,
  },
  listOptionsContainer: {
    margin_top: SPACINGS.spacing_200,
    [DeviceBreakpointsType.MOBILE]: {
      margin_top: SPACINGS.spacing_0,
      width: '100%',
    },
  },
};

export const DROPDOWN_SELECTED_STYLES: DropdownSelectedStylesType<DropdownSelectedVariantType> = {
  [DropdownSelectedVariantType.DEFAULT]: {
    [DropdownSelectedStateType.DEFAULT]: commonDefaultVariantStateProps,
    [DropdownSelectedStateType.HOVER]: commonDefaultVariantStateProps,
  },
  [DropdownSelectedVariantType.TOPBAR]: {
    [DropdownSelectedStateType.DEFAULT]: commonTopBarVariantStateProps,
    [DropdownSelectedStateType.HOVER]: commonTopBarVariantStateProps,
  },
  [DropdownSelectedVariantType.SIDE_MENU]: {
    [DropdownSelectedStateType.DEFAULT]: commonSideMenuVariantStateProps,
    [DropdownSelectedStateType.HOVER]: commonSideMenuVariantStateProps,
  },
  [DropdownSelectedVariantType.TOPBAR_TAB]: {
    [DropdownSelectedStateType.DEFAULT]: commonTopbarTapVariantStateProps,
    [DropdownSelectedStateType.HOVER]: {
      ...commonTopbarTapVariantStateProps,
      buttonOrLinkContainer: {
        ...commonTopbarTapVariantStateProps.buttonOrLinkContainer,
        background_color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
    },
  },
};
