import { FunctionalitiesModuleStylesType } from '@/components/functionalitiesModule/types/functionalitiesModuleTheme';
import { RADIUS } from '@/designSystem/kubitWireframe/commons/foundations/borders';
import { POSITIONS } from '@/types/positions/positions';

import {
  ActionBottomSheetVariantType,
  ListOptionsVariantType,
  OptionVariantType,
  TabsVariantType,
} from '../variants';
import { FunctionalitiesModuleVariantType } from './variants';

export const getFunctionalitiesModuleStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): FunctionalitiesModuleStylesType<FunctionalitiesModuleVariantType> => {
  return {
    [FunctionalitiesModuleVariantType.DEFAULT]: {
      tabsContainer: {
        display: 'block',
        border_radius: RADIUS.radius_25,
      },
      buttonContainer: {
        display: 'inline-block',
      },
      actionBottomSheetContainer: {
        display: 'block',
      },
      listOptions: {
        variant: ListOptionsVariantType.FUNCTIONALITIES_MODULE,
        optionVariant: OptionVariantType.INPUT,
      },
      actionBottomSheet: {
        variant: ActionBottomSheetVariantType.FUNCTIONALITIES_MODULE,
        alignTitle: POSITIONS.CENTER,
      },
      tabsVariant: TabsVariantType.FUNCTIONALITIES_MODULE,
    },
  };
};
