import { useCallback, useRef } from 'react';

import { ResizeObserver } from '@/lib/utils/resizeObserver/resizeObserver';

import type {
  ElementsType,
  UseContentVisibilityDetectionParamsType,
  UseContentVisibilityDetectionReturnType,
} from './types/useContentVisibilityDetection';

import { isContentVisibleEnough } from './utils/contentVisibility';

/**
 * Custom React hook to detect and manage the visibility of content within a container.
 *
 * @param minVisibleHeight - The minimum height (in pixels) required for the content to be considered visible.
 * @param onContentInvisible - A callback function triggered when the content becomes invisible.
 * @param onContentVisible - A callback function triggered when the content becomes visible.
 *
 * @returns An object containing the `handleContentVisibilityDetection` function, which observes and manages the visibility of the content.
 *
 * @remarks
 * - This hook uses the `ResizeObserver` API to monitor changes in the size of the container and content elements.
 * - It determines whether the content is visible enough based on the `minVisibleHeight` parameter.
 * - When visibility changes are detected, the appropriate callback (`onContentVisible` or `onContentInvisible`) is triggered.
 * - The hook ensures that observers are properly disconnected when the elements are no longer observed.
 */
export const useContentVisibilityDetection = ({
  minVisibleHeight,
  onContentInvisible,
  onContentVisible,
}: UseContentVisibilityDetectionParamsType): UseContentVisibilityDetectionReturnType => {
  const resizeContentObserverRef = useRef<ResizeObserver>();
  const resizeContainerObserverRef = useRef<ResizeObserver>();

  const isContentVisibleRef = useRef<boolean | undefined>(undefined);

  const handleContentVisibilityDetection = useCallback(
    ({ container, content }: ElementsType) => {
      if (container && content) {
        const handleInnerContentResize = () => {
          const isContentVisible = isContentVisibleEnough({
            container,
            content,
            minVisibleHeight,
          });
          if (isContentVisible !== isContentVisibleRef.current) {
            if (isContentVisible) {
              onContentVisible?.();
            } else {
              onContentInvisible?.();
            }
          }
          isContentVisibleRef.current = isContentVisible;
        };

        handleInnerContentResize();
        resizeContentObserverRef.current = new ResizeObserver(() => {
          handleInnerContentResize();
        });
        resizeContainerObserverRef.current = new ResizeObserver(() => {
          handleInnerContentResize();
        });
        resizeContentObserverRef.current.observe(content);
        resizeContentObserverRef.current.observe(container);
      } else {
        resizeContentObserverRef.current?.disconnect();
        resizeContainerObserverRef.current?.disconnect();
      }
    },
    [onContentVisible, onContentInvisible, minVisibleHeight],
  );

  return { handleContentVisibilityDetection };
};
