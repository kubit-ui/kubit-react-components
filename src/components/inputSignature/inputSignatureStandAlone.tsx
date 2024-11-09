import React from 'react';

import { Text } from '@/components/text/text';

import {
  InputSignatureCanvasStyled,
  InputSignatureContainerStyled,
  InputSignaturePlaceholderStyled,
} from './inputSignature.styled';
import { IInputSignatureStandAlone } from './types/inputSignature';
import { InputSignatureState } from './types/inputSignatureState';

export const InputSignatureStandAloneComponent = (
  { styles, canvasRef, dataTestid = 'input-signature', ...props }: IInputSignatureStandAlone,
  ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element => {
  const hasPlaceholder =
    props.state === InputSignatureState.DEFAULT ||
    props.state === InputSignatureState.ERROR ||
    props.state === InputSignatureState.DISABLED;

  const currentText =
    props.state === InputSignatureState.ERROR && props.errorText
      ? props.errorText
      : props.placeholder;

  return (
    <InputSignatureContainerStyled
      ref={ref}
      data-testid={dataTestid}
      styles={styles.container}
      tabIndex={-1}
      onBlur={props.onBlurContainer}
      onClick={props.onClickContainer}
    >
      <InputSignatureCanvasStyled ref={canvasRef} data-testid={`${dataTestid}-canvas`} />
      {hasPlaceholder && (
        <InputSignaturePlaceholderStyled styles={styles.placeholderContainer}>
          <Text {...styles.placeholderText} {...currentText}>
            {currentText.content}
          </Text>
        </InputSignaturePlaceholderStyled>
      )}
    </InputSignatureContainerStyled>
  );
};

export const InputSignatureStandAlone = React.forwardRef(InputSignatureStandAloneComponent);
