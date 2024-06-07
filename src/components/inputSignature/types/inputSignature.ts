import { ReactNode } from 'react';

import { IText } from '@/components/text';

import { InputSignatureState } from './inputSignatureState';
import { InputSignatureLineStyles, InputSignatureStateStyles } from './inputSignatureTheme';

export interface CustomHandle {
  InputSignature: HTMLDivElement;
  reset: () => void; // Asume que resetCanvas es una función que no toma argumentos y no devuelve nada
}

export interface InputSignatureText extends Omit<IText<string>, 'children'> {
  content?: ReactNode;
}

export interface IInputSignatureStandAlone {
  styles: InputSignatureStateStyles;
  state: InputSignatureState;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  placeholder: InputSignatureText;
  errorText?: InputSignatureText;
  onClickContainer: (e) => void;
  onBlurContainer: () => void;
  dataTestid?: string;
}

export interface IInputSignatureControlled<V = undefined extends string ? unknown : string>
  extends Omit<IInputSignatureStandAlone, 'styles'> {
  variant: V;
  setSignatureStyles?: (signatureStyles?: InputSignatureLineStyles | undefined) => void;
}

type OmitProps =
  | 'state'
  | 'onBlurContainer'
  | 'onClickContainer'
  | 'setSignatureStyles'
  | 'canvasRef';

export interface IInputSignatureUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<IInputSignatureControlled<V>, OmitProps> {
  onChange?: (value) => void;
  disabled?: boolean;
  error?: boolean;
}
