import { GridColumns, GridConfigType } from '../types';

export const getMaxWidth = (
  desktopWidth: number,
  margin: number | undefined,
  gap: string | undefined,
  addPaddingForLayout?: boolean
): string => {
  const totalMargin = 2 * (margin ?? 0);
  const totalGap = addPaddingForLayout ? Number((gap ?? '').replace('rem', '')) * 2 : 0;
  const maxWidth = desktopWidth - totalMargin + totalGap;
  return `max-width: ${maxWidth}rem;`;
};

export const getGridConfiguration = (config: GridConfigType | undefined): string => {
  if (config === undefined) {
    return '';
  }
  const { columns, gap } = config;

  return `
      grid-template-columns: repeat(${columns}, 1fr);
      gap: ${gap};
    `;
};

export const getItemGridConfiguration = (columns: number | GridColumns | undefined): string => {
  if (columns === undefined) {
    return '';
  }
  if (typeof columns === 'object') {
    return `grid-column-start: ${columns.start}; grid-column-end: ${columns.end};`;
  }
  return `grid-column: span ${columns};`;
};
