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
export const transitionMixin = (props: ICssAnimationStyled): CSSProp => css`
  transition:
    opacity ${props.options?.duration}s,
    transform ${props.options?.duration}s;
  transition-timing-function: ${props.options?.timingFunction};
  transition-delay: ${props.options?.delay}s;
`;
export const transitionMixinEnter = (props: ICssAnimationStyled): CSSProp => css`
  transition:
    opacity ${props.options?.enterDuration}s,
    transform ${props.options?.enterDuration}s;
  transition-timing-function: ${props.options?.timingFunction};
  transition-delay: ${props.options?.delay}s;
`;
export const transitionMixinExit = (props: ICssAnimationStyled): CSSProp => css`
  transition:
    opacity ${props.options?.exitDuration}s,
    transform ${props.options?.exitDuration}s;
  transition-timing-function: ${props.options?.timingFunction};
  transition-delay: ${props.options?.delay}s;
`;
