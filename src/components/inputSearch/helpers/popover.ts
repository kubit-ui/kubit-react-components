import { IOptionGroup, InputSearchNoResultTextType } from '../types';
import { getLength } from './options';

type ShouldBePopoverOpenedParamsType = {
  open: boolean;
  useActionBottomSheet?: boolean;
  options: IOptionGroup[];
  loadingList?: boolean;
  noResultText?: InputSearchNoResultTextType;
  hasHighlightedOption?: boolean;
};

export const shouldOpenPopover = ({
  open,
  useActionBottomSheet,
  options,
  loadingList = false,
  noResultText,
  hasHighlightedOption = false,
}: ShouldBePopoverOpenedParamsType): boolean => {
  // If closed, nothing should be done
  if (!open) return false;

  // The popover should be opened when required if:
  return (
    useActionBottomSheet ||
    getLength(options) > 0 ||
    loadingList ||
    noResultText?.content !== undefined ||
    hasHighlightedOption
  );
};
