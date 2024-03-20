import { TextAreaStateType, TextAreaStylesType } from '@/components/textArea';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { FONT_WEIGHT, PARAGRAPH, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text';
import { TextCountVariantType } from '../textCount/variants';
import { TextAreaVariantType } from './variants';

const commonContainer = {
  width: ' 100%',
  display: 'flex',
  flex_direction: 'column',
};

const commonTitleContainer = {
  margin_bottom: SPACINGS.spacing_100,
};

const commonTitle = {
  font_variant: TextVariantType.DEFAULT,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonLabelTextAreaContainer = {
  min_height: '5.5rem',
  display: 'flex',
  flex_direction: 'column',
  gap: SPACINGS.spacing_0,
  padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_50}`,
  border_style: 'solid',
};

const commonTextArea = {
  resize: 'none',
  border: 'none',
  border_style: 'none',
  background_color: 'transparent',
  padding: SPACINGS.spacing_0,
  flex: 1,
};

const commonPlaceholder = {
  font_size: PARAGRAPH.CAPTION[DeviceBreakpointsType.DESKTOP].font_size,
  line_height: PARAGRAPH.CAPTION[DeviceBreakpointsType.DESKTOP].line_height,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonBottomContainer = {
  display: 'flex',
  width: '100%',
  flex_direction: 'row',
  align_items: 'flex-start',
  justify_content: 'space-between',
  margin_top: SPACINGS.spacing_100,
  padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_50}`,
};

const commonHelpMessageErrorContainer = {
  display: 'flex',
  flex_direction: 'column',
};

const commonHelpMessage = {
  font_variant: TextVariantType.DEFAULT,
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonErrorContainer = {
  display: 'flex',
  align_items: 'center',
  gap: SPACINGS.spacing_100,
  margin_top: SPACINGS.spacing_100,
  margin_bottom: SPACINGS.spacing_100,
};

const commonCounter = {
  font_variant: TextVariantType.DEFAULT,
};

const commonCounterLeft = {
  font_weight: FONT_WEIGHT.font_weight_400,
};

const commonCounterRight = {
  font_weight: FONT_WEIGHT.font_weight_400,
};

export const TEXT_AREA_STYLES: TextAreaStylesType<TextAreaVariantType> = {
  [TextAreaVariantType.DEFAULT]: {
    labelInsideTextArea: true,
    [TextAreaStateType.EMPTY]: {
      container: {
        ...commonContainer,
      },
      titleContainer: {
        ...commonTitleContainer,
      },
      title: {
        ...commonTitle,
      },
      labelTextAreaContainer: {
        ...commonLabelTextAreaContainer,
      },
      label: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      required: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      textArea: {
        ...commonTextArea,
      },
      placeholder: {
        ...commonPlaceholder,
      },
      bottomContainer: {
        ...commonBottomContainer,
      },
      helpMessageErrorContainer: {
        ...commonHelpMessageErrorContainer,
      },
      helpMessage: {
        ...commonHelpMessage,
      },
      counter: {
        ...commonCounter,
      },
      counterLeft: {
        ...commonCounterLeft,
      },
      counterRight: {
        ...commonCounterRight,
      },
      counterVariant: TextCountVariantType.DEFAULT,
    },
    [TextAreaStateType.ACTIVE]: {
      container: {
        ...commonContainer,
      },
      titleContainer: {
        ...commonTitleContainer,
      },
      title: {
        ...commonTitle,
      },
      labelTextAreaContainer: {
        ...commonLabelTextAreaContainer,
      },
      label: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      required: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      textArea: {
        ...commonTextArea,
      },
      placeholder: {
        ...commonPlaceholder,
      },
      bottomContainer: {
        ...commonBottomContainer,
      },
      helpMessageErrorContainer: {
        ...commonHelpMessageErrorContainer,
      },
      helpMessage: {
        ...commonHelpMessage,
      },
      counter: {
        ...commonCounter,
      },
      counterLeft: {
        ...commonCounterLeft,
      },
      counterRight: {
        ...commonCounterRight,
      },
      counterVariant: TextCountVariantType.DEFAULT,
    },
    [TextAreaStateType.FILLED]: {
      container: {
        ...commonContainer,
      },
      titleContainer: {
        ...commonTitleContainer,
      },
      title: {
        ...commonTitle,
      },
      labelTextAreaContainer: {
        ...commonLabelTextAreaContainer,
      },
      label: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      required: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      textArea: {
        ...commonTextArea,
      },
      placeholder: {
        ...commonPlaceholder,
      },
      bottomContainer: {
        ...commonBottomContainer,
      },
      helpMessageErrorContainer: {
        ...commonHelpMessageErrorContainer,
      },
      helpMessage: {
        ...commonHelpMessage,
      },
      counter: {
        ...commonCounter,
      },
      counterLeft: {
        ...commonCounterLeft,
      },
      counterRight: {
        ...commonCounterRight,
      },
      counterVariant: TextCountVariantType.DEFAULT,
    },
    [TextAreaStateType.ERROR]: {
      container: {
        ...commonContainer,
      },
      titleContainer: {
        ...commonTitleContainer,
      },
      title: {
        ...commonTitle,
      },
      labelTextAreaContainer: {
        ...commonLabelTextAreaContainer,
      },
      label: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      required: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      textArea: {
        ...commonTextArea,
      },
      placeholder: {
        ...commonPlaceholder,
      },
      bottomContainer: {
        ...commonBottomContainer,
      },
      helpMessageErrorContainer: {
        ...commonHelpMessageErrorContainer,
      },
      helpMessage: {
        ...commonHelpMessage,
      },
      errorContainer: {
        ...commonErrorContainer,
      },
      errorIcon: {
        width: SPACINGS.spacing_100,
        height: SPACINGS.spacing_100,
      },
      errorMessage: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      counter: {
        ...commonCounter,
      },
      counterLeft: {
        ...commonCounterLeft,
      },
      counterRight: {
        ...commonCounterRight,
      },
      counterVariant: TextCountVariantType.DEFAULT,
    },
    [TextAreaStateType.DISABLED_FILLED]: {
      container: {
        ...commonContainer,
      },
      titleContainer: {
        ...commonTitleContainer,
      },
      title: {
        ...commonTitle,
      },
      labelTextAreaContainer: {
        ...commonLabelTextAreaContainer,
      },
      label: {
        font_variant: TextVariantType.DEFAULT,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      required: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      textArea: {
        ...commonTextArea,
      },
      placeholder: {
        ...commonPlaceholder,
      },
      bottomContainer: {
        ...commonBottomContainer,
      },
      helpMessageErrorContainer: {
        ...commonHelpMessageErrorContainer,
      },
      helpMessage: {
        ...commonHelpMessage,
      },
      counter: {
        ...commonCounter,
      },
      counterLeft: {
        ...commonCounterLeft,
      },
      counterRight: {
        ...commonCounterRight,
      },
      counterVariant: TextCountVariantType.DEFAULT,
    },
    [TextAreaStateType.DISABLED_EMPTY]: {
      container: {
        ...commonContainer,
      },
      titleContainer: {
        ...commonTitleContainer,
      },
      title: {
        ...commonTitle,
      },
      labelTextAreaContainer: {
        ...commonLabelTextAreaContainer,
      },
      label: {
        font_variant: TextVariantType.DEFAULT,

        font_weight: FONT_WEIGHT.font_weight_400,
      },
      required: {
        font_variant: TextVariantType.DEFAULT,
        font_weight: FONT_WEIGHT.font_weight_400,
      },
      textArea: {
        ...commonTextArea,
      },
      placeholder: {
        ...commonPlaceholder,
      },
      bottomContainer: {
        ...commonBottomContainer,
      },
      helpMessageErrorContainer: {
        ...commonHelpMessageErrorContainer,
      },
      helpMessage: {
        ...commonHelpMessage,
      },
      counter: {
        ...commonCounter,
      },
      counterLeft: {
        ...commonCounterLeft,
      },
      counterRight: {
        ...commonCounterRight,
      },
      counterVariant: TextCountVariantType.DEFAULT,
    },
  },
};
