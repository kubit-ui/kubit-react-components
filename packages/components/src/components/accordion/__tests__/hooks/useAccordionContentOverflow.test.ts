import { fireEvent, renderHook } from '@testing-library/react';

import { useAccordionContentOverflow } from '../../hooks/useAccordionContentOverflow';

describe('useAccordionContentOverflow', () => {
  let containerElement: HTMLDivElement;
  let contentElement: HTMLDivElement;
  let innerContentElement: HTMLDivElement;

  let ref: React.RefObject<HTMLDivElement>;

  beforeEach(() => {
    containerElement = document.createElement('div');
    contentElement = document.createElement('div');
    contentElement.setAttribute('data-kbt-accordion-content', '');
    innerContentElement = document.createElement('div');
    innerContentElement.setAttribute('data-kbt-accordion-content-inner', '');

    containerElement.appendChild(contentElement);
    contentElement.appendChild(innerContentElement);
    document.body.appendChild(containerElement);

    ref = { current: containerElement };
  });

  it('does not handle overflow if some component is not present', () => {
    innerContentElement.remove();
    renderHook(() => useAccordionContentOverflow({ expanded: true, ref }));
    fireEvent.transitionEnd(containerElement);
    expect(contentElement.style.overflow).toBe('');
  });

  it('does initialize overflow to visible if initially expanded', () => {
    renderHook(() => useAccordionContentOverflow({ expanded: true, ref }));
    expect(contentElement.style.overflow).toBe('visible');
  });

  it('does initialize overflow to hidden if initially collapsed', () => {
    renderHook(() => useAccordionContentOverflow({ expanded: false, ref }));
    expect(contentElement.style.overflow).toBe('hidden');
  });

  it('sets overflow as hidden after initialization, when expading or collapsing the container', () => {
    const { rerender } = renderHook(useAccordionContentOverflow, {
      initialProps: { expanded: false, ref },
    });

    rerender({ expanded: true, ref });
    expect(contentElement.style.overflow).toBe('hidden');
  });

  it('sets overflow as visible if after transition ends the content is expanded', () => {
    const { rerender } = renderHook(useAccordionContentOverflow, {
      initialProps: { expanded: false, ref },
    });

    rerender({ expanded: true, ref });

    fireEvent.transitionEnd(contentElement);

    expect(contentElement.style.overflow).toBe('visible');
  });

  it('sets overflow as hidden if after transition ends the content is collapsed', () => {
    const { rerender } = renderHook(useAccordionContentOverflow, {
      initialProps: { expanded: true, ref },
    });

    rerender({ expanded: false, ref });

    fireEvent.transitionEnd(contentElement);

    expect(contentElement.style.overflow).toBe('hidden');
  });
});
