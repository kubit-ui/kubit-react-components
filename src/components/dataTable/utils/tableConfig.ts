import { DataTableTableConfigType } from '../types';

type ApplyZIndexToWrapperParams = {
  tableConfig?: DataTableTableConfigType;
  zIndex?: number;
};

export const applyZIndexToWrapper = ({
  tableConfig,
  zIndex,
}: ApplyZIndexToWrapperParams): DataTableTableConfigType => {
  const overridenTableConfig = {
    ...tableConfig,
    ctv: {
      ...tableConfig?.ctv,
      wrapper: {
        ...tableConfig?.ctv?.wrapper,
        z_index: tableConfig?.ctv?.wrapper?.z_index ?? zIndex,
      },
    },
  };
  return overridenTableConfig;
};

type ApplyPositionToWrapperParams = {
  tableConfig?: DataTableTableConfigType;
  position?: string;
};

export const applyPositionToWrapper = ({
  tableConfig,
  position,
}: ApplyPositionToWrapperParams): DataTableTableConfigType => {
  const overridenTableConfig = {
    ...tableConfig,
    ctv: {
      ...tableConfig?.ctv,
      wrapper: {
        ...tableConfig?.ctv?.wrapper,
        position: tableConfig?.ctv?.wrapper?.position ?? position,
      },
    },
  };
  return overridenTableConfig;
};
