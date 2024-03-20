import { GridColumns, GridConfigType } from '../../types';
import { getGridConfiguration, getItemGridConfiguration, getMaxWidth } from '../grid.utils';

describe('getMaxWidth utility', () => {
  it('should return 79 rem as max-width', () => {
    const desktopWidth = 90;
    const margin = 7.5;
    const gap = '2rem';
    const addPaddingForLayout = true;

    const result = getMaxWidth(desktopWidth, margin, gap, addPaddingForLayout);

    expect(result).toBe('max-width: 79rem;');
  });

  it('should return 75 rem as max-width when it is not in layout', () => {
    const desktopWidth = 90;
    const margin = 7.5;
    const gap = '2rem';
    const addPaddingForLayout = false;

    const result = getMaxWidth(desktopWidth, margin, gap, addPaddingForLayout);

    expect(result).toBe('max-width: 75rem;');
  });

  it('With no margin and gap props should return 90 rem', () => {
    const desktopWidth = 90;
    const margin = undefined;
    const gap = undefined;
    const addPaddingForLayout = false;

    const result = getMaxWidth(desktopWidth, margin, gap, addPaddingForLayout);

    expect(result).toBe('max-width: 90rem;');
  });
});

describe('getGridConfiguration utility', () => {
  it('Should return grid configuration', () => {
    const config: GridConfigType = {
      columns: 6,
      gap: '1rem',
      margin: 5,
    };
    const result = getGridConfiguration(config);
    //Remove newLines(enter key) and blank spaces (space key)
    const resultFiltered = result.replace(/(\r\n|\n|\r)/gm, '').replace(/\s/g, '');

    expect(resultFiltered).toBe('grid-template-columns:repeat(6,1fr);gap:1rem;');
  });
  it('Passing undefined. It should return empty', () => {
    const config = undefined;
    const result = getGridConfiguration(config);
    //Remove newLines(enter key) and blank spaces (space key)

    expect(result).toBe('');
  });
});

describe('getItemGridConfiguration utility', () => {
  it('Passing number. should return grid column configuration', () => {
    const result = getItemGridConfiguration(12);

    expect(result).toBe('grid-column: span 12;');
  });
  it('Passing object. should return grid column configuration', () => {
    const columns: GridColumns = {
      start: 1,
      end: 6,
    };
    const result = getItemGridConfiguration(columns);

    expect(result).toBe('grid-column-start: 1; grid-column-end: 6;');
  });
  it('Passing undefined. It should return empty', () => {
    const result = getItemGridConfiguration(undefined);

    expect(result).toBe('');
  });
});
