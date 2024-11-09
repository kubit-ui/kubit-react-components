import { LAYOUT_STYLES } from '../../../kubit/components/layout/styles';
import { POPOVER_STYLES } from '../../../kubit/components/popover/styles';
import { getAccordionStyles } from './accordion/styles';
import { getActionBottomSheetStyles } from './actionBottomSheet/styles';
import { getAvatarStyles } from './avatar/styles';
import { getBackTopStyles } from './backToTop/styles';
import { getBreadcrumbsStyles } from './breadcrumbs/styles';
import { getButtonStyles } from './button/styles';
import { getCalendarStyles } from './calendar/styles';
import { getCarouselStyles } from './carousel/styles';
import { getCheckboxStyles } from './checkbox/styles';
import { getCheckboxWithLabelStyles } from './checkboxWithLabel/styles';
import { getChipStyles } from './chip/styles';
import { getContainerStyles } from './container/styles';
import { getDataTableStyles } from './dataTable/styles';
import { getDividerStyles } from './divider/styles';
import { getDotStyles } from './dot/styles';
import { getDrawerStyles } from './drawer/styles';
import { getFooterStyles } from './footer/styles';
import { getFunctionalitiesModuleStyles } from './functionalitiesModule/styles';
import { getHeaderStyles } from './header/styles';
import { getIconHighlightedStyles } from './iconHighlighted/styles';
import { getInputStyles } from './input/styles';
import { getInputCounterStyles } from './inputCounter/styles';
import { getInputCurrencyStyles } from './inputCurrency/styles';
import { getInputDateStyles } from './inputDate/styles';
import { getInputDropdownStyles } from './inputDropdown/styles';
import { getInputPasswordStyles } from './inputPassword/styles';
import { getInputPhoneStyles } from './inputPhone/styles';
import { getInputSearchStyles } from './inputSearch/styles';
import { getLineSeparatorStyles } from './lineSeparator/styles';
import { getLinkStyles } from './link/styles';
import { getListOptionsStyles } from './listOptions/styles';
import { getMessageStyles } from './message/styles';
import { getModalStyles } from './modal/styles';
import { getNavigationCardStyles } from './navigationCard/styles';
import { getOliveMenuStyles } from './oliveMenu/styles';
import { getOptionStyles } from './option/styles';
import { getOverlayStyles } from './overlay/styles';
import { getPageControlStyles } from './pageControl/styles';
import { getPillStyles } from './pill/styles';
import { getPillSelectorStyles } from './pillSelector/styles';
import { getPillSelectorStylesV2 } from './pillSelectorV2/styles';
import { getPillStylesV2 } from './pillV2/styles';
import { getQuickButtonStyles } from './quickButton/styles';
import { getRadioButtonGroupStyles } from './radioButton/styles';
import { getSkeletonStyles } from './skeleton/styles';
import { getSnackbarStyles } from './snackbar/styles';
import { getStepperNumberStyles } from './stepperNumber/styles';
import { getTableStyles } from './table/styles';
import { getTableBodyStyles } from './tableBody/styles';
import { getTableCaptionStyles } from './tableCaption/styles';
import { getTableCellStyles } from './tableCell/styles';
import { getTableDividerStyles } from './tableDivider/styles';
import { getTableFootStyles } from './tableFoot/styles';
import { getTableHeadStyles } from './tableHead/styles';
import { getTableRowStyles } from './tableRow/styles';
import { getTabsStyles } from './tabs/styles';
import { getTagStyles } from './tag/styles';
import { getTagStylesV2 } from './tagV2/styles';
import { TEXT_STYLES } from './text/styles';
import { getTextCountStyles } from './textCount/styles';
import { getToggleStyles } from './toggle/styles';
import { getTooltipStyles } from './tooltip/styles';
import { getValidationStatusStyles } from './validationStatus/styles';
import { getVirtualKeyboardStyles } from './virtualKeyboard/styles';

export const getComponentsStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): object => ({
  ACCORDION_STYLES: getAccordionStyles(COLORS),
  ACTION_BOTTOM_SHEET_STYLES: getActionBottomSheetStyles(COLORS),
  AVATAR_STYLES: getAvatarStyles(COLORS),
  BREADCRUMB_STYLES: getBreadcrumbsStyles(COLORS),
  BUTTON_STYLES: getButtonStyles(COLORS),
  CALENDAR_STYLES: getCalendarStyles(COLORS),
  CAROUSEL_STYLES: getCarouselStyles(COLORS),
  CHECKBOX_STYLES: getCheckboxStyles(COLORS),
  CHECKBOX_WITH_LABEL_STYLES: getCheckboxWithLabelStyles(COLORS),
  CHIP_STYLES: getChipStyles(COLORS),
  CONTAINER_STYLES: getContainerStyles(COLORS),
  DIVIDER_STYLES: getDividerStyles(COLORS),
  DOT_STYLES: getDotStyles(COLORS),
  DRAWER_STYLES: getDrawerStyles(COLORS),
  FOOTER_STYLES: getFooterStyles(COLORS),
  FUNCTIONALITIES_MODULE_STYLES: getFunctionalitiesModuleStyles(COLORS),
  HEADER_STYLES: getHeaderStyles(COLORS),
  ICON_HIGHLIGHTED_STYLES: getIconHighlightedStyles(COLORS),
  INPUT_COUNTER_STYLES: getInputCounterStyles(COLORS),
  INPUT_CURRENCY_STYLES: getInputCurrencyStyles(COLORS),
  INPUT_DATE_STYLES: getInputDateStyles(COLORS),
  INPUT_DROPDOWN_STYLES: getInputDropdownStyles(COLORS),
  INPUT_PASSWORD_STYLES: getInputPasswordStyles(COLORS),
  INPUT_PHONE_STYLES: getInputPhoneStyles(COLORS),
  INPUT_SEARCH_STYLES: getInputSearchStyles(COLORS),
  INPUT_STYLES: getInputStyles(COLORS),
  LAYOUT_STYLES: LAYOUT_STYLES,
  LINE_SEPARATOR_STYLES: getLineSeparatorStyles(COLORS),
  LINK_STYLES: getLinkStyles(COLORS),
  LIST_OPTIONS_STYLES: getListOptionsStyles(COLORS),
  MESSAGE_STYLES: getMessageStyles(COLORS),
  MODAL_STYLES: getModalStyles(COLORS),
  NAVIGATION_CARD_STYLES: getNavigationCardStyles(COLORS),
  OLIVE_MENU_STYLES: getOliveMenuStyles(COLORS),
  OPTION_STYLES: getOptionStyles(COLORS),
  OVERLAY_STYLES: getOverlayStyles(COLORS),
  PAGE_CONTROL_STYLES: getPageControlStyles(COLORS),
  PILL_SELECTOR_STYLES: getPillSelectorStyles(COLORS),
  PILL_SELECTOR_STYLES_V2: getPillSelectorStylesV2(COLORS),
  PILL_STYLES: getPillStyles(COLORS),
  PILL_STYLES_V2: getPillStylesV2(COLORS),
  POPOVER_STYLES: POPOVER_STYLES,
  PRIMARY_TABS_STYLES: getTabsStyles(COLORS),
  RADIO_BUTTON_GROUP_STYLES: getRadioButtonGroupStyles(COLORS),
  SKELETON_STYLES: getSkeletonStyles(COLORS),
  SNACKBAR_STYLES: getSnackbarStyles(COLORS),
  STEPPER_NUMBER_STYLES: getStepperNumberStyles(COLORS),
  TABLE_STYLES: getTableStyles(COLORS),
  TAG_STYLES: getTagStyles(COLORS),
  TAG_STYLES_V2: getTagStylesV2(COLORS),
  TEXT_COUNT_STYLES: getTextCountStyles(COLORS),
  TEXT_STYLES: TEXT_STYLES,
  QUICK_BUTTON_STYLES: getQuickButtonStyles(COLORS),
  BACK_TO_TOP_STYLES: getBackTopStyles(COLORS),
  TOGGLE_STYLES: getToggleStyles(COLORS),
  TOOLTIP_STYLES: getTooltipStyles(COLORS),
  VALIDATION_STATUS_STYLES: getValidationStatusStyles(COLORS),
  VIRTUAL_KEYBOARD_STYLES: getVirtualKeyboardStyles(COLORS),
  TABLE_CELL_STYLES: getTableCellStyles(COLORS),
  TABLE_CAPTION_STYLES: getTableCaptionStyles(COLORS),
  TABLE_BODY_STYLES: getTableBodyStyles(COLORS),
  TABLE_DIVIDER_STYLES: getTableDividerStyles(COLORS),
  TABLE_FOOT_STYLES: getTableFootStyles(COLORS),
  TABLE_HEAD_STYLES: getTableHeadStyles(COLORS),
  TABLE_ROW_STYLES: getTableRowStyles(COLORS),
  TABLE_V2_STYLES: getTableStyles(COLORS),
  DATA_TABLE_STYLES: getDataTableStyles(COLORS),
});
