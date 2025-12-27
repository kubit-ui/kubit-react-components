import type { ElementOrIconProps } from '@/components/elementOrIcon/types/elementOrIcon';

import { ICONS } from '@/lib/tests/__mocks__/iconMock';

import { isElementOrIconProps } from '../helper/controlType';

describe('isElementOrIconProps', () => {
  it('should return true if control is of type ElementOrIconProps', () => {
    const control: ElementOrIconProps = { icon: 'some-icon' };
    expect(isElementOrIconProps(control)).toBe(true);
  });

  it('should return false if control is not of type ElementOrIconProps', () => {
    const control = { onClick: vi.fn() };
    expect(isElementOrIconProps(control)).toBe(false);
  });

  it('should return false if control is undefined', () => {
    const control = undefined;
    expect(isElementOrIconProps(control)).toBe(false);
  });

  it('should return false if control is an empty object', () => {
    const control = {};
    expect(isElementOrIconProps(control)).toBe(false);
  });

  it('should return false if control has icon property as undefined', () => {
    const control: ElementOrIconProps = { icon: undefined };
    expect(isElementOrIconProps(control)).toBe(false);
  });

  it('should return true if control has icon property as a valid string', () => {
    const control: ElementOrIconProps = { icon: ICONS.PLACEHOLDER };
    expect(isElementOrIconProps(control)).toBe(true);
  });
});
