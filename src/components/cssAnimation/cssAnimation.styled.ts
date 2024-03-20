import styled from 'styled-components';

import { slideInAnimationsMixin } from './animations/slideInAnimationsMixin';
import { CssAnimationVariants } from './types';
import { ICssAnimationStyled } from './types/cssAnimation';

const animations = {
  [CssAnimationVariants.SLIDE_IN]: (props: ICssAnimationStyled) => slideInAnimationsMixin(props),
};

export const CssAnimationContainer = styled.div<ICssAnimationStyled>`
  ${props => {
    return animations[props.variant.type];
  }}
`;
