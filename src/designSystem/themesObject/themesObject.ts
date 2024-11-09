import { Variants } from '@/designSystem/variants';
import { CustomTheme } from '@/types/styled';

import { KUBIT_STYLES } from '../kubit/styles';
import { KUBIT_VARIANTS } from '../kubit/variants';
import { KUBIT_WIREFRAME_ASTRA_STYLES } from '../kubitWireframe/astra/styles';
import { KUBIT_WIREFRAME_ROOT_STYLES } from '../kubitWireframe/root/styles';
import { KUBIT_WIREFRAME_VARIANTS } from '../kubitWireframe/variants';
import { KUBIT_WIREFRAME_VULCAN_STYLES } from '../kubitWireframe/vulcan/styles';

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
