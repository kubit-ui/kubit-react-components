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
 * @description
 * SliderScaleStandAlone component is used to display a scale for the slider.
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
  }, [spanRef.current]);

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
