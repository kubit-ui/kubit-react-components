import type { GenericComponentsType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type { UtilsContextType } from '@/lib/provider/utilsProvider/types/utilsProvider';

/**
 * Props for the KubitProvider component.
 * Provides configuration for the entire Kubit component library context.
 */
export interface KubitProviderProps {
  /**
   * The React children to be wrapped by the provider.
   */
  children?: React.ReactNode;

  /**
   * Custom generic components (like Link and Image) to be used throughout the application.
   * Defaults to the library's default generic components if not provided.
   */
  genericComponentsProvider?: GenericComponentsType;

  /**
   * Configuration for utility functions like date helpers, formatting, and assets.
   * Allows overriding the default utility configurations.
   */
  utilsConfig?: UtilsContextType;
}
