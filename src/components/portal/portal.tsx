import React from 'react';
import { createPortal } from 'react-dom';

import { IPortal } from './types/portal';

/**
 * Creates a wrapper element and appends it to the <body> tag.
 * @param wrapperId - The ID of the wrapper element.
 * @returns The created wrapper element.
 */
const createWrapperAndAppendToBody = (wrapperId: string): HTMLElement => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

/**
 * @deprecated This component has been deprecated and will be not exported in the next MAJOR release
 * Renders a portal component that can be appended to the <body> tag or a custom wrapper element.
 * @param children - The content to be rendered inside the portal.
 * @param wrapperId - The ID of the custom wrapper element (optional).
 * @returns The portal component.
 */
export const Portal = ({ children, wrapperId }: IPortal): React.JSX.Element => {
  let element = document.body as HTMLElement;

  if (wrapperId) {
    element = document.getElementById(wrapperId) as HTMLElement;

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
  }

  return createPortal(children, element);
};
