import { cssVars } from '../css/cssVars';

// Helper function to convert cssVar key to class name
// Example: spacings_spacing_300 -> 300
const getClassName = (key: string, prefix: string): string => {
  return key.replace(prefix, '').replace(/_/g, '-');
};

// Extract spacings from cssVars
const SPACINGS = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('spacings_spacing_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract sizes from cssVars
const SIZES = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('sizes_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract colors from cssVars
const COLORS = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('colors_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract borders from cssVars
const BORDERS = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('borders_border_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract radius from cssVars
const RADIUS = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('radius_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract shadows from cssVars
const SHADOW = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('shadow_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract font sizes from cssVars
const FONT_SIZE = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('font_size_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract line heights from cssVars
const LINE_HEIGHT = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('line_height_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract font weights from cssVars
const FONT_WEIGHT = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('font_weight_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract text align from cssVars
const TEXT_ALIGN = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('text_align_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Extract z-index from cssVars
const Z_INDEX = Object.entries(cssVars)
  .filter(([key]) => key.startsWith('z_index_'))
  .reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

// Font families (not in cssVars, using hardcoded values)
const FONT_FAMILY = {
  font_family_digit_password_large_square:
    '"DigitPasswordLargeSquare", sans-serif',
  font_family_digit_password_small_square:
    '"DigitPasswordSmallSquare", sans-serif',
  font_family_gt_america_expanded: '"GT-America-Expanded Font", sans-serif',
  font_family_gt_america_extended: '"GT-America-Extended Font", sans-serif',
  font_family_nunito_sans: '"Nunito Sans"',
  font_family_roboto_condensed: '"Roboto-Mono", sans-serif',
};

export const UTILITY_CLASSES = [
  // ==================== SPACING UTILITIES ====================

  // PADDING - All sides
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { padding: value },
    targets: `.padding-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // PADDING - Top
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { padding_top: value },
    targets: `.padding-top-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // PADDING - Right
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { padding_right: value },
    targets: `.padding-right-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // PADDING - Bottom
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { padding_bottom: value },
    targets: `.padding-bottom-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // PADDING - Left
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { padding_left: value },
    targets: `.padding-left-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // PADDING - Horizontal (left + right)
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: {
      padding_left: value,
      padding_right: value,
    },
    targets: `.padding-x-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // PADDING - Vertical (top + bottom)
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: {
      padding_bottom: value,
      padding_top: value,
    },
    targets: `.padding-y-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // MARGIN - All sides
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { margin: value },
    targets: `.margin-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // MARGIN - Top
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { margin_top: value },
    targets: `.margin-top-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // MARGIN - Right
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { margin_right: value },
    targets: `.margin-right-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // MARGIN - Bottom
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { margin_bottom: value },
    targets: `.margin-bottom-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // MARGIN - Left
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { margin_left: value },
    targets: `.margin-left-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // MARGIN - Horizontal (left + right)
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: {
      margin_left: value,
      margin_right: value,
    },
    targets: `.margin-x-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // MARGIN - Vertical (top + bottom)
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: {
      margin_bottom: value,
      margin_top: value,
    },
    targets: `.margin-y-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // GAP
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { gap: value },
    targets: `.gap-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // ROW GAP
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { row_gap: value },
    targets: `.row-gap-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // COLUMN GAP
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { column_gap: value },
    targets: `.column-gap-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // ==================== SIZE UTILITIES ====================

  // WIDTH
  ...Object.entries(SIZES).map(([key, value]) => ({
    styles: { width: value },
    targets: `.width-${getClassName(key, 'sizes_')}`,
  })),

  // MIN WIDTH
  ...Object.entries(SIZES).map(([key, value]) => ({
    styles: { min_width: value },
    targets: `.min-width-${getClassName(key, 'sizes_')}`,
  })),

  // MAX WIDTH
  ...Object.entries(SIZES).map(([key, value]) => ({
    styles: { max_width: value },
    targets: `.max-width-${getClassName(key, 'sizes_')}`,
  })),

  // HEIGHT
  ...Object.entries(SIZES).map(([key, value]) => ({
    styles: { height: value },
    targets: `.height-${getClassName(key, 'sizes_')}`,
  })),

  // MIN HEIGHT
  ...Object.entries(SIZES).map(([key, value]) => ({
    styles: { min_height: value },
    targets: `.min-height-${getClassName(key, 'sizes_')}`,
  })),

  // MAX HEIGHT
  ...Object.entries(SIZES).map(([key, value]) => ({
    styles: { max_height: value },
    targets: `.max-height-${getClassName(key, 'sizes_')}`,
  })),

  // ==================== COLOR UTILITIES ====================

  // BACKGROUND COLOR
  ...Object.entries(COLORS).map(([key, value]) => ({
    styles: { background_color: value },
    targets: `.bg-${getClassName(key, 'colors_')}`,
  })),

  // TEXT COLOR
  ...Object.entries(COLORS).map(([key, value]) => ({
    styles: { color: value },
    targets: `.text-${getClassName(key, 'colors_')}`,
  })),

  // BORDER COLOR
  ...Object.entries(COLORS).map(([key, value]) => ({
    styles: { border_color: value },
    targets: `.border-color-${getClassName(key, 'colors_')}`,
  })),

  // FILL (for SVG)
  ...Object.entries(COLORS).map(([key, value]) => ({
    styles: { fill: value },
    targets: `.fill-${getClassName(key, 'colors_')}`,
  })),

  // STROKE (for SVG)
  ...Object.entries(COLORS).map(([key, value]) => ({
    styles: { stroke: value },
    targets: `.stroke-${getClassName(key, 'colors_')}`,
  })),

  // ==================== BORDER UTILITIES ====================

  // BORDER WIDTH - All sides
  ...Object.entries(BORDERS).map(([key, value]) => ({
    styles: { border_width: value },
    targets: `.border-${getClassName(key, 'borders_border_')}`,
  })),

  // BORDER WIDTH - Top
  ...Object.entries(BORDERS).map(([key, value]) => ({
    styles: { border_top_width: value },
    targets: `.border-top-${getClassName(key, 'borders_border_')}`,
  })),

  // BORDER WIDTH - Right
  ...Object.entries(BORDERS).map(([key, value]) => ({
    styles: { border_right_width: value },
    targets: `.border-right-${getClassName(key, 'borders_border_')}`,
  })),

  // BORDER WIDTH - Bottom
  ...Object.entries(BORDERS).map(([key, value]) => ({
    styles: { border_bottom_width: value },
    targets: `.border-bottom-${getClassName(key, 'borders_border_')}`,
  })),

  // BORDER WIDTH - Left
  ...Object.entries(BORDERS).map(([key, value]) => ({
    styles: { border_left_width: value },
    targets: `.border-left-${getClassName(key, 'borders_border_')}`,
  })),

  // BORDER STYLE
  { styles: { border_style: 'solid' }, targets: '.border-solid' },
  { styles: { border_style: 'dashed' }, targets: '.border-dashed' },
  { styles: { border_style: 'dotted' }, targets: '.border-dotted' },
  { styles: { border_style: 'none' }, targets: '.border-none' },

  // BORDER RADIUS - All corners
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: { border_radius: value },
    targets: `.rounded-${getClassName(key, 'radius_')}`,
  })),

  // BORDER RADIUS - Top Left
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: { border_top_left_radius: value },
    targets: `.rounded-tl-${getClassName(key, 'radius_')}`,
  })),

  // BORDER RADIUS - Top Right
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: { border_top_right_radius: value },
    targets: `.rounded-tr-${getClassName(key, 'radius_')}`,
  })),

  // BORDER RADIUS - Bottom Right
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: { border_bottom_right_radius: value },
    targets: `.rounded-br-${getClassName(key, 'radius_')}`,
  })),

  // BORDER RADIUS - Bottom Left
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: { border_bottom_left_radius: value },
    targets: `.rounded-bl-${getClassName(key, 'radius_')}`,
  })),

  // BORDER RADIUS - Top (both top corners)
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: {
      border_top_left_radius: value,
      border_top_right_radius: value,
    },
    targets: `.rounded-t-${getClassName(key, 'radius_')}`,
  })),

  // BORDER RADIUS - Bottom (both bottom corners)
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: {
      border_bottom_left_radius: value,
      border_bottom_right_radius: value,
    },
    targets: `.rounded-b-${getClassName(key, 'radius_')}`,
  })),

  // BORDER RADIUS - Left (both left corners)
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: {
      border_bottom_left_radius: value,
      border_top_left_radius: value,
    },
    targets: `.rounded-l-${getClassName(key, 'radius_')}`,
  })),

  // BORDER RADIUS - Right (both right corners)
  ...Object.entries(RADIUS).map(([key, value]) => ({
    styles: {
      border_bottom_right_radius: value,
      border_top_right_radius: value,
    },
    targets: `.rounded-r-${getClassName(key, 'radius_')}`,
  })),

  // ==================== SHADOW UTILITIES ====================

  // BOX SHADOW
  ...Object.entries(SHADOW).map(([key, value]) => ({
    styles: { box_shadow: value },
    targets: `.shadow-${getClassName(key, 'shadow_')}`,
  })),

  // TEXT SHADOW
  ...Object.entries(SHADOW).map(([key, value]) => ({
    styles: { text_shadow: value },
    targets: `.text-shadow-${getClassName(key, 'shadow_')}`,
  })),

  // ==================== TYPOGRAPHY UTILITIES ====================

  // FONT FAMILY
  ...Object.entries(FONT_FAMILY).map(([key, value]) => ({
    styles: { font_family: value },
    targets: `.font-${getClassName(key, 'font_family_')}`,
  })),

  // FONT SIZE
  ...Object.entries(FONT_SIZE).map(([key, value]) => ({
    styles: { font_size: value },
    targets: `.text-${getClassName(key, 'font_size_')}`,
  })),

  // LINE HEIGHT
  ...Object.entries(LINE_HEIGHT).map(([key, value]) => ({
    styles: { line_height: value },
    targets: `.leading-${getClassName(key, 'line_height_')}`,
  })),

  // FONT WEIGHT
  ...Object.entries(FONT_WEIGHT).map(([key, value]) => ({
    styles: { font_weight: value },
    targets: `.font-weight-${getClassName(key, 'font_weight_')}`,
  })),

  // TEXT ALIGN
  ...Object.entries(TEXT_ALIGN).map(([key, value]) => ({
    styles: { text_align: value },
    targets: `.text-${getClassName(key, 'text_align_')}`,
  })),

  // TEXT DECORATION
  { styles: { text_decoration: 'underline' }, targets: '.underline' },
  { styles: { text_decoration: 'line-through' }, targets: '.line-through' },
  { styles: { text_decoration: 'none' }, targets: '.no-underline' },

  // TEXT TRANSFORM
  { styles: { text_transform: 'uppercase' }, targets: '.uppercase' },
  { styles: { text_transform: 'lowercase' }, targets: '.lowercase' },
  { styles: { text_transform: 'capitalize' }, targets: '.capitalize' },
  { styles: { text_transform: 'none' }, targets: '.normal-case' },

  // LETTER SPACING
  { styles: { letter_spacing: '-0.05em' }, targets: '.tracking-tighter' },
  { styles: { letter_spacing: '-0.025em' }, targets: '.tracking-tight' },
  { styles: { letter_spacing: '0' }, targets: '.tracking-normal' },
  { styles: { letter_spacing: '0.025em' }, targets: '.tracking-wide' },
  { styles: { letter_spacing: '0.05em' }, targets: '.tracking-wider' },
  { styles: { letter_spacing: '0.1em' }, targets: '.tracking-widest' },

  // WORD SPACING
  { styles: { word_spacing: 'normal' }, targets: '.word-spacing-normal' },
  { styles: { word_spacing: '0.25em' }, targets: '.word-spacing-wide' },
  { styles: { word_spacing: '0.5em' }, targets: '.word-spacing-wider' },

  // WHITE SPACE
  { styles: { white_space: 'normal' }, targets: '.whitespace-normal' },
  { styles: { white_space: 'nowrap' }, targets: '.whitespace-nowrap' },
  { styles: { white_space: 'pre' }, targets: '.whitespace-pre' },
  { styles: { white_space: 'pre-line' }, targets: '.whitespace-pre-line' },
  { styles: { white_space: 'pre-wrap' }, targets: '.whitespace-pre-wrap' },

  // ==================== Z-INDEX UTILITIES ====================

  ...Object.entries(Z_INDEX).map(([key, value]) => ({
    styles: { z_index: value },
    targets: `.z-${getClassName(key, 'z_index_')}`,
  })),

  // ==================== POSITION UTILITIES ====================

  // POSITION
  { styles: { position: 'static' }, targets: '.static' },
  { styles: { position: 'fixed' }, targets: '.fixed' },
  { styles: { position: 'absolute' }, targets: '.absolute' },
  { styles: { position: 'relative' }, targets: '.relative' },
  { styles: { position: 'sticky' }, targets: '.sticky' },

  // TOP
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { top: value },
    targets: `.top-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // RIGHT
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { right: value },
    targets: `.right-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // BOTTOM
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { bottom: value },
    targets: `.bottom-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // LEFT
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: { left: value },
    targets: `.left-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // INSET (all sides)
  ...Object.entries(SPACINGS).map(([key, value]) => ({
    styles: {
      bottom: value,
      left: value,
      right: value,
      top: value,
    },
    targets: `.inset-${getClassName(key, 'spacings_spacing_')}`,
  })),

  // ==================== DISPLAY UTILITIES ====================

  { styles: { display: 'block' }, targets: '.block' },
  { styles: { display: 'inline-block' }, targets: '.inline-block' },
  { styles: { display: 'inline' }, targets: '.inline' },
  { styles: { display: 'flex' }, targets: '.flex' },
  { styles: { display: 'inline-flex' }, targets: '.inline-flex' },
  { styles: { display: 'grid' }, targets: '.grid' },
  { styles: { display: 'inline-grid' }, targets: '.inline-grid' },
  { styles: { display: 'none' }, targets: '.hidden' },

  // ==================== FLEXBOX UTILITIES ====================

  // FLEX DIRECTION
  { styles: { flex_direction: 'row' }, targets: '.flex-row' },
  { styles: { flex_direction: 'row-reverse' }, targets: '.flex-row-reverse' },
  { styles: { flex_direction: 'column' }, targets: '.flex-col' },
  {
    styles: { flex_direction: 'column-reverse' },
    targets: '.flex-col-reverse',
  },

  // FLEX WRAP
  { styles: { flex_wrap: 'wrap' }, targets: '.flex-wrap' },
  { styles: { flex_wrap: 'wrap-reverse' }, targets: '.flex-wrap-reverse' },
  { styles: { flex_wrap: 'nowrap' }, targets: '.flex-nowrap' },

  // JUSTIFY CONTENT
  { styles: { justify_content: 'flex-start' }, targets: '.justify-start' },
  { styles: { justify_content: 'flex-end' }, targets: '.justify-end' },
  { styles: { justify_content: 'center' }, targets: '.justify-center' },
  { styles: { justify_content: 'space-between' }, targets: '.justify-between' },
  { styles: { justify_content: 'space-around' }, targets: '.justify-around' },
  { styles: { justify_content: 'space-evenly' }, targets: '.justify-evenly' },

  // ALIGN ITEMS
  { styles: { align_items: 'flex-start' }, targets: '.items-start' },
  { styles: { align_items: 'flex-end' }, targets: '.items-end' },
  { styles: { align_items: 'center' }, targets: '.items-center' },
  { styles: { align_items: 'baseline' }, targets: '.items-baseline' },
  { styles: { align_items: 'stretch' }, targets: '.items-stretch' },

  // ALIGN SELF
  { styles: { align_self: 'auto' }, targets: '.self-auto' },
  { styles: { align_self: 'flex-start' }, targets: '.self-start' },
  { styles: { align_self: 'flex-end' }, targets: '.self-end' },
  { styles: { align_self: 'center' }, targets: '.self-center' },
  { styles: { align_self: 'stretch' }, targets: '.self-stretch' },
  { styles: { align_self: 'baseline' }, targets: '.self-baseline' },

  // ALIGN CONTENT
  { styles: { align_content: 'flex-start' }, targets: '.content-start' },
  { styles: { align_content: 'flex-end' }, targets: '.content-end' },
  { styles: { align_content: 'center' }, targets: '.content-center' },
  { styles: { align_content: 'space-between' }, targets: '.content-between' },
  { styles: { align_content: 'space-around' }, targets: '.content-around' },
  { styles: { align_content: 'space-evenly' }, targets: '.content-evenly' },

  // FLEX GROW
  { styles: { flex_grow: '0' }, targets: '.flex-grow-0' },
  { styles: { flex_grow: '1' }, targets: '.flex-grow' },

  // FLEX SHRINK
  { styles: { flex_shrink: '0' }, targets: '.flex-shrink-0' },
  { styles: { flex_shrink: '1' }, targets: '.flex-shrink' },

  // FLEX BASIS
  { styles: { flex_basis: 'auto' }, targets: '.flex-basis-auto' },
  { styles: { flex_basis: '100%' }, targets: '.flex-basis-full' },

  // ==================== GRID UTILITIES ====================

  // GRID TEMPLATE COLUMNS
  {
    styles: { grid_template_columns: 'repeat(1, minmax(0, 1fr))' },
    targets: '.grid-cols-1',
  },
  {
    styles: { grid_template_columns: 'repeat(2, minmax(0, 1fr))' },
    targets: '.grid-cols-2',
  },
  {
    styles: { grid_template_columns: 'repeat(3, minmax(0, 1fr))' },
    targets: '.grid-cols-3',
  },
  {
    styles: { grid_template_columns: 'repeat(4, minmax(0, 1fr))' },
    targets: '.grid-cols-4',
  },
  {
    styles: { grid_template_columns: 'repeat(5, minmax(0, 1fr))' },
    targets: '.grid-cols-5',
  },
  {
    styles: { grid_template_columns: 'repeat(6, minmax(0, 1fr))' },
    targets: '.grid-cols-6',
  },
  {
    styles: { grid_template_columns: 'repeat(12, minmax(0, 1fr))' },
    targets: '.grid-cols-12',
  },

  // GRID TEMPLATE ROWS
  {
    styles: { grid_template_rows: 'repeat(1, minmax(0, 1fr))' },
    targets: '.grid-rows-1',
  },
  {
    styles: { grid_template_rows: 'repeat(2, minmax(0, 1fr))' },
    targets: '.grid-rows-2',
  },
  {
    styles: { grid_template_rows: 'repeat(3, minmax(0, 1fr))' },
    targets: '.grid-rows-3',
  },
  {
    styles: { grid_template_rows: 'repeat(4, minmax(0, 1fr))' },
    targets: '.grid-rows-4',
  },
  {
    styles: { grid_template_rows: 'repeat(5, minmax(0, 1fr))' },
    targets: '.grid-rows-5',
  },
  {
    styles: { grid_template_rows: 'repeat(6, minmax(0, 1fr))' },
    targets: '.grid-rows-6',
  },

  // GRID COLUMN SPAN
  { styles: { grid_column: 'span 1 / span 1' }, targets: '.col-span-1' },
  { styles: { grid_column: 'span 2 / span 2' }, targets: '.col-span-2' },
  { styles: { grid_column: 'span 3 / span 3' }, targets: '.col-span-3' },
  { styles: { grid_column: 'span 4 / span 4' }, targets: '.col-span-4' },
  { styles: { grid_column: 'span 6 / span 6' }, targets: '.col-span-6' },
  { styles: { grid_column: 'span 12 / span 12' }, targets: '.col-span-12' },
  { styles: { grid_column: '1 / -1' }, targets: '.col-span-full' },

  // GRID ROW SPAN
  { styles: { grid_row: 'span 1 / span 1' }, targets: '.row-span-1' },
  { styles: { grid_row: 'span 2 / span 2' }, targets: '.row-span-2' },
  { styles: { grid_row: 'span 3 / span 3' }, targets: '.row-span-3' },
  { styles: { grid_row: 'span 4 / span 4' }, targets: '.row-span-4' },
  { styles: { grid_row: '1 / -1' }, targets: '.row-span-full' },

  // ==================== OVERFLOW UTILITIES ====================

  { styles: { overflow: 'auto' }, targets: '.overflow-auto' },
  { styles: { overflow: 'hidden' }, targets: '.overflow-hidden' },
  { styles: { overflow: 'visible' }, targets: '.overflow-visible' },
  { styles: { overflow: 'scroll' }, targets: '.overflow-scroll' },
  { styles: { overflow_x: 'auto' }, targets: '.overflow-x-auto' },
  { styles: { overflow_x: 'hidden' }, targets: '.overflow-x-hidden' },
  { styles: { overflow_x: 'visible' }, targets: '.overflow-x-visible' },
  { styles: { overflow_x: 'scroll' }, targets: '.overflow-x-scroll' },
  { styles: { overflow_y: 'auto' }, targets: '.overflow-y-auto' },
  { styles: { overflow_y: 'hidden' }, targets: '.overflow-y-hidden' },
  { styles: { overflow_y: 'visible' }, targets: '.overflow-y-visible' },
  { styles: { overflow_y: 'scroll' }, targets: '.overflow-y-scroll' },

  // ==================== OPACITY UTILITIES ====================

  { styles: { opacity: '0' }, targets: '.opacity-0' },
  { styles: { opacity: '0.25' }, targets: '.opacity-25' },
  { styles: { opacity: '0.5' }, targets: '.opacity-50' },
  { styles: { opacity: '0.75' }, targets: '.opacity-75' },
  { styles: { opacity: '1' }, targets: '.opacity-100' },

  // ==================== CURSOR UTILITIES ====================

  { styles: { cursor: 'auto' }, targets: '.cursor-auto' },
  { styles: { cursor: 'default' }, targets: '.cursor-default' },
  { styles: { cursor: 'pointer' }, targets: '.cursor-pointer' },
  { styles: { cursor: 'wait' }, targets: '.cursor-wait' },
  { styles: { cursor: 'text' }, targets: '.cursor-text' },
  { styles: { cursor: 'move' }, targets: '.cursor-move' },
  { styles: { cursor: 'not-allowed' }, targets: '.cursor-not-allowed' },

  // ==================== POINTER EVENTS UTILITIES ====================

  { styles: { pointer_events: 'none' }, targets: '.pointer-events-none' },
  { styles: { pointer_events: 'auto' }, targets: '.pointer-events-auto' },

  // ==================== VISIBILITY UTILITIES ====================

  { styles: { visibility: 'visible' }, targets: '.visible' },
  { styles: { visibility: 'hidden' }, targets: '.invisible' },

  // ==================== OBJECT FIT UTILITIES ====================

  { styles: { object_fit: 'contain' }, targets: '.object-contain' },
  { styles: { object_fit: 'cover' }, targets: '.object-cover' },
  { styles: { object_fit: 'fill' }, targets: '.object-fill' },
  { styles: { object_fit: 'none' }, targets: '.object-none' },
  { styles: { object_fit: 'scale-down' }, targets: '.object-scale-down' },

  // ==================== OBJECT POSITION UTILITIES ====================

  { styles: { object_position: 'bottom' }, targets: '.object-bottom' },
  { styles: { object_position: 'center' }, targets: '.object-center' },
  { styles: { object_position: 'left' }, targets: '.object-left' },
  {
    styles: { object_position: 'left bottom' },
    targets: '.object-left-bottom',
  },
  { styles: { object_position: 'left top' }, targets: '.object-left-top' },
  { styles: { object_position: 'right' }, targets: '.object-right' },
  {
    styles: { object_position: 'right bottom' },
    targets: '.object-right-bottom',
  },
  { styles: { object_position: 'right top' }, targets: '.object-right-top' },
  { styles: { object_position: 'top' }, targets: '.object-top' },
];
