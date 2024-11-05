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
