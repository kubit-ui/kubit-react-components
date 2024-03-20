import { TextVariantType } from '@/designSystem/kubit/components/text/variants';

import { InputBasicStateProps, InputState, LABEL_TYPE } from '../types';
import { getFontSize } from '../utils';

const getStyles = (commonProps: InputBasicStateProps) => {
  return {
    [InputState.EMPTY]: {
      ...commonProps,
    },
    [InputState.ACTIVE]: {
      ...commonProps,
    },
    [InputState.FILLED]: {
      ...commonProps,
    },
    [InputState.ERROR_EMPTY]: {
      ...commonProps,
    },
    [InputState.ERROR_FILLED]: {
      ...commonProps,
    },
    [InputState.DISABLED_FILLED]: {
      ...commonProps,
    },
    [InputState.DISABLED_EMPTY]: {
      ...commonProps,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...commonProps,
    },
  };
};

describe('Utils font size', () => {
  it('Should get label fontSize', () => {
    const commonProps = {
      inputVariant: 'DEFAULT',
      label: {
        type: LABEL_TYPE.STANDARD,
        font_variant: TextVariantType.DEFAULT,
      },
      asterisk: { font_variant: TextVariantType.DEFAULT },
    };
    expect(
      getFontSize(InputState.ACTIVE, 'font_variant', 'label', getStyles(commonProps), undefined)
    ).toBe(TextVariantType.DEFAULT);
  });

  it('Should get label fontSize with placeholder', () => {
    const commonProps = {
      inputVariant: 'DEFAULT',
      label: {
        type: LABEL_TYPE.FILLED,
        font_variant: TextVariantType.DEFAULT,
      },
      asterisk: { font_variant: TextVariantType.DEFAULT },
    };
    expect(
      getFontSize(InputState.FILLED, 'font_variant', 'label', getStyles(commonProps), 'placeholder')
    ).toBe(TextVariantType.DEFAULT);
  });

  it('Should get asterisk fontSize', () => {
    const commonProps = {
      inputVariant: 'DEFAULT',
      label: {
        type: LABEL_TYPE.STANDARD,
        font_variant: TextVariantType.DEFAULT,
      },
      asterisk: { font_variant: TextVariantType.DEFAULT },
    };
    expect(
      getFontSize(InputState.ACTIVE, 'font_variant', 'asterisk', getStyles(commonProps), undefined)
    ).toBe(TextVariantType.DEFAULT);
  });

  it('Should get asterisk fontSize with placeholder', () => {
    const commonProps = {
      inputVariant: 'DEFAULT',
      label: {
        type: LABEL_TYPE.FILLED,
        font_variant: TextVariantType.DEFAULT,
      },
      asterisk: { font_variant: TextVariantType.DEFAULT },
    };
    expect(
      getFontSize(
        InputState.FILLED,
        'font_variant',
        'asterisk',
        getStyles(commonProps),
        'placeholder'
      )
    ).toBe(TextVariantType.DEFAULT);
  });
});
