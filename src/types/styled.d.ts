import 'styled-components';

import { BreakpointsType, MediaQueriesType, POSITIONS, STATES, ZIndexType } from './index';

export interface CustomTheme {
  BREAKPOINTS?: BreakpointsType;
  MEDIA_QUERIES: MediaQueriesType;
  Z_INDEX?: ZIndexType;
  STATES?: STATES;
  POSITIONS?: POSITIONS;
  FOCUS_STYLES?: FlattenSimpleInterpolation;
  FOCUS_STYLES_ALT?: FlattenSimpleInterpolation;
  ILLUSTRATIONS_STYLES?: IllustrationType;
  ICONS_STYLES?: IconType;
  TEXT_STYLES?: TypographyTypes;
  SPACINGS: SpacingsType;
}

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
