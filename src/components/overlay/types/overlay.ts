import { CustomTokenTypes } from '@/types';

import { OverlayVariantStylesType } from './overlayTheme';

/**
 * @name IOverlay
 * @description
 * Interface for the Overlay component
 */
export interface IOverlayStandAlone {
  styles: OverlayVariantStylesType;
  dataTestId?: string;
}

/**
 * @name IOverlay
 * @description
 * Interface for the Overlay component
 * @property {string} variant - The variant of the overlay
 * @property {OverlayVariantStylesType} styles - The styles of the overlay
 * @property {string} dataTestId - The data test id of the overlay
 * @example
 * <Overlay variant="primary" styles={overlayStyles} dataTestId="overlay" />
 */
export interface IOverlay<V = undefined extends string ? unknown : string>
  extends Omit<IOverlayStandAlone, 'styles'>,
    Omit<CustomTokenTypes<OverlayVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
