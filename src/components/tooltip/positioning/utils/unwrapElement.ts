import { VirtualElement } from '../types';
import { isElement } from './is.utils';

export const unwrapElement = (element: Element | VirtualElement): Element | undefined => {
  return !isElement(element) ? (element as VirtualElement).contextElement : (element as Element);
};
