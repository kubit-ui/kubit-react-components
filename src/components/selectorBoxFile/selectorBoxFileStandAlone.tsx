import * as React from 'react';

import { useId } from '@/hooks';

// internal components
import {
  SelectorBoxFileContainerBox,
  SelectorBoxFileErrorMessage,
  SelectorBoxFileHeader,
} from './components';
import {
  HeaderContainerBoxWrapperStyled,
  HiddenInputFile,
  WrapperStyled,
} from './selectorBoxFile.styled';
import { ISelectorBoxFileStandAlone, SelectorBoxFileStateType } from './types';

const SelectorBoxFileStandAloneComponent = (
  { dataTestId = 'selectorBoxFile', ...props }: ISelectorBoxFileStandAlone,
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
          <SelectorBoxFileContainerBox
            containerBoxStateContent={props.containerBoxStateContent}
            filename={props.filename}
            focus={props.focus}
            htmlFor={inputId}
            state={props.state}
            styles={props.styles}
          />
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
        type="file"
        onBlur={props.onBlur}
        onChange={props.onChange}
        onClick={props.onClick}
        onFocus={props.onFocus}
      />
    </div>
  );
};

export const SelectorBoxFileStandAlone = React.forwardRef(SelectorBoxFileStandAloneComponent);
