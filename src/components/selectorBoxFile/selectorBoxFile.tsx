import {
  type ChangeEventHandler,
  type FocusEventHandler,
  type ForwardedRef,
  forwardRef,
  useState,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import { SelectorBoxFileStandAlone } from './selectorBoxFileStandAlone';
import type { SelectorBoxFileProps } from './types/selectorBoxFile';
import { getState } from './utils/state/state';

export const SelectorBoxFile = forwardRef(
  <Variant extends string>(
    {
      additionalClasses,
      disabled = false,
      error = false,
      errorFileExtensionMessage = {
        content: '',
      },
      errorMaxSizeMessage = {
        content: '',
      },
      errorMessage = {
        content: '',
      },
      fileExtension,
      loading = false,
      maxSize,
      onChange,
      onFileError,
      onSizeError,
      percentage = 0,
      success = false,
      variant,
      ...props
    }: SelectorBoxFileProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'SELECTOR_BOX_FILE',
      variant,
    });
    const [focus, setFocus] = useState(false);
    const [validFile, setValidFile] = useState({
      validExtension: true,
      validSize: true,
    });
    const onFocus: FocusEventHandler<HTMLInputElement> = () => {
      setFocus(true);
    };
    const onBlur: FocusEventHandler<HTMLInputElement> = () => {
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
      if (
        fileExtension &&
        !fileExtension?.some((substring) => extension.includes(substring))
      ) {
        _validFileExtension = false;
        onFileError?.(true);
      }
      setValidFile({
        validExtension: _validFileExtension,
        validSize: _validSize,
      });
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
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      onValidateFile(event.target.files);
      onChange?.(event);
    };
    return (
      <SelectorBoxFileStandAlone
        {...props}
        ref={ref}
        cssClasses={cssClasses}
        errorMessage={getErrorMessage()}
        focus={focus}
        percentage={percentage}
        state={getState(loading, success, hasError(), disabled)}
        onBlur={onBlur}
        onChange={handleOnChange}
        onFocus={onFocus}
      />
    );
  },
);
