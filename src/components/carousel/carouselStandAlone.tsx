import { type ForwardedRef, forwardRef } from 'react';

import type { ICarouselStandAlone } from './types/carousel';

/**
 * Standalone carousel component for displaying a scrollable list of elements.
 *
 * This component renders a carousel container with viewer and content areas,
 * supporting center mode, custom widths, and accessibility features for screen readers.
 *
 * @example
 * ```tsx
 * <CarouselStandAlone
 *   elements={slides}
 *   centerMode={true}
 *   disabled={false}
 * />
 * ```
 */
const CarouselStandAloneComponent = (
  {
    allowModifySliceWidth,
    centerMode,
    contentContainer,
    contentContainerRef,
    cssClasses,
    disabled,
    elements,
    rootContainer,
    screenReaderOnly,
    viewerContainer,
    viewerContainerRef,
    ...dataAttributes
  }: ICarouselStandAlone,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const dataTestId = dataAttributes['data-testid'] ?? 'carousel';
  return (
    <div
      ref={ref}
      aria-roledescription="carousel"
      className={cssClasses?.carousel}
      data-testid={dataTestId}
      {...dataAttributes}
      {...rootContainer}
    >
      <div
        ref={viewerContainerRef}
        className={cssClasses?.viewer}
        data-allow-modify-slice-width={allowModifySliceWidth}
        data-disabled={disabled}
        data-testid={`${dataTestId}-viewer`}
        {...viewerContainer}
      >
        <div
          ref={contentContainerRef}
          aria-live="polite"
          className={cssClasses?.content}
          data-center-mode={centerMode}
          data-testid={`${dataTestId}-content`}
          {...contentContainer}
        >
          {elements}
        </div>
      </div>
      {screenReaderOnly && (
        <screen-reader-only aria-live="off" {...screenReaderOnly}>
          {screenReaderOnly.content}
        </screen-reader-only>
      )}
    </div>
  );
};

export const CarouselStandAlone = forwardRef(CarouselStandAloneComponent);
