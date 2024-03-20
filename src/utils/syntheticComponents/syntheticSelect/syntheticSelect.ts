import { cloneEvent } from '../helpers/cloneEvent';
import { createOption } from './helper/createOption';

interface Option {
  label: string;
  value: string;
}

interface ReturnValue {
  getRef: () => HTMLSelectElement;
  clickOption: (value: string) => Event;
}

const firstSelectOption: Option = {
  label: '',
  value: '',
};

export const syntheticSelect = <T>(
  options: Option[] | T[],
  selectedText?: string,
  name?: string
): ReturnValue => {
  let selectEvent;

  const selectElement = document.createElement('select');
  if (name) {
    selectElement.name = name;
  }

  const firstOptionElement = createOption(firstSelectOption);
  selectElement.appendChild(firstOptionElement);

  options.forEach(option => {
    const currentOption = option.label === selectedText ? { ...option, selected: true } : option;
    const optionElement = createOption(currentOption);
    selectElement.appendChild(optionElement);
  });

  selectElement.addEventListener('change', event => {
    selectEvent = cloneEvent(event);
  });

  const getRef = () => {
    return selectElement;
  };

  const clickOption = (value: string) => {
    selectElement.value = value;
    const changeEvent = new Event('change');
    selectElement.dispatchEvent(changeEvent);

    return selectEvent;
  };

  return { getRef, clickOption };
};
