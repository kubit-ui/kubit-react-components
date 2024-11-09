import styled from 'styled-components';

import { slideInAnimationsMixin } from './animations/slideInAnimationsMixin';
import { ICssAnimationStyled } from './types/cssAnimation';
import { CssAnimationVariants } from './types/variant';

const animations = {
  [CssAnimationVariants.SLIDE_IN]: (props: ICssAnimationStyled) => slideInAnimationsMixin(props),
};

export const CssAnimationContainer = styled.div<ICssAnimationStyled>`
  ${props => {
    return animations[props.variant.type];
  }}
`;
