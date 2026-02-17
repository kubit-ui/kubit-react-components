import { useCallback, useRef } from 'react';

import type {
  ElementsType,
  UseContentVisibilityParamsType,
  UseContentVisibilityReturnType,
} from './types/useContentVisibility';

import { isContentVisibleEnough } from './utils/contentVisibility';

/**
 * Custom React hook to manage and detect content visibility within a container.
 * This hook combines visibility detection with automatic overflow management.
 *
 * This hook monitors the visibility of content within a container using ResizeObserver
 * and automatically adjusts overflow styles based on whether the content is visible enough.
 *
 * @param params - Configuration options for the hook
 * @param params.minVisibleHeight - Minimum height (in pixels) required for content to be considered visible. Default: 100
 * @param params.onContentVisible - Optional callback invoked when content becomes visible
 * @param params.onContentInvisible - Optional callback invoked when content becomes invisible
 *
 * @returns Object containing the `handleContentVisibility` function
 *
 * @remarks
 * **Default Behavior:**
 * - When content is visible: Both container and content `overflowY` styles are cleared
 * - When content is invisible: Container gets `overflowY: auto`, content gets `overflowY: visible`
 *
 * **Custom Callbacks:**
 * - Provide `onContentVisible` and `onContentInvisible` to override default behavior
 * - Callbacks are triggered only when visibility state changes
 *
 * **Performance:**
 * - Uses ResizeObserver API to efficiently monitor size changes
 * - Automatically cleans up observers when elements are unmounted
 *
 * @example
 * **Basic usage with default overflow management:**
 * ```tsx
 * const { handleContentVisibility } = useContentVisibility({
 *   minVisibleHeight: 150
 * });
 *
 * useEffect(() => {
 *   const container = containerRef.current;
 *   const content = contentRef.current;
 *   if (container && content) {
 *     handleContentVisibility({ container, content });
 *   }
 * }, [handleContentVisibility]);
 * ```
 *
 * @example
 * **Custom visibility callbacks:**
 * ```tsx
 * const { handleContentVisibility } = useContentVisibility({
 *   minVisibleHeight: 200,
 *   onContentVisible: () => console.log('Content is now visible'),
 *   onContentInvisible: () => console.log('Content is now hidden')
 * });
 * ```
 */
export const useContentVisibility = ({
  minVisibleHeight = 100,
  onContentInvisible,
  onContentVisible,
}: UseContentVisibilityParamsType): UseContentVisibilityReturnType => {
  const containerRef = useRef<HTMLElement | null | undefined>(null);
  const contentRef = useRef<HTMLElement | null | undefined>(null);
  const resizeContentObserverRef = useRef<ResizeObserver | undefined>(
    undefined,
  );
  const resizeContainerObserverRef = useRef<ResizeObserver | undefined>(
    undefined,
  );
  const isContentVisibleRef = useRef<boolean | undefined>(undefined);

  const handleContentVisible = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) {
      return;
    }

    // Use custom callback if provided, otherwise apply default styles
    if (onContentVisible) {
      onContentVisible();
    } else {
      container.style.overflowY = '';
      content.style.overflowY = '';
    }
  }, [onContentVisible]);

  const handleContentInvisible = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) {
      return;
    }

    // Use custom callback if provided, otherwise apply default styles
    if (onContentInvisible) {
      onContentInvisible();
    } else {
      container.style.overflowY = 'auto';
      content.style.overflowY = 'visible';
    }
  }, [onContentInvisible]);

  const handleContentVisibility = useCallback(
    ({ container, content }: ElementsType) => {
      containerRef.current = container;
      contentRef.current = content;

      if (container && content) {
        const handleInnerContentResize = () => {
          const isContentVisible = isContentVisibleEnough({
            container,
            content,
            minVisibleHeight,
          });

          // Only trigger callbacks if visibility state has changed
          if (isContentVisible !== isContentVisibleRef.current) {
            if (isContentVisible) {
              handleContentVisible();
            } else {
              handleContentInvisible();
            }
          }
          isContentVisibleRef.current = isContentVisible;
        };

        // Initial check
        handleInnerContentResize();

        // Set up observers for both container and content
        resizeContentObserverRef.current = new ResizeObserver(() => {
          handleInnerContentResize();
        });
        resizeContainerObserverRef.current = new ResizeObserver(() => {
          handleInnerContentResize();
        });

        resizeContentObserverRef.current.observe(content);
        resizeContentObserverRef.current.observe(container);
      } else {
        // Clean up observers when elements are null
        resizeContentObserverRef.current?.disconnect();
        resizeContainerObserverRef.current?.disconnect();
      }
    },
    [minVisibleHeight, handleContentVisible, handleContentInvisible],
  );

  return { handleContentVisibility };
};
