import { ArrowOptionsMiddleware, Middleware } from '../types';
import { getCssDimensions } from '../utils/getCssDimensions';
import { getLengthFromAxis } from '../utils/getLengthFromAxis';
import { getMainAxisFromPlacement } from '../utils/getMainAxisFromPlacement';
import { getOffsetParent } from '../utils/getOffsetParent';
import { getSideObjectFromPadding } from '../utils/getPaddingObject';
import { isElement } from '../utils/is.utils';
import { within } from '../utils/within';

export const arrow = (options: ArrowOptionsMiddleware): Middleware => ({
  name: 'arrow',
  options,

  fn(state) {
    // Since `element` is required, we don't Partial<> the type.
    const { element, padding = 0 } = options || {};
    const { x, y, placement, rects, elements } = state;

    if (element === null) {
      return {};
    }

    const paddingObject = getSideObjectFromPadding(padding);
    const coords = { x, y };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = getCssDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';

    const endDiff =
      rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];

    const arrowOffsetParent = getOffsetParent(element);
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !isElement(arrowOffsetParent)) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }

    const centerToReference = endDiff / 2 - startDiff / 2;

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.

    const shouldAddOffset =
      center !== offset &&
      rects.reference[length] / 2 -
        (center < min ? paddingObject[minProp] : paddingObject[maxProp]) -
        arrowDimensions[length] / 2 <
        0;
    const alignmentOffset = shouldAddOffset ? (center < min ? min - center : max - center) : 0;

    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset,
      },
    };
  },
});
