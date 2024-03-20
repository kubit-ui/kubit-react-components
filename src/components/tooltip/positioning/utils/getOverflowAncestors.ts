import { getNearestOverflowAncestor } from './getNearestOverflowAncestor';
import { isOverflowElement } from './is.utils';

type OverflowAncestors = Array<Element | Window | VisualViewport>;

export const getOverflowAncestors = (
  node: Node,
  list: OverflowAncestors = []
): OverflowAncestors => {
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === node.ownerDocument?.body;

  if (isBody) {
    return list.concat(
      window,
      window.visualViewport || [],
      isOverflowElement(scrollableAncestor) ? scrollableAncestor : []
    );
  }

  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
};
