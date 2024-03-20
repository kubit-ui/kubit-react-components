// type
import { CheckboxWithLabelState, CheckboxWithLabelStyles } from '@/components/checkboxWithLabel';
import { CommonStyleType } from '@/types';

import { COLORS, FONT_WEIGHT, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { CheckboxWithLabelVariants } from './variants';

const descriptionHelperTextContainerCommonProps: CommonStyleType = {
  padding_left: SPACINGS.spacing_450,
  gap: SPACINGS.spacing_150,
};

export const CHECKBOX_WITH_LABEL_STYLES: CheckboxWithLabelStyles<CheckboxWithLabelVariants> = {
  [CheckboxWithLabelVariants.DEFAULT]: {
    [CheckboxWithLabelState.DEFAULT_UNSELECTED]: {
      label: {
        font_variant: TextVariantType.DEFAULT,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      labelWhenDescription: {
        font_variant: TextVariantType.DEFAULT,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      descriptionHelperTextContainer: {
        ...descriptionHelperTextContainerCommonProps,
      },
    },
    [CheckboxWithLabelState.DEFAULT_SELECTED]: {
      label: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      labelWhenDescription: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      descriptionHelperTextContainer: {
        ...descriptionHelperTextContainerCommonProps,
      },
    },
    [CheckboxWithLabelState.DISABLED_UNSELECTED]: {
      label: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      labelWhenDescription: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      descriptionHelperTextContainer: {
        ...descriptionHelperTextContainerCommonProps,
      },
    },
    [CheckboxWithLabelState.DISABLED_SELECTED]: {
      label: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      labelWhenDescription: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      descriptionHelperTextContainer: {
        ...descriptionHelperTextContainerCommonProps,
      },
    },
    [CheckboxWithLabelState.ERROR]: {
      label: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      labelWhenDescription: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_600,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      descriptionHelperTextContainer: {
        ...descriptionHelperTextContainerCommonProps,
      },
      description: {
        font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.NEUTRAL.color_neutral_bg_100,
      },
      helperText: {
        font_variant: TextVariantType.DEFAULT,
        font_weight: FONT_WEIGHT.font_weight_400,
        color: COLORS.ACCENT.color_accent_default_bg_100,
      },
    },
  },
};
