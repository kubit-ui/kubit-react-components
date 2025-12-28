import { forwardRef, useId } from 'react';

import { STATES } from '@/lib/types/states/states';

import type { SelectorBoxFileStandAloneProps } from './types/selectorBoxFile';

import { SelectorBoxFileAnimation } from './components/selectorBoxFileAnimation';
import { SelectorBoxFileContainerBox } from './components/selectorBoxFileContainerBox';
import { SelectorBoxFileErrorMessage } from './components/selectorBoxFileErrorMessage';
import { SelectorBoxFileHeader } from './components/selectorBoxFileHeader';

export const SelectorBoxFileStandAlone = forwardRef<
  HTMLDivElement,
  SelectorBoxFileStandAloneProps
>(
  (
    {
      accept,
      button,
      containerBoxStateContent,
      cssClasses,
      description,
      errorMessage,
      errorMessageIcon,
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
      subtitle,
      title,
      tooltip,
      tooltipIcon,
      ...props
    },
    ref,
  ) => {
    const reactId = useId();
    const uniqueId = `selectorboxfile-${reactId.replace(/:/g, '')}`;
    const inputId = id ?? uniqueId;
    const inputHeaderId = `${inputId}HeaderId`;
    const inputErrorId = `${inputId}ErrorId`;
    const dataTestId = props['data-testid'] ?? 'selector-box-file';
    const getAriaDescribedBy = () => {
      let res = '';
      if (title || subtitle) {
        res += ` ${inputHeaderId}`;
      }
      if (state === STATES.ERROR && errorMessage) {
        res += ` ${inputErrorId}`;
      }
      return res || undefined;
    };
    return (
      <div ref={ref}>
        <div className={cssClasses?.selector_box_file} data-testid={dataTestId}>
          <div className={cssClasses?.header}>
            {!!(title || subtitle) && (
              <SelectorBoxFileHeader
                button={button}
                cssClasses={cssClasses}
                description={description}
                headerId={inputHeaderId}
                subtitle={subtitle}
                title={title}
                tooltip={tooltip}
                tooltipIcon={tooltipIcon}
              />
            )}
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
          <SelectorBoxFileErrorMessage
            cssClasses={cssClasses}
            errorMessage={errorMessage}
            errorMessageIcon={errorMessageIcon}
            errorMessageId={inputErrorId}
            state={state}
          />
        </div>
        <input
          accept={accept}
          aria-describedby={getAriaDescribedBy()}
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
