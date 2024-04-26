import { CSSProp } from 'styled-components';

import {
  transitionMixin,
  transitionMixinEnter,
  transitionMixinExit,
} from '../animations/transitionMixin';
import { CssAnimationTimingFunction, CssAnimationVariants, ICssAnimationStyled } from '../types';

describe('transitionMixin', () => {
  it('should return the correct CSSProp with duration in seconds', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: {
        duration: 0.5,
        timingFunction: CssAnimationTimingFunction.EASE_IN,
        delay: 0.2,
        iterationCount: 1,
      },
    };
    const result: CSSProp = transitionMixin(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,0.5s,,transform,0.5s,;transition-timing-function:,ease-in,;transition-delay:,0.2s,;';
    expect(formatResult).toBe(expectedResult);
  });
  it('should return the correct CSSProp with duration in milliseconds', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: {
        duration: '500ms',
        timingFunction: CssAnimationTimingFunction.EASE_IN,
        delay: '200ms',
        iterationCount: 1,
      },
    };
    const result: CSSProp = transitionMixin(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,500ms,,transform,500ms,;transition-timing-function:,ease-in,;transition-delay:,200ms,;';
    expect(formatResult).toBe(expectedResult);
  });
  it('should return the correct CSSProp with undefined options', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: undefined,
    };
    const result: CSSProp = transitionMixin(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,,transform,;transition-timing-function:,;transition-delay:,;';
    expect(formatResult).toBe(expectedResult);
  });
});
describe('transitionMixinEnter', () => {
  it('should return the correct CSSProp with enterDuration in seconds', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: {
        enterDuration: 0.5,
        timingFunction: CssAnimationTimingFunction.EASE_IN,
        delay: 0.2,
        iterationCount: 1,
      },
    };
    const result: CSSProp = transitionMixinEnter(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,0.5s,,transform,0.5s,;transition-timing-function:,ease-in,;transition-delay:,0.2s,;';
    expect(formatResult).toBe(expectedResult);
  });
  it('should return the correct CSSProp with enterDuration in milliseconds', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: {
        enterDuration: '500ms',
        timingFunction: CssAnimationTimingFunction.EASE_IN,
        delay: '200ms',
        iterationCount: 1,
      },
    };
    const result: CSSProp = transitionMixinEnter(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,500ms,,transform,500ms,;transition-timing-function:,ease-in,;transition-delay:,200ms,;';
    expect(formatResult).toBe(expectedResult);
  });
  it('should return the correct CSSProp with undefined options', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: undefined,
    };
    const result: CSSProp = transitionMixinEnter(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,,transform,;transition-timing-function:,;transition-delay:,;';
    expect(formatResult).toBe(expectedResult);
  });
});
describe('transitionMixinExit', () => {
  it('should return the correct CSSProp with exitDuration in seconds', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: {
        exitDuration: 0.5,
        timingFunction: CssAnimationTimingFunction.EASE_IN,
        delay: 0.2,
        iterationCount: 1,
      },
    };
    const result: CSSProp = transitionMixinExit(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,0.5s,,transform,0.5s,;transition-timing-function:,ease-in,;transition-delay:,0.2s,;';
    expect(formatResult).toBe(expectedResult);
  });
  it('should return the correct CSSProp with exitDuration in milliseconds', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: {
        exitDuration: '500ms',
        timingFunction: CssAnimationTimingFunction.EASE_IN,
        delay: '200ms',
        iterationCount: 1,
      },
    };
    const result: CSSProp = transitionMixinExit(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,500ms,,transform,500ms,;transition-timing-function:,ease-in,;transition-delay:,200ms,;';
    expect(formatResult).toBe(expectedResult);
  });
  it('should return the correct CSSProp with undefined options', () => {
    const props: ICssAnimationStyled = {
      variant: {
        type: Object.values(CssAnimationVariants || {})[0],
      },
      options: undefined,
    };
    const result: CSSProp = transitionMixinExit(props);
    const formatResult = result?.toString().replace(/\s/g, '');
    const expectedResult =
      'transition:opacity,,transform,;transition-timing-function:,;transition-delay:,;';
    expect(formatResult).toBe(expectedResult);
  });
});
