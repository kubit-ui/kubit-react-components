const MAX_PERCENTAGE = 100;

export const scrollPercentage = (scrollableElement: HTMLElement, proportionLimit = 1): number => {
  if (scrollableElement.scrollHeight > scrollableElement.clientHeight) {
    // Calculate the hidden size of the content
    const hiddenScroll = scrollableElement.scrollHeight - scrollableElement.clientHeight;
    // Calculate the ratio for the displacement when scrolling
    const proportion = scrollableElement.scrollHeight / scrollableElement.clientHeight;
    // Calculates the proportional distance elapsed by the scroll
    const scrollTop =
      proportion > proportionLimit
        ? scrollableElement.scrollTop * proportion
        : scrollableElement.scrollTop / (proportion * 2);
    // Calculate the proportional percentage that must be subtracted from the dimensions
    return (scrollTop * MAX_PERCENTAGE) / hiddenScroll;
  }
  return 0;
};
