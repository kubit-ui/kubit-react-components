import { ariaLink } from '../aria';
import { disabledLink } from '../disabled';
import { linkTargetValue } from '../target';

describe('Link helpers', () => {
  it('ariaLink function', () => {
    const ariaDisabled = { ['aria-disabled']: false };
    const ariaLabel = 'ariaLabel';
    const ariaDescribedby = 'ariaDescribedby';

    const resultExpected = {
      aria: {
        'aria-describedby': 'ariaDescribedby',
        'aria-disabled': false,
        'aria-label': 'ariaLabel',
      },
    };
    expect(ariaLink(ariaDisabled, ariaLabel, ariaDescribedby)).toStrictEqual(resultExpected);
  });

  it('disabledLink function', () => {
    const disabled = true;
    const role = 'link';

    const resultExpected = { role: 'link' };
    expect(disabledLink(disabled, role)).toStrictEqual(resultExpected);
  });
  it('disabledLink function with disabled and no role', () => {
    const disabled = true;

    const resultExpected = { role: 'link' };
    expect(disabledLink(disabled)).toStrictEqual(resultExpected);
  });
  it('linkTargetValue function', () => {
    const target = 'BLANK';

    const resultExpected = '_blank';
    expect(linkTargetValue(target)).toBe(resultExpected);
  });
  it('linkTargetValue function with undefined', () => {
    const target = undefined;

    const resultExpected = undefined;
    expect(linkTargetValue(target)).toBe(resultExpected);
  });
});
