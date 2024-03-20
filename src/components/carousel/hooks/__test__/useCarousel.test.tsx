import { act, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import * as focusHandlers from '@/utils/focusHandlers/focusHandlers';

import * as CarouselUtils from '../../utils/carousel.utils';
import { useCarousel } from '../useCarousel';

let leftCallbackMock;
let rightCallbackMock;
let refContainerMock;
let refContentMock;
let containerRoot;

const elements = [
  <ReplaceContent key={0} id="test0">
    0
  </ReplaceContent>,
  <ReplaceContent key={1} id="test1">
    1
  </ReplaceContent>,
  <ReplaceContent key={2} id="test2">
    2
  </ReplaceContent>,
  <ReplaceContent key={3} id="test3">
    3
  </ReplaceContent>,
  <ReplaceContent key={4} id="test4">
    4
  </ReplaceContent>,
  <ReplaceContent key={5} id="test5">
    5
  </ReplaceContent>,
  <ReplaceContent key={6} id="test6">
    6
  </ReplaceContent>,
  <ReplaceContent key={7} id="test7">
    7
  </ReplaceContent>,
  <ReplaceContent key={8} id="test8">
    8
  </ReplaceContent>,
  <ReplaceContent key={9} id="test9">
    9
  </ReplaceContent>,
  <ReplaceContent key={10} id="test10">
    10
  </ReplaceContent>,
];

describe('useCarousel Hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  beforeEach(() => {
    leftCallbackMock = jest.fn();
    rightCallbackMock = jest.fn();

    containerRoot?.remove();

    containerRoot = document.createElement('div');

    const containerParent = document.createElement('div');
    const leftArrow = document.createElement('div');
    const container = document.createElement('div');
    const content = document.createElement('div');
    const rightArrow = document.createElement('div');

    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));
    content.appendChild(document.createElement('button'));

    container.appendChild(content);

    containerParent.appendChild(leftArrow);
    containerParent.appendChild(container);
    containerParent.appendChild(rightArrow);

    containerRoot.appendChild(containerParent);

    refContentMock = {
      current: content,
    };

    refContainerMock = {
      current: container,
    };

    document.body.appendChild(containerRoot);
  });

  it('calls swipe left callback on left swipe (mouse events)', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: false,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );
    // Simulate left swipe
    fireEvent.mouseDown(refContentMock.current);
    fireEvent.mouseMove(refContentMock.current);
    jest.spyOn(refContentMock.current, 'offsetLeft', 'get').mockImplementationOnce(() => 100);
    fireEvent.mouseUp(refContentMock.current);
    // Call onLeftSwipe
    expect(leftCallbackMock).toHaveBeenCalled();
  });

  it('calls swipe left callback on left swipe (touch events)', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: false,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );
    // Simulate left swipe
    fireEvent.touchStart(refContentMock.current, { touches: [{ clientX: 0, clientY: 0 }] });
    fireEvent.touchMove(refContentMock.current, { touches: [{ clientX: 0, clientY: 0 }] });
    jest.spyOn(refContentMock.current, 'offsetLeft', 'get').mockImplementationOnce(() => 100);
    fireEvent.touchEnd(refContentMock.current);
    // Call onLeftSwipe
    expect(leftCallbackMock).toHaveBeenCalled();
  });

  it('calls swipe right callback on right swipe (mouse events)', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: true,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );
    // Simulate right swipe
    fireEvent.mouseDown(refContentMock.current);
    fireEvent.mouseMove(refContentMock.current);
    jest.spyOn(refContentMock.current, 'offsetLeft', 'get').mockImplementationOnce(() => -100);
    fireEvent.mouseUp(refContentMock.current);
    // Call onRightSwipe
    expect(rightCallbackMock).toHaveBeenCalled();
  });

  it('calls swipe right callback on right swipe (touch events)', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: true,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );
    // Simulate right swipe
    fireEvent.touchStart(refContentMock.current, { touches: [{ clientX: 0, clientY: 0 }] });
    fireEvent.touchMove(refContentMock.current, { touches: [{ clientX: 0, clientY: 0 }] });
    jest.spyOn(refContentMock.current, 'offsetLeft', 'get').mockImplementationOnce(() => -100);
    fireEvent.touchEnd(refContentMock.current);
    // Call onRightSwipe
    expect(rightCallbackMock).toHaveBeenCalled();
  });

  it('numElementsPerPage is optional, and its autocalculated using the carousel container getBoundingClientRect', () => {
    const mockContainerGetBoundingClientRect = jest.fn(() => ({
      left: 0,
      right: 0,
    }));
    refContainerMock.current.getBoundingClientRect = mockContainerGetBoundingClientRect;
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: true,
        centerMode: true,
        elements,
        numElementsPerPage: undefined,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );
    expect(mockContainerGetBoundingClientRect).toHaveBeenCalled();
  });

  it('allowModifySliceWidth', () => {
    jest
      .spyOn(refContainerMock.current, 'getBoundingClientRect')
      .mockImplementationOnce(() => ({ width: 1000 }));
    // When allow update slides width, the container will be 100%, and the slides width will be calculated atteding to the container width and the numElementsPerPage
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: false,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: true,
      })
    );
    // Slice width has been updated
    expect(refContentMock.current.firstChild.style.width).not.toBeNull();
  });

  it('allowModifySliceWidth with extra padding', () => {
    jest
      .spyOn(refContainerMock.current, 'getBoundingClientRect')
      .mockImplementationOnce(() => ({ width: 1000 }));
    // When allowModifySliceWidth with extraPadding, the extraPadding is used to calc the slice width
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: false,
        centerMode: true,
        elements,
        numElementsPerPage: 1,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: true,
        extraPadding: 100,
      })
    );
    // Slice width has been updated
    expect(refContentMock.current.firstChild.style.width).toBe('800px');
  });

  it('When numElementsPerPage is not present, numElementsPerPage is also calculated when window resize', async () => {
    const calcNumElementsPerPageMock = jest.fn(() => 3);
    jest
      .spyOn(CarouselUtils, 'calcNumElementsPerPage')
      .mockImplementation(calcNumElementsPerPageMock);
    const mockContainerGetBoundingClientRect = jest.fn(() => ({
      left: 0,
      right: 0,
    }));
    refContainerMock.current.getBoundingClientRect = mockContainerGetBoundingClientRect;
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: true,
        centerMode: true,
        elements,
        numElementsPerPage: undefined,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );
    act(() => {
      fireEvent.resize(window);
    });
    expect(calcNumElementsPerPageMock).toHaveBeenCalledTimes(2);
  });

  it('is possible to focus a visible element in the carousel', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: false,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );

    refContentMock.current.children[2].focus();
    expect(document.activeElement).toBe(refContentMock.current.children[2]);
  });

  it('leftScroll is prevent on focus inner elements', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: false,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );

    fireEvent.scroll(refContainerMock.current, { target: { scrollLeft: 100 } });

    expect(refContainerMock.current.scrollLeft).toBe(0);
  });

  it('When focusing a non visible element (next to the last index in view), the first element visible will focus instead', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: false,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );

    refContentMock.current.children[4].focus();
    expect(document.activeElement).toBe(refContentMock.current.children[0]);
  });

  it('When focusing a non visible element (next to the last index in view and pressing shift), the last element visible will focus instead', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: false,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );

    const keyDown = new KeyboardEvent('keydown', { key: '13', shiftKey: true });
    document.dispatchEvent(keyDown);
    refContentMock.current.children[4].focus();
    expect(document.activeElement).toBe(refContentMock.current.children[2]);
  });

  it('When focusing a non visible element (previous to the last index in view and pressing shift), the previous focusable element in the page will be focus, if it does not exists, the last element in the carouselvisible will focus instead if shiftPressed', () => {
    renderHook(() =>
      useCarousel({
        carouselContainerRef: refContainerMock,
        carouselContentRef: refContentMock,
        circular: true,
        centerMode: true,
        elements,
        numElementsPerPage: 3,
        defaultPage: 0,
        onRightSwipe: rightCallbackMock,
        onLeftSwipe: leftCallbackMock,
        disableSwipe: false,
        allowModifySliceWidth: false,
      })
    );
    jest.spyOn(focusHandlers, 'focusPreviousFocusableElement').mockImplementationOnce(() => false);
    const keyDown = new KeyboardEvent('keydown', { key: '13', shiftKey: true });
    document.dispatchEvent(keyDown);
    refContentMock.current.children[0].focus();
    expect(document.activeElement).toBe(refContentMock.current.children[6]);
  });
});
