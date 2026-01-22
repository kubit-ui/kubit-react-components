import { forwardRef, useContext, useEffect, useState } from 'react';

import { StylesContext } from '@/lib/provider/stylesProvider/stylesProvider';
import { UtilsContext } from '@/lib/provider/utilsProvider/utilsProvider';
import { isValidHttpUrl } from '@/lib/utils/is/isValidHttpUrl';

import type { IconProps } from './types/icon';

import { IconBasic } from './icon';

export const IconHost = forwardRef<HTMLSpanElement, IconProps>(
  ({ fallbackIcon, icon, ...props }, ref): JSX.Element | null => {
    const utils = useContext(UtilsContext);
    const styles = useContext(StylesContext);
    const isUrl = isValidHttpUrl(icon);
    const urlIcon = isUrl
      ? icon
      : `${utils?.assets?.baseHost}${styles?.icons?.[icon]}`;
    const [resolvedIcon, setResolvedIcon] = useState(urlIcon);

    useEffect(() => {
      if (fallbackIcon) {
        const isUrlFallbackIcon = isValidHttpUrl(fallbackIcon);
        const urlFallbackIcon = isUrlFallbackIcon
          ? fallbackIcon
          : `${utils?.assets?.baseHost}${styles?.icons?.[fallbackIcon]}`;

        const fetchIcon = async () => {
          try {
            const response = await fetch(urlIcon, { cache: 'no-store' });
            if (!response.ok) {
              throw new Error('Error loading icon');
            }
            setResolvedIcon(urlIcon);
          } catch {
            setResolvedIcon(urlFallbackIcon);
          }
        };

        fetchIcon();
      } else {
        setResolvedIcon(urlIcon);
      }
    }, [urlIcon, fallbackIcon, utils, styles]);

    return <IconBasic {...props} ref={ref} icon={resolvedIcon} />;
  },
);

export { IconHost as Icon };
