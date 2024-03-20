import { CommonStyleType, POSITIONS } from '@/types';

export type FunctionalitiesModuleVariantStylesType = {
  tabsContainer?: CommonStyleType;
  buttonContainer?: CommonStyleType;
  actionBottomSheetContainer?: CommonStyleType;
  contentContainer?: CommonStyleType;
  contentNotLastChild?: CommonStyleType;
  listOptions?: {
    variant?: string;
    optionVariant?: string;
  };
  actionBottomSheet?: {
    variant?: string;
    alignTitle?: POSITIONS;
  };
  tabsVariant?: string;
};

export type FunctionalitiesModuleStylesType<P extends string | number | symbol> = {
  [key in P]?: FunctionalitiesModuleVariantStylesType;
};
