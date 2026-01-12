/* CssThemes */
export declare const cssThemes: {
  'kubit': { css: string; foreign?: { before?: string[]; after?: string[]; }; };
}
/* CssThemes */

/* CssVars */
export interface CssVars {
  'kubit': {
  borders_border_00: string;
  borders_border_50: string;
  borders_border_100: string;
  borders_border_200: string;
  colors_accent_color_default_bg_50: string;
  colors_accent_color_default_bg_100: string;
  colors_accent_color_default_bg_150: string;
  colors_accent_color_default_border_50: string;
  colors_accent_color_default_border_100: string;
  colors_accent_color_default_border_150: string;
  colors_accent_color_default_font_50: string;
  colors_accent_color_default_font_100: string;
  colors_accent_color_default_font_150: string;
  colors_accent_color_default_icon_50: string;
  colors_accent_color_default_icon_100: string;
  colors_accent_color_default_icon_150: string;
  colors_accent_color_hover_bg_50: string;
  colors_accent_color_hover_bg_100: string;
  colors_accent_color_hover_bg_150: string;
  colors_accent_color_hover_font_200: string;
  colors_accent_color_hover_icon_150: string;
  colors_accent_color_hover_icon_200: string;
  colors_accent_color_loading_bg_50: string;
  colors_accent_color_loading_bg_100: string;
  colors_accent_color_loading_bg_150: string;
  colors_accent_color_loading_border_50: string;
  colors_accent_color_loading_border_100: string;
  colors_accent_color_loading_icon_50: string;
  colors_accent_color_loading_icon_100: string;
  colors_accent_color_pressed_bg_50: string;
  colors_accent_color_pressed_bg_150: string;
  colors_accent_color_pressed_font_200: string;
  colors_accent_color_pressed_font_250: string;
  colors_accent_color_pressed_icon_200: string;
  colors_accent_color_pressed_icon_250: string;
  colors_accent_color_code_50: string;
  colors_accent_color_code_100: string;
  colors_accent_color_code_150: string;
  colors_accent_color_code_200: string;
  colors_accent_color_code_250: string;
  colors_brand_color_bg_50: string;
  colors_brand_color_border_50: string;
  colors_brand_color_border_100: string;
  colors_brand_color_font_50: string;
  colors_brand_color_font_100: string;
  colors_brand_color_icon_50: string;
  colors_decorative_color_50: string;
  colors_decorative_color_100: string;
  colors_decorative_color_150: string;
  colors_decorative_color_200: string;
  colors_decorative_color_250: string;
  colors_decorative_color_300: string;
  colors_decorative_color_350: string;
  colors_disabled_color_accentdisabled_bg_50: string;
  colors_disabled_color_accentdisabled_bg_100: string;
  colors_disabled_color_accentdisabled_bg_150: string;
  colors_disabled_color_accentdisabled_border_50: string;
  colors_disabled_color_accentdisabled_border_100: string;
  colors_disabled_color_accentdisabled_border_150: string;
  colors_disabled_color_accentdisabled_font_50: string;
  colors_disabled_color_accentdisabled_font_100: string;
  colors_disabled_color_accentdisabled_font_150: string;
  colors_disabled_color_accentdisabled_icon_50: string;
  colors_disabled_color_accentdisabled_icon_100: string;
  colors_disabled_color_accentdisabled_icon_150: string;
  colors_feedback_color_error_bg_50: string;
  colors_feedback_color_error_bg_100: string;
  colors_feedback_color_error_border_50: string;
  colors_feedback_color_error_icon_50: string;
  colors_feedback_color_info_bg_50: string;
  colors_feedback_color_info_bg_100: string;
  colors_feedback_color_info_bg_150: string;
  colors_feedback_color_info_border_50: string;
  colors_feedback_color_success_bg_50: string;
  colors_feedback_color_success_bg_100: string;
  colors_feedback_color_success_bg_150: string;
  colors_feedback_color_success_border_50: string;
  colors_feedback_color_success_icon_50: string;
  colors_feedback_color_warning_bg_50: string;
  colors_feedback_color_warning_bg_100: string;
  colors_feedback_color_warning_bg_150: string;
  colors_feedback_color_warning_border_50: string;
  colors_feedback_color_warning_icon_50: string;
  colors_feedback_color_feedbackerror_bg_150: string;
  colors_feedback_color_feedbackerror_border_100: string;
  colors_feedback_color_feedbackerror_font_50: string;
  colors_feedback_color_feedbackerror_icon_100: string;
  colors_feedback_color_feedbackinfo_border_100: string;
  colors_feedback_color_feedbackinfo_icon_50: string;
  colors_feedback_color_feedbacksuccess_border_100: string;
  colors_feedback_color_feedbacksuccess_font_50: string;
  colors_feedback_color_feedbacksuccess_icon_100: string;
  colors_feedback_color_feedbackwarning_border_100: string;
  colors_hover_color_accent_bg_50: string;
  colors_keyboard_focus_color_accentkeyboardfocus_border_50: string;
  colors_keyboard_focus_color_accentkeyboardfocus_border_100: string;
  colors_neutral_color_bg_50: string;
  colors_neutral_color_bg_100: string;
  colors_neutral_color_bg_150: string;
  colors_neutral_color_bg_200: string;
  colors_neutral_color_bg_250: string;
  colors_neutral_color_border_50: string;
  colors_neutral_color_border_100: string;
  colors_neutral_color_border_150: string;
  colors_neutral_color_border_200: string;
  colors_neutral_color_border_250: string;
  colors_neutral_color_font_50: string;
  colors_neutral_color_font_100: string;
  colors_neutral_color_font_150: string;
  colors_neutral_color_font_200: string;
  colors_neutral_color_font_250: string;
  colors_neutral_color_icon_50: string;
  colors_neutral_color_icon_100: string;
  colors_neutral_color_icon_150: string;
  colors_neutral_color_icon_200: string;
  colors_neutral_color_icon_250: string;
  colors_pressed_color_accent_bg_50: string;
  colors_pressed_color_accent_bg_100: string;
  colors_pressed_color_accent_bg_200: string;
  colors_pressed_color_accent_border_50: string;
  colors_pressed_color_accent_font_50: string;
  colors_pressed_color_accent_font_100: string;
  colors_pressed_color_accent_font_150: string;
  colors_pressed_color_accent_icon_50: string;
  colors_pressed_color_accent_icon_100: string;
  colors_pressed_color_accent_icon_150: string;
  colors_pressed_color_accent_icon_250: string;
  colors_secondary_color_bg_50: string;
  colors_secondary_color_bg_100: string;
  colors_secondary_color_bg_150: string;
  colors_secondary_color_bg_200: string;
  colors_secondary_color_bg_250: string;
  colors_secondary_color_border_50: string;
  colors_secondary_color_border_100: string;
  colors_secondary_color_border_150: string;
  colors_secondary_color_font_50: string;
  colors_secondary_color_font_100: string;
  colors_secondary_color_font_150: string;
  colors_secondary_color_icon_50: string;
  colors_secondary_color_icon_100: string;
  colors_secondary_color_icon_150: string;
  font_size_body_50: string;
  font_size_body_100: string;
  font_size_body_150: string;
  font_size_body_200: string;
  font_size_heading_50: string;
  font_size_heading_100: string;
  font_size_heading_150: string;
  font_size_heading_200: string;
  font_size_heading_250: string;
  font_weight_000: string;
  font_weight_300: string;
  font_weight_400: string;
  font_weight_500: string;
  font_weight_600: string;
  line_height_50: string;
  line_height_100: string;
  line_height_150: string;
  line_height_200: string;
  line_height_250: string;
  line_height_300: string;
  radius_00: string;
  radius_25: string;
  radius_50: string;
  radius_75: string;
  radius_100: string;
  radius_circle: string;
  shadow_10: string;
  sizes_max_size_image: string;
  sizes_size_25: string;
  sizes_size_25_number_px: string;
  sizes_size_50: string;
  sizes_size_50_number_px: string;
  sizes_size_100: string;
  sizes_size_100_number_px: string;
  sizes_size_150: string;
  sizes_size_150_number_px: string;
  sizes_size_200: string;
  sizes_size_200_number_px: string;
  sizes_size_250: string;
  sizes_size_250_number_px: string;
  sizes_size_300: string;
  sizes_size_300_number_px: string;
  sizes_size_350: string;
  sizes_size_350_number_px: string;
  sizes_size_400: string;
  sizes_size_400_number_px: string;
  sizes_size_450: string;
  sizes_size_450_number_px: string;
  sizes_size_500: string;
  sizes_size_500_number_px: string;
  sizes_size_550: string;
  sizes_size_550_number_px: string;
  sizes_size_anchors_menu: string;
  sizes_size_anchors_menu_number_px: string;
  sizes_size_cover: string;
  sizes_size_cover_mobile_tablet: string;
  sizes_size_cover_number_px: string;
  sizes_size_cover_with_tab_number_pxs: string;
  sizes_size_cover_with_tabs: string;
  sizes_size_cover_with_tabs_mobile_tablet: string;
  sizes_size_header: string;
  sizes_size_header_number_px: string;
  sizes_size_menu_top_search: string;
  sizes_size_menu_top_px: string;
  sizes_size_modal_icon: string;
  sizes_size_side_menu_desktop: string;
  sizes_size_side_menu_desktop_number_px: string;
  sizes_size_side_menu_mobile: string;
  sizes_size_side_menu_mobile_number_px: string;
  sizes_size_side_menu_tablet: string;
  sizes_size_side_menu_tablet_number_px: string;
  spacings_spacing_0: string;
  spacings_spacing_5_percent: string;
  spacings_spacing_10_percent: string;
  spacings_spacing_20_percent: string;
  spacings_spacing_25: string;
  spacings_spacing_25_percent: string;
  spacings_spacing_30_percent: string;
  spacings_spacing_50: string;
  spacings_spacing_50_percent: string;
  spacings_spacing_70_percent: string;
  spacings_spacing_100: string;
  spacings_spacing_100_percent: string;
  spacings_spacing_100_px: string;
  spacings_spacing_100_vh: string;
  spacings_spacing_100_vw: string;
  spacings_spacing_150: string;
  spacings_spacing_180_px: string;
  spacings_spacing_200: string;
  spacings_spacing_250: string;
  spacings_spacing_300: string;
  spacings_spacing_350: string;
  spacings_spacing_400: string;
  spacings_spacing_450: string;
  spacings_spacing_475: string;
  spacings_spacing_500: string;
  spacings_spacing_550: string;
  spacings_spacing_600: string;
  spacings_spacing_650: string;
  spacings_spacing_675: string;
  spacings_spacing_700: string;
  spacings_spacing_740: string;
  spacings_spacing_750: string;
  spacings_spacing_800: string;
  text_align_center: string;
  text_align_left: string;
  text_align_right: string;
  z_index_auto: string;
  z_index_floating: string;
  z_index_intern_1: string;
  z_index_intern_2: string;
  z_index_intern_3: string;
  z_index_modal: string;
  z_index_overlay: string;
  z_index_popup: string;
  z_index_spinner: string;
  z_index_sticky: string;
  z_index_toast: string;
  z_index_top_of_the_world: string;
  },
}
/* CssVars */

/* CssClasses */
export interface CssClasses {
  'kubit': {
  ACCORDION: {
    accordion: string,
    content: string,
    header: string,
    headerbutton: string,
    innercontent: string,
    $_neutral: {
      accordion: string,
    },
    $_standard: {
      accordion: string,
    },
  },
  ALERT: {
    container: string,
    contentcontainer: string,
    description: string,
    $_error: {
      alert: string,
      container: string,
    },
    $_informative: {
      alert: string,
      container: string,
    },
    $_success: {
      alert: string,
      container: string,
    },
    $_warning: {
      alert: string,
      container: string,
    },
  },
  AVATAR: {
    avatar: string,
    dot: string,
    icon: string,
    $_large: {
      avatar: string,
      icon: string,
    },
    $_medium: {
      avatar: string,
      icon: string,
    },
    $_small: {
      avatar: string,
      icon: string,
    },
    $_extra_large: {
      avatar: string,
      icon: string,
    },
  },
  BADGE: {
    badge: string,
    button: string,
    dot: string,
    dotcontainer: string,
    icon: string,
    label: string,
    labelcontainer: string,
    labelicon: string,
    $_default: {
      badge: string,
      icon: string,
    },
    $_alternative: {
      badge: string,
      icon: string,
      label: string,
      labelicon: string,
    },
    $_primary: {
      badge: string,
      icon: string,
      label: string,
      labelicon: string,
    },
  },
  BREADCRUMBS: {
    breadcrumbs: string,
    crumb: string,
    icondivider: string,
    icondividercontainer: string,
    lastonecrumb: string,
    link: string,
    linkcontainer: string,
    $_alternative: {
      breadcrumbs: string,
      icondivider: string,
      lastonecrumb: string,
      link: string,
    },
    $_default: {
      breadcrumbs: string,
      lastonecrumb: string,
      link: string,
    },
  },
  BUTTON: {
    button: string,
    icon: string,
    loader: string,
    $_large: {
      button: string,
      icon: string,
    },
    $_small: {
      button: string,
      icon: string,
    },
    $_alternative: {
      button: string,
    },
    $_ghost_alt: {
      button: string,
    },
    $_ghost_primary: {
      button: string,
    },
    $_ghost_secondary: {
      button: string,
    },
    $_primary: {
      button: string,
    },
    $_secondary: {
      button: string,
    },
    dynamic_values: (styles: { '$alignText': string; }) => { string: string; object: object } ,
  },
  CALENDAR: {
    calendar: string,
    backtext: string,
    container: string,
    dayslist: string,
    headercontainer: string,
    headerrow: string,
    headerth: string,
    leftarrow: string,
    listelementempty: string,
    listelementrove: string,
    monthelement: string,
    monthlistitem: string,
    monthslist: string,
    rightarrow: string,
    selectorcontainer: string,
    selectoriconandbacktextcontainer: string,
    selectoroptionscontainer: string,
    table: string,
    tablerow: string,
    tbody: string,
    weekdaycontainer: string,
    year: string,
    yearelement: string,
    yearlistitem: string,
    yearslist: string,
    button_size: {
      icon: string,
      button: string,
      loader: string,
    },
    button_variant: {
      button: string,
      icon: string,
      loader: string,
    },
  },
  CARD: {
    card: string,
    content: string,
    footer: string,
    header: string,
    $_default: {
      card: string,
      content: string,
      footer: string,
      header: string,
    },
  },
  CAROUSEL: {
    carousel: string,
    content: string,
    viewer: string,
    $_default: {
      carousel: string,
    },
  },
  CHECKBOX: {
    checkbox: string,
    checkboxwithlabelcontainer: string,
    errormessagecontainer: string,
    label: string,
    error_message: {
      icon: string,
      typography: string,
      error_message: string,
    },
  },
  CHECKBOX_BASE: {
    checkbox_base: string,
    icon: string,
    iconcontainer: string,
    input: string,
    $_default: {
      checkbox_base: string,
    },
  },
  CHIP: {
    chip: string,
    closeicon: string,
    errorcontainer: string,
    erroricon: string,
    errormessage: string,
    label: string,
    lefticon: string,
    rangeicon: string,
    rangeitemseparator: string,
    rangeitemtext: string,
    rangeitemwrapper: string,
    $_default: {
      chip: string,
      closeicon: string,
      errorcontainer: string,
      erroricon: string,
      errormessage: string,
      label: string,
      lefticon: string,
      rangeitemseparator: string,
      rangeitemtext: string,
    },
  },
  DATA_TABLE: {
    data_table: string,
    headboxshadow: string,
    leftboxshadow: string,
    leftboxshadowcontainer: string,
    rightboxshadow: string,
    rightboxshadowcontainer: string,
    scrollablecontainer: string,
    $_default: {
      data_table: string,
    },
    row_group_table: {
      container: string,
      headboxshadow: string,
      leftboxshadow: string,
      leftboxshadowcontainer: string,
      rightboxshadow: string,
      rightboxshadowcontainer: string,
      scrollablecontainer: string,
      table: string,
    },
    row_group_table_body: {
      table_body: string,
    },
    row_group_table_body_cell: {
      table_cell: string,
    },
    row_group_table_body_row: {
      table_row: string,
    },
    row_group_table_caption: {
      table_caption: string,
    },
    row_group_table_head: {
      table_head: string,
    },
    row_group_table_head_cell: {
      table_cell: string,
    },
    row_group_table_head_row: {
      table_row: string,
    },
    table: {
      container: string,
      headboxshadow: string,
      leftboxshadow: string,
      leftboxshadowcontainer: string,
      rightboxshadow: string,
      rightboxshadowcontainer: string,
      scrollablecontainer: string,
      table: string,
    },
    table_body: {
      table_body: string,
    },
    table_body_cell: {
      table_cell: string,
    },
    table_body_row: {
      table_row: string,
    },
    table_caption: {
      table_caption: string,
    },
    table_head: {
      table_head: string,
    },
    table_head_cell: {
      table_cell: string,
    },
    table_head_row: {
      table_row: string,
    },
  },
  DOT: {
    dot: string,
    $_big: {
      dot: string,
    },
    $_medium: {
      dot: string,
    },
    $_small: {
      dot: string,
    },
    $_alternative: {
      dot: string,
    },
    $_with_border: {
      dot: string,
    },
    $_without_border: {
      dot: string,
    },
  },
  ERROR_MESSAGE: {
    error_message: string,
    icon: string,
    typography: string,
    $_default: {
      error_message: string,
    },
  },
  ICON: {
    button: string,
    complex: string,
    svg: string,
    dynamic_values: (styles: { '$color': string; '$moveAround': string; '$transitionDuration': string; '$height': string; '$width': string; }) => { string: string; object: object } ,
  },
  INPUT: {
    input: string,
    inputandlabelcontainer: string,
    $_filled: {
      input: string,
    },
    $_outlined: {
      input: string,
    },
    $_standard: {
      input: string,
    },
    input_base: {
      input_base: string,
    },
    left_decoration: {
      decoration: string,
      input_decoration: string,
    },
    right_decoration: {
      decoration: string,
      input_decoration: string,
    },
  },
  INPUT_BASE: {
    input_base: string,
    $_filled: {
      input_base: string,
    },
    $_outlined: {
      input_base: string,
    },
    $_standard: {
      input_base: string,
    },
  },
  INPUT_DECORATION: {
    input_decoration: string,
    decoration: string,
    $_standard: {
      input_decoration: string,
    },
  },
  INPUT_SIGNATURE: {
    input_signature: string,
    canvas: string,
    placeholdercontainer: string,
    placeholdertext: string,
    $_default: {
      input_signature: string,
    },
  },
  ITEM_ROVE: {
    item_rove: string,
  },
  LINK: {
    link: string,
    childrencontainer: string,
    icon: string,
    labelandiconcontainer: string,
    $_inline_primary: {
      link: string,
      icon: string,
    },
    $_inline_secondary: {
      link: string,
      icon: string,
    },
    $_inline_secondary_alt: {
      link: string,
      icon: string,
    },
    $_navigation_primary: {
      link: string,
      icon: string,
    },
    $_navigation_secondary: {
      link: string,
      icon: string,
    },
    $_navigation_secondary_alt: {
      link: string,
      icon: string,
    },
  },
  LINK_AS_BUTTON: {
    link_as_button: string,
  },
  LIST_OPTIONS: {
    list_options: string,
    optionscontainer: string,
    title: string,
    titlecontainer: string,
    $_default: {
      list_options: string,
      title: string,
      titlecontainer: string,
    },
  },
  MODAL: {
    modal: string,
    closebuttoncontainer: string,
    closebuttonicon: string,
    content: string,
    dragicon: string,
    dragiconcontainer: string,
    footer: string,
    headercontainer: string,
    headercontentcontainer: string,
    title: string,
    titlecontainer: string,
    titlehiddencontainer: string,
    $_default: {
      modal: string,
    },
  },
  OPTION: {
    option: string,
    checkedicon: string,
    firstrowcontainer: string,
    icon: string,
    label: string,
    labelhighlighted: string,
    labeliconcontainer: string,
    sublabel: string,
    sublabelcontainer: string,
    $_code_viewer_subtheme: {
      option: string,
      label: string,
    },
    $_input_dropdown: {
      option: string,
      icon: string,
      label: string,
      labeliconcontainer: string,
    },
    $_input_option: {
      option: string,
      icon: string,
      label: string,
      labelhighlighted: string,
      labeliconcontainer: string,
      sublabel: string,
    },
    $_input_option_hightlighted: {
      option: string,
      icon: string,
      label: string,
      labelhighlighted: string,
      labeliconcontainer: string,
      sublabel: string,
    },
    $_inverted: {
      option: string,
      label: string,
    },
    $_side_menu_level_1: {
      option: string,
      icon: string,
      label: string,
      labeliconcontainer: string,
    },
    $_side_menu_level_2: {
      option: string,
      label: string,
    },
    $_topbar: {
      option: string,
      label: string,
      labelhighlighted: string,
    },
    $_topbar_tab: {
      option: string,
      label: string,
    },
  },
  OVERLAY: {
    overlay: string,
    $_default: {
      overlay: string,
    },
    $_secondary: {
      overlay: string,
    },
  },
  PAGE_CONTROL: {
    page_control: string,
    dotscontainer: string,
    icon: string,
    leftarrowcontrolcontainer: string,
    leftbuttoncontrol: string,
    pagedot: string,
    rightarrowcontrolcontainer: string,
    rightbuttoncontrol: string,
    $_default: {
      page_control: string,
      icon: string,
    },
    $_bullets: {
      page_control: string,
      dotscontainer: string,
      pagedot: string,
    },
  },
  PAGINATION: {
    pagination: string,
    page: string,
    pagecontainer: string,
    pagescontainer: string,
    paginationleftarrowicon: string,
    paginationrightarrowicon: string,
    $_default: {
      pagination: string,
      page: string,
      paginationleftarrowicon: string,
      paginationrightarrowicon: string,
    },
  },
  POPOVER: {
    popover: string,
    arrow: string,
  },
  PROGRESS_BAR: {
    progress_bar: string,
    bar: string,
    barcontainer: string,
    progressbar: string,
    $_medium: {
      progress_bar: string,
      bar: string,
      progressbar: string,
    },
    $_small: {
      progress_bar: string,
      bar: string,
      progressbar: string,
    },
    $_default: {
      progress_bar: string,
    },
  },
  RADIO_BUTTON: {
    radio_button: string,
    errormessage: string,
    errormessagecontainer: string,
    errormessageicon: string,
    errormessageiconcontainer: string,
    infocontainer: string,
    label: string,
    labelcontainer: string,
    radiobuttoncontainer: string,
    rowcontainer: string,
    speciallabel: string,
    sublabel: string,
    $_default: {
      radio_button: string,
      errormessage: string,
      sublabel: string,
    },
    tooltip: {
      arrowcontainer: string,
      arrowposition: string,
      arrowsize: string,
      paragraph: string,
      paragraphcontainer: string,
      tooltipexternalcontainer: string,
      tooltipinternalcontainer: string,
      popover: {
        arrow: string,
        popover: string,
      },
      arrow: string,
      tooltipalignstyles: string,
      tooltipasmodal: string,
    },
  },
  SELECT: {
    select: string,
    buttonorlinkcontainer: string,
    iconclosed: string,
    iconopened: string,
    labelclosed: string,
    labelopened: string,
    listoptionscontainer: string,
    $_default: {
      select: string,
      buttonorlinkcontainer: string,
      iconclosed: string,
      iconopened: string,
      labelclosed: string,
      labelopened: string,
      listoptionscontainer: string,
    },
    $_side_menu: {
      select: string,
      buttonorlinkcontainer: string,
      iconclosed: string,
      iconopened: string,
      labelclosed: string,
      labelopened: string,
      listoptionscontainer: string,
    },
    $_topbar: {
      select: string,
      buttonorlinkcontainer: string,
      iconclosed: string,
      iconopened: string,
      labelclosed: string,
      labelopened: string,
      listoptionscontainer: string,
    },
    $_topbar_tab: {
      select: string,
      buttonorlinkcontainer: string,
      iconclosed: string,
      iconopened: string,
      labelclosed: string,
      labelopened: string,
      listoptionscontainer: string,
    },
  },
  SELECTOR_BOX_FILE: {
    selector_box_file: string,
    actionicon: string,
    actioniconandactiontextcontainer: string,
    animationcontainer: string,
    borderanimationcontainer: string,
    bottomanimationcontainer: string,
    containeractioncontainer: string,
    containerboxactiontext: string,
    containerboxcontainer: string,
    containerboxdescription: string,
    containerboxfilename: string,
    containerboxicon: string,
    containerboxtextscontainer: string,
    header: string,
    leftanimationcontainer: string,
    rightanimationcontainer: string,
    topanimationcontainer: string,
    $_default: {
      selector_box_file: string,
    },
  },
  SKELETON: {
    skeleton: string,
    $_circle: {
      skeleton: string,
    },
    $_square: {
      skeleton: string,
    },
    $_alternative: {
      skeleton: string,
    },
    $_default: {
      skeleton: string,
    },
  },
  SLIDER: {
    slider: string,
    activetrack: string,
    buttonstrackscontainer: string,
    helpertext: string,
    helpertextcontainer: string,
    helpertextleftcontainer: string,
    helpertextrightcontainer: string,
    inactivetrack: string,
    innerthumbtooltip: string,
    label: string,
    labelcontainer: string,
    rightthumbicon: string,
    scalecontainer: string,
    scaleoption: string,
    thumb: string,
    thumbicon: string,
    tracksthumbscontainer: string,
    tracksthumbsinnercontainer: string,
    $_primary: {
      slider: string,
      activetrack: string,
      inactivetrack: string,
      thumb: string,
    },
    $_test_no_thumb_exceeds_track: {
      slider: string,
    },
    decrement_button_size: {
      icon: string,
      button: string,
      loader: string,
    },
    decrement_button_variant: {
      button: string,
      icon: string,
      loader: string,
    },
    tooltip: {
      arrowcontainer: string,
      arrowposition: string,
      arrowsize: string,
      paragraph: string,
      paragraphcontainer: string,
      tooltipexternalcontainer: string,
      tooltipinternalcontainer: string,
      popover: {
        arrow: string,
        popover: string,
      },
      arrow: string,
      tooltipalignstyles: string,
      tooltipasmodal: string,
    },
  },
  SNACKBAR: {
    $_error: {
      snackbar: string,
      container: string,
    },
    $_container: {
      snackbar: string,
    },
    container: string,
    $_primary: {
      snackbar: string,
      container: string,
    },
    $_success: {
      snackbar: string,
      container: string,
    },
    $_warning: {
      snackbar: string,
      container: string,
    },
  },
  STEPPER_NUMBER: {
    stepper_number: string,
    iconselected: string,
    stepbar: string,
    stepcircle: string,
    stepcirclecontainer: string,
    stepcontainer: string,
    stepindex: string,
    stepname: string,
    stepnamecontainer: string,
    $_horizontal: {
      stepper_number: string,
      stepindex: string,
    },
    $_default: {
      stepper_number: string,
      iconselected: string,
      stepbar: string,
      stepcircle: string,
      stepindex: string,
    },
    $_vertical: {
      stepper_number: string,
      stepcontainer: string,
      stepname: string,
      stepnamecontainer: string,
    },
  },
  TABLE: {
    table: string,
    container: string,
    headboxshadow: string,
    leftboxshadow: string,
    leftboxshadowcontainer: string,
    rightboxshadow: string,
    rightboxshadowcontainer: string,
    scrollablecontainer: string,
    $_default: {
      table: string,
    },
  },
  TABLE_BODY: {
    table_body: string,
    $_default: {
      table_body: string,
    },
  },
  TABLE_CAPTION: {
    table_caption: string,
    $_default: {
      table_caption: string,
    },
  },
  TABLE_CELL: {
    table_cell: string,
    $_body_cell_default: {
      table_cell: string,
    },
    $_header_cell_default: {
      table_cell: string,
    },
    $_header_cell_secondary: {
      table_cell: string,
    },
    dynamic_values: (styles: { '$tdWidth': string; '$tdHeight': string; '$tdMinWidth': string; '$tdMaxWidth': string; '$tdTextAlign': string; '$tdVerticalAlign': string; '$tdAlignItems': string; '$tdJustifyContent': string; '$tdTop': string; '$tdLeft': string; '$tdRight': string; '$tdBottom': string; }) => { string: string; object: object } ,
  },
  TABLE_DIVIDER: {
    table_divider: string,
    $_default: {
      table_divider: string,
    },
  },
  TABLE_FOOT: {
    table_foot: string,
    $_default: {
      table_foot: string,
    },
  },
  TABLE_HEAD: {
    table_head: string,
    $_default: {
      table_head: string,
    },
  },
  TABLE_ROW: {
    table_row: string,
    $_body_row_default: {
      table_row: string,
    },
    $_header_row_default: {
      table_row: string,
    },
    $_header_row_secondary: {
      table_row: string,
    },
  },
  TABS: {
    tabs: string,
    arrowiconcontainer: string,
    container: string,
    contentcontainer: string,
    firsttabbutton: string,
    icon: string,
    label: string,
    lasttabbutton: string,
    onetabcontainer: string,
    tabbutton: string,
    tabbuttonscontainer: string,
    tabcontainer: string,
    $_default: {
      tabs: string,
    },
  },
  TAG: {
    tag: string,
    icon: string,
    label: string,
    $_code: {
      tag: string,
      label: string,
    },
    $_deprecated: {
      tag: string,
    },
    $_dormant: {
      tag: string,
    },
    $_healthy: {
      tag: string,
    },
    $_informative: {
      tag: string,
    },
    $_issue: {
      tag: string,
    },
  },
  TEXT: {
    text: string,
    $_default: {
      text: string,
    },
    $_heading_display_1_expanded: {
      text: string,
    },
    $_heading_display_1_extended: {
      text: string,
    },
    $_heading_h1_expanded: {
      text: string,
    },
    $_heading_h1_extended: {
      text: string,
    },
    $_heading_h2_expanded: {
      text: string,
    },
    $_heading_h2_extended: {
      text: string,
    },
    $_heading_h3_expanded: {
      text: string,
    },
    $_heading_h3_extended: {
      text: string,
    },
    $_heading_h4_expanded: {
      text: string,
    },
    $_heading_h4_extended: {
      text: string,
    },
    $_main_heading_display_1_expanded: {
      text: string,
    },
    $_main_heading_h1_expanded: {
      text: string,
    },
    $_main_heading_h2_expanded: {
      text: string,
    },
    $_main_heading_h3_expanded: {
      text: string,
    },
    $_main_heading_h4_expanded: {
      text: string,
    },
    $_paragraph_caption_expanded: {
      text: string,
    },
    $_paragraph_caption_extended: {
      text: string,
    },
    $_paragraph_large_expanded: {
      text: string,
    },
    $_paragraph_large_extended: {
      text: string,
    },
    $_paragraph_medium_expanded: {
      text: string,
    },
    $_paragraph_medium_extended: {
      text: string,
    },
    $_paragraph_medium_mono: {
      text: string,
    },
    $_paragraph_small_expanded: {
      text: string,
    },
    $_paragraph_small_extended: {
      text: string,
    },
  },
  TEXT_AREA: {
    text_area: string,
    bottomcontainer: string,
    counter: string,
    counterleft: string,
    counterright: string,
    errorcontainer: string,
    erroricon: string,
    errormessage: string,
    helpmessage: string,
    helpmessageerrorcontainer: string,
    label: string,
    labelandadditionalinfocontainer: string,
    labeltextareacontainer: string,
    required: string,
    textarea: string,
    title: string,
    titlecontainer: string,
    $_default: {
      text_area: string,
    },
  },
  TEXT_COUNT: {
    text_count: string,
    letftext: string,
    righttext: string,
    $_default: {
      text_count: string,
      letftext: string,
      righttext: string,
    },
  },
  TOGGLE: {
    icon: string,
    iconwrapper: string,
    thumb: string,
    track: string,
    $_regular: {
      toggle: string,
      track: string,
    },
  },
  TOOLTIP: {
    arrow: string,
    arrowcontainer: string,
    arrowposition: string,
    arrowsize: string,
    paragraph: string,
    paragraphcontainer: string,
    tooltipalignstyles: string,
    tooltipasmodal: string,
    tooltipexternalcontainer: string,
    tooltipinternalcontainer: string,
    $_default: {
      tooltip: string,
      arrowcontainer: string,
      arrowposition: string,
      arrowsize: string,
      paragraph: string,
      paragraphcontainer: string,
      tooltipexternalcontainer: string,
      tooltipinternalcontainer: string,
    },
    popover: {
      arrow: string,
      popover: string,
    },
  },
  VIRTUAL_KEYBOARD: {
    virtual_keyboard: string,
    digitbuttons: string,
    digittext: string,
    digitwrapper: string,
    iconcontainer: string,
    removebutton: string,
    $_default: {
      virtual_keyboard: string,
      digitbuttons: string,
      digittext: string,
    },
  },
  },
}
/* CssClasses */

/* CssAvailableComponents */
export interface CssAvailableComponents {
  'kubit': {
  ACCORDION: 'ACCORDION',
  ALERT: 'ALERT',
  AVATAR: 'AVATAR',
  BADGE: 'BADGE',
  BREADCRUMBS: 'BREADCRUMBS',
  BUTTON: 'BUTTON',
  CALENDAR: 'CALENDAR',
  CARD: 'CARD',
  CAROUSEL: 'CAROUSEL',
  CHECKBOX: 'CHECKBOX',
  CHECKBOX_BASE: 'CHECKBOX_BASE',
  CHIP: 'CHIP',
  DATA_TABLE: 'DATA_TABLE',
  DOT: 'DOT',
  ERROR_MESSAGE: 'ERROR_MESSAGE',
  ICON: 'ICON',
  INPUT: 'INPUT',
  INPUT_BASE: 'INPUT_BASE',
  INPUT_DECORATION: 'INPUT_DECORATION',
  INPUT_SIGNATURE: 'INPUT_SIGNATURE',
  ITEM_ROVE: 'ITEM_ROVE',
  LINK: 'LINK',
  LINK_AS_BUTTON: 'LINK_AS_BUTTON',
  LIST_OPTIONS: 'LIST_OPTIONS',
  MODAL: 'MODAL',
  OPTION: 'OPTION',
  OVERLAY: 'OVERLAY',
  PAGE_CONTROL: 'PAGE_CONTROL',
  PAGINATION: 'PAGINATION',
  POPOVER: 'POPOVER',
  PROGRESS_BAR: 'PROGRESS_BAR',
  RADIO_BUTTON: 'RADIO_BUTTON',
  SELECT: 'SELECT',
  SELECTOR_BOX_FILE: 'SELECTOR_BOX_FILE',
  SKELETON: 'SKELETON',
  SLIDER: 'SLIDER',
  SNACKBAR: 'SNACKBAR',
  STEPPER_NUMBER: 'STEPPER_NUMBER',
  TABLE: 'TABLE',
  TABLE_BODY: 'TABLE_BODY',
  TABLE_CAPTION: 'TABLE_CAPTION',
  TABLE_CELL: 'TABLE_CELL',
  TABLE_DIVIDER: 'TABLE_DIVIDER',
  TABLE_FOOT: 'TABLE_FOOT',
  TABLE_HEAD: 'TABLE_HEAD',
  TABLE_ROW: 'TABLE_ROW',
  TABS: 'TABS',
  TAG: 'TAG',
  TEXT: 'TEXT',
  TEXT_AREA: 'TEXT_AREA',
  TEXT_COUNT: 'TEXT_COUNT',
  TOGGLE: 'TOGGLE',
  TOOLTIP: 'TOOLTIP',
  VIRTUAL_KEYBOARD: 'VIRTUAL_KEYBOARD',
  },
}
/* CssAvailableComponents */

/* CssGlobalStyles */
export interface CssGlobalStyles {
  'kubit': {
  kbt_sr_only: string;
  global_focus_visible: string;
  kbt_global_focus: string;
  },
}
/* CssGlobalStyles */

/* CssMediaQueries */
export interface CssMediaQueries {
  'kubit': {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
  large_desktop: 'large_desktop',
  },
}
/* CssMediaQueries */

export declare const cssVars: CssVars;
export declare const cssClasses: CssClasses;
export declare const cssAvailableComponents: CssAvailableComponents;
export declare const cssGlobalStyles: CssGlobalStyles;
export declare const cssMediaQueries: CssMediaQueries;
