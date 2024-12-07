import { IElementOrIcon } from '@/components/elementOrIcon/types/elementOrIcon';
import { ICONS } from '@/designSystem/kubit/assets/icons/icons';

import { isIElementOrIcon } from '../helper/controlType';
import { PageControlControlType } from '../types/pageControl';

describe('isIElementOrIcon', () => {
  it('should return true if control is of type IElementOrIcon', () => {
    const control: IElementOrIcon = { icon: 'some-icon' };
    expect(isIElementOrIcon(control)).toBe(true);
  });

  it('should return false if control is not of type IElementOrIcon', () => {
    const control: PageControlControlType = { onClick: jest.fn() };
    expect(isIElementOrIcon(control)).toBe(false);
  });

  it('should return false if control is undefined', () => {
    const control = undefined;
    expect(isIElementOrIcon(control)).toBe(false);
  });

  it('should return false if control is an empty object', () => {
    const control = {};
    expect(isIElementOrIcon(control)).toBe(false);
  });

  it('should return false if control has icon property as undefined', () => {
    const control: IElementOrIcon = { icon: undefined };
    expect(isIElementOrIcon(control)).toBe(false);
  });

  it('should return true if control has icon property as a valid string', () => {
    const control: IElementOrIcon = { icon: ICONS.ICON_ALERT };
    expect(isIElementOrIcon(control)).toBe(true);
  });
});
