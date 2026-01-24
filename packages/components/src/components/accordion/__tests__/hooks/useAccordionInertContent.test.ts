import { fireEvent, renderHook } from '@testing-library/react';

import { useAccordionInertContent } from '../../hooks/useAccordionInertContent';

describe('useAccordionInertContent', () => {
  let containerElement: HTMLDivElement;
  let contentElement: HTMLDivElement;

  let ref: React.RefObject<HTMLDivElement>;

  beforeEach(() => {
    containerElement = document.createElement('div');
    contentElement = document.createElement('div');
    contentElement.setAttribute('data-kbt-accordion-content', '');

    containerElement.appendChild(contentElement);
    document.body.appendChild(containerElement);

    ref = { current: containerElement };
  });

  it('does not handle inert if some component is not present', () => {
    contentElement.remove();
    renderHook(() => useAccordionInertContent({ expanded: true, ref }));
    fireEvent.transitionEnd(containerElement);
    expect(contentElement.getAttribute('inert')).toBe(null);
  });

  it('sets inert attribute if expanded', () => {
    renderHook(() => useAccordionInertContent({ expanded: true, ref }));
    expect(contentElement.getAttribute('inert')).toBe(null);
  });

  it('does not set innert attribute if collapsed', () => {
    renderHook(() => useAccordionInertContent({ expanded: false, ref }));
    expect(contentElement.getAttribute('inert')).not.toBe(null);
  });
});
