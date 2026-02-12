export type ComponentsTypesAvailableComponents =
  | 'ACCORDION'
  | 'ALERT'
  | 'AVATAR'
  | 'BADGE'
  | 'BREADCRUMBS'
  | 'BUTTON'
  | 'CALENDAR'
  | 'CARD'
  | 'CAROUSEL'
  | 'CHECKBOX'
  | 'CHECKBOX_BASE'
  | 'CHIP'
  | 'DATA_TABLE'
  | 'DOT'
  | 'ERROR_MESSAGE'
  | 'ICON'
  | 'INPUT'
  | 'INPUT_BASE'
  | 'INPUT_DECORATION'
  | 'INPUT_SIGNATURE'
  | 'ITEM_ROVE'
  | 'LINK'
  | 'LINK_AS_BUTTON'
  | 'LIST_OPTIONS'
  | 'MODAL'
  | 'OPTION'
  | 'OVERLAY'
  | 'PAGE_CONTROL'
  | 'PAGINATION'
  | 'POPOVER'
  | 'PROGRESS_BAR'
  | 'RADIO_BUTTON'
  | 'SELECT'
  | 'SELECTOR_BOX_FILE'
  | 'SKELETON'
  | 'SLIDER'
  | 'SNACKBAR'
  | 'STEPPER_NUMBER'
  | 'TABLE'
  | 'TABLE_BODY'
  | 'TABLE_CAPTION'
  | 'TABLE_CELL'
  | 'TABLE_DIVIDER'
  | 'TABLE_FOOT'
  | 'TABLE_HEAD'
  | 'TABLE_ROW'
  | 'TABS'
  | 'TAG'
  | 'TEXT'
  | 'TEXT_AREA'
  | 'TEXT_COUNT'
  | 'TOGGLE'
  | 'TOOLTIP'
  | 'VIRTUAL_KEYBOARD';

type NonVariablesKeys<T> = {
  [K in keyof T]: K extends `$${string}` ? never : K;
}[keyof T];
export type ComponentSelected<T> = Pick<T, NonVariablesKeys<T>>;

export type ComponentsTypesComponents = {
  ACCORDION: {
    accordion: string;
    content: string;
    header: string;
    headerbutton: string;
    innercontent: string;
  };
  ALERT: {
    container: string;
    contentcontainer: string;
    description: string;
  };
  AVATAR: {
    avatar: string;
    dot: string;
    icon: string;
  };
  BADGE: {
    badge: string;
    button: string;
    dot: string;
    dotcontainer: string;
    icon: string;
    label: string;
    labelcontainer: string;
    labelicon: string;
  };
  BREADCRUMBS: {
    breadcrumbs: string;
    crumb: string;
    icondivider: string;
    icondividercontainer: string;
    lastonecrumb: string;
    link: string;
    linkcontainer: string;
  };
  BUTTON: {
    button: string;
    icon: string;
    loader: string;
    dynamic_values: (styles: { $alignText: string }) => {
      string: string;
      object: object;
    };
  };
  CALENDAR: {
    calendar: string;
    backtext: string;
    container: string;
    dayslist: string;
    headercontainer: string;
    headerrow: string;
    headerth: string;
    leftarrow: string;
    listelementempty: string;
    listelementrove: string;
    monthelement: string;
    monthlistitem: string;
    monthslist: string;
    rightarrow: string;
    selectorcontainer: string;
    selectoriconandbacktextcontainer: string;
    selectoroptionscontainer: string;
    table: string;
    tablerow: string;
    tbody: string;
    weekdaycontainer: string;
    year: string;
    yearelement: string;
    yearlistitem: string;
    yearslist: string;
    button_size: {
      icon: string;
      button: string;
      loader: string;
    };
    button_variant: {
      button: string;
      icon: string;
      loader: string;
    };
  };
  CARD: {
    card: string;
    content: string;
    footer: string;
    header: string;
  };
  CAROUSEL: {
    carousel: string;
    content: string;
    viewer: string;
  };
  CHECKBOX: {
    checkbox: string;
    checkboxwithlabelcontainer: string;
    errormessagecontainer: string;
    label: string;
    error_message: {
      icon: string;
      typography: string;
      error_message: string;
    };
  };
  CHECKBOX_BASE: {
    checkbox_base: string;
    icon: string;
    iconcontainer: string;
    input: string;
  };
  CHIP: {
    chip: string;
    closeicon: string;
    errorcontainer: string;
    erroricon: string;
    errormessage: string;
    label: string;
    lefticon: string;
    rangeicon: string;
    rangeitemseparator: string;
    rangeitemtext: string;
    rangeitemwrapper: string;
  };
  DATA_TABLE: {
    data_table: string;
    headboxshadow: string;
    leftboxshadow: string;
    leftboxshadowcontainer: string;
    rightboxshadow: string;
    rightboxshadowcontainer: string;
    scrollablecontainer: string;
    row_group_table: {
      container: string;
      headboxshadow: string;
      leftboxshadow: string;
      leftboxshadowcontainer: string;
      rightboxshadow: string;
      rightboxshadowcontainer: string;
      scrollablecontainer: string;
      table: string;
    };
    row_group_table_body: {
      table_body: string;
    };
    row_group_table_body_cell: {
      table_cell: string;
    };
    row_group_table_body_row: {
      table_row: string;
    };
    row_group_table_caption: {
      table_caption: string;
    };
    row_group_table_head: {
      table_head: string;
    };
    row_group_table_head_cell: {
      table_cell: string;
    };
    row_group_table_head_row: {
      table_row: string;
    };
    table: {
      container: string;
      headboxshadow: string;
      leftboxshadow: string;
      leftboxshadowcontainer: string;
      rightboxshadow: string;
      rightboxshadowcontainer: string;
      scrollablecontainer: string;
      table: string;
    };
    table_body: {
      table_body: string;
    };
    table_body_cell: {
      table_cell: string;
    };
    table_body_row: {
      table_row: string;
    };
    table_caption: {
      table_caption: string;
    };
    table_head: {
      table_head: string;
    };
    table_head_cell: {
      table_cell: string;
    };
    table_head_row: {
      table_row: string;
    };
  };
  DOT: {
    dot: string;
  };
  ERROR_MESSAGE: {
    error_message: string;
    icon: string;
    typography: string;
  };
  ICON: {
    button: string;
    complex: string;
    svg: string;
    dynamic_values: (styles: {
      $color: string;
      $moveAround: string;
      $transitionDuration: string;
      $height: string;
      $width: string;
    }) => { string: string; object: object };
  };
  INPUT: {
    input: string;
    inputandlabelcontainer: string;
    input_base: {
      input_base: string;
    };
    left_decoration: {
      decoration: string;
      input_decoration: string;
    };
    right_decoration: {
      decoration: string;
      input_decoration: string;
    };
  };
  INPUT_BASE: {
    input_base: string;
  };
  INPUT_DECORATION: {
    input_decoration: string;
    decoration: string;
  };
  INPUT_SIGNATURE: {
    input_signature: string;
    canvas: string;
    placeholdercontainer: string;
    placeholdertext: string;
  };
  ITEM_ROVE: {
    item_rove: string;
  };
  LINK: {
    link: string;
    childrencontainer: string;
    icon: string;
    labelandiconcontainer: string;
  };
  LINK_AS_BUTTON: {
    link_as_button: string;
  };
  LIST_OPTIONS: {
    list_options: string;
    optionscontainer: string;
    title: string;
    titlecontainer: string;
  };
  MODAL: {
    modal: string;
    closebuttoncontainer: string;
    closebuttonicon: string;
    content: string;
    dragicon: string;
    dragiconcontainer: string;
    footer: string;
    headercontainer: string;
    headercontentcontainer: string;
    title: string;
    titlecontainer: string;
    titlehiddencontainer: string;
  };
  OPTION: {
    option: string;
    checkedicon: string;
    firstrowcontainer: string;
    icon: string;
    label: string;
    labelhighlighted: string;
    labeliconcontainer: string;
    sublabel: string;
    sublabelcontainer: string;
  };
  OVERLAY: {
    overlay: string;
  };
  PAGE_CONTROL: {
    page_control: string;
    dotscontainer: string;
    icon: string;
    leftarrowcontrolcontainer: string;
    leftbuttoncontrol: string;
    pagedot: string;
    rightarrowcontrolcontainer: string;
    rightbuttoncontrol: string;
  };
  PAGINATION: {
    pagination: string;
    page: string;
    pagecontainer: string;
    pagescontainer: string;
    paginationleftarrowicon: string;
    paginationrightarrowicon: string;
  };
  POPOVER: {
    popover: string;
    arrow: string;
  };
  PROGRESS_BAR: {
    progress_bar: string;
    bar: string;
    barcontainer: string;
    progressbar: string;
  };
  RADIO_BUTTON: {
    radio_button: string;
    errormessage: string;
    errormessagecontainer: string;
    errormessageicon: string;
    errormessageiconcontainer: string;
    infocontainer: string;
    label: string;
    labelcontainer: string;
    radiobuttoncontainer: string;
    rowcontainer: string;
    speciallabel: string;
    sublabel: string;
    tooltip: {
      arrowcontainer: string;
      arrowposition: string;
      arrowsize: string;
      paragraph: string;
      paragraphcontainer: string;
      tooltipexternalcontainer: string;
      tooltipinternalcontainer: string;
      popover: {
        arrow: string;
        popover: string;
      };
      arrow: string;
      tooltipalignstyles: string;
      tooltipasmodal: string;
    };
  };
  SELECT: {
    select: string;
    buttonorlinkcontainer: string;
    iconclosed: string;
    iconopened: string;
    labelclosed: string;
    labelopened: string;
    listoptionscontainer: string;
  };
  SELECTOR_BOX_FILE: {
    selector_box_file: string;
    actionicon: string;
    actioniconandactiontextcontainer: string;
    animationcontainer: string;
    borderanimationcontainer: string;
    bottomanimationcontainer: string;
    containeractioncontainer: string;
    containerboxactiontext: string;
    containerboxcontainer: string;
    containerboxdescription: string;
    containerboxfilename: string;
    containerboxicon: string;
    containerboxtextscontainer: string;
    header: string;
    leftanimationcontainer: string;
    rightanimationcontainer: string;
    topanimationcontainer: string;
  };
  SKELETON: {
    skeleton: string;
    dynamic_values: (styles: {
      $skeletonWidth: string;
      $skeletonHeight: string;
      $skeletonBorderRadius: string;
      $skeletonDuration: string;
    }) => { string: string; object: object };
  };
  SLIDER: {
    slider: string;
    activetrack: string;
    buttonstrackscontainer: string;
    helpertext: string;
    helpertextcontainer: string;
    helpertextleftcontainer: string;
    helpertextrightcontainer: string;
    inactivetrack: string;
    innerthumbtooltip: string;
    label: string;
    labelcontainer: string;
    rightthumbicon: string;
    scalecontainer: string;
    scaleoption: string;
    thumb: string;
    thumbicon: string;
    tracksthumbscontainer: string;
    tracksthumbsinnercontainer: string;
    decrement_button_size: {
      icon: string;
      button: string;
      loader: string;
    };
    decrement_button_variant: {
      button: string;
      icon: string;
      loader: string;
    };
    tooltip: {
      arrowcontainer: string;
      arrowposition: string;
      arrowsize: string;
      paragraph: string;
      paragraphcontainer: string;
      tooltipexternalcontainer: string;
      tooltipinternalcontainer: string;
      popover: {
        arrow: string;
        popover: string;
      };
      arrow: string;
      tooltipalignstyles: string;
      tooltipasmodal: string;
    };
  };
  SNACKBAR: {
    container: string;
  };
  STEPPER_NUMBER: {
    stepper_number: string;
    iconselected: string;
    stepbar: string;
    stepcircle: string;
    stepcirclecontainer: string;
    stepcontainer: string;
    stepindex: string;
    stepname: string;
    stepnamecontainer: string;
  };
  TABLE: {
    table: string;
    container: string;
    headboxshadow: string;
    leftboxshadow: string;
    leftboxshadowcontainer: string;
    rightboxshadow: string;
    rightboxshadowcontainer: string;
    scrollablecontainer: string;
  };
  TABLE_BODY: {
    table_body: string;
  };
  TABLE_CAPTION: {
    table_caption: string;
  };
  TABLE_CELL: {
    table_cell: string;
    dynamic_values: (styles: {
      $tdWidth: string;
      $tdHeight: string;
      $tdMinWidth: string;
      $tdMaxWidth: string;
      $tdTextAlign: string;
      $tdVerticalAlign: string;
      $tdAlignItems: string;
      $tdJustifyContent: string;
      $tdTop: string;
      $tdLeft: string;
      $tdRight: string;
      $tdBottom: string;
    }) => { string: string; object: object };
  };
  TABLE_DIVIDER: {
    table_divider: string;
  };
  TABLE_FOOT: {
    table_foot: string;
  };
  TABLE_HEAD: {
    table_head: string;
  };
  TABLE_ROW: {
    table_row: string;
  };
  TABS: {
    tabs: string;
    arrowiconcontainer: string;
    container: string;
    contentcontainer: string;
    firsttabbutton: string;
    icon: string;
    label: string;
    lasttabbutton: string;
    onetabcontainer: string;
    tabbutton: string;
    tabbuttonscontainer: string;
    tabcontainer: string;
  };
  TAG: {
    tag: string;
    icon: string;
    label: string;
  };
  TEXT: {
    text: string;
    $_heading_display_1_expanded: {
      text: string;
    };
    $_heading_display_1_extended: {
      text: string;
    };
    $_heading_h1_expanded: {
      text: string;
    };
    $_heading_h1_extended: {
      text: string;
    };
    $_heading_h2_expanded: {
      text: string;
    };
    $_heading_h2_extended: {
      text: string;
    };
    $_heading_h3_expanded: {
      text: string;
    };
    $_heading_h3_extended: {
      text: string;
    };
    $_heading_h4_expanded: {
      text: string;
    };
    $_heading_h4_extended: {
      text: string;
    };
    $_main_heading_display_1_expanded: {
      text: string;
    };
    $_main_heading_h1_expanded: {
      text: string;
    };
    $_main_heading_h2_expanded: {
      text: string;
    };
    $_main_heading_h3_expanded: {
      text: string;
    };
    $_main_heading_h4_expanded: {
      text: string;
    };
  };
  TEXT_AREA: {
    text_area: string;
    bottomcontainer: string;
    counter: string;
    counterleft: string;
    counterright: string;
    errorcontainer: string;
    erroricon: string;
    errormessage: string;
    helpmessage: string;
    helpmessageerrorcontainer: string;
    label: string;
    labelandadditionalinfocontainer: string;
    labeltextareacontainer: string;
    required: string;
    textarea: string;
    title: string;
    titlecontainer: string;
  };
  TEXT_COUNT: {
    text_count: string;
    letftext: string;
    righttext: string;
  };
  TOGGLE: {
    icon: string;
    iconwrapper: string;
    thumb: string;
    track: string;
  };
  TOOLTIP: {
    arrow: string;
    arrowcontainer: string;
    arrowposition: string;
    arrowsize: string;
    paragraph: string;
    paragraphcontainer: string;
    tooltipalignstyles: string;
    tooltipasmodal: string;
    tooltipexternalcontainer: string;
    tooltipinternalcontainer: string;
    popover: {
      arrow: string;
      popover: string;
    };
  };
  VIRTUAL_KEYBOARD: {
    virtual_keyboard: string;
    digitbuttons: string;
    digittext: string;
    digitwrapper: string;
    iconcontainer: string;
    removebutton: string;
  };
};
