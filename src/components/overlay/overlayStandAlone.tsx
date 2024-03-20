import * as React from 'react';

import { OverlayStyled } from './overlay.styled';
import { IOverlayStandAlone } from './types';

const OverlayStandAloneComponent = (
  props: IOverlayStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return <OverlayStyled ref={ref} data-testid={props.dataTestId} styles={props.styles} />;
};

/**
 * @description
 * Overlay component is used to create a background overlay.
 * @param {React.PropsWithChildren<IOverlayStandAlone>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Overlay />
 */
export const OverlayStandAlone = React.forwardRef(OverlayStandAloneComponent);
