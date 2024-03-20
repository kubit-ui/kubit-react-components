import { TooltipAlignType } from '../types';

export type Axis = 'x' | 'y';
export type Length = 'width' | 'height';
export type Strategy = 'absolute' | 'fixed';

export type Dimensions = {
  width: number;
  height: number;
};

export type Coords = {
  x: number;
  y: number;
};

export type SideObject = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type Rect = Dimensions & Coords;

export type ClientRectObject = Rect & SideObject;

export type ElementScroll = {
  scrollLeft: number;
  scrollTop: number;
};

export interface VirtualElement {
  getBoundingClientRect(): ClientRectObject;
  contextElement?: Element;
}

export type ReferenceElement = Element | VirtualElement;

export interface ElementRects {
  reference: Rect;
  floating: Rect;
}

export type Padding = number | Partial<SideObject>;
export type Boundary = string;
export type RootBoundary = 'viewport' | 'document' | Rect;

export type FloatingElement = ReferenceElement | Element | object;

export interface Elements {
  reference: ReferenceElement;
  floating: FloatingElement;
}

export interface MiddlewareData {
  name?: string;
  arrow?: Partial<Coords> & {
    centerOffset: number;
  };
  autoPlacement?: {
    index?: number;
    overflows: Array<{
      placement: TooltipAlignType;
      overflows: Array<number>;
    }>;
  };
  flip?: {
    index?: number;
    overflows: Array<{
      placement: TooltipAlignType;
      overflows: Array<number>;
    }>;
  };
  hide?: {
    referenceHidden?: boolean;
    escaped?: boolean;
    referenceHiddenOffsets?: SideObject;
    escapedOffsets?: SideObject;
  };
  offset?: Coords;
  shift?: Coords;
  data?: object;
}

export interface MiddlewareState extends Coords {
  initialPlacement: TooltipAlignType;
  placement: TooltipAlignType;
  strategy: Strategy;
  middlewareData: MiddlewareData;
  elements: Elements;
  rects: ElementRects;
}

export type ElementContext = 'reference' | 'floating';

export interface DetectOverflowOptions {
  /**
   * The clipping element(s) or area in which overflow will be checked.
   * @default 'clippingAncestors'
   */
  boundary: Boundary;

  /**
   * The root clipping area in which overflow will be checked.
   * @default 'viewport'
   */
  rootBoundary: RootBoundary;

  /**
   * The element in which overflow is being checked relative to a boundary.
   * @default 'floating'
   */
  elementContext: ElementContext;

  /**
   * Whether to check for overflow using the alternate element's boundary
   * (`clippingAncestors` boundary only).
   * @default false
   */
  altBoundary: boolean;

  /**
   * Virtual padding for the resolved overflow detection offsets.
   * @default 0
   */
  padding: Padding;
}

// Middleware return data type

type ArrowMiddlewareReturnData = {
  [x: string]: number;
  centerOffset: number;
};

type FlipMiddlewareReturnData = {
  index: number;
  overflows: {
    placement: TooltipAlignType;
    overflows: number[];
  }[];
};

type OffsetMiddlewareReturnData = Coords;

type ShiftMiddlewareReturnData = { x: number; y: number };

export interface MiddlewareReturn extends Partial<Coords> {
  data?:
    | ArrowMiddlewareReturnData
    | FlipMiddlewareReturnData
    | OffsetMiddlewareReturnData
    | ShiftMiddlewareReturnData
    | object;
  reset?:
    | true
    | boolean
    | {
        placement?: TooltipAlignType;
        rects?: true | ElementRects;
      };
}

export type Middleware = {
  name: string;
  options?: ArrowOptionsMiddleware | FlipOptionsMiddleware | ShiftOptionsMiddleware | number;
  fn: (state: MiddlewareState) => MiddlewareReturn;
};

export interface ArrowOptionsMiddleware {
  /**
   * The arrow element to be positioned.
   * @default undefined
   */
  element: Element | null;

  /**
   * The padding between the arrow element and the floating element edges.
   * Useful when the floating element has rounded corners.
   * @default 0
   */
  padding?: Padding;
}

interface FlipPartialOptionsMiddleware {
  /**
   * The axis that runs along the side of the floating element. Determines
   * whether overflow along this axis is checked to perform a flip.
   * @default true
   */
  mainAxis: boolean;

  /**
   * The axis that runs along the alignment of the floating element. Determines
   * whether overflow along this axis is checked to perform a flip.
   * @default true
   */
  crossAxis: boolean;

  /**
   * Placements to try sequentially if the preferred `placement` does not fit.
   * @default [oppositePlacement] (computed)
   */
  fallbackPlacements: Array<TooltipAlignType>;

  /**
   * What strategy to use when no placements fit.
   * @default 'bestFit'
   */
  fallbackStrategy: 'bestFit' | 'initialPlacement';
}

export type FlipOptionsMiddleware = Partial<FlipPartialOptionsMiddleware & DetectOverflowOptions>;

interface ShiftPartialOptionsMiddleware {
  /**
   * The axis that runs along the alignment of the floating element. Determines
   * whether overflow along this axis is checked to perform shifting.
   * @default true
   */
  mainAxis: boolean;

  /**
   * The axis that runs along the side of the floating element. Determines
   * whether overflow along this axis is checked to perform shifting.
   * @default false
   */
  crossAxis: boolean;

  /**
   * Accepts a function that limits the shifting done in order to prevent
   * detachment.
   */
  limiter: {
    fn: (state: MiddlewareState) => Coords;
  };
}

export type ShiftOptionsMiddleware = Partial<ShiftPartialOptionsMiddleware & DetectOverflowOptions>;
