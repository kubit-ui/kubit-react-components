import * as React from 'react';
import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react';

import { ListOptions } from '@/components/listOptions/listOptions';

import { MultipleRef } from '../hooks/useInputSearch';
import { IOptionsListSearchList } from '../types';
import { LoadingIcon } from './loadingIcon';

export const OptionsListComponent = (
  props: IOptionsListSearchList,
  ref: ForwardedRef<unknown>
): JSX.Element => {
  const { refInput, refList } = ref as unknown as MultipleRef;

  const formmattedOptions = props.options.map(option => {
    if (typeof option === 'string') {
      return { label: option, value: option };
    }
    return option;
  });

  const roveFocusProps = useMemo(
    () => ({
      size: props.options.length,
      keyDownMove: null,
      keyUpMove: null,
      currentFocusSelected: -1,
      keyRightMove: 0,
      keyLeftMove: 0,
      keyTabMove: null,
    }),
    [props.options]
  );

  const sendRef = useCallback(node => {
    (refList as ({ ref, index }) => void)({ ref: node, index: props.index });
  }, []);

  const _options = props.hightlightedOption
    ? [props.hightlightedOption, ...formmattedOptions]
    : formmattedOptions;

  return (
    <>
      {props.stylesListOption?.optionVariant && props.stylesListOption?.variant && (
        <ListOptions
          ref={sendRef}
          caseSensitive={props.caseSensitive}
          charsHighlighted={props.searchText?.toString()}
          dataTestId={props.dataTestId}
          hightlightedOptionVariant={props.stylesListOption?.hightlightedOptionVariant}
          id={props['aria-controls']}
          optionVariant={props.optionVariant ?? props.stylesListOption?.optionVariant}
          options={_options}
          roveFocus={roveFocusProps}
          selectedValue={props.value}
          title={props.title}
          variant={props.listOptionsVariant ?? props.stylesListOption?.variant}
          onOptionClick={value => {
            props.onValueSelected(value);
            props.onOpenOptions(false);
            refInput?.current?.focus();
          }}
        />
      )}
      <LoadingIcon
        expanded={_options.length === 0}
        loader={props.loader}
        loading={props.loading}
        loadingText={props.loadingText}
        stateStyles={props.stylesState}
      />
    </>
  );
};

export const OptionsList = forwardRef(OptionsListComponent);
