import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { InputSignatureState } from './inputSignatureState';
import type { InputSignatureLineStyles } from './inputSignatureTheme';

type InputSignatureCssClasses = ComponentSelected<
  ComponentsTypesComponents['INPUT_SIGNATURE']
>;

/**
 * Represents a custom handle for the InputSignature component.
 */
export interface InputSignatureCustomHandle {
  InputSignature: HTMLDivElement;
  reset: () => void; // Resets the canvas
}

/**
 * Interface for the standalone InputSignature component.
 * Includes properties for state, canvas reference, event handlers, and CSS classes.
 */
export interface InputSignatureStandAloneProps extends DataAttributes {
  state: InputSignatureState;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  placeholder: CommonTextProps;
  errorText?: CommonTextProps;
  onClickContainer: (e: React.MouseEvent<HTMLDivElement>) => void;
  onBlurContainer: () => void;
  cssClasses?: InputSignatureCssClasses;
}

/**
 * Interface for the controlled InputSignature component.
 * Extends the InputSignatureStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the InputSignature.
 */
export interface InputSignatureControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends InputSignatureStandAloneProps {
  variant?: Variant;
  setSignatureStyles?: (signatureStyles?: InputSignatureLineStyles) => void;
  additionalClasses?: Partial<InputSignatureCssClasses>;
  signatureStyle?: InputSignatureLineStyles;
}

/**
 * Interface for the uncontrolled InputSignature component.
 * Extends the InputSignatureProps interface and omits specific properties.
 *
 * @template Variant - The type of the variant for the InputSignature.
 */
export interface InputSignatureUnControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
  InputSignatureControlledProps<Variant>,
  'onBlurContainer' | 'onClickContainer' | 'setSignatureStyles' | 'canvasRef'
> {
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
}
