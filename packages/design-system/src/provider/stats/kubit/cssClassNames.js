export default {'kubit':{  ACCORDION: {
    accordion: 'accordion',
    content: 'accordion__content',
    header: 'accordion__header',
    headerbutton: 'accordion__headerbutton',
    innercontent: 'accordion__innercontent',
    $_neutral: {
      accordion: 'accordion accordion--neutral',
    },
    $_standard: {
      accordion: 'accordion accordion--standard',
    },
  },
  ALERT: {
    container: 'alert__container',
    contentcontainer: 'alert__contentcontainer',
    description: 'alert__description',
    $_error: {
      alert: 'alert--error',
      container: 'alert__container alert__container--error',
    },
    $_informative: {
      alert: 'alert--informative',
      container: 'alert__container alert__container--informative',
    },
    $_success: {
      alert: 'alert--success',
      container: 'alert__container alert__container--success',
    },
    $_warning: {
      alert: 'alert--warning',
      container: 'alert__container alert__container--warning',
    },
  },
  AVATAR: {
    avatar: 'avatar',
    dot: 'avatar__dot',
    icon: 'avatar__icon',
    $_large: {
      avatar: 'avatar avatar--large',
      icon: 'avatar__icon avatar__icon--large',
    },
    $_medium: {
      avatar: 'avatar avatar--medium',
      icon: 'avatar__icon avatar__icon--medium',
    },
    $_small: {
      avatar: 'avatar avatar--small',
      icon: 'avatar__icon avatar__icon--small',
    },
    $_extra_large: {
      avatar: 'avatar avatar--extra-large',
      icon: 'avatar__icon avatar__icon--extra-large',
    },
  },
  BADGE: {
    badge: 'badge',
    button: 'badge__button',
    dot: 'badge__dot',
    dotcontainer: 'badge__dotcontainer',
    icon: 'badge__icon',
    label: 'badge__label',
    labelcontainer: 'badge__labelcontainer',
    labelicon: 'badge__labelicon',
    $_default: {
      badge: 'badge badge--default',
      icon: 'badge__icon badge__icon--default',
    },
    $_alternative: {
      badge: 'badge badge--alternative',
      icon: 'badge__icon badge__icon--alternative',
      label: 'badge__label badge__label--alternative',
      labelicon: 'badge__labelicon badge__labelicon--alternative',
    },
    $_primary: {
      badge: 'badge badge--primary',
      icon: 'badge__icon badge__icon--primary',
      label: 'badge__label badge__label--primary',
      labelicon: 'badge__labelicon badge__labelicon--primary',
    },
  },
  BREADCRUMBS: {
    breadcrumbs: 'breadcrumbs',
    crumb: 'breadcrumbs__crumb',
    icondivider: 'breadcrumbs__icondivider',
    icondividercontainer: 'breadcrumbs__icondividercontainer',
    lastonecrumb: 'breadcrumbs__lastonecrumb',
    link: 'breadcrumbs__link',
    linkcontainer: 'breadcrumbs__linkcontainer',
    $_alternative: {
      breadcrumbs: 'breadcrumbs breadcrumbs--alternative',
      icondivider: 'breadcrumbs__icondivider breadcrumbs__icondivider--alternative',
      lastonecrumb: 'breadcrumbs__lastonecrumb breadcrumbs__lastonecrumb--alternative',
      link: 'breadcrumbs__link breadcrumbs__link--alternative',
    },
    $_default: {
      breadcrumbs: 'breadcrumbs breadcrumbs--default',
      lastonecrumb: 'breadcrumbs__lastonecrumb breadcrumbs__lastonecrumb--default',
      link: 'breadcrumbs__link breadcrumbs__link--default',
    },
  },
  BUTTON: {
    button: 'button',
    icon: 'button__icon',
    loader: 'button__loader',
    $_large: {
      button: 'button button--large',
      icon: 'button__icon button__icon--large',
    },
    $_small: {
      button: 'button button--small',
      icon: 'button__icon button__icon--small',
    },
    $_alternative: {
      button: 'button button--alternative',
    },
    $_ghost_alt: {
      button: 'button button--ghost_alt',
    },
    $_ghost_primary: {
      button: 'button button--ghost_primary',
    },
    $_ghost_secondary: {
      button: 'button button--ghost_secondary',
    },
    $_primary: {
      button: 'button button--primary',
    },
    $_secondary: {
      button: 'button button--secondary',
    },
    dynamic_values: e=>Object.entries(e).reduce((e,[t,s])=>{const r="--"+t.toLocaleLowerCase().replace("$","");return e.string+=r+": "+s+"; ",e.object[r]=s,e},{string:"",object:{}}),
  },
  CALENDAR: {
    calendar: 'calendar',
    backtext: 'calendar__backtext',
    container: 'calendar__container',
    dayslist: 'calendar__dayslist',
    headercontainer: 'calendar__headercontainer',
    headerrow: 'calendar__headerrow',
    headerth: 'calendar__headerth',
    leftarrow: 'calendar__leftarrow',
    listelementempty: 'calendar__listelementempty',
    listelementrove: 'calendar__listelementrove',
    monthelement: 'calendar__monthelement',
    monthlistitem: 'calendar__monthlistitem',
    monthslist: 'calendar__monthslist',
    rightarrow: 'calendar__rightarrow',
    selectorcontainer: 'calendar__selectorcontainer',
    selectoriconandbacktextcontainer: 'calendar__selectoriconandbacktextcontainer',
    selectoroptionscontainer: 'calendar__selectoroptionscontainer',
    table: 'calendar__table',
    tablerow: 'calendar__tablerow',
    tbody: 'calendar__tbody',
    weekdaycontainer: 'calendar__weekdaycontainer',
    year: 'calendar__year',
    yearelement: 'calendar__yearelement',
    yearlistitem: 'calendar__yearlistitem',
    yearslist: 'calendar__yearslist',
    button_size: {
      icon: 'button__icon button__icon--large',
      button: 'button button--large',
      loader: 'button__loader',
    },
    button_variant: {
      button: 'button button--ghost_primary',
      icon: 'button__icon',
      loader: 'button__loader',
    },
  },
  CARD: {
    card: 'card',
    content: 'card__content',
    footer: 'card__footer',
    header: 'card__header',
    $_default: {
      card: 'card card--default',
      content: 'card__content card__content--default',
      footer: 'card__footer card__footer--default',
      header: 'card__header card__header--default',
    },
  },
  CAROUSEL: {
    carousel: 'carousel',
    content: 'carousel__content',
    viewer: 'carousel__viewer',
    $_default: {
      carousel: 'carousel carousel--default',
    },
  },
  CHECKBOX: {
    checkbox: 'checkbox',
    checkboxwithlabelcontainer: 'checkbox__checkboxwithlabelcontainer',
    errormessagecontainer: 'checkbox__errormessagecontainer',
    label: 'checkbox__label',
    error_message: {
      icon: 'error_message__icon',
      typography: 'error_message__typography',
      error_message: 'error_message',
    },
  },
  CHECKBOX_BASE: {
    checkbox_base: 'checkbox_base',
    icon: 'checkbox_base__icon',
    iconcontainer: 'checkbox_base__iconcontainer',
    input: 'checkbox_base__input',
    $_default: {
      checkbox_base: 'checkbox_base checkbox_base--default',
    },
  },
  CHIP: {
    chip: 'chip',
    closeicon: 'chip__closeicon',
    errorcontainer: 'chip__errorcontainer',
    erroricon: 'chip__erroricon',
    errormessage: 'chip__errormessage',
    label: 'chip__label',
    lefticon: 'chip__lefticon',
    rangeicon: 'chip__rangeicon',
    rangeitemseparator: 'chip__rangeitemseparator',
    rangeitemtext: 'chip__rangeitemtext',
    rangeitemwrapper: 'chip__rangeitemwrapper',
    $_default: {
      chip: 'chip chip--default',
      closeicon: 'chip__closeicon chip__closeicon--default',
      errorcontainer: 'chip__errorcontainer chip__errorcontainer--default',
      erroricon: 'chip__erroricon chip__erroricon--default',
      errormessage: 'chip__errormessage chip__errormessage--default',
      label: 'chip__label chip__label--default',
      lefticon: 'chip__lefticon chip__lefticon--default',
      rangeitemseparator: 'chip__rangeitemseparator chip__rangeitemseparator--default',
      rangeitemtext: 'chip__rangeitemtext chip__rangeitemtext--default',
    },
  },
  DATA_TABLE: {
    data_table: 'data_table',
    headboxshadow: 'data_table__headboxshadow',
    leftboxshadow: 'data_table__leftboxshadow',
    leftboxshadowcontainer: 'data_table__leftboxshadowcontainer',
    rightboxshadow: 'data_table__rightboxshadow',
    rightboxshadowcontainer: 'data_table__rightboxshadowcontainer',
    scrollablecontainer: 'data_table__scrollablecontainer',
    $_default: {
      data_table: 'data_table data_table--default',
    },
    row_group_table: {
      container: 'table__container',
      headboxshadow: 'table__headboxshadow',
      leftboxshadow: 'table__leftboxshadow',
      leftboxshadowcontainer: 'table__leftboxshadowcontainer',
      rightboxshadow: 'table__rightboxshadow',
      rightboxshadowcontainer: 'table__rightboxshadowcontainer',
      scrollablecontainer: 'table__scrollablecontainer',
      table: 'table',
    },
    row_group_table_body: {
      table_body: 'table_body',
    },
    row_group_table_body_cell: {
      table_cell: 'table_cell table_cell--body_cell_default',
    },
    row_group_table_body_row: {
      table_row: 'table_row table_row--body_row_default',
    },
    row_group_table_caption: {
      table_caption: 'table_caption',
    },
    row_group_table_head: {
      table_head: 'table_head',
    },
    row_group_table_head_cell: {
      table_cell: 'table_cell table_cell--header_cell_default',
    },
    row_group_table_head_row: {
      table_row: 'table_row',
    },
    table: {
      container: 'table__container',
      headboxshadow: 'table__headboxshadow',
      leftboxshadow: 'table__leftboxshadow',
      leftboxshadowcontainer: 'table__leftboxshadowcontainer',
      rightboxshadow: 'table__rightboxshadow',
      rightboxshadowcontainer: 'table__rightboxshadowcontainer',
      scrollablecontainer: 'table__scrollablecontainer',
      table: 'table',
    },
    table_body: {
      table_body: 'table_body',
    },
    table_body_cell: {
      table_cell: 'table_cell table_cell--body_cell_default',
    },
    table_body_row: {
      table_row: 'table_row table_row--body_row_default',
    },
    table_caption: {
      table_caption: 'table_caption',
    },
    table_head: {
      table_head: 'table_head',
    },
    table_head_cell: {
      table_cell: 'table_cell table_cell--header_cell_default',
    },
    table_head_row: {
      table_row: 'table_row',
    },
  },
  DOT: {
    dot: 'dot',
    $_big: {
      dot: 'dot dot--big',
    },
    $_medium: {
      dot: 'dot dot--medium',
    },
    $_small: {
      dot: 'dot dot--small',
    },
    $_alternative: {
      dot: 'dot dot--alternative',
    },
    $_with_border: {
      dot: 'dot dot--with_border',
    },
    $_without_border: {
      dot: 'dot dot--without_border',
    },
  },
  ERROR_MESSAGE: {
    error_message: 'error_message',
    icon: 'error_message__icon',
    typography: 'error_message__typography',
    $_default: {
      error_message: 'error_message error_message--default',
    },
  },
  ICON: {
    button: 'icon__button',
    complex: 'icon__complex',
    svg: 'icon__svg',
    dynamic_values: e=>Object.entries(e).reduce((e,[t,s])=>{const r="--"+t.toLocaleLowerCase().replace("$","");return e.string+=r+": "+s+"; ",e.object[r]=s,e},{string:"",object:{}}),
  },
  INPUT: {
    input: 'input',
    inputandlabelcontainer: 'input__inputandlabelcontainer',
    $_filled: {
      input: 'input input--filled',
    },
    $_outlined: {
      input: 'input input--outlined',
    },
    $_standard: {
      input: 'input input--standard',
    },
    input_base: {
      input_base: 'input_base',
    },
    left_decoration: {
      decoration: 'input_decoration__decoration',
      input_decoration: 'input_decoration',
    },
    right_decoration: {
      decoration: 'input_decoration__decoration',
      input_decoration: 'input_decoration',
    },
  },
  INPUT_BASE: {
    input_base: 'input_base',
    $_filled: {
      input_base: 'input_base input_base--filled',
    },
    $_outlined: {
      input_base: 'input_base input_base--outlined',
    },
    $_standard: {
      input_base: 'input_base input_base--standard',
    },
  },
  INPUT_DECORATION: {
    input_decoration: 'input_decoration',
    decoration: 'input_decoration__decoration',
    $_standard: {
      input_decoration: 'input_decoration input_decoration--standard',
    },
  },
  INPUT_SIGNATURE: {
    input_signature: 'input_signature',
    canvas: 'input_signature__canvas',
    placeholdercontainer: 'input_signature__placeholdercontainer',
    placeholdertext: 'input_signature__placeholdertext',
    $_default: {
      input_signature: 'input_signature input_signature--default',
    },
  },
  ITEM_ROVE: {
    item_rove: 'item_rove',
  },
  LINK: {
    link: 'link',
    childrencontainer: 'link__childrencontainer',
    icon: 'link__icon',
    labelandiconcontainer: 'link__labelandiconcontainer',
    $_inline_primary: {
      link: 'link link--inline_primary',
      icon: 'link__icon link__icon--inline_primary',
    },
    $_inline_secondary: {
      link: 'link link--inline_secondary',
      icon: 'link__icon link__icon--inline_secondary',
    },
    $_inline_secondary_alt: {
      link: 'link link--inline_secondary_alt',
      icon: 'link__icon link__icon--inline_secondary_alt',
    },
    $_navigation_primary: {
      link: 'link link--navigation_primary',
      icon: 'link__icon link__icon--navigation_primary',
    },
    $_navigation_secondary: {
      link: 'link link--navigation_secondary',
      icon: 'link__icon link__icon--navigation_secondary',
    },
    $_navigation_secondary_alt: {
      link: 'link link--navigation_secondary_alt',
      icon: 'link__icon link__icon--navigation_secondary_alt',
    },
  },
  LINK_AS_BUTTON: {
    link_as_button: 'link_as_button',
  },
  LIST_OPTIONS: {
    list_options: 'list_options',
    optionscontainer: 'list_options__optionscontainer',
    title: 'list_options__title',
    titlecontainer: 'list_options__titlecontainer',
    $_default: {
      list_options: 'list_options list_options--default',
      title: 'list_options__title list_options__title--default',
      titlecontainer: 'list_options__titlecontainer list_options__titlecontainer--default',
    },
  },
  MODAL: {
    modal: 'modal',
    closebuttoncontainer: 'modal__closebuttoncontainer',
    closebuttonicon: 'modal__closebuttonicon',
    content: 'modal__content',
    dragicon: 'modal__dragicon',
    dragiconcontainer: 'modal__dragiconcontainer',
    footer: 'modal__footer',
    headercontainer: 'modal__headercontainer',
    headercontentcontainer: 'modal__headercontentcontainer',
    title: 'modal__title',
    titlecontainer: 'modal__titlecontainer',
    titlehiddencontainer: 'modal__titlehiddencontainer',
    $_default: {
      modal: 'modal modal--default',
    },
  },
  OPTION: {
    option: 'option',
    checkedicon: 'option__checkedicon',
    firstrowcontainer: 'option__firstrowcontainer',
    icon: 'option__icon',
    label: 'option__label',
    labelhighlighted: 'option__labelhighlighted',
    labeliconcontainer: 'option__labeliconcontainer',
    sublabel: 'option__sublabel',
    sublabelcontainer: 'option__sublabelcontainer',
    $_default: {
      option: 'option option--default',
      icon: 'option__icon option__icon--default',
      label: 'option__label option__label--default',
      labeliconcontainer: 'option__labeliconcontainer option__labeliconcontainer--default',
    },
  },
  OVERLAY: {
    overlay: 'overlay',
    $_default: {
      overlay: 'overlay overlay--default',
    },
    $_secondary: {
      overlay: 'overlay overlay--secondary',
    },
  },
  PAGE_CONTROL: {
    page_control: 'page_control',
    dotscontainer: 'page_control__dotscontainer',
    icon: 'page_control__icon',
    leftarrowcontrolcontainer: 'page_control__leftarrowcontrolcontainer',
    leftbuttoncontrol: 'page_control__leftbuttoncontrol',
    pagedot: 'page_control__pagedot',
    rightarrowcontrolcontainer: 'page_control__rightarrowcontrolcontainer',
    rightbuttoncontrol: 'page_control__rightbuttoncontrol',
    $_default: {
      page_control: 'page_control page_control--default',
      icon: 'page_control__icon page_control__icon--default',
    },
    $_bullets: {
      page_control: 'page_control page_control--bullets',
      dotscontainer: 'page_control__dotscontainer page_control__dotscontainer--bullets',
      pagedot: 'page_control__pagedot page_control__pagedot--bullets',
    },
  },
  PAGINATION: {
    pagination: 'pagination',
    page: 'pagination__page',
    pagecontainer: 'pagination__pagecontainer',
    pagescontainer: 'pagination__pagescontainer',
    paginationleftarrowicon: 'pagination__paginationleftarrowicon',
    paginationrightarrowicon: 'pagination__paginationrightarrowicon',
    $_default: {
      pagination: 'pagination pagination--default',
      page: 'pagination__page pagination__page--default',
      paginationleftarrowicon: 'pagination__paginationleftarrowicon pagination__paginationleftarrowicon--default',
      paginationrightarrowicon: 'pagination__paginationrightarrowicon pagination__paginationrightarrowicon--default',
    },
  },
  POPOVER: {
    popover: 'popover',
    arrow: 'popover__arrow',
  },
  PROGRESS_BAR: {
    progress_bar: 'progress_bar',
    bar: 'progress_bar__bar',
    barcontainer: 'progress_bar__barcontainer',
    progressbar: 'progress_bar__progressbar',
    $_medium: {
      progress_bar: 'progress_bar progress_bar--medium',
      bar: 'progress_bar__bar progress_bar__bar--medium',
      progressbar: 'progress_bar__progressbar progress_bar__progressbar--medium',
    },
    $_small: {
      progress_bar: 'progress_bar progress_bar--small',
      bar: 'progress_bar__bar progress_bar__bar--small',
      progressbar: 'progress_bar__progressbar progress_bar__progressbar--small',
    },
    $_default: {
      progress_bar: 'progress_bar progress_bar--default',
    },
  },
  RADIO_BUTTON: {
    radio_button: 'radio_button',
    errormessage: 'radio_button__errormessage',
    errormessagecontainer: 'radio_button__errormessagecontainer',
    errormessageicon: 'radio_button__errormessageicon',
    errormessageiconcontainer: 'radio_button__errormessageiconcontainer',
    infocontainer: 'radio_button__infocontainer',
    label: 'radio_button__label',
    labelcontainer: 'radio_button__labelcontainer',
    radiobuttoncontainer: 'radio_button__radiobuttoncontainer',
    rowcontainer: 'radio_button__rowcontainer',
    speciallabel: 'radio_button__speciallabel',
    sublabel: 'radio_button__sublabel',
    $_default: {
      radio_button: 'radio_button radio_button--default',
      errormessage: 'radio_button__errormessage radio_button__errormessage--default',
      sublabel: 'radio_button__sublabel radio_button__sublabel--default',
    },
    tooltip: {
      arrowcontainer: 'tooltip__arrowcontainer tooltip__arrowcontainer--default',
      arrowposition: 'tooltip__arrowposition tooltip__arrowposition--default',
      arrowsize: 'tooltip__arrowsize tooltip__arrowsize--default',
      paragraph: 'tooltip__paragraph tooltip__paragraph--default',
      paragraphcontainer: 'tooltip__paragraphcontainer tooltip__paragraphcontainer--default',
      tooltipexternalcontainer: 'tooltip__tooltipexternalcontainer tooltip__tooltipexternalcontainer--default',
      tooltipinternalcontainer: 'tooltip__tooltipinternalcontainer tooltip__tooltipinternalcontainer--default',
      popover: {
        arrow: 'popover__arrow',
        popover: 'popover',
      },
      arrow: 'tooltip__arrow',
      tooltipalignstyles: 'tooltip__tooltipalignstyles',
      tooltipasmodal: 'tooltip__tooltipasmodal',
    },
  },
  SELECT: {
    select: 'select',
    buttonorlinkcontainer: 'select__buttonorlinkcontainer',
    iconclosed: 'select__iconclosed',
    iconopened: 'select__iconopened',
    labelclosed: 'select__labelclosed',
    labelopened: 'select__labelopened',
    listoptionscontainer: 'select__listoptionscontainer',
    $_default: {
      select: 'select select--default',
      buttonorlinkcontainer: 'select__buttonorlinkcontainer select__buttonorlinkcontainer--default',
      iconclosed: 'select__iconclosed select__iconclosed--default',
      iconopened: 'select__iconopened select__iconopened--default',
      labelclosed: 'select__labelclosed select__labelclosed--default',
      labelopened: 'select__labelopened select__labelopened--default',
      listoptionscontainer: 'select__listoptionscontainer select__listoptionscontainer--default',
    },
    $_side_menu: {
      select: 'select select--side_menu',
      buttonorlinkcontainer: 'select__buttonorlinkcontainer select__buttonorlinkcontainer--side_menu',
      iconclosed: 'select__iconclosed select__iconclosed--side_menu',
      iconopened: 'select__iconopened select__iconopened--side_menu',
      labelclosed: 'select__labelclosed select__labelclosed--side_menu',
      labelopened: 'select__labelopened select__labelopened--side_menu',
      listoptionscontainer: 'select__listoptionscontainer select__listoptionscontainer--side_menu',
    },
    $_topbar: {
      select: 'select select--topbar',
      buttonorlinkcontainer: 'select__buttonorlinkcontainer select__buttonorlinkcontainer--topbar',
      iconclosed: 'select__iconclosed select__iconclosed--topbar',
      iconopened: 'select__iconopened select__iconopened--topbar',
      labelclosed: 'select__labelclosed select__labelclosed--topbar',
      labelopened: 'select__labelopened select__labelopened--topbar',
      listoptionscontainer: 'select__listoptionscontainer select__listoptionscontainer--topbar',
    },
    $_topbar_tab: {
      select: 'select select--topbar_tab',
      buttonorlinkcontainer: 'select__buttonorlinkcontainer select__buttonorlinkcontainer--topbar_tab',
      iconclosed: 'select__iconclosed select__iconclosed--topbar_tab',
      iconopened: 'select__iconopened select__iconopened--topbar_tab',
      labelclosed: 'select__labelclosed select__labelclosed--topbar_tab',
      labelopened: 'select__labelopened select__labelopened--topbar_tab',
      listoptionscontainer: 'select__listoptionscontainer select__listoptionscontainer--topbar_tab',
    },
  },
  SELECTOR_BOX_FILE: {
    selector_box_file: 'selector_box_file',
    actionicon: 'selector_box_file__actionicon',
    actioniconandactiontextcontainer: 'selector_box_file__actioniconandactiontextcontainer',
    animationcontainer: 'selector_box_file__animationcontainer',
    borderanimationcontainer: 'selector_box_file__borderanimationcontainer',
    bottomanimationcontainer: 'selector_box_file__bottomanimationcontainer',
    containeractioncontainer: 'selector_box_file__containeractioncontainer',
    containerboxactiontext: 'selector_box_file__containerboxactiontext',
    containerboxcontainer: 'selector_box_file__containerboxcontainer',
    containerboxdescription: 'selector_box_file__containerboxdescription',
    containerboxfilename: 'selector_box_file__containerboxfilename',
    containerboxicon: 'selector_box_file__containerboxicon',
    containerboxtextscontainer: 'selector_box_file__containerboxtextscontainer',
    header: 'selector_box_file__header',
    leftanimationcontainer: 'selector_box_file__leftanimationcontainer',
    rightanimationcontainer: 'selector_box_file__rightanimationcontainer',
    topanimationcontainer: 'selector_box_file__topanimationcontainer',
    $_default: {
      selector_box_file: 'selector_box_file selector_box_file--default',
    },
  },
  SKELETON: {
    skeleton: 'skeleton',
    $_circle: {
      skeleton: 'skeleton skeleton--circle',
    },
    $_square: {
      skeleton: 'skeleton skeleton--square',
    },
    $_alternative: {
      skeleton: 'skeleton skeleton--alternative',
    },
    $_default: {
      skeleton: 'skeleton skeleton--default',
    },
    dynamic_values: e=>Object.entries(e).reduce((e,[t,s])=>{const r="--"+t.toLocaleLowerCase().replace("$","");return e.string+=r+": "+s+"; ",e.object[r]=s,e},{string:"",object:{}}),
  },
  SLIDER: {
    slider: 'slider',
    activetrack: 'slider__activetrack',
    buttonstrackscontainer: 'slider__buttonstrackscontainer',
    helpertext: 'slider__helpertext',
    helpertextcontainer: 'slider__helpertextcontainer',
    helpertextleftcontainer: 'slider__helpertextleftcontainer',
    helpertextrightcontainer: 'slider__helpertextrightcontainer',
    inactivetrack: 'slider__inactivetrack',
    innerthumbtooltip: 'slider__innerthumbtooltip',
    label: 'slider__label',
    labelcontainer: 'slider__labelcontainer',
    rightthumbicon: 'slider__rightthumbicon',
    scalecontainer: 'slider__scalecontainer',
    scaleoption: 'slider__scaleoption',
    thumb: 'slider__thumb',
    thumbicon: 'slider__thumbicon',
    tracksthumbscontainer: 'slider__tracksthumbscontainer',
    tracksthumbsinnercontainer: 'slider__tracksthumbsinnercontainer',
    $_primary: {
      slider: 'slider slider--primary',
      activetrack: 'slider__activetrack slider__activetrack--primary',
      inactivetrack: 'slider__inactivetrack slider__inactivetrack--primary',
      thumb: 'slider__thumb slider__thumb--primary',
    },
    $_test_no_thumb_exceeds_track: {
      slider: 'slider slider--test_no_thumb_exceeds_track',
    },
    decrement_button_size: {
      icon: 'button__icon button__icon--small',
      button: 'button button--small',
      loader: 'button__loader',
    },
    decrement_button_variant: {
      button: 'button button--primary',
      icon: 'button__icon',
      loader: 'button__loader',
    },
    tooltip: {
      arrowcontainer: 'tooltip__arrowcontainer tooltip__arrowcontainer--default',
      arrowposition: 'tooltip__arrowposition tooltip__arrowposition--default',
      arrowsize: 'tooltip__arrowsize tooltip__arrowsize--default',
      paragraph: 'tooltip__paragraph tooltip__paragraph--default',
      paragraphcontainer: 'tooltip__paragraphcontainer tooltip__paragraphcontainer--default',
      tooltipexternalcontainer: 'tooltip__tooltipexternalcontainer tooltip__tooltipexternalcontainer--default',
      tooltipinternalcontainer: 'tooltip__tooltipinternalcontainer tooltip__tooltipinternalcontainer--default',
      popover: {
        arrow: 'popover__arrow',
        popover: 'popover',
      },
      arrow: 'tooltip__arrow',
      tooltipalignstyles: 'tooltip__tooltipalignstyles',
      tooltipasmodal: 'tooltip__tooltipasmodal',
    },
  },
  SNACKBAR: {
    $_error: {
      snackbar: 'snackbar--error',
      container: 'snackbar__container snackbar__container--error',
    },
    $_container: {
      snackbar: 'snackbar--container',
    },
    container: 'snackbar__container',
    $_primary: {
      snackbar: 'snackbar--primary',
      container: 'snackbar__container snackbar__container--primary',
    },
    $_success: {
      snackbar: 'snackbar--success',
      container: 'snackbar__container snackbar__container--success',
    },
    $_warning: {
      snackbar: 'snackbar--warning',
      container: 'snackbar__container snackbar__container--warning',
    },
  },
  STEPPER_NUMBER: {
    stepper_number: 'stepper_number',
    iconselected: 'stepper_number__iconselected',
    stepbar: 'stepper_number__stepbar',
    stepcircle: 'stepper_number__stepcircle',
    stepcirclecontainer: 'stepper_number__stepcirclecontainer',
    stepcontainer: 'stepper_number__stepcontainer',
    stepindex: 'stepper_number__stepindex',
    stepname: 'stepper_number__stepname',
    stepnamecontainer: 'stepper_number__stepnamecontainer',
    $_horizontal: {
      stepper_number: 'stepper_number stepper_number--horizontal',
      stepindex: 'stepper_number__stepindex stepper_number__stepindex--horizontal',
    },
    $_default: {
      stepper_number: 'stepper_number stepper_number--default',
      iconselected: 'stepper_number__iconselected stepper_number__iconselected--default',
      stepbar: 'stepper_number__stepbar stepper_number__stepbar--default',
      stepcircle: 'stepper_number__stepcircle stepper_number__stepcircle--default',
      stepindex: 'stepper_number__stepindex stepper_number__stepindex--default',
    },
    $_vertical: {
      stepper_number: 'stepper_number stepper_number--vertical',
      stepcontainer: 'stepper_number__stepcontainer stepper_number__stepcontainer--vertical',
      stepname: 'stepper_number__stepname stepper_number__stepname--vertical',
      stepnamecontainer: 'stepper_number__stepnamecontainer stepper_number__stepnamecontainer--vertical',
    },
  },
  TABLE: {
    table: 'table',
    container: 'table__container',
    headboxshadow: 'table__headboxshadow',
    leftboxshadow: 'table__leftboxshadow',
    leftboxshadowcontainer: 'table__leftboxshadowcontainer',
    rightboxshadow: 'table__rightboxshadow',
    rightboxshadowcontainer: 'table__rightboxshadowcontainer',
    scrollablecontainer: 'table__scrollablecontainer',
    $_default: {
      table: 'table table--default',
    },
  },
  TABLE_BODY: {
    table_body: 'table_body',
    $_default: {
      table_body: 'table_body table_body--default',
    },
  },
  TABLE_CAPTION: {
    table_caption: 'table_caption',
    $_default: {
      table_caption: 'table_caption table_caption--default',
    },
  },
  TABLE_CELL: {
    table_cell: 'table_cell',
    $_body_cell_default: {
      table_cell: 'table_cell table_cell--body_cell_default',
    },
    $_header_cell_default: {
      table_cell: 'table_cell table_cell--header_cell_default',
    },
    $_header_cell_secondary: {
      table_cell: 'table_cell table_cell--header_cell_secondary',
    },
    dynamic_values: e=>Object.entries(e).reduce((e,[t,s])=>{const r="--"+t.toLocaleLowerCase().replace("$","");return e.string+=r+": "+s+"; ",e.object[r]=s,e},{string:"",object:{}}),
  },
  TABLE_DIVIDER: {
    table_divider: 'table_divider',
    $_default: {
      table_divider: 'table_divider table_divider--default',
    },
  },
  TABLE_FOOT: {
    table_foot: 'table_foot',
    $_default: {
      table_foot: 'table_foot table_foot--default',
    },
  },
  TABLE_HEAD: {
    table_head: 'table_head',
    $_default: {
      table_head: 'table_head table_head--default',
    },
  },
  TABLE_ROW: {
    table_row: 'table_row',
    $_body_row_default: {
      table_row: 'table_row table_row--body_row_default',
    },
    $_header_row_default: {
      table_row: 'table_row table_row--header_row_default',
    },
    $_header_row_secondary: {
      table_row: 'table_row table_row--header_row_secondary',
    },
  },
  TABS: {
    tabs: 'tabs',
    arrowiconcontainer: 'tabs__arrowiconcontainer',
    container: 'tabs__container',
    contentcontainer: 'tabs__contentcontainer',
    firsttabbutton: 'tabs__firsttabbutton',
    icon: 'tabs__icon',
    label: 'tabs__label',
    lasttabbutton: 'tabs__lasttabbutton',
    onetabcontainer: 'tabs__onetabcontainer',
    tabbutton: 'tabs__tabbutton',
    tabbuttonscontainer: 'tabs__tabbuttonscontainer',
    tabcontainer: 'tabs__tabcontainer',
    $_default: {
      tabs: 'tabs tabs--default',
    },
  },
  TAG: {
    tag: 'tag',
    icon: 'tag__icon',
    label: 'tag__label',
    $_code: {
      tag: 'tag tag--code',
      label: 'tag__label tag__label--code',
    },
    $_deprecated: {
      tag: 'tag tag--deprecated',
    },
    $_dormant: {
      tag: 'tag tag--dormant',
    },
    $_healthy: {
      tag: 'tag tag--healthy',
    },
    $_informative: {
      tag: 'tag tag--informative',
    },
    $_issue: {
      tag: 'tag tag--issue',
    },
  },
  TEXT: {
    text: 'text',
    $_default: {
      text: 'text text--default',
    },
    $_heading_display_1_expanded: {
      text: 'text text--heading_display_1_expanded',
    },
    $_heading_display_1_extended: {
      text: 'text text--heading_display_1_extended',
    },
    $_heading_h1_expanded: {
      text: 'text text--heading_h1_expanded',
    },
    $_heading_h1_extended: {
      text: 'text text--heading_h1_extended',
    },
    $_heading_h2_expanded: {
      text: 'text text--heading_h2_expanded',
    },
    $_heading_h2_extended: {
      text: 'text text--heading_h2_extended',
    },
    $_heading_h3_expanded: {
      text: 'text text--heading_h3_expanded',
    },
    $_heading_h3_extended: {
      text: 'text text--heading_h3_extended',
    },
    $_heading_h4_expanded: {
      text: 'text text--heading_h4_expanded',
    },
    $_heading_h4_extended: {
      text: 'text text--heading_h4_extended',
    },
    $_main_heading_display_1_expanded: {
      text: 'text text--main_heading_display_1_expanded',
    },
    $_main_heading_h1_expanded: {
      text: 'text text--main_heading_h1_expanded',
    },
    $_main_heading_h2_expanded: {
      text: 'text text--main_heading_h2_expanded',
    },
    $_main_heading_h3_expanded: {
      text: 'text text--main_heading_h3_expanded',
    },
    $_main_heading_h4_expanded: {
      text: 'text text--main_heading_h4_expanded',
    },
    $_paragraph_caption_expanded: {
      text: 'text text--paragraph_caption_expanded',
    },
    $_paragraph_caption_extended: {
      text: 'text text--paragraph_caption_extended',
    },
    $_paragraph_large_expanded: {
      text: 'text text--paragraph_large_expanded',
    },
    $_paragraph_large_extended: {
      text: 'text text--paragraph_large_extended',
    },
    $_paragraph_medium_expanded: {
      text: 'text text--paragraph_medium_expanded',
    },
    $_paragraph_medium_extended: {
      text: 'text text--paragraph_medium_extended',
    },
    $_paragraph_medium_mono: {
      text: 'text text--paragraph_medium_mono',
    },
    $_paragraph_small_expanded: {
      text: 'text text--paragraph_small_expanded',
    },
    $_paragraph_small_extended: {
      text: 'text text--paragraph_small_extended',
    },
  },
  TEXT_AREA: {
    text_area: 'text_area',
    bottomcontainer: 'text_area__bottomcontainer',
    counter: 'text_area__counter',
    counterleft: 'text_area__counterleft',
    counterright: 'text_area__counterright',
    errorcontainer: 'text_area__errorcontainer',
    erroricon: 'text_area__erroricon',
    errormessage: 'text_area__errormessage',
    helpmessage: 'text_area__helpmessage',
    helpmessageerrorcontainer: 'text_area__helpmessageerrorcontainer',
    label: 'text_area__label',
    labelandadditionalinfocontainer: 'text_area__labelandadditionalinfocontainer',
    labeltextareacontainer: 'text_area__labeltextareacontainer',
    required: 'text_area__required',
    textarea: 'text_area__textarea',
    title: 'text_area__title',
    titlecontainer: 'text_area__titlecontainer',
    $_default: {
      text_area: 'text_area text_area--default',
    },
  },
  TEXT_COUNT: {
    text_count: 'text_count',
    letftext: 'text_count__letftext',
    righttext: 'text_count__righttext',
    $_default: {
      text_count: 'text_count text_count--default',
      letftext: 'text_count__letftext text_count__letftext--default',
      righttext: 'text_count__righttext text_count__righttext--default',
    },
  },
  TOGGLE: {
    icon: 'toggle__icon',
    iconwrapper: 'toggle__iconwrapper',
    thumb: 'toggle__thumb',
    track: 'toggle__track',
    $_regular: {
      toggle: 'toggle--regular',
      track: 'toggle__track toggle__track--regular',
    },
  },
  TOOLTIP: {
    arrow: 'tooltip__arrow',
    arrowcontainer: 'tooltip__arrowcontainer',
    arrowposition: 'tooltip__arrowposition',
    arrowsize: 'tooltip__arrowsize',
    paragraph: 'tooltip__paragraph',
    paragraphcontainer: 'tooltip__paragraphcontainer',
    tooltipalignstyles: 'tooltip__tooltipalignstyles',
    tooltipasmodal: 'tooltip__tooltipasmodal',
    tooltipexternalcontainer: 'tooltip__tooltipexternalcontainer',
    tooltipinternalcontainer: 'tooltip__tooltipinternalcontainer',
    $_default: {
      tooltip: 'tooltip--default',
      arrowcontainer: 'tooltip__arrowcontainer tooltip__arrowcontainer--default',
      arrowposition: 'tooltip__arrowposition tooltip__arrowposition--default',
      arrowsize: 'tooltip__arrowsize tooltip__arrowsize--default',
      paragraph: 'tooltip__paragraph tooltip__paragraph--default',
      paragraphcontainer: 'tooltip__paragraphcontainer tooltip__paragraphcontainer--default',
      tooltipexternalcontainer: 'tooltip__tooltipexternalcontainer tooltip__tooltipexternalcontainer--default',
      tooltipinternalcontainer: 'tooltip__tooltipinternalcontainer tooltip__tooltipinternalcontainer--default',
    },
    popover: {
      arrow: 'popover__arrow',
      popover: 'popover',
    },
  },
  VIRTUAL_KEYBOARD: {
    virtual_keyboard: 'virtual_keyboard',
    digitbuttons: 'virtual_keyboard__digitbuttons',
    digittext: 'virtual_keyboard__digittext',
    digitwrapper: 'virtual_keyboard__digitwrapper',
    iconcontainer: 'virtual_keyboard__iconcontainer',
    removebutton: 'virtual_keyboard__removebutton',
    $_default: {
      virtual_keyboard: 'virtual_keyboard virtual_keyboard--default',
      digitbuttons: 'virtual_keyboard__digitbuttons virtual_keyboard__digitbuttons--default',
      digittext: 'virtual_keyboard__digittext virtual_keyboard__digittext--default',
    },
  },
}}