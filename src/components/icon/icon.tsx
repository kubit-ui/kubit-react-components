import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { IconStandAlone } from './iconStandAlone';
import type { IconProps } from './types/icon';

export const IconBasic = forwardRef<HTMLSpanElement, IconProps>(
  (
    { className, color, height, icon, id, tabIndex, title, width, ...props },
    ref,
  ): JSX.Element | null => {
    const { altText, disabled, onClick, screenReaderText, ...iconProps } =
      props;
    const customProps = pickCustomAttributes(props);
    const colorSetToUndefined = Object.keys(props).includes('color') && !color;
    const isLinearIcon = !colorSetToUndefined && !!color;
    const cssClasses = useClassName({
      component: 'ICON',
    });

    if (!icon) {
      return null;
    }

    if (onClick) {
      return (
        <button
          aria-disabled={disabled}
          aria-label={props['aria-label'] || altText}
          className={classNames(cssClasses.button, className)}
          data-testid="button"
          disabled={disabled}
          id={id}
          style={{ height, width }}
          tabIndex={tabIndex}
          title={title || ''}
          type="button"
          onClick={onClick}
          {...customProps}
        >
          <screen-reader-only>{screenReaderText}</screen-reader-only>
          <IconStandAlone
            icon={icon}
            {...iconProps}
            ref={ref}
            aria-label={undefined}
            className={className}
            cssClasses={cssClasses}
            data-testid={undefined}
            height={height}
            id={undefined}
            linearIcon={isLinearIcon}
            width={width}
          />
        </button>
      );
    }

    return (
      <IconStandAlone
        icon={icon}
        {...iconProps}
        ref={ref}
        altText={altText}
        className={className}
        cssClasses={cssClasses}
        data-testid="icon"
        height={height}
        linearIcon={isLinearIcon}
        width={width}
      />
    );
  },
);

export { IconBasic as Icon };
