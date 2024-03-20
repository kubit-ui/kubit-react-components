import { CSSProp, css } from 'styled-components';

import { ICssAnimationStyled } from '../types/cssAnimation';
import { transitionMixin, transitionMixinEnter, transitionMixinExit } from './transitionMixin';

/**
 * @name animations
 * @description
 * Animations for the slide in animation
 * @param {ICssAnimationStyled} props - The props of the animation
 * @returns {CSSProp} - The animation
 */
const animations = props => css`
  .${props.variant.type}-enter {
    opacity: ${props.options.opacityStart};
    transform: translate(
      ${props.options.animationXStartPosition},
      ${props.options.animationYStartPosition}
    );
  }
  .${props.variant.type}-enter-active {
    opacity: ${props.options.opacityEnd};
    transform: translate(
      ${props.options.animationXEndPosition},
      ${props.options.animationYEndPosition}
    );
    ${props.options.enterDuration ? transitionMixinEnter(props) : transitionMixin(props)}
  }
  .${props.variant.type}-exit {
    opacity: ${props.options.opacityEnd};
    transform: translate(
      ${props.options.animationXEndPosition},
      ${props.options.animationYEndPosition}
    );
  }
  .${props.variant.type}-exit-active {
    opacity: ${props.options.opacityStart};
    transform: translate(
      ${props.options.animationXStartPosition},
      ${props.options.animationYStartPosition}
    );
    ${props.options.exitDuration ? transitionMixinExit(props) : transitionMixin(props)}
  }
`;

/**
 * @name slideInAnimationsMixin
 * @description
 * Animations for the slide in animation
 * @param {ICssAnimationStyled} props - The props of the animation
 * @returns {CSSProp} - The animation
 */
export const slideInAnimationsMixin = (props: ICssAnimationStyled): CSSProp => animations(props);
