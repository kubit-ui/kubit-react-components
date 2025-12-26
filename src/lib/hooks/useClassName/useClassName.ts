import { useStylesContext } from '@/lib/provider/stylesProvider/stylesProvider';
import type { RecoverComponentStyles } from '@/lib/types/cssGenerator/cssGenerator';

/**
 * Custom hook to retrieve and combine component class names from the styles provider
 * with any additional classes provided.
 *
 * @template T - The type of the styles object returned by the provider.
 * @param {Object} params - Parameters for the hook.
 * @param {string} params.component - The component name to retrieve styles for.
 * @param {string} [params.variant] - The style variant to use.
 * @param {Partial<T>} [params.additionalClasses] - Additional CSS classes to append, by key.
 * @returns {T & { className: string }} - The styles object with a combined className property.
 *
 * @example
 * const { className, root } = useClassname({
 *   component: 'button',
 *   variant: 'primary',
 *   additionalClasses: { root: 'my-extra-class', text: 'text-bold' }
 * });
 */
export const useClassName: RecoverComponentStyles = ({
  additionalClassNames,
  component,
  variant,
}) => {
  const { getComponentStyles } = useStylesContext();
  return getComponentStyles({ additionalClassNames, component, variant });
};
