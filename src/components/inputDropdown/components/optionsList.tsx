import React, { ForwardedRef, forwardRef, useCallback, useMemo } from 'react';

import { ListOptions } from '@/components/listOptions/listOptions';
import { keyDownMove, keyUpMove } from '@/components/listOptions/utils';

import { MultipleRef } from '../hooks/useInputDropdown';
import { IOptionsListDropdownList } from '../types';
import { LoadingIcon } from './loadingIcon';

export const OptionsListComponent = (
  props: IOptionsListDropdownList,
  ref: ForwardedRef<unknown>
): JSX.Element => {
  const { refInput, refList } = ref as unknown as MultipleRef;

  const roveFocusProps = useMemo(
    () => ({
      size: props.optionList.options.length,
      keyDownMove: keyDownMove(props.optionList.options),
      keyUpMove,
      currentFocusSelected: -1,
      keyRightMove: 0,
      keyLeftMove: 0,
      keyTabMove: null,
    }),
    [props.optionList.options]
  );

  const sendRef = useCallback(node => {
    (refList as ({ ref, index }) => void)({ ref: node, index: 0 });
  }, []);

  return (
    <>
      {props.stylesListOption?.optionVariant && props.stylesListOption?.variant && (
        <ListOptions
          ref={sendRef}
          charsHighlighted={props.searchText?.toString()}
          dataTestId={props.dataTestId}
          id={props['aria-controls']}
          optionVariant={props.stylesListOption.optionVariant}
          options={props.optionList.options}
          optionsContainerArias={{
            ['aria-label']: props.optionList['aria-label'],
            ['aria-labelledby']: props.optionList['aria-labelledby'],
          }}
          roveFocus={roveFocusProps}
          selectedValue={props.value}
          variant={props.stylesListOption.variant}
          onOptionClick={value => {
            props.onValueSelected(value);
            props.onOpenOptions(false);
            refInput?.current?.focus();
          }}
        />
      )}

      <LoadingIcon
        loader={props.loader}
        loading={props.loading}
        loadingText={props.loadingText}
        optionList={props.optionList}
        stateStyles={props.stylesState}
      />
    </>
  );
};

export const OptionsList = forwardRef(OptionsListComponent);
