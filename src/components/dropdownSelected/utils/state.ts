import { DropdownSelectedStateType } from '../types/states';

export const getState = ({ hover }: { hover: boolean }): DropdownSelectedStateType => {
  if (hover) {
    return DropdownSelectedStateType.HOVER;
  }
  return DropdownSelectedStateType.DEFAULT;
};
