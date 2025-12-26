import { renderHook } from '@testing-library/react';

import * as contentVisibilityUtils from '../../useContentVisibilityDetection/utils/contentVisibility';
import { useContentVisibility } from '../useContentVisibility';

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

  it('Should set container overflow to auto, and content overflow to visible when content is not visible', () => {
    vi.spyOn(contentVisibilityUtils, 'isContentVisibleEnough').mockReturnValue(
      false,
    );
    const { result } = renderHook(() => useContentVisibility({}));
    result.current.handleContentVisibility({ container, content });
    expect(container.style.overflowY).toBe('auto');
    expect(content.style.overflowY).toBe('visible');
  });

  it('Should set container overflow to default, and content overflow to default when content visible', () => {
    vi.spyOn(contentVisibilityUtils, 'isContentVisibleEnough').mockReturnValue(
      true,
    );
    const { result } = renderHook(() => useContentVisibility({}));
    result.current.handleContentVisibility({ container, content });
    expect(container.style.overflowY).toBe('');
    expect(content.style.overflowY).toBe('');
  });
});
