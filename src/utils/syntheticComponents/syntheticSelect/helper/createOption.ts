interface CreateOptionProps {
  value: string;
  label: string;
  selected?: boolean;
}

export const createOption = ({ value, label, selected }: CreateOptionProps): HTMLOptionElement => {
  const optionElement = document.createElement('option');
  optionElement.value = value;
  optionElement.text = label;
  if (selected) {
    optionElement.selected = selected;
  }
  return optionElement;
};
