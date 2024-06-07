/* eslint-disable complexity */
import * as React from 'react';

import { useScrollBlock } from '@/hooks/useScrollBlock/useScrollBlock';
import {
  focusElementOrFirstDescendant,
  focusNextFocusableElement,
  focusPreviousFocusableElement,
} from '@/utils';

import { CarouselAlignType } from '../types';
// carousel utils
import {
  calcNumElementsPerPage,
  calcNumPages,
  calcXDistanceBetween2Elements,
  getFirstAndLastIndexInCarouselView,
  hideArrowsAndPagination,
  showArrowsAndPagination,
} from '../utils';

interface IUseCarousel {
  carouselContainerRef: React.RefObject<HTMLDivElement>;
  carouselContentRef: React.RefObject<HTMLDivElement>;
  circular: boolean;
  centerMode: boolean;
  extraPadding?: number;
  elements: JSX.Element[];
  numElementsPerPage?: number;
  numElementsToSlide?: number;
  defaultPage: number;
  onePageAlign?: CarouselAlignType;
  disableSwipe: boolean;
  allowModifySliceWidth: boolean;
  centerExtremesWhenExtraPadding?: boolean;
  onRightSwipe: () => void;
  onLeftSwipe: () => void;
  onTransition?: (active: boolean) => void;
}

export interface IUseCarouselResponse {
  handlePageChange: (increment: number, animation?: boolean) => void;
  allowShift: React.MutableRefObject<boolean>;
  numPages: number;
  innerCurrentPage: React.MutableRefObject<number>;
}

const PROPERTY_NAME_TO_HANDLE_TRANSITION_END = 'left';
const THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING = 20;
const THRESHOLD_TO_DECIDE_IF_SWIPE_ON_DRAG_ENDS = 0;

export const useCarousel = ({
  carouselContainerRef,
  carouselContentRef,
  circular,
  centerMode,
  extraPadding,
  elements,
  numElementsPerPage: numElementsPerPageProp,
  numElementsToSlide,
  defaultPage,
  onePageAlign = CarouselAlignType.CENTER,
  disableSwipe,
  allowModifySliceWidth,
  centerExtremesWhenExtraPadding,
  onRightSwipe,
  onLeftSwipe,
  onTransition,
}: IUseCarousel): IUseCarouselResponse => {
  const index = React.useRef(defaultPage);
  const allowShift = React.useRef(true);
  const numElementsPerPage = React.useRef<number | undefined>(numElementsPerPageProp);
  const [numPagesState, setNumPagesState] = React.useState(
    numElementsPerPageProp
      ? calcNumPages({
          elementsLength: elements.length,
          numElementsPerPage: numElementsPerPageProp,
          numElementsToSlide,
        })
      : 0
  );
  // We need the ref to avoid update when the state has not changed
  const numPagesRef = React.useRef(
    numElementsPerPageProp
      ? calcNumPages({
          elementsLength: elements.length,
          numElementsPerPage: numElementsPerPageProp,
          numElementsToSlide,
        })
      : 0
  );

  // Initialize carousel position
  const caouselInitialized = React.useRef(false);
  const initializeCarousel = () => {
    caouselInitialized.current = false;
    const carouselContainer = carouselContainerRef.current;
    const carouselContent = carouselContentRef.current;
    if (!carouselContainer || !carouselContent || !numElementsPerPage.current) {
      return;
    }

    // When allow update slides width, the container will be 100%, and the slides width will be calculated atteding to the container width and the numElementsPerPage
    if (allowModifySliceWidth) {
      carouselContainer.style.width = '100%';

      // Calc slice width having in mind the gap between the slices and the extraPadding
      let gap = 0;
      if (carouselContent.childNodes.length > 2) {
        const firstElement = carouselContent.childNodes[0] as HTMLEmbedElement;
        const secondElement = carouselContent.childNodes[1] as HTMLEmbedElement;
        // Delete scale when center mode to calc the gap between elements
        if (centerMode && firstElement.style && secondElement.style) {
          firstElement.style.transition = 'none';
          secondElement.style.transition = 'none';
          firstElement.style.transform = 'scale(1)';
          secondElement.style.transform = 'scale(1)';
        }
        const right = firstElement?.getBoundingClientRect()?.right as number | undefined;
        const left = secondElement?.getBoundingClientRect()?.left as number | undefined;
        if (centerMode && firstElement.style && secondElement.style) {
          firstElement.style.removeProperty('transform');
          secondElement.style.removeProperty('transform');
          // Trigger a reflow, flushing the CSS changes, avoiding transition effect
          firstElement.offsetHeight;
          secondElement.offsetHeight;
          firstElement.style.removeProperty('transition');
          secondElement.style.removeProperty('transition');
        }
        if (right !== undefined && left !== undefined) {
          gap = Math.abs(right - left);
        }
      }
      const gapSpace = (numElementsPerPage.current - 1) * gap;
      const sliceWidth =
        (carouselContainer.getBoundingClientRect().width -
          gapSpace -
          (extraPadding ? 2 * extraPadding : 0)) /
        numElementsPerPage.current;

      // Use the width calculated for each slice
      for (let i = 0; i < carouselContent.childNodes.length; i++) {
        const child = carouselContent.childNodes[i] as HTMLElement;
        if (child.style) {
          child.style.width = `${sliceWidth}px`;
        }
      }
    }

    // If is circular, then clone the first and last numElementsPerPage at first and end of the carusel
    // This will create a effect of infinitive carousel
    // Delete current nodes if already cloned
    if (carouselContent.children.length > elements.length) {
      const elementsClonedToEachSide = (carouselContent.children.length - elements.length) / 2;
      for (let i = 0; i < elementsClonedToEachSide; i++) {
        if (carouselContent.firstElementChild) {
          carouselContent.removeChild(carouselContent.firstElementChild);
        }
        if (carouselContent.lastElementChild) {
          carouselContent.removeChild(carouselContent.lastElementChild);
        }
      }
    }
    if (circular && elements.length > numElementsPerPage.current) {
      const listCloneFirst: Node[] = [];
      const listCloneLast: Node[] = [];
      const numElements = carouselContent.children.length;
      // +1 in case of extra padding
      const numElementsToClone = numElementsPerPage.current + 1;
      for (let i = 0; i < numElementsToClone; i++) {
        const nodeFirst = carouselContent.children[i];
        if (nodeFirst) {
          listCloneFirst.push(nodeFirst.cloneNode(true));
        }
        const nodeLast = carouselContent.children[numElements - 1 - i];
        if (nodeLast) {
          listCloneLast.push(nodeLast.cloneNode(true));
        }
      }
      // Add list clone first to the children array (at the back)
      listCloneFirst.forEach(node => carouselContent.appendChild(node));
      // Add list clone last to the children array (at the front)
      listCloneLast.forEach(node => carouselContent.insertBefore(node, carouselContent.firstChild));
    }
    // Set the page in the right position without animation
    handlePageChange(0, false);
    caouselInitialized.current = true;
  };

  const initializeNumElementsPerPage = () => {
    const carouselContainer = carouselContainerRef.current;
    const carouselContent = carouselContentRef.current;
    if (!carouselContainer || !carouselContent) {
      return;
    }
    // Initialize numElementsperPage
    // If pagination has been hidden due to newNumPages is <= 1, show pagination pagination
    showArrowsAndPagination({ carouselContainer, carouselContent });
    numElementsPerPage.current =
      numElementsPerPageProp ||
      calcNumElementsPerPage({
        carouselContainer,
        carouselContent,
        elementsLength: elements.length,
        extraPadding,
      }) ||
      1;

    const newNumPages = calcNumPages({
      elementsLength: elements.length,
      numElementsPerPage: numElementsPerPage.current,
      numElementsToSlide,
    });
    if (numPagesRef.current !== newNumPages) {
      // Initialize index when numPages change
      index.current = Math.min(Math.max(0, defaultPage), numPagesRef.current - 1);
    }
    numPagesRef.current = newNumPages;
    // If newNumPages <= 1, then hide pagination
    if (numPagesRef.current <= 1) {
      hideArrowsAndPagination({
        carouselContainer,
        carouselContent,
        onePageAlign,
        allowModifySliceWidth,
      });
    }
    setNumPagesState(numPagesRef.current);
  };

  const handleResize = () => {
    initializeNumElementsPerPage();
    // After initialice numElementsPerPage and numPagesRef -> Initialice carousel
    initializeCarousel();
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onePageAlign, numElementsPerPageProp, elements]);

  // In circular carousel will create the effect of infinite
  const handleTransitionEnd = (event: TransitionEvent) => {
    const carouselContent = carouselContentRef.current;
    // Do not continue if the transition ends due to another property that is not left
    if (
      !carouselContent ||
      !numElementsPerPage.current ||
      event.propertyName !== PROPERTY_NAME_TO_HANDLE_TRANSITION_END
    ) {
      return;
    }

    // Delete transition effects
    carouselContent.classList.remove('shifting');
    // Fix index
    if (index.current === numPagesRef.current) {
      // Return to page 0
      // firstIndexInView is the number of elements cloned
      const firstIndexInView = numElementsPerPage.current + 1;
      let distance = calcXDistanceBetween2Elements(
        carouselContent.firstChild as HTMLElement,
        carouselContent.children[firstIndexInView] as HTMLElement
      );
      if (extraPadding) {
        distance -= extraPadding;
      }
      carouselContent.style.left = `${-distance}px`;
      index.current = 0;
    }
    if (index.current === -1) {
      // Return to last page
      const firstIndexInView = elements.length + 1;
      let distance = calcXDistanceBetween2Elements(
        carouselContent.firstChild as HTMLElement,
        carouselContent.children[firstIndexInView] as HTMLElement
      );
      if (extraPadding) {
        distance -= extraPadding;
      }
      carouselContent.style.left = `${-distance}px`;
      index.current = numPagesRef.current - 1;
    }

    // Go through all carousel elements
    // Only the show elements should be visible aria visible
    const { firstIndexInView, lastIndexInView } = getFirstAndLastIndexInCarouselView({
      elementsLength: elements.length,
      numElementsPerPage: numElementsPerPage.current,
      numElementsToSlide,
      currentPage: index.current,
      isCircular: circular,
    });
    for (let i = 0; i < carouselContent.children.length; i++) {
      if (i < firstIndexInView || i > lastIndexInView) {
        carouselContent.children[i].setAttribute('aria-hidden', 'true');
      } else {
        carouselContent.children[i].removeAttribute('aria-hidden');
      }
    }
    // Apply center modo
    if (centerMode && numElementsPerPage.current % 2 !== 0) {
      const hightlightIndex = firstIndexInView + (lastIndexInView - firstIndexInView) / 2;
      carouselContent.children[hightlightIndex].classList.add('highlight');
    }
    allowShift.current = true;
    if (caouselInitialized.current) {
      onTransition?.(false);
    }
  };

  // Variables for the listener
  const isDragging = React.useRef(false);
  const isHorizontalDragging = React.useRef(false);
  const isVerticalDragging = React.useRef(false);
  const posInitial = React.useRef<number | undefined>();
  const posX1 = React.useRef(0);
  const posX2 = React.useRef(0);
  const posXInitial = React.useRef(0);
  const posYInitial = React.useRef(0);

  // Decide during the first INITIAL_MOVE_THRESHOLD if is a horizontal o vertical swipe
  // In order to allow drag and block the scroll or not
  const { allowScroll, blockScroll } = useScrollBlock();

  const dragStart = e => {
    const carouselContent = carouselContentRef.current;
    if (!carouselContent) {
      return;
    }
    e = e || window.event;
    posInitial.current = carouselContent.offsetLeft;

    if (e.type === 'touchstart') {
      posX1.current = e.touches[0].clientX;
      posXInitial.current = e.touches[0].clientX;
      posYInitial.current = e.touches[0].clientY;
    } else {
      posX1.current = e.clientX;
      posXInitial.current = e.clientX;
      posYInitial.current = e.clientY;
    }
    isDragging.current = true;
  };

  const dragAction = e => {
    const carouselContent = carouselContentRef.current;
    if (!carouselContent || !isDragging.current || !numElementsPerPage.current) {
      return;
    }
    e = e || window.event;
    let posXAcc;
    let posYAcc;

    if (e.type === 'touchmove') {
      posX2.current = posX1.current - e.touches[0].clientX;
      posX1.current = e.touches[0].clientX;
      posXAcc = e.touches[0].clientX - posXInitial.current;
      posYAcc = e.touches[0].clientY - posYInitial.current;
    } else {
      posX2.current = posX1.current - e.clientX;
      posX1.current = e.clientX;
      posXAcc = e.clientX - posXInitial.current;
      posYAcc = e.clientY - posYInitial.current;
    }

    const left = carouselContent.offsetLeft - posX2.current;
    // Decide during the first INITIAL_MOVE_THRESHOLD if is a horizontal o vertical swipe
    // In order to allow drag and block the scroll or not
    if (!isHorizontalDragging.current && !isVerticalDragging.current) {
      if (Math.abs(posXAcc) > THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING) {
        // allow drag and block scroll
        isHorizontalDragging.current = true;
        onTransition?.(true);
        blockScroll();
      } else if (Math.abs(posYAcc) > THRESHOLD_TO_DECIDE_IF_ALLOW_DRAGGING) {
        // block drag and enable scroll
        isVerticalDragging.current = true;
      }
    }

    if (!isHorizontalDragging.current) {
      return;
    }
    // Only set left position in some cases
    if (circular && elements.length > numElementsPerPage.current) {
      carouselContent.style.left = `${left}px`;
    } else {
      const maxDistance = calcXDistanceBetween2Elements(
        carouselContent.firstChild as HTMLElement,
        carouselContent.children[
          carouselContent.children.length - numElementsPerPage.current
        ] as HTMLElement
      );

      // Depending if the first or the last element of the carousel is centered or not
      if (centerExtremesWhenExtraPadding) {
        if (left - (extraPadding || 0) < 0 && -left < maxDistance - (extraPadding || 0)) {
          carouselContent.style.left = `${left}px`;
        }
      } else {
        let modifyExtraPadding = circular ? extraPadding ?? 0 : 0;
        if (!circular && extraPadding && index.current === numPagesState - 1) {
          modifyExtraPadding = extraPadding * 2;
        }
        if (left - modifyExtraPadding < 0 && -left < maxDistance - modifyExtraPadding) {
          carouselContent.style.left = `${left}px`;
        }
      }
    }
  };

  const dragEnd = () => {
    const carouselContent = carouselContentRef.current;
    isVerticalDragging.current = false;
    if (isHorizontalDragging.current) {
      allowScroll();
    }
    isHorizontalDragging.current = false;
    if (!carouselContent || !isDragging.current || posInitial.current === undefined) {
      return;
    }
    isDragging.current = false;
    const posFinal = carouselContent.offsetLeft;
    if (posFinal - posInitial.current < -THRESHOLD_TO_DECIDE_IF_SWIPE_ON_DRAG_ENDS) {
      onRightSwipe();
    } else if (posFinal - posInitial.current > THRESHOLD_TO_DECIDE_IF_SWIPE_ON_DRAG_ENDS) {
      onLeftSwipe();
    } else {
      // Return to initial pos
      carouselContent.style.left = `${posInitial.current}px`;
    }
  };

  // Need to know when the shift key is pressed to manage the focus direction
  const shiftPressed = React.useRef<boolean>(false);

  // On focus carouselContent event
  const onFocus = () => {
    const carouselContent = carouselContentRef.current;
    if (!carouselContent || !numElementsPerPage.current) {
      return;
    }
    const { firstIndexInView, lastIndexInView } = getFirstAndLastIndexInCarouselView({
      elementsLength: elements.length,
      numElementsPerPage: numElementsPerPage.current,
      numElementsToSlide,
      currentPage: index.current,
      isCircular: circular,
    });
    for (let i = 0; i < carouselContent.children.length; i++) {
      // if there carousel item have focus but should not
      if (
        carouselContent.children[i].contains(document.activeElement) &&
        (i < firstIndexInView || i > lastIndexInView)
      ) {
        if (i >= lastIndexInView + 1) {
          // When shift key pressed should focus in the last element in the carousel content
          if (shiftPressed.current) {
            focusElementOrFirstDescendant(carouselContent.children[lastIndexInView] as HTMLElement);
            return;
          }
          // When no shift, should get focus in the next available focusable element, else first element in body
          const hasFocused = focusNextFocusableElement(carouselContent as HTMLElement);
          if (!hasFocused) {
            focusElementOrFirstDescendant(document.body);
          }
          return;
        }
        // i < firstIndexInView
        // When shift, should get focus in the previous available focusable element
        if (shiftPressed.current) {
          const hasFocused = focusPreviousFocusableElement(carouselContent as HTMLElement);
          if (!hasFocused) {
            focusElementOrFirstDescendant(carouselContent.children[lastIndexInView] as HTMLElement);
          }
          return;
        }
        // Focus in the first element availble in the carousel content view
        focusElementOrFirstDescendant(carouselContent.children[firstIndexInView] as HTMLElement);
        return;
      }
    }
  };

  const onKeyDown = e => {
    shiftPressed.current = !!e.shiftKey;
  };

  const onKeyUp = e => {
    shiftPressed.current = !!e.shiftKey;
  };

  // Prevent scroll on focus
  const onScroll = e => {
    if (e.target) {
      e.target.scrollLeft = 0;
    }
  };

  // Initialize listener for dragging and when scroll finished
  React.useEffect(() => {
    if (numPagesState > 1) {
      // Transition events
      carouselContentRef.current?.addEventListener('transitionend', handleTransitionEnd);
      // Touch events
      if (!disableSwipe) {
        carouselContentRef.current?.addEventListener('touchstart', dragStart);
        carouselContentRef.current?.addEventListener('touchend', dragEnd);
        carouselContentRef.current?.addEventListener('touchmove', dragAction);

        carouselContentRef.current?.addEventListener('mousedown', dragStart);
        carouselContentRef.current?.addEventListener('mouseup', dragEnd);
        carouselContentRef.current?.addEventListener('mousemove', dragAction);
        carouselContentRef.current?.addEventListener('mouseleave', dragEnd);
      }
    }
    // Focus events
    carouselContentRef.current?.addEventListener('focusin', onFocus);
    carouselContainerRef.current?.addEventListener('scroll', onScroll);
    // In order to know if the shift key was pressed when entering the component, we have to put the listener in the document
    document?.addEventListener('keydown', onKeyDown);
    document?.addEventListener('keyup', onKeyUp);
    return () => {
      // Transition events
      carouselContentRef.current?.removeEventListener('transitionend', handleTransitionEnd);
      // Touch events
      carouselContentRef.current?.removeEventListener('touchstart', dragStart);
      carouselContentRef.current?.removeEventListener('touchend', dragEnd);
      carouselContentRef.current?.removeEventListener('touchmove', dragAction);

      carouselContentRef.current?.removeEventListener('mousedown', dragStart);
      carouselContentRef.current?.removeEventListener('mouseup', dragEnd);
      carouselContentRef.current?.removeEventListener('mousemove', dragAction);
      carouselContentRef.current?.removeEventListener('mouseleave', dragEnd);
      // Focus events
      carouselContentRef.current?.removeEventListener('focusin', onFocus);
      carouselContainerRef.current?.removeEventListener('scroll', onScroll);
      document?.removeEventListener('keydown', onKeyDown);
      document?.removeEventListener('keyup', onKeyUp);
    };
  }, [numPagesState, disableSwipe]);

  const handlePageChange = (increment: number, animation = true) => {
    const carouselContent = carouselContentRef.current;
    const carouselContainer = carouselContainerRef.current;
    if (
      !carouselContainer ||
      !carouselContent ||
      !allowShift.current ||
      !numElementsPerPage.current ||
      !elements.length
    ) {
      return;
    }
    // Add transition effect
    if (animation) {
      carouselContent.classList.add('shifting');
    }
    // Go through all carousel elements
    // Delete all the highlight elements, in order to do the animation when center mode
    for (let i = 0; i < carouselContent.children.length; i++) {
      carouselContent.children[i].classList.remove('highlight');
    }
    index.current += increment;
    // Calc first and last index in the carousel view
    const { firstIndexInView, lastIndexInView } = getFirstAndLastIndexInCarouselView({
      elementsLength: elements.length,
      numElementsPerPage: numElementsPerPage.current,
      numElementsToSlide,
      currentPage: index.current,
      isCircular: circular,
    });

    // When isnt allow to modify the slice width, carousel contiainer width must be calculated
    if (!allowModifySliceWidth) {
      // Calc the new carousel container width
      const firstElementInView = carouselContent.children[firstIndexInView] as HTMLElement;
      const lastElementInView = carouselContent.children[lastIndexInView] as HTMLElement;
      let distanceBetweenElementsInView = calcXDistanceBetween2Elements(
        firstElementInView,
        lastElementInView
      );
      distanceBetweenElementsInView += lastElementInView.offsetWidth;
      if (extraPadding) {
        distanceBetweenElementsInView += 2 * extraPadding;
      }
      carouselContainer.style.width = `${distanceBetweenElementsInView}px`;
    }
    // Calc new left translation
    let distance = calcXDistanceBetween2Elements(
      carouselContent.firstChild as HTMLElement,
      carouselContent.children[firstIndexInView] as HTMLElement
    );
    if (extraPadding) {
      if (centerExtremesWhenExtraPadding) {
        distance -= extraPadding;
      } else {
        if (circular || (index.current !== 0 && index.current !== numPagesRef.current - 1)) {
          distance -= extraPadding;
        } else if (!circular && index.current === numPagesRef.current - 1) {
          distance -= extraPadding * 2;
        }
      }
    }
    const prevLeftStyle = carouselContent.style.left;
    const newLeftStyle = `${-distance}px`;
    carouselContent.style.left = newLeftStyle;
    if (animation && prevLeftStyle !== newLeftStyle) {
      allowShift.current = false;
    } else {
      // Call manually to handleTransitionEnd because transitionend listener will be not executed
      handleTransitionEnd({
        propertyName: PROPERTY_NAME_TO_HANDLE_TRANSITION_END,
      } as TransitionEvent);
    }
  };

  return { handlePageChange, allowShift, numPages: numPagesState, innerCurrentPage: index };
};
