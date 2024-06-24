import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { SliderBaseStylesType, SliderStateType } from '../types';

export const StyledThumb = styled.div<{ styles: SliderBaseStylesType; rightThumb?: boolean }>`
  ${props =>
    getStyles(
      props.styles.states?.[SliderStateType.DEFAULT]?.[props.rightThumb ? 'rightThumb' : 'thumb']
    )}
  &[data-hover='true'] {
    ${props =>
      getStyles(
        props.styles.states?.[SliderStateType.HOVER]?.[props.rightThumb ? 'rightThumb' : 'thumb']
      )}
  }
  &[data-pressed='true'] {
    ${props =>
      getStyles(
        props.styles.states?.[SliderStateType.PRESSED]?.[props.rightThumb ? 'rightThumb' : 'thumb']
      )}
  }
  &[data-disabled='true'] {
    ${props =>
      getStyles(
        props.styles.states?.[SliderStateType.DISABLED]?.[props.rightThumb ? 'rightThumb' : 'thumb']
      )}
  }
`;

export const StyledTooltipThumb = styled.div<{ styles: SliderBaseStylesType }>`
  ${props => getStyles(props.styles.states?.[SliderStateType.DEFAULT]?.innerThumbTooltip)}
  &[data-hover='true'] {
    ${props => getStyles(props.styles.states?.[SliderStateType.HOVER]?.innerThumbTooltip)}
  }
  &[data-pressed='true'] {
    ${props => getStyles(props.styles.states?.[SliderStateType.PRESSED]?.innerThumbTooltip)}
  }
  &[data-disabled='true'] {
    ${props => getStyles(props.styles.states?.[SliderStateType.DISABLED]?.innerThumbTooltip)}
  }
`;
