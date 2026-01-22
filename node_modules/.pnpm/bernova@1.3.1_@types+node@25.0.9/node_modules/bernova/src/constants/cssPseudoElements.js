/**
 * CSS Pseudo-Elements Mapping for Bernova
 *
 * Comprehensive collection of CSS pseudo-elements organized by category.
 * Enables type-safe pseudo-element usage in Bernova's CSS-in-JS system.
 *
 * Categories:
 * - Standard: before, after, first-letter, first-line, selection
 * - Content: marker, backdrop, placeholder, highlight
 * - Text: spelling-error, grammar-error, target-text
 * - Media: cue, cue-region for video/audio styling
 * - Web Components: part, slotted for shadow DOM
 * - Mozilla: -moz- prefixed elements for Firefox
 * - WebKit: -webkit- prefixed elements for Safari/Chrome
 *
 * Usage: Apply via $pseudoElements property in style objects
 * @example
 * {
 *   content: '""',
 *   $pseudoElements: {
 *     before: { content: '"→"', marginRight: '4px' }
 *   }
 * }
 */
const cssPseudoElements = {
  before: 'before',
  after: 'after',
  first_letter: 'first-letter',
  first_line: 'first-line',
  selection: 'selection',
  backdrop: 'backdrop',
  placeholder: 'placeholder',
  marker: 'marker',
  spelling_error: 'spelling-error',
  grammar_error: 'grammar-error',
  cue: 'cue',
  cue_region: 'cue-region',
  part: 'part',
  slotted: 'slotted',
  file_selector_button: 'file-selector-button',
  target_text: 'target-text',
  highlight: 'highlight',
  // Vendor-specific pseudo-elements [moz]
  moz_color_swatch: '-moz-color-swatch',
  moz_focus_inner: '-moz-focus-inner',
  moz_list_bullet: '-moz-list-bullet',
  moz_list_number: '-moz-list-number',
  moz_meter_bar: '-moz-meter-bar',
  moz_progress_bar: '-moz-progress-bar',
  moz_range_progress: '-moz-range-progress',
  moz_range_thumb: '-moz-range-thumb',
  moz_range_track: '-moz-range-track',
  // Vendor-specific pseudo-elements [webkit]
  webkit_inner_spin_button: '-webkit-inner-spin-button',
  webkit_meter_even_less_good_value: '-webkit-meter-even-less-good-value',
  webkit_meter_inner_element: '-webkit-meter-inner-element',
  webkit_meter_optimum_value: '-webkit-meter-optimum-value',
  webkit_meter_suboptimum_value: '-webkit-meter-suboptimum-value',
  webkit_progress_bar: '-webkit-progress-bar',
  webkit_progress_inner_element: '-webkit-progress-inner-element',
  webkit_progress_value: '-webkit-progress-value',
  webkit_scrollbar: '-webkit-scrollbar',
  webkit_scrollbar_button: '-webkit-scrollbar-button',
  webkit_scrollbar_thumb: '-webkit-scrollbar-thumb',
  webkit_scrollbar_track: '-webkit-scrollbar-track',
  webkit_scrollbar_track_piece: '-webkit-scrollbar-track-piece',
  webkit_search_cancel_button: '-webkit-search-cancel-button',
  webkit_search_results_button: '-webkit-search-results-button',
  webkit_slider_runnable_track: '-webkit-slider-runnable-track',
  webkit_slider_thumb: '-webkit-slider-thumb',
  webkit_resizer: '-webkit-resizer',
  webkit_input_placeholder: '-webkit-input-placeholder',
  // Additional pseudo-elements
  placeholder_shown: 'placeholder-shown',
  autofill: 'autofill',
  progress_value: 'progress-value',
  progress_bar: 'progress-bar',
  meter_optimum: 'meter-optimum',
  meter_suboptimum: 'meter-suboptimum',
  meter_sub_suboptimum: 'meter-sub-suboptimum',
};

module.exports = { cssPseudoElements };
