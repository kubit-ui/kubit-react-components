import { useEffect, useId, useRef, useState } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { SliderCssClasses } from '../types/slider';

export interface SliderScaleStandAloneProps {
  showScale: boolean;
  scaleOffsets: number[];
  cssClasses?: SliderCssClasses;
  customAttributes?: Record<string, string>;
}

/**
 * Standalone slider scale component for displaying tick marks.
 *
 * This component renders scale marks along the slider track to indicate
 * value positions or intervals.
 *
 * @example
 * ```tsx
 * <SliderScaleStandAlone
 *   showScale={true}
 *   scaleOffsets={[0, 25, 50, 75, 100]}
 * />
 * ```
 */
export const SliderScaleStandAlone = ({
  cssClasses,
  customAttributes,
  scaleOffsets,
  showScale,
}: SliderScaleStandAloneProps): JSX.Element | null => {
  const reactId = useId();
  const uniqueTickmarksId = `tickmarks-${reactId.replace(/:/g, '')}`;
  const [width, setWidth] = useState('0px');
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      setWidth(`${spanRef.current.offsetWidth}px`);
    }
  }, []);

  if (!showScale) {
    return null;
  }
  if (!showScale) {
    return null;
  }
  return (
    <div
      className={cssClasses?.scalecontainer}
      id={uniqueTickmarksId}
      {...pickCustomAttributes(customAttributes)}
    >
      {scaleOffsets.map((scaleElementOffset, index) => {
        const inlineStyle = {
          left: `calc(${scaleElementOffset}% - ${width} / 2)`,
        };
        return (
          <span
            key={`${uniqueTickmarksId}-${index.toString()}`}
            className={cssClasses?.scaleoption}
            style={inlineStyle}
          />
        );
      })}
    </div>
  );
};
