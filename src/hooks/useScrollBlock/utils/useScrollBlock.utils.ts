export const isElementScrollable = (el: Element): boolean => {
  return el.scrollHeight > el.clientHeight;
};

export const getFirstScrollableElement = ({
  element,
  parentsToStop,
}: {
  element: Element | null;
  parentsToStop: (Element | null)[];
}): Element | null => {
  if (element && parentsToStop.some(parent => parent?.contains(element))) {
    return isElementScrollable(element)
      ? element
      : getFirstScrollableElement({ element: element.parentElement, parentsToStop });
  }
  return null;
};
