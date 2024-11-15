import React from 'react';

import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { getMaxLabelSize } from '@/utils/getMaxLabelSize/getMaxLabelSize.utils';

// styles
import { AdditionalInfoWrapperStyled, LabelWrapperStyled } from '../input.styled';
import { ILabel } from '../types/input';
import { LABEL_TYPE } from '../types/inputTheme';
import { getFontSize } from '../utils/fontSize.utils';

export const LabelStandAlone = (props: ILabel): JSX.Element | null => {
  const [maxLabelSize, setMaxLabelSize] = React.useState<string | undefined>(undefined);
  const proceed =
    !!props.label &&
    !!props.inputId &&
    props.styles?.[props.state]?.label?.type !== LABEL_TYPE.OUTLINED;

  React.useEffect(() => {
    setMaxLabelSize(getMaxLabelSize(proceed, props.inputId));
    window.addEventListener('resize', () => {
      setMaxLabelSize(getMaxLabelSize(proceed, props.inputId));
    });
    return () => {
      window.removeEventListener('resize', () => {
        setMaxLabelSize(getMaxLabelSize(proceed, props.inputId));
      });
    };
  }, []);

  return props.label ? (
    <LabelWrapperStyled
      $maxLabelSize={maxLabelSize}
      $placeholder={props.placeholder}
      leftExtraStyles={props.leftExtraStyles}
      state={props.state}
      styles={props.styles?.[props.state]}
      topExtraStyles={props.topExtraStyles}
    >
      <Label
        asteriskColor={props.styles?.[props.state]?.asterisk?.color}
        asteriskVariant={getFontSize(
          props.state,
          'font_variant',
          'asterisk',
          props.styles,
          props.placeholder
        )}
        asteriskWeight={props.styles?.[props.state]?.asterisk?.font_weight}
        color={props.styles?.[props.state]?.label?.color}
        id={props.id}
        inputId={props.inputId}
        required={props.required}
        textVariant={getFontSize(
          props.state,
          'font_variant',
          'label',
          props.styles,
          props.placeholder
        )}
        weight={props.styles?.[props.state]?.label?.font_weight}
        {...props.label}
      >
        {props.label.content}
        {!props.required && props.secondaryLabel ? props.secondaryLabel : null}
      </Label>
      <AdditionalInfoWrapperStyled styles={props.styles?.[props.state]}>
        {props.additionalInfo}
      </AdditionalInfoWrapperStyled>
    </LabelWrapperStyled>
  ) : null;
};
