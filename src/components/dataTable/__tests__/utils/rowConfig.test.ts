import { applyGridToRow } from '../../utils/rowConfig';

describe('applyGridToRow', () => {
  it('should return rowConfig display and grid_template_columns if defined', () => {
    const rowConfig = {
      ctv: { container: { display: 'grid', grid_template_columns: 'repeat(1fr)' } },
    };
    const columns = [
      { field: 'filed1', width: '2fr' },
      { field: 'field2', width: '1fr' },
    ];
    const expected = {
      ctv: { container: { display: 'grid', grid_template_columns: 'repeat(1fr)' } },
    };
    expect(applyGridToRow({ rowConfig, columns })).toEqual(expected);
  });

  it('should return display grid configuration and grid_template_columns when rowConfig does not define it', () => {
    const rowConfig = {
      ctv: { container: {} },
    };
    const columns = [
      { field: 'filed1', width: '2fr' },
      { field: 'field2', width: '1fr' },
    ];
    const expected = {
      ctv: { container: { display: 'grid', grid_template_columns: '2fr 1fr' } },
    };
    expect(applyGridToRow({ rowConfig, columns })).toEqual(expected);
  });
});
