import { Axis } from '../types';

export const getCrossAxis = (axis: Axis): Axis => {
  return axis === 'x' ? 'y' : 'x';
};
