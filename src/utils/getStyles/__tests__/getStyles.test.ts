import { AnimationType } from '@/types/styles/animation';
import { BackgroundTypes } from '@/types/styles/background';
import { BorderTypes } from '@/types/styles/border';
import { AfterOrBeforeType, CommonStyleType } from '@/types/styles/commonStyle';
import { DisplayTypes } from '@/types/styles/display';
import { MarginTypes } from '@/types/styles/margin';
import { MeasuresTypes } from '@/types/styles/measures';
import { PaddingTypes } from '@/types/styles/padding';
import { PointerTypes } from '@/types/styles/pointer';
import { PositionTypes } from '@/types/styles/position';
import { ScrollTypes } from '@/types/styles/scroll';
import { BoxShadowTypes } from '@/types/styles/shadow';
import { TypographyTypes } from '@/types/styles/typography';
import { WordWrapTypes } from '@/types/styles/wordWrap';

import {
  getAnimationStyles,
  getBackgroundStyles,
  getBorderStyles,
  getBoxShadowStyles,
  getDisplayStyles,
  getGenericTypographyStyles,
  getMarginStyles,
  getMeasuresStyles,
  getPaddingStyles,
  getPointerStyles,
  getPositionStyles,
  getPseudoStyles,
  getScrollStyles,
  getStyles,
  getTypographyStyles,
  getWordWrapStyles,
} from '../getStyles';

describe('getScrollStyles', () => {
  it('Return empty array', () => {
    const scrollStyles = getScrollStyles();
    expect(scrollStyles).toEqual(['']);
  });
  it('Return scroll styles', () => {
    const props: ScrollTypes = {
      scrollbar_width: '10px',
      scrollbar_color: 'red',
      overflow_block: 'visible',
      overflow_inline: 'visible',
      overflow_x: 'visible',
      overflow_y: 'visible',
      overflow: 'visible',
      overflow_clip_margin: '10px',
      scrollbar_gutter: '10px',
      scroll_behavior: 'auto',
      scroll_margin: '10px',
      scroll_padding: '10px',
      scroll_snap_align: 'center',
      scroll_snap_stop: 'always',
      scroll_snap_type: 'mandatory',
      webkit_scrollbar: '10px',
      scroll_container: 'auto',
      scrollbar_aria_role: 'scrollbar',
    };
    const scrollStyles = getScrollStyles(props);

    expect(scrollStyles).not.toEqual([]);
  });
});

describe('getBackgroundStyles', () => {
  it('Return empty string', () => {
    const backgroundStyles = getBackgroundStyles();
    expect(backgroundStyles).toEqual([]);
  });

  it('Return background styles', () => {
    const props: BackgroundTypes = {
      background: '#ffff',
      background_color: '#ffff',
      background_image: 'image',
      background_position: 'top',
      background_repeat: 'repeat-x',
      background_size: 'contain',
      opacity: '0.5',
      accent_color: 'red',
    };
    const backgroundStyles = getBackgroundStyles(props);

    expect(backgroundStyles).not.toEqual([]);
  });
});

describe('getBorderStyles', () => {
  it('Return empty array', () => {
    const borderStyles = getBorderStyles();
    expect(borderStyles).toEqual([]);
  });

  it('Return border styles', () => {
    const props: BorderTypes = {
      border: '2px',
      border_radius: '2px',
      border_width: '2px',
      border_left_width: '2px',
      border_right_width: '2px',
      border_top_width: '2px',
      border_bottom_width: '2px',
      border_color: 'red',
      border_left_color: 'red',
      border_right_color: 'red',
      border_top_color: 'red',
      border_bottom_color: 'red',
      border_top_left_radius: '2px',
      border_top_right_radius: '2px',
      border_bottom_left_radius: '2px',
      border_bottom_right_radius: '2px',
      border_bottom: '2px',
      border_left: '2px',
      border_right: '2px',
      border_top: '2px',
      border_style: 'solid',
      border_left_style: 'solid',
      border_right_style: 'solid',
      border_top_style: 'solid',
      border_bottom_style: 'solid',
      outline: '2px',
      outline_color: 'red',
      outline_offset: '2px',
      outline_style: 'solid',
      outline_width: '2px',
    };
    const borderStyles = getBorderStyles(props);

    expect(borderStyles).not.toEqual([]);
  });
});

describe('getDisplayStyles', () => {
  it('Return empty array', () => {
    const displayStyles = getDisplayStyles();
    expect(displayStyles).toEqual([]);
  });

  it('Return display styles', () => {
    const props: DisplayTypes = {
      display: 'flex',
      visibility: 'hidden',
      overflow: '1',
      overflow_x: '1',
      overflow_y: '1',
      flex: '1',
      flex_direction: 'column',
      flex_wrap: 'no-wrap',
      flex_flow: '1',
      flex_grow: '1',
      flex_shrink: '1',
      flex_basis: '1',
      justify_content: 'center',
      align_items: 'center',
      align_content: 'center',
      order: '1',
      flex_order: '1',
      flex_align_self: '1',
      flex_justify_self: '1',
      flex_align_content: '1',
      flex_align_items: '1',
      gap: '1px',
      grid: '1',
      grid_area: '1',
      grid_template: '1',
      grid_template_areas: '1',
      grid_template_rows: '1',
      grid_template_columns: '1',
      grid_row: '1',
      grid_row_start: '1',
      grid_row_end: '1',
      grid_column: '1',
      grid_column_start: '1',
      grid_column_end: '1',
      grid_gap: '1',
      grid_row_gap: '1',
      grid_column_gap: '1',
      grid_auto_flow: '1',
      grid_auto_rows: '1',
      grid_auto_columns: '1',
      align_self: 'auto',
      column_gap: '1',
      justify_items: 'center',
      row_gap: '1',
    };
    const displayStyles = getDisplayStyles(props);

    expect(displayStyles).not.toEqual([]);
  });
});

describe('getMarginStyles', () => {
  it('Return empty array', () => {
    const marginStyles = getMarginStyles();
    expect(marginStyles).toEqual([]);
  });

  it('Return margin styles', () => {
    const props: MarginTypes = {
      margin: '5px',
      margin_left: '5px',
      margin_right: '5px',
      margin_top: '5px',
      margin_bottom: '5px',
    };
    const marginStyles = getMarginStyles(props);

    expect(marginStyles).not.toEqual([]);
  });
});

describe('getMeasuresStyles', () => {
  it('Return empty array', () => {
    const measuresStyles = getMeasuresStyles();
    expect(measuresStyles).toEqual([]);
  });

  it('Return measures styles', () => {
    const props: MeasuresTypes = {
      width: '50px',
      min_width: '50px',
      max_width: '50px',
      height: '50px',
      min_height: '50px',
      max_height: '50px',
      box_sizing: 'border-box',
    };
    const measuresStyles = getMeasuresStyles(props);

    expect(measuresStyles).not.toEqual([]);
  });
});

describe('getPaddingStyles', () => {
  it('Return empty array', () => {
    const paddingStyles = getPaddingStyles();
    expect(paddingStyles).toEqual([]);
  });

  it('Return padding styles', () => {
    const props: PaddingTypes = {
      padding: '20px',
      padding_left: '20px',
      padding_right: '20px',
      padding_top: '20px',
      padding_bottom: '20px',
    };
    const paddingStyles = getPaddingStyles(props);

    expect(paddingStyles).not.toEqual([]);
  });
});

describe('getPositionStyles', () => {
  it('Return empty array', () => {
    const positionStyles = getPositionStyles();
    expect(positionStyles).toEqual([]);
  });

  it('Return position styles', () => {
    const props: PositionTypes = {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      float: '0',
      z_index: 1,
      transform: 'rotate(30deg)',
      transform_style: 'preserve-3d',
      translate: '10px',
    };
    const positionStyles = getPositionStyles(props);

    expect(positionStyles).not.toEqual([]);
  });
});

describe('getBoxShadowStyles', () => {
  it('Return empty array', () => {
    const boxShadowStyles = getBoxShadowStyles();
    expect(boxShadowStyles).toEqual([]);
  });

  it('Return boxShadow styles', () => {
    const props: BoxShadowTypes = {
      box_shadow: '10px 5px 5px black;',
    };
    const boxShadowStyles = getBoxShadowStyles(props);
    expect(boxShadowStyles).not.toEqual([]);
  });
});

describe('getGenericTypographyStyles', () => {
  it('Return empty array', () => {
    const genericTypographyStyles = getGenericTypographyStyles();
    expect(genericTypographyStyles).toEqual(['']);
  });
  it('Return genericTypography styles', () => {
    const props: TypographyTypes = {
      font_family: 'Roboto',
      font_size: '30px',
      font_weight: 600,
      font_style: 'bold',
      line_height: '30px',
      letter_spacing: '30px',
      text_align: 'center',
      text_decoration: 'underline',
      text_transform: 'uppercase',
      white_space: 'normal',
      word_break: 'no-break',
      word_wrap: 'no-wrap',
      text_overflow: 'ellipsis',
      text_shadow: '30px',
      text_indent: 'auto',
      text_justify: 'auto',
      color: 'black',
      overflow: 'visible',
    };

    const genericTypographyStyles = getGenericTypographyStyles(props);
    expect(genericTypographyStyles).not.toEqual([]);
  });
});

describe('getTypographyStyles', () => {
  it('Return empty array', () => {
    const typographyStyles = getTypographyStyles();
    expect(typographyStyles).toEqual([]);
  });

  it('Return typography styles', () => {
    const props: TypographyTypes = {
      font_family: 'Roboto',
      font_size: '30px',
      font_weight: 600,
      font_style: 'bold',
      line_height: '30px',
      letter_spacing: '30px',
      text_align: 'center',
      text_decoration: 'underline',
      text_transform: 'uppercase',
      white_space: 'normal',
      word_break: 'no-break',
      word_wrap: 'no-wrap',
      text_overflow: 'ellipsis',
      text_shadow: '30px',
      text_indent: 'auto',
      text_justify: 'auto',
      color: 'black',
      overflow: 'visible',
    };
    const typographyStyles = getTypographyStyles(props);

    expect(typographyStyles).not.toEqual([]);
  });
});

describe('getPointerStyles', () => {
  it('Return empty array', () => {
    const pointerStyles = getPointerStyles();
    expect(pointerStyles).toEqual(['']);
  });
  it('Return pointer styles', () => {
    const props: PointerTypes = { cursor: 'pointer', pointer_events: 'none' };
    const pointerStyles = getPointerStyles(props);

    expect(pointerStyles).not.toEqual([]);
  });
});

describe('getWordWrapStyles', () => {
  it('Return empty array', () => {
    const wordWrapStyles = getWordWrapStyles();
    expect(wordWrapStyles).toEqual(['']);
  });
  it('Return wordWrap styles', () => {
    const props: WordWrapTypes = {
      word_break: 'break-all',
      word_wrap: 'break-word',
      white_space: 'normal',
      text_overflow: 'ellipsis',
    };
    const wordWrapStyles = getWordWrapStyles(props);

    expect(wordWrapStyles).not.toEqual([]);
  });
});

describe('getPseudoStyles', () => {
  it('Return wordWrap styles', () => {
    // pseudo elements
    const pseudoKey = {
      afterKey: '&::after',
      beforeKey: '&::before',
      backdropKey: '&::backdrop',
      placeholderKey: '&::placeholder',
      passwordRevealButtonKey: '&::-ms-reveal',
      webkitInnerSpinButtonKey: '&::-webkit-inner-spin-button',
      webkitOuterSpinButtonKey: '&::-webkit-outer-spin-button',
      ariaInvalidKey: '&:is([aria-invalid="true"])',
      focusVisibleKey: '&:focus-visible',
      disabledKey: '&:disabled',
      focusKey: '&:focus',
      dataTruncateKey: '&[data-truncate="true"]',
      dataFilledKey: '&[data-filled="true"]',
    };

    const props: AfterOrBeforeType = {
      content: '',
      background: 'blue',
    };
    const pseudoStyles = getPseudoStyles(pseudoKey.backdropKey, props);
    const pseudoStyles2 = getPseudoStyles(pseudoKey.placeholderKey, props);
    const pseudoStyles3 = getPseudoStyles(pseudoKey.passwordRevealButtonKey, props);
    const pseudoStyles4 = getPseudoStyles(pseudoKey.webkitInnerSpinButtonKey, props);
    const pseudoStyles5 = getPseudoStyles(pseudoKey.webkitOuterSpinButtonKey, props);
    const pseudoStyles6 = getPseudoStyles(pseudoKey.ariaInvalidKey, props);
    const pseudoStyles7 = getPseudoStyles(pseudoKey.focusVisibleKey, props);
    const pseudoStyles8 = getPseudoStyles(pseudoKey.disabledKey, props);
    const pseudoStyles9 = getPseudoStyles(pseudoKey.focusKey, props);
    const pseudoStyles10 = getPseudoStyles(pseudoKey.dataTruncateKey, props);
    const pseudoStyles11 = getPseudoStyles(pseudoKey.dataFilledKey, props);

    expect(pseudoStyles).not.toEqual([]);
    expect(pseudoStyles2).not.toEqual([]);
    expect(pseudoStyles3).not.toEqual([]);
    expect(pseudoStyles4).not.toEqual([]);
    expect(pseudoStyles5).not.toEqual([]);
    expect(pseudoStyles6).not.toEqual([]);
    expect(pseudoStyles7).not.toEqual([]);
    expect(pseudoStyles8).not.toEqual([]);
    expect(pseudoStyles9).not.toEqual([]);
    expect(pseudoStyles10).not.toEqual([]);
    expect(pseudoStyles11).not.toEqual([]);
  });
});

describe('getAnimationStyles', () => {
  it('Return empty array', () => {
    const animationStyles = getAnimationStyles();
    expect(animationStyles).toEqual(['']);
  });
  it('Return animation styles', () => {
    const props: AnimationType = {
      transition: 'all 0.5s ease-in-out',
      transition_property: 'all',
      transition_duration: '0.5s',
      transition_timing_function: 'ease-in-out',
      transition_delay: '0.5s',
    };
    const animationStyles = getAnimationStyles(props);

    expect(animationStyles).not.toEqual([]);
  });
});

describe('getStyles', () => {
  it('Return common styles', () => {
    const props: CommonStyleType = {
      box_shadow: '10px 5px 5px black',
      background: 'red',
      margin_right: '50px',
      padding_left: '20px',
      display: 'flex',
      after: { content: '', background: 'red' },
      before: { content: '', background: 'blue' },
      backdrop: { background: 'salmon' },
      disabled: { background: 'red' },
      focus: { background: 'blue' },
      placeholder: { font_size: '20px' },
      passwordRevealButton: { background: 'red' },
      webkitInnerSpinButton: { background: 'blue' },
      webkitOuterSpinButton: { background: 'green' },
      ariaInvalid: { background: 'red' },
      dataTruncate: { background: 'blue' },
      dataFilled: { background: 'green' },
    };
    const commonStyles = getStyles(props);

    expect(commonStyles).not.toEqual([]);
  });
});
