import { renderHook } from '@testing-library/react';

import { useContentVisibilityDetection } from '../useContentVisibilityDetection';
import * as contentVisibilityUtils from '../utils/contentVisibility';

describe('useContentVisibilityDetection', () => {
  let container: HTMLDivElement;
  let content: HTMLDivElement;
  const minVisibleHeight = 100;

  beforeEach(() => {
    container = document.createElement('div');
    content = document.createElement('div');

    container.appendChild(content);

    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('Should execute onContentVisible when contentIsVisible', () => {
    const handleContentVisible = vi.fn();
    const handleContentInvisible = vi.fn();
    vi.spyOn(contentVisibilityUtils, 'isContentVisibleEnough').mockReturnValue(
      true,
    );
    const { result } = renderHook(() =>
      useContentVisibilityDetection({
        minVisibleHeight,
        onContentInvisible: handleContentInvisible,
        onContentVisible: handleContentVisible,
      }),
    );
    result.current.handleContentVisibilityDetection({ container, content });
    expect(handleContentVisible).toHaveBeenCalled();
  });

  it('Should execute onContentInvisible when no contentIsVisible', () => {
    const handleContentVisible = vi.fn();
    const handleContentInvisible = vi.fn();
    vi.spyOn(contentVisibilityUtils, 'isContentVisibleEnough').mockReturnValue(
      false,
    );
    const { result } = renderHook(() =>
      useContentVisibilityDetection({
        minVisibleHeight,
        onContentInvisible: handleContentInvisible,
        onContentVisible: handleContentVisible,
      }),
    );
    result.current.handleContentVisibilityDetection({ container, content });
    expect(handleContentInvisible).toHaveBeenCalled();
  });

  it('Should destroy observers when no container or content', () => {
    const handleContentVisible = vi.fn();
    const handleContentInvisible = vi.fn();
    const { result } = renderHook(() =>
      useContentVisibilityDetection({
        minVisibleHeight,
        onContentInvisible: handleContentInvisible,
        onContentVisible: handleContentVisible,
      }),
    );
    result.current.handleContentVisibilityDetection({
      container: null,
      content: null,
    });
    expect(handleContentVisible).not.toHaveBeenCalled();
    expect(handleContentInvisible).not.toHaveBeenCalled();
  });
});
