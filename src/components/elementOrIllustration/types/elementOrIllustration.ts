import { IIllustration } from '../../illustration';

/**
 * @name IElementOrillustration
 * @description
 * Interface for the ElementOrillustration component
 */
export interface IElementOrillustration extends Omit<IIllustration, 'illustration'> {
  illustration?: string | JSX.Element | HTMLElement | React.ReactNode;
}
