import { Variants } from '@/designSystem/variants';
import { CustomTheme } from '@/types/styled';

import {
  KUBIT_STYLES,
  KUBIT_VARIANTS,
  KUBIT_WIREFRAME_ASTRA_STYLES,
  KUBIT_WIREFRAME_ROOT_STYLES,
  KUBIT_WIREFRAME_VARIANTS,
  KUBIT_WIREFRAME_VULCAN_STYLES,
} from './index';

export interface IThemeObject {
  [theme: string]: CustomTheme;
}

export interface IThemeObjectVariants {
  [theme: string]: Variants;
}

export const themesObject: IThemeObject = {
  kubit: KUBIT_STYLES,
  kubit_wireframe_vulcan: KUBIT_WIREFRAME_VULCAN_STYLES,
  kubit_wireframe_root: KUBIT_WIREFRAME_ROOT_STYLES,
  kubit_wireframe_astra: KUBIT_WIREFRAME_ASTRA_STYLES,
};

export const variantsObject: IThemeObjectVariants = {
  kubit: KUBIT_VARIANTS,
  kubit_wireframe_vulcan: KUBIT_WIREFRAME_VARIANTS,
  kubit_wireframe_root: KUBIT_WIREFRAME_VARIANTS,
  kubit_wireframe_astra: KUBIT_WIREFRAME_VARIANTS,
};
