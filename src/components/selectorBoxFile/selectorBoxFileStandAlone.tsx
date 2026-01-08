import { forwardRef, useId } from 'react';

import { STATES } from '@/lib/types/states/states';

import type { SelectorBoxFileStandAloneProps } from './types/selectorBoxFile';

import { SelectorBoxFileAnimation } from './components/selectorBoxFileAnimation';
import { SelectorBoxFileContainerBox } from './components/selectorBoxFileContainerBox';

/**
 * Standalone file selector component for drag-and-drop or click-to-upload file selection.
 *
 * This component renders a file input area with drag-and-drop support, upload button,
 * error messages, and visual feedback for file selection states.
 *
 * @example
 * ```tsx
 * <SelectorBoxFileStandAlone
 *   accept="image/*"
 *   onChange={(files) => console.log(files)}
 * />
 * ```
 */
export const SelectorBoxFileStandAlone = forwardRef<
  HTMLDivElement,
  SelectorBoxFileStandAloneProps
>(
  (
    {
      accept,
      containerBoxStateContent,
      cssClasses,
      filename,
      focus,
      id,
      multiple,
      name,
      onAnimationCompleted,
      onBlur,
      onChange,
      onClick,
      onFocus,
      percentage,
      state,
      ...props
    },
    ref,
  ) => {
    const reactId = useId();
    const uniqueId = `selectorboxfile-${reactId.replace(/:/g, '')}`;
    const inputId = id ?? uniqueId;
    const dataTestId = props['data-testid'] ?? 'selector-box-file';
    return (
      <div ref={ref}>
        <div className={cssClasses?.selector_box_file} data-testid={dataTestId}>
          <div className={cssClasses?.header}>
            {/* The data-focus is controlled in SelectorBoxFileAnimation */}
            <SelectorBoxFileAnimation
              cssClasses={cssClasses}
              data-testid={dataTestId}
              focus={focus}
              percentage={percentage}
              state={state}
              onAnimationCompleted={onAnimationCompleted}
            >
              <SelectorBoxFileContainerBox
                containerBoxStateContent={containerBoxStateContent}
                cssClasses={cssClasses}
                filename={filename}
                focus={false}
                htmlFor={inputId}
                state={state}
              />
            </SelectorBoxFileAnimation>
          </div>
        </div>
        <input
          accept={accept}
          className="kbt-sr-only"
          disabled={state === STATES.DISABLED}
          id={inputId}
          multiple={multiple}
          name={name}
          type="file"
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
        />
      </div>
    );
  },
);
