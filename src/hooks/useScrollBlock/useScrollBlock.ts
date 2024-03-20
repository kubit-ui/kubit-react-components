import { useCallback, useRef } from 'react';

import { getFirstScrollableElement } from './utils';

type BlockScrollParamsType = {
  elementsToOmit?: (HTMLElement | null)[];
};

type ReturnType = {
  blockScroll: (params?: BlockScrollParamsType) => void;
  allowScroll: () => void;
};

type ParamsType = {
  elementsToOmit?: (HTMLElement | null)[];
};

export const useScrollBlock = (): ReturnType => {
  const blockedScroll = useRef(false);
  const elementsToOmitRef = useRef<(HTMLElement | null)[]>([]);

  // Disable scroll in all the elements except the ones that are passed in the elementsToOmit array when blocking scroll
  const preventScrollOnUnomittedElements = useCallback((e: TouchEvent) => {
    const target = e.target;
    if (
      target instanceof Node &&
      !elementsToOmitRef.current.some(element => element?.contains(target))
    ) {
      e.preventDefault();
    }
  }, []);

  // Disable scroll in the omitted elements if is not a scrollable element
  const preventScrollOnOmittedElements = useCallback((e: TouchEvent) => {
    const target = e.target;
    if (
      !(target instanceof Element) ||
      getFirstScrollableElement({ element: target, parentsToStop: elementsToOmitRef.current })
    ) {
      return;
    }
    e.preventDefault();
  }, []);

  // In order to avoid scroll the document when there is no scroll for an omitted element:
  // Allow to scroll a pixel if the scroll is at the top or bottom
  // More info: https://medium.com/turo-engineering/ios-mobile-scroll-in-web-react-1d92d910604b (Level 4)
  const preventScrollBackgroundOnOmittedElements = useCallback((e: TouchEvent) => {
    const target = e.target;
    if (!(target instanceof Element)) {
      return;
    }
    const firstScrollableElement = getFirstScrollableElement({
      element: target,
      parentsToStop: elementsToOmitRef.current,
    });
    if (!firstScrollableElement) {
      return;
    }
    const { scrollTop, scrollHeight } = firstScrollableElement;
    let offsetHeight: number | null = null;
    if (firstScrollableElement instanceof HTMLElement) {
      offsetHeight = firstScrollableElement.offsetHeight;
    }
    // If at top, bump down 1px
    if (scrollTop <= 0) {
      firstScrollableElement.scrollTo(0, 1);
      return;
    }

    // If at bottom, bump up 1px
    if (offsetHeight !== null && scrollTop + offsetHeight >= scrollHeight) {
      firstScrollableElement.scrollTo(0, scrollHeight - offsetHeight - 1);
    }
  }, []);

  const blockScroll = ({ elementsToOmit = [] }: ParamsType = {}) => {
    if (typeof document === 'undefined') {
      return;
    }

    const html = document.documentElement;
    const { body } = document;

    if (!body || !body.style || blockedScroll.current) {
      return;
    }

    elementsToOmitRef.current = elementsToOmit;

    elementsToOmitRef.current.forEach(element => {
      element?.addEventListener('touchmove', preventScrollOnOmittedElements, { passive: false });
      element?.addEventListener('touchstart', preventScrollBackgroundOnOmittedElements);
    });
    document.addEventListener('touchmove', preventScrollOnUnomittedElements, { passive: false });

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(window.getComputedStyle(body).getPropertyValue('padding-right'), 10) || 0;

    html.style.position = 'relative'; /* [1] */
    body.style.position = 'relative'; /* [1] */
    html.style.overflow = 'clip'; /* [2] */
    body.style.overflow = 'clip'; /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    blockedScroll.current = true;
  };

  const allowScroll = () => {
    if (typeof document === 'undefined') {
      return;
    }

    const html = document.documentElement;
    const { body } = document;

    if (!body || !body.style || !blockedScroll.current) {
      return;
    }

    elementsToOmitRef.current.forEach(element => {
      element?.removeEventListener('touchmove', preventScrollOnOmittedElements);
      element?.removeEventListener('touchstart', preventScrollBackgroundOnOmittedElements);
    });
    document.removeEventListener('touchmove', preventScrollOnUnomittedElements);

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    blockedScroll.current = false;
  };

  return { blockScroll, allowScroll };
};
