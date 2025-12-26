/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'react';

import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

/**
 * @name ILabelStandAlone
 * @description
 * interface for the label standAlone
 */

export interface LabelStandAloneProps extends DataAttributes {
  children?: ReactNode;
  inputId: string;
  required?: boolean;
  requiredSymbol?: ReactNode;
  textVariant?: string;
  weight?: number;
  color?: string;
  cursor?: string;
  asteriskVariant?: string;
  asteriskWeight?: number;
  asteriskColor?: string;
  id?: string;
  textCssClasses?: string;
  asteriskCssClasses?: string;
  customAttributes?: Record<string, string | boolean | any>;
}
