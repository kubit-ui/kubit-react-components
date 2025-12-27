import { forwardRef } from 'react';

import { RenderIf } from '@/lib/components/renderIf/renderIf';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { InputStandAloneProps } from './types/input';

import { InputBase } from '../inputBase/inputBase';
import { InputDecoration } from '../inputDecoration/inputDecoration';

export const InputStandAlone = forwardRef<HTMLDivElement, InputStandAloneProps>(
  (
    {
      cssClasses,
      disabled,
      error,
      filled,
      focused,
      inputBaseId,
      label,
      labelId,
      leftDecoration,
      required,
      rightDecoration,
      ...props
    },
    ref,
  ) => {
    const customProps = pickCustomAttributes(props);

    return (
      <div ref={ref} className={cssClasses?.input} {...customProps}>
        <RenderIf
          condition={
            !!(
              leftDecoration &&
              (leftDecoration?.variant || cssClasses?.left_decoration)
            )
          }
        >
          <InputDecoration
            disabled={disabled}
            error={error}
            {...leftDecoration}
            additionalClasses={
              leftDecoration?.variant ? undefined : cssClasses?.left_decoration
            }
            variant={leftDecoration?.variant}
          />
        </RenderIf>
        <div {...customProps} className={cssClasses?.inputandlabelcontainer}>
          <RenderIf condition={!!cssClasses?.input}>
            <InputBase
              disabled={disabled}
              error={error}
              filled={filled}
              focused={focused}
              required={required}
              {...props}
              additionalClasses={cssClasses?.input_base}
            />
          </RenderIf>
        </div>
        <RenderIf
          condition={
            !!(
              rightDecoration &&
              (rightDecoration?.variant || cssClasses?.right_decoration)
            )
          }
        >
          <InputDecoration
            disabled={disabled}
            error={error}
            filled={filled}
            focused={focused}
            {...rightDecoration}
            additionalClasses={
              rightDecoration?.variant
                ? undefined
                : cssClasses?.right_decoration
            }
            variant={rightDecoration?.variant}
          />
        </RenderIf>
      </div>
    );
  },
);
