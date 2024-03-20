import * as React from 'react';

/**
 * @name ILabelStandAlone
 * @description
 * interface for the label standAlone
 */

export interface ILabelStandAlone {
  children?: React.ReactNode;
  inputId: string;
  required?: boolean;
  requiredSymbol?: React.ReactNode;
  textVariant?: string;
  weight?: number;
  color?: string;
  cursor?: string;
  asteriskVariant?: string;
  asteriskWeight?: number;
  asteriskColor?: string;
  dataTestId?: string;
  id?: string;
}
