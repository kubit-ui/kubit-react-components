import styled from 'styled-components';

// mixins
import { srOnlyMixin } from '../../styles/mixins/srOnly.mixin';

export const ScreenReaderOnlyStyled = styled.span`
  ${srOnlyMixin}
`;
