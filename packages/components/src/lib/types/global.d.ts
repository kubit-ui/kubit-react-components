import type { AccordionVariantStyles } from '../../components/accordion/types/accordionTheme';
import type { ActionBottomSheetVariantStyles } from '../../components/actionBottomSheet/types/actionBottomSheetTheme';
import type { AvatarSizeStyles } from '../../components/avatar/types/avatarTheme';
import type { BackToTopVariantStyles } from '../../components/backToTop/types/backToTopTheme';
import type { BadgeStylesType } from '../../components/badge/types/badgeTheme';
import type { BannerVariantStyles } from '../../components/banner/types/bannerTheme';
import type { BreadcrumbsVariantStyles } from '../../components/breadcrumbs/types/breadcrumbsTheme';
import type { ButtonStyles } from '../../components/button/types/buttonTheme';
import type { CalendarVariantStyles } from '../../components/calendar/types/calendarTheme';
import type { CardImageVariantStyles } from '../../components/cardImage/types/cardImageTheme';
import type { CarouselVariantStyles } from '../../components/carousel/types/carouselTheme';
import type { CheckboxVariantStyles } from '../../components/checkbox/types/checkboxTheme';
import type { ChipVariantStyles } from '../../components/chip/types/chipTheme';
import type { ContainerVariantStyles } from '../../components/container/types/containerTheme';
import type { DataTableVariantStyles } from '../../components/dataTable/types/dataTableTheme';
import type { DividerVariantStyles } from '../../components/divider/types/dividerTheme';
import type { DotVariantStyles } from '../../components/dot/types/dotTheme';
import type { DrawerVariantStyles } from '../../components/drawer/types/drawerTheme';
import type { IconHighlightedVariantStyles } from '../../components/iconHighlighted/types/iconHighlightedTheme';
import type { InputVariantStyles } from '../../components/input/types/inputTheme';
import type { InputBaseVariantStyles } from '../../components/inputBase/types/inputBaseTheme';
import type { InputDecorationVariantStyles } from '../../components/inputDecoration/types/inputDecorationTheme';
import type { InputDigitPasswordVariantStyles } from '../../components/inputDigitPassword/types/inputDigitPasswordTheme';
import type { InputDigitSequenceVariantStyles } from '../../components/inputDigitSequence/types/inputDigitSequenceTheme';
import type { InputLabelVariantStyles } from '../../components/inputLabel/types/inputLabelTheme';
import type { InputSignatureVariantStyles } from '../../components/inputSignature/types/inputSignatureTheme';
import type { LinkVariantStyles } from '../../components/link/types/linkTheme';
import type { ListOptionsVariantStyles } from '../../components/listOptions/types/listOptionsTheme';
import type { MediaButtonVariantStyles } from '../../components/mediaButton/types/mediaButtonTheme';
import type { MediaProgressBarVariantStyles } from '../../components/mediaProgressBar/types/mediaProgressBarTheme';
import type { MessageVariantStyles } from '../../components/message/types/messageTheme';
import type { ModalVariantStyles } from '../../components/modal/types/modalTheme';
import type { NavBarVariantStyles } from '../../components/navBar/types/navBarTheme';
import type { NavigationCardVariantStyles } from '../../components/navigationCard/types/navigationCardTheme';
import type { NavigationRowVariantStyles } from '../../components/navigationRow/types/navigationRowTheme';
import type { OliveMenuVariantStyles } from '../../components/oliveMenu/types/oliveMenuTheme';
import type { OptionVariantStyles } from '../../components/option/types/optionTheme';
import type { OverlayVariantStyles } from '../../components/overlay/types/overlayTheme';
import type { PageControlVariantStyles } from '../../components/pageControl/types/pageControlTheme';
import type { PageControlAutomateVariantStyles } from '../../components/pageControlAutomate/types/pageControlAutomateTheme';
import type { PaginationVariantStyles } from '../../components/pagination/types/paginationTheme';
import type { PillVariantStyles } from '../../components/pill/types/pillTheme';
import type { PillSelectorVariantStyles } from '../../components/pillSelector/types/pillSelectorTheme';
import type { PopoverVariantStyles } from '../../components/popover/types/popoverTheme';
import type { ProgressBarVariantStyles } from '../../components/progressBar/types/progressBarTheme';
import type { QuickButtonVariantStyles } from '../../components/quickButton/types/quickButtonTheme';
import type { RadioButtonVariantStyles } from '../../components/radioButton/types/radioButtonTheme';
import type { RadioButtonGroupStylesType } from '../../components/radioButtonGroup/types/radioButtonGroup';
import type { SelectVariantStyles } from '../../components/select/types/selectTheme';
import type { SelectorBoxVariantStyles } from '../../components/selectorBox/types/selectorBoxTheme';
import type { SelectorBoxFileVariantStyles } from '../../components/selectorBoxFile/types/selectorBoxFileTheme';
import type { SkeletonVariantStyles } from '../../components/skeleton/types/skeletonTheme';
import type { SliderVariantStyles } from '../../components/slider/types/sliderTheme';
import type { SnackbarVariantStyles } from '../../components/snackbar/types/snackbarTheme';
import type { StatusCardVariantStyles } from '../../components/statusCard/types/statusCardTheme';
import type { StepperNumberVariantStyles } from '../../components/stepperNumber/types/stepperNumberTheme';
import type { StepperProgressVariantStyles } from '../../components/stepperProgress/types/stepperProgressTheme';
import type { SummaryDetailsVariantStyles } from '../../components/summaryDetails/types/summaryDetailsTheme';
import type { TableVariantStyles } from '../../components/table/types/tableTheme';
import type { TableBodyVariantStyles } from '../../components/tableBody/types/tableBodyTheme';
import type { TableCaptionVariantStyles } from '../../components/tableCaption/types/tableCaptionTheme';
import type { TableCellVariantStyles } from '../../components/tableCell/types/tableCellTheme';
import type { TableDividerVariantStyles } from '../../components/tableDivider/types/tableDividerTheme';
import type { TableFootVariantStyles } from '../../components/tableFoot/types/tableFootTheme';
import type { TableHeadVariantStyles } from '../../components/tableHead/types/tableHeadTheme';
import type { TableRowVariantStyles } from '../../components/tableRow/types/tableRowTheme';
import type { TabsVariantStyles } from '../../components/tabs/types/tabsTheme';
import type { TagVariantStyles } from '../../components/tag/types/tagTheme';
import type { TextVariantStyles } from '../../components/text/types/textTheme';
import type { TextCountStylesType } from '../../components/textArea/components/textCount/types/textCountTheme';
import type { TextAreaVariantStyles } from '../../components/textArea/types/textAreaTheme';
import type { ToggleVariantStyles } from '../../components/toggle/types/toggleTheme';
import type { TooltipVariantStyles } from '../../components/tooltip/types/tooltipTheme';
import type { ValidationStatusVariantStyles } from '../../components/validationStatus/types/validationStatusTheme';
import type { VideoVariantStyles } from '../../components/video/types/videoTheme';
import type { VirtualKeyboardVariantStyles } from '../../components/virtualKeyboard/types/virtualKeyboardTheme';

declare global {
  type KubitContainerGlobalStyles<Variant> = ContainerVariantStyles<Variant>;
  type KubitTextCountGlobalStyles<Variant> = TextCountStylesType<Variant>;
  type KubitTagGlobalStyles<Variant> = TagVariantStyles<Variant>;
  type KubitRadioButtonGroupGlobalStyles<Variant> =
    RadioButtonGroupStylesType<Variant>;
  type KubitDividerGlobalStyles<Variant> = DividerVariantStyles<Variant>;
  type KubitButtonGlobalStyles<Variant, Size> = ButtonStyles<Variant, Size>;
  type KubitBreadcrumbsGlobalStyles<Variant> =
    BreadcrumbsVariantStyles<Variant>;
  type KubitBannerGlobalStyles<Variant> = BannerVariantStyles<Variant>;
  type KubitBadgeGlobalStyles<Variant, Size> = BadgeStylesType<Variant, Size>;
  type KubitBackToTopGlobalStyles<Variant> = BackToTopVariantStyles<Variant>;
  type KubitAccordionGlobalStyles<Variant> = AccordionVariantStyles<Variant>;
  type KubitActionBottomSheetGlobalStyles<Variant> =
    ActionBottomSheetVariantStyles<Variant>;
  type KubitCalendarGlobalStyles<Variant> = CalendarVariantStyles<Variant>;
  type KubitAvatarGlobalStyles<Size> = AvatarSizeStyles<Size>;
  type KubitCardImageGlobalStyles<Variant> = CardImageVariantStyles<Variant>;
  type KubitCarouselGlobalStyles<Variant> = CarouselVariantStyles<Variant>;
  type KubitCheckboxGlobalStyles<Variant> = CheckboxVariantStyles<Variant>;
  type KubitChipGlobalStyles<Variant> = ChipVariantStyles<Variant>;
  type KubitDataTableGlobalStyles<Variant> = DataTableVariantStyles<Variant>;
  type KubitDotGlobalStyles<Variant, Size> = DotVariantStyles<Variant, Size>;
  type KubitDrawerGlobalStyles<Variant> = DrawerVariantStyles<Variant>;
  type KubitSelectGlobalStyles<Variant> = SelectVariantStyles<Variant>;
  type KubitIconHighlightedGlobalStyles<Variant, Size> =
    IconHighlightedVariantStyles<Variant, Size>;
  type KubitInputGlobalStyles<Variant> = InputVariantStyles<Variant>;
  type KubitInputBaseGlobalStyles<Variant> = InputBaseVariantStyles<Variant>;
  type KubitInputDecorationGlobalStyles<Variant> =
    InputDecorationVariantStyles<Variant>;
  type KubitInputDigitPasswordGlobalStyles<Variant> =
    InputDigitPasswordVariantStyles<Variant>;
  type KubitInputDigitSequenceGlobalStyles<Variant> =
    InputDigitSequenceVariantStyles<Variant>;
  type KubitInputLabelGlobalStyles<Variant> = InputLabelVariantStyles<Variant>;
  type KubitInputSignatureGlobalStyles<Variant> =
    InputSignatureVariantStyles<Variant>;
  type KubitLinkGlobalStyles<Variant> = LinkVariantStyles<Variant>;
  type KubitListOptionsGlobalStyles<Variant> =
    ListOptionsVariantStyles<Variant>;
  type KubitMediaButtonGlobalStyles<Variant, Size> = MediaButtonVariantStyles<
    Variant,
    Size
  >;
  type KubitMediaProgressBarGlobalStyles<Variant> =
    MediaProgressBarVariantStyles<Variant>;
  type KubitMessageGlobalStyles<Variant> = MessageVariantStyles<Variant>;
  type KubitModalGlobalStyles<Variant> = ModalVariantStyles<Variant>;
  type KubitNavBarGlobalStyles<Variant> = NavBarVariantStyles<Variant>;
  type KubitNavigationCardGlobalStyles<Variant> =
    NavigationCardVariantStyles<Variant>;
  type KubitNavigationRowGlobalStyles<Variant, Dimension> =
    NavigationRowVariantStyles<Variant, Dimension>;
  type KubitOliveMenuGlobalStyles<Variant> = OliveMenuVariantStyles<Variant>;
  type KubitOptionGlobalStyles<Variant> = OptionVariantStyles<Variant>;
  type KubitOverlayGlobalStyles<Variant> = OverlayVariantStyles<Variant>;
  type KubitPageControlGlobalStyles<Variant, ARVariant> =
    PageControlVariantStyles<Variant, ARVariant>;
  type KubitPageControlAutomateGlobalStyles<Variant> =
    PageControlAutomateVariantStyles<Variant>;
  type KubitPaginationGlobalStyles<Variant> = PaginationVariantStyles<Variant>;
  type KubitPillGlobalStyles<Variant> = PillVariantStyles<Variant>;
  type KubitPillSelectorGlobalStyles<Variant> =
    PillSelectorVariantStyles<Variant>;
  type KubitPopoverGlobalStyles<Variant> = PopoverVariantStyles<Variant>;
  type KubitProgressBarGlobalStyles<Variant, Size> = ProgressBarVariantStyles<
    Variant,
    Size
  >;
  type KubitQuickButtonGlobalStyles<Variant> =
    QuickButtonVariantStyles<Variant>;
  type KubitRadioButtonGlobalStyles<Variant> =
    RadioButtonVariantStyles<Variant>;
  type KubitSelectorBoxGlobalStyles<Variant> =
    SelectorBoxVariantStyles<Variant>;
  type KubitSelectorBoxFileGlobalStyles<Variant> =
    SelectorBoxFileVariantStyles<Variant>;
  type KubitSkeletonGlobalStyles<Variant, Shape> = SkeletonVariantStyles<
    Variant,
    Shape
  >;
  type KubitSliderGlobalStyles<Variant> = SliderVariantStyles<Variant>;
  type KubitSnackbarGlobalStyles<Variant> = SnackbarVariantStyles<Variant>;
  type KubitStatusCardGlobalStyles<Variant> = StatusCardVariantStyles<Variant>;
  type KubitStepperNumberGlobalStyles<Variant> =
    StepperNumberVariantStyles<Variant>;
  type KubitStepperProgressGlobalStyles<Variant> =
    StepperProgressVariantStyles<Variant>;
  type KubitSummaryDetailsGlobalStyles<Variant> =
    SummaryDetailsVariantStyles<Variant>;
  type KubitTableGlobalStyles<Variant> = TableVariantStyles<Variant>;
  type KubitTableBodyGlobalStyles<Variant> = TableBodyVariantStyles<Variant>;
  type KubitTableCaptionGlobalStyles<Variant> =
    TableCaptionVariantStyles<Variant>;
  type KubitTableCellGlobalStyles<Variant> = TableCellVariantStyles<Variant>;
  type KubitTableDividerGlobalStyles<Variant> =
    TableDividerVariantStyles<Variant>;
  type KubitTableFootGlobalStyles<Variant> = TableFootVariantStyles<Variant>;
  type KubitTableHeadGlobalStyles<Variant> = TableHeadVariantStyles<Variant>;
  type KubitTableRowGlobalStyles<Variant> = TableRowVariantStyles<Variant>;
  type KubitTabsGlobalStyles<Variant> = TabsVariantStyles<Variant>;
  type KubitTextGlobalStyles<Variant> = TextVariantStyles<Variant>;
  type KubitTextAreaGlobalStyles<Variant> = TextAreaVariantStyles<Variant>;
  type KubitToggleGlobalStyles<Variant> = ToggleVariantStyles<Variant>;
  type KubitTooltipGlobalStyles<Variant> = TooltipVariantStyles<Variant>;
  type KubitValidationStatusGlobalStyles<Variant> =
    ValidationStatusVariantStyles<Variant>;
  type KubitVideoGlobalStyles<Variant> = VideoVariantStyles<Variant>;
  type KubitVirtualKeyboardGlobalStyles<Variant> =
    VirtualKeyboardVariantStyles<Variant>;
}

export {};
