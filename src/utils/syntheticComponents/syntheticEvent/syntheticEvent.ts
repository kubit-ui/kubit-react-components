import { cloneEvent } from '../helpers/cloneEvent';

interface DispatchSyntheticEvent {
  element: HTMLElement;
  eventType: string;
}

export const dispatchSyntheticEvent = ({ element, eventType }: DispatchSyntheticEvent): Event => {
  let syntheticEvent;
  element.addEventListener(eventType, event => {
    syntheticEvent = cloneEvent(event);
  });
  const genericEvent = new Event(eventType);
  element.dispatchEvent(genericEvent);

  return syntheticEvent;
};
