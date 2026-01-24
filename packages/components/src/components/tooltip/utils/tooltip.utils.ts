/**
 * Builds a string of IDs to be used as the value for the aria-describedby or aria-labelledby attribute
 *
 * @param options - Configuration object
 * @param options.hasTitle - Whether the tooltip has a title
 * @param options.hasContent - Whether the tooltip has content
 * @param options.titleId - ID of the title element
 * @param options.contentId - ID of the content element
 * @returns String with valid IDs separated by spaces or undefined if there are no valid IDs
 */
export const getAriaDescriptorsBy = ({
  contentId,
  hasContent,
  hasTitle,
  titleId,
}: {
  hasTitle?: boolean;
  hasContent?: boolean;
  titleId?: string;
  contentId?: string;
}): string | undefined => {
  const validIds = [hasTitle && titleId, hasContent && contentId].filter(
    Boolean,
  );

  return validIds.length > 0 ? validIds.join(' ').trim() : undefined;
};
