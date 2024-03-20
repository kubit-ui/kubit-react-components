import * as React from 'react';

import { TagStylesOptionPropsType } from '../types/tagTheme';

/**
 * @description
 * ArrowShape component is used to render the arrow shape for the tag component.
 */
export interface IShape {
  variant: string;
  dataTestId: string | undefined;
  height: number;
  withBorders: boolean;
  withTransparency: boolean;
  optionStyles: TagStylesOptionPropsType;
}

/**
 * @description
 * ArrowShape component is used to render the arrow shape for the tag component.
 */
export const ArrowShape = (props: IShape): JSX.Element => {
  return props.withTransparency ? (
    <svg
      data-testid={`${props.dataTestId}ArrowSvg`}
      height={`${props.height}px`}
      width={`${props.height}px`}
    >
      <polygon
        fill={`${
          props.withBorders
            ? props.optionStyles.wrapper?.border_color
            : props.optionStyles.wrapper?.background_color
        }`}
        points={`0 0, ${props.height / 2} ${props.height / 2},  0 ${props.height}, 0 ${
          props.height - 1
        }, ${props.height / 2 - 1} ${props.height / 2},0 1`}
      />
    </svg>
  ) : (
    <svg
      data-testid={`${props.dataTestId}ArrowSvg`}
      height={`${props.height}px`}
      width={`${props.height}px`}
    >
      <polygon
        fill={`${
          props.withBorders
            ? props.optionStyles.wrapper?.border_color
            : props.optionStyles.wrapper?.background_color
        }`}
        points={`0, 0, 0, ${props.height}, ${props.height / 2}, ${props.height / 2}`}
      />
      <polygon
        fill={`${props.optionStyles.wrapper?.background_color}`}
        points={`0, 1, 0, ${props.height - 1}, ${props.height / 2 - 1}, ${props.height / 2}`}
      />
    </svg>
  );
};
