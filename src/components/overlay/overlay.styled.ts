import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { OverlayVariantStylesType } from './types/overlayTheme';

type OverlayStylesTypes = {
  styles: OverlayVariantStylesType;
};

export const OverlayStyled = styled.div<OverlayStylesTypes>`
  ${props => getStyles(props.styles.container)}
`;
