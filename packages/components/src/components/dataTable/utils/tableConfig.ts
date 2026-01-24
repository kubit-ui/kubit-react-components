import type { DataTableTableConfigProps } from '../types/dataTable';

interface ApplyZIndexToWrapperParams {
  tableConfig?: DataTableTableConfigProps;
  zIndex?: number;
}

export const applyZIndexToWrapper = ({
  tableConfig,
}: ApplyZIndexToWrapperParams): DataTableTableConfigProps => {
  const overridenTableConfig = {
    ...tableConfig,
  };
  return overridenTableConfig;
};

interface ApplyPositionToWrapperParams {
  tableConfig?: DataTableTableConfigProps;
  position?: string;
}

export const applyPositionToWrapper = ({
  tableConfig,
}: ApplyPositionToWrapperParams): DataTableTableConfigProps => {
  const overridenTableConfig = {
    ...tableConfig,
  };
  return overridenTableConfig;
};
