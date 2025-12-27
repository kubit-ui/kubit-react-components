import { useCallback, useRef } from 'react';

import type {
  ElementsType,
  UseContentVisibilityParamsType,
  UseContentVisibilityReturnType,
} from './types/useContentVisibility';

import { useContentVisibilityDetection } from '../useContentVisibilityDetection/useContentVisibilityDetection';

/**
 * Custom React hook to manage the visibility of content within a container.
 *
 * @param minVisibleHeight - The minimum height (in pixels) required for the content to be considered visible. Defaults to `100`.
 * @returns An object containing the `handleContentVisibility` function, which detects and manages the visibility of the content.
 *
 * @remarks
 * - This hook is useful for managing content visibility in scrollable containers, such as dynamically adjusting styles based on whether the content is fully visible or partially hidden.
 * - It uses the `useContentVisibilityDetection` hook to detect visibility changes and applies appropriate styles to the container and content elements.
 * - When the content becomes visible, the container's `overflowY` style is cleared, and the content's `overflowY` style is cleared.
 * - When the content becomes invisible, the container's `overflowY` style is set to `auto`, and the content's `overflowY` style is set to `visible`.
 *
 * @example
 * ```typescript
 * import { useContentVisibility } from './useContentVisibility';
 *
 * const MyComponent = () => {
 *   const { handleContentVisibility } = useContentVisibility({ minVisibleHeight: 150 });
 *
 *   useEffect(() => {
 *     const container = document.getElementById('container');
 *     const content = document.getElementById('content');
 *     if (container && content) {
 *       handleContentVisibility({ container, content });
 *     }
 *   }, [handleContentVisibility]);
 *
 *   return (
 *     <div id="container" style={{ height: '200px', overflow: 'hidden' }}>
 *       <div id="content" style={{ height: '300px' }}>
 *         Content goes here
 *       </div>
 *     </div>
 *   );
 * };
 * ```
 */
export const useContentVisibility = ({
  minVisibleHeight = 100,
}: UseContentVisibilityParamsType): UseContentVisibilityReturnType => {
  const containerRef = useRef<HTMLElement | null | undefined>(null);
  const contentRef = useRef<HTMLElement | null | undefined>(null);

  const handleContentVisible = () => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) {
      return;
    }
    container.style.overflowY = '';
    content.style.overflowY = '';
  };

  const handleContentInvisible = () => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) {
      return;
    }
    container.style.overflowY = 'auto';
    content.style.overflowY = 'visible';
  };

  const { handleContentVisibilityDetection } = useContentVisibilityDetection({
    minVisibleHeight,
    onContentInvisible: handleContentInvisible,
    onContentVisible: handleContentVisible,
  });

  const handleContentVisibility = useCallback(
    ({ container, content }: ElementsType) => {
      containerRef.current = container;
      contentRef.current = content;
      handleContentVisibilityDetection({ container, content });
    },
    [handleContentVisibilityDetection],
  );

  return { handleContentVisibility };
};
