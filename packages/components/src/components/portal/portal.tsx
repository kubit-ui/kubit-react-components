import { createPortal } from 'react-dom';

import type { PortalProps } from './types/portal';

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
 * Renders a portal component that can be appended to the <body> tag or a custom wrapper element.
 * Only for internal use.
 * @param wrapperId - The ID of the custom wrapper element (optional).
 * @param children - The content to be rendered inside the portal.
 * @returns The portal component.
 */
export const Portal = ({ children, wrapperId }: PortalProps): JSX.Element => {
  let element = document.body as HTMLElement;

  if (wrapperId) {
    element = document.getElementById(wrapperId) as HTMLElement;

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
  }

  return createPortal(children, element);
};
