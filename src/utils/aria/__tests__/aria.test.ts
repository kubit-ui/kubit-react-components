import { pickAriaProps } from '../aria';

describe('aria utils', () => {
  it('pickAriaProps functions', () => {
    const props = {
      'aria-label': 'My Label',
      'aria-labelledby': 'My Label ID',
      'aria-describedby': 'My Description ID',
      'otherProp': 'Other Prop Value',
    };

    const result = {
      'aria-label': 'My Label',
      'aria-labelledby': 'My Label ID',
      'aria-describedby': 'My Description ID',
    };
    expect(pickAriaProps(props)).toStrictEqual(result);
  });
});
