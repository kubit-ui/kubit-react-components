import {
  BackgroundTypes,
  BorderTypes,
  BoxShadowTypes,
  CommonStyleType,
  DisplayTypes,
  MarginTypes,
  MeasuresTypes,
  PaddingTypes,
  PositionTypes,
  TypographyTypes,
} from '@/types/index';

import {
  getBackgroundStyles,
  getBorderStyles,
  getBoxShadowStyles,
  getDisplayStyles,
  getMarginStyles,
  getMeasuresStyles,
  getPaddingStyles,
  getPositionStyles,
  getStyles,
  getTypographyStyles,
} from '../getStyles';

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
    };
    const commonStyles = getStyles(props);

    expect(commonStyles).not.toEqual([]);
  });
});
