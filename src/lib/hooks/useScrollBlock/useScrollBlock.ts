import { useCallback, useRef } from 'react';

import type { BlockScrollParamsType, ParamsType } from './types/useScrollBlock';
import { getFirstScrollableElement } from './utils/useScrollBlock.utils';

/**
 * A custom React hook to block and allow scrolling on the document body and specific elements.
 * This is particularly useful for managing scroll behavior in modals, sidebars, or other UI components
 * where background scrolling needs to be disabled while allowing specific elements to scroll.
 *
 * @returns {Object} An object containing two functions:
 * - `blockScroll`: Blocks scrolling on the document body and optionally allows scrolling on specific elements.
 * - `allowScroll`: Restores scrolling on the document body and removes any applied restrictions.
 *
 * @example
 * const { blockScroll, allowScroll } = useScrollBlock();
 *
 * // Block scrolling
 * blockScroll({ elementsToOmit: [modalRef.current] });
 *
 * // Allow scrolling
 * allowScroll();
 */
export const useScrollBlock = (): {
  blockScroll: (params?: BlockScrollParamsType) => void;
  allowScroll: () => void;
} => {
  const elementsToOmitRef = useRef<(HTMLElement | null)[]>([]);

  // Disable scroll in all the elements except the ones that are passed in the elementsToOmit array when blocking scroll
  const preventScrollOnUnomittedElements = useCallback((e: TouchEvent) => {
    const target = e.target;
    if (
      target instanceof Node &&
      !elementsToOmitRef.current.some((element) => element?.contains(target))
    ) {
      e.preventDefault();
    }
  }, []);

  // Disable scroll in the omitted elements if is not a scrollable element
  const preventScrollOnOmittedElements = useCallback((e: TouchEvent) => {
    const target = e.target;
    if (
      !(target instanceof Element) ||
      getFirstScrollableElement({
        element: target,
        parentsToStop: elementsToOmitRef.current,
      })
    ) {
      return;
    }
    e.preventDefault();
  }, []);

  // In order to avoid scroll the document when there is no scroll for an omitted element:
  // Allow to scroll a pixel if the scroll is at the top or bottom
  // More info: https://medium.com/turo-engineering/ios-mobile-scroll-in-web-react-1d92d910604b (Level 4)
  const preventScrollBackgroundOnOmittedElements = useCallback(
    (e: TouchEvent) => {
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
      const { scrollHeight, scrollTop } = firstScrollableElement;
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
    },
    [],
  );

  const blockScroll = useCallback(
    ({ elementsToOmit = [] }: ParamsType = {}) => {
      if (typeof document === 'undefined') {
        return;
      }

      const html = document.documentElement;
      const { body } = document;

      if (!body || !body.style) {
        return;
      }

      const elementsWithBlockers = body.getAttribute('data-scroll-blocked');

      if (elementsWithBlockers) {
        const numberOfBlockers = Number(elementsWithBlockers) + 1;
        body.setAttribute('data-scroll-blocked', String(numberOfBlockers));
      } else {
        body.setAttribute('data-scroll-blocked', '1');
      }

      elementsToOmitRef.current = elementsToOmit;

      elementsToOmitRef.current.forEach((element) => {
        element?.addEventListener('touchmove', preventScrollOnOmittedElements, {
          passive: false,
        });
        element?.addEventListener(
          'touchstart',
          preventScrollBackgroundOnOmittedElements,
        );
      });
      document.addEventListener('touchmove', preventScrollOnUnomittedElements, {
        passive: false,
      });

      const scrollBarWidth = window.innerWidth - html.clientWidth;
      const bodyPaddingRight =
        parseInt(
          window.getComputedStyle(body).getPropertyValue('padding-right'),
          10,
        ) || 0;

      body.style.position = 'relative'; /* [1] */
      body.style.overflow = 'hidden'; /* [2] */
      body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    },
    [],
  );

  const allowScroll = useCallback(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const { body } = document;

    if (!body || !body.style) {
      return;
    }

    const elementsWithBlockers = body.getAttribute('data-scroll-blocked');

    let haveMoreBlockers = false;
    if (elementsWithBlockers) {
      const numberOfBlockers = Number(elementsWithBlockers) - 1;
      if (numberOfBlockers === 0) {
        body.removeAttribute('data-scroll-blocked');
      } else {
        body.setAttribute('data-scroll-blocked', String(numberOfBlockers));
        haveMoreBlockers = true;
      }
    }

    elementsToOmitRef.current.forEach((element) => {
      element?.removeEventListener('touchmove', preventScrollOnOmittedElements);
      element?.removeEventListener(
        'touchstart',
        preventScrollBackgroundOnOmittedElements,
      );
    });
    document.removeEventListener('touchmove', preventScrollOnUnomittedElements);

    // Only delete styles if there are no more blockers
    if (haveMoreBlockers) {
      return;
    }

    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';
  }, []);

  return { allowScroll, blockScroll };
};
