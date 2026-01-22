/**
 * CSS Pseudo-Classes Mapping for Bernova
 *
 * Comprehensive mapping of CSS pseudo-classes organized by category.
 * Enables type-safe pseudo-class usage in Bernova's CSS-in-JS system.
 *
 * Categories:
 * - Visualization: fullscreen, modal, picture-in-picture states
 * - Input: form element states (enabled, disabled, valid, etc.)
 * - Linguistic: language and text direction selectors
 * - Location: link and target states
 * - Resource: media element states
 * - Time-dimensional: temporal states for media
 * - Tree structural: element position and structure
 * - User interaction: hover, focus, active states
 *
 * Usage: Apply via $pseudoClasses property in style objects
 * @example
 * {
 *   color: 'blue',
 *   $pseudoClasses: {
 *     hover: { color: 'red' }
 *   }
 * }
 */
const cssPseudoClasses = {
  // visualizations
  fullscreen: 'fullscreen',
  modal: 'modal',
  picture_in_picture: 'picture-in-picture',
  // input
  autofill: 'autofill',
  enabled: 'enabled',
  disabled: 'disabled',
  read_only: 'read-only',
  read_write: 'read-write',
  placeholder_shown: 'placeholder-shown',
  default: 'default',
  checked: 'checked',
  indeterminate: 'indeterminate',
  blank: 'blank',
  valid: 'valid',
  invalid: 'invalid',
  in_range: 'in-range',
  out_of_range: 'out-of-range',
  required: 'required',
  optional: 'optional',
  user_valid: 'user-valid',
  user_invalid: 'user-invalid',
  // linguistic
  dir: 'dir', // value
  lang: 'lang', // value
  // location
  any_link: 'any-link',
  link: 'link',
  visited: 'visited',
  local_link: 'local-link',
  target: 'target',
  target_within: 'target-within',
  scope: 'scope',
  // resource
  playing: 'playing',
  paused: 'paused',
  // time-dimensional
  current: 'current',
  past: 'past',
  future: 'future',
  // tree structural
  root: 'root',
  empty: 'empty',
  nth_child: 'nth-child', // value
  nth_last_child: 'nth-last-child', // value
  first_child: 'first-child',
  last_child: 'last-child',
  only_child: 'only-child',
  nth_of_type: 'nth-of-type', // value
  nth_last_of_type: 'nth-last-of-type', // value
  first_of_type: 'first-of-type',
  last_of_type: 'last-of-type',
  only_of_type: 'only-of-type',
  // user action
  active: 'active',
  focus: 'focus',
  focus_visible: 'focus-visible',
  focus_within: 'focus-within',
  hover: 'hover',
  // functional
  is: 'is', // value
  not: 'not', // value
  where: 'where', // value
  has: 'has', // value
  // form validation
  user_valid: 'user-valid',
  user_invalid: 'user-invalid',
  // structural pseudo-classes
  nth_col: 'nth-col', // value
  nth_last_col: 'nth-last-col', // value
  // additional pseudo-classes
  host: 'host',
  host_context: 'host-context',
  defined: 'defined',
  // vendor-specific pseudo-classes
  moz_any: '-moz-any', // value
  moz_any_link: '-moz-any-link',
  moz_focusring: '-moz-focusring',
  moz_full_screen: '-moz-full-screen',
  moz_full_screen_ancestor: '-moz-full-screen-ancestor',
  moz_full_screen_document: '-moz-full-screen-document',
  moz_full_screen_element: '-moz-full-screen-element',
  moz_full_screen_root: '-moz-full-screen-root',
  moz_placeholder: '-moz-placeholder',
  moz_read_only: '-moz-read-only',
  moz_read_write: '-moz-read-write',
  moz_submit_invalid: '-moz-submit-invalid',
  moz_ui_invalid: '-moz-ui-invalid',
  moz_ui_valid: '-moz-ui-valid',
  webkit_any: '-webkit-any', // value
  webkit_any_link: '-webkit-any-link',
  webkit_autofill: '-webkit-autofill',
  webkit_current: '-webkit-current',
  webkit_full_screen: '-webkit-full-screen',
  webkit_full_screen_ancestor: '-webkit-full-screen-ancestor',
  webkit_full_screen_document: '-webkit-full-screen-document',
  webkit_full_screen_element: '-webkit-full-screen-element',
  webkit_full_screen_root: '-webkit-full-screen-root',
  webkit_input_placeholder: '-webkit-input-placeholder',
  webkit_read_only: '-webkit-read-only',
  webkit_read_write: '-webkit-read-write',
  webkit_scrollbar: '-webkit-scrollbar',
  webkit_scrollbar_button: '-webkit-scrollbar-button',
  webkit_scrollbar_thumb: '-webkit-scrollbar-thumb',
  webkit_scrollbar_track: '-webkit-scrollbar-track',
  webkit_scrollbar_track_piece: '-webkit-scrollbar-track-piece',
  webkit_search_cancel_button: '-webkit-search-cancel-button',
  webkit_search_results_button: '-webkit-search-results-button',
};

module.exports = { cssPseudoClasses };
