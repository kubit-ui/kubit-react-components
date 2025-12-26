import type { GenericComponentsType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type { UtilsContextType } from '@/lib/provider/utilsProvider/types/utilsProvider';

export interface KubitProviderProps {
  children?: React.ReactNode;
  genericComponentsProvider?: GenericComponentsType;
  showErrors?: boolean;
  idCreateModal?: string | null;
  customFallback?: JSX.Element;
  utilsConfig?: UtilsContextType;
}
