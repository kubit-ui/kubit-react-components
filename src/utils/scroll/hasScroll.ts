export const hasVerticalScroll = (element: HTMLElement): boolean => {
  return element.scrollHeight > element.clientHeight;
};

export const hasHorizontalScroll = (element: HTMLElement): boolean => {
  return element.scrollWidth > element.clientWidth;
};

export const hasScroll = (element: HTMLElement): boolean => {
  return hasVerticalScroll(element) || hasHorizontalScroll(element);
};
