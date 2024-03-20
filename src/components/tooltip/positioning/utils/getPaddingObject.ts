import { Padding, SideObject } from '../types';
import { expandPaddingObject } from './expandPaddingObject';

export const getSideObjectFromPadding = (padding: Padding): SideObject => {
  return typeof padding !== 'number'
    ? expandPaddingObject(padding)
    : { top: padding, right: padding, bottom: padding, left: padding };
};
