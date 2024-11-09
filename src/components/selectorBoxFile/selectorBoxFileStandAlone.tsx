import React from 'react';

import { useId } from '@/hooks/useId/useId';

// internal components
import { SelectorBoxFileAnimation } from './components/selectorBoxFileAnimation';
import { SelectorBoxFileContainerBox } from './components/selectorBoxFileContainerBox';
import { SelectorBoxFileErrorMessage } from './components/selectorBoxFileErrorMessage';
import { SelectorBoxFileHeader } from './components/selectorBoxFileHeader';
import {
  HeaderContainerBoxWrapperStyled,
  HiddenInputFile,
  WrapperStyled,
} from './selectorBoxFile.styled';
import { ISelectorBoxFileStandAlone } from './types/selectorBoxFile';
import { SelectorBoxFileStateType } from './types/state';

const SelectorBoxFileStandAloneComponent = (
  { dataTestId = 'selector-box-file', ...props }: ISelectorBoxFileStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('selectorBoxFile');
  const inputId = props.id ?? uniqueId;
  const inputHeaderId = `${inputId}HeaderId`;
  const inputErrorId = `${inputId}ErrorId`;

  const getAriaDescribedBy = () => {
    let res = '';
    if (props.title || props.subtitle) {
      res += ` ${inputHeaderId}`;
    }
    if (props.state === SelectorBoxFileStateType.ERROR && props.errorMessage) {
      res += ` ${inputErrorId}`;
    }
    return res || undefined;
  };

  return (
    <div ref={ref}>
      <WrapperStyled data-testid={dataTestId}>
        <HeaderContainerBoxWrapperStyled styles={props.styles}>
          {(props.title || props.subtitle) && (
            <SelectorBoxFileHeader
              button={props.button}
              description={props.description}
              headerId={inputHeaderId}
              styles={props.styles}
              subtitle={props.subtitle}
              title={props.title}
              tooltip={props.tooltip}
              tooltipIcon={props.tooltipIcon}
            />
          )}
          {/* The data-focus is controlled in SelectorBoxFileAnimation */}
          <SelectorBoxFileAnimation
            dataTestId={dataTestId}
            focus={props.focus}
            percentage={props.percentage}
            state={props.state}
            styles={props.styles}
            onAnimationCompleted={props.onAnimationCompleted}
          >
            <SelectorBoxFileContainerBox
              containerBoxStateContent={props.containerBoxStateContent}
              filename={props.filename}
              htmlFor={inputId}
              state={props.state}
              styles={props.styles}
            />
          </SelectorBoxFileAnimation>
        </HeaderContainerBoxWrapperStyled>
        <SelectorBoxFileErrorMessage
          errorMessage={props.errorMessage}
          errorMessageIcon={props.errorMessageIcon}
          errorMessageId={inputErrorId}
          state={props.state}
          styles={props.styles}
        />
      </WrapperStyled>
      <HiddenInputFile
        accept={props.accept}
        aria-describedby={getAriaDescribedBy()}
        disabled={props.state === SelectorBoxFileStateType.DISABLED}
        id={inputId}
        multiple={props.multiple}
        name={props.name}
        type={'file'}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onClick={props.onClick}
        onFocus={props.onFocus}
      />
    </div>
  );
};

export const SelectorBoxFileStandAlone = React.forwardRef(SelectorBoxFileStandAloneComponent);
