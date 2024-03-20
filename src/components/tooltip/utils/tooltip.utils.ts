import { PopoverComponentType } from '@/components/popover';
import { DeviceBreakpointsType } from '@/types';

// build descriptive id for aria-describedby or aria-labelledby
export const getAriaDescriptorsBy = ({
  title,
  content,
  titleId,
  contentId,
}: {
  title?: string;
  content?: JSX.Element | string;
  titleId: string;
  contentId: string;
}): string | undefined => {
  const descriptorsId: string[] = [];
  if (title) {
    descriptorsId.push(titleId);
  }
  if (content) {
    descriptorsId.push(contentId);
  }
  if (descriptorsId.length === 0) {
    return undefined;
  }
  return descriptorsId.join(' ');
};

export const getHtmlTagForTooltip = ({
  mediaDevice,
  tooltipAsModal,
}: {
  mediaDevice: DeviceBreakpointsType;
  tooltipAsModal?: boolean;
}): PopoverComponentType | undefined => {
  if (mediaDevice === DeviceBreakpointsType.DESKTOP && tooltipAsModal) {
    return PopoverComponentType.DIALOG;
  }
  return undefined;
};

// Order to get the value:
// 1st: We get by props the value
// 2nd: We get by theme the value
// 3rd: We dont get nothing, then We return false and tooltip acts like a tooltip
export const useTooltipAsModal = ({
  propTooltipAsModal,
  styleTooltipAsModal,
}: {
  propTooltipAsModal?: boolean;
  styleTooltipAsModal?: boolean;
}): boolean => {
  return propTooltipAsModal ?? styleTooltipAsModal ?? false;
};
