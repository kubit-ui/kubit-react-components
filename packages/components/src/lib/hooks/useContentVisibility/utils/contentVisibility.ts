import { hasVerticalScroll } from '@/lib/utils/scroll/hasScroll';

/**
 * Determines whether content is visible enough within its container.
 *
 * @param params - Configuration object
 * @param params.container - The container element
 * @param params.content - The content element to check visibility for
 * @param params.minVisibleHeight - Minimum height (in pixels) required for content to be considered visible
 *
 * @returns `true` if content is visible enough, `false` otherwise
 *
 * @remarks
 * **Logic:**
 * - If content has vertical scroll: Checks if content's clientHeight >= minVisibleHeight
 * - If content has no vertical scroll: Checks if there's enough space in container for content + minVisibleHeight
 */
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
  // When !verticalScroll on content, check if there is enough space for the content in the container with at least minVisibleHeight
  const contentVisible =
    container.scrollHeight - content.clientHeight + minVisibleHeight <=
    container.clientHeight;

  return contentVisible;
};
