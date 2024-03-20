import { FunctionalitiesModuleStylesType } from '@/components/functionalitiesModule/types';
import { DeviceBreakpointsType, POSITIONS } from '@/types';

import { RADIUS } from '../../foundations';
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
        [DeviceBreakpointsType.TABLET]: {
          display: 'none',
        },
        [DeviceBreakpointsType.MOBILE]: {
          display: 'none',
        },
      },
      buttonContainer: {
        display: 'inline-block',
        [DeviceBreakpointsType.DESKTOP]: {
          display: 'none',
        },
      },
      actionBottomSheetContainer: {
        display: 'none',
        [DeviceBreakpointsType.TABLET]: {
          display: 'block',
        },
        [DeviceBreakpointsType.MOBILE]: {
          display: 'block',
        },
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
