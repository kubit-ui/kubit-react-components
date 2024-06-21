/* eslint-disable complexity */
import { CSSProp, css } from 'styled-components';

import {
  AfterOrBeforeType,
  BackgroundTypes,
  BorderTypes,
  BoxShadowTypes,
  CommonStyleType,
  DisplayTypes,
  MarginTypes,
  MeasuresTypes,
  PaddingTypes,
  PointerTypes,
  PositionTypes,
  TypographyTypes,
  WordWrapTypes,
} from '@/types/styles';
import { AnimationType } from '@/types/styles/animation';

/**
 * Returns the background styles.
 * @param {BackgroundTypes} prop - The background properties.
 * @returns {string} - The background styles.
 * @category styles
 * @example
 * getBackgroundStyles({ background: '10px' });
 * // Returns: background: 10px;
 */
export const getBackgroundStyles = (prop?: BackgroundTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const {
    background,
    background_color,
    background_image,
    background_position,
    background_repeat,
    background_size,
    opacity,
    accent_color,
  } = prop;

  return css`
    ${background && `background: ${background};`}
    ${background_color && `background-color: ${background_color};`}
    ${background_image && `background-image: ${background_image};`}
    ${background_position && `background-position: ${background_position};`}
    ${background_repeat && `background-repeat: ${background_repeat};`}
    ${background_size && `background-size: ${background_size};`}
    ${opacity && `opacity: ${opacity};`}
    ${accent_color && `accent-color: ${accent_color};`}
  `;
};

/**
 * Get border styles.
 * @param {BorderTypes} prop - border styles
 * @category styles
 * @example
 * const Component = styled.div<BorderTypes>`
 * ${getBorderStyles}
 * `;
 * @returns {string} border styles
 * ,
 */
export const getBorderStyles = (prop?: BorderTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const {
    border,
    border_top,
    border_right,
    border_bottom,
    border_left,
    border_radius,
    border_width,
    border_left_width,
    border_right_width,
    border_top_width,
    border_bottom_width,
    border_color,
    border_left_color,
    border_right_color,
    border_top_color,
    border_bottom_color,
    border_top_left_radius,
    border_top_right_radius,
    border_bottom_left_radius,
    border_bottom_right_radius,
    border_style,
    border_left_style,
    border_top_style,
    border_right_style,
    border_bottom_style,
    outline,
    outline_style,
    outline_color,
    outline_width,
    outline_offset,
  } = prop;

  return css`
    ${border && `border: ${border};`}
    ${border_top && `border-top: ${border_top};`}
    ${border_right && `border-right: ${border_right};`}
    ${border_bottom && `border-bottom: ${border_bottom};`}
    ${border_left && `border-left: ${border_left};`}
    ${border_radius && `border-radius: ${border_radius};`}
    ${border_width && `border-width: ${border_width};`}
    ${border_left_width && `border-left-width: ${border_left_width};`}
    ${border_right_width && `border-right-width: ${border_right_width};`}
    ${border_top_width && `border-top-width: ${border_top_width};`}
    ${border_bottom_width && `border-bottom-width: ${border_bottom_width};`}
    ${border_color && `border-color: ${border_color};`}
    ${border_left_color && `border-left-color: ${border_left_color};`}
    ${border_right_color && `border-right-color: ${border_right_color};`}
    ${border_top_color && `border-top-color: ${border_top_color};`}
    ${border_bottom_color && `border-bottom-color: ${border_bottom_color};`}
    ${border_top_left_radius && `border-top-left-radius: ${border_top_left_radius};`}
    ${border_top_right_radius && `border-top-right-radius: ${border_top_right_radius};`}
    ${border_bottom_left_radius && `border-bottom-left-radius: ${border_bottom_left_radius};`}
    ${border_bottom_right_radius && `border-bottom-right-radius: ${border_bottom_right_radius};`}
    ${border_style && `border-style: ${border_style};`}
    ${border_left_style && `border-left-style: ${border_left_style};`}
    ${border_top_style && `border-top-style: ${border_top_style};`}
    ${border_right_style && `border-right-style: ${border_right_style};`}
    ${border_bottom_style && `border-bottom-style: ${border_bottom_style};`}
    ${outline && `outline: ${outline};`}
    ${outline_style && `outline-style: ${outline_style};`}
    ${outline_color && `outline-color: ${outline_color};`}
    ${outline_width && `outline-width: ${outline_width};`}
    ${outline_offset && `outline-offset: ${outline_offset};`}
  `;
};

/**
 * Get display styles.
 * @param {DisplayTypes} prop - display styles
 * @category styles
 * @example
 * const Component = styled.div<DisplayTypes>`
 * ${getDisplayStyles}
 * `;
 * @returns {string} display styles
 * ,
 */
export const getDisplayStyles = (prop?: DisplayTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const {
    display,
    visibility,
    overflow,
    overflow_x,
    overflow_y,
    flex,
    flex_direction,
    flex_wrap,
    flex_flow,
    flex_grow,
    flex_shrink,
    flex_basis,
    justify_content,
    justify_items,
    align_items,
    align_self,
    align_content,
    order,
    flex_order,
    flex_align_self,
    flex_justify_self,
    flex_align_content,
    flex_align_items,
    gap,
    row_gap,
    column_gap,
    grid,
    grid_area,
    grid_template,
    grid_template_areas,
    grid_template_rows,
    grid_template_columns,
    grid_row,
    grid_row_start,
    grid_row_end,
    grid_column,
    grid_column_start,
    grid_column_end,
    grid_gap,
    grid_row_gap,
    grid_column_gap,
    grid_auto_flow,
    grid_auto_rows,
    grid_auto_columns,
  } = prop;
  return css`
    ${display && `display: ${display};`}
    ${visibility && `visibility: ${visibility};`}
    ${overflow && `overflow: ${overflow};`}
    ${overflow_x && `overflow-x: ${overflow_x};`}
    ${overflow_y && `overflow-y: ${overflow_y};`}
    ${flex && `flex: ${flex};`}
    ${flex_direction && `flex-direction: ${flex_direction};`}
    ${flex_wrap && `flex-wrap: ${flex_wrap};`}
    ${flex_flow && `flex-flow: ${flex_flow};`}
    ${flex_grow && `flex-grow: ${flex_grow};`}
    ${flex_shrink && `flex-shrink: ${flex_shrink};`}
    ${flex_basis && `flex-basis: ${flex_basis};`}
    ${justify_content && `justify-content: ${justify_content};`}
    ${justify_items && `justify-items: ${justify_items};`}
    ${align_items && `align-items: ${align_items};`}
    ${align_self && `align-self: ${align_self};`}    
    ${align_content && `align-content: ${align_content};`}
    ${order && `order: ${order};`}
    ${flex_order && `order: ${flex_order};`}
    ${flex_align_self && `align-self: ${flex_align_self};`}
    ${flex_justify_self && `justify-self: ${flex_justify_self};`}
    ${flex_align_content && `align-content: ${flex_align_content};`}
    ${flex_align_items && `align-items: ${flex_align_items};`}
    ${gap && `gap: ${gap};`}
    ${row_gap && `row-gap: ${row_gap};`}
    ${column_gap && `column-gap: ${column_gap};`}
    ${grid && `grid: ${grid};`}
    ${grid_area && `grid-area: ${grid_area};`}
    ${grid_template && `grid-template: ${grid_template};`}
    ${grid_template_areas && `grid-template-areas: ${grid_template_areas};`}
    ${grid_template_rows && `grid-template-rows: ${grid_template_rows};`}
    ${grid_template_columns && `grid-template-columns: ${grid_template_columns};`}
    ${grid_row && `grid-row: ${grid_row};`}
    ${grid_row_start && `grid-row-start: ${grid_row_start};`}
    ${grid_row_end && `grid-row-end: ${grid_row_end};`}
    ${grid_column && `grid-column: ${grid_column};`}
    ${grid_column_start && `grid-column-start: ${grid_column_start};`}
    ${grid_column_end && `grid-column-end: ${grid_column_end};`}
    ${grid_gap && `grid-gap: ${grid_gap};`}
    ${grid_row_gap && `grid-row-gap: ${grid_row_gap};`}
    ${grid_column_gap && `grid-column-gap: ${grid_column_gap};`}
    ${grid_auto_flow && `grid-auto-flow: ${grid_auto_flow};`}
    ${grid_auto_rows && `grid-auto-rows: ${grid_auto_rows};`}
    ${grid_auto_columns && `grid-auto-columns: ${grid_auto_columns};`}
  `;
};

/**
 * Get margin styles.
 * @param {MarginTypes} prop - margin styles
 * @category styles
 * @example
 * const Component = styled.div<MarginTypes>`
 * ${getMarginStyles}
 * `;
 * @returns {string} margin styles
 * ,
 */
export const getMarginStyles = (prop?: MarginTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const { margin, margin_left, margin_right, margin_top, margin_bottom } = prop;

  return css`
    ${margin && `margin: ${margin};`}
    ${margin_left && `margin-left: ${margin_left};`}
    ${margin_right && `margin-right: ${margin_right};`}
    ${margin_top && `margin-top: ${margin_top};`}
    ${margin_bottom && `margin-bottom: ${margin_bottom};`}
  `;
};

/**
 * Get measures styles.
 * @param {MeasuresType} prop - measures styles
 * @category styles
 * @example
 * const Component = styled.div<MeasuresType>`
 *  ${getMeasuresStyles}
 * `;
 * @returns {string} measures styles
 * ,
 */
export const getMeasuresStyles = (prop?: MeasuresTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const { box_sizing, width, min_width, max_width, height, min_height, max_height } = prop;

  return css`
    ${box_sizing && `box-sizing: ${box_sizing};`}
    ${width && `width: ${width};`}
    ${min_width && `min-width: ${min_width};`}
    ${max_width && `max-width: ${max_width};`}
    ${height && `height: ${height};`}
    ${min_height && `min-height: ${min_height};`}
    ${max_height && `max-height: ${max_height};`}
  `;
};

/**
 * Returns the padding styles.
 * @param {PaddingTypes} prop - The padding properties.
 * @returns {string} - The padding styles.
 * @category styles
 * @example
 * getPaddingStyles({ padding: '10px' });
 * // Returns: padding: 10px;
 */
export const getPaddingStyles = (prop?: PaddingTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const { padding, padding_left, padding_right, padding_top, padding_bottom } = prop;

  return css`
    ${padding && `padding: ${padding};`}
    ${padding_left && `padding-left: ${padding_left};`}
    ${padding_right && `padding-right: ${padding_right};`}
    ${padding_top && `padding-top: ${padding_top};`}
    ${padding_bottom && `padding-bottom: ${padding_bottom};`}
  `;
};

/**
 * Get position styles.
 * @param {PositionTypes} prop - position styles
 * @category styles
 * @example
 * const Component = styled.div<PositionTypes>`
 * ${getPositionStyles}
 * `;
 * @returns {string} position styles
 * ,
 */

export const getPositionStyles = (prop?: PositionTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const {
    position,
    top,
    right,
    bottom,
    left,
    float,
    transform,
    z_index,
    transform_style,
    translate,
  } = prop;

  return css`
    ${position && `position: ${position};`}
    ${transform_style && `transform-style: ${transform_style};`}
    ${top && `top: ${top};`}
    ${right && `right: ${right};`}
    ${bottom && `bottom: ${bottom};`}
    ${left && `left: ${left};`}
    ${float && `float: ${float};`}
    ${transform && `transform: ${transform};`}
    ${z_index && `z-index: ${z_index};`}
    ${translate && `translate: ${translate};`}
  `;
};

/**
 * Returns the box shadow styles.
 * @param {BoxShadowTypes} prop - The box shadow properties.
 * @returns {string} - The box shadow styles.
 * @category styles
 * @example
 * getBoxShadowStyles({ box_shadow: '10px' });
 * // Returns: box-shadow: 10px;
 *
 */
export const getBoxShadowStyles = (prop?: BoxShadowTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const { box_shadow } = prop;

  return css`
    ${box_shadow && `box-shadow: ${box_shadow};`}
  `;
};

export const getGenericTypographyStyles = (prop?: TypographyTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const {
    font_family,
    font_size,
    font_weight,
    font_style,
    line_height,
    letter_spacing,
    text_align,
    text_decoration,
    text_transform,
    white_space,
    word_break,
    word_wrap,
    text_overflow,
    text_shadow,
    text_indent,
    text_justify,
    color,
    overflow,
  } = prop;

  return css`
    ${font_family && `font-family: ${font_family};`}
    ${font_size && `font-size: ${font_size};`}
    ${!!font_weight && `font-weight: ${font_weight};`}
    ${font_style && `font-style: ${font_style};`}
    ${line_height && `line-height: ${line_height};`}
    ${letter_spacing && `letter-spacing: ${letter_spacing};`}
    ${text_align && `text-align: ${text_align};`}
    ${text_decoration && `text-decoration: ${text_decoration};`}
    ${text_transform && `text-transform: ${text_transform};`}
    ${white_space && `white-space: ${white_space};`}
    ${word_break && `word-break: ${word_break};`}
    ${word_wrap && `word-wrap: ${word_wrap};`}
    ${text_overflow && `text-overflow: ${text_overflow};`}
    ${text_shadow && `text-shadow: ${text_shadow};`}
    ${text_indent && `text-indent: ${text_indent};`}
    ${text_justify && `text-justify: ${text_justify};`}
    ${color && `color: ${color};`}
    ${overflow && `overflow: ${overflow};`}
  `;
};

/**
 * Get typography styles.
 * @param {TypographyTypes} prop - typography styles
 * @category styles
 * @example
 * const Component = styled.div<TypographyTypes>`
 * ${getTypographyStyles}
 * `;
 * @returns {string} typography styles
 * ,
 */

export const getTypographyStyles = (prop?: TypographyTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  return css`
    ${({
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
      },
    }) => css`
      ${getGenericTypographyStyles(prop)}
      ${onlyDesktop} {
        ${getGenericTypographyStyles(prop.DESKTOP)}
      }
      ${onlyTablet} {
        ${getGenericTypographyStyles(prop.TABLET)}
      }
      ${onlyMobile} {
        ${getGenericTypographyStyles(prop.MOBILE)}
      }
    `}
  `;
};

/**
 * Get pointer styles.
 * @param {PointerTypes} prop - pointer styles
 * @category styles
 * @example
 * const Component = styled.div<PointerTypes>`
 * ${getPointerStyles}
 * `;
 * @returns {string} pointer styles
 * ,
 */

export const getPointerStyles = (prop?: PointerTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const { cursor, pointer_events } = prop;

  return css`
    ${cursor && `cursor: ${cursor};`}
    ${pointer_events && `pointer-events: ${pointer_events};`}
  `;
};

export const getWordWrapStyles = (prop?: WordWrapTypes): CSSProp => {
  if (!prop) {
    return css``;
  }
  const { word_wrap, word_break, white_space, text_overflow } = prop;

  return css`
    ${word_wrap && `word-wrap: ${word_wrap};`}
    ${word_break && `word-break: ${word_break};`}
    ${white_space && `white-space: ${white_space};`}
    ${text_overflow && `text-overflow: ${text_overflow};`}
  `;
};

const getGenericStyles = (styles?: CommonStyleType): CSSProp => {
  return css`
    ${getPaddingStyles(styles)}
    ${getBorderStyles(styles)}
    ${getBoxShadowStyles(styles)}
    ${getBackgroundStyles(styles)}
    ${getMeasuresStyles(styles)}
    ${getDisplayStyles(styles)}
    ${getMarginStyles(styles)}
    ${getPositionStyles(styles)}
    ${getPointerStyles(styles)}
    ${getWordWrapStyles(styles)}
    ${getAnimationStyles(styles)}
  `;
};

export const getPseudoElementStyles = (
  pseudoElement: string,
  { content, ...styles }: AfterOrBeforeType
): CSSProp => {
  const isAfterOrBefore = pseudoElement.includes('after') || pseudoElement.includes('before');
  return css`
    ${pseudoElement} {
      ${isAfterOrBefore && `content: '${content}'`};
      ${getGenericStyles(styles)}
    }
  `;
};
const getAfterBeforeKeys = (styles?: CommonStyleType): CSSProp => {
  if (!styles) {
    return css``;
  }
  const afterKey = '&::after';
  const beforeKey = '&::before';
  const backdropKey = '&::backdrop';
  return css`
    ${styles.after && getPseudoElementStyles(afterKey, styles.after)}
    ${styles.before && getPseudoElementStyles(beforeKey, styles.before)}
    ${styles.backdrop && getPseudoElementStyles(backdropKey, styles.backdrop)}
  `;
};

export const getStyles = (styles?: CommonStyleType): CSSProp => {
  //all styles except TypographyTypes and IconTypes
  return css`
    ${getGenericStyles(styles)}
    ${getAfterBeforeKeys(styles)}
    ${({
      theme: {
        MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
      },
    }) => css`
      ${onlyDesktop} {
        ${getGenericStyles(styles?.DESKTOP)}
        ${getAfterBeforeKeys(styles?.DESKTOP)}
      }
      ${onlyTablet} {
        ${getGenericStyles(styles?.TABLET)}
        ${getAfterBeforeKeys(styles?.TABLET)}
      }
      ${onlyMobile} {
        ${getGenericStyles(styles?.MOBILE)}
        ${getAfterBeforeKeys(styles?.MOBILE)}
      }
    `}
  `;
};

/**
 * Get animation styles.
 * @param {AnimationType} prop - animation styles
 * @category styles
 * @example
 * const Component = styled.div<AnimationType>`
 *  ${getAnimationStyles}
 * `;
 * @returns {string} animation styles
 * ,
 */
export const getAnimationStyles = (prop?: AnimationType): CSSProp => {
  if (!prop) {
    return css``;
  }
  const {
    transition,
    transition_delay,
    transition_duration,
    transition_property,
    transition_timing_function,
  } = prop;

  return css`
    ${transition && `transition: ${transition};`}
    ${transition_delay && `transition-delay: ${transition_delay};`}
    ${transition_duration && `transition-duration: ${transition_duration};`}
    ${transition_property && `transition-property: ${transition_property};`}
    ${transition_timing_function && `transition-timing-function: ${transition_timing_function};`}
  `;
};
