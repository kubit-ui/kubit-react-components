/**
 * Represents the container and content elements for visibility detection.
 */
export interface ElementsType {
  /** The container element that wraps the content */
  container: HTMLElement | null | undefined;
  /** The content element whose visibility is being monitored */
  content: HTMLElement | null | undefined;
}

/**
 * Return type for the useContentVisibility hook.
 */
export interface UseContentVisibilityReturnType {
  /**
   * Function to initialize visibility detection for the given container and content elements.
   * @param elements - Object containing the container and content elements
   */
  handleContentVisibility: ({ container, content }: ElementsType) => void;
}

/**
 * Configuration parameters for the useContentVisibility hook.
 */
export interface UseContentVisibilityParamsType {
  /**
   * Minimum height (in pixels) required for content to be considered visible.
   * @default 100
   */
  minVisibleHeight?: number;

  /**
   * Optional callback invoked when content becomes visible.
   * If not provided, default behavior clears overflow styles on container and content.
   */
  onContentVisible?: () => void;

  /**
   * Optional callback invoked when content becomes invisible.
   * If not provided, default behavior sets `overflowY: auto` on container and `overflowY: visible` on content.
   */
  onContentInvisible?: () => void;
}
