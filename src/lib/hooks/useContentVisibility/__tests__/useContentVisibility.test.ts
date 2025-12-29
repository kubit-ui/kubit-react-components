import { renderHook } from '@testing-library/react';

import { useContentVisibility } from '../useContentVisibility';
import * as contentVisibilityUtils from '../utils/contentVisibility';

describe('useContentVisibility', () => {
  let container: HTMLDivElement;
  let content: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    content = document.createElement('div');

    container.appendChild(content);

    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Default behavior (without custom callbacks)', () => {
    it('Should set container overflow to auto, and content overflow to visible when content is not visible', () => {
      vi.spyOn(
        contentVisibilityUtils,
        'isContentVisibleEnough',
      ).mockReturnValue(false);
      const { result } = renderHook(() => useContentVisibility({}));
      result.current.handleContentVisibility({ container, content });
      expect(container.style.overflowY).toBe('auto');
      expect(content.style.overflowY).toBe('visible');
    });

    it('Should set container overflow to default, and content overflow to default when content visible', () => {
      vi.spyOn(
        contentVisibilityUtils,
        'isContentVisibleEnough',
      ).mockReturnValue(true);
      const { result } = renderHook(() => useContentVisibility({}));
      result.current.handleContentVisibility({ container, content });
      expect(container.style.overflowY).toBe('');
      expect(content.style.overflowY).toBe('');
    });
  });

  describe('Custom callbacks behavior', () => {
    it('Should call onContentVisible callback when content becomes visible', () => {
      const onContentVisible = vi.fn();
      const onContentInvisible = vi.fn();

      vi.spyOn(
        contentVisibilityUtils,
        'isContentVisibleEnough',
      ).mockReturnValue(true);

      const { result } = renderHook(() =>
        useContentVisibility({
          onContentInvisible,
          onContentVisible,
        }),
      );

      result.current.handleContentVisibility({ container, content });

      expect(onContentVisible).toHaveBeenCalledTimes(1);
      expect(onContentInvisible).not.toHaveBeenCalled();
      // Default styles should not be applied when custom callback is provided
      expect(container.style.overflowY).toBe('');
      expect(content.style.overflowY).toBe('');
    });

    it('Should call onContentInvisible callback when content becomes invisible', () => {
      const onContentVisible = vi.fn();
      const onContentInvisible = vi.fn();

      vi.spyOn(
        contentVisibilityUtils,
        'isContentVisibleEnough',
      ).mockReturnValue(false);

      const { result } = renderHook(() =>
        useContentVisibility({
          onContentInvisible,
          onContentVisible,
        }),
      );

      result.current.handleContentVisibility({ container, content });

      expect(onContentInvisible).toHaveBeenCalledTimes(1);
      expect(onContentVisible).not.toHaveBeenCalled();
      // Default styles should not be applied when custom callback is provided
      expect(container.style.overflowY).toBe('');
      expect(content.style.overflowY).toBe('');
    });

    it('Should only trigger callbacks when visibility state changes', () => {
      const onContentVisible = vi.fn();
      const onContentInvisible = vi.fn();

      const isVisibleSpy = vi
        .spyOn(contentVisibilityUtils, 'isContentVisibleEnough')
        .mockReturnValue(true);

      const { result } = renderHook(() =>
        useContentVisibility({
          onContentInvisible,
          onContentVisible,
        }),
      );

      // First call - should trigger callback
      result.current.handleContentVisibility({ container, content });
      expect(onContentVisible).toHaveBeenCalledTimes(1);

      // Second call with same visibility state - should not trigger callback again
      result.current.handleContentVisibility({ container, content });
      expect(onContentVisible).toHaveBeenCalledTimes(1);

      // Change visibility state
      isVisibleSpy.mockReturnValue(false);
      result.current.handleContentVisibility({ container, content });
      expect(onContentInvisible).toHaveBeenCalledTimes(1);

      // Same state again - should not trigger
      result.current.handleContentVisibility({ container, content });
      expect(onContentInvisible).toHaveBeenCalledTimes(1);
    });
  });

  describe('Custom minVisibleHeight', () => {
    it('Should pass custom minVisibleHeight to visibility check', () => {
      const isVisibleSpy = vi.spyOn(
        contentVisibilityUtils,
        'isContentVisibleEnough',
      );

      const customHeight = 250;
      const { result } = renderHook(() =>
        useContentVisibility({ minVisibleHeight: customHeight }),
      );

      result.current.handleContentVisibility({ container, content });

      expect(isVisibleSpy).toHaveBeenCalledWith({
        container,
        content,
        minVisibleHeight: customHeight,
      });
    });
  });
});
