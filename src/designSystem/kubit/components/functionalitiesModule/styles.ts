import { FunctionalitiesModuleStylesType } from '@/components/functionalitiesModule/types';
import { DeviceBreakpointsType, POSITIONS } from '@/types';

import { RADIUS, SPACINGS } from '../../foundations';
import {
  ActionBottomSheetVariantType,
  ListOptionsVariantType,
  OptionVariantType,
  TabsVariantType,
} from '../variants';
import { FunctionalitiesModuleVariantType } from './variants';

export const FUNCTIONALITIES_MODULE_STYLES: FunctionalitiesModuleStylesType<FunctionalitiesModuleVariantType> =
  {
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
      contentContainer: {
        [DeviceBreakpointsType.DESKTOP]: {
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        },
      },
      contentNotLastChild: {
        [DeviceBreakpointsType.TABLET]: {
          padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_0} ${SPACINGS.spacing_50} ${SPACINGS.spacing_0}`,
        },
        [DeviceBreakpointsType.MOBILE]: {
          padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_0} ${SPACINGS.spacing_50} ${SPACINGS.spacing_0}`,
        },
      },
      listOptions: {
        variant: ListOptionsVariantType.SIDE_MENU_SECTION,
        optionVariant: OptionVariantType.SIDE_MENU_LEVEL_2,
      },
      actionBottomSheet: {
        variant: ActionBottomSheetVariantType.DEFAULT,
        alignTitle: POSITIONS.CENTER,
      },
      tabsVariant: TabsVariantType.DEFAULT,
    },
    [FunctionalitiesModuleVariantType.DEFAULT_NO_ANIMATION]: {
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
      contentContainer: {
        [DeviceBreakpointsType.DESKTOP]: {
          padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
        },
      },
      contentNotLastChild: {
        [DeviceBreakpointsType.TABLET]: {
          padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_0} ${SPACINGS.spacing_50} ${SPACINGS.spacing_0}`,
        },
        [DeviceBreakpointsType.MOBILE]: {
          padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_0} ${SPACINGS.spacing_50} ${SPACINGS.spacing_0}`,
        },
      },
      listOptions: {
        variant: ListOptionsVariantType.SIDE_MENU_SECTION,
        optionVariant: OptionVariantType.SIDE_MENU_LEVEL_2,
      },
      actionBottomSheet: {
        variant: ActionBottomSheetVariantType.DEFAULT,
        alignTitle: POSITIONS.CENTER,
      },
      tabsVariant: TabsVariantType.DEFAULT,
    },
  };
