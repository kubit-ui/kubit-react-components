import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { SelectorBoxFileStandAlone } from './selectorBoxFileStandAlone';
import {
  ISelectorBoxFile,
  ISelectorBoxFileStandAlone,
  SelectorBoxFilePropsStylesType,
} from './types';
import { getState } from './utils';

const SelectorBoxFileComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      variant,
      loading = false,
      success = false,
      error = false,
      disabled = false,
      maxSize,
      fileExtension,
      errorMaxSizeMessage = { content: '' },
      errorFileExtensionMessage = { content: '' },
      errorMessage = { content: '' },
      onSizeError,
      onFileError,
      ctv,
      ...props
    }: ISelectorBoxFile<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<SelectorBoxFilePropsStylesType, V>(
      STYLES_NAME.SELECTOR_BOX_FILE,
      variant,
      ctv
    );
    const [focus, setFocus] = React.useState(false);
    const [validFile, setValidFile] = React.useState({ validSize: true, validExtension: true });

    const onFocus: React.FocusEventHandler<HTMLInputElement> = () => {
      setFocus(true);
    };

    const onBlur: React.FocusEventHandler<HTMLInputElement> = () => {
      setFocus(false);
    };

    const onValidateFile = (files: FileList | null) => {
      if (!files || files.length === 0) {
        return;
      }
      const file = files[0];
      const size = file.size / 1024 / 1024; //mb
      const extension = file.type;
      let _validSize = true;
      let _validFileExtension = true;
      if (maxSize && size > maxSize) {
        _validSize = false;
        onSizeError?.(true);
      }
      if (fileExtension && !fileExtension?.some(substring => extension.includes(substring))) {
        _validFileExtension = false;
        onFileError?.(true);
      }
      setValidFile({ validSize: _validSize, validExtension: _validFileExtension });
    };

    const getErrorMessage = () => {
      if (!validFile.validExtension) {
        return errorFileExtensionMessage;
      }
      if (!validFile.validSize) {
        return errorMaxSizeMessage;
      }
      return errorMessage;
    };

    const hasError = () => {
      return error || !validFile.validExtension || !validFile.validSize;
    };

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = event => {
      onValidateFile(event.target.files);
      props.onChange?.(event);
    };

    return (
      <SelectorBoxFileStandAlone
        {...props}
        ref={ref}
        errorMessage={getErrorMessage()}
        focus={focus}
        state={getState(loading, success, hasError(), disabled)}
        styles={styles}
        onBlur={onBlur}
        onChange={handleOnChange}
        onFocus={onFocus}
      />
    );
  }
);
SelectorBoxFileComponent.displayName = 'SelectorBoxFileComponent';

const SelectorBoxBoundary = <V extends string | unknown>(
  props: ISelectorBoxFile<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <SelectorBoxFileStandAlone
          {...(props as unknown as ISelectorBoxFileStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <SelectorBoxFileComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const SelectorBoxFile = React.forwardRef(SelectorBoxBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ISelectorBoxFile<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof SelectorBoxBoundary>;

export { SelectorBoxFile };
