import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { CommonIconProps } from '@/lib/types/commons/icon';

import { isString } from '../../is/isString';

/**
 * Processes an icon input and returns it in a standardized format.
 *
 * @param icon - The icon to process. It can be a string representing the icon name or an object containing icon properties.
 * @returns An object of type `ElementOrIconProps` containing the processed icon.
 *
 * @remarks
 * - If the input is a string, it is wrapped in an object with the `icon` property.
 * - If the input is already an object, it is returned as-is.
 * - If the input is `undefined`, an empty object is returned.
 *
 * @example
 * ```typescript
 * const icon1 = processIcon('home'); // Returns { icon: 'home' }
 * const icon2 = processIcon({ icon: 'settings', size: 'large' }); // Returns { icon: 'settings', size: 'large' }
 * const icon3 = processIcon(); // Returns {}
 * ```
 */
export const processIcon = (icon?: CommonIconProps): ElementOrIconProps => {
  if (!icon) {
    return {};
  }
  return isString(icon) ? { icon } : icon;
};
