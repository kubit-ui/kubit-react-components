import * as React from 'react';

import { TagStylesOptionPropsType } from '../types/tagTheme';

/**
 *  @description
 * RibbonShape component is used to render the ribbon shape for the tag component.
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
 * RibbonShape component is used to render the ribbon shape for the tag component.
 */
export const RibbonShape = (props: IShape): JSX.Element => {
  return props.withTransparency ? (
    <svg
      data-testid={`${props.dataTestId}RibbonSvg`}
      height={`${props.height}px`}
      width={`${props.height / 2 + 0.5}px`}
    >
      <polygon
        fill={`${
          props.withBorders
            ? props.optionStyles.wrapper?.border_color
            : props.optionStyles.wrapper?.background_color
        }`}
        points={`0 0, ${props.height / 2 + 0.5} 0, ${props.height / 2 + 0.5} 1, 2 1,${
          props.height / 2 + 0.5
        } ${props.height / 2 - 0.5},${props.height / 2 + 0.5} ${props.height / 2 + 0.5}`}
      />
      <polygon
        fill={`${
          props.withBorders
            ? props.optionStyles.wrapper?.border_color
            : props.optionStyles.wrapper?.background_color
        }`}
        points={`${props.height / 2 + 0.5} ${props.height}, 0 ${props.height}, ${
          props.height / 2
        } ${props.height / 2 - 1}, ${props.height / 2 + 0.5} ${props.height / 2 - 0.5}, 2 ${
          props.height - 1
        }, ${props.height / 2 + 0.5} ${props.height - 1}`}
      />
    </svg>
  ) : (
    <svg
      data-testid={`${props.dataTestId}RibbonSvg`}
      height={`${props.height}px`}
      width={`${props.height / 2 + 0.5}px`}
    >
      <polygon
        fill={`${
          props.withBorders
            ? props.optionStyles.wrapper?.border_color
            : props.optionStyles.wrapper?.background_color
        }`}
        points={`0 0, ${props.height / 2 + 0.5} 0, ${props.height / 2 + 0.5} ${
          props.height / 2 + 0.5
        }`}
      />
      <polygon
        fill={`${props.optionStyles.wrapper?.background_color}`}
        points={`2 1, ${props.height / 2 + 0.5} 1, ${props.height / 2 + 0.5} ${
          props.height / 2 - 0.5
        }`}
      />
      <polygon
        fill={`${
          props.withBorders
            ? props.optionStyles.wrapper?.border_color
            : props.optionStyles.wrapper?.background_color
        }`}
        points={`${props.height / 2 + 0.5} ${props.height}, 0 ${props.height}, ${
          props.height / 2
        } ${props.height / 2 - 1}`}
      />
      <polygon
        fill={`${props.optionStyles.wrapper?.background_color}`}
        points={`${props.height / 2 + 0.5} ${props.height - 1}, 2 ${props.height - 1}, ${
          props.height / 2 + 0.5
        } ${props.height / 2 - 0.5}`}
      />
    </svg>
  );
};
