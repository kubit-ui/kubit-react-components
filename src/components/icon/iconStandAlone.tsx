import { forwardRef, useState } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { IconComplexProps, IconStandAloneProps } from './types/icon';

const IconComplex = forwardRef<HTMLSpanElement, IconComplexProps>(
  (
    {
      altText,
      className,
      color,
      cssClasses,
      customAttributes,
      emptyAltText,
      height,
      id,
      rotate,
      transitionDuration,
      width,
      ...props
    },
    ref,
  ) => {
    const [svgContent] = useState('');
    const customProps = pickCustomAttributes({ ...props, ...customAttributes });
    const style = cssClasses?.dynamic_values({
      $color: color || '',
      $height: height || '',
      $moveAround: rotate || '',
      $transitionDuration: transitionDuration || '',
      $width: width || '',
    }).object;

    return (
      <span
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: svgContent }}
        ref={ref}
        aria-hidden={emptyAltText}
        aria-label={altText}
        className={classNames(cssClasses?.complex, className)}
        data-testid="icon"
        id={id}
        role={emptyAltText ? 'none' : 'img'}
        style={style}
        {...customProps}
      />
    );
  },
);

export const IconStandAlone = forwardRef<HTMLSpanElement, IconStandAloneProps>(
  (
    {
      altText,
      className,
      color,
      complex = false,
      cssClasses,
      customAttributes,
      height,
      icon,
      id,
      loading = 'lazy',
      rotate,
      transitionDuration,
      twistAnimationTransformValue,
      width,
      ...props
    },
    ref,
  ) => {
    const isEmptyAltText = !altText;
    const customProps = pickCustomAttributes({ ...props, ...customAttributes });

    if (complex) {
      return (
        <IconComplex
          ref={ref}
          altText={altText}
          className={className}
          color={color}
          cssClasses={cssClasses}
          customAttributes={customAttributes}
          data-testid="icon"
          emptyAltText={isEmptyAltText}
          height={height}
          icon={icon}
          id={id}
          rotate={rotate}
          transitionDuration={transitionDuration}
          width={width}
          {...props}
        />
      );
    }

    return (
      <span
        ref={ref}
        aria-hidden={isEmptyAltText}
        aria-label={altText}
        className={classNames(cssClasses?.svg, className)}
        data-testid="icon"
        data-twist-animation-transform-value={!!twistAnimationTransformValue}
        id={id}
        role={isEmptyAltText ? 'svg' : 'img'}
        style={{
          backgroundColor: color,
          height: height,
          maskImage: `url("${icon}")`,
          minHeight: height,
          minWidth: width,
          transform: twistAnimationTransformValue
            ? twistAnimationTransformValue
            : `rotate(${rotate})`,
          transitionDuration: transitionDuration,
          WebkitMaskImage: `url("${icon}")`,
          width: width,
        }}
        {...customProps}
      />
    );
  },
);
