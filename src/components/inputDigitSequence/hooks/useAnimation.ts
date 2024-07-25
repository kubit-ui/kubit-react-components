import { Ref, useCallback, useRef, useState } from 'react';

type UseAnimationParamsType = {
  animated: boolean;
};

type UseAnimationResponseType = {
  boxesAnimationDone: boolean;
  labelAnimationDone: boolean;
  ref?: Ref<HTMLDivElement> | undefined;
};

export const useAnimation = (props: UseAnimationParamsType): UseAnimationResponseType => {
  const [boxesAnimationDone, setBoxesAnimationDone] = useState(false);
  const [labelAnimationDone, setLabelAnimationDone] = useState(false);

  const moveBoxesToTheirPosition = useCallback(() => {
    const rootElement = innerRef.current;
    // Do no continue if the root element is not present
    if (!rootElement) {
      return;
    }
    // Retrieve original input container
    const inputContainer = rootElement.querySelector('[data-id="input-container"]');
    // Retrieve animated input container
    const inputContainerAnimated = rootElement.querySelector(
      '[data-id="input-container-animated"]'
    );
    // Do not continue if the animated input container is not present
    if (!inputContainerAnimated?.children) {
      return;
    }
    // Do not continue if the original input container child has no width
    const innerElementWidth = inputContainerAnimated?.firstElementChild?.clientWidth;
    if (!innerElementWidth) {
      return;
    }
    // For each animated container child
    // * Fix the width
    // * Initialise position as absolute
    // * Set transition
    for (let i = 0; i < inputContainerAnimated.childNodes.length; i++) {
      const inputContainer = inputContainerAnimated.childNodes[i] as HTMLElement;
      if (inputContainer.style) {
        inputContainer.style.width = `${innerElementWidth}px`;
        inputContainer.style.position = 'absolute';
        inputContainer.style.left = '0px';
        inputContainer.style.top = '0px';
        inputContainer.style.transition = 'left 250ms ease-in';
      }
    }
    // There is a diff between the left of the first element in the original container and the left of the first element in the animated container
    const elementsGap = inputContainer?.firstElementChild?.getBoundingClientRect().left ?? 0;

    // For each animated container child set the left as its respective in the original container
    for (let i = 0; i < inputContainerAnimated.childNodes.length; i++) {
      const originalElement = inputContainer?.childNodes[i] as HTMLElement;
      if (!originalElement) {
        break;
      }
      // Original element left
      const originalElementLeft = originalElement.getBoundingClientRect().left;
      const element = inputContainerAnimated.childNodes[i] as HTMLElement;
      if (element.style) {
        element.style.left = `${originalElementLeft - elementsGap}px`;
      }
    }
  }, []);

  const moveBoxesFinished = useRef(false);
  const handleFinishMovingBoxes = useCallback(() => {
    if (moveBoxesFinished.current) {
      return;
    }
    moveBoxesFinished.current = true;
    setBoxesAnimationDone(true);
  }, []);

  const increaseLabelHeightFinished = useRef(false);
  const handleFinishIncreasingLabelHeight = useCallback(() => {
    if (increaseLabelHeightFinished.current) {
      return;
    }
    increaseLabelHeightFinished.current = true;
    setLabelAnimationDone(true);
  }, []);

  const innerRef = useRef<HTMLDivElement | null>(null);
  const initialiseRef = useCallback((node: HTMLDivElement | null) => {
    if (!props.animated) {
      return;
    }
    if (innerRef.current) {
      // remove event listeners
      const inputContainerAnimated = innerRef.current.querySelector(
        '[data-id="input-container-animated"]'
      )?.firstElementChild;

      inputContainerAnimated?.removeEventListener('transitionend', handleFinishMovingBoxes);
      inputContainerAnimated?.removeEventListener(
        'animationend',
        handleFinishIncreasingLabelHeight
      );
    }
    innerRef.current = node;
    if (innerRef.current) {
      // add event listeners
      const inputContainerAnimated = innerRef.current.querySelector(
        '[data-id="input-container-animated"]'
      );
      inputContainerAnimated?.addEventListener('transitionend', handleFinishMovingBoxes);
      inputContainerAnimated?.addEventListener('animationend', handleFinishIncreasingLabelHeight);
      moveBoxesToTheirPosition();
    }
  }, []);

  return {
    boxesAnimationDone,
    labelAnimationDone,
    ref: initialiseRef,
  };
};
