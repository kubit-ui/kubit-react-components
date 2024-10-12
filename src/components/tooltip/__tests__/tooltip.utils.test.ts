import { PopoverComponentType } from '@/components/popover';
import { DeviceBreakpointsType } from '@/types';

import { getAriaDescriptorsBy, getHtmlTagForTooltip } from '../utils';

describe('getAriaDescriptorsBy utility', () => {
  it('should return both titleId and contentId when title and content are provided', () => {
    const result = getAriaDescriptorsBy({
      title: 'Test Title',
      content: 'Test Content',
      titleId: 'title1',
      contentId: 'content1',
    });

    expect(result).toBe('title1 content1');
  });

  it('should return only titleId when only title is provided', () => {
    const result = getAriaDescriptorsBy({
      title: 'Test Title',
      titleId: 'title1',
      contentId: 'content1',
    });

    expect(result).toBe('title1');
  });

  it('should return only contentId when only content is provided', () => {
    const result = getAriaDescriptorsBy({
      content: 'Test Content',
      titleId: 'title1',
      contentId: 'content1',
    });

    expect(result).toBe('content1');
  });

  it('should return undefined when neither title nor content is provided', () => {
    const result = getAriaDescriptorsBy({
      titleId: 'title1',
      contentId: 'content1',
    });

    expect(result).toBeUndefined();
  });
});

describe('getHtmlTagForTooltip utility', () => {
  it('should return DIALOG when mediaDevice is DESKTOP and tooltipAsModal is true', () => {
    const result = getHtmlTagForTooltip({
      mediaDevice: DeviceBreakpointsType.DESKTOP,
      tooltipAsModal: true,
    });

    expect(result).toBe(PopoverComponentType.DIALOG);
  });

  it('should return undefined when mediaDevice is not DESKTOP', () => {
    const result = getHtmlTagForTooltip({
      mediaDevice: DeviceBreakpointsType.MOBILE,
      tooltipAsModal: true,
    });

    expect(result).toBeUndefined();
  });

  it('should return undefined when tooltipAsModal is not true', () => {
    const result = getHtmlTagForTooltip({
      mediaDevice: DeviceBreakpointsType.DESKTOP,
      tooltipAsModal: false,
    });

    expect(result).toBeUndefined();
  });

  it('should return undefined when neither condition is met', () => {
    const result = getHtmlTagForTooltip({
      mediaDevice: DeviceBreakpointsType.MOBILE,
      tooltipAsModal: false,
    });

    expect(result).toBeUndefined();
  });
});
