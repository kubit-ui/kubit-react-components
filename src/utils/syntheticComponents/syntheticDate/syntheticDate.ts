import { cloneEvent } from '../helpers/cloneEvent';
import { formatDateToNative } from './helper/formatDateToNative';

interface ReturnValue {
  setDate: (value, format) => Event;
}

export const syntheticDate = (name?: string): ReturnValue => {
  let dateEvent;
  const changeEvent = new Event('change');

  const dateElement = document.createElement('input');
  dateElement.type = 'date';
  if (name) {
    dateElement.name = name;
  }

  dateElement.addEventListener('change', event => {
    dateEvent = cloneEvent(event);
  });

  const setDate = (value: string, format: string) => {
    const validDate = formatDateToNative(value, format);

    dateElement.value = validDate;
    dateElement.dispatchEvent(changeEvent);

    return dateEvent;
  };

  return { setDate };
};
