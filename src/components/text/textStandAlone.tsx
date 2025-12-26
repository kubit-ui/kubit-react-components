import './text.css';

import { forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import type { TextStandAloneProps } from './types/text';

export const TextStandAlone = forwardRef<
  HTMLParagraphElement,
  TextStandAloneProps
>(
  (
    {
      align,
      children,
      color,
      component,
      cssClasses,
      cursor,
      customAttributes,
      decoration,
      disabled,
      display,
      draggable,
      filter,
      htmlFor,
      id,
      maxTruncatedLines,
      onClick,
      role,
      target,
      textSizeAdjust,
      textWrap,
      transform,
      truncate,
      weight,
      wordBreak,
      wordWrap,
      ...props
    },
    ref,
  ): JSX.Element => {
    const customProps = pickCustomAttributes({
      ...props,
      ...customAttributes,
    });
    const className = classNames(
      'kbt-text',
      cssClasses?.text,
      {
        'kbt-text--disabled': disabled ?? false,
      },
      {
        'kbt-text--truncate': truncate || !!maxTruncatedLines,
      },
    );

    const style = {
      color: color,
      cursor: cursor,
      display: display,
      filter: filter,
      fontWeight: weight,
      textAlign: align,
      textDecoration: decoration,
      textTransform: transform,
      textWrap: textWrap,
      wordBreak: wordBreak,
      wordWrap: wordWrap,
      textSizeAdjust: textSizeAdjust,
    };
    return (
      <CustomComponent
        ref={ref}
        className={className}
        component={component}
        data-testid="text"
        draggable={draggable}
        htmlFor={htmlFor}
        id={id}
        role={role}
        style={style}
        target={target}
        onClick={onClick}
        {...customProps}
      >
        {children}
      </CustomComponent>
    );
  },
);
