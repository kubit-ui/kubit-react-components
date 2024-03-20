import { Axis, Length } from '../types';

export const getLengthFromAxis = (axis: Axis): Length => {
  return axis === 'y' ? 'height' : 'width';
};
