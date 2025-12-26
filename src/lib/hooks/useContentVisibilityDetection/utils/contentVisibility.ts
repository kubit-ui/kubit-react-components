import { hasVerticalScroll } from '@/lib/utils/scroll/hasScroll';

export const isContentVisibleEnough = ({
  container,
  content,
  minVisibleHeight,
}: {
  container: HTMLElement;
  content: HTMLElement;
  minVisibleHeight: number;
}): boolean => {
  // When vertical scroll on content, detect if the content has a minimum height (minVisibleHeight)
  if (hasVerticalScroll(content)) {
    const contentVisible = content.clientHeight >= minVisibleHeight;
    return contentVisible;
  }
  // When !verticalScroll on content, check if there is enought space for the content in the container with at least minVisibleHeight
  const contentVisible =
    container.scrollHeight - content.clientHeight + minVisibleHeight <=
    container.clientHeight;

  return contentVisible;
};
