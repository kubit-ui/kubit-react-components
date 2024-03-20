import { pxToRem } from '../pxToRem/pxToRem';

enum Unit {
  Pixel = 'px',
  Rem = 'rem',
}
type Measure = {
  unit: Unit;
  value: number;
};

export const sumMeasuresInRem = (...measures: string[]): string => {
  const operands: Measure[] = measures.map(m => ({
    unit: m.endsWith(Unit.Rem) ? Unit.Rem : Unit.Pixel,
    value: parseFloat(m) || 0,
  }));

  const result = operands.reduce(
    (acc, m) => acc + (m.unit === Unit.Pixel ? pxToRem(m.value) : m.value),
    0
  );

  return `${result}${Unit.Rem}`;
};
