import { CSSProp, css } from 'styled-components';

import { ICssAnimationStyled } from '../types/cssAnimation';

/**
 * @name transitionMixin
 * @description
 * Mixin for the transition
 * @param {ICssAnimationStyled} props - The props of the animation
 * @returns {CSSProp} - The animation
 *
 */
// deprecated - props duration, enterDuration, exitDuration and delay should be of type string (props should come with the units)
export const transitionMixin = (props: ICssAnimationStyled): CSSProp => css`
  transition:
    opacity
      ${typeof props.options?.duration === 'number'
        ? props.options?.duration + 's'
        : props.options?.duration},
    transform
      ${typeof props.options?.duration === 'number'
        ? props.options?.duration + 's'
        : props.options?.duration};
  transition-timing-function: ${props.options?.timingFunction};
  transition-delay: ${typeof props.options?.delay === 'number'
    ? props.options?.delay + 's'
    : props.options?.delay};
`;
// deprecated - props duration, enterDuration, exitDuration and delay should be of type string (props should come with the units)
export const transitionMixinEnter = (props: ICssAnimationStyled): CSSProp => css`
  transition:
    opacity
      ${typeof props.options?.enterDuration === 'number'
        ? props.options?.enterDuration + 's'
        : props.options?.enterDuration},
    transform
      ${typeof props.options?.enterDuration === 'number'
        ? props.options?.enterDuration + 's'
        : props.options?.enterDuration};
  transition-timing-function: ${props.options?.timingFunction};
  transition-delay: ${typeof props.options?.delay === 'number'
    ? props.options?.delay + 's'
    : props.options?.delay};
`;
// deprecated - props duration, enterDuration, exitDuration and delay should be of type string (props should come with the units)
export const transitionMixinExit = (props: ICssAnimationStyled): CSSProp => css`
  transition:
    opacity
      ${typeof props.options?.exitDuration === 'number'
        ? props.options?.exitDuration + 's'
        : props.options?.exitDuration},
    transform
      ${typeof props.options?.exitDuration === 'number'
        ? props.options?.exitDuration + 's'
        : props.options?.exitDuration};
  transition-timing-function: ${props.options?.timingFunction};
  transition-delay: ${typeof props.options?.delay === 'number'
    ? props.options?.delay + 's'
    : props.options?.delay};
`;
