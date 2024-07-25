import { CSSProp, css } from 'styled-components';

import { InputHelpMessagePosition } from '@/components/input/types';
// mixins
import {
  contentBottomMargin,
  innerLeftContentPosition,
  innerRightContentPosition,
  inputPadding,
  labelInTopStyles,
} from '@/styles/mixins';
import { POSITIONS } from '@/types/positions';

const getLeftExtraStyles = (
  affixPosition?: POSITIONS,
  isOutAffixPosition?: boolean
): CSSProp | undefined => {
  if (affixPosition === POSITIONS.LEFT && !isOutAffixPosition) {
    return css`
      ${innerLeftContentPosition}
    `;
  }
  return undefined;
};

const getRightExtraStyles = (
  affixPosition?: POSITIONS,
  isOutAffixPosition?: boolean
): CSSProp | undefined => {
  if (affixPosition === POSITIONS.RIGHT && !isOutAffixPosition) {
    return innerRightContentPosition();
  }
  return undefined;
};

const getTopExtraStyles = (
  affixPosition?: POSITIONS,
  width?: number,
  isOutAffixPosition?: boolean,
  inputWidth?: number
): CSSProp | undefined => {
  if (affixPosition === POSITIONS.LEFT && isOutAffixPosition) {
    return labelInTopStyles(width || 0, inputWidth || 0);
  }
  return undefined;
};

const getBottomExtraStyles = (
  affixPosition?: POSITIONS,
  width?: number,
  isOutAffixPosition?: boolean,
  helpTextPosition?: InputHelpMessagePosition
): CSSProp | undefined => {
  if (
    affixPosition === POSITIONS.LEFT &&
    isOutAffixPosition &&
    helpTextPosition === InputHelpMessagePosition.BOTTOM
  ) {
    return contentBottomMargin(width || 0, 0);
  }
  return undefined;
};

const getCenterExtraStyles = (
  affixPosition?: POSITIONS,
  width?: number,
  isOutAffixPosition?: boolean
) => {
  if (affixPosition === POSITIONS.LEFT && !isOutAffixPosition) {
    return inputPadding(width || 0, 0);
  }
  return undefined;
};

// Depending on the position of the affix the styles change
export const getExtraStyles = (
  stylesPosition: POSITIONS,
  affixPosition?: POSITIONS,
  width?: number,
  isOutAffixPosition?: boolean,
  helpTextPosition?: InputHelpMessagePosition,
  inputWidth?: number
): CSSProp | undefined => {
  if (stylesPosition === POSITIONS.LEFT) {
    return getLeftExtraStyles(affixPosition, isOutAffixPosition);
  }
  if (stylesPosition === POSITIONS.RIGHT) {
    return getRightExtraStyles(affixPosition, isOutAffixPosition);
  }
  if (stylesPosition === POSITIONS.TOP) {
    return getTopExtraStyles(affixPosition, width, isOutAffixPosition, inputWidth);
  }
  if (stylesPosition === POSITIONS.BOTTOM) {
    return getBottomExtraStyles(affixPosition, width, isOutAffixPosition, helpTextPosition);
  }
  if (stylesPosition === POSITIONS.CENTER) {
    return getCenterExtraStyles(affixPosition, width, isOutAffixPosition);
  }
  return undefined;
};
