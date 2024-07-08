import { getAccordionStyles } from './accordion';
import { getActionBottomSheetStyles } from './actionBottomSheet/styles';
import { getAvatarStyles } from './avatar';
import { getBackTopStyles } from './backToTop';
import { getBreadcrumbsStyles } from './breadcrumbs';
import { getButtonStyles } from './button';
import { getCalendarStyles } from './calendar/styles';
import { getCarouselStyles } from './carousel';
import { getCheckboxStyles } from './checkbox';
import { getCheckboxWithLabelStyles } from './checkboxWithLabel';
import { getChipStyles } from './chip';
import { getConfirmationMessageStyles } from './confirmationMessage';
import { getContainerStyles } from './container';
import { getDataTableStyles } from './dataTable';
import { getDividerStyles } from './divider';
import { getDotStyles } from './dot';
import { getDrawerStyles } from './drawer';
import { getEmptyStateStyles } from './emptyState';
import { getFooterStyles } from './footer/styles';
import { getFunctionalitiesModuleStyles } from './functionalitiesModule';
import { getHeaderStyles } from './header/styles';
import { getIconHighlightedStyles } from './iconHighlighted';
import { getInputStyles } from './input';
import { getInputCounterStyles } from './inputCounter';
import { getInputCurrencyStyles } from './inputCurrency';
import { getInputDateStyles } from './inputDate';
import { getInputDropdownStyles } from './inputDropdown';
import { getInputPasswordStyles } from './inputPassword';
import { getInputPhoneStyles } from './inputPhone';
import { getInputSearchStyles } from './inputSearch';
import { LAYOUT_STYLES } from './layout';
import { getLineSeparatorStyles } from './lineSeparator';
import { getLinkStyles } from './link';
import { getListOptionsStyles } from './listOptions';
import { getMessageStyles } from './message';
import { getModalStyles } from './modal';
import { getNavigationCardStyles } from './navigationCard';
import { getOliveMenuStyles } from './oliveMenu/styles';
import { getOptionStyles } from './option';
import { getOverlayStyles } from './overlay';
import { getPageControlStyles } from './pageControl';
import { getPillStyles } from './pill';
import { getPillSelectorStyles } from './pillSelector';
import { POPOVER_STYLES } from './popover';
import { getQuickButtonStyles } from './quickButton';
import { getRadioButtonGroupStyles } from './radioButtonGroup';
import { getSkeletonStyles } from './skeleton';
import { getSnackbarStyles } from './snackbar';
import { getStepperNumberStyles } from './stepperNumber';
import { getTableStyles } from './table';
import { getTableBodyStyles } from './tableBody';
import { getTableCaptionStyles } from './tableCaption';
import { getTableCellStyles } from './tableCell';
import { getTableDividerStyles } from './tableDivider';
import { getTableFootStyles } from './tableFoot';
import { getTableHeadStyles } from './tableHead';
import { getTableRowStyles } from './tableRow';
import { getTableV2Styles } from './tableV2';
import { getTabsStyles } from './tabs';
import { getTagStyles } from './tag';
import { getTagStylesV2 } from './tagV2';
import { TEXT_STYLES } from './text/styles';
import { getTextCountStyles } from './textCount';
import { getThirdPartyAnimationStyles } from './thirdPartyAnimation';
import { getToggleStyles } from './toggle';
import { getTooltipStyles } from './tooltip';
import { getValidationStatusStyles } from './validationStatus/styles';

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
  CONFIRMATION_MESSAGE_STYLES: getConfirmationMessageStyles(COLORS),
  CONTAINER_STYLES: getContainerStyles(COLORS),
  DIVIDER_STYLES: getDividerStyles(COLORS),
  DOT_STYLES: getDotStyles(COLORS),
  DRAWER_STYLES: getDrawerStyles(COLORS),
  EMPTY_STATE_STYLES: getEmptyStateStyles(COLORS),
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
  PILL_STYLES: getPillStyles(COLORS),
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
  THIRD_PARTY_ANIMATION_STYLES: getThirdPartyAnimationStyles(COLORS),
  QUICK_BUTTON_STYLES: getQuickButtonStyles(COLORS),
  BACK_TO_TOP_STYLES: getBackTopStyles(COLORS),
  TOGGLE_STYLES: getToggleStyles(COLORS),
  TOOLTIP_STYLES: getTooltipStyles(COLORS),
  VALIDATION_STATUS_STYLES: getValidationStatusStyles(COLORS),
  TABLE_CELL_STYLES: getTableCellStyles(COLORS),
  TABLE_CAPTION_STYLES: getTableCaptionStyles(COLORS),
  TABLE_BODY_STYLES: getTableBodyStyles(COLORS),
  TABLE_DIVIDER_STYLES: getTableDividerStyles(COLORS),
  TABLE_FOOT_STYLES: getTableFootStyles(COLORS),
  TABLE_HEAD_STYLES: getTableHeadStyles(COLORS),
  TABLE_ROW_STYLES: getTableRowStyles(COLORS),
  TABLE_V2_STYLES: getTableV2Styles(COLORS),
  DATA_TABLE_STYLES: getDataTableStyles(COLORS),
});
