import {
  getPaddingLeft,
  getPaddingLeftFromContainer,
  getPaddingRight,
  getPaddingRightFromContainer,
} from '../input.mixin.utils';

describe('getPaddingLeft', () => {
  it('should return undefined when padding is not provided', () => {
    expect(getPaddingLeft()).toBeUndefined();
  });

  it('should return the same value when padding is provided for all sides', () => {
    expect(getPaddingLeft('10px')).toBe('10px');
  });

  it('should return the horizontal padding when vertical and horizontal padding are provided', () => {
    expect(getPaddingLeft('10px 20px')).toBe('20px');
  });

  it('should return the horizontal padding when top, horizontal, and bottom padding are provided', () => {
    expect(getPaddingLeft('10px 20px 30px')).toBe('20px');
  });

  it('should return the left padding when padding is provided for all four sides', () => {
    expect(getPaddingLeft('10px 20px 30px 40px')).toBe('40px');
  });

  it('should return undefined when padding format is not recognized', () => {
    expect(getPaddingLeft('10px 20px 30px 40px 50px')).toBeUndefined();
  });
});

describe('getPaddingRight', () => {
  it('should return undefined when padding is not provided', () => {
    expect(getPaddingRight()).toBeUndefined();
  });

  it('should return the same value when padding is provided for all sides', () => {
    expect(getPaddingRight('10px')).toBe('10px');
  });

  it('should return the horizontal padding when vertical and horizontal padding are provided', () => {
    expect(getPaddingRight('10px 20px')).toBe('20px');
  });

  it('should return the horizontal padding when top, horizontal, and bottom padding are provided', () => {
    expect(getPaddingRight('10px 20px 30px')).toBe('20px');
  });

  it('should return the right padding when padding is provided for all four sides', () => {
    expect(getPaddingRight('10px 20px 30px 40px')).toBe('20px');
  });

  it('should return undefined when padding format is not recognized', () => {
    expect(getPaddingRight('10px 20px 30px 40px 50px')).toBeUndefined();
  });
});

describe('getPaddingLeftFromContainer', () => {
  it('should return padding_left when it is defined', () => {
    const container = { padding_left: '10px' };
    expect(getPaddingLeftFromContainer(container)).toBe('10px');
  });

  it('should return padding from getPaddingLeft when padding_left is not defined', () => {
    const container = { padding: '10px 20px 30px 40px' };
    expect(getPaddingLeftFromContainer(container)).toBe('40px');
  });

  it('should return "0rem" when neither padding_left nor padding is defined', () => {
    const container = {};
    expect(getPaddingLeftFromContainer(container)).toBe('0rem');
  });
});

describe('getPaddingRightFromContainer', () => {
  it('should return padding_right when it is defined', () => {
    const container = { padding_right: '10px' };
    expect(getPaddingRightFromContainer(container)).toBe('10px');
  });

  it('should return padding from getPaddingRight when padding_right is not defined', () => {
    const container = { padding: '10px 20px 30px 40px' };
    expect(getPaddingRightFromContainer(container)).toBe('20px');
  });

  it('should return "0rem" when neither padding_right nor padding is defined', () => {
    const container = {};
    expect(getPaddingRightFromContainer(container)).toBe('0rem');
  });
});
