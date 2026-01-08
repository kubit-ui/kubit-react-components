import { type ForwardedRef, forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { AlertStandAloneProps } from './types/alert';

/**
 * Standalone alert component for displaying notification messages.
 *
 * This component renders a simple alert box with content.
 * It supports different visual states through variants and accessibility features.
 * Always visible - no open/close functionality.
 *
 * @example
 * ```tsx
 * <AlertStandAlone
 *   content={{ content: "Operation completed successfully" }}
 *   variant="success"
 * />
 * ```
 */
export const AlertStandAlone = forwardRef<HTMLDivElement, AlertStandAloneProps>(
  (
    {
      ariaLive = 'off',
      content,
      cssClasses,
      id,
      role,
      ...props
    }: AlertStandAloneProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const dataTestId = props['data-testid'] || 'alert';
    const { 'data-testid': _, ...restProps } = props;
    const customProps = pickCustomAttributes(restProps);

    const processedContent = processTextProp(content);

    const buildContent = () => {
      return typeof content === 'string' ? (
        <Text
          additionalClasses={{
            text: cssClasses?.description,
          }}
          component="p"
          {...processedContent}
        />
      ) : (
        processedContent.children
      );
    };

    return (
      <div
        {...customProps}
        ref={ref}
        aria-live={ariaLive}
        className={cssClasses?.container}
        data-testid={dataTestId}
        id={id}
        role={role}
      >
        <div className={cssClasses?.contentcontainer}>{buildContent()}</div>
      </div>
    );
  },
);
